# Dödsbacken

Ett 3D-mobilspel där en bil ska ta sig nerför en kuperad backe full av hinder till en stor rund teleportportal som tar en vidare till nästa bana. Det finns inga liv: bilen går sönder mer och mer på vägen och blir långsammare, vingligare och svårare att styra, men den rullar alltid vidare – sista biten drar portalen in bilen, så även en helt kvaddad bil glider in.

Backen går i krön och svackor (mer kuperat på svårare banor) och bilen kan lätta över skarpa krön. Kameran byter vinkel under resan – bakifrån, uppifrån, lågt, från sidorna, snett ovanifrån och långt bakom – vilket gör det svårare att styra.

Inspirerat av BeamNG-klippen på YouTube-kanalen Monster Chases.

## Spela

Öppna `index.html` i mobilens webbläsare. Dra med fingret för att styra. På dator: piltangenterna, P pausar.

## Skador

Plåten bucklas där bilen träffas. Stötfångare, speglar, dörrar, huv, vinge och hjul kan slitas loss och flyga iväg. Vindrutan spricker och krossas, och motorn ryker, brinner och hackar.

## Banor och stjärnor

| Bana            | Längd  | Speciellt                                  |
|-----------------|--------|--------------------------------------------|
| Sommarbacken    | 800 m  | De första hindren                          |
| Vinterbacken    | 1000 m | Isfläckar, pendelklingor                   |
| Ökenkanjonen    | 1100 m | Mycket stenblock, alla hinder              |
| Vulkanberget    | 1200 m | Lavapölar som bränner bilen                |
| Midnattsbacken  | 1300 m | Mörker och strålkastare, mest kuperad      |

Nästa bana låses upp när man når portalen. 1 ★ för att nå portalen, 2 ★ med minst 40 % av bilen kvar, 3 ★ med minst 75 %.

## Nivåer och upplåsningar

Varje runda ger XP (sträcka, bilens skick, mynt och stjärnor).

| Nivå | Låser upp                                   |
|------|---------------------------------------------|
| 1    | Sportbil, lack Röd och Blå                  |
| 2    | Liten bil, lack Skog, Frontskydd            |
| 3    | Lack Racing, Grova däck                     |
| 4    | Stor bil, Rollbur                           |
| 5    | Lack Flammor, Sidoskydd                     |
| 6    | Lack Kamouflage, Superfjädring              |
| 7    | Turbo                                       |
| 8    | Lack Neon                                   |
| 9    | Pansarplåt                                  |
| 10   | Lack Krom                                   |
| 12   | Lack Guld                                   |

Tillbehören syns på bilen och ger en bonus. Frontskydd, rollbur och sidoskydd kan slitas loss under rundan, och då försvinner bonusen.

Framsteg sparas i webbläsaren på enheten.

## Hinder och fällor

Bilar i vägen, rullande stenblock, tunnor som rullar mot en, snurrande hammare, jättegupp, olja/is/lava, glidande mur, jättehammare, pendelklinga, krossväggar, spikmattor som skjuter upp (kan ge punka), minor som spränger upp bilen, sågklingor som glider i en skåra, eldkastare från vägkanten, fallluckor, låga balkar och smala passager. Samma hindertyp kommer inte två gånger inom tre hinder.

## Monster

Lego-liknande monster (zombie, skelett, cyklop, troll, vampyr) vandrar över vägen och sprätter isär i bitar när man kör på dem. Varje monster ger XP men lite skada.

## Liten eller stor bil

Ingen bil är bäst överallt:

- **Liten** – greppar på is, ryms under låga balkar och genom smala passager, men tar mycket skada när den rammar bilar, stenar, tunnor och monster.
- **Sportbil** – allround.
- **Stor** – plöjer genom bilar, stenar, tunnor och monster nästan utan skada, men halkar länge, landar hårt och slår i låga balkar.

Vinterbacken och Vulkanberget gynnar den lilla bilen, Ökenkanjonen och Midnattsbacken den stora.

## Teknik

Allt ligger i `index.html` och använder Three.js (laddas från cdnjs). Grafiken har rundade karosser, speglingar från himlen och filmisk färgåtergivning. Grafiknivån (knappen i menyn) står på Auto som standard: spelet börjar på hög nivå och sänker upplösning och skuggkvalitet själv om enheten inte hinner med. `klassisk.html` är den första 2D-versionen.
