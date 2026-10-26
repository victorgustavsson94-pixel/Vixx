/* Skapar en promptlista för att generera de riktiga scenbilderna i Higgsfield
   (t.ex. Seedream 5.0 Lite eller Flux.2 Pro), en bild per saga, plats och scen.
   Resultat:
     bildprompter/bildprompter.csv   – öppnas i Google Sheets/Excel
     bildprompter/bildprompter.md    – samma sak som läsbar lista
   Filnamnet i listan är exakt den sökväg bilden ska sparas på, så att
   verktyg/registrera-bilder.js kan koppla in den i appen.
   Kör: node verktyg/skapa-bildprompter.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rot = path.join(__dirname, '..');
const www = path.join(rot, 'www');
const sandbox = { console };
sandbox.window = sandbox;
vm.createContext(sandbox);
const ladda = (fil) => vm.runInContext(fs.readFileSync(path.join(www, fil), 'utf8'), sandbox, { filename: fil });
ladda('data/val.js');
ladda('js/sagomotor.js');
ladda('js/illustrationer.js');
fs.readdirSync(path.join(www, 'sagor')).filter((f) => f.endsWith('.js')).sort().forEach((f) => ladda('sagor/' + f));
const S = sandbox.Sagokompis;

const STIL = 'Gentle bedtime picture-book illustration for children aged 4-7, soft gouache and watercolor texture, rounded friendly shapes, calm muted night palette of dusty blue, lavender, soft rose and warm peach, gentle glow, cozy and safe, not scary, no harsh contrast, no text, no letters, no watermark. 4:3 landscape composition with calm empty space.';
const BARN = 'Main character: one small child (about 5 years old) in light blue pyjamas with little cream stars, seen from the side or three-quarter view, simple friendly face, soft brown hair.';
const KOMPIS = 'Do not draw any animal companion or second main character; the app adds the companion on top of the picture.';

const PLATS = {
  skog: 'Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies.',
  rymden: 'Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background.',
  slott: 'Setting: a friendly fairytale castle on a hill at night with warm lit windows.',
  slottInne: 'Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light.',
  hav: 'Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff.',
  havUnder: 'Setting: a calm underwater world with swaying seaweed, soft sand and tiny bubbles, gentle blue light.',
  fjall: 'Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky.',
  rum: 'Setting: a cozy child\'s bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light.',
  grotta: 'Setting: inside a gentle cave with smooth purple rock walls.'
};

const LJUS = {
  kvall: 'Lighting: early evening dusk, pink and lavender sky.',
  natt: 'Lighting: deep blue night, soft moonlight.',
  mork: 'Lighting: dark but calm, small warm light sources, still gentle and safe.',
  varm: 'Lighting: warm magical golden glow in the middle of the night.',
  somn: 'Lighting: very calm, dim, sleepy night mood.'
};

const VASEN = { skog: 'a small cute hedgehog', rymden: 'a tiny pale lilac moon mouse with a glowing dot above its head', slott: 'a small grey castle mouse with a tiny crown', hav: 'a small coral-colored seahorse', fjall: 'a small brown lemming', rum: 'a small pink fabric toy mouse' };

const SAKER = {
  fallstjarna: 'a shooting star passing the window', stjarnfigur: 'a small golden star with a kind face lying nearby', backe: 'a steep gentle hill path', stjarnregn: 'many small sparkling stars in the sky',
  brev: 'a small silver envelope on the floor', flaggor: 'colorful party bunting', lykta: 'a warm glowing lantern', tarta: 'a big pastel layer cake with one candle', bar: 'a little basket of wild strawberries', speldosa: 'an old wooden music box with musical notes',
  back: 'a small babbling stream', hare: 'a small hare', ripa: 'a white ptarmigan bird', ekorre: 'a red squirrel', lammel: 'a small lemming', stenar: 'flat stepping stones across the stream', sten: 'a smooth round stone',
  snacka: 'a pink and white spiral seashell that softly glows', vag: 'a gentle curling wave', filt: 'a blue blanket rippling like waves', notpar: 'soft floating musical notes', mane: 'a big friendly moon with a sleepy smiling face', grotta: 'the dark round opening of a cave',
  eko: 'soft sound ripples in the air', kristaller: 'softly glowing crystals on the walls', trappa: 'a winding spiral staircase', garderob: 'a wardrobe with the door slightly open', dorr: 'an old arched wooden door', vindpust: 'a small friendly swirl of wind with two shiny eyes',
  raket: 'a small red rocket with a round window and a friendly face', sack: 'a sack full of glittering dreams', siffror: 'soft glowing countdown numbers 3, 2, 1', dimma: 'soft white fog', lamm: 'a small fluffy white lamb', faar: 'a mother sheep with a small brass bell',
  moln: 'soft fluffy clouds', gramoln: 'a grumpy square grey cloud', molnmaskin: 'a whimsical wooden cloud-making machine with pipes and wheels', molnval: 'a cloud shaped like a big friendly whale', karta: 'an old treasure map drawing itself with a blue dotted line', flaska: 'a glass bottle with a rolled map inside',
  skylt: 'a wooden signpost with blank arrows', regnbagsbro: 'a soft pastel rainbow bridge', kista: 'a small wooden treasure chest with colorful crayons', leksaker: 'toys that have come alive: a tin soldier, toy blocks and a wooden horse', soldat: 'a tin toy soldier with a drum', pennor: 'a pencil on the floor', parad: 'a quiet toy parade in a line',
  bo: 'a soft bird nest of moss with a little scarf', fagel: 'a tiny fluffy blue bird', trad: 'a birch tree with a nest and a bird family', bocker: 'a tiny library shelf full of tiny books', bok: 'a tiny book with a question mark', smagubbe: 'a tiny thumb-sized person with a red hat and glasses', by: 'a tiny village of round houses with tiny lit windows', nyckel: 'a tiny brass key hanging on a thread',
  manstrale: 'a long silver moonbeam stretching across the scene', krabba: 'a small friendly crab', ren: 'a reindeer eating lichen', spindel: 'a small spider web glittering in moonlight', lysmaskar: 'glowing fireflies in the moss', bubbla: 'glowing floating bubbles in blue and lilac',
  lumi: 'Lumi, a small glowing creature (a glowing fish in the sea, a small colorful nebula in space) blowing glowing bubbles', koraller: 'soft pink corals', val: 'a big gentle mother whale', valunge: 'a small whale calf with a little water spout', ros: 'a large glowing night rose in pink and silver', vissenros: 'a large rose drooping and tired', brunn: 'an old mossy stone well reflecting the moon', kopp: 'a tiny silver cup of water',
  nattlampa: 'a small bedside night lamp', gnista: 'a tiny glowing spark with a face', skugga: 'a chair with clothes on it casting a shadow', stol: 'an old rocking chair with a kind grandmother knitting', garn: 'a ball of yarn made of starlight', stjarnfilt: 'a dark blue knitted blanket with sparkling stars'
};

function scenbeskrivning(spec, plats) {
  const b = S.illustrationer.tolka(spec);
  const f = b.flaggor;
  let miljo;
  if (f.grottinne) miljo = PLATS.grotta;
  else if (f.hemma) miljo = PLATS.rum;
  else if (f.rymd) miljo = PLATS.rymden;
  else if (plats === 'hav' && f.under) miljo = PLATS.havUnder;
  else if (plats === 'slott' && f.inne) miljo = PLATS.slottInne;
  else miljo = PLATS[plats];
  const saker = b.saker.map((s) => (s.namn === 'vasen' || (s.namn === 'lammel' && false) ? VASEN[plats] : SAKER[s.namn])).filter(Boolean);
  let barn = BARN;
  if (f.sov) barn = 'Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars.';
  if (f.ingen) barn = 'No people visible in this picture.';
  if (!f.ingen && !f.sov) {
    const barnX = b.barn[0], figurX = b.figur[0];
    const sida = figurX < 133 ? 'left third' : figurX > 266 ? 'right third' : 'middle';
    barn += ' Place the child in the ' + (barnX < 133 ? 'left third' : barnX > 266 ? 'right third' : 'middle') + ' of the picture, and keep the ground in the ' + sida + ' free of objects (a companion is added there later).';
  }
  if (f.ibubbla) barn += ' The child is inside a big transparent floating bubble.';
  return [miljo, LJUS[b.stamning] || '', saker.length ? 'In the scene: ' + saker.join(', ') + '.' : ''].filter(Boolean).join(' ') + ' ' + barn;
}

const rader = [];
for (const saga of S.sagor) {
  for (const plats of saga.platser) {
    // Barnet heter "barnet" och kompisen visas inte, så att bilden passar alla val.
    const val = { namn: 'barnet', barnPron: 'hen', figur: 'egen', egenFigurNamn: 'kompisen', egenFigurPron: 'hen', plats, tema: saga.tema };
    const byggd = S.motor.byggSaga(saga.id, val);
    const ctx = S.motor.skapaSammanhang(val);
    byggd.scener.forEach((scen) => {
      const spec = S.motor.fyllI(scen.bild, ctx);
      const prompt = STIL + ' ' + scenbeskrivning(spec, plats) + ' ' + KOMPIS + ' Story moment (Swedish): ' + scen.bildtext;
      rader.push({ fil: 'riktiga/' + saga.id + '/' + plats + '/scen-' + scen.nummer + '.jpg', saga: saga.id, titel: S.motor.fyllI(saga.titel, ctx).replace(/^barnet och /, ''), plats, scen: scen.nummer, rubrik: scen.rubrik, prompt });
    });
  }
}

const ut = path.join(rot, 'bildprompter');
fs.mkdirSync(ut, { recursive: true });
const csvCell = (v) => '"' + String(v).replace(/"/g, '""') + '"';
fs.writeFileSync(path.join(ut, 'bildprompter.csv'), '﻿' + ['filnamn,saga,titel,plats,scen,rubrik,prompt'].concat(rader.map((r) => [r.fil, r.saga, r.titel, r.plats, r.scen, r.rubrik, r.prompt].map(csvCell).join(','))).join('\n') + '\n');
let md = '# Bildprompter för Sagokompis\n\n' + rader.length + ' bilder: en per saga, plats och scen. Bildformat 4:3 (t.ex. 1536 × 1152).\n' +
  'Spara varje bild med filnamnet nedan under `www/illustrationer/` och kör sedan `node verktyg/registrera-bilder.js`.\n\n';
let senaste = '';
for (const r of rader) {
  const rubrik = r.saga + ' · ' + r.titel + ' · ' + r.plats;
  if (rubrik !== senaste) { md += '\n## ' + rubrik + '\n\n'; senaste = rubrik; }
  md += '**Scen ' + r.scen + ': ' + r.rubrik + '** → `' + r.fil + '`\n\n```\n' + r.prompt + '\n```\n\n';
}
fs.writeFileSync(path.join(ut, 'bildprompter.md'), md);
console.log(rader.length + ' prompter skrivna till bildprompter/');
