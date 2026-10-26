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

  /* Bygger den färdiga, personliga sagan. */
  function byggSaga(sagaId, val) {
    const mall = S.sagor.find((s) => s.id === sagaId);
    if (!mall) throw new Error('Sagan ' + sagaId + ' finns inte');
    const ctx = skapaSammanhang(val);
    let ord = 0;
    const scener = mall.scener.map((sc, i) => {
      const stycken = sc.text.map((t) => fyllI(t, ctx));
      stycken.forEach((t) => (ord += rakna(t)));
      return {
        nummer: i + 1,
        bildId: mall.id + '-scen' + (i + 1),
        rubrik: fyllI(sc.rubrik, ctx),
        bild: sc.bild,
        bildtext: fyllI(sc.bildtext, ctx),
        stycken
      };
    });
    return {
      id: mall.id,
      titel: fyllI(mall.titel, ctx),
      tema: ctx.tema,
      plats: ctx.plats,
      figur: ctx.figur,
      sammanfattning: fyllI(mall.sammanfattning, ctx),
      ord,
      minuter: Math.max(1, Math.round(ord / 130)),
      scener
    };
  }

  S.motor = { skapaSammanhang, fyllI, passandeSagor, valjSaga, byggSaga, genitiv, versal, rakna };
})();
