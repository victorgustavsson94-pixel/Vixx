/* Lägger in de färdiga ljudfilerna i appen.
   Kopierar alla .mp3 från en mapp till www/rost och skriver www/rost/fardiga.js.
   Kör: node verktyg/roster/registrera-rost.js <mapp-med-mp3> */
const fs = require('fs'), path = require('path');
const kalla = process.argv[2];
if (!kalla || !fs.existsSync(kalla)) { console.error('Ange mappen med mp3-filer.'); process.exit(1); }
const mal = path.join(__dirname, '..', '..', 'www', 'rost');
fs.mkdirSync(mal, { recursive: true });
const filer = fs.readdirSync(kalla).filter((f) => /^[a-z0-9]+\.mp3$/.test(f));
filer.forEach((f) => fs.copyFileSync(path.join(kalla, f), path.join(mal, f)));
const rad = filer.sort().map((f) => '  "' + f.replace('.mp3', '') + '": "' + f + '"').join(',\n');
fs.writeFileSync(path.join(mal, 'fardiga.js'),
  '/* Inspelade meningar: meningens id → ljudfil i denna mapp.\n   Filen skapas av verktyg/roster/registrera-rost.js – redigera inte för hand. */\n' +
  'window.Sagokompis = window.Sagokompis || {};\nSagokompis.rostFiler = {\n' + rad + '\n};\n', 'utf8');
const mb = filer.reduce((a, f) => a + fs.statSync(path.join(mal, f)).size, 0) / 1048576;
console.log(filer.length + ' filer registrerade, ' + mb.toFixed(1) + ' MB');
