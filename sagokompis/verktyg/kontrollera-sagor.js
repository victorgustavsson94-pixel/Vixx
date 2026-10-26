/* Kontrollerar sagobiblioteket: att alla taggar och varianter går att fylla i
   för varje figur och tillåten plats, ordantal (600–750), fem scener per saga
   och att varje kombination av tema och plats har minst en saga.
   Kör: node verktyg/kontrollera-sagor.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const www = path.join(__dirname, '..', 'www');
const sandbox = { console };
sandbox.window = sandbox;
vm.createContext(sandbox);
function ladda(fil) {
  vm.runInContext(fs.readFileSync(path.join(www, fil), 'utf8'), sandbox, { filename: fil });
}
ladda('data/val.js');
ladda('js/sagomotor.js');
ladda('js/illustrationer.js');
const sagofiler = fs.readdirSync(path.join(www, 'sagor')).filter((f) => f.endsWith('.js')).sort();
sagofiler.filter((f) => f !== 'extra.js').forEach((f) => ladda('sagor/' + f));
ladda('sagor/extra.js');

const S = sandbox.Sagokompis;
let fel = 0;
const rapport = [];
const setts = new Set();
const felLogg = console.error;
console.error = (m) => { if (!setts.has(m)) { setts.add(m); felLogg(m); } };

for (const saga of S.sagor) {
  if (saga.scener.length !== 5) { console.error(saga.id + ': har ' + saga.scener.length + ' scener'); fel++; }
  const antal = [];
  for (const plats of saga.platser) {
    for (const figur of S.figurer) {
      if (saga.figurer !== 'alla' && !saga.figurer.includes(figur.id)) continue;
      for (const barnPron of ['han', 'hon', 'hen']) {
        const val = { namn: 'Ella', barnPron, figur: figur.id, plats, tema: saga.tema, egenFigurNamn: 'Pippa', egenFigurPron: 'hon' };
        try {
          const ut = S.motor.byggSaga(saga.id, val);
          const allt = ut.scener.map((s) => s.stycken.join(' ')).join(' ');
          if (/[{}\[\]]/.test(allt)) { console.error(saga.id + ' ' + plats + ' ' + figur.id + ': kvarglömd tagg'); fel++; }
          if (barnPron === 'hen') antal.push(ut.ord);
          for (const spanning of ['mysig', 'aventyr']) {
            for (const valt of ['a', 'b']) {
              const v2 = S.motor.byggSaga(saga.id, Object.assign({}, val, { spanning }), { valt, forra: 'när vi hittade Pim' });
              const t2 = v2.scener.map((s) => s.stycken.join(' ')).join(' ');
              if (/[{}\[\]]/.test(t2)) { console.error(saga.id + ' ' + plats + ' ' + figur.id + ' ' + spanning + ' ' + valt + ': kvarglömd tagg'); fel++; }
            }
          }
          const ex = S.sagoExtra[saga.id];
          if (!ex || !ex.val || !ex.aventyr || !ex.hjalp) { console.error(saga.id + ': saknar extra (val, äventyr eller hjälp)'); fel++; }
          else {
            if (!ut.scener[ex.val.scen].val || ut.scener[ex.val.scen].val.efter < 0) { console.error(saga.id + ': valpunkten hamnar fel'); fel++; }
            if (!ut.scener[ex.hjalp.scen].hjalp || ut.scener[ex.hjalp.scen].hjalp.efter < 0) { console.error(saga.id + ': hjälp-momentet hamnar fel'); fel++; }
            if (!S.illustrationer.SAKER.includes(ex.hjalp.ikon)) { console.error(saga.id + ': okänd hjälp-ikon ' + ex.hjalp.ikon); fel++; }
          }
          const ctx = S.motor.skapaSammanhang(val);
          ut.scener.forEach((sc) => {
            const spec = S.illustrationer.tolka(S.motor.fyllI(sc.bild, ctx));
            spec.saker.forEach((sak) => { if (!S.illustrationer.SAKER.includes(sak.namn)) { console.error(saga.id + ' scen ' + sc.nummer + ': okänt föremål ' + sak.namn); fel++; } });
          });
        } catch (e) {
          console.error(saga.id + ' ' + plats + ' ' + figur.id + ': ' + e.message); fel++;
        }
      }
    }
  }
  const min = Math.min(...antal), max = Math.max(...antal);
  if (min < 600 || max > 750) { console.error(saga.id + ': ordantal ' + min + '–' + max + ' ligger utanför 600–750'); fel++; }
  rapport.push(saga.id + '  ' + saga.tema.padEnd(11) + (min + '–' + max + ' ord').padEnd(14) + saga.platser.join(', '));
}

for (const tema of S.teman) {
  for (const plats of S.platser) {
    for (const figur of S.figurer) {
      if (!S.motor.passandeSagor({ tema: tema.id, plats: plats.id, figur: figur.id }).length) {
        console.error('Ingen saga för ' + tema.id + ' + ' + plats.id + ' + ' + figur.id); fel++;
      }
    }
  }
}

console.log(rapport.join('\n'));
console.log('\n' + S.sagor.length + ' sagor, ' + S.sagor.length * 5 + ' scener. ' + (fel ? fel + ' fel.' : 'Inga fel.'));
process.exit(fel ? 1 : 0);
