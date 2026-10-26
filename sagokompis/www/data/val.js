/* Sagokompis – figurer, platser och teman som barnet kan välja.
   Varje figur och plats har färdiga språkbitar som sagorna väver in via
   taggar, t.ex. {F:trost} eller {P:mark}. Se js/sagomotor.js för syntaxen. */
window.Sagokompis = window.Sagokompis || {};

Sagokompis.figurer = [
  {
    id: 'nalle', etikett: 'Nalle', namn: 'Brum', art: 'nallen Brum', pron: 'han',
    beskrivning: 'Mjuk, varm och bäst på kramar',
    rost: 'med sin mjuka brumröst',
    hand: 'sin runda tass',
    hej: '{F} brummade glatt och vinkade med sin runda tass.',
    sok: '{F} lyfte upp {N} på sina breda axlar, så att {N} kunde se långt, långt bort.',
    trost: '{F} gav {N} en stor, varm nallekram, en sådan som gör att magen blir alldeles lugn.',
    glad: '{F} gjorde en liten nalledans och gungade från tass till tass.',
    sov: '{F} kröp ihop till en mjuk, brun boll vid kudden och brummade allt tystare.'
  },
  {
    id: 'rav', etikett: 'Räv', namn: 'Ylva', art: 'räven Ylva', pron: 'hon',
    beskrivning: 'Klok och snabb med världens bästa nos',
    rost: 'och viftade med sin yviga svans',
    hand: 'sin lilla svarta tass',
    hej: '{F} viftade så ivrigt med sin yviga svans att den nästan blev suddig.',
    sok: '{F} höjde sin spetsiga nos och vädrade, åt det ena hållet och åt det andra, tills hon visste precis vart de skulle gå.',
    trost: '{F} lade sin mjuka svans om {N} som en varm halsduk.',
    glad: '{F} skuttade ett varv runt {N} och skrattade sitt lilla rävskratt.',
    sov: '{F} rullade ihop sig med nosen under svansen, som en liten röd kudde.'
  },
  {
    id: 'drake', etikett: 'Drake', namn: 'Glöd', art: 'draken Glöd', pron: 'hen',
    beskrivning: 'Liten, snäll och varm som en brasa',
    rost: 'och blåste ut ett litet varmt rökmoln',
    hand: 'sin lilla gröna klo',
    hej: '{F} fladdrade med sina små vingar och blåste ett litet hjärtformat rökmoln.',
    sok: '{F} lyfte med sina små vingar och flaxade upp en bit i luften för att spana åt alla håll.',
    trost: '{F} lade sin varma vinge om {N}, och det kändes som att sitta nära en sprakande brasa.',
    glad: '{F} snurrade ett varv i luften och fnissade så att små ofarliga gnistor dansade.',
    sov: '{F} lade svansen runt nosen, och hens glöd blev svag och mysig som en nattlampa.'
  },
  {
    id: 'robot', etikett: 'Robot', namn: 'Bolt', art: 'roboten Bolt', pron: 'hen',
    beskrivning: 'Smart, nyfiken och full av lampor',
    rost: 'och blinkade med sina runda lampögon',
    hand: 'sin lilla metallhand',
    hej: '{F} vinkade med sin metallhand och sa ett glatt litet pip.',
    sok: '{F} vred på sin antenn, surrade en stund och sa: – Pip! Nu har jag räknat ut vägen.',
    trost: '{F} lät sina lampögon lysa varmt och gult och surrade en lugn liten melodi.',
    glad: '{F} snurrade runt ett varv och tutade ett glatt litet tut.',
    sov: '{F} dämpade sina lampor till ett svagt sken och surrade allt tystare, tills hen gick i viloläge.'
  },
  {
    id: 'kanin', etikett: 'Kanin', namn: 'Lo', art: 'kaninen Lo', pron: 'hon',
    beskrivning: 'Hör minsta ljud med sina långa öron',
    rost: 'och vickade på sina långa öron',
    hand: 'sin mjuka tass',
    hej: '{F} hoppade fram och vickade glatt på sina långa öron.',
    sok: '{F} spetsade sina långa öron och lyssnade. Hon kunde höra det allra minsta ljud, och snart visste hon åt vilket håll de skulle gå.',
    trost: '{F} kröp tätt intill {N}, och hennes päls var mjuk som en kudde.',
    glad: '{F} hoppade tre glada skutt rakt upp i luften.',
    sov: '{F} stoppade nosen under tassarna och somnade med öronen som ett litet täcke.'
  },
  {
    id: 'uggla', etikett: 'Uggla', namn: 'Ugo', art: 'ugglan Ugo', pron: 'han',
    beskrivning: 'Vis och lugn, ser bra i mörker',
    rost: 'och blinkade långsamt med sina stora ögon',
    hand: 'sin mjuka vingspets',
    hej: '{F} hoade vänligt och fluffade upp sina fjädrar.',
    sok: '{F} spärrade upp sina stora runda ögon, som ser bra även i mörker, och spanade åt alla håll.',
    trost: '{F} bredde ut sina mjuka vingar som ett täcke om {N}.',
    glad: '{F} hoade glatt och fladdrade ett litet varv.',
    sov: '{F} blundade, först med ena ögat och sedan med det andra, och hoade en sista gång alldeles tyst.'
  },
  {
    id: 'egen', etikett: 'Egen figur', namn: '', art: 'kompisen {F}', pron: 'hen', egen: true,
    beskrivning: 'Hitta på en egen kompis',
    rost: 'och log ett stort leende',
    hand: 'sin hand',
    hej: '{F} log med hela ansiktet och vinkade.',
    sok: '{F} kisade och tittade noga åt alla håll, för {F} var alltid bäst på att lägga märke till saker.',
    trost: '{F} satte sig tätt intill {N}, precis som riktiga bästisar gör.',
    glad: '{F} skrattade och gjorde en glädjesnurr.',
    sov: '{F} gäspade stort, kröp ner bredvid {N} och somnade.'
  }
];

