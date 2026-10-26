# Bildprompter för Sagokompis

Stil för hela appen: 3D-animerad långfilmskänsla med lugn kvällsbelysning. Rekommenderade modeller: Seedream 5.0 Lite eller Flux.2 Pro.

## Ordning

1. **Barnets referensbild** först. Välj den bästa och använd den som referensbild i alla scenbilder, så att barnet ser likadant ut i alla sagor.
2. **Figurerna** (7 st) med transparent bakgrund, eller ljusgrå bakgrund som tas bort med bakgrundsborttagning. Appen lägger in dem i scenerna, och de visas också när man väljer kompis.
3. **Platskorten** (6 st), **startbilden** och **appikonen**.
4. **Scenbilderna** (240 st): en per saga, plats och scen, i formatet 4:3 (t.ex. 1536 × 1152). Kompisen ritas inte in i scenerna.

Spara varje bild med filnamnet som står vid prompten, under `www/illustrationer/` (appikonen under `www/`), och kör sedan `node verktyg/registrera-bilder.js`.

## Appens bilder

**Referens: Barnet (referensbild)** (4:3) → `riktiga/figurer/barn-referens.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. Character reference sheet of a small child about 5 years old, big kind eyes, soft brown hair, gentle smile, light blue pyjamas with little cream stars, barefoot. Front view and side view next to each other.
```

**Figurer: Nalle** (1:1) → `riktiga/figurer/nalle.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. A small cuddly brown teddy bear named Brum with round ears, light tummy patch and a warm gentle smile.
```

**Figurer: Räv** (1:1) → `riktiga/figurer/rav.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. A small friendly orange fox named Ylva with a big fluffy tail with a white tip, clever kind eyes.
```

**Figurer: Drake** (1:1) → `riktiga/figurer/drake.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. A small friendly mint-green baby dragon named Glöd with tiny soft wings, a cream belly, little orange horns and a soft warm glow in the chest.
```

**Figurer: Robot** (1:1) → `riktiga/figurer/robot.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. A small friendly pastel blue robot named Bolt with a rounded head, an antenna with a warm yellow light, round glowing lamp eyes and little hands.
```

**Figurer: Kanin** (1:1) → `riktiga/figurer/kanin.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. A small soft light-grey bunny named Lo with very long ears with pink insides and a gentle curious look.
```

**Figurer: Uggla** (1:1) → `riktiga/figurer/uggla.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. A small fluffy brown owl named Ugo with very large round eyes, soft feathers and a calm wise look.
```

**Figurer: Egen figur** (1:1) → `riktiga/figurer/egen.png`

```
High-quality stylized 3D animated feature film character render, soft studio lighting, appealing rounded shapes, big friendly expressive eyes, full body, standing, three-quarter view, centered, on a plain transparent background (or flat solid light grey if transparency is not possible, for background removal), no text, no shadow on the ground. A small soft round lilac dream creature with tiny ears, a little cream star on its belly and a happy face (used for the child's own custom companion; should look neutral and cute).
```

**Platskort: Förtrollad skog** (1:1) → `riktiga/platser/skog.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Square composition. No people. An enchanted forest at night with soft moss, rounded pine trees, glowing blue mushrooms and fireflies.
```

**Platskort: Rymden** (1:1) → `riktiga/platser/rymden.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Square composition. No people. A small soft lilac moon in outer space with a pink ringed planet and gentle stars.
```

**Platskort: Slott** (1:1) → `riktiga/platser/slott.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Square composition. No people. A friendly fairytale castle on a hill at night with warm lit windows.
```

**Platskort: Havet** (1:1) → `riktiga/platser/hav.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Square composition. No people. A calm beach at night with gentle waves, moonlight on the water and a small lighthouse.
```

**Platskort: Fjället** (1:1) → `riktiga/platser/fjall.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Square composition. No people. Snowy Scandinavian mountains at night with a gentle green aurora.
```

**Platskort: Mitt rum** (1:1) → `riktiga/platser/rum.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Square composition. No people. A cozy child's bedroom at night with a starry window, a small bed and a warm night light.
```

**Startsida: Startbild** (9:16) → `riktiga/start.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Tall portrait composition, 9:16, with calm empty night sky in the upper half for a title. A cozy hilltop at night under a huge friendly moon and stars; a teddy bear, a fox, a baby dragon, a little robot, a bunny and an owl sit together in a row looking up at the sky. No people.
```

**Appikon: Appikon** (1:1) → `ikon-1024.png`

```
App icon, 1024x1024, no transparency, no text. High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. Square composition. A sleepy brown teddy bear with a small golden star, resting against a big crescent moon on a dusty blue night sky. Simple bold shape that reads well at small sizes.
```

## Scenbilder

## s01 · den ensamma stjärnan · rymden

**Scen 1: Ett ljus i kvällen** → `riktiga/s01/rymden/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a shooting star passing the window. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen i sovrummet tittar på en stjärna som faller förbi fönstret.
```

**Scen 2: Stjärnan som hette Pim** → `riktiga/s01/rymden/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten stjärna med ledsna ögon ligger på marken. barnet och kompisen har hittat den.
```

**Scen 3: Uppåt, steg för steg** → `riktiga/s01/rymden/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a steep gentle hill path, a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet bär den lilla stjärnan uppför en brant backe, och kompisen hjälper till.
```

**Scen 4: Ett jättestort hej** → `riktiga/s01/rymden/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: many small sparkling stars in the sky, a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Hela himlen glittrar tillbaka mot Pim, barnet och kompisen.
```

**Scen 5: Godnatt, Pim** → `riktiga/s01/rymden/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small golden star with a kind face lying nearby. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover i sängen. Utanför fönstret lyser Pim lite extra starkt.
```


## s01 · den ensamma stjärnan · fjall

**Scen 1: Ett ljus i kvällen** → `riktiga/s01/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a shooting star passing the window. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen i sovrummet tittar på en stjärna som faller förbi fönstret.
```

**Scen 2: Stjärnan som hette Pim** → `riktiga/s01/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten stjärna med ledsna ögon ligger på marken. barnet och kompisen har hittat den.
```

**Scen 3: Uppåt, steg för steg** → `riktiga/s01/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a steep gentle hill path, a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet bär den lilla stjärnan uppför en brant backe, och kompisen hjälper till.
```

**Scen 4: Ett jättestort hej** → `riktiga/s01/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: many small sparkling stars in the sky, a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Hela himlen glittrar tillbaka mot Pim, barnet och kompisen.
```

**Scen 5: Godnatt, Pim** → `riktiga/s01/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small golden star with a kind face lying nearby. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover i sängen. Utanför fönstret lyser Pim lite extra starkt.
```


## s01 · den ensamma stjärnan · rum

**Scen 1: Ett ljus i kvällen** → `riktiga/s01/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a shooting star passing the window. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen i sovrummet tittar på en stjärna som faller förbi fönstret.
```

**Scen 2: Stjärnan som hette Pim** → `riktiga/s01/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten stjärna med ledsna ögon ligger på marken. barnet och kompisen har hittat den.
```

**Scen 3: Uppåt, steg för steg** → `riktiga/s01/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a steep gentle hill path, a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet bär den lilla stjärnan uppför en brant backe, och kompisen hjälper till.
```

**Scen 4: Ett jättestort hej** → `riktiga/s01/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: many small sparkling stars in the sky, a small golden star with a kind face lying nearby. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Hela himlen glittrar tillbaka mot Pim, barnet och kompisen.
```

