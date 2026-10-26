/* Sagokompis – magiska effekter.
   Lekfulla när barnet väljer (stjärnstoft, studs, stjärnregn), lugna och mjuka
   under själva sagan. Allt stängs av vid "Reducera rörelse", och i kvällsläget
   blir effekterna färre och långsammare. */
(function () {
  const S = window.Sagokompis;
  const lugn = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const kvall = () => document.body.classList.contains('kvall');
  const FARGER = ['#fff1c9', '#f6d1a8', '#ddd2f5', '#eab4c4', '#bfe8da'];

  let lager = null;
  function hamtaLager() {
    if (!lager) {
      lager = document.createElement('div');
      lager.className = 'effektlager';
      lager.setAttribute('aria-hidden', 'true');
      document.body.appendChild(lager);
    }
    return lager;
  }

  function stjarna(x, y, opts) {
    const el = document.createElement('span');
    el.className = 'gnista ' + (opts.form || '');
    const storlek = opts.storlek || 6 + Math.random() * 10;
    el.style.cssText = 'left:' + x + 'px;top:' + y + 'px;width:' + storlek + 'px;height:' + storlek + 'px;background:' + (opts.farg || FARGER[Math.floor(Math.random() * FARGER.length)]) +
      ';--dx:' + (opts.dx || 0) + 'px;--dy:' + (opts.dy || 0) + 'px;--rot:' + Math.round(Math.random() * 360) + 'deg;animation-duration:' + (opts.tid || 900) + 'ms;animation-delay:' + (opts.fordrojning || 0) + 'ms';
    hamtaLager().appendChild(el);
    setTimeout(() => el.remove(), (opts.tid || 900) + (opts.fordrojning || 0) + 100);
  }

  /* Ett litet moln av stjärnstoft där fingret trycker. */
  function stoft(x, y, antal) {
    if (lugn()) return;
    const n = kvall() ? Math.ceil((antal || 8) / 2) : antal || 8;
    for (let i = 0; i < n; i++) {
      const vinkel = Math.random() * Math.PI * 2;
      const langd = 24 + Math.random() * 46;
      stjarna(x, y, { dx: Math.cos(vinkel) * langd, dy: Math.sin(vinkel) * langd - 20, tid: 700 + Math.random() * 500, form: i % 3 ? 'prick' : '' });
    }
  }

  /* Stjärnregn över hela skärmen, t.ex. när sagan skapas eller tar slut. */
  function stjarnregn(antal, tid) {
    if (lugn()) return;
    const n = kvall() ? Math.ceil(antal / 3) : antal;
    for (let i = 0; i < n; i++) {
      stjarna(Math.random() * window.innerWidth, -20, {
        dy: window.innerHeight * (0.6 + Math.random() * 0.5), dx: (Math.random() - 0.5) * 80,
        tid: (tid || 2600) + Math.random() * 1400, fordrojning: Math.random() * 1200, storlek: 8 + Math.random() * 12, form: 'faller'
      });
    }
  }

  /* Ett mjukt "pling" i telefonen när man väljer något (bara i iPhone-appen). */
  function kann(styrka) {
    const cap = window.Capacitor;
    const h = cap && cap.isNativePlatform && cap.isNativePlatform() && cap.Plugins && cap.Plugins.Haptics;
    if (h) h.impact({ style: styrka || 'LIGHT' }).catch(() => {});
  }

  /* Valkortet studsar, figuren hoppar och det gnistrar runt kortet. */
  function valt(el) {
    kann('LIGHT');
    if (lugn()) return;
    el.classList.remove('studs');
    void el.offsetWidth;
    el.classList.add('studs');
    const r = el.getBoundingClientRect();
    stoft(r.left + r.width / 2, r.top + r.height * 0.35, 12);
  }

  /* Ett lugnt glittersvep över bilden när scenen byts. */
  function scenbyte(ram) {
    if (lugn() || !ram) return;
    const svep = document.createElement('span');
    svep.className = 'glittersvep';
    ram.appendChild(svep);
    setTimeout(() => svep.remove(), 1800);
  }

  /* Levande stjärnhimmel på startsidan, med ett stjärnfall ibland. */
  function stjarnhimmel(behallare) {
    if (!behallare || behallare.dataset.klar) return;
    behallare.dataset.klar = '1';
    let html = '';
    for (let i = 0; i < 46; i++) {
      const s = 1 + Math.random() * 2.4;
      html += '<i class="himmelsstjarna" style="left:' + (Math.random() * 100).toFixed(1) + '%;top:' + (Math.random() * 62).toFixed(1) + '%;width:' + s.toFixed(1) + 'px;height:' + s.toFixed(1) + 'px;animation-delay:-' + (Math.random() * 8).toFixed(1) + 's;animation-duration:' + (5 + Math.random() * 5).toFixed(1) + 's"></i>';
    }
    html += '<i class="stjarnfall"></i><i class="stjarnfall sent"></i>';
    behallare.insertAdjacentHTML('beforeend', html);
  }

  // Stjärnstoft vid varje tryck på en knapp eller ett val.
  document.addEventListener('pointerdown', (e) => {
    const mal = e.target.closest('.knapp, .chip, .valkort');
    if (!mal || mal.disabled) return;
    if (document.getElementById('vy-las') && !document.getElementById('vy-las').hidden && kvall()) return;
    stoft(e.clientX, e.clientY, mal.classList.contains('primar') ? 10 : 6);
  }, { passive: true });

  S.effekter = { stoft, stjarnregn, valt, scenbyte, stjarnhimmel, kann };
})();
