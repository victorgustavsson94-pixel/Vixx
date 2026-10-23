# Dödsbacken

Ett mobilspel där en bil rullar nerför en backe och ska ta sig förbi hinder. Bilen går fortare ju längre man kommer, och tre krockar avslutar rundan.

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
| 150 m  | Glidande bom        | Hitta luckan som glider fram och tillbaka  |
| 220 m  | Pendelyxa           | Svänger in från vägkanten                  |
| 300 m  | Krossväggar         | Kör igenom när väggarna är öppna           |

Mynt ligger utspridda längs vägen. Rekordet sparas i webbläsaren.

## Teknik

Allt ligger i `index.html` (HTML5 Canvas + JavaScript, inga beroenden). Nya hinder läggs till i objektet `KINDS` i skriptet.
