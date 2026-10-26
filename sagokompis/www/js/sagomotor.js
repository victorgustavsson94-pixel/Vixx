/* Sagokompis – sagomotorn.
   Sätter ihop en personlig saga från biblioteket utifrån barnets val.

   Syntax i sagotexterna:
     {N}  barnets namn          {Ns} genitiv (Ellas)
     {nh} han/hon/hen (barnet)  {no} honom/henne/hen   {np} hans/hennes/hens
     {F}  figurens namn         {Fs} genitiv           {Fa} "nallen Brum"
     {fh} {fo} {fp}             figurens pronomen
     {F:trost}                  figurens färdiga språkbit (se data/val.js)
     {P} platsens namn          {Pi} "i den förtrollade skogen"
     {P:mark}                   platsens språkbit
     {^...}                     stor bokstav först, t.ex. {^Pi}
     [skog,fjall: text | rum: text | *: text]      variant per plats
     [f| nalle: text | *: text]                    variant per figur
*/
(function () {
  const S = window.Sagokompis;

  const PRONOMEN = {
    han: { h: 'han', o: 'honom', p: 'hans' },
    hon: { h: 'hon', o: 'henne', p: 'hennes' },
    hen: { h: 'hen', o: 'hen', p: 'hens' }
  };

  function genitiv(namn) {
    if (!namn) return namn;
    return /[sxz]$/i.test(namn) ? namn : namn + 's';
  }

  function versal(t) {
    return t ? t.charAt(0).toLocaleUpperCase('sv-SE') + t.slice(1) : t;
  }

  function hitta(lista, id) {
    return lista.find((x) => x.id === id);
  }

  /* Bygger ett sammanhang (vilka ord taggarna ska bli) från valen. */
  function skapaSammanhang(val) {
    const figur = Object.assign({}, hitta(S.figurer, val.figur));
    if (figur.egen) {
      figur.namn = (val.egenFigurNamn || '').trim() || 'Kompis';
      figur.pron = val.egenFigurPron || 'hen';
    }
    const plats = hitta(S.platser, val.plats);
    const tema = hitta(S.teman, val.tema);
    const barnPron = PRONOMEN[val.barnPron] || PRONOMEN.hen;
    const figPron = PRONOMEN[figur.pron] || PRONOMEN.hen;
    const namn = (val.namn || '').trim();

    const enkla = {
      N: namn, Ns: genitiv(namn),
      nh: barnPron.h, nH: versal(barnPron.h), no: barnPron.o, np: barnPron.p,
      F: figur.namn, Fs: genitiv(figur.namn), Fa: figur.art,
      fh: figPron.h, fH: versal(figPron.h), fo: figPron.o, fp: figPron.p,
      P: plats.namn, Pi: plats.i, Ptill: plats.till,
      T: tema.ord
    };
    return { val, figur, plats, tema, enkla };
  }

  const VARIANT = /\[(f\|)?([^\[\]]*)\]/g;
  const TAGG = /\{(\^?)([A-Za-z]+)(?::([A-Za-z]+))?\}/g;

  function valjVariant(innehall, nyckel) {
    let standard = null;
    for (const del of innehall.split('|')) {
      const m = del.match(/^\s*([\w*,]+)\s*:\s?([\s\S]*?)\s*$/);
      if (!m) continue;
      const nycklar = m[1].split(',');
      if (nycklar.includes(nyckel)) return m[2];
      if (nycklar.includes('*')) standard = m[2];
    }
    return standard;
  }

  /* Byter ut alla taggar och varianter i en text. */
  function fyllI(text, ctx) {
    let ut = text.replace(VARIANT, (hela, arFigur, innehall) => {
      const val = valjVariant(innehall, arFigur ? ctx.figur.id : ctx.plats.id);
      if (val === null) throw new Error('Variant saknas för ' + (arFigur ? ctx.figur.id : ctx.plats.id) + ' i: ' + hela.slice(0, 60));
      return val;
    });
    for (let varv = 0; varv < 4 && ut.includes('{'); varv++) {
      ut = ut.replace(TAGG, (hela, stor, nyckel, del) => {
        let v;
        if (del) {
          const kalla = nyckel === 'F' ? ctx.figur : nyckel === 'P' ? ctx.plats : null;
          v = kalla ? kalla[del] : undefined;
        } else {
          v = ctx.enkla[nyckel];
        }
        if (v === undefined) throw new Error('Okänd tagg ' + hela);
        return stor ? versal(v) : v;
      });
    }
    // Städa bort dubbla mellanslag som kan uppstå runt varianter.
    return ut.replace(/\s{2,}/g, ' ').trim();
  }

  /* Vilka sagor passar ihop med just dessa val? */
  function passandeSagor(val) {
    return S.sagor.filter((saga) =>
      saga.tema === val.tema &&
      saga.platser.includes(val.plats) &&
      (saga.figurer === 'alla' || saga.figurer.includes(val.figur))
    );
  }

  /* Plockar en saga. Med "undvik" kan man be om en annan än den senaste. */
  function valjSaga(val, undvikId) {
    const lista = passandeSagor(val);
    if (!lista.length) return null;
    const andra = lista.filter((s) => s.id !== undvikId);
    const urval = andra.length ? andra : lista;
    return urval[Math.floor(Math.random() * urval.length)];
  }

  function rakna(text) {
    return (text.match(/[A-Za-zÅÄÖåäöÉé0-9]+/g) || []).length;
  }

  const MYSIG = 'Men {N} kände sig ändå trygg, för {F} var precis bredvid, och tillsammans klarar man nästan allt.';

  function kortTitel(titel, namn) {
    const prefix = namn + ' och ';
    return titel.startsWith(prefix) ? titel.slice(prefix.length) : titel;
  }

  /* Bygger den färdiga, personliga sagan.
     val.spanning: 'mysig' | 'pirrig' (standard) | 'aventyr'
     opts.valt:    'a' | 'b' när barnet har valt väg i sagan, annars null
     opts.hjalpKlar: true när barnet har gjort sitt hjälp till-moment
     opts.forra:   titeln på förra kvällens saga med samma kompis (för en fortsättning) */
  function byggSaga(sagaId, val, opts) {
    opts = opts || {};
    const mall = S.sagor.find((s) => s.id === sagaId);
    if (!mall) throw new Error('Sagan ' + sagaId + ' finns inte');
    const extra = (S.sagoExtra && S.sagoExtra[sagaId]) || {};
    const spanning = val.spanning || 'pirrig';
    const ctx = skapaSammanhang(val);
    let ord = 0;
    const scener = mall.scener.map((sc, i) => {
      const delar = sc.text.map((t) => ({ text: t }));
      const efter = (index, obj) => delar.splice(delar.indexOf(sc.__orig[index]) + 1, 0, obj);
      sc.__orig = delar.slice();
      let valInfo = null;
      let hjalpInfo = null;
      if (extra.aventyr && extra.aventyr.scen === i && spanning !== 'pirrig') {
        efter(extra.aventyr.efter, { text: spanning === 'aventyr' ? extra.aventyr.text : MYSIG });
      }
      if (extra.val && extra.val.scen === i) {
        const markor = sc.__orig[extra.val.efter];
        valInfo = { markor, fraga: extra.val.fraga, alternativ: [{ id: 'a', knapp: extra.val.a.knapp }, { id: 'b', knapp: extra.val.b.knapp }], valt: opts.valt || null };
        if (opts.valt) efter(extra.val.efter, { text: extra.val[opts.valt].text });
      }
      if (extra.hjalp && extra.hjalp.scen === i) {
        hjalpInfo = Object.assign({ markor: sc.__orig[extra.hjalp.efter], klar: !!opts.hjalpKlar }, extra.hjalp);
      }
      if (i === 0 && opts.forra) {
        efter(0, { text: '{F} tittade på {N} och log. – Minns du äventyret med ' + opts.forra + '? I kväll väntar ett nytt äventyr.' });
      }
      delete sc.__orig;
      const stycken = delar.map((d) => fyllI(d.text, ctx));
      stycken.forEach((t) => (ord += rakna(t)));
      const scen = {
        nummer: i + 1,
        bildId: mall.id + '-scen' + (i + 1),
        rubrik: fyllI(sc.rubrik, ctx),
        bild: sc.bild,
        bildtext: fyllI(sc.bildtext, ctx),
        stycken
      };
      if (valInfo) {
        scen.val = { efter: delar.indexOf(valInfo.markor), fraga: fyllI(valInfo.fraga, ctx), alternativ: valInfo.alternativ.map((a) => ({ id: a.id, knapp: fyllI(a.knapp, ctx) })), valt: valInfo.valt };
      }
      if (hjalpInfo) {
        scen.hjalp = { efter: delar.indexOf(hjalpInfo.markor), uppmaning: fyllI(hjalpInfo.uppmaning, ctx), ikon: hjalpInfo.ikon, antal: hjalpInfo.antal, klart: fyllI(hjalpInfo.klart, ctx), klar: hjalpInfo.klar };
      }
      return scen;
    });
    const titel = fyllI(mall.titel, ctx);
    return {
      id: mall.id,
      titel,
      kortTitel: kortTitel(titel, ctx.enkla.N),
      tema: ctx.tema,
      plats: ctx.plats,
      figur: ctx.figur,
      spanning,
      sammanfattning: fyllI(mall.sammanfattning, ctx),
      ord,
      minuter: Math.max(1, Math.round(ord / 130)),
      scener
    };
  }

  S.motor = { kortTitel, skapaSammanhang, fyllI, passandeSagor, valjSaga, byggSaga, genitiv, versal, rakna };
})();
