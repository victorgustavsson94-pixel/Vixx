/* Testar hela flödet i en webbläsare med iPhone-skärmstorlekar:
   val → förhandsvisning → skapa saga → uppläsning med scenbyten → paus →
   tillbaka till sagoval och fortsätt → kvällsläge → timer efter sagan.
   Talet ersätts med en låtsasröst så att testet går fort och kan mäta
   exakt när scenbilden byts.
   Kör: node verktyg/testa-flode.js [mapp-för-skärmbilder] */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const url = 'file://' + path.join(__dirname, '..', 'www', 'index.html');
const bildmapp = process.argv[2];
if (bildmapp) fs.mkdirSync(bildmapp, { recursive: true });

const LATSASROST = `
  window.__tal = { yttranden: [], forsening: 4 };
  class Yttrande { constructor(t) { this.text = t; this.lang = ''; this.rate = 1; } }
  window.SpeechSynthesisUtterance = Yttrande;
  let aktuell = null, timer = null;
  const latsas = {
    getVoices: () => [{ lang: 'sv-SE', name: 'Alva' }],
    addEventListener() {},
    speak(u) {
      aktuell = u; window.__tal.yttranden.push({ text: u.text, rate: u.rate, pitch: u.pitch });
      timer = setTimeout(() => { aktuell = null; u.onend && u.onend(); }, window.__tal.forsening);
    },
    cancel() { clearTimeout(timer); if (aktuell) { const u = aktuell; aktuell = null; u.onerror && u.onerror({ error: 'interrupted' }); } }
  };
  Object.defineProperty(window, 'speechSynthesis', { value: latsas, configurable: true });
`;

// Klickar på en knapp i sagotexten först när scrollningen dit är klar.
async function tryckISagan(page, valjare) {
  const el = page.locator(valjare).first();
  if (!(await el.count())) return;
  await el.dispatchEvent('click');
  await page.waitForTimeout(150);
}

const enheter = [
  { namn: 'iPhone SE', width: 375, height: 667 },
  { namn: 'iPhone 15', width: 393, height: 852 },
  { namn: 'iPhone 15 Pro Max', width: 430, height: 932 }
];

function kontroll(villkor, text) {
  if (!villkor) throw new Error('Misslyckades: ' + text);
  console.log('  ✓ ' + text);
}

