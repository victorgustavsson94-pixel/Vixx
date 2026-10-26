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
    tala(text, tempo) {
      return new Promise((klar, fel) => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'sv-SE';
        if (this.rost) u.voice = this.rost;
        u.rate = tempo;
        u.pitch = 1.05;
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
    tala(text, tempo) { return nativPlugin().speak({ text, lang: 'sv-SE', rate: tempo, pitch: 1.05, volume: 1, category: 'playback' }); },
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

  /* Skapar en uppläsare för en saga.
     handelser: { scen(i), stycke(scenIndex, styckeIndex), klar(), fel(meddelande), status(spelar) } */
  function skapaUpplasare(saga, handelser) {
    const motor = nativ.stod() ? nativ : webb.stod() ? webb : null;
    const delar = [];
    saga.scener.forEach((scen, si) => {
      scen.stycken.forEach((stycke, pi) => {
        delaIMeningar(stycke).forEach((text) => delar.push({ scen: si, stycke: pi, text }));
      });
    });

    let pos = 0;
    let spelar = false;
    let tempo = 0.95;
    let varv = 0; // ökas vid varje stopp, så att gamla löften ignoreras

    async function korFran(start) {
      const mittVarv = ++varv;
      spelar = true;
      handelser.status(true);
      for (pos = start; pos < delar.length; pos++) {
        const d = delar[pos];
        handelser.stycke(d.scen, d.stycke);
        try {
          await motor.tala(d.text, tempo);
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

  S.tal = { skapaUpplasare, delaIMeningar };
})();
