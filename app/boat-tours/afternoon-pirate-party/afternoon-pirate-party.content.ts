import type { LocaleCode } from "@/lib/i18n";

export type AfternoonPiratePartyCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  details: { label: string; sub: string }[];
  tripBadge: string;
  tripTitle: string;
  tripParagraph: string;
  includedHeading: string;
  included: string[];
  highlightsHeading: string;
  highlights: string[];
  arrivalNote: string;
  priceLine: string;
  bookLabel: string;
  boatImageAlt: string;
  heroAlt: string;
};

export const afternoonPirateContent: Record<LocaleCode, AfternoonPiratePartyCopy> = {
  en: {
    metaTitle: "Afternoon Snorkel Tour",
    metaDescription:
      "A 3.5-hour afternoon cruise with Flagship Aruba: two premium snorkel stops, a Caribbean-style lunch, open bar, rope swing and island music.",
    heroEyebrow: "Afternoon Snorkel Tour",
    heroTitle: "A lively midday cruise",
    heroBody:
      "Music, a rope swing, premium snorkel spots and an open bar, for guests who want more energy in their afternoon.",
    heroAlt: "The schooner anchored off Aruba's coast near Palm Beach",
    details: [
      { label: "1:30pm to 5:00pm", sub: "3.5 hours" },
      { label: "2 snorkel stops", sub: "Boca Catalina, Malmok" },
      { label: "Rope swing + music", sub: "Caribbean rhythms onboard" },
      { label: "Thrill-seekers welcome", sub: "Max 24 guests aboard" },
    ],
    tripBadge: "The full trip",
    tripTitle: "Snorkel, swing, and soak up the music",
    tripParagraph:
      "Our captain picks the two best snorkel sites of the day, usually Boca Catalina and Malmok, based on the morning's conditions. Between stops, a Caribbean-style lunch comes out, the rope swing sees plenty of use, and island music keeps the deck lively the whole way.",
    includedHeading: "What's Included",
    included: [
      "Mask, snorkel and fins",
      "Caribbean-style lunch served midway through the cruise",
      "Open bar: unlimited soft drinks, warm drinks, juices and cocktails",
      "Two snorkel stops, chosen daily by the captain",
      "Rope swing into the ocean",
    ],
    highlightsHeading: "Highlights",
    highlights: [
      "Rope swinging into turquoise Caribbean waters",
      "Visit the WWII shipwreck SS Antilla",
      "Premium snorkeling at Boca Catalina",
      "Open bar with local drinks and bites",
      "Live music and festive vibes",
      "Friendly, witty crew that makes it unforgettable",
    ],
    arrivalNote: "Please arrive 30 minutes before departure.",
    priceLine: "From $86 per adult",
    bookLabel: "Book This Tour",
    boatImageAlt: "Guests relaxing with drinks in the bow netting as the schooner sails",
  },
  es: {
    metaTitle: "Fiesta Pirata Vespertina",
    metaDescription:
      "Un crucero vespertino de 3.5 horas con Flagship Aruba: dos paradas de snorkel de primera, un almuerzo estilo caribeño, barra libre, columpio de cuerda y música isleña.",
    heroEyebrow: "Fiesta Pirata Vespertina",
    heroTitle: "Un crucero animado de media tarde",
    heroBody:
      "Música, un columpio de cuerda, sitios de snorkel de primera y barra libre, para quienes quieren más energía en su tarde.",
    heroAlt: "La goleta anclada frente a la costa de Aruba, cerca de Palm Beach",
    details: [
      { label: "1:30pm a 5:00pm", sub: "3.5 horas" },
      { label: "2 paradas de snorkel", sub: "Boca Catalina, Malmok" },
      { label: "Columpio de cuerda y música", sub: "Ritmos caribeños a bordo" },
      { label: "Amantes de la emoción, bienvenidos", sub: "Máximo 24 huéspedes a bordo" },
    ],
    tripBadge: "El viaje completo",
    tripTitle: "Haz snorkel, columpíate y disfruta de la música",
    tripParagraph:
      "Nuestro capitán elige los dos mejores sitios de snorkel del día, normalmente Boca Catalina y Malmok, según las condiciones de la mañana. Entre parada y parada se sirve un almuerzo estilo caribeño, el columpio de cuerda se usa sin parar y la música isleña mantiene la cubierta animada durante todo el trayecto.",
    includedHeading: "Qué Incluye",
    included: [
      "Máscara, tubo y aletas de snorkel",
      "Almuerzo estilo caribeño servido a mitad del crucero",
      "Barra libre: refrescos, bebidas calientes, jugos y cócteles ilimitados",
      "Dos paradas de snorkel, elegidas cada día por el capitán",
      "Columpio de cuerda hacia el mar",
    ],
    highlightsHeading: "Lo Más Destacado",
    highlights: [
      "Columpiarte con la cuerda hacia las aguas turquesas del Caribe",
      "Visita al naufragio de la Segunda Guerra Mundial, el SS Antilla",
      "Snorkel de primera en Boca Catalina",
      "Barra libre con bebidas y bocados locales",
      "Música en vivo y ambiente festivo",
      "Tripulación amigable e ingeniosa que hace la experiencia inolvidable",
    ],
    arrivalNote: "Por favor, llega 30 minutos antes de la salida.",
    priceLine: "Desde $86 por adulto",
    bookLabel: "Reservar Este Tour",
    boatImageAlt: "Huéspedes relajándose con bebidas en la red de proa mientras navega la goleta",
  },
  nl: {
    metaTitle: "Middag Piratenfeest",
    metaDescription:
      "Een 3,5 uur durende middagcruise met Flagship Aruba: twee premium snorkelstops, een lunch in Caribische stijl, open bar, touwschommel en eilandmuziek.",
    heroEyebrow: "Middag Piratenfeest",
    heroTitle: "Een levendige cruise halverwege de dag",
    heroBody:
      "Muziek, een touwschommel, premium snorkelplekken en een open bar, voor gasten die meer energie in hun middag willen.",
    heroAlt: "De schoener voor anker bij de kust van Aruba, nabij Palm Beach",
    details: [
      { label: "13:30 tot 17:00 uur", sub: "3,5 uur" },
      { label: "2 snorkelstops", sub: "Boca Catalina, Malmok" },
      { label: "Touwschommel en muziek", sub: "Caribische ritmes aan boord" },
      { label: "Avontuurlijke types welkom", sub: "Max. 24 gasten aan boord" },
    ],
    tripBadge: "De volledige tocht",
    tripTitle: "Snorkel, schommel en geniet van de muziek",
    tripParagraph:
      "Onze kapitein kiest de twee beste snorkelplekken van de dag, meestal Boca Catalina en Malmok, op basis van de omstandigheden die ochtend. Tussen de stops door wordt een lunch in Caribische stijl geserveerd, wordt er volop gebruikgemaakt van de touwschommel en houdt eilandmuziek het dek de hele tocht levendig.",
    includedHeading: "Wat Is Inbegrepen",
    included: [
      "Masker, snorkel en zwemvliezen",
      "Lunch in Caribische stijl, geserveerd halverwege de cruise",
      "Open bar: onbeperkt frisdrank, warme dranken, sappen en cocktails",
      "Twee snorkelstops, dagelijks door de kapitein gekozen",
      "Touwschommel de zee in",
    ],
    highlightsHeading: "Hoogtepunten",
    highlights: [
      "Aan het touw de turquoise Caribische wateren in schommelen",
      "Bezoek aan het WOII-scheepswrak SS Antilla",
      "Premium snorkelen bij Boca Catalina",
      "Open bar met lokale drankjes en hapjes",
      "Live muziek en een feestelijke sfeer",
      "Vriendelijke, geestige bemanning die er een onvergetelijke tocht van maakt",
    ],
    arrivalNote: "Kom 30 minuten voor vertrek aan.",
    priceLine: "Vanaf $86 per volwassene",
    bookLabel: "Boek Deze Tour",
    boatImageAlt: "Gasten ontspannen met drankjes in het boegnet terwijl de schoener vaart",
  },
  de: {
    metaTitle: "Nachmittags-Piratenparty",
    metaDescription:
      "Eine 3,5-stündige Nachmittagsfahrt mit Flagship Aruba: zwei erstklassige Schnorchelstopps, ein Mittagessen im karibischen Stil, offene Bar, Seilschaukel und Inselmusik.",
    heroEyebrow: "Nachmittags-Piratenparty",
    heroTitle: "Eine lebhafte Fahrt am Nachmittag",
    heroBody:
      "Musik, eine Seilschaukel, erstklassige Schnorchelplätze und eine offene Bar, für Gäste, die mehr Energie in ihrem Nachmittag wollen.",
    heroAlt: "Der Schoner vor Anker vor der Küste Arubas, nahe Palm Beach",
    details: [
      { label: "13:30 bis 17:00 Uhr", sub: "3,5 Stunden" },
      { label: "2 Schnorchelstopps", sub: "Boca Catalina, Malmok" },
      { label: "Seilschaukel und Musik", sub: "Karibische Rhythmen an Bord" },
      { label: "Abenteuerlustige willkommen", sub: "Max. 24 Gäste an Bord" },
    ],
    tripBadge: "Die ganze Fahrt",
    tripTitle: "Schnorcheln, schaukeln und die Musik genießen",
    tripParagraph:
      "Unser Kapitän wählt je nach den morgendlichen Bedingungen die zwei besten Schnorchelplätze des Tages aus, meist Boca Catalina und Malmok. Zwischen den Stopps gibt es ein Mittagessen im karibischen Stil, die Seilschaukel wird ausgiebig genutzt, und Inselmusik hält das Deck die ganze Fahrt über lebendig.",
    includedHeading: "Das Ist Enthalten",
    included: [
      "Maske, Schnorchel und Flossen",
      "Mittagessen im karibischen Stil, serviert in der Mitte der Fahrt",
      "Offene Bar: unbegrenzt Softdrinks, warme Getränke, Säfte und Cocktails",
      "Zwei Schnorchelstopps, täglich vom Kapitän ausgewählt",
      "Seilschaukel ins Meer",
    ],
    highlightsHeading: "Highlights",
    highlights: [
      "Mit der Seilschaukel in türkisfarbenes karibisches Wasser schwingen",
      "Besuch des Zweiten-Weltkriegs-Wracks SS Antilla",
      "Erstklassiges Schnorcheln bei Boca Catalina",
      "Offene Bar mit lokalen Getränken und Snacks",
      "Live-Musik und festliche Stimmung",
      "Freundliche, witzige Crew, die die Fahrt unvergesslich macht",
    ],
    arrivalNote: "Bitte kommen Sie 30 Minuten vor der Abfahrt an.",
    priceLine: "Ab $86 pro Erwachsenem",
    bookLabel: "Diese Tour Buchen",
    boatImageAlt: "Gäste entspannen mit Getränken im Bugnetz, während der Schoner segelt",
  },
  it: {
    metaTitle: "Festa Pirata Del Pomeriggio",
    metaDescription:
      "Una crociera pomeridiana di 3,5 ore con Flagship Aruba: due soste snorkeling di prima classe, un pranzo in stile caraibico, open bar, altalena a corda e musica isolana.",
    heroEyebrow: "Festa Pirata Del Pomeriggio",
    heroTitle: "Una crociera pomeridiana piena di energia",
    heroBody:
      "Musica, un'altalena a corda, siti di snorkeling di prima classe e open bar, per chi vuole più energia nel proprio pomeriggio.",
    heroAlt: "La goletta all'ancora al largo della costa di Aruba, vicino a Palm Beach",
    details: [
      { label: "Dalle 13:30 alle 17:00", sub: "3,5 ore" },
      { label: "2 soste snorkeling", sub: "Boca Catalina, Malmok" },
      { label: "Altalena a corda e musica", sub: "Ritmi caraibici a bordo" },
      { label: "Gli amanti dell'avventura sono benvenuti", sub: "Massimo 24 ospiti a bordo" },
    ],
    tripBadge: "Il viaggio completo",
    tripTitle: "Fai snorkeling, dondolati e goditi la musica",
    tripParagraph:
      "Il nostro capitano sceglie i due migliori siti di snorkeling della giornata, di solito Boca Catalina e Malmok, in base alle condizioni del mattino. Tra una sosta e l'altra viene servito un pranzo in stile caraibico, l'altalena a corda viene usata parecchio e la musica isolana tiene viva l'atmosfera a bordo per tutto il tragitto.",
    includedHeading: "Cosa È Incluso",
    included: [
      "Maschera, boccaglio e pinne",
      "Pranzo in stile caraibico servito a metà crociera",
      "Open bar: bibite, bevande calde, succhi e cocktail illimitati",
      "Due soste snorkeling, scelte ogni giorno dal capitano",
      "Altalena a corda verso il mare",
    ],
    highlightsHeading: "In Evidenza",
    highlights: [
      "Dondolarsi con la corda nelle acque turchesi dei Caraibi",
      "Visita al relitto della Seconda Guerra Mondiale SS Antilla",
      "Snorkeling di prima classe a Boca Catalina",
      "Open bar con bevande e stuzzichini locali",
      "Musica dal vivo e atmosfera festosa",
      "Equipaggio simpatico e spiritoso che rende il tutto indimenticabile",
    ],
    arrivalNote: "Ti chiediamo di arrivare 30 minuti prima della partenza.",
    priceLine: "A partire da $86 per adulto",
    bookLabel: "Prenota Questo Tour",
    boatImageAlt: "Ospiti che si rilassano con drink nella rete di prua mentre la goletta naviga",
  },
  br: {
    metaTitle: "Festa Pirata Vespertina",
    metaDescription:
      "Um cruzeiro vespertino de 3,5 horas com a Flagship Aruba: duas paradas para mergulho com snorkel de primeira, almoço estilo caribenho, bar aberto, balanço de corda e música local.",
    heroEyebrow: "Festa Pirata Vespertina",
    heroTitle: "Um cruzeiro animado no meio da tarde",
    heroBody:
      "Música, um balanço de corda, pontos de snorkel de primeira e bar aberto, para quem quer mais energia na tarde.",
    heroAlt: "A escuna ancorada na costa de Aruba, perto de Palm Beach",
    details: [
      { label: "13h30 às 17h00", sub: "3,5 horas" },
      { label: "2 paradas para snorkel", sub: "Boca Catalina, Malmok" },
      { label: "Balanço de corda e música", sub: "Ritmos caribenhos a bordo" },
      { label: "Aventureiros são bem-vindos", sub: "Máximo de 24 hóspedes a bordo" },
    ],
    tripBadge: "O passeio completo",
    tripTitle: "Mergulhe com snorkel, balance na corda e aproveite a música",
    tripParagraph:
      "Nosso capitão escolhe os dois melhores pontos de snorkel do dia, geralmente Boca Catalina e Malmok, com base nas condições da manhã. Entre as paradas, um almoço estilo caribenho é servido, o balanço de corda é bastante usado, e a música local mantém o convés animado durante todo o passeio.",
    includedHeading: "O Que Está Incluído",
    included: [
      "Máscara, snorkel e pé de pato",
      "Almoço estilo caribenho servido no meio do cruzeiro",
      "Bar aberto: refrigerantes, bebidas quentes, sucos e coquetéis à vontade",
      "Duas paradas para snorkel, escolhidas diariamente pelo capitão",
      "Balanço de corda para o mar",
    ],
    highlightsHeading: "Destaques",
    highlights: [
      "Balançar na corda nas águas turquesa do Caribe",
      "Visita ao naufrágio da Segunda Guerra Mundial, o SS Antilla",
      "Snorkel de primeira em Boca Catalina",
      "Bar aberto com bebidas e petiscos locais",
      "Música ao vivo e clima festivo",
      "Tripulação simpática e bem-humorada que torna tudo inesquecível",
    ],
    arrivalNote: "Chegue com 30 minutos de antecedência para a saída.",
    priceLine: "A partir de $86 por adulto",
    bookLabel: "Reservar Este Passeio",
    boatImageAlt: "Hóspedes relaxando com bebidas na rede de proa enquanto a escuna navega",
  },
  se: {
    metaTitle: "Eftermiddagens Piratfest",
    metaDescription:
      "En 3,5 timmar lång eftermiddagskryssning med Flagship Aruba: två förstklassiga snorkelstopp, lunch i karibisk stil, fri bar, replinegunga och ö-musik.",
    heroEyebrow: "Eftermiddagens Piratfest",
    heroTitle: "En livlig kryssning mitt på dagen",
    heroBody:
      "Musik, en replinegunga, förstklassiga snorkelplatser och fri bar, för gäster som vill ha mer energi i sin eftermiddag.",
    heroAlt: "Skonaren för ankar utanför Arubas kust, nära Palm Beach",
    details: [
      { label: "13:30 till 17:00", sub: "3,5 timmar" },
      { label: "2 snorkelstopp", sub: "Boca Catalina, Malmok" },
      { label: "Replinegunga och musik", sub: "Karibiska rytmer ombord" },
      { label: "Äventyrslystna är välkomna", sub: "Max 24 gäster ombord" },
    ],
    tripBadge: "Hela resan",
    tripTitle: "Snorkla, gunga och njut av musiken",
    tripParagraph:
      "Vår kapten väljer dagens två bästa snorkelplatser, oftast Boca Catalina och Malmok, baserat på morgonens förhållanden. Mellan stoppen serveras lunch i karibisk stil, replinegungan används flitigt, och ö-musik håller däcket livligt hela vägen.",
    includedHeading: "Det Här Ingår",
    included: [
      "Mask, snorkel och simfötter",
      "Lunch i karibisk stil, serveras halvvägs genom kryssningen",
      "Fri bar: obegränsat med läsk, varma drycker, juicer och cocktails",
      "Två snorkelstopp, valda dagligen av kaptenen",
      "Replinegunga ner i havet",
    ],
    highlightsHeading: "Höjdpunkter",
    highlights: [
      "Gunga i replinegungan ner i det turkosa karibiska vattnet",
      "Besök vraket från andra världskriget, SS Antilla",
      "Förstklassig snorkling vid Boca Catalina",
      "Fri bar med lokala drycker och snacks",
      "Livemusik och festlig stämning",
      "Vänlig och kvick besättning som gör upplevelsen oförglömlig",
    ],
    arrivalNote: "Kom gärna 30 minuter före avgång.",
    priceLine: "Från $86 per vuxen",
    bookLabel: "Boka Den Här Turen",
    boatImageAlt: "Gäster kopplar av med drinkar i fördäcksnätet medan skonaren seglar",
  },
};