(async () => {
  const browser = await chromium.launch();
  let fel = 0;
  for (const enhet of enheter) {
    console.log(enhet.namn + ' (' + enhet.width + '×' + enhet.height + ')');
    const ctx = await browser.newContext({ viewport: { width: enhet.width, height: enhet.height }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: 'sv-SE' });
    const page = await ctx.newPage();
    const konsolfel = [];
    page.on('pageerror', (e) => konsolfel.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error') konsolfel.push(m.text()); });
    await page.addInitScript(LATSASROST);
    const skarm = async (namn) => { if (bildmapp) await page.screenshot({ path: path.join(bildmapp, enhet.namn.replace(/ /g, '-') + '-' + namn + '.png') }); };
    try {
      await page.goto(url);
      kontroll((await page.textContent('#start-rubrik')) === 'Vad ska vi drömma om ikväll?', 'startsidan visar rubriken');
      await skarm('1-start');

      await page.click('#knapp-borja');
      await page.click('#knapp-nasta');
      kontroll(await page.isVisible('#namn-fel'), 'tomt namn ger en vänlig förklaring');
      await page.fill('#falt-namn', 'Ella');
      await page.click('[data-grupp="barnPron"] [data-varde="hon"]');
      await skarm('2-namn');
      await page.click('#knapp-nasta');

      kontroll((await page.$$('#lista-figurer .valkort')).length >= 6, 'minst sex figurer att välja');
      await page.click('#lista-figurer [data-varde="kanin"]');
      await skarm('3-figur');
      await page.click('#knapp-nasta');
      kontroll((await page.$$('#lista-platser .valkort')).length >= 6, 'minst sex platser att välja');
      await page.click('#lista-platser [data-varde="skog"]');
      await skarm('4-plats');
      await page.click('#knapp-nasta');
      kontroll((await page.$$('#lista-teman .valkort')).length >= 6, 'minst sex teman att välja');
      await page.click('#lista-teman [data-varde="mod"]');
      await page.click('#knapp-nasta');

      const titel = await page.textContent('#forhand-titel');
      kontroll(titel.startsWith('Ella och'), 'förhandsvisningen visar sagans titel: ' + titel);
      kontroll((await page.textContent('#fh-figur')) === 'Kanin Lo', 'förhandsvisningen visar vald kompis');
      kontroll(await page.isVisible('#forhand-bild svg, #forhand-bild img'), 'förhandsvisningen har en bild');
      await page.click('[data-grupp="spanning"] [data-varde="aventyr"]');
      kontroll((await page.getAttribute('[data-grupp="spanning"] [data-varde="aventyr"]', 'aria-checked')) === 'true', 'spänningsnivån Stort äventyr går att välja');
      await skarm('5-forhand');
      kontroll((await page.textContent('#knapp-nasta')) === 'Skapa min saga', 'knappen heter ”Skapa min saga”');
      await page.click('#knapp-nasta');
      await page.waitForSelector('#vy-las:not([hidden])', { timeout: 5000 });
      kontroll((await page.textContent('#saga-titel')) === titel, 'läsvyn visar samma titel');
      kontroll((await page.textContent('#scen-etikett')) === 'Scen 1 av 5', 'läsvyn börjar på scen 1');
      const text = await page.textContent('#scen-text');
      kontroll(text.includes('Ella') && text.includes('Lo') && !/[{}\[\]]/.test(text), 'texten är ifylld med namn och kompis');
      await skarm('6-las');

      // Manuell scenbläddring
      const bildId1 = await page.getAttribute('#scenbild > div:last-child', 'data-bild-id');
      await page.click('#knapp-nasta-scen');
      await page.waitForTimeout(100);
      const bildId2 = await page.getAttribute('#scenbild > div:last-child', 'data-bild-id');
      kontroll(bildId1.endsWith('scen1') && bildId2.endsWith('scen2') && bildId1 !== bildId2, 'Nästa scen byter bild (' + bildId1 + ' → ' + bildId2 + ')');
      await page.click('#knapp-forra');

      // Den gömda musen
      await page.click('.gomd-mus');
      kontroll((await page.textContent('#mus-rakning')) === '1 av 5', 'den gömda musen går att hitta');

      // Uppläsning från början: scenbilden ska bytas när uppläsningen når nästa scen
      await page.evaluate(() => {
        window.__bilder = [];
        new MutationObserver(() => {
          const sista = document.querySelector('#scenbild > div:last-child');
          const id = sista && sista.dataset.bildId;
          if (id && window.__bilder[window.__bilder.length - 1] !== id) window.__bilder.push(id);
        }).observe(document.getElementById('scenbild'), { childList: true });
      });
      await page.click('#knapp-spela');
      // Svara på valet och hjälp till när uppläsningen väntar
      let valGjort = false, hjalpGjord = false;
      for (let i = 0; i < 900 && !(await page.isVisible('#sov-gott')); i++) {
        if (await page.isVisible('.valruta.vantar')) { await tryckISagan(page, '.valruta .valknapp >> nth=0'); valGjort = true; }
        if (await page.isVisible('.hjalpruta.vantar:not(.klar)')) {
          for (let k = 0; k < 3; k++) await tryckISagan(page, '.hjalpruta:not(.klar) .hjalpknapp');
          hjalpGjord = true;
        }
        await page.waitForTimeout(100);
      }
      kontroll(valGjort, 'uppläsningen stannar och låter barnet välja väg');
      kontroll(hjalpGjord, 'uppläsningen stannar för hjälp till-momentet');
      await page.waitForSelector('#sov-gott:not([hidden])', { timeout: 20000 });
      kontroll(await page.evaluate(() => window.__tal.yttranden.some((y) => y.pitch > 1.3)), 'kompisen läses med en egen röst');
      const bilder = await page.evaluate(() => window.__bilder);
      const antalYttranden = await page.evaluate(() => window.__tal.yttranden.length);
      kontroll(bilder.length === 4 && bilder[3].endsWith('scen5'), 'uppläsningen bytte bild vid varje ny scen: ' + bilder.join(', '));
      kontroll(antalYttranden > 30, 'hela sagan lästes upp (' + antalYttranden + ' meningar)');
      kontroll((await page.textContent('#sov-text')).includes('Ella'), 'timern ”när sagan är slut” visar Sov gott-skärmen');
      await skarm('7-sov-gott');
      await page.click('#knapp-vakna');
      kontroll(await page.isVisible('#slut-kort'), 'slutkortet erbjuder Läs igen och Ny saga');
      kontroll(await page.isVisible('#nasta-kvall'), 'slutkortet föreslår nästa kvälls äventyr');

      // Paus och tempo
      await page.evaluate(() => { window.__tal.forsening = 400; });
      await page.click('#knapp-las-igen');
      await page.waitForTimeout(900);
      kontroll(await page.$eval('#knapp-spela', (b) => b.classList.contains('spelar')), 'Läs igen startar uppläsningen från början');
      await page.click('[data-tempo="0.8"]');
      await page.waitForTimeout(500);
      const senaste = await page.evaluate(() => window.__tal.yttranden[window.__tal.yttranden.length - 1].rate);
      kontroll(senaste === 0.8, 'tempot ändras direkt under uppläsningen');
      await page.evaluate(() => { window.__tal.forsening = 4; });
      for (let i = 0; i < 900 && !(await page.isVisible('#sov-gott')); i++) {
        if (await page.isVisible('.valruta.vantar')) await tryckISagan(page, '.valruta .valknapp >> nth=1');
        if (await page.isVisible('.hjalpruta.vantar:not(.klar)')) for (let k = 0; k < 3; k++) await tryckISagan(page, '.hjalpruta:not(.klar) .hjalpknapp');
        await page.waitForTimeout(100);
      }
      await page.click('#knapp-vakna');
      await page.click('#knapp-nasta-aventyr');
      kontroll((await page.textContent('#knapp-nasta')) === 'Skapa min saga', 'Nästa äventyr öppnar förhandsvisningen');
      await page.click('#knapp-nasta');
      await page.waitForSelector('#vy-las:not([hidden])', { timeout: 5000 });
      kontroll((await page.textContent('#scen-text')).includes('Minns du äventyret med'), 'kompisen minns förra kvällens saga');
      await page.evaluate(() => { window.__tal.forsening = 400; });
      await page.click('#knapp-spela');
      await page.waitForTimeout(500);
      await page.click('#knapp-spela');
      await page.waitForTimeout(300);
      kontroll(!(await page.$eval('#knapp-spela', (b) => b.classList.contains('spelar'))), 'paus stoppar uppläsningen');

      // Gå till nästa scen och tillbaka till sagoval – sagan ska finnas kvar
      await page.click('#knapp-nasta-scen');
      await page.click('#knapp-nasta-scen');
      await page.click('#knapp-sagoval');
      kontroll(await page.isVisible('#fortsatt-kort'), 'startsidan erbjuder att fortsätta sagan');
      await skarm('8-fortsatt');
      await page.reload();
      kontroll(await page.isVisible('#fortsatt-kort'), 'pågående saga finns kvar efter omstart');
      await page.click('#knapp-fortsatt');
      kontroll((await page.textContent('#scen-etikett')) === 'Scen 3 av 5', 'fortsätter på samma scen');

      // Kvällsläge och timer
      await page.click('#knapp-kvall');
      kontroll(await page.evaluate(() => document.body.classList.contains('kvall')), 'kvällsläget dämpar skärmen');
      await page.click('#knapp-installningar');
      await page.click('[data-grupp="timer"] [data-varde="10"]');
      kontroll((await page.textContent('#timer-status')).includes('10'), 'timern kan ställas på 10 minuter');
      await skarm('9-kvall-timer');
      await page.click('#dialog-stang');
      await skarm('10-kvall');

      // Egen figur
      await page.click('#knapp-ny-saga').catch(() => {});
      await page.click('#knapp-sagoval');
      await page.click('#knapp-borja');
      await page.click('#knapp-nasta');
      await page.click('#lista-figurer [data-varde="egen"]');
      await page.click('#knapp-nasta');
      kontroll(await page.isVisible('#egen-fel'), 'egen figur utan namn ger en förklaring');
      await page.fill('#falt-egen-namn', 'Pippa');
      await page.click('#knapp-nasta');
      await page.click('#lista-platser [data-varde="rymden"]');
      await page.click('#knapp-nasta');
      await page.click('#lista-teman [data-varde="trygghet"]');
      await page.click('#knapp-nasta');
      kontroll((await page.textContent('#fh-figur')) === 'Pippa', 'egen figur visas i förhandsvisningen');

      const bred = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
      kontroll(bred, 'ingen sidledsskroll');
      kontroll(konsolfel.length === 0, 'inga fel i konsolen' + (konsolfel.length ? ': ' + konsolfel.join(' | ') : ''));
    } catch (e) {
      fel++;
      console.error('  ✗ ' + e.message);
      if (konsolfel.length) console.error('    Konsolfel: ' + konsolfel.join(' | '));
      await skarm('fel');
    }
    await ctx.close();
  }
  await browser.close();
  console.log(fel ? '\n' + fel + ' enhet(er) misslyckades.' : '\nAlla flöden fungerar.');
  process.exit(fel ? 1 : 0);
})();
