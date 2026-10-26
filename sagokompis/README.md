# Sagokompis

En lugn och lekfull iPhone-app för personliga godnattsagor till barn mellan 4 och 7 år. Barnet väljer kompis, plats och tema. Sagokompis sätter ihop en saga ur ett eget bibliotek, visar en bild per scen och läser upp sagan med telefonens inbyggda text-till-tal. Allt fungerar utan AI-tjänst, utan konto och utan internet.

## Starta appen

**Snabbast, i webbläsaren:** öppna `www/index.html` direkt, eller kör en lokal server och öppna adressen i mobilen:

```
npm start        # http://localhost:8080
```

**Som riktig iPhone-app (kräver en Mac med Xcode 16 eller senare):**

```
npm install
npx cap sync ios
npx cap open ios   # öppnar Xcode, välj en iPhone och tryck på Kör
```

Appen är byggd som en webbapp (HTML, CSS och JavaScript utan byggsteg, samma upplägg som resten av repot) och paketeras som iOS-app med [Capacitor](https://capacitorjs.com). Xcode-projektet ligger i `ios/`. Uppläsningen går via iOS egen talsyntes (pluginet `@capacitor-community/text-to-speech`). I webbläsaren används Web Speech API.

## Så fungerar det

1. Startsidan frågar ”Vad ska vi drömma om ikväll?”.
2. Barnets namn (och han/hon/hen), sedan kompis, plats och tema.
3. Förhandsvisning med titel, sammanfattning och första scenbilden. Finns flera sagor som passar går det att byta.
4. ”Skapa min saga” öppnar läsvyn: titel, scenbild, scenrubrik och text, ”Scen 2 av 5” och knappar för förra/nästa scen.
5. Spelaren har spela/pausa, börja om och tre tempon (Lugnt, Normalt, Snabbare).
6. Kvällsläge dämpar färger och bilder. Timern kan avsluta uppläsningen när sagan är slut eller efter 5, 10 eller 15 minuter, och tonar då ner till en ”Sov gott”-skärm.
7. ”Sagoval” tar dig tillbaka utan att sagan försvinner, och den sparas även om appen stängs.

### Spänning, lek och effekter

- **Du bestämmer!** Mitt i varje saga stannar uppläsningen och barnet väljer mellan två vägar, till exempel ”den slingriga vägen eller den branta genvägen”. Båda vägarna leder vidare till ett lugnt slut.
- **Hjälp till!** I varje saga får barnet hjälpa till genom att trycka på något i berättelsen: tända lyktan, räkna ner med raketen eller vagga månen till sömns. Uppläsningen väntar tills det är gjort.
- **Hur spännande ska det vara?** Före sagan väljer man *Mysig*, *Lite pirrig* eller *Stort äventyr*. Stort äventyr lägger till en extra spännande stund i varje saga (som alltid löses tryggt), och Mysig lägger till en lugnande mening i stället.
- **Den gömda musen:** en liten mus tittar fram någonstans i varje scenbild. Hittar man alla fem händer något extra.
- **Fortsättning följer:** kompisen minns förra kvällens äventyr (”Minns du äventyret med den ensamma stjärnan?”), och efter sagan föreslås nästa kvälls äventyr.
- **Ljudvärld:** mjuka bakgrundsljud per plats, skapade direkt i appen: vågor, fjällvind, en uggla i skogen, en svävande rymdton, en sprakande brasa på slottet och en speldosa i barnets rum. Kan stängas av med notknappen.
- **Kompisens röst:** kompisens repliker läses med en egen, ljusare röst.
- **Effekter:** stjärnstoft vid varje tryck, valkort som studsar, stjärnhimmel med stjärnfall på startsidan, en sagobok som slås upp när sagan skapas, glittersvep vid scenbyten och stjärnregn när sagan är slut. På iPhone känns valen också i handen (haptik). I kvällsläget blir effekterna färre, och med ”Reducera rörelse” stängs de av.

### Scenbyten under uppläsningen

Sagan läses mening för mening. När första meningen i en ny scen börjar läsas byts bilden och texten, och stycket som läses markeras. Det gör att bildbytet följer uppläsningen exakt, och att paus och tempoändring fortsätter från rätt mening.

## Sagobiblioteket

20 sagor, 600–710 ord var (cirka 5 minuter), fem scener per saga. Varje saga har metadata: id, titel, tema, platser den passar för, figurer, ålder, konflikt och sammanfattning (`www/sagor/s01.js` … `s20.js`).

| Tema       | Sagor |
|------------|-------|
| Vänskap    | Den ensamma stjärnan, Kalaset för alla, Bron över bäcken, Snäckan som sjöng |
| Mod        | Lyktan i grottan, Det konstiga ljudet, Den lilla raketen, Lammet i dimman |
| Fantasi    | Molnfabriken, Kartan som ritade sig själv, Leksakernas nattparad |
| Nyfikenhet | Månskenets väg, Den lilla dörren, De lysande bubblorna |
| Omtanke    | Den lilla fågeln, Den trötta månen, Nattrosen |
| Trygghet   | Nattlampans gnista, Valungens vaggvisa, Stjärnfilten |

- **Figurer (7):** Nalle Brum, Räv Ylva, Drake Glöd, Robot Bolt, Kanin Lo, Uggla Ugo och en egen figur med eget namn och egen färg.
- **Platser (6):** förtrollad skog, rymden, slott, havet, fjället och barnets rum.
- **Teman (6):** vänskap, mod, fantasi, nyfikenhet, omtanke och trygghet.

Valen vävs in i handlingen, inte bara i namnen: varje figur har egna repliker och ett eget sätt att hjälpa till (nallen lyfter, räven vädrar, kaninen lyssnar och så vidare), och sagorna har egna textstycken för varje plats de passar på. En saga erbjuds bara för de platser den är skriven för, och varje kombination av tema, plats och figur har minst en saga. Konflikterna är trygga och löses alltid. Varje saga slutar lugnt i sängen.

Sagotexterna använder taggar som `{N}` (barnets namn) och `[skog: … | rum: …]` (text per plats). Syntaxen beskrivs i `www/js/sagomotor.js`.

## Illustrationer

Varje scen har en egen bild, alltså 100 scenbilder. Bild-id är `<saga>-scen<n>` (till exempel `s01-scen3`).

**Det här är prototypbilder.** De ritas som vektorbilder i appen (`www/js/illustrationer.js`) utifrån scenens bildbeskrivning, och följer barnets val av plats och kompis. Varje bild är märkt ”Prototypbild”. Alla 100 finns även exporterade som filer i `www/illustrationer/<saga>/scen-<n>.svg`, med ett register i `www/illustrationer/register.json`.

### Riktiga bilder från Higgsfield

Stilen för hela appen är 3D-animerad långfilmskänsla med lugn kvällsbelysning.

1. `bildprompter/bildprompter.csv` (öppna i Google Sheets eller Excel) har 240 scenprompter: en per saga, plats och scen. `bildprompter/app-bilder.csv` har appens övriga bilder: barnets referensbild, de 7 figurerna, 6 platskort, startbilden och appikonen. `bildprompter/bildprompter.md` är samma sak som läsbar lista, med ordningen att göra dem i. Prompterna är skrivna för Seedream 5.0 Lite eller Flux.2 Pro.
2. Spara varje bild med filnamnet i kolumnen `filnamn` under `www/illustrationer/`, till exempel `www/illustrationer/riktiga/s01/rymden/scen-1.jpg`.
3. Kör `node verktyg/registrera-bilder.js`. Appen visar då den riktiga bilden. Scener som saknar bild visar fortfarande prototypbilden.

Scenbilderna genereras med barnet men utan kompis. Appen lägger in den valda 3D-figuren i bilden, så att samma bild fungerar för alla sju figurer. Figur-, plats- och startbilderna används också i valkorten och på startsidan när de finns.

**Rörliga scener:** gör korta videoloopar av scenbilderna i Higgsfield (bild till video) och spara dem som `scen-<n>.mp4` bredvid bilden. Appen spelar då videon i stället för stillbilden. Rörelseprompten finns i `bildprompter.md`. Utan video får bilderna ändå en långsam kamerarörelse.

## Verktyg

| Kommando | Vad det gör |
|----------|-------------|
| `npm run kontrollera` | Kontrollerar alla sagor för alla figurer och platser: att alla taggar fylls i, ordantal, fem scener, att bilderna finns och att alla kombinationer har en saga |
| `npm run testa` | Kör hela användarflödet i Chromium med tre iPhone-storlekar (SE, 15 och 15 Pro Max), med en låtsasröst som mäter scenbytena: val, spänningsnivå, gömd mus, uppläsning med val och hjälp till, kompisens röst, nästa kvälls äventyr, paus, tempo, kvällsläge och timer |
| `npm run bilder` | Exporterar de 100 prototypbilderna som SVG |
| `npm run prompter` | Skriver om promptlistan för Higgsfield |
| `npm run registrera-bilder` | Kopplar in färdiga bilder |

## Tillgänglighet

- All text är på svenska. Stora knappar (minst 44 punkter), tydliga val och stor, läsbar text som blir ännu större i kvällsläget.
- VoiceOver: bilderna har bildtexter, valen är radioknappar, och scenbyten läses upp.
- Respekterar ”Reducera rörelse”. Animationerna är långsamma och mjuka, utan blinkningar.

## Kvar innan App Store

Förberett: Xcode-projekt, app-id `se.bygginnovation.sagokompis` (går att ändra i `capacitor.config.json` och Xcode), appnamn, ikon (1024 px), svenska som språk, bara stående läge, bara iPhone, och export-deklarationen (ingen kryptering).

Det som saknas och kräver dig:

1. **Apple Developer Program** (99 USD per år), helst som organisation (Bygginnovation AB, kräver D-U-N-S-nummer).
2. **En Mac med Xcode** för att bygga, signera och ladda upp. Signeringscertifikat och provisioneringsprofil skapas automatiskt i Xcode när kontot är inloggat.
3. **App Store Connect:** skapa appen, välj kategorin *Barn* (åldersgrupp 6–8 år eller ”5 år och yngre”), åldersgräns och beskrivning, och skärmbilder för 6,9 och 6,5 tum.
4. **Integritetspolicy (URL):** krävs för appar i kategorin Barn. Appen samlar inte in någon data och sparar bara valen lokalt på telefonen, så policyn blir kort. Under ”App Privacy” svarar man ”Data Not Collected”.
5. **Riktiga illustrationer** (se ovan) innan publicering, eftersom prototypbilderna är tänkta som platshållare.
6. Testa uppläsningen på en riktig iPhone med svensk röst (Alva). På en iPhone kan man ladda ner en bättre röst under Inställningar › Hjälpmedel › Talat innehåll › Röster › Svenska.

## Vad som fortfarande är prototyp

- **Illustrationerna** är genererade vektorbilder (prototypbilder) tills de riktiga 3D-bilderna från Higgsfield är på plats. Detsamma gäller figurerna i valkorten och appikonen.
- **Ljudvärlden** är enkla syntetiska ljud skapade i appen, inte inspelade ljud eller musik.
- **Uppläsningen** är text-till-tal, inte inläst av en berättare. Rösten beror på vilka svenska röster som finns på telefonen.
- **Kvällsläget** dämpar appens färger. Telefonens egen skärmljusstyrka ändras inte.
- När appen körs i webbläsaren pausas uppläsningen om man byter app eller låser skärmen. I iPhone-appen fortsätter den, men det har inte kunnat testas på en riktig iPhone härifrån.
