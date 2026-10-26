/* Sagokompis – extra innehåll per saga.
   val:      en valpunkt där barnet bestämmer vad som händer (två vägar som båda leder vidare)
   aventyr:  ett extra spännande stycke som bara läses med spänningsnivån "Stort äventyr"
   hjalp:    ett ögonblick där barnet hjälper till genom att trycka på något i sagan
   scen/efter anger var i sagan det hamnar: efter stycke nummer "efter" (räknat från 0) i scen "scen" (från 0). */
Sagokompis.sagoExtra = {
  s01: {
    val: { scen: 2, efter: 1, fraga: 'Hur ska de ta sig upp? Den långa slingriga vägen eller den branta genvägen?',
      a: { knapp: 'Den slingriga vägen', text: '– Vi tar den slingriga vägen, sa {N}. Den gick runt och runt, förbi [rymden: små månar som snurrade sakta | fjall: små bäckar som glittrade | rum: gosedjur som vinkade sömnigt från hyllan]. Det tog längre tid, men Pim fick se allt på vägen och skrattade sitt lilla klingande stjärnskratt.' },
      b: { knapp: 'Den branta genvägen', text: '– Vi tar genvägen, sa {N}. Den var brant och lite pirrig, och en gång slant {N} med foten. Men {F} höll i, och Pim lyste extra starkt för att visa var de skulle sätta fötterna.' } },
    aventyr: { scen: 3, efter: 1, text: 'Just då drog ett stort, mörkt moln fram över himlen och skymde alla stjärnor. Allt blev svart, och Pim darrade så att ljuset fladdrade. – Om molnet stannar ser de mig aldrig! {N} höll andan. Men molnet gled långsamt vidare, och stjärnorna tittade fram igen, en efter en.' },
    hjalp: { scen: 3, efter: 2, uppmaning: 'Hjälp Pim att lysa! Tryck på stjärnan tre gånger.', ikon: 'stjarnfigur', antal: 3, klart: 'Pim lyste starkare för varje tryck!' }
  },
  s02: {
    val: { scen: 1, efter: 2, fraga: 'Vad ska {N} och {F} hjälpa till med nu? Duka bordet eller blåsa upp ballonger?',
      a: { knapp: 'Duka bordet', text: 'De dukade det långa bordet med små tallrikar och koppar, en till varje gäst. {N} räknade noga, så att alla skulle få plats.' },
      b: { knapp: 'Blåsa ballonger', text: 'De blåste upp ballonger tills kinderna var röda. En ballong for iväg med ett pruttande ljud runt hela [skog: gläntan | slott: salen], och alla skrattade så att de fick hicka.' } },
    aventyr: { scen: 2, efter: 2, text: 'Just då svepte en kall vind förbi, och alla lyktor fladdrade. [skog: Det knakade högt i en buske. | slott: En dörr slog igen med en smäll.] {^P:vasenD} hoppade till och kröp ihop. – Här ute är det mörkt och kallt hela kvällen, viskade den.' },
    hjalp: { scen: 1, efter: 1, uppmaning: 'Hjälp till att tända lyktorna! Tryck på lyktan tre gånger.', ikon: 'lykta', antal: 3, klart: 'Lykta efter lykta tändes, gul och mjuk.' }
  },
  s03: {
    val: { scen: 2, efter: 0, fraga: 'Var ska de leta stenar? I den grunda viken eller under det stora trädet?',
      a: { knapp: 'I den grunda viken', text: '{N} vadade ut i den grunda viken, där vattnet bara gick till anklarna. Där låg släta, runda stenar som såg ut som små bröd.' },
      b: { knapp: 'Under det stora trädet', text: 'Under [skog: den stora granen | fjall: den stora fjällbjörken] låg platta stenar gömda i mossan. {N} hittade till och med en som var formad som ett hjärta.' } },
    aventyr: { scen: 3, efter: 0, text: 'Plötsligt började vattnet stiga. Bäcken brusade högre och högre och drog i stenarna som redan låg där. – Skynda! ropade [skog: ekorren | fjall: lämmeln]. Annars spolas hela bron bort!' },
    hjalp: { scen: 3, efter: 1, uppmaning: 'Hjälp till att lyfta! Tryck på stenen tre gånger.', ikon: 'sten', antal: 3, klart: 'Hej och hå! Stenen gled på plats.' }
  },
  s04: {
    val: { scen: 0, efter: 4, fraga: 'Ska {N} lyfta upp snäckan direkt, eller först viska hej till den?',
      a: { knapp: 'Lyfta upp den', text: '{N} sträckte sig försiktigt efter snäckan. Den var sval och slät, och när {nh} höll den i handen kändes det som om den andades.' },
      b: { knapp: 'Viska hej', text: '{N} lutade sig fram och viskade: – Hej, lilla snäcka. Det blev tyst en stund, och sedan viskade någon hej tillbaka, så tunt att det lät som en suck.' } },
    aventyr: { scen: 2, efter: 1, text: '[hav: Just då kom en stor våg rusande upp på stranden, mycket större än de andra. Den dånade och skummade, och {N} fick springa baklänges för att inte bli blöt. – Den vågen var inte min vän, viskade Sia. Det var en stormvåg. | rum: Just då slog fönstret upp med en smäll, och gardinerna fladdrade vilt i blåsten. Sia skramlade på hyllan. – Det är stormen, viskade hon. Men {N} stängde fönstret, och allt blev stilla igen.]' },
    hjalp: { scen: 2, efter: 4, uppmaning: 'Hjälp till att göra vågor! Tryck på vågen tre gånger.', ikon: 'vag', antal: 3, klart: 'Schh, schh, schh. Vågorna rullade lugnt och fint.' }
  },
  s05: {
    val: { scen: 1, efter: 4, fraga: 'Hur ska de gå in i grottan? Krypa på alla fyra eller gå på tå?',
      a: { knapp: 'Krypa', text: 'De bestämde sig för att krypa. Det kändes tryggare nära marken, och {N} kunde känna med händerna var golvet var jämnt.' },
      b: { knapp: 'Gå på tå', text: 'De bestämde sig för att gå på tå, tysta som två möss, för att inte väcka något som kanske sov där inne.' } },
    aventyr: { scen: 2, efter: 6, text: 'Men plötsligt hördes ett nytt ljud. Fladder, fladder, alldeles ovanför huvudet! Något svischade förbi, och {N} tryckte sig mot {F}. Det var bara en liten fladdermus som hade vaknat. – Förlåt, pep den. Jag blev också rädd. Och så flög den ut för att leta nattfjärilar.' },
    hjalp: { scen: 3, efter: 0, uppmaning: 'Hjälp till att lysa upp grottan! Tryck på lyktan tre gånger.', ikon: 'lykta', antal: 3, klart: 'Lyktans sken blev starkare, och hela grottan började glittra.' }
  },
  s06: {
    val: { scen: 1, efter: 4, fraga: 'Hur ska de gå? Smyga alldeles tyst, eller sjunga en modig sång?',
      a: { knapp: 'Smyga tyst', text: 'De smög så tyst de kunde. Inte ett ljud. Bara deras andetag, och golvet som knarrade lite ibland.' },
      b: { knapp: 'Sjunga en modig sång', text: '{N} började sjunga, lågt men modigt: – Vi är inte rädda, vi är inte rädda, nästan inte alls. {F} sjöng med, och sången gjorde magen lite lugnare.' } },
    aventyr: { scen: 2, efter: 1, text: 'Men innan {N} hann säga tre kom ett riktigt högt KLONK, och dörren skakade så att handtaget skramlade. {N} hoppade bakåt och höll andan. Sedan blev det tyst igen. Alldeles tyst.' },
    hjalp: { scen: 3, efter: 4, uppmaning: 'Hjälp Fnurr att hitta ut! Tryck på vindpusten tre gånger.', ikon: 'vindpust', antal: 3, klart: 'Fnurr snurrade snabbare och snabbare, mot det öppna fönstret.' }
  },
  s07: {
    val: { scen: 3, efter: 3, fraga: 'Vilken väg ska Rakel flyga? Förbi planeten med ringar, eller genom kometens glittriga svans?',
      a: { knapp: 'Förbi planeten', text: 'Rakel svängde förbi en planet med ringar runt magen. Ringarna var gjorda av is och glittrade som tusen små speglar.' },
      b: { knapp: 'Genom kometsvansen', text: 'Rakel flög rakt genom en komets svans. Det kittlade i hela raketen, och glitter fastnade på fönstret som snö.' } },
    aventyr: { scen: 2, efter: 5, text: 'Raketen började skaka, och en lampa på panelen lyste rött. Pip, pip, pip. – Vad betyder det? frågade {N} och höll hårt i säcken. – Att jag är jätterädd, viskade Rakel. Den lampan lyser alltid när jag är rädd.' },
    hjalp: { scen: 2, efter: 7, uppmaning: 'Räkna ner med Rakel! Tryck på raketen tre gånger: tre, två, ett!', ikon: 'raket', antal: 3, klart: 'Noll! Rakel mullrade, och så lyfte hon.' }
  },
  s08: {
    val: { scen: 2, efter: 4, fraga: 'Hur ska de hålla ihop i dimman? Hålla varandra i händerna, eller sjunga så att de hör varandra?',
      a: { knapp: 'Hålla händerna', text: 'De höll varandra i händerna, alla tre, i en lång kedja. Lilla Moln gick i mitten, så att ingen kunde tappa bort henne.' },
      b: { knapp: 'Sjunga tillsammans', text: 'De sjöng en liten sång medan de gick, så att de alltid hörde var de andra var. Lilla Moln bräkte med i refrängen.' } },
    aventyr: { scen: 1, efter: 3, text: 'Långt borta hördes ett dovt ljud. Ett långsamt, tungt dunkande, som stora steg. Dunk. Dunk. Lilla Moln tryckte sig mot {N}. Ur dimman kom en gammal ko lunkande. – Mu, sa den vänligt, och så försvann den in i dimman igen.' },
    hjalp: { scen: 2, efter: 2, uppmaning: 'Följ bjällran! Tryck på lammet tre gånger.', ikon: 'lamm', antal: 3, klart: 'Pling, pling! Ljudet kom närmare.' }
  },
  s09: {
    val: { scen: 3, efter: 4, fraga: 'Vilket moln ska bli det allra sista i kväll? En flygande glassbåt eller en jättekanin?',
      a: { knapp: 'En flygande glassbåt', text: '{N} tänkte på en båt gjord av glass, med segel av våfflor. Ut kom ett moln som såg så gott ut att alla blev lite hungriga.' },
      b: { knapp: 'En jättekanin', text: '{N} tänkte på en kanin som var stor som ett berg. Ut kom ett moln med två jättelånga öron som vinkade åt alla håll.' } },
    aventyr: { scen: 1, efter: 4, text: 'Sedan kom ett till, och ett till, grå och sura, och de började knuffas och muttra. Ett av dem mullrade som åska och sprutade lite regn rakt på Fru Fluffs hår. – Om det här fortsätter blir hela natten grå, sa hon oroligt.' },
    hjalp: { scen: 2, efter: 5, uppmaning: 'Hjälp till att fylla på fantasi! Tryck på molnet tre gånger.', ikon: 'moln', antal: 3, klart: 'Pilen på mätaren började röra sig!' }
  },
  s10: {
    val: { scen: 1, efter: 5, fraga: 'Kartan visar två stigar. Ska de ta den som glittrar, eller den som doftar blommor?',
      a: { knapp: 'Stigen som glittrar', text: 'De valde stigen som glittrade. Små kristaller låg i gruset och lyste i månskenet, som om någon hade strött ut stjärnor.' },
      b: { knapp: 'Stigen som doftar', text: 'De valde stigen som doftade blommor. Den slingrade sig mellan nattviol och kaprifol, och luften var söt som honung.' } },
    aventyr: { scen: 2, efter: 1, text: 'I samma stund började det blåsa. Kartan fladdrade och slets nästan ur händerna på {N}! {N} höll fast med båda händerna, och {F} höll i {no}. Till slut lade sig vinden, och kartan låg kvar, tom och tyst.' },
    hjalp: { scen: 3, efter: 1, uppmaning: 'Hjälp till att bygga bron! Tryck på regnbågen tre gånger.', ikon: 'regnbagsbro', antal: 3, klart: 'En färg i taget växte bron fram, röd, gul och blå.' }
  },
  s11: {
    val: { scen: 0, efter: 5, fraga: 'Vad vill {N} göra först? Hälsa på trähästen, eller titta in i dockskåpet?',
      a: { knapp: 'Hälsa på trähästen', text: '{N} klappade trähästen på den målade manen. Den gnäggade lågt och knuffade {no} vänligt med mulen.' },
      b: { knapp: 'Titta i dockskåpet', text: '{N} kikade in i dockskåpet. Där inne hade någon dukat ett pyttelitet bord med koppar stora som ärtor.' } },
    aventyr: { scen: 1, efter: 5, text: 'Plötsligt hördes steg i hallen. Någon var på väg! Alla leksaker frös på stället och låtsades vara vanliga leksaker igen. {N} hoppade upp i sängen och blundade hårt. Stegen gick förbi, en dörr stängdes, och sedan blev det tyst. – Puh, viskade dockan Vira. Det var nära.' },
    hjalp: { scen: 3, efter: 0, uppmaning: 'Spela trumma med Tapper! Tryck på soldaten tre gånger: tipp, tapp, tipp.', ikon: 'soldat', antal: 3, klart: 'Tipp, tapp, tipp! Nu hade paraden takt.' }
  },
  s12: {
    val: { scen: 1, efter: 6, fraga: 'Månstrålen delar sig i två. Ska de följa den smala eller den breda?',
      a: { knapp: 'Den smala strålen', text: 'De följde den smala strålen. Den var så tunn att de fick gå på rad, och den surrade svagt som en fiolsträng.' },
      b: { knapp: 'Den breda strålen', text: 'De följde den breda strålen. Den var mjuk att gå på, nästan som en matta av ljus.' } },
    aventyr: { scen: 1, efter: 0, text: 'Men plötsligt slocknade strålen! Ett moln hade dragit för månen, och allt blev mörkt. {N} stod alldeles stilla. – Var är vägen? viskade {nh}. De väntade och väntade, och så gled molnet undan, och strålen lyste igen, lika silvrig som förut.' },
    hjalp: { scen: 3, efter: 0, uppmaning: 'Säg hej till månen! Tryck på månen tre gånger.', ikon: 'mane', antal: 3, klart: 'Månen log och vinkade med en stråle.' }
  },
  s13: {
    val: { scen: 2, efter: 7, fraga: 'Vad ska {N} berätta om från den stora världen? Om snö eller om fyrverkerier?',
      a: { knapp: 'Om snö', text: '{N} berättade om snö. Om hur den faller tyst från himlen och blir mjuk som socker. Småfolket gapade. – Socker från himlen! viskade de.' },
      b: { knapp: 'Om fyrverkerier', text: '{N} berättade om fyrverkerier. Om hur himlen fylls av färger som smäller och glittrar. Småfolket höll för öronen och skrattade på samma gång.' } },
    aventyr: { scen: 1, efter: 3, text: 'Men då hördes något stort. [skog: En jättelik groda kom hoppande, och för den som är lika liten som en tändsticksask är en groda lika stor som ett hus. | *: Mjuka, tunga tassar. En katt kom smygande, och för den som är lika liten som en tändsticksask är en katt lika stor som ett hus.] {N} och {F} tryckte sig mot väggen. Den nosade lite, gäspade och lade sig att sova en bit bort. De andades ut.' },
    hjalp: { scen: 1, efter: 1, uppmaning: 'Knacka på dörren! Tryck på dörren tre gånger.', ikon: 'dorr', antal: 3, klart: 'Knack, knack, knack!' }
  },
  s14: {
    val: { scen: 1, efter: 2, fraga: 'Hur fort ska bubblan åka? Fort som en karusell, eller sakta som ett moln?',
      a: { knapp: 'Fort!', text: '– Fort! ropade {N}, och bubblan susade iväg som en karusell, så att det kittlades i magen.' },
      b: { knapp: 'Sakta', text: '– Sakta, sa {N}, och bubblan gled fram så långsamt att de hann se varenda liten sak.' } },
    aventyr: { scen: 1, efter: 3, text: 'Men plötsligt blev det mörkt runt dem. Något stort gled förbi bubblan, [hav: en jättelik skugga i vattnet | rymden: en jättestor sten som snurrade]. {N} höll andan. Det var bara [hav: en gammal, vänlig val som simmade förbi och blinkade åt dem | rymden: en sömnig asteroid som rullade vidare på sin väg].' },
    hjalp: { scen: 3, efter: 4, uppmaning: 'Blås frågebubblor! Tryck på bubblan tre gånger.', ikon: 'bubbla', antal: 3, klart: 'Plopp, plopp, plopp! Tre lysande bubblor svävade iväg.' }
  },
  s15: {
    val: { scen: 0, efter: 6, fraga: 'Ska de gå fram till fågelungen direkt, eller först titta lite på avstånd?',
      a: { knapp: 'Gå fram direkt', text: 'De gick fram långsamt och försiktigt, ett steg i taget, så att fågelungen inte skulle bli rädd.' },
      b: { knapp: 'Titta på avstånd', text: 'De satte sig på huk en bit bort och tittade en stund. Fågelungen kikade tillbaka med sina små svarta ögon, och efter ett tag verkade den förstå att de var snälla.' } },
    aventyr: { scen: 0, efter: 5, text: 'Då hördes ett vinande högt uppe i luften. En stor fågel cirklade över dem, och fågelungen tryckte sig mot marken. – Vi måste skynda oss, viskade {F}. Den stora fågeln flög vidare över [fjall: fjället | skog: skogen], men {N} visste att det var bråttom.' },
    hjalp: { scen: 2, efter: 1, uppmaning: 'Hjälp till att värma fågelungen! Tryck på fågeln tre gånger.', ikon: 'fagel', antal: 3, klart: 'Fågelungen slutade darra och fluffade upp sig.' }
  },
  s16: {
    val: { scen: 2, efter: 1, fraga: 'Vem ska de be om hjälp härnäst? Nattfjärilarna, eller den gamla lykttändaren?',
      a: { knapp: 'Nattfjärilarna', text: 'De frågade nattfjärilarna, som hade silverstoft på vingarna. Fjärilarna fladdrade upp mot himlen och glittrade som små stjärnor.' },
      b: { knapp: 'Lykttändaren', text: 'De frågade en gammal lykttändare med en lång stav. Han gick runt och tände lykta efter lykta, och nynnade medan han gick.' } },
    aventyr: { scen: 1, efter: 3, text: 'Medan de pratade slocknade en bit av månen. Sedan en till. Månen blev smalare och smalare, som en banan, och det blev mörkare överallt. – Skynda! sa {F}. Snart orkar den inte alls.' },
    hjalp: { scen: 3, efter: 1, uppmaning: 'Vagga månen till sömns! Tryck på månen tre gånger.', ikon: 'mane', antal: 3, klart: 'Månen gäspade och blundade.' }
  },
  s17: {
    val: { scen: 1, efter: 1, fraga: 'Vilken väg ska de ta till brunnen? Rakt igenom, eller runt?',
      a: { knapp: 'Rakt igenom', text: 'De gick rakt igenom [slott: labyrinten | skog: de höga ormbunkarna]. Det var trångt och slingrigt, och två gånger kom de till en återvändsgränd. Men de hittade ut, och {N} kände sig som en riktig upptäcktsresande.' },
      b: { knapp: 'Runt', text: 'De tog vägen runt. Den var längre, men där växte nattblommor som lyste svagt, och en liten igelkott visade dem vägen.' } },
    aventyr: { scen: 2, efter: 2, text: 'Men vid en av vändorna snubblade {N} på en rot, och koppen flög ur handen! Den snurrade i luften, och {F} sträckte ut sig och fångade den precis innan den slog i marken. Bara en enda droppe hade spillts. – Puh, sa {N}.' },
    hjalp: { scen: 2, efter: 0, uppmaning: 'Hjälp till att vattna rosen! Tryck på koppen tre gånger.', ikon: 'kopp', antal: 3, klart: 'Droppe för droppe sjönk vattnet ner i jorden.' }
  },
  s18: {
    val: { scen: 3, efter: 5, fraga: 'Vad ska Glim göra nu? Rita med ljus i luften, eller lysa upp stjärnorna i taket?',
      a: { knapp: 'Rita med ljus', text: 'Glim susade runt och ritade med sitt ljus i luften: ett hjärta, en båt och en liten katt. Bilderna dröjde kvar en stund innan de bleknade.' },
      b: { knapp: 'Lysa upp taket', text: 'Glim flög upp mot taket och lyste, och hela taket glittrade som en liten natthimmel.' } },
    aventyr: { scen: 2, efter: 2, text: 'Just då rörde sig skuggan! Den gungade fram och tillbaka och växte ända upp mot taket. Glim gömde sig i handen på {N}. Men det var bara gardinen som fladdrade i draget från fönstret, så att skuggan dansade.' },
    hjalp: { scen: 2, efter: 0, uppmaning: 'Hjälp Glim att lysa! Tryck på gnistan tre gånger.', ikon: 'gnista', antal: 3, klart: 'Glim lyste lite starkare för varje tryck.' }
  },
  s19: {
    val: { scen: 1, efter: 5, fraga: 'Hur ska de hjälpa Vilja att känna sig lugn? Berätta en rolig historia, eller räkna stjärnor tillsammans?',
      a: { knapp: 'En rolig historia', text: '{N} berättade om en gång när {nh} hade tappat en hel glass rakt på näsan. Vilja skrattade så att det bubblade i vattnet.' },
      b: { knapp: 'Räkna stjärnor', text: 'De räknade stjärnor tillsammans. En, två, tre, ända till tjugo, och sedan tappade de räkningen och skrattade.' } },
    aventyr: { scen: 3, efter: 1, text: 'Plötsligt mörknade vattnet. En stor båt med starka lampor tuffade förbi, och vågorna från den fick bryggan att gunga. Vilja dök ner under ytan. Men båten tuffade vidare, vattnet blev lugnt igen, och Vilja kom upp och fnös ut en liten fontän.' },
    hjalp: { scen: 3, efter: 0, uppmaning: 'Sjung med! Tryck på valungen tre gånger: oooo, uuu, eee.', ikon: 'valunge', antal: 3, klart: 'Sången flöt ut över havet, längre och längre.' }
  },
  s20: {
    val: { scen: 2, efter: 1, fraga: 'Vilken färg ska din stjärntråd ha? Guld eller silver?',
      a: { knapp: 'Guld', text: '{N} valde guld. Tråden blev varm och gyllene, som solsken i en burk.' },
      b: { knapp: 'Silver', text: '{N} valde silver. Tråden blev sval och glittrig, som månsken på snö.' } },
    aventyr: { scen: 1, efter: 1, text: 'Plötsligt började hålet växa! Maskorna släppte, en efter en, och genom hålet syntes ingenting alls, bara grått. – Fort, sa Nattmormor. Innan det blir större!' },
    hjalp: { scen: 3, efter: 2, uppmaning: 'Hjälp till att sticka! Tryck på nystanet tre gånger.', ikon: 'garn', antal: 3, klart: 'Klick, klick, klick. Den sista maskan var klar.' }
  }
};
