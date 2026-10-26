/* Exporterar alla scenbilder som SVG-filer, en mapp per saga:
     www/illustrationer/<sagaId>/scen-<n>.svg
   plus www/illustrationer/register.json som kopplar varje bild till saga,
   scen, rubrik och bildtext. Bilderna ritas med sagans första plats och
   nallen Brum. I appen ritas samma scen om med barnets egna val.
   Kör: node verktyg/exportera-bilder.js [figur] */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const www = path.join(__dirname, '..', 'www');
const sandbox = { console };
sandbox.window = sandbox;
vm.createContext(sandbox);
const ladda = (fil) => vm.runInContext(fs.readFileSync(path.join(www, fil), 'utf8'), sandbox, { filename: fil });
ladda('data/val.js');
ladda('js/sagomotor.js');
ladda('js/illustrationer.js');
fs.readdirSync(path.join(www, 'sagor')).filter((f) => f.endsWith('.js') && f !== 'extra.js').sort().forEach((f) => ladda('sagor/' + f));

const S = sandbox.Sagokompis;
const figur = process.argv[2] || 'nalle';
const register = [];
const utmapp = path.join(www, 'illustrationer');

for (const saga of S.sagor) {
  const plats = saga.platser[0];
  const val = { namn: 'Ella', barnPron: 'hon', figur, plats, tema: saga.tema };
  const byggd = S.motor.byggSaga(saga.id, val);
  const ctx = S.motor.skapaSammanhang(val);
  fs.mkdirSync(path.join(utmapp, saga.id), { recursive: true });
  byggd.scener.forEach((scen) => {
    const spec = S.motor.fyllI(scen.bild, ctx);
    const svg = S.illustrationer.rita(spec, { plats, figur, fro: scen.bildId, alt: scen.bildtext });
    const fil = saga.id + '/scen-' + scen.nummer + '.svg';
    fs.writeFileSync(path.join(utmapp, fil), svg);
    register.push({ bildId: scen.bildId, sagaId: saga.id, scen: scen.nummer, fil, rubrik: scen.rubrik, bildtext: scen.bildtext, beskrivning: scen.bild, status: 'prototyp' });
  });
}
fs.writeFileSync(path.join(utmapp, 'register.json'), JSON.stringify(register, null, 2) + '\n');
console.log(register.length + ' bilder exporterade till www/illustrationer/');
