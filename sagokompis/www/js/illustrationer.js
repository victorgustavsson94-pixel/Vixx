/* Sagokompis – illustrationer.
   Varje scen har en bildbeskrivning i sagofilen, t.ex.
     'natt | hemma | stjarnfigur 235 222 1.1 | barn 120 | figur 320'
   Första delen är ljusstämningen (kvall, natt, mork, varm, somn).
   Flaggor: hemma (sovrummet), inne (inomhus), rymd, grottinne, ingen (inga figurer), sov.
   barn X [Y] / figur X [Y] placerar barnet och kompisen.
   Övriga delar är föremål: namn x y skala, i en bild som är 400 × 300.

   Bilderna ritas som SVG utifrån plats och figur, så de följer barnets val.
   De är prototypbilder: när riktiga illustrationer finns läggs de som
   illustrationer/<sagaId>/scen-<n>.png och listas i illustrationer/fardiga.js. */
(function () {
  const S = window.Sagokompis;
  const MARK = 252;

  const HIMMEL = {
    kvall: ['#363c78', '#7f72b8', '#e3a7b6'],
    natt: ['#141c3d', '#28346c', '#4b4f8f'],
    mork: ['#0e1327', '#1b2345', '#2b305e'],
    varm: ['#2b2f63', '#5a4e8e', '#c99ab0'],
    somn: ['#0c1230', '#18214c', '#273163']
  };

  // Enkel slump som alltid ger samma bild för samma scen.
  function slump(fro) {
    let h = 2166136261;
    for (let i = 0; i < fro.length; i++) h = Math.imul(h ^ fro.charCodeAt(i), 16777619);
    return function () {
      h += 0x6d2b79f5;
      let t = h;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function g(x, y, s, inner, klass) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"' + (klass ? ' class="' + klass + '"' : '') + '>' + inner + '</g>';
  }

  function stjarnor(r, antal, maxY) {
    let ut = '';
    for (let i = 0; i < antal; i++) {
      const x = (r() * 400).toFixed(1), y = (r() * maxY).toFixed(1), rad = (0.6 + r() * 1.4).toFixed(2);
      ut += '<circle cx="' + x + '" cy="' + y + '" r="' + rad + '" fill="#fff6dc" opacity="' + (0.45 + r() * 0.5).toFixed(2) + '"' + (i % 4 === 0 ? ' class="glimt" style="animation-delay:' + (r() * 6).toFixed(1) + 's"' : '') + '/>';
    }
    return ut;
  }

  function mane(x, y, s) {
    return g(x, y, s, '<circle r="26" fill="#fff1c9" opacity="0.18"/><circle r="18" fill="#fbe9b7"/><circle cx="7" cy="-5" r="16" fill="var(--maneskugga,#2a3266)" opacity="0.0"/>' +
      '<circle cx="-6" cy="-4" r="3" fill="#efd79b"/><circle cx="5" cy="6" r="2.2" fill="#efd79b"/>');
  }

  /* ---------- Bakgrunder ---------- */

  function rumBakgrund(stamning, r, sov) {
    const vagg = stamning === 'kvall' ? '#5d5a9a' : stamning === 'varm' ? '#5b4e86' : '#343c74';
    let ut = '<rect width="400" height="300" fill="' + vagg + '"/>';
    // tapetmönster
    for (let x = 20; x < 400; x += 46) for (let y = 20; y < 210; y += 46) ut += '<circle cx="' + x + '" cy="' + y + '" r="2" fill="#ffffff" opacity="0.07"/>';
    // fönster
    const h = HIMMEL[stamning] || HIMMEL.natt;
    ut += '<rect x="256" y="34" width="108" height="98" rx="14" fill="#e9dcc3"/>' +
      '<rect x="263" y="41" width="94" height="84" rx="9" fill="' + h[0] + '"/>' +
      '<g clip-path="url(#fonsterKlipp)">' + stjarnor(r, 14, 125).replace(/cx="(\d+(\.\d+)?)"/g, (m, v) => 'cx="' + (263 + (parseFloat(v) / 400) * 94).toFixed(1) + '"').replace(/cy="(\d+(\.\d+)?)"/g, (m, v) => 'cy="' + (41 + (parseFloat(v) / 125) * 84).toFixed(1) + '"') + '</g>' +
      '<rect x="308" y="41" width="4" height="84" fill="#e9dcc3"/><rect x="263" y="81" width="94" height="4" fill="#e9dcc3"/>' +
      '<path d="M250 30 q16 60 4 108 l-10 0 q4 -60 -8 -108z" fill="#c98aa4" opacity="0.85"/><path d="M370 30 q-16 60 -4 108 l10 0 q-4 -60 8 -108z" fill="#c98aa4" opacity="0.85"/>';
    // hylla
    ut += '<rect x="286" y="168" width="92" height="7" rx="3" fill="#b88a64"/>' +
      '<rect x="292" y="148" width="9" height="20" rx="2" fill="#7fb59a"/><rect x="303" y="152" width="8" height="16" rx="2" fill="#e9b8c9"/><rect x="313" y="146" width="10" height="22" rx="2" fill="#f2cf8d"/>';
    // golv och matta
    ut += '<rect y="236" width="400" height="64" fill="#7a5a74"/><rect y="236" width="400" height="4" fill="#5f4560"/>' +
      '<ellipse cx="200" cy="270" rx="150" ry="20" fill="#a77aa0" opacity="0.8"/><ellipse cx="200" cy="270" rx="120" ry="13" fill="none" stroke="#e6c3d8" stroke-width="2" stroke-dasharray="6 6" opacity="0.6"/>';
    // nattlampa
    ut += '<circle cx="34" cy="228" r="26" fill="#ffd99a" opacity="0.18"/><path d="M24 236 h20 l-4 -18 h-12z" fill="#f6c97c"/><rect x="31" y="236" width="6" height="4" fill="#b88a64"/>';
    if (!sov) {
      ut += '<g opacity="0.95"><rect x="52" y="196" width="104" height="44" rx="10" fill="#8d6c99"/><rect x="58" y="186" width="92" height="30" rx="12" fill="#c7b8e8"/>' +
        '<rect x="60" y="180" width="34" height="16" rx="8" fill="#fff4dc"/><rect x="50" y="170" width="10" height="70" rx="5" fill="#b88a64"/><rect x="148" y="186" width="10" height="54" rx="5" fill="#b88a64"/></g>';
    }
    return ut;
  }

  function himmel(stamning, r, utomhusStjarnor) {
    const h = HIMMEL[stamning] || HIMMEL.natt;
    let ut = '<rect width="400" height="300" fill="url(#himmel)"/>';
    if (utomhusStjarnor) ut += stjarnor(r, stamning === 'kvall' ? 18 : 44, 170);
    return ut;
  }

  function gran(x, y, s, farg) {
    return g(x, y, s, '<rect x="-3" y="-6" width="6" height="12" fill="#3d2f3f"/>' +
      '<path d="M0 -70 L-18 -38 L-10 -38 L-24 -14 L-14 -14 L-30 6 L30 6 L14 -14 L24 -14 L10 -38 L18 -38z" fill="' + farg + '"/>');
  }

  function platsBakgrund(platsId, stamning, r, flaggor) {
    const stjarnhimmel = stamning !== 'kvall' || platsId === 'rymden';
    if (flaggor.grottinne) {
      return '<rect width="400" height="300" fill="#1a1838"/>' +
        '<path d="M0 0 H400 V300 H0z M40 300 Q30 120 120 70 Q200 30 280 70 Q370 120 360 300z" fill="#2b2652" fill-rule="evenodd"/>' +
        '<path d="M60 300 Q60 150 130 100 Q200 70 270 100 Q340 150 340 300z" fill="#221f45"/>' +
        '<path d="M110 82 l6 18 l6 -16 M190 58 l5 22 l5 -20 M262 78 l6 16 l5 -14" fill="#2b2652"/>' +
        '<rect y="250" width="400" height="50" fill="#2e2a55"/><ellipse cx="200" cy="262" rx="140" ry="10" fill="#3a3466"/>';
    }
    if (flaggor.under && platsId === 'hav') {
      let ut = '<rect width="400" height="300" fill="#1c3566"/><rect width="400" height="300" fill="url(#himmel)" opacity="0.35"/>' +
        '<path d="M0 0 L60 0 L-20 300 L-60 300z M140 0 L180 0 L120 300 L60 300z" fill="#cfe0f6" opacity="0.05"/>';
      for (let i = 0; i < 7; i++) {
        const x = 20 + i * 60 + r() * 20;
        ut += '<path d="M' + x.toFixed(0) + ' 300 q-12 -40 0 -80 q12 -40 0 -80" fill="none" stroke="#3f7f6f" stroke-width="7" stroke-linecap="round" opacity="0.7" class="gunga"/>';
      }
      for (let i = 0; i < 14; i++) ut += '<circle cx="' + (r() * 400).toFixed(0) + '" cy="' + (r() * 240).toFixed(0) + '" r="' + (1 + r() * 3).toFixed(1) + '" fill="none" stroke="#cfe0f6" opacity="0.5"/>';
      return ut + '<path d="M0 262 Q200 246 400 264 V300 H0z" fill="#c9b48f"/>';
    }
    if (flaggor.rymd) platsId = 'rymden';
    if (platsId === 'rum') return rumBakgrund(stamning, r, flaggor.sov);
    if (platsId === 'slott' && flaggor.inne) {
      let ut = '<rect width="400" height="300" fill="#4a3f74"/>';
      for (let y = 10; y < 240; y += 22) for (let x = (y / 22) % 2 ? 0 : 22; x < 400; x += 44) ut += '<rect x="' + x + '" y="' + y + '" width="42" height="20" rx="3" fill="#54487f" opacity="0.6"/>';
      [70, 200, 330].forEach((x) => {
        ut += '<path d="M' + (x - 26) + ' 160 V70 Q' + x + ' 30 ' + (x + 26) + ' 70 V160z" fill="#e2cfa8"/>' +
          '<path d="M' + (x - 20) + ' 156 V72 Q' + x + ' 40 ' + (x + 20) + ' 72 V156z" fill="' + (HIMMEL[stamning] || HIMMEL.natt)[1] + '"/>' +
          '<rect x="' + (x - 1.5) + '" y="50" width="3" height="106" fill="#e2cfa8"/>';
      });
      ut += mane(200, 92, 0.45) + '<rect y="236" width="400" height="64" fill="#6d4a6e"/><path d="M60 300 L120 240 H280 L340 300z" fill="#a2506f" opacity="0.85"/>' +
        '<path d="M90 300 L132 246 H268 L310 300" fill="none" stroke="#e8c27a" stroke-width="2" opacity="0.6"/>';
      return ut;
    }
    let ut = himmel(stamning, r, stjarnhimmel);
    if (!flaggor.harMane) ut += mane(62, 52, 0.9);
    if (platsId === 'skog') {
      ut += '<path d="M0 205 Q100 160 200 190 T400 180 V300 H0z" fill="#2c4a5a"/>';
      for (let i = 0; i < 9; i++) ut += gran(10 + i * 48 + r() * 12, 214 + r() * 10, 0.9 + r() * 0.5, '#2f5b55');
      ut += '<path d="M0 238 Q120 226 220 236 T400 232 V300 H0z" fill="#3f6b55"/>';
      for (let i = 0; i < 6; i++) {
        const x = 20 + r() * 360, y = 262 + r() * 30;
        ut += '<g class="glimt" style="animation-delay:' + (i * 0.9).toFixed(1) + 's"><circle cx="' + x.toFixed(0) + '" cy="' + (y - 4).toFixed(0) + '" r="6" fill="#9fe3d0" opacity="0.25"/><path d="M' + (x - 5).toFixed(0) + ' ' + y.toFixed(0) + ' q5 -9 10 0z" fill="#8fd3e8"/><rect x="' + (x - 1).toFixed(0) + '" y="' + y.toFixed(0) + '" width="2" height="4" fill="#d9e6d0"/></g>';
      }
    } else if (platsId === 'rymden') {
      ut += '<g opacity="0.9"><circle cx="330" cy="70" r="26" fill="#d98fb0"/><ellipse cx="330" cy="70" rx="44" ry="9" fill="none" stroke="#f2d0a8" stroke-width="3" transform="rotate(-14 330 70)"/></g>' +
        '<circle cx="140" cy="40" r="7" fill="#9fc6e8" opacity="0.8"/>' +
        '<path d="M-20 300 Q200 200 420 300z" fill="#8c86b8"/><path d="M-20 300 Q200 214 420 300" fill="none" stroke="#b1abd8" stroke-width="3"/>' +
        '<ellipse cx="120" cy="268" rx="18" ry="5" fill="#76709f"/><ellipse cx="290" cy="276" rx="24" ry="6" fill="#76709f"/><ellipse cx="210" cy="252" rx="10" ry="3" fill="#76709f"/>';
    } else if (platsId === 'slott') {
      ut += '<path d="M0 230 Q200 180 400 230 V300 H0z" fill="#3c5a66"/>' +
        '<g fill="#2e3566"><rect x="230" y="120" width="120" height="100"/><rect x="220" y="80" width="30" height="140"/><rect x="330" y="80" width="30" height="140"/><rect x="272" y="60" width="36" height="160"/>' +
        '<path d="M216 82 L235 50 L254 82z M326 82 L345 50 L364 82z M268 62 L290 22 L312 62z" fill="#5b4f8f"/></g>' +
        '<g fill="#f6d38a"><rect x="230" y="110" width="8" height="12" rx="4"/><rect x="340" y="110" width="8" height="12" rx="4"/><rect x="286" y="90" width="8" height="14" rx="4"/><rect x="260" y="160" width="10" height="14" rx="5"/><rect x="310" y="160" width="10" height="14" rx="5"/></g>' +
        '<path d="M276 220 V196 Q290 182 304 196 V220z" fill="#1d2248"/>' +
        '<path d="M0 244 Q200 228 400 244 V300 H0z" fill="#4e7a62"/>';
    } else if (platsId === 'hav') {
      ut += '<rect y="170" width="400" height="90" fill="#2e4f86"/><rect y="170" width="400" height="3" fill="#7c93c8" opacity="0.6"/>' +
        '<path d="M100 176 h160 M130 190 h110 M150 204 h70" stroke="#f5e7b5" stroke-width="2" opacity="0.35" stroke-linecap="round"/>';
      for (let y = 214; y < 252; y += 14) ut += '<path d="M0 ' + y + ' q20 -6 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="#6f8fc9" stroke-width="2" opacity="0.5"/>';
      ut += '<path d="M330 172 L350 120 L400 110 V172z" fill="#3d3a5e"/><rect x="356" y="74" width="16" height="44" fill="#efe3cf"/><rect x="356" y="86" width="16" height="7" fill="#c97a8a"/><rect x="352" y="66" width="24" height="9" rx="3" fill="#f6d38a"/>' +
        '<path d="M376 70 L400 60 V82z" fill="#f6d38a" opacity="0.3"/>' +
        '<path d="M0 248 Q200 236 400 250 V300 H0z" fill="#d8bf95"/><path d="M0 252 Q200 240 400 254" fill="none" stroke="#f3e6c9" stroke-width="3"/>';
    } else if (platsId === 'fjall') {
      ut += '<g opacity="0.55"><path d="M-10 70 Q80 30 160 80 T330 60 T420 70" fill="none" stroke="#7fe0b2" stroke-width="16" stroke-linecap="round" class="norrsken"/>' +
        '<path d="M-10 100 Q90 60 180 104 T420 90" fill="none" stroke="#9db8f0" stroke-width="10" stroke-linecap="round" class="norrsken" style="animation-delay:3s"/></g>' +
        '<path d="M-20 240 L80 120 L150 200 L230 90 L330 210 L380 150 L430 240z" fill="#47507f"/>' +
        '<path d="M80 120 L60 144 L76 140 L88 150 L100 144z M230 90 L206 120 L224 116 L236 128 L252 116z M380 150 L366 166 L380 164 L392 168z" fill="#eef1fb"/>' +
        '<path d="M0 236 Q200 214 400 238 V300 H0z" fill="#6a7d78"/>';
      for (let i = 0; i < 8; i++) ut += '<circle cx="' + (r() * 400).toFixed(0) + '" cy="' + (258 + r() * 36).toFixed(0) + '" r="' + (3 + r() * 4).toFixed(1) + '" fill="#c9d6b8" opacity="0.7"/>';
    }
    return ut;
  }

  /* ---------- Figurer ---------- */

  function barnet(x, y, stamning, hy) {
    const hud = hy || '#f2c9a5';
    return g(x, y, 1,
      '<ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity="0.18"/>' +
      '<rect x="-15" y="-46" width="30" height="40" rx="13" fill="#9fb7e8"/>' +
      '<circle cx="-6" cy="-34" r="2" fill="#fff4dc"/><circle cx="6" cy="-24" r="2" fill="#fff4dc"/><circle cx="-4" cy="-16" r="2" fill="#fff4dc"/>' +
      '<rect x="-12" y="-10" width="9" height="12" rx="4" fill="#8aa3d8"/><rect x="3" y="-10" width="9" height="12" rx="4" fill="#8aa3d8"/>' +
      '<rect x="-22" y="-42" width="9" height="22" rx="4.5" fill="#9fb7e8" transform="rotate(14 -18 -42)"/><rect x="13" y="-42" width="9" height="22" rx="4.5" fill="#9fb7e8" transform="rotate(-14 18 -42)"/>' +
      '<circle cx="0" cy="-64" r="20" fill="' + hud + '"/>' +
      '<path d="M-20 -66 Q-18 -88 0 -86 Q20 -88 20 -64 Q12 -76 0 -74 Q-12 -76 -20 -66z" fill="#7a4b3a"/>' +
      '<circle cx="-7" cy="-63" r="2.2" fill="#3b2b33"/><circle cx="7" cy="-63" r="2.2" fill="#3b2b33"/>' +
      '<circle cx="-12" cy="-56" r="3.5" fill="#f19aa6" opacity="0.6"/><circle cx="12" cy="-56" r="3.5" fill="#f19aa6" opacity="0.6"/>' +
      '<path d="M-5 -55 Q0 -51 5 -55" fill="none" stroke="#3b2b33" stroke-width="1.8" stroke-linecap="round"/>');
  }

  const FIGURER = {
    nalle: (o) => '<ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity="0.18"/>' +
      '<ellipse cx="0" cy="-20" rx="20" ry="22" fill="#b07a52"/><ellipse cx="0" cy="-16" rx="12" ry="13" fill="#e2b98e"/>' +
      '<circle cx="-14" cy="-60" r="8" fill="#b07a52"/><circle cx="14" cy="-60" r="8" fill="#b07a52"/><circle cx="-14" cy="-60" r="4" fill="#e2b98e"/><circle cx="14" cy="-60" r="4" fill="#e2b98e"/>' +
      '<circle cx="0" cy="-48" r="17" fill="#b07a52"/><ellipse cx="0" cy="-42" rx="8" ry="6" fill="#e2b98e"/><ellipse cx="0" cy="-45" rx="3" ry="2.2" fill="#4a3030"/>' +
      o.ogon(-6, -51) + o.ogon(6, -51) + '<circle cx="-18" cy="-6" r="6" fill="#b07a52"/><circle cx="18" cy="-6" r="6" fill="#b07a52"/>',
    rav: (o) => '<ellipse cx="0" cy="2" rx="24" ry="5" fill="#000" opacity="0.18"/>' +
      '<path d="M14 -10 Q44 -14 40 -40 Q30 -24 14 -24z" fill="#e58a4e"/><path d="M36 -34 Q42 -40 40 -42 Q34 -34 30 -30z" fill="#fff4dc"/>' +
      '<ellipse cx="0" cy="-18" rx="16" ry="18" fill="#e58a4e"/><ellipse cx="0" cy="-14" rx="9" ry="11" fill="#fff4dc"/>' +
      '<path d="M-16 -50 L-12 -72 L-2 -56z M16 -50 L12 -72 L2 -56z" fill="#e58a4e"/><path d="M-12 -54 L-11 -66 L-6 -57z M12 -54 L11 -66 L6 -57z" fill="#5a3a3a"/>' +
      '<path d="M-17 -48 Q0 -62 17 -48 Q8 -30 0 -28 Q-8 -30 -17 -48z" fill="#e58a4e"/><path d="M-9 -38 Q0 -30 9 -38 Q4 -28 0 -28 Q-4 -28 -9 -38z" fill="#fff4dc"/><circle cx="0" cy="-30" r="2.4" fill="#3b2b33"/>' +
      o.ogon(-7, -45) + o.ogon(7, -45),
    drake: (o) => '<ellipse cx="0" cy="2" rx="24" ry="5" fill="#000" opacity="0.18"/>' +
      '<path d="M12 -8 Q38 -4 42 -22 Q46 -14 44 -6 Q34 6 10 0z" fill="#6fae8c"/><path d="M42 -22 l6 -4 l-2 7z" fill="#e7a35a"/>' +
      '<path d="M-14 -40 Q-42 -60 -38 -30 Q-30 -36 -14 -30z M14 -40 Q42 -60 38 -30 Q30 -36 14 -30z" fill="#a7d3b8" class="vinge"/>' +
      '<ellipse cx="0" cy="-20" rx="18" ry="20" fill="#6fae8c"/><ellipse cx="0" cy="-16" rx="10" ry="13" fill="#f1dca0"/>' +
      '<path d="M-8 -64 l-4 -10 l9 6z M8 -64 l4 -10 l-9 6z" fill="#e7a35a"/>' +
      '<ellipse cx="0" cy="-50" rx="18" ry="16" fill="#6fae8c"/><ellipse cx="0" cy="-42" rx="10" ry="6" fill="#88c3a2"/><circle cx="-4" cy="-43" r="1.3" fill="#3b2b33"/><circle cx="4" cy="-43" r="1.3" fill="#3b2b33"/>' +
      o.ogon(-7, -53) + o.ogon(7, -53) + '<circle cx="0" cy="-20" r="9" fill="#ffd27a" opacity="0.25"/>',
    robot: (o) => '<ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity="0.18"/>' +
      '<rect x="-14" y="-6" width="10" height="8" rx="3" fill="#6b7aa8"/><rect x="4" y="-6" width="10" height="8" rx="3" fill="#6b7aa8"/>' +
      '<rect x="-17" y="-36" width="34" height="32" rx="9" fill="#a9b7dc"/><rect x="-9" y="-28" width="18" height="12" rx="4" fill="#6b7aa8"/><circle cx="-3" cy="-22" r="2" fill="#f19aa6"/><circle cx="4" cy="-22" r="2" fill="#7fe0b2"/>' +
      '<rect x="-26" y="-34" width="8" height="20" rx="4" fill="#8e9dc8"/><rect x="18" y="-34" width="8" height="20" rx="4" fill="#8e9dc8"/>' +
      '<rect x="-20" y="-70" width="40" height="32" rx="11" fill="#c3cfee"/><rect x="-1.5" y="-82" width="3" height="12" fill="#8e9dc8"/><circle cx="0" cy="-84" r="4" fill="#f6c97c" class="glimt"/>' +
      (o.sover ? '<path d="M-12 -55 q4 3 8 0 M4 -55 q4 3 8 0" fill="none" stroke="#3b2b55" stroke-width="2" stroke-linecap="round"/>' :
        '<circle cx="-8" cy="-55" r="6" fill="#ffe7a3"/><circle cx="8" cy="-55" r="6" fill="#ffe7a3"/><circle cx="-8" cy="-55" r="2.5" fill="#3b2b55"/><circle cx="8" cy="-55" r="2.5" fill="#3b2b55"/>') +
      '<path d="M-5 -45 Q0 -42 5 -45" fill="none" stroke="#3b2b55" stroke-width="1.8" stroke-linecap="round"/>',
    kanin: (o) => '<ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity="0.18"/>' +
      '<circle cx="16" cy="-10" r="6" fill="#fff4f0"/>' +
      '<ellipse cx="0" cy="-18" rx="16" ry="19" fill="#e9e1ec"/><ellipse cx="0" cy="-14" rx="9" ry="11" fill="#fff4f0"/>' +
      '<ellipse cx="-8" cy="-78" rx="6" ry="20" fill="#e9e1ec" transform="rotate(-8 -8 -78)"/><ellipse cx="8" cy="-78" rx="6" ry="20" fill="#e9e1ec" transform="rotate(8 8 -78)"/>' +
      '<ellipse cx="-8" cy="-78" rx="3" ry="14" fill="#f3b9c8" transform="rotate(-8 -8 -78)"/><ellipse cx="8" cy="-78" rx="3" ry="14" fill="#f3b9c8" transform="rotate(8 8 -78)"/>' +
      '<circle cx="0" cy="-48" r="16" fill="#e9e1ec"/><ellipse cx="0" cy="-42" rx="2.6" ry="2" fill="#e88aa0"/>' +
      o.ogon(-6, -50) + o.ogon(6, -50) + '<circle cx="-11" cy="-42" r="3" fill="#f3b9c8" opacity="0.7"/><circle cx="11" cy="-42" r="3" fill="#f3b9c8" opacity="0.7"/>',
    uggla: (o) => '<ellipse cx="0" cy="2" rx="20" ry="5" fill="#000" opacity="0.18"/>' +
      '<ellipse cx="0" cy="-30" rx="22" ry="30" fill="#9b7a62"/><ellipse cx="0" cy="-22" rx="13" ry="18" fill="#e8d3b4"/>' +
      '<path d="M-6 -24 q3 3 6 0 q3 3 6 0 M-6 -16 q3 3 6 0 q3 3 6 0" fill="none" stroke="#b9987a" stroke-width="1.5"/>' +
      '<path d="M-20 -56 L-16 -68 L-8 -58z M20 -56 L16 -68 L8 -58z" fill="#9b7a62"/>' +
      '<path d="M-22 -40 Q-30 -20 -16 -8z M22 -40 Q30 -20 16 -8z" fill="#86664f"/>' +
      '<circle cx="-9" cy="-46" r="9" fill="#f6ead2"/><circle cx="9" cy="-46" r="9" fill="#f6ead2"/>' +
      (o.sover ? '<path d="M-13 -46 q4 3 8 0 M5 -46 q4 3 8 0" fill="none" stroke="#3b2b33" stroke-width="2" stroke-linecap="round"/>' :
        '<circle cx="-9" cy="-46" r="4.5" fill="#3b2b33"/><circle cx="9" cy="-46" r="4.5" fill="#3b2b33"/><circle cx="-8" cy="-48" r="1.4" fill="#fff"/><circle cx="10" cy="-48" r="1.4" fill="#fff"/>') +
      '<path d="M-3 -38 L3 -38 L0 -32z" fill="#e7a35a"/><path d="M-8 0 v-5 M8 0 v-5" stroke="#e7a35a" stroke-width="3" stroke-linecap="round"/>',
    egen: (o) => '<ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity="0.18"/>' +
      '<path d="M-22 0 Q-26 -50 0 -60 Q26 -50 22 0z" fill="' + o.farg + '"/>' +
      '<path d="M-10 -58 Q-14 -72 -6 -70z M10 -58 Q14 -72 6 -70z" fill="' + o.farg + '"/>' +
      '<path d="M0 -26 l3.5 7 l7.5 1 l-5.5 5 l1.5 7.5 l-7 -3.7 l-7 3.7 l1.5 -7.5 l-5.5 -5 l7.5 -1z" fill="#fff4dc" opacity="0.9"/>' +
      o.ogon(-7, -42) + o.ogon(7, -42) + '<path d="M-5 -34 Q0 -30 5 -34" fill="none" stroke="#3b2b33" stroke-width="1.8" stroke-linecap="round"/>' +
      '<circle cx="-13" cy="-35" r="3" fill="#f19aa6" opacity="0.6"/><circle cx="13" cy="-35" r="3" fill="#f19aa6" opacity="0.6"/>'
  };

  function ogonFn(sover) {
    return (x, y) => sover
      ? '<path d="M' + (x - 3) + ' ' + y + ' q3 2.5 6 0" fill="none" stroke="#3b2b33" stroke-width="1.8" stroke-linecap="round"/>'
      : '<circle cx="' + x + '" cy="' + y + '" r="2.4" fill="#3b2b33"/><circle cx="' + (x + 0.8) + '" cy="' + (y - 0.8) + '" r="0.8" fill="#fff"/>';
  }

  function figuren(id, x, y, s, opts) {
    const o = { ogon: ogonFn(opts.sover), sover: opts.sover, farg: opts.farg || '#b9a3e3' };
    const ritare = FIGURER[id] || FIGURER.egen;
    return g(x, y, s, '<g class="' + (opts.svavar ? 'flyt' : 'gunga') + '">' + ritare(o) + '</g>');
  }

  function sovscen(figurId, farg) {
    const o = { ogon: ogonFn(true), sover: true, farg: farg || '#b9a3e3' };
    const ritare = FIGURER[figurId] || FIGURER.egen;
    return '<rect x="70" y="206" width="250" height="44" rx="12" fill="#8d6c99"/>' +
      '<rect x="58" y="160" width="14" height="96" rx="7" fill="#b88a64"/><rect x="318" y="182" width="14" height="74" rx="7" fill="#b88a64"/>' +
      '<rect x="78" y="176" width="140" height="34" rx="16" fill="#fff4dc"/>' +
      g(118, 222, 1.05, barnet(0, 0).replace(/^<g[^>]*>|<\/g>$/g, '').replace(/r="2.2" fill="#3b2b33"/g, 'r="0" fill="none"') + '<path d="M-10 -63 q3 2.5 6 0 M4 -63 q3 2.5 6 0" fill="none" stroke="#3b2b33" stroke-width="1.8" stroke-linecap="round"/>') +
      g(186, 216, 0.85, ritare(o)) +
      '<path d="M76 206 Q200 190 316 204 L320 246 Q200 256 74 246z" fill="#c7b8e8"/>' +
      '<g fill="#fff4dc" opacity="0.8"><path d="M140 222 l2 4 l4 .6 l-3 3 l.8 4 l-3.8 -2 l-3.8 2 l.8 -4 l-3 -3 l4 -.6z"/><path d="M220 216 l2 4 l4 .6 l-3 3 l.8 4 l-3.8 -2 l-3.8 2 l.8 -4 l-3 -3 l4 -.6z"/><path d="M280 228 l2 4 l4 .6 l-3 3 l.8 4 l-3.8 -2 l-3.8 2 l.8 -4 l-3 -3 l4 -.6z"/></g>' +
      '<g fill="#e6ddff" opacity="0.75" font-family="ui-rounded, system-ui, sans-serif" font-weight="700" class="zzz"><text x="226" y="150" font-size="16">z</text><text x="240" y="136" font-size="12">z</text><text x="250" y="124" font-size="9">z</text></g>';
  }

  /* ---------- Föremål ---------- */

  function liten(namn, farg, oron) {
    // små djur: möss, lämmel
    return '<ellipse cx="0" cy="2" rx="16" ry="4" fill="#000" opacity="0.18"/><path d="M12 -6 Q30 -6 28 -18" fill="none" stroke="' + farg + '" stroke-width="2.5" stroke-linecap="round"/>' +
      '<ellipse cx="0" cy="-10" rx="15" ry="12" fill="' + farg + '"/><circle cx="-8" cy="-22" r="' + oron + '" fill="' + farg + '"/><circle cx="8" cy="-22" r="' + oron + '" fill="' + farg + '"/>' +
      '<circle cx="-8" cy="-22" r="' + (oron * 0.55) + '" fill="#f3b9c8"/><circle cx="8" cy="-22" r="' + (oron * 0.55) + '" fill="#f3b9c8"/>' +
      '<circle cx="-5" cy="-13" r="1.8" fill="#3b2b33"/><circle cx="5" cy="-13" r="1.8" fill="#3b2b33"/><circle cx="0" cy="-8" r="1.8" fill="#e88aa0"/>';
  }

  const VASEN = {
    skog: () => '<ellipse cx="0" cy="2" rx="22" ry="5" fill="#000" opacity="0.18"/>' +
      '<path d="M-22 0 Q-26 -30 0 -32 Q24 -30 22 0z" fill="#7a5a4a"/>' +
      '<path d="M-20 -6 l-6 -8 l8 2 l-4 -10 l8 4 l0 -10 l7 7 l4 -10 l4 10 l7 -7 l0 10 l8 -4 l-4 10 l8 -2 l-6 8z" fill="#5d4336"/>' +
      '<path d="M14 -2 Q32 -6 30 -16 Q22 -22 12 -14z" fill="#d9b48f"/><circle cx="30" cy="-12" r="2.2" fill="#3b2b33"/><circle cx="21" cy="-14" r="1.8" fill="#3b2b33"/>',
    rymden: () => liten('mus', '#c7c3e8', 7) + '<circle cx="0" cy="-36" r="3" fill="#ffe7a3" class="glimt"/>',
    slott: () => liten('mus', '#a9a1b5', 7) + '<path d="M-7 -30 l3 -6 l4 4 l4 -4 l3 6z" fill="#f2cf8d"/>',
    hav: () => '<path d="M0 -40 Q16 -40 12 -26 Q6 -16 10 -6 Q14 4 4 6 Q-4 6 0 -2 Q4 -10 -2 -18 Q-10 -26 -6 -34z" fill="#f2a88d"/>' +
      '<path d="M6 -40 Q16 -46 18 -36 Q14 -36 10 -34z" fill="#f2a88d"/><circle cx="6" cy="-34" r="2" fill="#3b2b33"/><path d="M-6 -30 l-6 -2 l4 6 l-6 0 l6 4z" fill="#f6c9a8"/>',
    fjall: () => liten('lämmel', '#c99a6a', 5) + '<path d="M-10 -14 h20" stroke="#5a3a3a" stroke-width="3" opacity="0.4"/>',
    rum: () => liten('tygmus', '#e9b8c9', 8) + '<path d="M-4 -2 v-14 M4 -2 v-14" stroke="#fff4dc" stroke-width="1" stroke-dasharray="2 2"/>'
  };

  const stjarna5 = (r, f) => '<path d="M0 ' + (-r) + ' L' + (r * 0.29) + ' ' + (-r * 0.4) + ' L' + (r * 0.95) + ' ' + (-r * 0.31) + ' L' + (r * 0.47) + ' ' + (r * 0.15) + ' L' + (r * 0.59) + ' ' + (r * 0.81) + ' L0 ' + (r * 0.5) + ' L' + (-r * 0.59) + ' ' + (r * 0.81) + ' L' + (-r * 0.47) + ' ' + (r * 0.15) + ' L' + (-r * 0.95) + ' ' + (-r * 0.31) + ' L' + (-r * 0.29) + ' ' + (-r * 0.4) + 'z" fill="' + f + '"/>';

  const SAKER = {
    fallstjarna: () => '<path d="M0 0 Q-60 10 -110 40" fill="none" stroke="#fff1c9" stroke-width="5" stroke-linecap="round" opacity="0.5"/>' + stjarna5(14, '#ffe7a3'),
    stjarnfigur: () => '<circle r="40" fill="#ffe7a3" opacity="0.2" class="glimt"/>' + stjarna5(30, '#ffe08a') + '<circle cx="-8" cy="-4" r="3" fill="#5a4a3a"/><circle cx="8" cy="-4" r="3" fill="#5a4a3a"/><path d="M-5 6 Q0 10 5 6" fill="none" stroke="#5a4a3a" stroke-width="2" stroke-linecap="round"/><circle cx="-13" cy="4" r="3" fill="#f6a99a" opacity="0.6"/><circle cx="13" cy="4" r="3" fill="#f6a99a" opacity="0.6"/>',
    backe: () => '<path d="M-260 0 Q-140 -10 -60 -70 Q0 -110 80 -120 L140 -120 V0z" fill="#5d6a8f" opacity="0.9"/><path d="M-200 -8 Q-120 -18 -50 -76 Q0 -110 80 -116" fill="none" stroke="#8792b8" stroke-width="3" stroke-dasharray="4 8"/>',
    stjarnregn: () => { let u = ''; const p = [[-90, 10], [-50, -20], [-10, 20], [30, -10], [70, 15], [110, -25], [-120, -30], [140, 5]]; p.forEach((q, i) => (u += '<g transform="translate(' + q[0] + ' ' + q[1] + ')" class="glimt" style="animation-delay:' + i * 0.7 + 's">' + stjarna5(6 + (i % 3) * 2, '#fff1c9') + '</g>')); return u; },
    brev: () => '<rect x="-22" y="-16" width="44" height="30" rx="4" fill="#dfe3f2"/><path d="M-22 -16 L0 2 L22 -16" fill="none" stroke="#a7aed0" stroke-width="2"/><circle cx="0" cy="2" r="5" fill="#d98fb0"/>',
    flaggor: () => { let u = '<path d="M-180 -10 Q0 30 180 -10" fill="none" stroke="#e6ddff" stroke-width="1.5"/>'; const f = ['#e9b8c9', '#f2cf8d', '#a7d3b8', '#9fb7e8']; for (let i = 0; i < 9; i++) { const x = -160 + i * 40, y = -10 + 40 * (1 - Math.pow((x / 180), 2)) * 0.5; u += '<path d="M' + (x - 9) + ' ' + y + ' L' + (x + 9) + ' ' + y + ' L' + x + ' ' + (y + 18) + 'z" fill="' + f[i % 4] + '"/>'; } return u; },
    lykta: () => '<circle cy="-14" r="26" fill="#ffd99a" opacity="0.22" class="glimt"/><path d="M-4 -40 h8 v6 h-8z" fill="#8a6a4a"/><path d="M-12 -34 h24 l-3 30 h-18z" fill="#f6c97c"/><path d="M-12 -34 h24 M-15 -4 h30" stroke="#8a6a4a" stroke-width="3" stroke-linecap="round"/><path d="M0 -26 q5 7 0 14 q-5 -7 0 -14z" fill="#fff4dc"/>',
    tarta: () => '<ellipse cx="0" cy="0" rx="40" ry="7" fill="#e6ddff"/><rect x="-32" y="-30" width="64" height="30" rx="6" fill="#e9b8c9"/><rect x="-24" y="-50" width="48" height="22" rx="6" fill="#fff4dc"/><path d="M-32 -18 q8 6 16 0 q8 6 16 0 q8 6 16 0 q8 6 16 0" fill="none" stroke="#fff4dc" stroke-width="3"/><rect x="-2" y="-62" width="4" height="12" fill="#9fb7e8"/><path d="M0 -70 q4 5 0 8 q-4 -3 0 -8z" fill="#f6c97c"/>',
    bar: () => '<path d="M-26 0 Q-30 -26 0 -28 Q30 -26 26 0z" fill="#b98a5a"/><path d="M-26 -10 h52" stroke="#8a6a4a" stroke-width="2"/>' + [[-14, -30], [-2, -34], [10, -30], [-8, -24], [4, -24], [16, -24]].map((p) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6" fill="#e0607a"/><circle cx="' + (p[0] - 2) + '" cy="' + (p[1] - 2) + '" r="1" fill="#fff4dc"/>').join(''),
    speldosa: () => '<rect x="-28" y="-26" width="56" height="26" rx="4" fill="#b88a64"/><path d="M-30 -26 L-24 -46 H24 L30 -26z" fill="#d6a77a"/><rect x="-8" y="-20" width="16" height="10" rx="2" fill="#f2cf8d"/><path d="M30 -14 h10 v-8" fill="none" stroke="#f2cf8d" stroke-width="3" stroke-linecap="round"/>' + '<g fill="#fff1c9" opacity="0.8"><text x="-24" y="-56" font-size="16">♪</text><text x="8" y="-66" font-size="14">♫</text></g>',
    back: () => '<path d="M-60 -60 Q-40 -30 -70 0 H70 Q40 -30 60 -60z" fill="#4a73b0"/><path d="M-50 -40 q10 -4 20 0 M10 -30 q10 -4 20 0 M-30 -14 q10 -4 20 0" fill="none" stroke="#cfe0f6" stroke-width="2" opacity="0.6" stroke-linecap="round"/>',
    hare: () => '<ellipse cx="0" cy="2" rx="18" ry="4" fill="#000" opacity="0.18"/><ellipse cx="0" cy="-14" rx="14" ry="16" fill="#b9a08a"/><ellipse cx="-5" cy="-48" rx="4" ry="15" fill="#b9a08a"/><ellipse cx="5" cy="-48" rx="4" ry="15" fill="#b9a08a"/><circle cx="0" cy="-32" r="11" fill="#b9a08a"/><circle cx="-4" cy="-33" r="1.8" fill="#3b2b33"/><circle cx="4" cy="-33" r="1.8" fill="#3b2b33"/><circle cx="0" cy="-28" r="1.6" fill="#e88aa0"/>',
    ripa: () => '<ellipse cx="0" cy="2" rx="16" ry="4" fill="#000" opacity="0.18"/><ellipse cx="0" cy="-14" rx="16" ry="13" fill="#f3efe6"/><circle cx="-10" cy="-26" r="9" fill="#f3efe6"/><path d="M-19 -26 l-5 2 l5 2z" fill="#3b2b33"/><circle cx="-12" cy="-28" r="1.6" fill="#3b2b33"/><path d="M-15 -32 q3 -3 6 0" stroke="#e0607a" stroke-width="2" fill="none"/><path d="M14 -16 l8 -6 l-2 10z" fill="#d9d2c2"/>',
    ekorre: () => '<ellipse cx="0" cy="2" rx="16" ry="4" fill="#000" opacity="0.18"/><path d="M8 -4 Q34 -10 26 -44 Q14 -50 12 -36 Q20 -22 6 -14z" fill="#c4683e"/><ellipse cx="-2" cy="-14" rx="11" ry="14" fill="#d47a4a"/><circle cx="-4" cy="-32" r="9" fill="#d47a4a"/><path d="M-10 -38 l-2 -8 l6 5z M0 -40 l1 -8 l4 6z" fill="#d47a4a"/><circle cx="-7" cy="-33" r="1.6" fill="#3b2b33"/><ellipse cx="-3" cy="-12" rx="5" ry="7" fill="#f2d3b0"/>',
    lammel: () => VASEN.fjall(),
    vasen: (ctx) => (VASEN[ctx.plats] || VASEN.skog)(),
    stenar: () => [-48, -16, 16, 48].map((x, i) => '<ellipse cx="' + x + '" cy="' + (-10 - (i % 2) * 2) + '" rx="13" ry="7" fill="#8f8fa8"/><ellipse cx="' + (x - 3) + '" cy="' + (-13 - (i % 2) * 2) + '" rx="6" ry="2.5" fill="#b9b9cc"/>').join(''),
    sten: () => '<ellipse cx="0" cy="-10" rx="18" ry="11" fill="#8f8fa8"/><ellipse cx="-5" cy="-15" rx="8" ry="3.5" fill="#b9b9cc"/>',
    snacka: () => '<circle cy="-14" r="26" fill="#ffe1ec" opacity="0.15" class="glimt"/><path d="M-22 0 Q-26 -22 -4 -30 Q18 -32 22 -14 Q24 0 8 2 Q-8 4 -22 0z" fill="#f6cfd6"/><path d="M-16 -4 Q-14 -20 0 -24 M-8 -2 Q-4 -16 8 -20 M2 0 Q6 -10 16 -12" fill="none" stroke="#e6a7b6" stroke-width="2" stroke-linecap="round"/><path d="M22 -14 Q30 -16 30 -8 Q26 -4 20 -4" fill="#fff0f2"/>',
    vag: () => '<path d="M-90 0 Q-60 -40 -20 -30 Q10 -24 0 -8 Q-10 4 -30 0 Q-10 -14 -30 -18 Q-60 -18 -60 0z" fill="#7fa6dc"/><path d="M-90 0 H70 Q40 -10 20 0" fill="#5f86c4"/><path d="M-60 -24 q16 -10 34 -6" fill="none" stroke="#e6f0ff" stroke-width="3" stroke-linecap="round" opacity="0.7"/>',
    filt: () => '<path d="M-90 0 Q-60 -26 -30 -10 Q0 6 30 -12 Q60 -28 90 0z" fill="#7f9fe0"/><path d="M-90 0 Q-60 -18 -30 -4 Q0 10 30 -6 Q60 -20 90 0" fill="none" stroke="#c9d6f6" stroke-width="2"/>' + [[-50, -8], [10, -4], [60, -10]].map((p) => '<g transform="translate(' + p[0] + ' ' + p[1] + ')">' + stjarna5(4, '#fff4dc') + '</g>').join(''),
    notpar: () => '<g fill="#fff1c9" opacity="0.85" font-family="system-ui, sans-serif" class="flyt"><text x="-30" y="0" font-size="22">♪</text><text x="0" y="-20" font-size="26">♫</text><text x="30" y="4" font-size="18">♪</text></g>',
    mane: () => '<circle r="44" fill="#fff1c9" opacity="0.15"/><circle r="32" fill="#fbe9b7"/><circle cx="-12" cy="-8" r="5" fill="#efd79b"/><circle cx="10" cy="12" r="4" fill="#efd79b"/><path d="M-12 2 q4 3 8 0 M6 -4 q4 3 8 0" fill="none" stroke="#b49a5e" stroke-width="2" stroke-linecap="round"/><path d="M-4 14 Q2 18 8 14" fill="none" stroke="#b49a5e" stroke-width="2" stroke-linecap="round"/>',
    grotta: () => '<path d="M-80 0 Q-90 -90 0 -96 Q90 -90 80 0z" fill="#4a4370"/><path d="M-50 0 Q-56 -60 0 -64 Q56 -60 50 0z" fill="#0b0d1f"/><path d="M-80 0 Q-60 -14 -40 -6 M40 -6 Q60 -14 80 0" fill="none" stroke="#3b3560" stroke-width="5"/>',
    eko: () => '<g fill="none" stroke="#e6ddff" stroke-width="2.5" stroke-linecap="round" opacity="0.6"><path d="M-10 -14 q10 14 0 28"/><path d="M4 -24 q16 24 0 48"/><path d="M18 -34 q22 34 0 68"/></g>',
    kristaller: () => { let u = ''; [[-120, 20, '#9fb7e8'], [-80, -10, '#c7a6e8'], [-30, 30, '#7fe0d0'], [20, -20, '#9fb7e8'], [70, 15, '#e9b8c9'], [120, -5, '#7fe0d0'], [-150, -30, '#e9b8c9'], [150, 30, '#c7a6e8']].forEach((p, i) => (u += '<g transform="translate(' + p[0] + ' ' + p[1] + ')" class="glimt" style="animation-delay:' + i * 0.8 + 's"><circle r="12" fill="' + p[2] + '" opacity="0.25"/><path d="M0 -10 L6 0 L0 10 L-6 0z" fill="' + p[2] + '"/></g>')); return u; },
    trappa: () => { let u = ''; for (let i = 0; i < 7; i++) u += '<rect x="' + (-40 + i * 10) + '" y="' + (-i * 16) + '" width="60" height="14" rx="3" fill="#8a7aa8" opacity="' + (1 - i * 0.08) + '"/>'; return u + '<path d="M-44 0 Q-20 -60 40 -120" fill="none" stroke="#b88a64" stroke-width="4"/>'; },
    garderob: () => '<rect x="-50" y="-150" width="100" height="150" rx="8" fill="#b88a64"/><rect x="-44" y="-144" width="42" height="138" rx="4" fill="#a87a54"/><rect x="4" y="-144" width="40" height="138" rx="4" fill="#3a2e4a"/><path d="M4 -144 L22 -138 V-12 L4 -6z" fill="#c99a74"/><circle cx="-8" cy="-76" r="3" fill="#f2cf8d"/>',
    dorr: () => '<path d="M-36 0 V-90 Q0 -124 36 -90 V0z" fill="#8a5a44"/><path d="M-28 0 V-86 Q0 -114 28 -86 V0z" fill="#a8704f"/><path d="M-12 -100 V0 M12 -100 V0" stroke="#8a5a44" stroke-width="2"/><circle cx="18" cy="-44" r="3.5" fill="#f2cf8d"/>',
    vindpust: () => '<g class="flyt"><circle r="34" fill="#cfe0f6" opacity="0.15"/><path d="M-30 6 Q-30 -26 0 -26 Q26 -26 24 -4 Q22 12 4 12 Q-12 12 -12 -2 Q-12 -12 0 -12 Q10 -12 10 -4" fill="none" stroke="#e6f0ff" stroke-width="5" stroke-linecap="round" opacity="0.85"/><path d="M-40 18 Q-10 26 30 14" fill="none" stroke="#e6f0ff" stroke-width="3" stroke-linecap="round" opacity="0.5"/><circle cx="-6" cy="-4" r="2.6" fill="#3b2b55"/><circle cx="6" cy="-4" r="2.6" fill="#3b2b55"/></g>',
    raket: () => '<ellipse cx="0" cy="0" rx="34" ry="6" fill="#000" opacity="0.18"/><path d="M-16 -10 L-30 4 L-14 0z M16 -10 L30 4 L14 0z" fill="#9fb7e8"/><path d="M0 -110 Q26 -80 20 -10 H-20 Q-26 -80 0 -110z" fill="#e0607a"/><path d="M0 -110 Q12 -96 15 -84 H-15 Q-12 -96 0 -110z" fill="#fff4dc"/><circle cx="0" cy="-60" r="11" fill="#cfe0f6" stroke="#fff4dc" stroke-width="3"/><circle cx="-4" cy="-62" r="1.8" fill="#3b2b33"/><circle cx="4" cy="-62" r="1.8" fill="#3b2b33"/><path d="M-3 -56 Q0 -54 3 -56" fill="none" stroke="#3b2b33" stroke-width="1.4"/><path d="M-10 -10 Q0 10 10 -10" fill="#f6c97c" opacity="0.8"/>',
    sack: () => '<path d="M-22 0 Q-30 -30 -10 -40 L10 -40 Q30 -30 22 0z" fill="#c9a6d8"/><path d="M-10 -40 Q0 -46 10 -40" fill="none" stroke="#8a6aa8" stroke-width="3"/>' + [[-8, -20], [8, -14], [0, -30]].map((p) => '<g transform="translate(' + p[0] + ' ' + p[1] + ')" class="glimt">' + stjarna5(4, '#fff1c9') + '</g>').join(''),
    siffror: () => '<g font-family="ui-rounded, system-ui, sans-serif" font-weight="800" fill="#fff1c9" opacity="0.85"><text x="-30" y="0" font-size="34">3</text><text x="4" y="-24" font-size="28" opacity="0.8">2</text><text x="30" y="-48" font-size="22" opacity="0.6">1</text></g>',
    dimma: () => '<g opacity="0.55"><ellipse cx="-120" cy="20" rx="120" ry="30" fill="#e6e9f6"/><ellipse cx="60" cy="40" rx="160" ry="34" fill="#e6e9f6"/><ellipse cx="160" cy="0" rx="90" ry="24" fill="#e6e9f6"/></g>',
    lamm: () => '<ellipse cx="0" cy="2" rx="20" ry="4" fill="#000" opacity="0.18"/><rect x="-12" y="-12" width="4" height="13" fill="#5a4a5a"/><rect x="8" y="-12" width="4" height="13" fill="#5a4a5a"/>' + [[-12, -20], [0, -24], [12, -20], [-6, -14], [8, -14], [0, -16]].map((p) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="10" fill="#fbf7ef"/>').join('') + '<ellipse cx="-20" cy="-26" rx="8" ry="9" fill="#5a4a5a"/><circle cx="-22" cy="-28" r="1.6" fill="#fff"/><path d="M-24 -34 l-8 -2 l5 6z" fill="#5a4a5a"/>',
    faar: () => '<ellipse cx="0" cy="2" rx="30" ry="5" fill="#000" opacity="0.18"/><rect x="-18" y="-14" width="6" height="16" fill="#5a4a5a"/><rect x="14" y="-14" width="6" height="16" fill="#5a4a5a"/>' + [[-18, -30], [0, -36], [18, -30], [-10, -20], [12, -20], [0, -24]].map((p) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="15" fill="#f1ece2"/>').join('') + '<ellipse cx="-32" cy="-38" rx="11" ry="12" fill="#5a4a5a"/><circle cx="-35" cy="-40" r="2" fill="#fff"/><path d="M-36 -26 h8" stroke="#c9a03a" stroke-width="3"/><circle cx="-32" cy="-21" r="4" fill="#e2b84a"/>',
    moln: () => '<g class="flyt"><ellipse cx="0" cy="0" rx="46" ry="18" fill="#f3efff"/><circle cx="-18" cy="-12" r="18" fill="#f3efff"/><circle cx="10" cy="-18" r="22" fill="#f3efff"/><ellipse cx="0" cy="6" rx="40" ry="8" fill="#d9d2f2"/></g>',
    gramoln: () => '<g class="flyt"><rect x="-40" y="-30" width="80" height="44" rx="8" fill="#9a9ab0"/><path d="M-16 -10 h8 M8 -10 h8" stroke="#3b2b33" stroke-width="3" stroke-linecap="round"/><path d="M-8 4 Q0 -2 8 4" fill="none" stroke="#3b2b33" stroke-width="2.5" stroke-linecap="round"/></g>',
    molnmaskin: () => '<rect x="-60" y="-80" width="120" height="80" rx="14" fill="#c99a74"/><rect x="-50" y="-70" width="40" height="30" rx="6" fill="#e9dcc3"/><path d="M-30 -48 L-22 -62" stroke="#e0607a" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="-55" r="14" fill="#a87a54"/><circle cx="20" cy="-55" r="6" fill="#e9dcc3"/><path d="M40 -80 L60 -120 L80 -120 L70 -80z" fill="#b88a64"/><rect x="-44" y="-30" width="10" height="10" rx="5" fill="#7fb59a"/><rect x="-28" y="-30" width="10" height="10" rx="5" fill="#f2cf8d"/><rect x="-12" y="-30" width="10" height="10" rx="5" fill="#e9b8c9"/>',
    molnval: () => '<g class="flyt"><path d="M-70 0 Q-70 -40 -10 -40 Q50 -40 60 -10 Q80 -24 90 -36 Q92 -10 70 4 Q40 20 -20 18 Q-70 16 -70 0z" fill="#f3efff"/><circle cx="-40" cy="-14" r="3" fill="#8a84b8"/><path d="M-48 -2 Q-38 4 -28 -2" fill="none" stroke="#8a84b8" stroke-width="2" stroke-linecap="round"/><path d="M-30 -42 q4 -14 0 -20 M-24 -42 q8 -10 10 -16" fill="none" stroke="#f3efff" stroke-width="3" stroke-linecap="round"/></g>',
    karta: () => '<path d="M-60 -40 L-20 -46 L20 -40 L60 -46 V30 L20 36 L-20 30 L-60 36z" fill="#efdcb2"/><path d="M-20 -46 V30 M20 -40 V36" stroke="#d6bf8f" stroke-width="1.5"/><path d="M-48 20 Q-30 0 -10 10 T26 -10 T46 -24" fill="none" stroke="#5f86c4" stroke-width="2.5" stroke-dasharray="5 4" stroke-linecap="round"/><path d="M40 -30 l8 8 M48 -30 l-8 8" stroke="#e0607a" stroke-width="3" stroke-linecap="round"/><circle cx="-44" cy="-28" r="7" fill="none" stroke="#b88a64" stroke-width="1.5"/>',
    flaska: () => '<path d="M-22 -8 Q-24 -24 -6 -24 H12 L22 -30 V-12 L12 -8z" fill="#9fd3c7" opacity="0.8"/><rect x="-14" y="-20" width="24" height="8" rx="3" fill="#efdcb2"/><rect x="22" y="-28" width="6" height="14" rx="2" fill="#b88a64"/>',
    skylt: () => '<rect x="-3" y="-90" width="6" height="90" fill="#8a6a4a"/><path d="M0 -84 H44 L54 -76 L44 -68 H0z" fill="#c99a74"/><path d="M0 -60 H-44 L-54 -52 L-44 -44 H0z" fill="#c99a74"/><text x="12" y="-71" font-size="12" fill="#5a3a3a" font-weight="800">?</text><text x="-30" y="-47" font-size="12" fill="#5a3a3a" font-weight="800">?</text>',
    regnbagsbro: () => ['#e9a0b0', '#f2cf8d', '#a7d3b8', '#9fb7e8', '#c7a6e8'].map((f, i) => '<path d="M-150 0 Q0 ' + (-120 + i * 12) + ' 150 0" fill="none" stroke="' + f + '" stroke-width="12" opacity="0.85"/>').join(''),
    bo: () => '<ellipse cx="0" cy="-6" rx="30" ry="12" fill="#8a6a4a"/><ellipse cx="0" cy="-10" rx="22" ry="7" fill="#5d4336"/><path d="M-30 -6 q10 -6 20 0 q10 -6 20 0 q10 -6 20 0" fill="none" stroke="#b88a64" stroke-width="2"/><path d="M-14 -12 q14 6 28 0" fill="none" stroke="#e0607a" stroke-width="3"/>',
    fagel: () => '<ellipse cx="0" cy="-10" rx="12" ry="10" fill="#9fb7e8"/><circle cx="-8" cy="-18" r="7" fill="#9fb7e8"/><path d="M-15 -18 l-5 2 l5 2z" fill="#e7a35a"/><circle cx="-9" cy="-20" r="1.5" fill="#3b2b33"/><ellipse cx="2" cy="-8" rx="6" ry="4" fill="#f2cf8d"/><path d="M10 -12 l8 -4 l-2 8z" fill="#7f9fe0"/>',
    trad: () => '<rect x="-7" y="-130" width="14" height="130" rx="5" fill="#e6e0d6"/><path d="M-4 -100 h6 M-2 -70 h5 M-5 -40 h6" stroke="#3b2b33" stroke-width="2"/><circle cx="-30" cy="-140" r="36" fill="#5f8f6f"/><circle cx="20" cy="-150" r="40" fill="#6fa07f"/><circle cx="0" cy="-120" r="30" fill="#5f8f6f"/>',
    bocker: () => '<rect x="-60" y="-70" width="120" height="70" rx="4" fill="#8a6a4a"/><rect x="-54" y="-36" width="108" height="4" fill="#5d4336"/>' + ['#e0607a', '#5f86c4', '#7fb59a', '#f2cf8d', '#c7a6e8', '#e9b8c9', '#9fb7e8', '#f6c97c'].map((f, i) => '<rect x="' + (-52 + i * 13) + '" y="-64" width="10" height="26" rx="2" fill="' + f + '"/><rect x="' + (-50 + i * 13) + '" y="-30" width="10" height="26" rx="2" fill="' + f + '" opacity="0.8"/>').join(''),
    bok: () => '<rect x="-22" y="-26" width="44" height="26" rx="3" fill="#c7a6e8"/><rect x="-22" y="-26" width="6" height="26" fill="#8a6aa8"/><text x="-10" y="-9" font-size="12" fill="#fff4dc" font-weight="800">?</text>',
    smagubbe: () => '<path d="M-8 0 L-10 -20 H10 L8 0z" fill="#7fb59a"/><circle cx="0" cy="-26" r="7" fill="#f2c9a5"/><path d="M-8 -30 L0 -46 L8 -30z" fill="#e0607a"/><circle cx="-2.5" cy="-26" r="1" fill="#3b2b33"/><circle cx="2.5" cy="-26" r="1" fill="#3b2b33"/><circle cx="0" cy="-26" r="4" fill="none" stroke="#3b2b33" stroke-width="0.6"/>',
    by: () => [[-110, '#e9b8c9'], [-50, '#f2cf8d'], [10, '#a7d3b8'], [70, '#9fb7e8'], [130, '#c7a6e8']].map((h, i) => '<g transform="translate(' + h[0] + ' 0)"><rect x="-18" y="-34" width="36" height="34" rx="12" fill="' + h[1] + '"/><path d="M-24 -30 Q0 -62 24 -30z" fill="#c4683e"/><rect x="-5" y="-16" width="10" height="16" rx="5" fill="#5d4336"/><rect x="6" y="-28" width="8" height="8" rx="3" fill="#ffe7a3"/></g>').join('') + '<g transform="translate(-80 0) scale(0.7)">' + '<path d="M-8 0 L-10 -20 H10 L8 0z" fill="#7fb59a"/><circle cx="0" cy="-26" r="7" fill="#f2c9a5"/><path d="M-8 -30 L0 -46 L8 -30z" fill="#e0607a"/></g>',
    nyckel: () => '<path d="M0 -40 V-30" stroke="#e6ddff" stroke-width="1"/><circle cx="0" cy="-24" r="7" fill="none" stroke="#e2b84a" stroke-width="3.5"/><path d="M0 -17 V4 M0 -2 h6 M0 4 h5" stroke="#e2b84a" stroke-width="3.5" stroke-linecap="round"/>',
    manstrale: () => '<path d="M60 -120 L110 -120 L-40 140 L-140 140z" fill="#fff1c9" opacity="0.14"/><path d="M75 -120 L95 -120 L-70 140 L-110 140z" fill="#fff1c9" opacity="0.12"/>',
    krabba: () => '<ellipse cx="0" cy="-10" rx="18" ry="11" fill="#e0806a"/><path d="M-18 -12 q-14 -10 -10 -20 q6 2 4 8z M18 -12 q14 -10 10 -20 q-6 2 -4 8z" fill="#e0806a"/><path d="M-6 -20 v-8 M6 -20 v-8" stroke="#e0806a" stroke-width="2"/><circle cx="-6" cy="-29" r="3" fill="#fff"/><circle cx="6" cy="-29" r="3" fill="#fff"/><circle cx="-6" cy="-29" r="1.5" fill="#3b2b33"/><circle cx="6" cy="-29" r="1.5" fill="#3b2b33"/><path d="M-14 -2 l-8 6 M-8 0 l-4 7 M14 -2 l8 6 M8 0 l4 7" stroke="#c96a56" stroke-width="2"/>',
    ren: () => '<ellipse cx="0" cy="2" rx="26" ry="5" fill="#000" opacity="0.18"/><rect x="-18" y="-20" width="5" height="22" fill="#8a6a5a"/><rect x="14" y="-20" width="5" height="22" fill="#8a6a5a"/><ellipse cx="0" cy="-26" rx="24" ry="13" fill="#a8866e"/><path d="M-20 -30 L-30 -52 L-24 -54 Z" fill="#a8866e"/><ellipse cx="-32" cy="-56" rx="9" ry="8" fill="#a8866e"/><path d="M-34 -62 q-8 -14 -2 -24 M-34 -70 l-8 -4 M-30 -62 q6 -14 0 -24 M-32 -74 l6 -4" fill="none" stroke="#e6d6b8" stroke-width="2.5" stroke-linecap="round"/><circle cx="-35" cy="-57" r="1.6" fill="#3b2b33"/><ellipse cx="-4" cy="-24" rx="10" ry="6" fill="#f1ece2"/>',
    spindel: () => '<g stroke="#e6ddff" stroke-width="0.8" opacity="0.6" fill="none"><path d="M0 -40 V40 M-40 0 H40 M-28 -28 L28 28 M28 -28 L-28 28"/><circle r="12"/><circle r="24"/><circle r="36"/></g><circle cx="0" cy="0" r="5" fill="#5a4a6a"/><circle cx="0" cy="-6" r="3.5" fill="#5a4a6a"/><path d="M-5 0 l-6 -4 M-5 2 l-6 3 M5 0 l6 -4 M5 2 l6 3" stroke="#5a4a6a" stroke-width="1.5"/><circle cx="-1.2" cy="-7" r="0.8" fill="#fff"/><circle cx="1.2" cy="-7" r="0.8" fill="#fff"/>',
    lysmaskar: () => [[-40, -6], [-20, -14], [0, -4], [22, -12], [40, -2], [-30, 6], [12, 6]].map((p, i) => '<g class="glimt" style="animation-delay:' + i * 0.6 + 's"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="7" fill="#c8f7a0" opacity="0.25"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.4" fill="#e6ffc4"/></g>').join(''),
    bubbla: () => '<g class="flyt"><circle r="24" fill="#b9d3ff" opacity="0.18" stroke="#e6f0ff" stroke-width="1.5"/><circle r="16" fill="#c7a6e8" opacity="0.25"/><path d="M-10 -12 q6 -6 14 -4" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/></g>',
    lumi: () => '<g class="flyt"><circle r="44" fill="#9fd3e8" opacity="0.18"/><ellipse cx="0" cy="0" rx="28" ry="20" fill="#8fb4e8"/><path d="M24 0 L44 -16 Q40 0 44 16z" fill="#c7a6e8"/><path d="M-6 -18 q8 -16 22 -10 M-4 18 q8 14 20 8" fill="#c7a6e8" opacity="0.8"/><circle cx="-12" cy="-4" r="4" fill="#3b2b55"/><circle cx="-11" cy="-5" r="1.4" fill="#fff"/><path d="M-20 6 q4 3 8 0" fill="none" stroke="#3b2b55" stroke-width="1.8" stroke-linecap="round"/><circle cx="-18" cy="2" r="2.5" fill="#f3b9c8" opacity="0.7"/></g>',
    koraller: () => '<path d="M-30 0 V-30 M-30 -20 l-10 -14 M-30 -24 l10 -14 M0 0 V-44 M0 -30 l-12 -10 M0 -36 l10 -12 M30 0 V-26 M30 -16 l10 -10" stroke="#e98aa8" stroke-width="7" stroke-linecap="round" fill="none"/><circle cx="-50" cy="-6" r="8" fill="#f2cf8d"/><circle cx="50" cy="-8" r="10" fill="#9fd3c7"/>',
    val: () => '<path d="M-80 0 Q-80 -50 -10 -54 Q60 -54 74 -20 Q96 -40 110 -50 Q112 -16 86 4 Q50 24 -20 22 Q-80 20 -80 0z" fill="#5f7fb8"/><path d="M-76 6 Q-20 24 60 8" fill="#c9d6f0"/><circle cx="-50" cy="-14" r="4" fill="#1e2a4a"/><path d="M-60 0 Q-48 6 -36 0" fill="none" stroke="#1e2a4a" stroke-width="2.5" stroke-linecap="round"/>',
    valunge: () => '<path d="M-50 0 Q-50 -32 -6 -34 Q36 -34 46 -12 Q60 -26 70 -32 Q72 -10 54 4 Q30 16 -12 14 Q-50 12 -50 0z" fill="#7f9fd0"/><path d="M-46 4 Q-10 16 40 6" fill="#dbe4f6"/><circle cx="-30" cy="-10" r="3" fill="#1e2a4a"/><circle cx="-29" cy="-11" r="1" fill="#fff"/><path d="M-38 -1 Q-30 4 -22 -1" fill="none" stroke="#1e2a4a" stroke-width="2" stroke-linecap="round"/><path d="M-20 -36 q-4 -16 0 -22 M-14 -36 q6 -12 10 -16" fill="none" stroke="#e6f0ff" stroke-width="3" stroke-linecap="round" opacity="0.8"/>',
    ros: () => '<path d="M0 0 V-60" stroke="#5f8f6f" stroke-width="4"/><path d="M0 -30 q-18 -6 -22 -18 q14 0 22 12z M0 -40 q18 -6 22 -18 q-14 0 -22 12z" fill="#6fa07f"/><circle cy="-72" r="30" fill="#ffd1e0" opacity="0.22" class="glimt"/><circle cy="-72" r="16" fill="#e98aa8"/><path d="M-12 -72 q12 -14 24 0 q-12 10 -24 0z" fill="#f3b9c8"/><circle cy="-74" r="5" fill="#fff1f4"/>',
    vissenros: () => '<path d="M0 0 V-40 Q4 -56 20 -58" fill="none" stroke="#7a8a6a" stroke-width="4"/><path d="M0 -24 q-16 -2 -20 -12 q12 0 20 8z" fill="#8a9a7a"/><circle cx="24" cy="-50" r="12" fill="#b88a98"/><path d="M14 -50 q10 10 20 0" fill="#9a7080"/>',
    brunn: () => '<ellipse cx="0" cy="-34" rx="34" ry="10" fill="#2a3466"/><ellipse cx="4" cy="-35" rx="8" ry="3" fill="#fbe9b7" opacity="0.8"/><path d="M-34 -34 V0 H34 V-34" fill="#8f8fa8"/><path d="M-34 -24 h68 M-34 -12 h68" stroke="#76769a" stroke-width="2"/><path d="M-34 -34 Q0 -22 34 -34" fill="none" stroke="#a7a7c0" stroke-width="3"/><path d="M-30 -6 q6 -6 12 0 M10 -20 q6 -6 12 0" stroke="#7fb59a" stroke-width="3" fill="none"/>',
    kopp: () => '<circle cy="-10" r="20" fill="#e6ddff" opacity="0.15"/><path d="M-10 -18 h20 l-3 16 h-14z" fill="#d6d6e6"/><ellipse cx="0" cy="-18" rx="10" ry="3" fill="#9fb7e8"/><rect x="-3" y="-2" width="6" height="4" fill="#b9b9cc"/>',
    nattlampa: () => '<circle cy="-30" r="34" fill="#ffd99a" opacity="0.08"/><path d="M-20 -10 L-14 -46 H14 L20 -10z" fill="#8a7aa8"/><rect x="-4" y="-10" width="8" height="8" fill="#6a5a88"/><ellipse cx="0" cy="0" rx="18" ry="4" fill="#6a5a88"/>',
    gnista: () => '<g class="flyt"><circle r="22" fill="#ffd99a" opacity="0.3"/>' + stjarna5(9, '#ffe7a3') + '<circle cx="-3" cy="-1" r="1.2" fill="#5a4a3a"/><circle cx="3" cy="-1" r="1.2" fill="#5a4a3a"/></g>',
    skugga: () => '<path d="M-30 0 V-60 Q-30 -90 0 -96 Q30 -90 30 -60 V0z" fill="#1d2248" opacity="0.6"/><rect x="-24" y="-50" width="48" height="50" rx="6" fill="#c99a74"/><rect x="-26" y="-60" width="52" height="20" rx="8" fill="#9fb7e8"/><circle cx="0" cy="-74" r="12" fill="#e0607a"/>',
    stol: () => '<path d="M-30 0 Q0 12 30 0" fill="none" stroke="#8a6a4a" stroke-width="5"/><rect x="-22" y="-40" width="44" height="12" rx="5" fill="#c99a74"/><rect x="-20" y="-86" width="8" height="50" rx="4" fill="#a8704f"/><rect x="12" y="-86" width="8" height="50" rx="4" fill="#a8704f"/><rect x="-20" y="-86" width="40" height="36" rx="10" fill="#b88a64"/><path d="M-18 -28 V-2 M18 -28 V-2" stroke="#a8704f" stroke-width="5"/><g transform="translate(0 -56)"><circle r="12" fill="#e6e0f0"/><circle cy="-12" r="9" fill="#f2c9a5"/><path d="M-9 -14 Q0 -26 9 -14" fill="#e6e0f0"/></g>',
    garn: () => '<circle cy="-14" r="14" fill="#2a3466"/>' + [[-6, -18], [4, -10], [6, -20], [-4, -8]].map((p) => '<g transform="translate(' + p[0] + ' ' + p[1] + ')">' + stjarna5(3, '#fff1c9') + '</g>').join('') + '<path d="M-14 -14 q14 -10 28 0 M-12 -6 q12 -8 24 0" fill="none" stroke="#5f6fa8" stroke-width="1.5"/>',
    stjarnfilt: () => '<path d="M-110 -50 Q0 -64 110 -50 L100 40 Q0 54 -100 40z" fill="#2a3466"/><path d="M-110 -50 Q0 -64 110 -50" fill="none" stroke="#5f6fa8" stroke-width="3"/>' + [[-80, -30], [-40, 10], [-60, 20], [50, -30], [80, 10], [30, 25], [-10, -40], [60, -10]].map((p, i) => '<g transform="translate(' + p[0] + ' ' + p[1] + ')" class="glimt" style="animation-delay:' + i * 0.5 + 's">' + stjarna5(5, '#fff1c9') + '</g>').join(''),
    kista: () => '<rect x="-30" y="-30" width="60" height="30" rx="4" fill="#a8704f"/><path d="M-30 -30 Q0 -54 30 -30z" fill="#c4865e"/><rect x="-30" y="-32" width="60" height="5" fill="#e2b84a"/><rect x="-5" y="-30" width="10" height="12" rx="2" fill="#e2b84a"/>' + ['#e0607a', '#5f86c4', '#7fb59a', '#f2cf8d'].map((f, i) => '<rect x="' + (-20 + i * 11) + '" y="-50" width="6" height="22" rx="2" fill="' + f + '" transform="rotate(' + (i * 8 - 12) + ' ' + (-17 + i * 11) + ' -30)"/>').join(''),
    leksaker: () => SAKER.soldat() + '<g transform="translate(-60 0)"><rect x="-14" y="-26" width="26" height="26" rx="4" fill="#e9b8c9"/><text x="-7" y="-7" font-size="16" fill="#fff4dc" font-weight="800">A</text></g>' + '<g transform="translate(60 0)"><path d="M-20 0 v-8 h40 v8" fill="none" stroke="#b88a64" stroke-width="4"/><ellipse cx="0" cy="-20" rx="18" ry="10" fill="#c99a74"/><path d="M14 -24 q10 -16 4 -26 q-8 2 -10 10z" fill="#c99a74"/><circle cx="12" cy="-40" r="2" fill="#3b2b33"/></g>',
    soldat: () => '<ellipse cx="0" cy="2" rx="14" ry="3" fill="#000" opacity="0.18"/><rect x="-8" y="-20" width="6" height="20" fill="#3b4a8a"/><rect x="2" y="-20" width="6" height="20" fill="#3b4a8a"/><rect x="-10" y="-46" width="20" height="28" rx="4" fill="#d0546a"/><circle cx="0" cy="-54" r="8" fill="#f2c9a5"/><rect x="-8" y="-74" width="16" height="16" rx="3" fill="#3b2b33"/><circle cx="-3" cy="-54" r="1.2" fill="#3b2b33"/><circle cx="3" cy="-54" r="1.2" fill="#3b2b33"/><ellipse cx="14" cy="-30" rx="10" ry="7" fill="#f2cf8d"/><ellipse cx="14" cy="-34" rx="10" ry="3" fill="#fff4dc"/><path d="M8 -40 l-6 -10" stroke="#b88a64" stroke-width="2" stroke-linecap="round"/>',
    pennor: () => '<g transform="rotate(-20)"><rect x="-40" y="-4" width="70" height="8" rx="2" fill="#f2cf8d"/><path d="M30 -4 L42 0 L30 4z" fill="#e9dcc3"/><path d="M38 -1.5 L42 0 L38 1.5z" fill="#3b2b33"/><rect x="-44" y="-4" width="6" height="8" rx="2" fill="#e9b8c9"/></g>',
    parad: () => SAKER.soldat() + '<g transform="translate(-50 0)"><path d="M-20 0 v-8 h40 v8" fill="none" stroke="#b88a64" stroke-width="4"/><ellipse cx="0" cy="-20" rx="18" ry="10" fill="#c99a74"/><path d="M14 -24 q10 -16 4 -26 q-8 2 -10 10z" fill="#c99a74"/><circle cx="12" cy="-40" r="2" fill="#3b2b33"/></g>' + '<g transform="translate(-100 0)"><rect x="-12" y="-24" width="24" height="24" rx="4" fill="#a7d3b8"/><text x="-5" y="-6" font-size="14" fill="#fff4dc" font-weight="800">B</text></g>' + '<g transform="translate(50 0)"><path d="M-10 0 L-14 -26 H14 L10 0z" fill="#c7a6e8"/><circle cx="0" cy="-34" r="9" fill="#f2c9a5"/><path d="M-9 -36 Q0 -48 9 -36" fill="#e2b84a"/><circle cx="-3" cy="-34" r="1.2" fill="#3b2b33"/><circle cx="3" cy="-34" r="1.2" fill="#3b2b33"/></g>'
  };

  function tolka(spec) {
    const delar = spec.split('|').map((d) => d.trim()).filter(Boolean);
    const ut = { stamning: delar[0] || 'natt', flaggor: {}, barn: [140, MARK], figur: [205, MARK], saker: [] };
    for (const d of delar.slice(1)) {
      const t = d.split(/\s+/);
      if (t.length === 1) { ut.flaggor[t[0]] = true; continue; }
      if (t[0] === 'barn' || t[0] === 'figur') { ut[t[0]] = [parseFloat(t[1]), t[2] ? parseFloat(t[2]) : MARK]; continue; }
      ut.saker.push({ namn: t[0], x: parseFloat(t[1]), y: parseFloat(t[2]), s: t[3] ? parseFloat(t[3]) : 1 });
    }
    ut.flaggor.harMane = ut.saker.some((s) => s.namn === 'mane');
    return ut;
  }

  /* Ritar en scen. ctx: { plats, figur, figurFarg, fro, prototyp } */
  function rita(spec, ctx) {
    const b = tolka(spec);
    const r = slump(ctx.fro || spec);
    const platsId = b.flaggor.hemma ? 'rum' : ctx.plats;
    const h = HIMMEL[b.stamning] || HIMMEL.natt;
    const fl = Object.assign({}, b.flaggor);
    let svg = '<defs><linearGradient id="himmel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + h[0] + '"/><stop offset="0.6" stop-color="' + h[1] + '"/><stop offset="1" stop-color="' + h[2] + '"/></linearGradient>' +
      '<radialGradient id="vinjett" cx="0.5" cy="0.45" r="0.75"><stop offset="0.6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#0a0d24" stop-opacity="0.55"/></radialGradient>' +
      '<radialGradient id="glod" cx="0.5" cy="0.6" r="0.55"><stop offset="0" stop-color="#ffd99a" stop-opacity="0.28"/><stop offset="1" stop-color="#ffd99a" stop-opacity="0"/></radialGradient>' +
      '<clipPath id="fonsterKlipp"><rect x="263" y="41" width="94" height="84" rx="9"/></clipPath></defs>';
    svg += platsBakgrund(platsId, b.stamning, r, fl);
    if (b.stamning === 'varm') svg += '<rect width="400" height="300" fill="url(#glod)"/>';
    const svavar = platsId === 'rymden' || fl.rymd;
    for (const sak of b.saker) {
      const ritare = SAKER[sak.namn];
      if (!ritare) continue;
      svg += g(sak.x, sak.y, sak.s, ritare({ plats: ctx.plats }));
    }
    if (fl.sov) {
      svg += sovscen(ctx.figur, ctx.figurFarg);
    } else if (!fl.ingen) {
      svg += barnet(b.barn[0], b.barn[1], b.stamning, ctx.hy).replace('<g transform', '<g class="' + (svavar ? 'flyt' : 'gunga') + '"><g transform') + '</g>';
      // Finns en färdig 3D-figur läggs den ovanpå bilden av appen i stället.
      if (!(ctx.utanKompis && S.figurBilder && S.figurBilder[ctx.figur])) svg += figuren(ctx.figur, b.figur[0], b.figur[1], 0.95, { farg: ctx.figurFarg, svavar });
    }
    if (fl.ibubbla && !fl.ingen) {
      const cx = (b.barn[0] + b.figur[0]) / 2;
      svg += '<g class="flyt"><circle cx="' + cx + '" cy="' + (MARK - 42) + '" r="' + (Math.abs(b.figur[0] - b.barn[0]) / 2 + 48) + '" fill="#b9d3ff" opacity="0.14" stroke="#e6f0ff" stroke-width="2"/></g>';
    }
    if (b.stamning === 'mork') svg += '<rect width="400" height="300" fill="#0a0d24" opacity="0.18"/>';
    svg += '<rect width="400" height="300" fill="url(#vinjett)"/>';
    if (ctx.prototyp !== false) {
      svg += '<g font-family="ui-rounded, system-ui, sans-serif" font-size="10" font-weight="700"><rect x="304" y="278" width="88" height="16" rx="8" fill="#0a0d24" opacity="0.55"/><text x="348" y="289.5" text-anchor="middle" fill="#e6ddff">Prototypbild</text></g>';
    }
    // Unika id:n per bild så att flera bilder på samma sida inte krockar.
    const unik = 'b' + Math.floor(r() * 1e9).toString(36);
    svg = svg.replace(/id="(himmel|vinjett|glod|fonsterKlipp)"/g, 'id="$1-' + unik + '"').replace(/url\(#(himmel|vinjett|glod|fonsterKlipp)\)/g, 'url(#$1-' + unik + ')');
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" role="img" aria-label="' + (ctx.alt || '').replace(/"/g, '&quot;') + '">' + svg + '</svg>';
  }

  /* Bara kompisen, att lägga ovanpå en färdig illustration (som ritas utan kompis). */
  function ritaKompislager(spec, ctx) {
    const b = tolka(spec);
    if (b.flaggor.ingen || b.flaggor.sov) return '';
    const svavar = ctx.plats === 'rymden' || b.flaggor.rymd;
    const bildfil = S.figurBilder && S.figurBilder[ctx.figur];
    if (bildfil) {
      // 3D-figuren placeras där scenbeskrivningen säger att kompisen står.
      return '<img class="kompisfigur ' + (svavar ? 'flyt' : 'gunga') + '" src="illustrationer/' + bildfil + '" alt="" aria-hidden="true" style="left:' + (b.figur[0] / 4) + '%;bottom:' + ((300 - b.figur[1]) / 3) + '%">';
    }
    return '<svg class="kompislager" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" aria-hidden="true">' +
      figuren(ctx.figur, b.figur[0], b.figur[1], 0.95, { farg: ctx.figurFarg, svavar }) + '</svg>';
  }

  /* Liten ikon av en figur, för valkorten. */
  function figurIkon(id, farg) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-45 -95 90 100" aria-hidden="true">' + (FIGURER[id] || FIGURER.egen)({ ogon: ogonFn(false), farg: farg || '#b9a3e3' }) + '</svg>';
  }

  /* Liten miniatyr av en plats, för valkorten. */
  function platsIkon(id) {
    const r = slump('ikon-' + id);
    let inner = platsBakgrund(id, 'natt', r, { inne: id === 'slott' ? false : false });
    const unik = 'i' + id;
    const h = HIMMEL.natt;
    inner = inner.replace(/url\(#(himmel|fonsterKlipp)\)/g, 'url(#$1-' + unik + ')');
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="himmel-' + unik + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + h[0] + '"/><stop offset="0.6" stop-color="' + h[1] + '"/><stop offset="1" stop-color="' + h[2] + '"/></linearGradient><clipPath id="fonsterKlipp-' + unik + '"><rect x="263" y="41" width="94" height="84" rx="9"/></clipPath></defs>' + inner + '</svg>';
  }

  S.illustrationer = { sak: (namn, ctx) => (SAKER[namn] ? SAKER[namn](ctx || {}) : ''), rita, ritaKompislager, figurIkon, platsIkon, tolka, SAKER: Object.keys(SAKER) };
})();