**Scen 5: Godnatt, Pim** → `riktiga/s01/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small golden star with a kind face lying nearby. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover i sängen. Utanför fönstret lyser Pim lite extra starkt.
```


## s02 · kalaset för alla · skog

**Scen 1: Ett brev under dörren** → `riktiga/s02/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a small silver envelope on the floor. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett litet silverbrev ligger på golvet framför barnet och kompisen.
```

**Scen 2: Alla hjälps åt** → `riktiga/s02/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: colorful party bunting, a warm glowing lantern, a warm glowing lantern, a big pastel layer cake with one candle. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Girlanger, lyktor och en stor tårta. Kalaset är nästan färdigt.
```

**Scen 3: Den som satt utanför** → `riktiga/s02/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a small cute hedgehog. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the left third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet sätter sig på huk bredvid igelkotten, som sitter ensam i mörkret.
```

**Scen 4: En överraskning till alla** → `riktiga/s02/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: colorful party bunting, a little basket of wild strawberries, a small cute hedgehog. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): igelkotten har med sig något fint till kalaset, och alla ser glada ut.
```

**Scen 5: Den lugnaste dansen** → `riktiga/s02/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a warm glowing lantern. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen har kommit hem och sover gott efter kalaset.
```


## s02 · kalaset för alla · slott

**Scen 1: Ett brev under dörren** → `riktiga/s02/slott/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a small silver envelope on the floor. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett litet silverbrev ligger på golvet framför barnet och kompisen.
```

**Scen 2: Alla hjälps åt** → `riktiga/s02/slott/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: early evening dusk, pink and lavender sky. In the scene: colorful party bunting, a warm glowing lantern, a warm glowing lantern, a big pastel layer cake with one candle. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Girlanger, lyktor och en stor tårta. Kalaset är nästan färdigt.
```

**Scen 3: Den som satt utanför** → `riktiga/s02/slott/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: deep blue night, soft moonlight. In the scene: a small grey castle mouse with a tiny crown. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the left third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet sätter sig på huk bredvid slottsmusen, som sitter ensam i mörkret.
```

**Scen 4: En överraskning till alla** → `riktiga/s02/slott/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: warm magical golden glow in the middle of the night. In the scene: colorful party bunting, an old wooden music box with musical notes, a small grey castle mouse with a tiny crown. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): slottsmusen har med sig något fint till kalaset, och alla ser glada ut.
```

**Scen 5: Den lugnaste dansen** → `riktiga/s02/slott/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a warm glowing lantern. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen har kommit hem och sover gott efter kalaset.
```


## s03 · bron över bäcken · skog

**Scen 1: Två arga röster** → `riktiga/s03/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: a small babbling stream, a small hare, a red squirrel. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Vid en bäck står två djur på var sin sida och ser sura ut. barnet och kompisen står emellan.
```

**Scen 2: Hur grälet började** → `riktiga/s03/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: a small babbling stream, flat stepping stones across the stream. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen lyssnar medan djuren berättar om grälet.
```

**Scen 3: En sten i taget** → `riktiga/s03/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a small babbling stream, flat stepping stones across the stream, a smooth round stone. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Alla hjälps åt att lägga stenar i bäcken, en i taget.
```

**Scen 4: Den sista stenen** → `riktiga/s03/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a small babbling stream, flat stepping stones across the stream, a small hare, a red squirrel. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): De två vännerna möts mitt på stenbron.
```

**Scen 5: Hem över bron** → `riktiga/s03/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a smooth round stone. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet sover. På fönsterbrädan ligger en slät liten sten från bäcken.
```


## s03 · bron över bäcken · fjall

**Scen 1: Två arga röster** → `riktiga/s03/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: a small babbling stream, a white ptarmigan bird, a small lemming. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Vid en bäck står två djur på var sin sida och ser sura ut. barnet och kompisen står emellan.
```

**Scen 2: Hur grälet började** → `riktiga/s03/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: a small babbling stream, flat stepping stones across the stream. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen lyssnar medan djuren berättar om grälet.
```

**Scen 3: En sten i taget** → `riktiga/s03/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a small babbling stream, flat stepping stones across the stream, a smooth round stone. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Alla hjälps åt att lägga stenar i bäcken, en i taget.
```

**Scen 4: Den sista stenen** → `riktiga/s03/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a small babbling stream, flat stepping stones across the stream, a white ptarmigan bird, a small lemming. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): De två vännerna möts mitt på stenbron.
```

**Scen 5: Hem över bron** → `riktiga/s03/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a smooth round stone. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet sover. På fönsterbrädan ligger en slät liten sten från bäcken.
```


## s04 · snäckan som sjöng · hav

**Scen 1: En liten viskning** → `riktiga/s04/hav/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: early evening dusk, pink and lavender sky. In the scene: a pink and white spiral seashell that softly glows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen har hittat en snäcka som viskar.
```

**Scen 2: Snäckan Sia** → `riktiga/s04/hav/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a pink and white spiral seashell that softly glows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Snäckan Sia berättar varför hon är ledsen.
```

**Scen 3: Schh, schh** → `riktiga/s04/hav/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a gentle curling wave, a pink and white spiral seashell that softly glows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen gör vågornas ljud för att hjälpa Sia att minnas.
```

**Scen 4: Sången kommer tillbaka** → `riktiga/s04/hav/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: warm magical golden glow in the middle of the night. In the scene: a gentle curling wave, a pink and white spiral seashell that softly glows, soft floating musical notes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Sia sjunger igen, och små toner svävar upp i luften.
```

**Scen 5: Sias vaggvisa** → `riktiga/s04/hav/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a big friendly moon with a sleepy smiling face. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet sover. Utanför fönstret lyser månen, långt borta över havet.
```


## s04 · snäckan som sjöng · rum

**Scen 1: En liten viskning** → `riktiga/s04/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a pink and white spiral seashell that softly glows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen har hittat en snäcka som viskar.
```

**Scen 2: Snäckan Sia** → `riktiga/s04/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a pink and white spiral seashell that softly glows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Snäckan Sia berättar varför hon är ledsen.
```

**Scen 3: Schh, schh** → `riktiga/s04/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a blue blanket rippling like waves, a pink and white spiral seashell that softly glows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen gör vågornas ljud för att hjälpa Sia att minnas.
```

**Scen 4: Sången kommer tillbaka** → `riktiga/s04/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a blue blanket rippling like waves, a pink and white spiral seashell that softly glows, soft floating musical notes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Sia sjunger igen, och små toner svävar upp i luften.
```

**Scen 5: Sias vaggvisa** → `riktiga/s04/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a pink and white spiral seashell that softly glows. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet sover. På hyllan vid sängen ligger snäckan Sia och sjunger tyst.
```


## s05 · lyktan i grottan · skog

**Scen 1: Lyktan som rullade iväg** → `riktiga/s05/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: a small cute hedgehog. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): igelkotten är ledsen och berättar för barnet och kompisen vad som har hänt.
```

**Scen 2: Vid grottans öppning** → `riktiga/s05/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: the dark round opening of a cave, a small cute hedgehog. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen står vid den mörka grottöppningen och håller varandra i handen.
```

**Scen 3: Ett steg i taget** → `riktiga/s05/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a gentle cave with smooth purple rock walls. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: soft sound ripples in the air. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Inne i grottan räknar barnet och kompisen sina steg, och ett eko svarar.
```

