# Dödsbacken

Ett 3D-mobilspel där en bil rullar nerför en backe och ska ta sig förbi hinder. Bilen går fortare ju längre man kommer.

Varje krock syns på bilen: plåten bucklas där den träffas, stötfångare, speglar, dörrar, huv och till och med hjul kan slitas loss och flyga iväg, vindrutan spricker och krossas, och motorn börjar ryka och brinna. Vid 100 % skada voltar bilen i slow motion och rundan är slut.

`klassisk.html` är den första 2D-versionen.

## Spela

Öppna `index.html` i mobilens webbläsare. Dra med fingret åt sidorna för att styra. På dator används piltangenterna (P pausar).

Lägg upp det via GitHub Pages (Settings → Pages → branch) så kan du öppna det på telefonen och välja "Lägg till på hemskärmen" – då startar det som en app i helskärm.

## Hinder

| Från   | Hinder              | Hur man klarar det                         |
|--------|---------------------|--------------------------------------------|
| 0 m    | Bilar i vägen       | Kör om; vissa byter fil                    |
| 0 m    | Rullande stenblock  | Studsar mellan vägkanterna                 |
| 50 m   | Snurrande hammare   | Tajma passagen eller ta ytterkanten        |
| 100 m  | Oljefläckar         | Ingen krock, men bilen sladdar en stund    |
| 150 m  | Glidande mur        | Hitta luckan som glider fram och tillbaka  |
| 220 m  | Pendelklinga        | Svänger över vägen från en portal          |
| 300 m  | Krossväggar         | Kör igenom när väggarna är öppna           |

Mynt ligger utspridda längs vägen. Rekordet sparas i webbläsaren.

## Teknik

Allt ligger i `index.html` och använder Three.js (laddas från cdnjs) för 3D. Nya hinder läggs till i objektet `KINDS` i skriptet.
