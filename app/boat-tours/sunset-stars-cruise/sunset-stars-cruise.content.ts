import type { LocaleCode } from "@/lib/i18n";

export type SunsetStarsCruiseCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroAlt: string;
  details: { label: string; sub: string }[];
  sectionBadge: string;
  sectionTitle: string;
  sectionBody: string;
  includedHeading: string;
  included: string[];
  highlightsHeading: string;
  highlights: string[];
  arrivalNote: string;
  price: string;
  bookLabel: string;
  imageAlt: string;
};

export const sunsetStarsCruiseContent: Record<LocaleCode, SunsetStarsCruiseCopy> = {
  en: {
    metaTitle: "Sunset Cruise",
    metaDescription:
      "A 2-hour evening sail with Flagship Aruba: open bar, Caribbean bites, swimming stops and stargazing over the water.",
    heroEyebrow: "Sunset Cruise",
    heroTitle: "An evening on the water",
    heroBody:
      "Unwind as the sun dips below the horizon, with local bites, drinks and ocean breezes for couples, families and friends.",
    heroAlt: "The Flagship Aruba schooner silhouetted against a dramatic sunset sky",
    details: [
      { label: "5:30pm to 7:30pm", sub: "2 hours" },
      { label: "Open bar", sub: "Cocktails, soft drinks, juices" },
      { label: "Stargazing", sub: "As night falls" },
      { label: "Couples & families", sub: "Max 24 guests aboard" },
    ],
    sectionBadge: "A relaxed evening",
    sectionTitle: "Sail, swim, and watch the stars come out",
    sectionBody:
      "This is our easygoing evening sail: no snorkel gear required, just an open bar, Caribbean bites, two swimming stops, and a front-row seat as the sky turns from sunset orange to a blanket of stars over the water. It suits couples, honeymooners, families and groups of friends alike.",
    includedHeading: "What's Included",
    included: [
      "Open bar: soft drinks, juices, cocktails and snacks",
      "Caribbean-inspired food",
      "Two swimming stops",
      "Music and entertainment",
      "Scenic sunset sailing along Aruba's coastline",
    ],
    highlightsHeading: "Highlights",
    highlights: [
      "Watch the sun dip below the Caribbean horizon",
      "Savor local Aruban bites and premium drinks",
      "Gentle ocean breezes and relaxing music",
      "Perfect for couples, friends, or special occasions",
      "Sail under the emerging stars",
      "Unforgettable golden-hour photo opportunities",
    ],
    arrivalNote: "Please arrive 30 minutes before departure.",
    price: "From $90 per adult",
    bookLabel: "Book This Cruise",
    imageAlt: "The Flagship Aruba schooner sailing under a pink sunset sky",
  },
  es: {
    metaTitle: "Crucero Atardecer Y Estrellas",
    metaDescription:
      "Una travesía nocturna de 2 horas con Flagship Aruba: barra libre, bocados caribeños, paradas para nadar y observación de estrellas sobre el mar.",
    heroEyebrow: "Crucero Atardecer Y Estrellas",
    heroTitle: "Una tarde en el mar",
    heroBody:
      "Relájate mientras el sol se oculta en el horizonte, con bocados locales, bebidas y brisas del océano para parejas, familias y amigos.",
    heroAlt: "La goleta de Flagship Aruba en silueta contra un dramático cielo de atardecer",
    details: [
      { label: "5:30pm a 7:30pm", sub: "2 horas" },
      { label: "Barra libre", sub: "Cócteles, refrescos, jugos" },
      { label: "Observación de estrellas", sub: "Al caer la noche" },
      { label: "Parejas y familias", sub: "Máximo 24 pasajeros a bordo" },
    ],
    sectionBadge: "Una tarde relajada",
    sectionTitle: "Navega, nada y observa cómo aparecen las estrellas",
    sectionBody:
      "Esta es nuestra travesía vespertina sin complicaciones: no se necesita equipo de snorkel, solo barra libre, bocados caribeños, dos paradas para nadar y un asiento de primera fila mientras el cielo pasa del naranja del atardecer a un manto de estrellas sobre el mar. Es ideal para parejas, recién casados, familias y grupos de amigos por igual.",
    includedHeading: "Qué Incluye",
    included: [
      "Barra libre: refrescos, jugos, cócteles y bocadillos",
      "Comida de inspiración caribeña",
      "Dos paradas para nadar",
      "Música y entretenimiento",
      "Navegación panorámica al atardecer por la costa de Aruba",
    ],
    highlightsHeading: "Lo Más Destacado",
    highlights: [
      "Observa cómo el sol se hunde bajo el horizonte caribeño",
      "Disfruta de bocados arubeños y bebidas premium",
      "Suaves brisas marinas y música relajante",
      "Perfecto para parejas, amigos u ocasiones especiales",
      "Navega bajo las estrellas que empiezan a aparecer",
      "Oportunidades fotográficas inolvidables durante la hora dorada",
    ],
    arrivalNote: "Por favor, llega 30 minutos antes de la salida.",
    price: "Desde $90 por adulto",
    bookLabel: "Reservar Este Crucero",
    imageAlt: "La goleta de Flagship Aruba navegando bajo un cielo rosado de atardecer",
  },
  nl: {
    metaTitle: "Zonsondergang & Sterrencruise",
    metaDescription:
      "Een avondtocht van 2 uur met Flagship Aruba: open bar, Caribische hapjes, zwemstops en sterren kijken boven het water.",
    heroEyebrow: "Zonsondergang & Sterrencruise",
    heroTitle: "Een avond op het water",
    heroBody:
      "Ontspan terwijl de zon onder de horizon zakt, met lokale hapjes, drankjes en zeebriesjes voor stellen, gezinnen en vrienden.",
    heroAlt: "De schoener van Flagship Aruba als silhouet tegen een dramatische zonsonderganghemel",
    details: [
      { label: "17:30 tot 19:30 uur", sub: "2 uur" },
      { label: "Open bar", sub: "Cocktails, frisdrank, sappen" },
      { label: "Sterren kijken", sub: "Bij het vallen van de avond" },
      { label: "Stellen & gezinnen", sub: "Maximaal 24 gasten aan boord" },
    ],
    sectionBadge: "Een ontspannen avond",
    sectionTitle: "Vaar, zwem en zie de sterren tevoorschijn komen",
    sectionBody:
      "Dit is onze relaxte avondtocht: geen snorkeluitrusting nodig, alleen een open bar, Caribische hapjes, twee zwemstops en een plek in de eerste rij terwijl de hemel verandert van zonsondergangoranje naar een deken van sterren boven het water. Perfect voor stellen, pasgetrouwden, gezinnen en groepen vrienden.",
    includedHeading: "Wat Is Inbegrepen",
    included: [
      "Open bar: frisdrank, sappen, cocktails en snacks",
      "Caribisch geïnspireerd eten",
      "Twee zwemstops",
      "Muziek en entertainment",
      "Schilderachtige zonsondergangtocht langs de kust van Aruba",
    ],
    highlightsHeading: "Hoogtepunten",
    highlights: [
      "Zie de zon wegzakken onder de Caribische horizon",
      "Geniet van lokale Arubaanse hapjes en premium drankjes",
      "Zachte zeebriesjes en ontspannende muziek",
      "Perfect voor stellen, vrienden of speciale gelegenheden",
      "Vaar onder de opkomende sterren",
      "Onvergetelijke fotomomenten tijdens het gouden uur",
    ],
    arrivalNote: "Kom 30 minuten voor vertrek aan.",
    price: "Vanaf $90 per volwassene",
    bookLabel: "Boek Deze Cruise",
    imageAlt: "De schoener van Flagship Aruba varend onder een roze zonsonderganghemel",
  },
  de: {
    metaTitle: "Sonnenuntergangs- Und Sternenfahrt",
    metaDescription:
      "Eine zweistündige Abendfahrt mit Flagship Aruba: offene Bar, karibische Snacks, Schwimmstopps und Sternenbeobachtung über dem Wasser.",
    heroEyebrow: "Sonnenuntergangs- Und Sternenfahrt",
    heroTitle: "Ein Abend auf dem Wasser",
    heroBody:
      "Entspannen Sie, während die Sonne am Horizont versinkt, mit lokalen Snacks, Getränken und Meeresbrisen für Paare, Familien und Freunde.",
    heroAlt: "Der Schoner von Flagship Aruba als Silhouette vor einem dramatischen Sonnenuntergangshimmel",
    details: [
      { label: "17:30 bis 19:30 Uhr", sub: "2 Stunden" },
      { label: "Offene Bar", sub: "Cocktails, Softdrinks, Säfte" },
      { label: "Sternenbeobachtung", sub: "Bei Einbruch der Nacht" },
      { label: "Paare & Familien", sub: "Maximal 24 Gäste an Bord" },
    ],
    sectionBadge: "Ein entspannter Abend",
    sectionTitle: "Segeln, schwimmen und den Sternen beim Erscheinen zusehen",
    sectionBody:
      "Dies ist unsere entspannte Abendfahrt: keine Schnorchelausrüstung nötig, nur eine offene Bar, karibische Snacks, zwei Schwimmstopps und ein Platz in der ersten Reihe, während sich der Himmel von Sonnenuntergangsorange in ein Sternenmeer über dem Wasser verwandelt. Sie eignet sich für Paare, Flitterwöchner, Familien und Freundesgruppen gleichermaßen.",
    includedHeading: "Das Ist Enthalten",
    included: [
      "Offene Bar: Softdrinks, Säfte, Cocktails und Snacks",
      "Karibisch inspiriertes Essen",
      "Zwei Schwimmstopps",
      "Musik und Unterhaltung",
      "Malerische Sonnenuntergangsfahrt entlang der Küste Arubas",
    ],
    highlightsHeading: "Highlights",
    highlights: [
      "Beobachten Sie, wie die Sonne unter dem karibischen Horizont versinkt",
      "Genießen Sie lokale arubanische Snacks und erstklassige Getränke",
      "Sanfte Meeresbrisen und entspannende Musik",
      "Perfekt für Paare, Freunde oder besondere Anlässe",
      "Segeln Sie unter den aufkommenden Sternen",
      "Unvergessliche Fotogelegenheiten zur goldenen Stunde",
    ],
    arrivalNote: "Bitte kommen Sie 30 Minuten vor Abfahrt an.",
    price: "Ab $90 pro Erwachsenem",
    bookLabel: "Diese Kreuzfahrt Buchen",
    imageAlt: "Der Schoner von Flagship Aruba segelt unter einem rosa Sonnenuntergangshimmel",
  },
  it: {
    metaTitle: "Crociera Tramonto E Stelle",
    metaDescription:
      "Una navigazione serale di 2 ore con Flagship Aruba: open bar, stuzzichini caraibici, soste per nuotare e osservazione delle stelle sull'acqua.",
    heroEyebrow: "Crociera Tramonto E Stelle",
    heroTitle: "Una serata sull'acqua",
    heroBody:
      "Rilassati mentre il sole tramonta all'orizzonte, con stuzzichini locali, drink e brezze marine per coppie, famiglie e amici.",
    heroAlt: "La goletta di Flagship Aruba stagliata contro un drammatico cielo al tramonto",
    details: [
      { label: "17:30 alle 19:30", sub: "2 ore" },
      { label: "Open bar", sub: "Cocktail, bibite, succhi" },
      { label: "Osservazione delle stelle", sub: "Al calar della notte" },
      { label: "Coppie e famiglie", sub: "Massimo 24 ospiti a bordo" },
    ],
    sectionBadge: "Una serata rilassante",
    sectionTitle: "Naviga, nuota e guarda apparire le stelle",
    sectionBody:
      "Questa è la nostra rilassante navigazione serale: non serve attrezzatura da snorkeling, solo open bar, stuzzichini caraibici, due soste per nuotare e un posto in prima fila mentre il cielo passa dall'arancione del tramonto a una coltre di stelle sull'acqua. È adatta a coppie, sposi in luna di miele, famiglie e gruppi di amici.",
    includedHeading: "Cosa È Incluso",
    included: [
      "Open bar: bibite, succhi, cocktail e snack",
      "Cibo di ispirazione caraibica",
      "Due soste per nuotare",
      "Musica e intrattenimento",
      "Navigazione panoramica al tramonto lungo la costa di Aruba",
    ],
    highlightsHeading: "In Evidenza",
    highlights: [
      "Guarda il sole tuffarsi sotto l'orizzonte caraibico",
      "Assapora stuzzichini arubani e drink premium",
      "Dolci brezze marine e musica rilassante",
      "Perfetto per coppie, amici o occasioni speciali",
      "Naviga sotto le stelle che sorgono",
      "Occasioni fotografiche indimenticabili durante l'ora dorata",
    ],
    arrivalNote: "Ti preghiamo di arrivare 30 minuti prima della partenza.",
    price: "A partire da $90 per adulto",
    bookLabel: "Prenota Questa Crociera",
    imageAlt: "La goletta di Flagship Aruba naviga sotto un cielo rosa al tramonto",
  },
  br: {
    metaTitle: "Cruzeiro Pôr Do Sol E Estrelas",
    metaDescription:
      "Um passeio noturno de 2 horas com a Flagship Aruba: bar aberto, petiscos caribenhos, paradas para nadar e observação das estrelas sobre o mar.",
    heroEyebrow: "Cruzeiro Pôr Do Sol E Estrelas",
    heroTitle: "Uma noite sobre as águas",
    heroBody:
      "Relaxe enquanto o sol se põe no horizonte, com petiscos locais, bebidas e brisas do mar para casais, famílias e amigos.",
    heroAlt: "A escuna da Flagship Aruba em silhueta contra um céu dramático ao pôr do sol",
    details: [
      { label: "17h30 às 19h30", sub: "2 horas" },
      { label: "Bar aberto", sub: "Coquetéis, refrigerantes, sucos" },
      { label: "Observação das estrelas", sub: "Ao cair da noite" },
      { label: "Casais e famílias", sub: "Máximo de 24 hóspedes a bordo" },
    ],
    sectionBadge: "Uma noite tranquila",
    sectionTitle: "Navegue, nade e veja as estrelas surgirem",
    sectionBody:
      "Este é o nosso passeio noturno descontraído: sem necessidade de equipamento de snorkel, apenas bar aberto, petiscos caribenhos, duas paradas para nadar e um lugar na primeira fila enquanto o céu passa do laranja do pôr do sol a um manto de estrelas sobre o mar. É ideal para casais, lua de mel, famílias e grupos de amigos.",
    includedHeading: "O Que Está Incluído",
    included: [
      "Bar aberto: refrigerantes, sucos, coquetéis e petiscos",
      "Comida de inspiração caribenha",
      "Duas paradas para nadar",
      "Música e entretenimento",
      "Navegação panorâmica ao pôr do sol pelo litoral de Aruba",
    ],
    highlightsHeading: "Destaques",
    highlights: [
      "Veja o sol se pôr no horizonte caribenho",
      "Saboreie petiscos arubanos e bebidas premium",
      "Brisas suaves do mar e música relaxante",
      "Perfeito para casais, amigos ou ocasiões especiais",
      "Navegue sob as estrelas que surgem",
      "Oportunidades fotográficas inesquecíveis durante a hora dourada",
    ],
    arrivalNote: "Por favor, chegue 30 minutos antes da partida.",
    price: "A partir de $90 por adulto",
    bookLabel: "Reservar Este Cruzeiro",
    imageAlt: "A escuna da Flagship Aruba navegando sob um céu rosado ao pôr do sol",
  },
  se: {
    metaTitle: "Solnedgång Och Stjärnkryssning",
    metaDescription:
      "En tvåtimmars kvällssegling med Flagship Aruba: fri bar, karibiska smårätter, badstopp och stjärnskådning över vattnet.",
    heroEyebrow: "Solnedgång Och Stjärnkryssning",
    heroTitle: "En kväll på vattnet",
    heroBody:
      "Koppla av när solen sjunker under horisonten, med lokala smårätter, drycker och havsbris för par, familjer och vänner.",
    heroAlt: "Flagship Arubas skonare i siluett mot en dramatisk solnedgångshimmel",
    details: [
      { label: "17:30 till 19:30", sub: "2 timmar" },
      { label: "Fri bar", sub: "Cocktails, läsk, juice" },
      { label: "Stjärnskådning", sub: "När natten faller" },
      { label: "Par & familjer", sub: "Max 24 gäster ombord" },
    ],
    sectionBadge: "En avslappnad kväll",
    sectionTitle: "Segla, simma och se stjärnorna komma fram",
    sectionBody:
      "Detta är vår avslappnade kvällssegling: ingen snorkelutrustning behövs, bara fri bar, karibiska smårätter, två badstopp och en plats på första parkett när himlen övergår från solnedgångsorange till ett täcke av stjärnor över vattnet. Den passar par, nygifta, familjer och vängrupper lika bra.",
    includedHeading: "Detta Ingår",
    included: [
      "Fri bar: läsk, juice, cocktails och tilltugg",
      "Karibiskt inspirerad mat",
      "Två badstopp",
      "Musik och underhållning",
      "Naturskön solnedgångssegling längs Arubas kust",
    ],
    highlightsHeading: "Höjdpunkter",
    highlights: [
      "Se solen sjunka under den karibiska horisonten",
      "Njut av lokala arubanska smårätter och förstklassiga drycker",
      "Milda havsbriser och avslappnande musik",
      "Perfekt för par, vänner eller speciella tillfällen",
      "Segla under stjärnorna som tänds",
      "Oförglömliga fototillfällen i det gyllene ljuset",
    ],
    arrivalNote: "Vänligen anländ 30 minuter före avgång.",
    price: "Från $90 per vuxen",
    bookLabel: "Boka Denna Kryssning",
    imageAlt: "Flagship Arubas skonare seglar under en rosa solnedgångshimmel",
  },
};