**Scen 4: Grottans hemlighet** → `riktiga/s05/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a gentle cave with smooth purple rock walls. Lighting: warm magical golden glow in the middle of the night. In the scene: softly glowing crystals on the walls, a warm glowing lantern. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Grottans väggar glittrar, och mitt på golvet lyser den borttappade lyktan.
```

**Scen 5: Hem med ljuset** → `riktiga/s05/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a warm glowing lantern. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Nattlampan lyser mjukt, som en liten lykta.
```


## s05 · lyktan i grottan · fjall

**Scen 1: Lyktan som rullade iväg** → `riktiga/s05/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: a small brown lemming. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): lämmeln är ledsen och berättar för barnet och kompisen vad som har hänt.
```

**Scen 2: Vid grottans öppning** → `riktiga/s05/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: the dark round opening of a cave, a small brown lemming. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen står vid den mörka grottöppningen och håller varandra i handen.
```

**Scen 3: Ett steg i taget** → `riktiga/s05/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a gentle cave with smooth purple rock walls. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: soft sound ripples in the air. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Inne i grottan räknar barnet och kompisen sina steg, och ett eko svarar.
```

**Scen 4: Grottans hemlighet** → `riktiga/s05/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a gentle cave with smooth purple rock walls. Lighting: warm magical golden glow in the middle of the night. In the scene: softly glowing crystals on the walls, a warm glowing lantern. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Grottans väggar glittrar, och mitt på golvet lyser den borttappade lyktan.
```

**Scen 5: Hem med ljuset** → `riktiga/s05/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a warm glowing lantern. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Nattlampan lyser mjukt, som en liten lykta.
```


## s05 · lyktan i grottan · hav

**Scen 1: Lyktan som rullade iväg** → `riktiga/s05/hav/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: early evening dusk, pink and lavender sky. In the scene: a small coral-colored seahorse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): sjöhästen är ledsen och berättar för barnet och kompisen vad som har hänt.
```

**Scen 2: Vid grottans öppning** → `riktiga/s05/hav/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: the dark round opening of a cave, a small coral-colored seahorse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen står vid den mörka grottöppningen och håller varandra i handen.
```

**Scen 3: Ett steg i taget** → `riktiga/s05/hav/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a gentle cave with smooth purple rock walls. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: soft sound ripples in the air. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Inne i grottan räknar barnet och kompisen sina steg, och ett eko svarar.
```

**Scen 4: Grottans hemlighet** → `riktiga/s05/hav/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a gentle cave with smooth purple rock walls. Lighting: warm magical golden glow in the middle of the night. In the scene: softly glowing crystals on the walls, a warm glowing lantern. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Grottans väggar glittrar, och mitt på golvet lyser den borttappade lyktan.
```

**Scen 5: Hem med ljuset** → `riktiga/s05/hav/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a warm glowing lantern. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Nattlampan lyser mjukt, som en liten lykta.
```


## s06 · det konstiga ljudet · slott

**Scen 1: Hoooo – klonk** → `riktiga/s06/slott/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: deep blue night, soft moonlight. In the scene: soft sound ripples in the air. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sitter upp i sängen och lyssnar på ett konstigt ljud.
```

**Scen 2: Ska vi gå och titta?** → `riktiga/s06/slott/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a winding spiral staircase. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen smyger fram mot ljudet med en ficklampa.
```

**Scen 3: Bakom dörren** → `riktiga/s06/slott/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: an old arched wooden door. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the left third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet öppnar försiktigt dörren, fast det pirrar i magen.
```

**Scen 4: Den lilla vindpusten** → `riktiga/s06/slott/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: warm magical golden glow in the middle of the night. In the scene: a small friendly swirl of wind with two shiny eyes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten vindpust med blanka ögon snurrar i luften. Den är inte farlig, bara vilsen.
```

**Scen 5: Nattens vänliga ljud** → `riktiga/s06/slott/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small friendly swirl of wind with two shiny eyes. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret leker två vindpustar i natten.
```


## s06 · det konstiga ljudet · rum

**Scen 1: Hoooo – klonk** → `riktiga/s06/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: soft sound ripples in the air. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sitter upp i sängen och lyssnar på ett konstigt ljud.
```

**Scen 2: Ska vi gå och titta?** → `riktiga/s06/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a wardrobe with the door slightly open. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen smyger fram mot ljudet med en ficklampa.
```

**Scen 3: Bakom dörren** → `riktiga/s06/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a wardrobe with the door slightly open. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the left third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet öppnar försiktigt dörren, fast det pirrar i magen.
```

**Scen 4: Den lilla vindpusten** → `riktiga/s06/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a small friendly swirl of wind with two shiny eyes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten vindpust med blanka ögon snurrar i luften. Den är inte farlig, bara vilsen.
```

**Scen 5: Nattens vänliga ljud** → `riktiga/s06/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small friendly swirl of wind with two shiny eyes. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret leker två vindpustar i natten.
```


## s07 · den lilla raketen · rymden

**Scen 1: Rakel på startplattan** → `riktiga/s07/rymden/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: early evening dusk, pink and lavender sky. In the scene: a small red rocket with a round window and a friendly face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten röd raket står på startplattan och darrar. barnet och kompisen står bredvid.
```

**Scen 2: Ett viktigt uppdrag** → `riktiga/s07/rymden/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: early evening dusk, pink and lavender sky. In the scene: a small red rocket with a round window and a friendly face, a sack full of glittering dreams. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Bredvid raketen står en säck full av glittrande drömmar.
```

**Scen 3: Tio, nio, åtta** → `riktiga/s07/rymden/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a small red rocket with a round window and a friendly face, soft glowing countdown numbers 3, 2, 1. No people visible in this picture. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sitter i raketen och räknar ner tillsammans med Rakel.
```

**Scen 4: Uppe bland stjärnorna** → `riktiga/s07/rymden/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a big friendly moon with a sleepy smiling face, a small red rocket with a round window and a friendly face, many small sparkling stars in the sky. No people visible in this picture. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Rakel flyger genom rymden mot den stora, vänliga månen.
```

**Scen 5: En dröm på kudden** → `riktiga/s07/rymden/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small red rocket with a round window and a friendly face, many small sparkling stars in the sky. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret syns en liten raket och glittrande drömmar.
```


## s07 · den lilla raketen · fjall

**Scen 1: Rakel på startplattan** → `riktiga/s07/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: a small red rocket with a round window and a friendly face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten röd raket står på startplattan och darrar. barnet och kompisen står bredvid.
```

**Scen 2: Ett viktigt uppdrag** → `riktiga/s07/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: a small red rocket with a round window and a friendly face, a sack full of glittering dreams. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Bredvid raketen står en säck full av glittrande drömmar.
```

**Scen 3: Tio, nio, åtta** → `riktiga/s07/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a small red rocket with a round window and a friendly face, soft glowing countdown numbers 3, 2, 1. No people visible in this picture. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sitter i raketen och räknar ner tillsammans med Rakel.
```

**Scen 4: Uppe bland stjärnorna** → `riktiga/s07/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a big friendly moon with a sleepy smiling face, a small red rocket with a round window and a friendly face, many small sparkling stars in the sky. No people visible in this picture. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Rakel flyger genom rymden mot den stora, vänliga månen.
```

