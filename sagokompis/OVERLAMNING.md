# Överlämning: Sagokompis (läget 26 oktober 2026)

Den här filen är skriven för Claude Code, så att arbetet kan fortsätta där det slutade. Läs den först, sedan `README.md` i samma mapp.

## Om Victor och hur han vill jobba

- Victor är projektledare inom bygg och inte utvecklare. Be honom inte granska eller godkänna kommandon.
- Svara alltid på svenska, med avslappnad och kollegial ton.
- Kör på och visa resultat. Fråga bara när ett beslut är svårt att ångra eller kostar pengar.
- **Bilderna ska göras gratis.** Hans Higgsfield-konto (Starter Annual) har obegränsade bilder med **Seedream 5.0 Lite** och **Flux.2 Pro (1K)** i Higgsfields webbapp. Använd inte krediter utan att fråga. Higgsfields MCP-koppling i molnsessionen kunde inte använda gratiskvoten (den svarade `unlim.available: false`) och drog 1 kredit per bild. Victor har cirka 49 krediter kvar.

## Vad appen är

En iPhone-app för personliga godnattsagor till barn i åldern 4–7 år, som ska publiceras i App Store. Barnet väljer namn, kompis, plats och tema och får en saga på cirka 5 minuter, med en bild per scen och uppläsning med telefonens text-till-tal. Allt fungerar utan AI-tjänst och utan internet. Stilen ska vara lekfull och spännande men inte läskig, och lugn i slutet inför läggdags. Bilderna ska vara i 3D-animerad filmstil (”Pixar-känsla”), med samma stil i hela appen.

## Teknik

- Ren HTML/CSS/JavaScript utan byggsteg i `sagokompis/www/`, paketerad som iOS-app med **Capacitor 8**. Xcode-projektet ligger i `sagokompis/ios/` och använder Swift Package Manager, inga CocoaPods.
- Plugins: `@capacitor-community/text-to-speech` (iOS-röst) och `@capacitor/haptics`.
- App-id: `se.gustavsson.sagokompis`. Det är ett antagande som kan ändras i `capacitor.config.json` och Xcode.
- Repot innehåller också spelet Dödsbacken (`index.html` och `klassisk.html` i roten). Rör inte det.

### Filer

| Fil | Innehåll |
|-----|----------|
| `www/index.html`, `www/css/app.css` | Alla vyer och hela utseendet |
| `www/js/app.js` | Flödet: start, val, förhandsvisning, läsvy, val i sagan, hjälp till, gömd mus, nästa kväll, timer, kvällsläge |
| `www/js/sagomotor.js` | Bygger den personliga sagan. Taggsyntaxen beskrivs överst i filen |
| `www/js/tal.js` | Uppläsning mening för mening, med pauser för val och hjälp till och egen röst för kompisen |
| `www/js/illustrationer.js` | Prototypbilder (SVG) och kompislagret ovanpå riktiga bilder |
| `www/js/ljud.js`, `www/js/effekter.js` | Ljudvärld med Web Audio, stjärnstoft, stjärnregn och haptik |
| `www/data/val.js` | Figurer, platser och teman med språkbitar |
| `www/sagor/s01.js`–`s20.js` | De 20 sagorna, fem scener var |
| `www/sagor/extra.js` | Valpunkt, äventyrsstycke och hjälp till-moment per saga |
| `www/illustrationer/fardiga.js` | Register över riktiga bilder. Skapas av `verktyg/registrera-bilder.js`, redigera inte för hand |
| `bildprompter/` | Alla prompter för Higgsfield |

### Kommandon (kör i `sagokompis/`)

```
npm install
npm start                          # http://localhost:8080
node verktyg/kontrollera-sagor.js  # kontrollerar alla sagor och kombinationer
node verktyg/testa-flode.js        # hela flödet i Chromium, tre iPhone-storlekar (cirka 4 min)
node verktyg/registrera-bilder.js  # kopplar in bilder från www/illustrationer/riktiga/
node verktyg/skapa-bildprompter.js # skriver om promptlistorna
npx cap sync ios                   # kopiera www till Xcode-projektet
```

Kör `kontrollera-sagor.js` och `testa-flode.js` efter varje ändring. Båda gick igenom vid överlämningen.

## Klart