Sagokompis.platser = [
  {
    id: 'skog', etikett: 'Förtrollad skog', beskrivning: 'Mossa, lysmaskar och höga granar',
    namn: 'den förtrollade skogen', i: 'i den förtrollade skogen', till: 'till den förtrollade skogen',
    mark: 'mossan', vag: 'stigen', ljus: 'lysmaskarna', hog: 'den högsta kullen',
    vasen: 'en liten igelkott', vasenD: 'igelkotten',
    ljud: 'Någonstans långt borta hoade en uggla, och granarna susade sakta.',
    luft: 'Luften luktade av mossa och kåda.'
  },
  {
    id: 'rymden', etikett: 'Rymden', beskrivning: 'Stjärnor, månar och tyngdlöshet',
    namn: 'rymden', i: 'ute i rymden', till: 'ut i rymden',
    mark: 'den lilla månens mjuka stoft', vag: 'Vintergatan', ljus: 'stjärnorna', hog: 'toppen av det högsta månberget',
    vasen: 'en liten månmus', vasenD: 'månmusen',
    ljud: 'Det var alldeles tyst, bara stjärnorna som klingade svagt, som små bjällror långt borta.',
    luft: 'Allt kändes lätt, som i en dröm.'
  },
  {
    id: 'slott', etikett: 'Slott', beskrivning: 'Torn, trappor och ljuskronor',
    namn: 'slottet', i: 'på slottet', till: 'till slottet',
    mark: 'den mjuka mattan i stora salen', vag: 'den långa korridoren', ljus: 'ljusen i ljuskronorna', hog: 'det högsta tornet',
    vasen: 'en liten slottsmus', vasenD: 'slottsmusen',
    ljud: 'Någonstans tickade en gammal klocka, och gardinerna prasslade sakta i draget.',
    luft: 'Det luktade av gamla böcker och varm choklad från köket.'
  },
  {
    id: 'hav', etikett: 'Havet', beskrivning: 'Vågor, snäckor och månsken',
    namn: 'havet', i: 'vid havet', till: 'till havet',
    mark: 'den mjuka sanden', vag: 'strandkanten', ljus: 'månskenet på vågorna', hog: 'den höga klippan vid fyren',
    vasen: 'en liten sjöhäst', vasenD: 'sjöhästen',
    ljud: 'Vågorna slog mjukt mot stranden, schh, schh, som om havet sjöng en vaggvisa.',
    luft: 'Luften smakade lite salt.'
  },
  {
    id: 'fjall', etikett: 'Fjället', beskrivning: 'Norrsken, renlav och klar luft',
    namn: 'fjället', i: 'uppe på fjället', till: 'upp till fjället',
    mark: 'den mjuka renlaven', vag: 'den smala fjällstigen', ljus: 'norrskenet', hog: 'fjälltoppen',
    vasen: 'en liten lämmel', vasenD: 'lämmeln',
    ljud: 'En bäck porlade någonstans, och vinden viskade mellan stenarna.',
    luft: 'Luften var klar och kall och luktade snö.'
  },
  {
    id: 'rum', etikett: 'Mitt rum', beskrivning: 'Äventyr hemma i det egna rummet',
    namn: '{Ns} rum', i: 'i {Ns} rum', till: 'in i {Ns} rum',
    mark: 'mattan', vag: 'mattan mellan sängen och bokhyllan', ljus: 'nattlampan', hog: 'toppen av bokhyllan',
    vasen: 'en liten tygmus', vasenD: 'tygmusen',
    ljud: 'Klockan på väggen tickade lugnt, och utanför fönstret susade vinden i träden.',
    luft: 'Det luktade rent av nytvättade lakan.'
  }
];

Sagokompis.teman = [
  { id: 'vanskap', etikett: 'Vänskap', beskrivning: 'Att hitta och vara en vän', ord: 'vänskap' },
  { id: 'mod', etikett: 'Mod', beskrivning: 'Att våga, fast man är lite rädd', ord: 'mod' },
  { id: 'fantasi', etikett: 'Fantasi', beskrivning: 'Att hitta på och drömma stort', ord: 'fantasi' },
  { id: 'nyfikenhet', etikett: 'Nyfikenhet', beskrivning: 'Att undra, fråga och upptäcka', ord: 'nyfikenhet' },
  { id: 'omtanke', etikett: 'Omtanke', beskrivning: 'Att ta hand om någon', ord: 'omtanke' },
  { id: 'trygghet', etikett: 'Trygghet', beskrivning: 'Att känna sig lugn och säker', ord: 'trygghet' }
];

Sagokompis.sagor = [];