**Scen 5: En dröm på kudden** → `riktiga/s07/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small red rocket with a round window and a friendly face, many small sparkling stars in the sky. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret syns en liten raket och glittrande drömmar.
```


## s08 · lammet i dimman · fjall

**Scen 1: Dimman kommer** → `riktiga/s08/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: soft white fog. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En mjuk, vit dimma sveper in runt barnet och kompisen.
```

**Scen 2: Lammet Lilla Moln** → `riktiga/s08/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: soft white fog, a small fluffy white lamb. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett litet vitt lamm står alldeles ensamt i dimman.
```

**Scen 3: Lyssna noga** → `riktiga/s08/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: soft white fog, soft sound ripples in the air, a small fluffy white lamb. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet, kompisen och lammet står stilla i dimman och lyssnar.
```

**Scen 4: Pling, pling – mamma!** → `riktiga/s08/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: soft white fog, a mother sheep with a small brass bell, a small fluffy white lamb. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Lammet springer fram till sin mamma, som har en liten bjällra runt halsen.
```

**Scen 5: När dimman lättar** → `riktiga/s08/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small fluffy white lamb. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På fönsterbrädan står ett litet gosedjurslamm.
```


## s08 · lammet i dimman · skog

**Scen 1: Dimman kommer** → `riktiga/s08/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: soft white fog. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En mjuk, vit dimma sveper in runt barnet och kompisen.
```

**Scen 2: Lammet Lilla Moln** → `riktiga/s08/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: soft white fog, a small fluffy white lamb. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett litet vitt lamm står alldeles ensamt i dimman.
```

**Scen 3: Lyssna noga** → `riktiga/s08/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: soft white fog, soft sound ripples in the air, a small fluffy white lamb. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet, kompisen och lammet står stilla i dimman och lyssnar.
```

**Scen 4: Pling, pling – mamma!** → `riktiga/s08/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: soft white fog, a mother sheep with a small brass bell, a small fluffy white lamb. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Lammet springer fram till sin mamma, som har en liten bjällra runt halsen.
```

**Scen 5: När dimman lättar** → `riktiga/s08/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small fluffy white lamb. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På fönsterbrädan står ett litet gosedjurslamm.
```


## s09 · molnfabriken · rymden

**Scen 1: En stege till molnen** → `riktiga/s09/rymden/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: early evening dusk, pink and lavender sky. In the scene: soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen är på väg upp mot molnen.
```

**Scen 2: Maskinen som tystnade** → `riktiga/s09/rymden/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: early evening dusk, pink and lavender sky. In the scene: a whimsical wooden cloud-making machine with pipes and wheels, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): I molnfabriken står en stor maskin med rör och hjul.
```

**Scen 3: Det som fattades** → `riktiga/s09/rymden/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a whimsical wooden cloud-making machine with pipes and wheels, a grumpy square grey cloud. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett grått, surt moln kommer ut ur maskinen. barnet tittar noga på maskinen.
```

**Scen 4: Moln av fantasi** → `riktiga/s09/rymden/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: warm magical golden glow in the middle of the night. In the scene: a cloud shaped like a big friendly whale, soft fluffy clouds, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett stort moln som ser ut som en val seglar över himlen.
```

**Scen 5: Ett eget litet moln** → `riktiga/s09/rymden/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: soft fluffy clouds. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret svävar ett litet mjukt moln.
```


## s09 · molnfabriken · fjall

**Scen 1: En stege till molnen** → `riktiga/s09/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen är på väg upp mot molnen.
```

**Scen 2: Maskinen som tystnade** → `riktiga/s09/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: a whimsical wooden cloud-making machine with pipes and wheels, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): I molnfabriken står en stor maskin med rör och hjul.
```

**Scen 3: Det som fattades** → `riktiga/s09/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a whimsical wooden cloud-making machine with pipes and wheels, a grumpy square grey cloud. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett grått, surt moln kommer ut ur maskinen. barnet tittar noga på maskinen.
```

**Scen 4: Moln av fantasi** → `riktiga/s09/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: warm magical golden glow in the middle of the night. In the scene: a cloud shaped like a big friendly whale, soft fluffy clouds, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett stort moln som ser ut som en val seglar över himlen.
```

**Scen 5: Ett eget litet moln** → `riktiga/s09/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: soft fluffy clouds. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret svävar ett litet mjukt moln.
```


## s09 · molnfabriken · rum

**Scen 1: En stege till molnen** → `riktiga/s09/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen är på väg upp mot molnen.
```

**Scen 2: Maskinen som tystnade** → `riktiga/s09/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a whimsical wooden cloud-making machine with pipes and wheels, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): I molnfabriken står en stor maskin med rör och hjul.
```

**Scen 3: Det som fattades** → `riktiga/s09/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a whimsical wooden cloud-making machine with pipes and wheels, a grumpy square grey cloud. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett grått, surt moln kommer ut ur maskinen. barnet tittar noga på maskinen.
```

**Scen 4: Moln av fantasi** → `riktiga/s09/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a cloud shaped like a big friendly whale, soft fluffy clouds, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ett stort moln som ser ut som en val seglar över himlen.
```

**Scen 5: Ett eget litet moln** → `riktiga/s09/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: soft fluffy clouds. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret svävar ett litet mjukt moln.
```


## s10 · kartan som ritade sig själv · skog

**Scen 1: Ett gammalt papper** → `riktiga/s10/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: an old treasure map drawing itself with a blue dotted line. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen hittar något spännande på marken.
```

**Scen 2: Kartan ritar** → `riktiga/s10/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: an old treasure map drawing itself with a blue dotted line. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): På kartan ritar sig streck och små bilder alldeles av sig själva.
```

**Scen 3: Där kartan tog slut** → `riktiga/s10/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a wooden signpost with blank arrows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Vid en vägskylt utan text står barnet och kompisen och funderar.
```

**Scen 4: En bro av regnbåge** → `riktiga/s10/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: a soft pastel rainbow bridge. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En mjuk regnbågsbro sträcker sig framför barnet och kompisen.
```

**Scen 5: En karta till drömmarna** → `riktiga/s10/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small wooden treasure chest with colorful crayons. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Vid sängen står den lilla kistan med kritorna.
```


## s10 · kartan som ritade sig själv · slott

**Scen 1: Ett gammalt papper** → `riktiga/s10/slott/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: early evening dusk, pink and lavender sky. In the scene: an old treasure map drawing itself with a blue dotted line. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen hittar något spännande på marken.
```

**Scen 2: Kartan ritar** → `riktiga/s10/slott/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: early evening dusk, pink and lavender sky. In the scene: an old treasure map drawing itself with a blue dotted line. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): På kartan ritar sig streck och små bilder alldeles av sig själva.
```

**Scen 3: Där kartan tog slut** → `riktiga/s10/slott/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: deep blue night, soft moonlight. In the scene: a wooden signpost with blank arrows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Vid en vägskylt utan text står barnet och kompisen och funderar.
```

**Scen 4: En bro av regnbåge** → `riktiga/s10/slott/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: warm magical golden glow in the middle of the night. In the scene: a soft pastel rainbow bridge. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En mjuk regnbågsbro sträcker sig framför barnet och kompisen.
```

**Scen 5: En karta till drömmarna** → `riktiga/s10/slott/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small wooden treasure chest with colorful crayons. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Vid sängen står den lilla kistan med kritorna.
```


## s10 · kartan som ritade sig själv · hav

