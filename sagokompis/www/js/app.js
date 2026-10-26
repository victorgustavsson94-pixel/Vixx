/* Sagokompis – appens flöde: start, val, förhandsvisning, läsvy och uppläsning. */
(function () {
  const S = window.Sagokompis;
  const $ = (id) => document.getElementById(id);
  const LAGRING = 'sagokompis.v1';

  const TEMA_IKONER = {
    vanskap: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    mod: '<path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    fantasi: '<path d="M5 19L15 9"/><path d="M15 3v3M18 6h3M15 9l2.5-2.5M19 11v2M11 4H9"/><path d="M15 9l-1.5-1.5"/>',
    nyfikenhet: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>',
    omtanke: '<path d="M4 14l4 4h7l4-4"/><path d="M12 13s-4-2.4-4-5.4A2.2 2.2 0 0 1 12 6.3a2.2 2.2 0 0 1 4 1.3c0 3-4 5.4-4 5.4z"/>',
    trygghet: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M14 15a3 3 0 1 1-3-4 2.4 2.4 0 0 0 3 4z"/>'
  };

  const STEG = ['namn', 'figur', 'plats', 'tema', 'forhand'];
  const STEG_RUBRIK = {
    namn: 'Vem ska sagan handla om?',
    figur: 'Vem följer med på äventyret?',
    plats: 'Vart ska ni resa?',
    tema: 'Vad ska sagan handla om?',
    forhand: 'Så här blir sagan'
  };

  const tillstand = {
    val: { namn: '', barnPron: 'hen', figur: null, plats: null, tema: null, spanning: 'pirrig', egenFigurNamn: '', egenFigurPron: 'hen', egenFigurFarg: '#b9a3e3' },
    steg: 0,
    valdSagaId: null,
    saga: null, // pågående byggd saga
    pagaende: null, // { val, sagaId, pos, valt, hjalpKlar, forra, moss }
    historik: [], // lästa sagor: { sagaId, kortTitel, figur }
    scen: 0,
    installningar: { tempo: 0.95, kvall: false, timer: 'slut', ljud: true }
  };

  let upplasare = null;
  let vantande = null; // { del, losa } när uppläsningen väntar på ett val eller hjälp
  let timerId = null;
  let timerSlut = 0;

  /* ---------- Lagring (fungerar även om den är avstängd) ---------- */
  function spara() {
    try {
      localStorage.setItem(LAGRING, JSON.stringify({ val: tillstand.val, pagaende: tillstand.pagaende, installningar: tillstand.installningar, historik: tillstand.historik.slice(-30) }));
    } catch (e) { /* privat läge e.d. – appen fungerar ändå */ }
  }
  function lasIn() {
    try {
      const data = JSON.parse(localStorage.getItem(LAGRING) || 'null');
      if (!data) return;
      Object.assign(tillstand.val, data.val || {});
      Object.assign(tillstand.installningar, data.installningar || {});
      if (data.pagaende && S.sagor.some((s) => s.id === data.pagaende.sagaId)) tillstand.pagaende = data.pagaende;
      if (Array.isArray(data.historik)) tillstand.historik = data.historik;
    } catch (e) { /* trasig data ignoreras */ }
  }

  function meddela(text) {
    const m = $('meddelande');
    m.textContent = '';
    setTimeout(() => { m.textContent = text; }, 50);
  }

  function visaVy(id) {
    document.querySelectorAll('.vy').forEach((v) => { v.hidden = v.id !== id; });
    window.scrollTo(0, 0);
  }

  /* ---------- Bilder ---------- */
  function bildFor(saga, scenIndex, val, klass) {
    const scen = saga.scener[scenIndex];
    const nyckel = saga.id + '/' + val.plats + '/scen-' + scen.nummer;
    const fil = S.fardigaBilder && S.fardigaBilder[nyckel];
    const video = S.fardigaVideor && S.fardigaVideor[nyckel];
    const ctx = S.motor.skapaSammanhang(val);
    const spec = S.motor.fyllI(scen.bild, ctx);
    const svg = S.illustrationer.rita(spec, { plats: val.plats, figur: val.figur, figurFarg: val.egenFigurFarg, fro: scen.bildId, alt: scen.bildtext });
    const wrap = document.createElement('div');
    wrap.className = klass || '';
    wrap.dataset.bildId = scen.bildId;
    if (video && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      wrap.innerHTML = '<video autoplay muted loop playsinline preload="auto"' + (fil ? ' poster="illustrationer/' + fil + '"' : '') + ' aria-label="' + scen.bildtext.replace(/"/g, '&quot;') + '"><source src="illustrationer/' + video + '" type="video/mp4"></video>';
      wrap.insertAdjacentHTML('beforeend', S.illustrationer.ritaKompislager(spec, { plats: val.plats, figur: val.figur, figurFarg: val.egenFigurFarg }));
      return wrap;
    }
    wrap.classList.add('levande');
    if (fil) {
      const img = new Image();
      img.alt = scen.bildtext;
      img.src = 'illustrationer/' + fil;
      img.decoding = 'async';
      img.onerror = () => { wrap.innerHTML = svg; };
      wrap.appendChild(img);
      wrap.insertAdjacentHTML('beforeend', S.illustrationer.ritaKompislager(spec, { plats: val.plats, figur: val.figur, figurFarg: val.egenFigurFarg }));
    } else {
      wrap.innerHTML = svg;
    }
    return wrap;
  }

  /* ---------- Startsida ---------- */
  function visaStart() {
    if (S.effekter) S.effekter.stjarnhimmel(document.querySelector('.start-himmel'));
    const fig = $('start-figurer');
    if (S.startBild) {
      document.getElementById('vy-start').style.setProperty('--startbild', 'url("illustrationer/' + S.startBild + '")');
      document.getElementById('vy-start').classList.add('har-startbild');
    } else if (!fig.childElementCount) {
      fig.innerHTML = ['nalle', 'rav', 'drake', 'robot', 'kanin', 'uggla'].map((id) => S.figurBilder && S.figurBilder[id] ? '<img src="illustrationer/' + S.figurBilder[id] + '" alt="">' : S.illustrationer.figurIkon(id)).join('');
    }
    const p = tillstand.pagaende;
    $('fortsatt-kort').hidden = !p;
    if (p) {
      try {
        $('fortsatt-titel').textContent = byggAktuell().titel;
      } catch (e) {
        tillstand.pagaende = null;
        $('fortsatt-kort').hidden = true;
      }
    }
    $('knapp-borja').textContent = p ? 'Skapa en ny saga' : 'Börja välja';
    $('knapp-borja').className = p ? 'knapp sekundar stor' : 'knapp primar stor';
    visaVy('vy-start');
  }

  /* ---------- Val ---------- */
  function byggValkort() {
    $('lista-figurer').innerHTML = S.figurer.map((f) =>
      '<button class="valkort figur" role="radio" aria-checked="false" data-grupp="figur" data-varde="' + f.id + '">' +
      '<span class="ikon">' + (S.figurBilder && S.figurBilder[f.id] ? '<img src="illustrationer/' + S.figurBilder[f.id] + '" alt="">' : S.illustrationer.figurIkon(f.id, tillstand.val.egenFigurFarg)) + '</span>' +
      '<span class="namn">' + (f.egen ? f.etikett : f.etikett + ' ' + f.namn) + '</span><span class="besk">' + f.beskrivning + '</span></button>').join('');
    $('lista-platser').innerHTML = S.platser.map((p) =>
      '<button class="valkort plats" role="radio" aria-checked="false" data-grupp="plats" data-varde="' + p.id + '">' +
      '<span class="ikon">' + (S.platsBilder && S.platsBilder[p.id] ? '<img src="illustrationer/' + S.platsBilder[p.id] + '" alt="">' : S.illustrationer.platsIkon(p.id)) + '</span>' +
      '<span class="namn">' + p.etikett + '</span><span class="besk">' + p.beskrivning + '</span></button>').join('');
    $('lista-teman').innerHTML = S.teman.map((t) =>
      '<button class="valkort tema" role="radio" aria-checked="false" data-grupp="tema" data-varde="' + t.id + '">' +
      '<span class="ikon"><span class="tema-ikon"><svg viewBox="0 0 24 24" aria-hidden="true">' + TEMA_IKONER[t.id] + '</svg></span></span>' +
      '<span class="namn">' + t.etikett + '</span><span class="besk">' + t.beskrivning + '</span></button>').join('');
  }

  function uppdateraMarkeringar() {
    document.querySelectorAll('[role="radio"][data-varde]').forEach((el) => {
      const grupp = el.dataset.grupp || el.closest('[data-grupp]').dataset.grupp;
      const vald = String(tillstand.val[grupp] ?? tillstand.installningar[grupp]) === el.dataset.varde;
      el.setAttribute('aria-checked', vald ? 'true' : 'false');
      el.tabIndex = 0;
    });
    $('egen-figur').hidden = tillstand.val.figur !== 'egen';
  }

  function visaSteg(i) {
    tillstand.steg = i;
    const namn = STEG[i];
    document.querySelectorAll('.steg').forEach((s) => { s.hidden = s.dataset.steg !== namn; });
    $('val-rubrik').textContent = STEG_RUBRIK[namn];
    $('steg-text').textContent = 'Steg ' + (i + 1) + ' av ' + STEG.length;
    $('steg-prickar').innerHTML = STEG.map((_, j) => '<li class="' + (j === i ? 'aktiv' : j < i ? 'klar' : '') + '"></li>').join('');
    $('knapp-nasta').textContent = namn === 'forhand' ? 'Skapa min saga' : 'Nästa';
    if (namn === 'forhand') visaForhand();
    uppdateraMarkeringar();
    uppdateraNastaKnapp();
    window.scrollTo(0, 0);
    $('val-rubrik').focus({ preventScroll: true });
  }

  function stegKlart(namn) {
    const v = tillstand.val;
    if (namn === 'namn') return v.namn.trim().length > 0;
    if (namn === 'figur') return !!v.figur && (v.figur !== 'egen' || v.egenFigurNamn.trim().length > 0);
    if (namn === 'plats') return !!v.plats;
    if (namn === 'tema') return !!v.tema;
    if (namn === 'forhand') return !!tillstand.valdSagaId;
    return true;
  }

  function uppdateraNastaKnapp() {
    const namn = STEG[tillstand.steg];
    // Knappen är alltid tryckbar för namn/egen figur, så att barnet får en förklaring i stället för en död knapp.
    const klart = stegKlart(namn);
    $('knapp-nasta').disabled = !klart && !['namn', 'figur'].includes(namn);
  }

  function visaForhand() {
    const v = tillstand.val;
    const lista = S.motor.passandeSagor(v);
    if (!tillstand.valdSagaId || !lista.some((s) => s.id === tillstand.valdSagaId)) {
      const saga = S.motor.valjSaga(v);
      tillstand.valdSagaId = saga ? saga.id : null;
    }
    $('knapp-byt-saga').hidden = lista.length < 2;
    if (!tillstand.valdSagaId) {
      $('forhand-titel').textContent = 'Den kombinationen har vi ingen saga för än';
      $('forhand-text').textContent = 'Prova en annan plats eller ett annat tema.';
      $('forhand-bild').innerHTML = '';
      return;
    }
    const saga = S.motor.byggSaga(tillstand.valdSagaId, v, { valt: 'a', forra: forraTitel(tillstand.valdSagaId, v.figur) });
    const figur = S.figurer.find((f) => f.id === v.figur);
    $('forhand-titel').textContent = saga.titel;
    $('forhand-text').textContent = saga.sammanfattning;
    $('fh-namn').textContent = v.namn.trim();
    $('fh-figur').textContent = figur.egen ? v.egenFigurNamn.trim() : figur.etikett + ' ' + figur.namn;
    $('fh-plats').textContent = saga.plats.etikett;
    $('fh-tema').textContent = saga.tema.etikett;
    $('forhand-langd').textContent = 'Cirka ' + saga.minuter + ' minuters uppläsning · 5 scener · ' + (S.sagor.find((s) => s.id === saga.id).alder || '');
    const bild = $('forhand-bild');
    bild.innerHTML = '';
    bild.appendChild(bildFor(saga, 0, v));
  }

  function nastaSteg() {
    const namn = STEG[tillstand.steg];
    if (namn === 'namn' && !stegKlart('namn')) { $('namn-fel').hidden = false; $('falt-namn').focus(); return; }
    if (namn === 'figur' && !stegKlart('figur')) {
      if (tillstand.val.figur === 'egen') { $('egen-fel').hidden = false; $('falt-egen-namn').focus(); }
      else meddela('Välj en kompis först.');
      return;
    }
    if (!stegKlart(namn)) return;
    spara();
    if (namn === 'forhand') return skapaSaga();
    visaSteg(tillstand.steg + 1);
  }

  function valjVarde(grupp, varde) {
    if (grupp === 'timer') {
      tillstand.installningar.timer = varde;
      startaTimer();
    } else {
      tillstand.val[grupp] = varde;
      if (['figur', 'plats', 'tema'].includes(grupp)) tillstand.valdSagaId = null;
      if (grupp === 'spanning') visaForhand();
      if (grupp === 'egenFigurFarg') byggValkort();
      if (grupp === 'figur' && varde === 'egen') setTimeout(() => $('falt-egen-namn').focus(), 50);
    }
    uppdateraMarkeringar();
    uppdateraNastaKnapp();
    spara();
  }

  /* ---------- Skapa och läsa sagan ---------- */
  function skapaSaga() {
    const val = JSON.parse(JSON.stringify(tillstand.val));
    const ny = { val, sagaId: tillstand.valdSagaId, pos: 0, valt: null, hjalpKlar: false, forra: forraTitel(tillstand.valdSagaId, val.figur), moss: [] };
    try {
      S.motor.byggSaga(ny.sagaId, val, ny);
    } catch (e) {
      meddela('Något gick fel när sagan skulle skapas. Prova igen.');
      return;
    }
    if (upplasare) upplasare.stoppa();
    tillstand.pagaende = ny;
    spara();
    visaVy('vy-laddar');
    const texter = ['Sagan vävs ihop …', 'Stjärnorna hjälper till …', val.namn.trim() + 's saga är nästan klar …'];
    texter.forEach((t, i) => setTimeout(() => { $('laddar-text').textContent = t; }, i * 700));
    if (S.effekter) { S.effekter.kann('MEDIUM'); S.effekter.stjarnregn(26, 2200); }
    const vanta = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 200 : 2200;
    setTimeout(() => oppnaSaga(0), vanta);
  }

  /* Bygger den pågående sagan med barnets val, hjälp och fortsättning. */
  function byggAktuell() {
    const p = tillstand.pagaende;
    return S.motor.byggSaga(p.sagaId, p.val, { valt: p.valt, hjalpKlar: p.hjalpKlar, forra: p.forra });
  }

  /* Förra kvällens saga med samma kompis, så att kompisen kan minnas den. */
  function forraTitel(sagaId, figur) {
    for (let i = tillstand.historik.length - 1; i >= 0; i--) {
      const h = tillstand.historik[i];
      if (h.figur === figur && h.sagaId !== sagaId) return h.kortTitel;
    }
    return null;
  }

  /* Ett förslag till nästa kvälls äventyr: samma plats om det går, nytt tema, inte nyligen läst. */
  function nastaAventyr() {
    const p = tillstand.pagaende;
    const lasta = tillstand.historik.slice(-6).map((h) => h.sagaId);
    const kandidater = S.sagor.filter((s) => s.id !== p.sagaId && (s.figurer === 'alla' || s.figurer.includes(p.val.figur)));
    const ranka = (s) => (s.platser.includes(p.val.plats) ? 0 : 2) + (lasta.includes(s.id) ? 3 : 0) + (s.tema === p.val.tema ? 1 : 0);
    kandidater.sort((a, b) => ranka(a) - ranka(b));
    const basta = kandidater.filter((s) => ranka(s) === ranka(kandidater[0]));
    return basta[Math.floor(Math.random() * basta.length)];
  }

  function oppnaSaga(startPos) {
    const p = tillstand.pagaende;
    if (!p.moss) p.moss = [];
    const saga = byggAktuell();
    tillstand.saga = saga;
    $('saga-titel').textContent = saga.titel;
    $('slut-namn').textContent = p.val.namn.trim();
    $('scenbild').innerHTML = '';
    if (upplasare) upplasare.stoppa();
    upplasare = S.tal.skapaUpplasare(saga, {
      scen: () => {},
      stycke: (si, pi) => {
        if (si !== tillstand.scen) visaScen(si, true);
        markeraStycke(pi);
        tillstand.pagaende.pos = upplasare.position;
        spara();
      },
      status: (spelar) => {
        $('knapp-spela').classList.toggle('spelar', !!spelar);
        $('knapp-spela').setAttribute('aria-label', spelar ? 'Pausa uppläsningen' : 'Läs upp sagan');
        if (!spelar) markeraStycke(-1);
        if (S.ljud && tillstand.installningar.ljud) { if (spelar) S.ljud.starta(tillstand.saga.plats.id); else S.ljud.stoppa(); }
      },
      paus: (del) => new Promise((losa) => {
        vantande = { del, losa };
        if (del.scen !== tillstand.scen) visaScen(del.scen, true);
        const ruta = document.querySelector(del.paus === 'val' ? '.valruta' : '.hjalpruta');
        if (ruta) { ruta.classList.add('vantar'); ruta.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      }),
      klar: () => {
        visaSlut();
        if (S.effekter) S.effekter.stjarnregn(18, 4200);
        if (S.ljud) S.ljud.stoppa();
        tillstand.pagaende.pos = 0;
        const saga = tillstand.saga;
        tillstand.historik = tillstand.historik.filter((h) => h.sagaId !== saga.id).concat([{ sagaId: saga.id, kortTitel: saga.kortTitel, figur: tillstand.pagaende.val.figur }]);
        spara();
        if (tillstand.installningar.timer === 'slut') somna();
      },
      fel: (text) => visaTalInfo(text)
    });
    upplasare.sattPosition(startPos || 0);
    forberedTal();
    visaScen(upplasare.scenForPosition(startPos || 0), false);
    visaVy('vy-las');
    uppdateraTempo();
  }

  async function forberedTal() {
    const knapp = $('knapp-spela');
    if (!upplasare.stods) {
      knapp.hidden = true;
      $('knapp-omstart').hidden = true;
      document.querySelector('.tempo').hidden = true;
      visaTalInfo('Uppläsning stöds inte på den här enheten. Du kan läsa sagan själv och bläddra mellan scenerna med knapparna.');
      return;
    }
    knapp.hidden = false;
    $('tal-info').hidden = true;
    const r = await upplasare.forbered();
    if (!r.svenskRost) {
      visaTalInfo('Ingen svensk röst hittades. På iPhone kan du lägga till en under Inställningar › Hjälpmedel › Talat innehåll › Röster › Svenska. Uppläsningen fungerar ändå, men kan låta som en annan röst.');
    }
  }

  function visaTalInfo(text) {
    $('tal-info').textContent = text;
    $('tal-info').hidden = false;
  }

  function visaScen(si, frånUppläsning) {
    const saga = tillstand.saga;
    const scen = saga.scener[si];
    const forsta = tillstand.scen !== si || !$('scenbild').childElementCount;
    const behallScroll = frånUppläsning === 'behall';
    tillstand.scen = si;
    if (forsta) {
      const ram = $('scenbild');
      const gamla = Array.from(ram.children);
      const ny = bildFor(saga, si, tillstand.pagaende.val, gamla.length ? 'tonar-in' : '');
      ram.appendChild(ny);
      gamla.forEach((g) => { g.classList.add('tonar-ut'); setTimeout(() => g.remove(), 1200); });
      if (gamla.length && S.effekter) S.effekter.scenbyte(document.querySelector('.bildram'));
      placeraMus(saga, si);
    }
    uppdateraMusRakning();
    $('scen-prickar').innerHTML = saga.scener.map((_, j) => '<li class="' + (j === si ? 'aktiv' : j < si ? 'klar' : '') + '"></li>').join('');
    $('scen-etikett').textContent = 'Scen ' + scen.nummer + ' av ' + saga.scener.length;
    $('scen-rubrik').textContent = scen.rubrik;
    const text = $('scen-text');
    const skydda = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    text.innerHTML = scen.stycken.map((s, i) => {
      let html = '<p>' + skydda(s) + '</p>';
      if (scen.val && !scen.val.valt && scen.val.efter === i) {
        html += '<div class="valruta" role="group" aria-label="Du bestämmer"><p class="ruta-rubrik">Du bestämmer!</p><p class="ruta-fraga">' + skydda(scen.val.fraga) + '</p><div class="ruta-knappar">' +
          scen.val.alternativ.map((a) => '<button class="knapp valknapp" data-vag="' + a.id + '">' + skydda(a.knapp) + '</button>').join('') + '</div></div>';
      }
      if (scen.hjalp && !scen.hjalp.klar && scen.hjalp.efter === i) {
        html += '<div class="hjalpruta" role="group" aria-label="Hjälp till"><p class="ruta-rubrik">Hjälp till!</p><p class="ruta-fraga">' + skydda(scen.hjalp.uppmaning) + '</p>' +
          '<button class="hjalpknapp" data-kvar="' + scen.hjalp.antal + '" aria-label="Tryck här. ' + scen.hjalp.antal + ' tryck kvar.">' +
          '<svg viewBox="-60 -70 120 100" aria-hidden="true">' + S.illustrationer.sak(scen.hjalp.ikon, { plats: saga.plats.id }) + '</svg>' +
          '<span class="hjalp-prickar">' + '<i></i>'.repeat(scen.hjalp.antal) + '</span></button></div>';
      }
      return html;
    }).join('');
    text.classList.remove('byter');
    void text.offsetWidth;
    text.classList.add('byter');
    $('knapp-forra').disabled = si === 0;
    $('knapp-nasta-scen').disabled = si === saga.scener.length - 1;
    $('slut-kort').hidden = true;
    if ((frånUppläsning || forsta) && !behallScroll) meddela('Scen ' + scen.nummer + ': ' + scen.rubrik);
    if (!frånUppläsning) window.scrollTo(0, 0);
  }

  /* ---------- Val i sagan och hjälp till ---------- */
  function sagaAndrad() {
    const saga = byggAktuell();
    tillstand.saga = saga;
    spara();
    if (vantande) {
      const v = vantande;
      vantande = null;
      v.losa(saga);
    } else if (upplasare) {
      upplasare.bytSaga(saga);
    }
    visaScen(tillstand.scen, 'behall');
  }

  function valjVag(id, knapp) {
    if (!tillstand.pagaende || tillstand.pagaende.valt) return;
    if (S.effekter) { const r = knapp.getBoundingClientRect(); S.effekter.stoft(r.left + r.width / 2, r.top + r.height / 2, 16); S.effekter.kann('MEDIUM'); }
    tillstand.pagaende.valt = id;
    meddela('Du valde: ' + knapp.textContent);
    setTimeout(sagaAndrad, 350);
  }

  function hjalpTryck(knapp) {
    const kvar = parseInt(knapp.dataset.kvar, 10) - 1;
    knapp.dataset.kvar = String(kvar);
    const prickar = knapp.querySelectorAll('.hjalp-prickar i');
    if (prickar[prickar.length - 1 - kvar]) prickar[prickar.length - 1 - kvar].classList.add('tand');
    knapp.classList.remove('puls');
    void knapp.offsetWidth;
    knapp.classList.add('puls');
    if (S.effekter) { const r = knapp.getBoundingClientRect(); S.effekter.stoft(r.left + r.width / 2, r.top + r.height / 2, 10 + (3 - kvar) * 4); S.effekter.kann(kvar ? 'LIGHT' : 'HEAVY'); }
    if (kvar > 0) { knapp.setAttribute('aria-label', 'Tryck igen. ' + kvar + ' tryck kvar.'); return; }
    const scen = tillstand.saga.scener[tillstand.scen];
    const ruta = knapp.closest('.hjalpruta');
    ruta.classList.add('klar');
    ruta.querySelector('.ruta-fraga').textContent = scen.hjalp ? scen.hjalp.klart : 'Bra jobbat!';
    if (S.effekter) S.effekter.stjarnregn(14, 2400);
    meddela(scen.hjalp ? scen.hjalp.klart : 'Bra jobbat!');
    tillstand.pagaende.hjalpKlar = true;
    setTimeout(sagaAndrad, vantande ? 600 : 1800);
  }

  /* ---------- Den gömda musen ---------- */
  function placeraMus(saga, si) {
    const ram = document.querySelector('.bildram');
    const gammal = ram.querySelector('.gomd-mus');
    if (gammal) gammal.remove();
    let h = 0;
    const fro = saga.scener[si].bildId + saga.plats.id;
    for (let i = 0; i < fro.length; i++) h = (h * 31 + fro.charCodeAt(i)) >>> 0;
    const x = 8 + (h % 80);
    const y = 60 + ((h >> 8) % 26);
    const hittad = tillstand.pagaende.moss.includes(si);
    ram.insertAdjacentHTML('beforeend', '<button class="gomd-mus' + (hittad ? ' hittad' : '') + '" style="left:' + x + '%;top:' + y + '%" aria-label="' + (hittad ? 'Här bor musen du hittade' : 'Någon gömmer sig i bilden. Tryck för att säga hej') + '">' +
      '<svg viewBox="-20 -30 40 34" aria-hidden="true"><path d="M12 -6 Q22 -6 22 -16" fill="none" stroke="#c9b8d8" stroke-width="2" stroke-linecap="round"/><ellipse cx="0" cy="-10" rx="13" ry="10" fill="#d9cfe6"/><circle cx="-7" cy="-20" r="6" fill="#d9cfe6"/><circle cx="7" cy="-20" r="6" fill="#d9cfe6"/><circle cx="-7" cy="-20" r="3.3" fill="#f3b9c8"/><circle cx="7" cy="-20" r="3.3" fill="#f3b9c8"/><circle cx="-4" cy="-12" r="1.6" fill="#3b2b33"/><circle cx="4" cy="-12" r="1.6" fill="#3b2b33"/><circle cx="0" cy="-7" r="1.7" fill="#e88aa0"/></svg></button>');
  }

  function uppdateraMusRakning() {
    const n = tillstand.pagaende ? tillstand.pagaende.moss.length : 0;
    $('mus-rakning').textContent = n + ' av 5';
    $('mus-rakning').parentElement.setAttribute('aria-label', 'Hittade möss: ' + n + ' av 5');
  }

  function hittaMus(knapp) {
    const p = tillstand.pagaende;
    if (p.moss.includes(tillstand.scen)) {
      knapp.classList.remove('hej'); void knapp.offsetWidth; knapp.classList.add('hej');
      return;
    }
    p.moss.push(tillstand.scen);
    spara();
    knapp.classList.add('hittad', 'hej');
    knapp.setAttribute('aria-label', 'Här bor musen du hittade');
    if (S.effekter) { const r = knapp.getBoundingClientRect(); S.effekter.stoft(r.left + r.width / 2, r.top + r.height / 2, 14); S.effekter.kann('MEDIUM'); }
    uppdateraMusRakning();
    meddela(p.moss.length === 5 ? 'Du hittade alla fem mössen!' : 'Du hittade musen! ' + p.moss.length + ' av 5.');
    if (p.moss.length === 5 && S.effekter) S.effekter.stjarnregn(20, 3000);
  }

  /* ---------- Slutet och nästa kväll ---------- */
  function visaSlut() {
    $('slut-kort').hidden = false;
    const nasta = nastaAventyr();
    tillstand.nastaSagaId = nasta ? nasta.id : null;
    $('nasta-kvall').hidden = !nasta;
    if (nasta) {
      const p = tillstand.pagaende;
      const byggd = S.motor.byggSaga(nasta.id, Object.assign({}, p.val, { plats: nasta.platser.includes(p.val.plats) ? p.val.plats : nasta.platser[0], tema: nasta.tema }));
      $('nasta-titel').textContent = byggd.titel;
    }
  }

  function markeraStycke(pi) {
    document.querySelectorAll('#scen-text p').forEach((p, i) => {
      const aktiv = i === pi;
      p.classList.toggle('laser', aktiv);
      if (aktiv) {
        const r = p.getBoundingClientRect();
        if (r.bottom > window.innerHeight - 130 || r.top < 60) p.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  function bytScen(steg) {
    const ny = tillstand.scen + steg;
    if (!tillstand.saga || ny < 0 || ny >= tillstand.saga.scener.length) return;
    vantande = null;
    upplasare.gaTillScen(ny);
    tillstand.pagaende.pos = upplasare.position;
    spara();
    visaScen(ny, false);
  }

  function uppdateraTempo() {
    document.querySelectorAll('[data-tempo]').forEach((b) => {
      b.setAttribute('aria-checked', String(parseFloat(b.dataset.tempo) === tillstand.installningar.tempo));
    });
    if (upplasare) upplasare.sattTempo(tillstand.installningar.tempo);
  }

  function sattLjudKnapp() {
    const pa = tillstand.installningar.ljud !== false;
    $('knapp-ljud').setAttribute('aria-pressed', String(pa));
    $('knapp-ljud').hidden = !(S.ljud && S.ljud.stods);
  }

  /* ---------- Kvällsläge och timer ---------- */
  function sattKvall(pa) {
    tillstand.installningar.kvall = pa;
    document.body.classList.toggle('kvall', pa);
    $('knapp-kvall').setAttribute('aria-pressed', String(pa));
    $('vaxel-kvall').checked = pa;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', pa ? '#090b22' : '#1a2150');
    spara();
  }

  function startaTimer() {
    clearTimeout(timerId);
    timerId = null;
    const t = tillstand.installningar.timer;
    if (t !== 'slut') {
      const min = parseInt(t, 10);
      timerSlut = Date.now() + min * 60000;
      timerId = setTimeout(somna, min * 60000);
    }
    visaTimerStatus();
  }

  function visaTimerStatus() {
    const t = tillstand.installningar.timer;
    if (t === 'slut') $('timer-status').textContent = 'Uppläsningen stannar när sagan är slut, och skärmen tonas ner.';
    else $('timer-status').textContent = 'Uppläsningen stannar om cirka ' + Math.max(1, Math.round((timerSlut - Date.now()) / 60000)) + ' minuter.';
  }

  function somna() {
    clearTimeout(timerId);
    timerId = null;
    if (upplasare) upplasare.pausa();
    $('sov-text').textContent = 'Sov gott, ' + (tillstand.pagaende ? tillstand.pagaende.val.namn.trim() : '') + '!';
    $('sov-gott').hidden = false;
    $('knapp-vakna').focus();
  }

  function oppnaDialog() {
    visaTimerStatus();
    uppdateraMarkeringar();
    $('dialog-installningar').hidden = false;
    $('dialog-stang').focus();
  }
  function stangDialog() {
    $('dialog-installningar').hidden = true;
    $('knapp-installningar').focus();
  }

  /* ---------- Händelser ---------- */
  function koppla() {
    $('knapp-borja').addEventListener('click', () => { tillstand.valdSagaId = null; visaSteg(0); visaVy('vy-val'); });
    $('knapp-fortsatt').addEventListener('click', () => oppnaSaga(tillstand.pagaende.pos || 0));
    $('val-tillbaka').addEventListener('click', () => {
      if (tillstand.steg === 0) visaStart();
      else visaSteg(tillstand.steg - 1);
    });
    $('knapp-nasta').addEventListener('click', nastaSteg);
    $('knapp-byt-saga').addEventListener('click', () => {
      const ny = S.motor.valjSaga(tillstand.val, tillstand.valdSagaId);
      tillstand.valdSagaId = ny ? ny.id : null;
      visaForhand();
      meddela('Ny saga: ' + $('forhand-titel').textContent);
    });

    $('falt-namn').addEventListener('input', (e) => { tillstand.val.namn = e.target.value; $('namn-fel').hidden = true; uppdateraNastaKnapp(); });
    $('falt-namn').addEventListener('keydown', (e) => { if (e.key === 'Enter') nastaSteg(); });
    $('falt-egen-namn').addEventListener('input', (e) => { tillstand.val.egenFigurNamn = e.target.value; $('egen-fel').hidden = true; uppdateraNastaKnapp(); });

    $('scen-text').addEventListener('click', (e) => {
      const vag = e.target.closest('[data-vag]');
      if (vag) return valjVag(vag.dataset.vag, vag);
      const hjalp = e.target.closest('.hjalpknapp');
      if (hjalp && !hjalp.closest('.klar')) hjalpTryck(hjalp);
    });
    document.querySelector('.bildram').addEventListener('click', (e) => {
      const mus = e.target.closest('.gomd-mus');
      if (mus) hittaMus(mus);
    });
    $('knapp-nasta-aventyr').addEventListener('click', () => {
      const nasta = S.sagor.find((s) => s.id === tillstand.nastaSagaId);
      if (!nasta) return;
      if (upplasare) upplasare.stoppa();
      tillstand.val = Object.assign({}, tillstand.pagaende.val, { tema: nasta.tema, plats: nasta.platser.includes(tillstand.pagaende.val.plats) ? tillstand.pagaende.val.plats : nasta.platser[0] });
      tillstand.valdSagaId = nasta.id;
      visaSteg(4);
      visaVy('vy-val');
    });
    $('knapp-ljud').addEventListener('click', () => {
      tillstand.installningar.ljud = !tillstand.installningar.ljud;
      sattLjudKnapp();
      if (S.ljud) {
        S.ljud.sattPa(tillstand.installningar.ljud);
        if (tillstand.installningar.ljud && upplasare && upplasare.spelar) S.ljud.starta(tillstand.saga.plats.id);
      }
      spara();
    });

    document.addEventListener('click', (e) => {
      const el = e.target.closest('[role="radio"][data-varde]');
      if (!el) return;
      const grupp = el.dataset.grupp || el.closest('[data-grupp]').dataset.grupp;
      valjVarde(grupp, el.dataset.varde);
      if (S.effekter && grupp !== 'timer') S.effekter.valt(el);
    });

    document.querySelectorAll('[data-tempo]').forEach((b) => b.addEventListener('click', () => {
      tillstand.installningar.tempo = parseFloat(b.dataset.tempo);
      uppdateraTempo();
      spara();
    }));

    $('knapp-spela').addEventListener('click', () => {
      if (!upplasare) return;
      if (upplasare.spelar) { upplasare.pausa(); vantande = null; }
      else {
        $('tal-info').hidden = !$('tal-info').textContent.startsWith('Ingen svensk');
        upplasare.spela();
      }
    });
    $('knapp-omstart').addEventListener('click', () => {
      vantande = null;
      upplasare.stoppa();
      upplasare.sattPosition(0);
      visaScen(0, false);
      upplasare.borjaOm();
    });
    $('knapp-forra').addEventListener('click', () => bytScen(-1));
    $('knapp-nasta-scen').addEventListener('click', () => bytScen(1));
    $('knapp-las-igen').addEventListener('click', () => {
      tillstand.pagaende.valt = null;
      tillstand.pagaende.hjalpKlar = false;
      tillstand.saga = byggAktuell();
      upplasare.bytSaga(tillstand.saga);
      upplasare.sattPosition(0);
      visaScen(0, false);
      if (upplasare.stods) upplasare.borjaOm();
    });
    $('knapp-ny-saga').addEventListener('click', () => {
      if (upplasare) upplasare.stoppa();
      tillstand.valdSagaId = null;
      visaSteg(1);
      visaVy('vy-val');
    });
    $('knapp-sagoval').addEventListener('click', () => {
      if (upplasare) upplasare.pausa();
      vantande = null;
      if (tillstand.pagaende && upplasare) tillstand.pagaende.pos = upplasare.position;
      spara();
      visaStart();
    });

    $('knapp-kvall').addEventListener('click', () => sattKvall(!tillstand.installningar.kvall));
    $('vaxel-kvall').addEventListener('change', (e) => sattKvall(e.target.checked));
    $('knapp-installningar').addEventListener('click', oppnaDialog);
    $('dialog-stang').addEventListener('click', stangDialog);
    $('dialog-installningar').addEventListener('click', (e) => { if (e.target.id === 'dialog-installningar') stangDialog(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('dialog-installningar').hidden) stangDialog(); });
    $('knapp-vakna').addEventListener('click', () => { $('sov-gott').hidden = true; $('knapp-spela').focus(); });

    // Pausa om appen läggs i bakgrunden, så att positionen sparas rätt.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && upplasare && upplasare.spelar && !(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform())) {
        upplasare.pausa();
      }
    });
  }

  function start() {
    if (!S.sagor.length) {
      document.body.innerHTML = '<p style="padding:2rem">Sagorna kunde inte laddas. Starta om appen.</p>';
      return;
    }
    lasIn();
    byggValkort();
    $('falt-namn').value = tillstand.val.namn;
    $('falt-egen-namn').value = tillstand.val.egenFigurNamn;
    sattKvall(!!tillstand.installningar.kvall);
    sattLjudKnapp();
    if (S.ljud) S.ljud.sattPa(tillstand.installningar.ljud !== false);
    koppla();
    uppdateraMarkeringar();
    visaStart();
  }

  S.app = { tillstand, oppnaSaga, visaScen };
  start();
})();
