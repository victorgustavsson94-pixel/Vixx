/* Samlar alla meningar som uppläsningen kan säga för ett visst barn + kompis (alla platser, spänningsnivåer och val)
   och skriver dem till en JSON-fil med ett id per mening. Id:t räknas ut likadant i appen (cyrb53).
   Kör: node verktyg/roster/exportera-texter.js [namn] [pronomen] [figur]   (standard: Frans han nalle) */
const fs = require('fs'), vm = require('vm'), path = require('path');
const www = path.join(__dirname, '..', '..', 'www');
const win = {}; win.window = win; vm.createContext(win);
const filer = ['data/val.js', ...fs.readdirSync(path.join(www, 'sagor')).filter((f) => /^s\d+\.js$/.test(f)).sort().map((f) => 'sagor/' + f), 'sagor/extra.js', 'js/sagomotor.js', 'js/tal.js'];
for (const f of filer) vm.runInContext(fs.readFileSync(path.join(www, f), 'utf8'), win, { filename: f });
const S = win.Sagokompis;

function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

const [namn = 'Frans', pron = 'han', figur = 'nalle'] = process.argv.slice(2);
const unika = new Map();
const lagg = (t) => { if (t && t.trim()) unika.set(cyrb53(t), t); };
for (const saga of S.sagor) {
  if (saga.figurer !== 'alla' && !saga.figurer.includes(figur)) continue;
  for (const plats of saga.platser) for (const spanning of ['mysig', 'pirrig', 'aventyr']) for (const valt of [null, 'a', 'b']) for (const hjalpKlar of [false, true]) {
    const val = { namn, barnPron: pron, pron, figur, plats, tema: saga.tema, spanning };
    const s = S.motor.byggSaga(saga.id, val, { valt, hjalpKlar });
    for (const sc of s.scener) {
      sc.stycken.forEach((st) => S.tal.delaIMeningar(st).forEach(lagg));
      if (sc.val) lagg(sc.val.fraga);
      if (sc.hjalp) { lagg(sc.hjalp.uppmaning); lagg(sc.hjalp.klart); }
    }
  }
}
const lista = [...unika].map(([id, text]) => ({ id, text }));
const ut = path.join(__dirname, `texter-${namn.toLowerCase()}-${figur}.json`);
fs.writeFileSync(ut, JSON.stringify(lista, null, 1), 'utf8');
const ord = lista.reduce((a, x) => a + x.text.split(/\s+/).length, 0);
console.log(lista.length + ' meningar, ' + ord + ' ord -> ' + ut);