**Scen 1: Ett gammalt papper** → `riktiga/s10/hav/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: early evening dusk, pink and lavender sky. In the scene: a glass bottle with a rolled map inside. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen hittar något spännande i sanden.
```

**Scen 2: Kartan ritar** → `riktiga/s10/hav/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: early evening dusk, pink and lavender sky. In the scene: an old treasure map drawing itself with a blue dotted line. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): På kartan ritar sig streck och små bilder alldeles av sig själva.
```

**Scen 3: Där kartan tog slut** → `riktiga/s10/hav/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a wooden signpost with blank arrows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Vid en vägskylt utan text står barnet och kompisen och funderar.
```

**Scen 4: En bro av regnbåge** → `riktiga/s10/hav/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: warm magical golden glow in the middle of the night. In the scene: a soft pastel rainbow bridge. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En mjuk regnbågsbro sträcker sig framför barnet och kompisen.
```

**Scen 5: En karta till drömmarna** → `riktiga/s10/hav/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a small wooden treasure chest with colorful crayons. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Vid sängen står den lilla kistan med kritorna.
```


## s11 · leksakernas nattparad · rum

**Scen 1: När klockan slår tolv** → `riktiga/s11/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: toys that have come alive: a tin soldier, toy blocks and a wooden horse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Leksakerna på golvet har vaknat och tittar på barnet och kompisen.
```

**Scen 2: Trumpinnen som försvann** → `riktiga/s11/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a tin toy soldier with a drum, toys that have come alive: a tin soldier, toy blocks and a wooden horse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Tennsoldaten med trumman ser bekymrad ut. Han har bara en trumpinne.
```

**Scen 3: Vad kan bli en trumpinne?** → `riktiga/s11/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a pencil on the floor, a tin toy soldier with a drum. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet håller upp en penna och funderar på om den kan bli en trumpinne.
```

**Scen 4: Nattparaden** → `riktiga/s11/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: colorful party bunting, a quiet toy parade in a line. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Leksakerna tågar i en lång, lugn parad över golvet.
```

**Scen 5: Tillbaka på hyllan** → `riktiga/s11/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a tin toy soldier with a drum. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På hyllan står tennsoldaten med sin penntrumma.
```


## s11 · leksakernas nattparad · slott

**Scen 1: När klockan slår tolv** → `riktiga/s11/slott/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: deep blue night, soft moonlight. In the scene: toys that have come alive: a tin soldier, toy blocks and a wooden horse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Leksakerna på golvet har vaknat och tittar på barnet och kompisen.
```

**Scen 2: Trumpinnen som försvann** → `riktiga/s11/slott/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: deep blue night, soft moonlight. In the scene: a tin toy soldier with a drum, toys that have come alive: a tin soldier, toy blocks and a wooden horse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Tennsoldaten med trumman ser bekymrad ut. Han har bara en trumpinne.
```

**Scen 3: Vad kan bli en trumpinne?** → `riktiga/s11/slott/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a pencil on the floor, a tin toy soldier with a drum. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet håller upp en penna och funderar på om den kan bli en trumpinne.
```

**Scen 4: Nattparaden** → `riktiga/s11/slott/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: warm magical golden glow in the middle of the night. In the scene: colorful party bunting, a quiet toy parade in a line. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Leksakerna tågar i en lång, lugn parad över golvet.
```

**Scen 5: Tillbaka på hyllan** → `riktiga/s11/slott/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a tin toy soldier with a drum. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På hyllan står tennsoldaten med sin penntrumma.
```


## s12 · månskenets väg · skog

**Scen 1: En stråle på golvet** → `riktiga/s12/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En silvrig månstråle lyser in genom fönstret och ner på golvet.
```

**Scen 2: Den första frågan** → `riktiga/s12/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, a small cute hedgehog. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen frågar igelkotten om månskenet.
```

**Scen 3: Fler svar** → `riktiga/s12/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, glowing fireflies in the moss. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen möter en ny vän som också berättar om månskenet.
```

**Scen 4: Hos månen** → `riktiga/s12/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: a big friendly moon with a sleepy smiling face, a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Månstrålen går hela vägen upp till den stora, vänliga månen.
```

**Scen 5: Där strålen slutar** → `riktiga/s12/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a long silver moonbeam stretching across the scene. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover, och månstrålen slutar precis på kudden.
```


## s12 · månskenets väg · hav

**Scen 1: En stråle på golvet** → `riktiga/s12/hav/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En silvrig månstråle lyser in genom fönstret och ner på golvet.
```

**Scen 2: Den första frågan** → `riktiga/s12/hav/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, a small coral-colored seahorse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen frågar sjöhästen om månskenet.
```

**Scen 3: Fler svar** → `riktiga/s12/hav/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, a small friendly crab. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen möter en ny vän som också berättar om månskenet.
```

**Scen 4: Hos månen** → `riktiga/s12/hav/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: warm magical golden glow in the middle of the night. In the scene: a big friendly moon with a sleepy smiling face, a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Månstrålen går hela vägen upp till den stora, vänliga månen.
```

**Scen 5: Där strålen slutar** → `riktiga/s12/hav/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a long silver moonbeam stretching across the scene. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover, och månstrålen slutar precis på kudden.
```


## s12 · månskenets väg · fjall

**Scen 1: En stråle på golvet** → `riktiga/s12/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En silvrig månstråle lyser in genom fönstret och ner på golvet.
```

**Scen 2: Den första frågan** → `riktiga/s12/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, a small brown lemming. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen frågar lämmeln om månskenet.
```

**Scen 3: Fler svar** → `riktiga/s12/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, a reindeer eating lichen. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen möter en ny vän som också berättar om månskenet.
```

**Scen 4: Hos månen** → `riktiga/s12/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: warm magical golden glow in the middle of the night. In the scene: a big friendly moon with a sleepy smiling face, a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Månstrålen går hela vägen upp till den stora, vänliga månen.
```

**Scen 5: Där strålen slutar** → `riktiga/s12/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a long silver moonbeam stretching across the scene. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover, och månstrålen slutar precis på kudden.
```


## s12 · månskenets väg · rum

**Scen 1: En stråle på golvet** → `riktiga/s12/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En silvrig månstråle lyser in genom fönstret och ner på golvet.
```

**Scen 2: Den första frågan** → `riktiga/s12/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, a small pink fabric toy mouse. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen frågar tygmusen om månskenet.
```

**Scen 3: Fler svar** → `riktiga/s12/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a long silver moonbeam stretching across the scene, a small spider web glittering in moonlight. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen möter en ny vän som också berättar om månskenet.
```

**Scen 4: Hos månen** → `riktiga/s12/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a big friendly moon with a sleepy smiling face, a long silver moonbeam stretching across the scene. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Månstrålen går hela vägen upp till den stora, vänliga månen.
```

**Scen 5: Där strålen slutar** → `riktiga/s12/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a long silver moonbeam stretching across the scene. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover, och månstrålen slutar precis på kudden.
```


## s13 · den lilla dörren · slott

**Scen 1: En dörr som inte var där förut** → `riktiga/s13/slott/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: early evening dusk, pink and lavender sky. In the scene: an old arched wooden door. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Längst ner vid väggen finns en pytteliten dörr.
```

**Scen 2: Nyckeln och knackningarna** → `riktiga/s13/slott/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: deep blue night, soft moonlight. In the scene: an old arched wooden door, a tiny brass key hanging on a thread. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten nyckel hänger i en tråd ovanför dörren.
```

