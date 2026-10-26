/* Kopplar in färdiga illustrationer i appen.
   Lägg bilderna i www/illustrationer/riktiga/<sagaId>/<plats>/scen-<n>.(jpg|png|webp)
   (filnamnen finns i bildprompter/bildprompter.csv) och kör:
     node verktyg/registrera-bilder.js
   Skriptet skriver om www/illustrationer/fardiga.js. Scener som saknar bild
   fortsätter att visa prototypbilden. */
const fs = require('fs');
const path = require('path');

const bas = path.join(__dirname, '..', 'www', 'illustrationer');
const rotmapp = path.join(bas, 'riktiga');
const karta = {};
const videor = {};
const figurer = {};
const platser = {};
let start = null;
function sok(mapp) {
  if (!fs.existsSync(mapp)) return;
  for (const namn of fs.readdirSync(mapp)) {
    const full = path.join(mapp, namn);
    if (fs.statSync(full).isDirectory()) sok(full);
    else {
      const rel = path.relative(rotmapp, full).split(path.sep).join('/');
      const m = rel.match(/^(s\d\d)\/(\w+)\/scen-([1-5])\.(jpe?g|png|webp)$/i);
      const v = rel.match(/^(s\d\d)\/(\w+)\/scen-([1-5])\.mp4$/i);
      const f = rel.match(/^figurer\/(\w+)\.(png|webp)$/i);
      const p = rel.match(/^platser\/(\w+)\.(jpe?g|png|webp)$/i);
      if (v) videor[v[1] + '/' + v[2] + '/scen-' + v[3]] = 'riktiga/' + rel;
      else if (m) karta[m[1] + '/' + m[2] + '/scen-' + m[3]] = 'riktiga/' + rel;
      else if (f && f[1] !== 'barn-referens') figurer[f[1]] = 'riktiga/' + rel;
      else if (p) platser[p[1]] = 'riktiga/' + rel;
      else if (/^start\.(jpe?g|png|webp)$/i.test(rel)) start = 'riktiga/' + rel;
      else if (!/^figurer\/barn-referens\./.test(rel)) console.warn('Hoppar över (fel namn): ' + path.relative(bas, full));
    }
  }
}
sok(rotmapp);
const sorterad = (o) => Object.keys(o).sort().reduce((a, k) => ((a[k] = o[k]), a), {});
fs.writeFileSync(path.join(bas, 'fardiga.js'),
  '/* Färdiga illustrationer som ersätter prototypbilderna.\n   Filen skapas av verktyg/registrera-bilder.js – redigera inte för hand.\n' +
  '   fardigaBilder: <sagaId>/<plats>/scen-<n> → bild. figurBilder/platsBilder: id → bild. Sökvägar under illustrationer/ */\n' +
  'window.Sagokompis = window.Sagokompis || {};\n' +
  'Sagokompis.fardigaBilder = ' + JSON.stringify(sorterad(karta), null, 2) + ';\n' +
  'Sagokompis.fardigaVideor = ' + JSON.stringify(sorterad(videor), null, 2) + ';\n' +
  'Sagokompis.figurBilder = ' + JSON.stringify(sorterad(figurer), null, 2) + ';\n' +
  'Sagokompis.platsBilder = ' + JSON.stringify(sorterad(platser), null, 2) + ';\n' +
  'Sagokompis.startBild = ' + JSON.stringify(start) + ';\n');
console.log(Object.keys(karta).length + ' scenbilder (av 240), ' + Object.keys(videor).length + ' rörliga scener, ' + Object.keys(figurer).length + ' figurer (av 7), ' + Object.keys(platser).length + ' platskort (av 6)' + (start ? ' och startbilden' : '') + ' registrerade.');
