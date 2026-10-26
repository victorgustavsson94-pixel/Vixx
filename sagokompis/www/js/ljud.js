/* Sagokompis – ljudvärld.
   Mjuka bakgrundsljud som skapas direkt i appen med Web Audio (inga ljudfiler):
   vågor vid havet, vind på fjället, sus och en uggla i skogen, en svävande ton i
   rymden, en sprakande brasa på slottet och en stilla speldosa i barnets rum.
   Allt ligger på låg volym under uppläsningen och tonas in och ut mjukt. */
(function () {
  const S = window.Sagokompis;
  let ctx = null;
  let huvud = null;
  let aktiv = null; // { plats, stoppa() }
  let pa = true;

  function hamtaCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      huvud = ctx.createGain();
      huvud.gain.value = 0;
      huvud.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function brus(c, sekunder) {
    // Brunt brus: mjukt och mörkt, låter som hav och vind.
    const buffer = c.createBuffer(1, c.sampleRate * sekunder, c.sampleRate);
    const d = buffer.getChannelData(0);
    let sist = 0;
    for (let i = 0; i < d.length; i++) {
      sist = (sist + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      d[i] = sist * 3.2;
    }
    const kalla = c.createBufferSource();
    kalla.buffer = buffer;
    kalla.loop = true;
    return kalla;
  }

  function lfo(c, mal, frekvens, djup, mitt) {
    const o = c.createOscillator();
    const g = c.createGain();
    o.frequency.value = frekvens;
    g.gain.value = djup;
    o.connect(g);
    g.connect(mal);
    mal.value = mitt;
    o.start();
    return o;
  }

  function ton(c, ut, frekvens, start, langd, styrka, typ) {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = typ || 'sine';
    o.frequency.value = frekvens;
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(styrka, start + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, start + langd);
    o.connect(g);
    g.connect(ut);
    o.start(start);
    o.stop(start + langd + 0.1);
  }

  const LJUDBILDER = {
    hav(c, ut) {
      const b = brus(c, 6); const f = c.createBiquadFilter(); const g = c.createGain();
      f.type = 'lowpass'; f.frequency.value = 650;
      b.connect(f); f.connect(g); g.connect(ut);
      const l = lfo(c, g.gain, 0.12, 0.35, 0.45);
      b.start();
      return () => { b.stop(); l.stop(); };
    },
    fjall(c, ut) {
      const b = brus(c, 6); const f = c.createBiquadFilter(); const g = c.createGain();
      f.type = 'bandpass'; f.Q.value = 0.8;
      b.connect(f); f.connect(g); g.connect(ut);
      const l1 = lfo(c, f.frequency, 0.07, 260, 520);
      const l2 = lfo(c, g.gain, 0.05, 0.2, 0.35);
      b.start();
      return () => { b.stop(); l1.stop(); l2.stop(); };
    },
    skog(c, ut) {
      const b = brus(c, 6); const f = c.createBiquadFilter(); const g = c.createGain();
      f.type = 'lowpass'; f.frequency.value = 380; g.gain.value = 0.25;
      b.connect(f); f.connect(g); g.connect(ut);
      b.start();
      const uggla = setInterval(() => {
        const t = c.currentTime + 0.1;
        ton(c, ut, 392, t, 0.45, 0.05); ton(c, ut, 330, t + 0.55, 0.7, 0.05);
      }, 14000);
      return () => { b.stop(); clearInterval(uggla); };
    },
    rymden(c, ut) {
      const g = c.createGain(); g.gain.value = 0.05; g.connect(ut);
      const oscar = [130.8, 196, 261.6, 329.6].map((fr, i) => {
        const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = fr;
        o.detune.value = i * 3; o.connect(g); o.start(); return o;
      });
      const l = lfo(c, g.gain, 0.08, 0.025, 0.05);
      const glitter = setInterval(() => ton(c, ut, [1046, 1318, 1568, 2093][Math.floor(Math.random() * 4)], c.currentTime + 0.05, 1.6, 0.02), 3500);
      return () => { oscar.forEach((o) => o.stop()); l.stop(); clearInterval(glitter); };
    },
    slott(c, ut) {
      const b = brus(c, 4); const f = c.createBiquadFilter(); const g = c.createGain();
      f.type = 'lowpass'; f.frequency.value = 220; g.gain.value = 0.2;
      b.connect(f); f.connect(g); g.connect(ut); b.start();
      // Sprakande brasa: korta, mjuka knäpp.
      const sprak = setInterval(() => {
        if (Math.random() < 0.6) {
          const t = c.currentTime + Math.random() * 0.3;
          ton(c, ut, 1400 + Math.random() * 1600, t, 0.03, 0.03, 'triangle');
        }
      }, 260);
      return () => { b.stop(); clearInterval(sprak); };
    },
    rum(c, ut) {
      // Stilla speldosa i pentaton skala.
      const skala = [523.3, 587.3, 659.3, 784, 880, 1046.5];
      let i = 0;
      const melodi = setInterval(() => {
        const fr = skala[(i * 3 + (i % 2)) % skala.length];
        ton(c, ut, fr, c.currentTime + 0.05, 2.2, 0.035, 'triangle');
        if (i % 4 === 0) ton(c, ut, fr / 2, c.currentTime + 0.05, 2.6, 0.02);
        i++;
      }, 1700);
      return () => clearInterval(melodi);
    }
  };

  function tona(mal, sekunder) {
    if (!ctx) return;
    const nu = ctx.currentTime;
    huvud.gain.cancelScheduledValues(nu);
    huvud.gain.setValueAtTime(huvud.gain.value, nu);
    huvud.gain.linearRampToValueAtTime(mal, nu + sekunder);
  }

  function starta(plats) {
    if (!pa) return;
    const c = hamtaCtx();
    if (!c) return;
    if (aktiv && aktiv.plats === plats) { tona(0.5, 2); return; }
    stoppa(true);
    const stoppfn = (LJUDBILDER[plats] || LJUDBILDER.rum)(c, huvud);
    aktiv = { plats, stoppa: stoppfn };
    tona(0.5, 3);
  }

  function stoppa(direkt) {
    if (!aktiv) return;
    const gammal = aktiv;
    aktiv = null;
    if (direkt || !ctx) { try { gammal.stoppa(); } catch (e) { /* redan stoppad */ } return; }
    tona(0, 2.5);
    setTimeout(() => { try { gammal.stoppa(); } catch (e) { /* redan stoppad */ } }, 2700);
  }

  S.ljud = {
    stods: !!(window.AudioContext || window.webkitAudioContext),
    starta,
    stoppa,
    sattPa(varde) { pa = varde; if (!varde) stoppa(); },
    get pa() { return pa; }
  };
})();