**Scen 3: Småfolkets by** → `riktiga/s13/slott/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny village of round houses with tiny lit windows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Bakom dörren finns en liten by med runda hus och små lyktor.
```

**Scen 4: Frågor åt båda hållen** → `riktiga/s13/slott/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny library shelf full of tiny books, a tiny thumb-sized person with a red hat and glasses. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): I småfolkets bibliotek finns hyllor fulla av pyttesmå böcker.
```

**Scen 5: En bok att ta med** → `riktiga/s13/slott/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a tiny book with a question mark. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På hyllan ligger en pytteliten bok.
```


## s13 · den lilla dörren · skog

**Scen 1: En dörr som inte var där förut** → `riktiga/s13/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: an old arched wooden door. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Längst ner i en trädrot finns en pytteliten dörr.
```

**Scen 2: Nyckeln och knackningarna** → `riktiga/s13/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: an old arched wooden door, a tiny brass key hanging on a thread. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten nyckel hänger i en tråd ovanför dörren.
```

**Scen 3: Småfolkets by** → `riktiga/s13/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny village of round houses with tiny lit windows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Bakom dörren finns en liten by med runda hus och små lyktor.
```

**Scen 4: Frågor åt båda hållen** → `riktiga/s13/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny library shelf full of tiny books, a tiny thumb-sized person with a red hat and glasses. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): I småfolkets bibliotek finns hyllor fulla av pyttesmå böcker.
```

**Scen 5: En bok att ta med** → `riktiga/s13/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a tiny book with a question mark. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På hyllan ligger en pytteliten bok.
```


## s13 · den lilla dörren · rum

**Scen 1: En dörr som inte var där förut** → `riktiga/s13/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: an old arched wooden door. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Längst ner vid väggen finns en pytteliten dörr.
```

**Scen 2: Nyckeln och knackningarna** → `riktiga/s13/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: an old arched wooden door, a tiny brass key hanging on a thread. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En liten nyckel hänger i en tråd ovanför dörren.
```

**Scen 3: Småfolkets by** → `riktiga/s13/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny village of round houses with tiny lit windows. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Bakom dörren finns en liten by med runda hus och små lyktor.
```

**Scen 4: Frågor åt båda hållen** → `riktiga/s13/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny library shelf full of tiny books, a tiny thumb-sized person with a red hat and glasses. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): I småfolkets bibliotek finns hyllor fulla av pyttesmå böcker.
```

**Scen 5: En bok att ta med** → `riktiga/s13/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a tiny book with a question mark. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På hyllan ligger en pytteliten bok.
```


## s14 · de lysande bubblorna · hav

**Scen 1: Bubblor som lyser** → `riktiga/s14/hav/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: early evening dusk, pink and lavender sky. In the scene: glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Lysande bubblor svävar runt barnet och kompisen.
```

**Scen 2: In i den stora bubblan** → `riktiga/s14/hav/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm underwater world with swaying seaweed, soft sand and tiny bubbles, gentle blue light. Lighting: deep blue night, soft moonlight. In the scene: glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). The child is inside a big transparent floating bubble. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen färdas inne i en stor, genomskinlig bubbla.
```

**Scen 3: Lumi** → `riktiga/s14/hav/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm underwater world with swaying seaweed, soft sand and tiny bubbles, gentle blue light. Lighting: warm magical golden glow in the middle of the night. In the scene: Lumi, a small glowing creature (a glowing fish in the sea, a small colorful nebula in space) blowing glowing bubbles, glowing floating bubbles in blue and lilac. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). The child is inside a big transparent floating bubble. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Lumi lyser i blått och lila och blåser små bubblor.
```

**Scen 4: Frågor som lyser** → `riktiga/s14/hav/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm underwater world with swaying seaweed, soft sand and tiny bubbles, gentle blue light. Lighting: warm magical golden glow in the middle of the night. In the scene: Lumi, a small glowing creature (a glowing fish in the sea, a small colorful nebula in space) blowing glowing bubbles, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, soft pink corals. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). The child is inside a big transparent floating bubble. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Bubblor fulla av frågor lyser upp omgivningen.
```

**Scen 5: En bubbla på fönstret** → `riktiga/s14/hav/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: glowing floating bubbles in blue and lilac. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. En liten lysande bubbla vilar vid fönstret.
```


## s14 · de lysande bubblorna · rymden

**Scen 1: Bubblor som lyser** → `riktiga/s14/rymden/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: early evening dusk, pink and lavender sky. In the scene: glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Lysande bubblor svävar runt barnet och kompisen.
```

**Scen 2: In i den stora bubblan** → `riktiga/s14/rymden/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). The child is inside a big transparent floating bubble. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen färdas inne i en stor, genomskinlig bubbla.
```

**Scen 3: Lumi** → `riktiga/s14/rymden/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: warm magical golden glow in the middle of the night. In the scene: Lumi, a small glowing creature (a glowing fish in the sea, a small colorful nebula in space) blowing glowing bubbles, glowing floating bubbles in blue and lilac. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). The child is inside a big transparent floating bubble. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Lumi lyser i blått och lila och blåser små bubblor.
```

**Scen 4: Frågor som lyser** → `riktiga/s14/rymden/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: warm magical golden glow in the middle of the night. In the scene: Lumi, a small glowing creature (a glowing fish in the sea, a small colorful nebula in space) blowing glowing bubbles, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, glowing floating bubbles in blue and lilac, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). The child is inside a big transparent floating bubble. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Bubblor fulla av frågor lyser upp omgivningen.
```

**Scen 5: En bubbla på fönstret** → `riktiga/s14/rymden/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: glowing floating bubbles in blue and lilac. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. En liten lysande bubbla vilar vid fönstret.
```


## s15 · den lilla fågeln · fjall

**Scen 1: Ett litet pip** → `riktiga/s15/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): På marken sitter en liten fågelunge och fryser.
```

**Scen 2: Varsamma händer** → `riktiga/s15/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a soft bird nest of moss with a little scarf, a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen bygger ett mjukt bo åt fågelungen.
```

**Scen 3: Lite värme** → `riktiga/s15/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: warm magical golden glow in the middle of the night. In the scene: a soft bird nest of moss with a little scarf, a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Fågelungen sitter varmt i boet, och kompisen håller den sällskap.
```

**Scen 4: Hem till boet** → `riktiga/s15/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a birch tree with a nest and a bird family, a soft bird nest of moss with a little scarf, a tiny fluffy blue bird, a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Uppe i trädet väntar fågelungens familj.
```

**Scen 5: En varm känsla** → `riktiga/s15/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a tiny fluffy blue bird. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På fönsterbrädan sitter en liten fågel och tittar in.
```


## s15 · den lilla fågeln · skog

**Scen 1: Ett litet pip** → `riktiga/s15/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): På marken sitter en liten fågelunge och fryser.
```

**Scen 2: Varsamma händer** → `riktiga/s15/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a soft bird nest of moss with a little scarf, a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen bygger ett mjukt bo åt fågelungen.
```

**Scen 3: Lite värme** → `riktiga/s15/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: a soft bird nest of moss with a little scarf, a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Fågelungen sitter varmt i boet, och kompisen håller den sällskap.
```

**Scen 4: Hem till boet** → `riktiga/s15/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a birch tree with a nest and a bird family, a soft bird nest of moss with a little scarf, a tiny fluffy blue bird, a tiny fluffy blue bird. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Uppe i trädet väntar fågelungens familj.
```

