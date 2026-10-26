/* Sagokompis – uppläsning med text-till-tal.
   I iPhone-appen (Capacitor) används det inbyggda talet i iOS via pluginet
   @capacitor-community/text-to-speech. I webbläsaren används Web Speech API.
   Texten läses mening för mening. Det gör att paus och tempoändring kan
   fortsätta från rätt mening, och att scenbilden byts exakt när uppläsningen
   når nästa scen. */
(function () {
  const S = window.Sagokompis;

  function nativPlugin() {
    const cap = window.Capacitor;
    if (!cap || !cap.isNativePlatform || !cap.isNativePlatform()) return null;
    return (cap.Plugins && cap.Plugins.TextToSpeech) || null;
  }

  const webb = {
    namn: 'webb',
    rost: null,
    stod() { return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window; },
    async forbered() {
      const valj = () => {
        const roster = window.speechSynthesis.getVoices();
        this.rost = roster.find((r) => /^sv(-|_|$)/i.test(r.lang) && /alva|klara|oskar/i.test(r.name)) ||
          roster.find((r) => /^sv(-|_|$)/i.test(r.lang)) || null;
        return roster.length > 0;
      };
      if (valj()) return { svenskRost: !!this.rost };
      // Rösterna laddas ibland in efter en stund.
      await new Promise((klar) => {
        const t = setTimeout(klar, 1500);
        window.speechSynthesis.addEventListener('voiceschanged', () => { clearTimeout(t); klar(); }, { once: true });
      });
      valj();
      return { svenskRost: !!this.rost };
    },
    tala(text, tempo, ton) {
      return new Promise((klar, fel) => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'sv-SE';
        if (this.rost) u.voice = this.rost;
        u.rate = tempo;
        u.pitch = ton || 1.05;
        u.onend = () => klar();
        u.onerror = (e) => (e.error === 'interrupted' || e.error === 'canceled' ? klar() : fel(new Error(e.error || 'talfel')));
        window.speechSynthesis.speak(u);
      });
    },
    stoppa() { window.speechSynthesis.cancel(); }
  };

  const nativ = {
    namn: 'nativ',
    stod() { return !!nativPlugin(); },
    async forbered() {
      try {
        const { languages } = await nativPlugin().getSupportedLanguages();
        return { svenskRost: (languages || []).some((l) => /^sv/i.test(l)) };
      } catch (e) {
        return { svenskRost: true };
      }
    },
    // AVSpeechSynthesizer har en annan skala än webben: 1.0 är normalt.
    tala(text, tempo, ton) { return nativPlugin().speak({ text, lang: 'sv-SE', rate: tempo, pitch: ton || 1.05, volume: 1, category: 'playback' }); },
    stoppa() { try { nativPlugin().stop(); } catch (e) { /* ignorera */ } }
  };

  function delaIMeningar(stycke) {
    const delar = stycke.match(/[^.!?…]+[.!?…]+[”"]?\s*|[^.!?…]+$/g) || [stycke];
    // Slå ihop mycket korta delar (t.ex. "Plipp.") med nästa, så att rösten flyter.
    const ut = [];
    for (const d of delar.map((x) => x.trim()).filter(Boolean)) {
      if (ut.length && ut[ut.length - 1].length < 12) ut[ut.length - 1] += ' ' + d;
      else ut.push(d);
    }
    return ut;
  }

  /* Är stycket en replik från kompisen? Då får kompisen en egen, ljusare röst. */
  function arKompisReplik(stycke, figurNamn) {
    if (!/^–/.test(stycke) || !figurNamn) return false;
    const namn = figurNamn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(sa|frågade|viskade|ropade|svarade|hoade|pep|log)\\s+' + namn + '(\\s|[.,!?]|$)').test(stycke.split(/[.!?]\s+–/)[0]);
  }

  /* Delar upp sagan i meningar, med pauser för val och hjälp till-moment. */
  function byggDelar(saga) {
    const delar = [];
    saga.scener.forEach((scen, si) => {
      scen.stycken.forEach((stycke, pi) => {
        const ton = arKompisReplik(stycke, saga.figur.namn) ? 1.35 : 1.05;
        delaIMeningar(stycke).forEach((text) => delar.push({ scen: si, stycke: pi, text, ton }));
        if (scen.val && !scen.val.valt && scen.val.efter === pi) delar.push({ scen: si, stycke: pi, paus: 'val', text: scen.val.fraga });
        if (scen.hjalp && !scen.hjalp.klar && scen.hjalp.efter === pi) delar.push({ scen: si, stycke: pi, paus: 'hjalp', text: scen.hjalp.uppmaning });
      });
    });
    return delar;
  }

  /* Skapar en uppläsare för en saga.
     handelser: { stycke(scenIndex, styckeIndex), klar(), fel(meddelande), status(spelar),
                  paus(del) → Promise som löses med en ny saga när barnet har valt eller hjälpt till } */
  function skapaUpplasare(saga, handelser) {
    const motor = nativ.stod() ? nativ : webb.stod() ? webb : null;
    let delar = byggDelar(saga);
    let pos = 0;
    let spelar = false;
    let tempo = 0.95;
    let varv = 0; // ökas vid varje stopp, så att gamla löften ignoreras

    function hittaEfter(si, pi) {
      const i = delar.findIndex((d) => d.scen > si || (d.scen === si && d.stycke > pi));
      return i < 0 ? delar.length : i;
    }

    async function korFran(start) {
      const mittVarv = ++varv;
      spelar = true;
      handelser.status(true);
      for (pos = start; pos < delar.length; pos++) {
        const d = delar[pos];
        handelser.stycke(d.scen, d.stycke);
        try {
          if (d.paus) {
            await motor.tala(d.text, tempo, 1.15);
            if (mittVarv !== varv) return;
            handelser.status('vantar');
            const ny = await handelser.paus(d);
            if (mittVarv !== varv) return;
            handelser.status(true);
            if (d.paus === 'hjalp') {
              const scen = ny.scener[d.scen];
              if (scen.hjalp) await motor.tala(scen.hjalp.klart, tempo, 1.15);
              if (mittVarv !== varv) return;
            }
            delar = byggDelar(ny);
            pos = hittaEfter(d.scen, d.stycke) - 1;
            continue;
          }
          await motor.tala(d.text, tempo, d.ton);
        } catch (e) {
          if (mittVarv !== varv) return;
          spelar = false;
          handelser.status(false);
          handelser.fel('Uppläsningen avbröts. Tryck på spela för att försöka igen.');
          return;
        }
        if (mittVarv !== varv) return;
      }
      spelar = false;
      pos = delar.length - 1;
      handelser.status(false);
      handelser.klar();
    }

    return {
      stods: !!motor,
      motor: motor ? motor.namn : null,
      forbered: () => (motor ? motor.forbered() : Promise.resolve({ svenskRost: false })),
      get spelar() { return spelar; },
      get position() { return pos; },
      spela() {
        if (!motor) return;
        if (pos >= delar.length) pos = 0;
        korFran(pos);
      },
      pausa() {
        varv++;
        spelar = false;
        if (motor) motor.stoppa();
        handelser.status(false);
      },
      borjaOm() {
        varv++;
        if (motor) motor.stoppa();
        pos = 0;
        setTimeout(() => korFran(0), 150);
      },
      sattTempo(nytt) {
        tempo = nytt;
        if (spelar) {
          varv++;
          motor.stoppa();
          setTimeout(() => korFran(pos), 150);
        }
      },
      /* Byter till en ombyggd saga (efter ett val) utan att tappa platsen. */
      bytSaga(ny) {
        const nu = delar[pos] || delar[0];
        delar = byggDelar(ny);
        if (!spelar) pos = Math.max(0, delar.findIndex((d) => d.scen === nu.scen && d.stycke >= nu.stycke && !d.paus));
      },
      /* Hoppa till början av en scen. Fortsätter läsa om uppläsningen var igång. */
      gaTillScen(si) {
        const forsta = delar.findIndex((d) => d.scen === si);
        if (forsta < 0) return;
        const varIgang = spelar;
        varv++;
        if (motor) motor.stoppa();
        pos = forsta;
        if (varIgang) setTimeout(() => korFran(forsta), 150);
        else { spelar = false; handelser.status(false); }
      },
      sattPosition(p) { pos = Math.max(0, Math.min(delar.length - 1, p || 0)); },
      scenForPosition(p) { return (delar[p] || delar[0]).scen; },
      stoppa() { varv++; spelar = false; if (motor) motor.stoppa(); }
    };
  }

  S.tal = { skapaUpplasare, delaIMeningar, arKompisReplik };
})();