- Hela flödet med 20 sagor (614–706 ord), 7 kompisar (Nalle Brum, Räv Ylva, Drake Glöd, Robot Bolt, Kanin Lo, Uggla Ugo och en egen figur), 6 platser och 6 teman. Alla kombinationer har minst en saga.
- Spänning och lek: ”Du bestämmer!”-val i varje saga, hjälp till-moment, spänningsnivån Mysig, Lite pirrig eller Stort äventyr, en gömd mus i varje scen, att kompisen minns förra kvällens saga, och förslag på nästa äventyr.
- Uppläsning med spela, pausa, börja om och tre tempon. Scenbilden byts när uppläsningen når nästa scen, och kompisens repliker läses med en ljusare röst.
- Kvällsläge, timer (när sagan är slut eller efter 5, 10 eller 15 minuter) och en ”Sov gott”-skärm.
- Ljudvärld per plats och effekter. Stöd för VoiceOver och ”Reducera rörelse”.
- **3D-bilder som är klara** (Seedream 5.0 Lite, i `www/illustrationer/riktiga/figurer/`): `barn-referens.jpg` samt `nalle`, `rav`, `drake`, `robot`, `kanin`, `uggla` och `egen` som frilagda PNG-filer. Figurerna används i valkorten och läggs in i scenerna.
- Testversion för webben: https://claude.ai/artifact/VNXz79n7KwNqPmLE4aAay4

### Higgsfield-jobb som redan är gjorda

Dessa går att använda som referensbild, med jobbets id som `image_references`:

| Bild | Jobb-id |
|------|---------|
| Barnet (referens, fram och sida) | `13e89043-797b-4239-90f9-6a5d0e96314d` |
| Nalle | `01e93b8c-2eca-40b6-beae-63f65644a33f` |
| Räv | `46c34a2a-d39e-4782-9d62-1e9df82d68ce` |
| Drake | `6a5a4780-c4f8-4275-9f93-36134496b4ed` |
| Robot | `aa138344-5f34-471e-803e-7fb1d8059e45` |
| Kanin | `d60870d0-8fd5-4547-872b-d657b06836b8` |
| Uggla | `16150134-5dec-48ab-9099-df1efb345f58` |
| Egen figur | `378b0db5-19c7-4a9a-9e89-f076f4a786f3` |

## Kvar att göra

### 1. Bilderna i Higgsfield (gratis, i webbappen)

Ordning och prompter finns i `bildprompter/bildprompter.md`.

1. **Appbilder** (`bildprompter/app-bilder.csv`): 6 platskort, startbilden (9:16) och appikonen (1024 × 1024, utan genomskinlighet). Figurerna är redan klara.
2. **Scenbilder** (`bildprompter/bildprompter.csv`): 240 bilder, en per saga, plats och scen, i formatet 4:3, med barnets referensbild som referens. Kompisen ska inte vara med i scenbilderna, appen lägger in den.
3. Spara varje bild med exakt det filnamn som står i kolumnen `filnamn`, under `www/illustrationer/`, till exempel `www/illustrationer/riktiga/s01/rymden/scen-1.jpg`. Platskort hamnar i `riktiga/platser/<plats>.jpg`, startbilden i `riktiga/start.jpg` och appikonen i `www/ikon-1024.png`.
4. Komprimera scenbilderna till cirka 1536 × 1152, JPG med kvalitet runt 82, så att appen inte blir för stor.
5. Kör `node verktyg/registrera-bilder.js`, `node verktyg/kontrollera-sagor.js` och `node verktyg/testa-flode.js`.
6. Ta bort märkningen ”Prototypbild” från scener som har fått riktiga bilder. Märkningen ritas bara på SVG-bilderna, så det sker automatiskt.
7. Lägg appikonen i `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png` och kör `npx cap sync ios`.

Valfritt: korta videoloopar per scen (bild till video, 5 sekunder). De sparas som `scen-<n>.mp4` bredvid bilden. Rörelseprompten finns i `bildprompter.md`.

### 2. Efter bilderna

- Uppdatera testversionen på webben, eller visa appen i en simulator.
- Testa på en riktig iPhone: uppläsning med svensk röst (Alva), att ljudvärlden och uppläsningen fungerar med låst skärm, och haptiken.

### 3. Inför App Store (kräver Victor)

- Apple Developer Program (99 USD per år), privat konto räcker (det är ett privat projekt).
- En Mac med Xcode för att bygga, signera och ladda upp.
- App Store Connect: kategorin Barn, åldersgräns, beskrivning, skärmbilder (6,9 och 6,5 tum) och en integritetspolicy (krävs för barnappar). Appen samlar inte in någon data, så under ”App Privacy” är svaret ”Data Not Collected”.

## Bra att veta

- Prototypbilderna ritas med SVG i `illustrationer.js` utifrån varje scens `bild`-beskrivning, till exempel `'natt | hemma | stjarnfigur 235 222 1.1 | barn 120 | figur 320'`. Kompisens position (`figur x y`) används också för att placera 3D-figuren på riktiga bilder.
- `testa-flode.js` ersätter talet med en låtsasröst. Klick i sagotexten skickas med `dispatchEvent`, så att testet inte påverkas av att sidan scrollar.
- Commit-meddelanden skrivs på svenska.