**Scen 5: En varm känsla** → `riktiga/s15/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a tiny fluffy blue bird. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På fönsterbrädan sitter en liten fågel och tittar in.
```


## s16 · den trötta månen · rymden

**Scen 1: Månen gäspar** → `riktiga/s16/rymden/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: early evening dusk, pink and lavender sky. In the scene: a big friendly moon with a sleepy smiling face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Den stora månen gäspar och ser trött ut.
```

**Scen 2: Alla behöver vila** → `riktiga/s16/rymden/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a big friendly moon with a sleepy smiling face, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen pratar med den trötta månen.
```

**Scen 3: Alla lyser lite** → `riktiga/s16/rymden/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: many small sparkling stars in the sky, a warm glowing lantern, a warm glowing lantern, a big friendly moon with a sleepy smiling face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Stjärnor och lyktor lyser tillsammans så att månen kan vila.
```

**Scen 4: En vaggvisa för månen** → `riktiga/s16/rymden/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: warm magical golden glow in the middle of the night. In the scene: a big friendly moon with a sleepy smiling face, soft fluffy clouds, soft floating musical notes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Månen vilar under ett mjukt moln medan barnet och kompisen sjunger.
```

**Scen 5: Månen lyser igen** → `riktiga/s16/rymden/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a big friendly moon with a sleepy smiling face. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret lyser månen klart och glatt.
```


## s16 · den trötta månen · hav

**Scen 1: Månen gäspar** → `riktiga/s16/hav/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: early evening dusk, pink and lavender sky. In the scene: a big friendly moon with a sleepy smiling face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Den stora månen gäspar och ser trött ut.
```

**Scen 2: Alla behöver vila** → `riktiga/s16/hav/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a big friendly moon with a sleepy smiling face, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen pratar med den trötta månen.
```

**Scen 3: Alla lyser lite** → `riktiga/s16/hav/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: many small sparkling stars in the sky, a warm glowing lantern, a warm glowing lantern, a big friendly moon with a sleepy smiling face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Stjärnor och lyktor lyser tillsammans så att månen kan vila.
```

**Scen 4: En vaggvisa för månen** → `riktiga/s16/hav/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: warm magical golden glow in the middle of the night. In the scene: a big friendly moon with a sleepy smiling face, soft fluffy clouds, soft floating musical notes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Månen vilar under ett mjukt moln medan barnet och kompisen sjunger.
```

**Scen 5: Månen lyser igen** → `riktiga/s16/hav/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a big friendly moon with a sleepy smiling face. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret lyser månen klart och glatt.
```


## s16 · den trötta månen · rum

**Scen 1: Månen gäspar** → `riktiga/s16/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: early evening dusk, pink and lavender sky. In the scene: a big friendly moon with a sleepy smiling face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Den stora månen gäspar och ser trött ut.
```

**Scen 2: Alla behöver vila** → `riktiga/s16/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a big friendly moon with a sleepy smiling face, soft fluffy clouds. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen pratar med den trötta månen.
```

**Scen 3: Alla lyser lite** → `riktiga/s16/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: many small sparkling stars in the sky, a warm glowing lantern, a warm glowing lantern, a big friendly moon with a sleepy smiling face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Stjärnor och lyktor lyser tillsammans så att månen kan vila.
```

**Scen 4: En vaggvisa för månen** → `riktiga/s16/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a big friendly moon with a sleepy smiling face, soft fluffy clouds, soft floating musical notes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Månen vilar under ett mjukt moln medan barnet och kompisen sjunger.
```

**Scen 5: Månen lyser igen** → `riktiga/s16/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a big friendly moon with a sleepy smiling face. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Utanför fönstret lyser månen klart och glatt.
```


## s17 · nattrosen · slott

**Scen 1: Rosen som hängde med huvudet** → `riktiga/s17/slott/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: early evening dusk, pink and lavender sky. In the scene: a large rose drooping and tired. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En stor ros hänger trött med huvudet. barnet och kompisen tittar på den.
```

**Scen 2: Månbrunnen** → `riktiga/s17/slott/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: deep blue night, soft moonlight. In the scene: an old mossy stone well reflecting the moon. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen tittar ner i en gammal brunn där månen speglar sig.
```

**Scen 3: Fram och tillbaka** → `riktiga/s17/slott/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: deep blue night, soft moonlight. In the scene: a tiny silver cup of water, a large rose drooping and tired. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the left third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet bär försiktigt en liten silverkopp med vatten.
```

**Scen 4: Natten då rosen blommade** → `riktiga/s17/slott/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a friendly fairytale castle on a hill at night with warm lit windows. Lighting: warm magical golden glow in the middle of the night. In the scene: a large glowing night rose in pink and silver, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattrosen har slagit ut och lyser i rosa och silver.
```

**Scen 5: En doft av drömmar** → `riktiga/s17/slott/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a large glowing night rose in pink and silver. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På fönsterbrädan står ett litet rosenblad som lyser svagt.
```


## s17 · nattrosen · skog

**Scen 1: Rosen som hängde med huvudet** → `riktiga/s17/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: a large rose drooping and tired. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En stor ros hänger trött med huvudet. barnet och kompisen tittar på den.
```

**Scen 2: Månbrunnen** → `riktiga/s17/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: an old mossy stone well reflecting the moon. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen tittar ner i en gammal brunn där månen speglar sig.
```

**Scen 3: Fram och tillbaka** → `riktiga/s17/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a tiny silver cup of water, a large rose drooping and tired. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the left third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet bär försiktigt en liten silverkopp med vatten.
```

**Scen 4: Natten då rosen blommade** → `riktiga/s17/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: a large glowing night rose in pink and silver, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattrosen har slagit ut och lyser i rosa och silver.
```

**Scen 5: En doft av drömmar** → `riktiga/s17/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a large glowing night rose in pink and silver. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. På fönsterbrädan står ett litet rosenblad som lyser svagt.
```


## s18 · nattlampans gnista · rum

**Scen 1: Lampan slocknar** → `riktiga/s18/rum/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a small bedside night lamp. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Det har blivit mörkt i rummet. Nattlampan har slocknat.
```

**Scen 2: Gnistan som var rädd** → `riktiga/s18/rum/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a small bedside night lamp, a tiny glowing spark with a face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En pytteliten gnista sitter i lampan och darrar.
```

**Scen 3: Vad skuggorna egentligen är** → `riktiga/s18/rum/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: deep blue night, soft moonlight. In the scene: a chair with clothes on it casting a shadow, a tiny glowing spark with a face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet, kompisen och gnistan tittar på en skugga som bara är en stol med kläder på.
```

**Scen 4: Mörkret är mjukt** → `riktiga/s18/rum/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny glowing spark with a face, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Gnistan Glim lyser starkt och glatt mitt i rummet.
```

**Scen 5: Tillbaka i lampan** → `riktiga/s18/rum/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover tryggt. Nattlampan lyser mjukt och gult.
```


## s18 · nattlampans gnista · slott

**Scen 1: Lampan slocknar** → `riktiga/s18/slott/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a small bedside night lamp. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Det har blivit mörkt i rummet. Nattlampan har slocknat.
```

**Scen 2: Gnistan som var rädd** → `riktiga/s18/slott/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: dark but calm, small warm light sources, still gentle and safe. In the scene: a small bedside night lamp, a tiny glowing spark with a face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the middle of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En pytteliten gnista sitter i lampan och darrar.
```

