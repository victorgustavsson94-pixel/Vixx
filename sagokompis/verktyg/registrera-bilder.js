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
function sok(mapp) {
  if (!fs.existsSync(mapp)) return;
  for (const namn of fs.readdirSync(mapp)) {
    const full = path.join(mapp, namn);
    if (fs.statSync(full).isDirectory()) sok(full);
    else {
      const m = path.relative(rotmapp, full).split(path.sep).join('/').match(/^(s\d\d)\/(\w+)\/scen-([1-5])\.(jpe?g|png|webp)$/i);
      if (m) karta[m[1] + '/' + m[2] + '/scen-' + m[3]] = 'riktiga/' + m[0];
      else console.warn('Hoppar över (fel namn): ' + path.relative(bas, full));
    }
  }
}
sok(rotmapp);
const rader = Object.keys(karta).sort().map((k) => '  ' + JSON.stringify(k) + ': ' + JSON.stringify(karta[k]));
fs.writeFileSync(path.join(bas, 'fardiga.js'),
  '/* Färdiga illustrationer som ersätter prototypbilderna.\n   Filen skapas av verktyg/registrera-bilder.js – redigera inte för hand.\n   Nyckel: <sagaId>/<plats>/scen-<n>   Värde: sökväg under illustrationer/ */\n' +
  'window.Sagokompis = window.Sagokompis || {};\nSagokompis.fardigaBilder = {\n' + rader.join(',\n') + (rader.length ? '\n' : '') + '};\n');
console.log(rader.length + ' färdiga bilder registrerade (av 240 möjliga).');