**Scen 3: Vad skuggorna egentligen är** → `riktiga/s18/slott/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: deep blue night, soft moonlight. In the scene: a chair with clothes on it casting a shadow, a tiny glowing spark with a face. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet, kompisen och gnistan tittar på en skugga som bara är en stol med kläder på.
```

**Scen 4: Mörkret är mjukt** → `riktiga/s18/slott/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: inside a cozy fairytale castle hall with tall arched windows showing the night sky, a soft rug and warm candle light. Lighting: warm magical golden glow in the middle of the night. In the scene: a tiny glowing spark with a face, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Gnistan Glim lyser starkt och glatt mitt i rummet.
```

**Scen 5: Tillbaka i lampan** → `riktiga/s18/slott/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover tryggt. Nattlampan lyser mjukt och gult.
```


## s19 · valungens vaggvisa · hav

**Scen 1: Ett ljud från havet** → `riktiga/s19/hav/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: early evening dusk, pink and lavender sky. In the scene: a small whale calf with a little water spout. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Ute i vattnet syns en liten valunge. barnet och kompisen står på stranden.
```

**Scen 2: Vilja i det stora havet** → `riktiga/s19/hav/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a small whale calf with a little water spout. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Valungen Vilja berättar för barnet och kompisen att hon har kommit bort.
```

**Scen 3: Mammas sång** → `riktiga/s19/hav/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: deep blue night, soft moonlight. In the scene: a small whale calf with a little water spout, soft floating musical notes. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Vilja sjunger, och små toner svävar ut över havet.
```

**Scen 4: Ett svar i natten** → `riktiga/s19/hav/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a calm sandy beach by the sea at night, gentle waves, moonlight on the water, a small lighthouse on a cliff. Lighting: warm magical golden glow in the middle of the night. In the scene: a big gentle mother whale, a small whale calf with a little water spout. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): En stor val dyker upp bredvid Vilja. Mamma har hittat henne.
```

**Scen 5: Sången som alltid finns** → `riktiga/s19/hav/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: a big gentle mother whale. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover. Långt ute på havet simmar två valar sida vid sida.
```


## s20 · stjärnfilten · rymden

**Scen 1: Hos Nattmormor** → `riktiga/s20/rymden/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: early evening dusk, pink and lavender sky. In the scene: an old rocking chair with a kind grandmother knitting, a ball of yarn made of starlight. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattmormor sitter i sin gungstol och stickar en filt av stjärnor.
```

**Scen 2: Ett hål i filten** → `riktiga/s20/rymden/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a dark blue knitted blanket with sparkling stars, an old rocking chair with a kind grandmother knitting. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Mitt i stjärnfilten finns ett stort hål.
```

**Scen 3: Att samla ljus** → `riktiga/s20/rymden/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: deep blue night, soft moonlight. In the scene: a ball of yarn made of starlight, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen samlar stjärnljus till ett glittrande nystan.
```

**Scen 4: Filten blir hel** → `riktiga/s20/rymden/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: outer space, standing on a small soft lilac moon surface, a pink ringed planet and many gentle stars in the background. Lighting: warm magical golden glow in the middle of the night. In the scene: a dark blue knitted blanket with sparkling stars, an old rocking chair with a kind grandmother knitting. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattmormor stickar ihop hålet med det nya stjärnljuset.
```

**Scen 5: Under stjärnfilten** → `riktiga/s20/rymden/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: many small sparkling stars in the sky. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover tryggt under natthimlen.
```


## s20 · stjärnfilten · fjall

**Scen 1: Hos Nattmormor** → `riktiga/s20/fjall/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: early evening dusk, pink and lavender sky. In the scene: an old rocking chair with a kind grandmother knitting, a ball of yarn made of starlight. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattmormor sitter i sin gungstol och stickar en filt av stjärnor.
```

**Scen 2: Ett hål i filten** → `riktiga/s20/fjall/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a dark blue knitted blanket with sparkling stars, an old rocking chair with a kind grandmother knitting. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Mitt i stjärnfilten finns ett stort hål.
```

**Scen 3: Att samla ljus** → `riktiga/s20/fjall/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: deep blue night, soft moonlight. In the scene: a ball of yarn made of starlight, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen samlar stjärnljus till ett glittrande nystan.
```

**Scen 4: Filten blir hel** → `riktiga/s20/fjall/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: Scandinavian mountains at night with snowy peaks, soft reindeer lichen on the ground and a gentle green aurora in the sky. Lighting: warm magical golden glow in the middle of the night. In the scene: a dark blue knitted blanket with sparkling stars, an old rocking chair with a kind grandmother knitting. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattmormor stickar ihop hålet med det nya stjärnljuset.
```

**Scen 5: Under stjärnfilten** → `riktiga/s20/fjall/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: many small sparkling stars in the sky. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover tryggt under natthimlen.
```


## s20 · stjärnfilten · skog

**Scen 1: Hos Nattmormor** → `riktiga/s20/skog/scen-1.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: early evening dusk, pink and lavender sky. In the scene: an old rocking chair with a kind grandmother knitting, a ball of yarn made of starlight. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattmormor sitter i sin gungstol och stickar en filt av stjärnor.
```

**Scen 2: Ett hål i filten** → `riktiga/s20/skog/scen-2.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a dark blue knitted blanket with sparkling stars, an old rocking chair with a kind grandmother knitting. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Mitt i stjärnfilten finns ett stort hål.
```

**Scen 3: Att samla ljus** → `riktiga/s20/skog/scen-3.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: deep blue night, soft moonlight. In the scene: a ball of yarn made of starlight, many small sparkling stars in the sky. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the right third free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen samlar stjärnljus till ett glittrande nystan.
```

**Scen 4: Filten blir hel** → `riktiga/s20/skog/scen-4.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: an enchanted forest at night with soft moss, tall rounded pine trees, small softly glowing blue mushrooms and fireflies. Lighting: warm magical golden glow in the middle of the night. In the scene: a dark blue knitted blanket with sparkling stars, an old rocking chair with a kind grandmother knitting. Main character: the same small child as in the reference image (about 5 years old, big kind eyes, soft brown hair, light blue pyjamas with little cream stars). Place the child in the left third of the picture, and keep the ground in the middle free of objects (a companion is added there later). Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): Nattmormor stickar ihop hålet med det nya stjärnljuset.
```

**Scen 5: Under stjärnfilten** → `riktiga/s20/skog/scen-5.jpg`

```
High-quality stylized 3D animated feature film still, like a modern family animated movie: soft subsurface lighting, rounded appealing shapes, expressive friendly characters, rich but gentle colors, cinematic depth of field, cozy bedtime mood with a dusty blue, lavender, rose and warm peach palette, warm glowing light sources. Safe and calm for children aged 4-7, nothing scary, no harsh contrast, no text, no letters, no logos, no watermark. 4:3 landscape composition. Setting: a cozy child's bedroom at night with a window showing stars, a small bed, a bookshelf, a round rug and a warm night light. Lighting: very calm, dim, sleepy night mood. In the scene: many small sparkling stars in the sky. Main character: one small child in light blue pyjamas fast asleep in a cozy bed under a lilac blanket with little stars. Do not draw any animal companion or second main character; the app adds the companion on top of the picture. Story moment (Swedish): barnet och kompisen sover tryggt under natthimlen.
```

