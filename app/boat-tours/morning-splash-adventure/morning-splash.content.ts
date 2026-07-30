import type { LocaleCode } from "@/lib/i18n";

export type MorningSplashCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroAlt: string;
  details: { label: string; sub: string }[];
  sideBadge: string;
  sideTitle: string;
  sideParagraph: string;
  includedLabel: string;
  included: string[];
  highlightsLabel: string;
  highlights: string[];
  arrivalNote: string;
  priceLine: string;
  bookButtonLabel: string;
  sideImageAlt: string;
};

export const morningSplashContent: Record<LocaleCode, MorningSplashCopy> = {
  en: {
    metaTitle: "Morning Snorkel Tour",
    metaDescription:
      "A 4-hour morning snorkeling adventure aboard Flagship Aruba's traditional schooner: 3 snorkel stops, gear, drinks and snacks included.",
    heroEyebrow: "Morning Snorkel Tour",
    heroTitle: "Start your day in the water",
    heroBody:
      "Three snorkel stops through crystal-clear water and vibrant marine life, with gear, drinks and snacks included.",
    heroAlt: "A snorkeler smiles at the camera in clear turquoise water off Aruba's coast",
    details: [
      { label: "9am to 1pm", sub: "4 hours" },
      { label: "3 snorkel stops", sub: "Boca Catalina, Antilla, Malmok" },
      { label: "Drinks + snacks", sub: "Included" },
      { label: "All ages welcome", sub: "Max 24 guests aboard" },
    ],
    sideBadge: "The full trip",
    sideTitle: "Three sites, one easy morning",
    sideParagraph:
      "We sail out to three of Aruba's best snorkel sites: the calm reef at Boca Catalina, the WWII-era SS Antilla shipwreck, and the clear water off Malmok Beach. Mask, snorkel and fins are included, and our crew keeps unlimited drinks and Caribbean snacks coming the whole way.",
    includedLabel: "What's Included",
    included: [
      "Mask, snorkel and fins",
      "3 snorkel stops",
      "Unlimited soft drinks, juices and water",
      "Caribbean snacks",
      "Live music and crew entertainment",
    ],
    highlightsLabel: "Highlights",
    highlights: [
      "Crystal-clear waters with vibrant marine life",
      "Visit Boca Catalina & Malmok Beach",
      "Professional crew with safety instruction",
      "Perfect for beginners and experienced snorkelers",
      "Sunny vibes and relaxed atmosphere",
    ],
    arrivalNote: "Please arrive 30 minutes before departure.",
    priceLine: "From $98 per adult",
    bookButtonLabel: "Book This Tour",
    sideImageAlt: "Guests snorkeling alongside a sea turtle in clear turquoise water",
  },
  es: {
    metaTitle: "Aventura Matutina",
    metaDescription:
      "Una aventura de snorkel matutina de 4 horas a bordo de la goleta tradicional de Flagship Aruba: 3 paradas de snorkel, equipo, bebidas y aperitivos incluidos.",
    heroEyebrow: "Aventura Matutina",
    heroTitle: "Comienza tu día en el agua",
    heroBody:
      "Tres paradas de snorkel entre aguas cristalinas y una vibrante vida marina, con equipo, bebidas y aperitivos incluidos.",
    heroAlt: "Un snorkelista sonríe a la cámara en aguas turquesas cristalinas frente a la costa de Aruba",
    details: [
      { label: "9am to 1pm", sub: "4 horas" },
      { label: "3 paradas de snorkel", sub: "Boca Catalina, Antilla, Malmok" },
      { label: "Bebidas y aperitivos", sub: "Incluido" },
      { label: "Aptos para todas las edades", sub: "Máximo 24 huéspedes a bordo" },
    ],
    sideBadge: "La excursión completa",
    sideTitle: "Tres sitios, una mañana fácil",
    sideParagraph:
      "Navegamos hacia tres de los mejores sitios de snorkel de Aruba: el tranquilo arrecife de Boca Catalina, el naufragio del SS Antilla de la Segunda Guerra Mundial, y las aguas cristalinas frente a Malmok Beach. Máscara, snorkel y aletas están incluidos, y nuestra tripulación mantiene bebidas ilimitadas y aperitivos caribeños durante todo el recorrido.",
    includedLabel: "Qué Incluye",
    included: [
      "Máscara, snorkel y aletas",
      "3 paradas de snorkel",
      "Refrescos, jugos y agua ilimitados",
      "Aperitivos caribeños",
      "Música en vivo y entretenimiento de la tripulación",
    ],
    highlightsLabel: "Lo Más Destacado",
    highlights: [
      "Aguas cristalinas con una vibrante vida marina",
      "Visita a Boca Catalina y Malmok Beach",
      "Tripulación profesional con instrucción de seguridad",
      "Perfecto para principiantes y snorkelistas experimentados",
      "Ambiente soleado y relajado",
    ],
    arrivalNote: "Por favor, llega 30 minutos antes de la salida.",
    priceLine: "Desde $98 por adulto",
    bookButtonLabel: "Reservar Esta Excursión",
    sideImageAlt: "Huéspedes haciendo snorkel junto a una tortuga marina en aguas turquesas cristalinas",
  },
  nl: {
    metaTitle: "Ochtend Avontuur",
    metaDescription:
      "Een 4 uur durend ochtend snorkelavontuur aan boord van de traditionele schoener van Flagship Aruba: 3 snorkelstops, uitrusting, drankjes en snacks inbegrepen.",
    heroEyebrow: "Ochtend Avontuur",
    heroTitle: "Begin je dag in het water",
    heroBody:
      "Drie snorkelstops door kristalhelder water en levendig zeeleven, met uitrusting, drankjes en snacks inbegrepen.",
    heroAlt: "Een snorkelaar lacht naar de camera in helder turquoise water voor de kust van Aruba",
    details: [
      { label: "9am to 1pm", sub: "4 uur" },
      { label: "3 snorkelstops", sub: "Boca Catalina, Antilla, Malmok" },
      { label: "Drankjes + snacks", sub: "Inbegrepen" },
      { label: "Alle leeftijden welkom", sub: "Max 24 gasten aan boord" },
    ],
    sideBadge: "De volledige trip",
    sideTitle: "Drie plekken, één makkelijke ochtend",
    sideParagraph:
      "We varen naar drie van de beste snorkelplekken van Aruba: het rustige rif bij Boca Catalina, het wrak van de SS Antilla uit de Tweede Wereldoorlog, en het heldere water voor Malmok Beach. Masker, snorkel en vinnen zijn inbegrepen, en onze bemanning blijft de hele tocht onbeperkt drankjes en Caribische snacks aanbieden.",
    includedLabel: "Wat Is Inbegrepen",
    included: [
      "Masker, snorkel en vinnen",
      "3 snorkelstops",
      "Onbeperkt frisdrank, sappen en water",
      "Caribische snacks",
      "Live muziek en entertainment van de bemanning",
    ],
    highlightsLabel: "Hoogtepunten",
    highlights: [
      "Kristalhelder water met levendig zeeleven",
      "Bezoek Boca Catalina en Malmok Beach",
      "Professionele bemanning met veiligheidsinstructie",
      "Perfect voor beginners en ervaren snorkelaars",
      "Zonnige sfeer en ontspannen ambiance",
    ],
    arrivalNote: "Kom alstublieft 30 minuten voor vertrek aan.",
    priceLine: "Vanaf $98 per volwassene",
    bookButtonLabel: "Boek Deze Tour",
    sideImageAlt: "Gasten snorkelen naast een zeeschildpad in helder turquoise water",
  },
  de: {
    metaTitle: "Morgenabenteuer",
    metaDescription:
      "Ein 4-stündiges morgendliches Schnorchelabenteuer an Bord des traditionellen Schoners von Flagship Aruba: 3 Schnorchelstopps, Ausrüstung, Getränke und Snacks inbegriffen.",
    heroEyebrow: "Morgenabenteuer",
    heroTitle: "Starten Sie Ihren Tag im Wasser",
    heroBody:
      "Drei Schnorchelstopps durch kristallklares Wasser und lebendige Meereswelt, mit Ausrüstung, Getränken und Snacks inbegriffen.",
    heroAlt: "Ein Schnorchler lächelt in die Kamera im klaren türkisfarbenen Wasser vor der Küste Arubas",
    details: [
      { label: "9am to 1pm", sub: "4 Stunden" },
      { label: "3 Schnorchelstopps", sub: "Boca Catalina, Antilla, Malmok" },
      { label: "Getränke + Snacks", sub: "Inbegriffen" },
      { label: "Für alle Altersgruppen geeignet", sub: "Max. 24 Gäste an Bord" },
    ],
    sideBadge: "Der komplette Ausflug",
    sideTitle: "Drei Orte, ein entspannter Morgen",
    sideParagraph:
      "Wir segeln zu drei der besten Schnorchelplätze Arubas: dem ruhigen Riff bei Boca Catalina, dem Schiffswrack der SS Antilla aus dem Zweiten Weltkrieg und dem klaren Wasser vor Malmok Beach. Maske, Schnorchel und Flossen sind inbegriffen, und unsere Crew sorgt die ganze Zeit für unbegrenzte Getränke und karibische Snacks.",
    includedLabel: "Das Ist Inbegriffen",
    included: [
      "Maske, Schnorchel und Flossen",
      "3 Schnorchelstopps",
      "Unbegrenzte Softdrinks, Säfte und Wasser",
      "Karibische Snacks",
      "Live-Musik und Unterhaltung durch die Crew",
    ],
    highlightsLabel: "Höhepunkte",
    highlights: [
      "Kristallklares Wasser mit lebendiger Meereswelt",
      "Besuch von Boca Catalina und Malmok Beach",
      "Professionelle Crew mit Sicherheitseinweisung",
      "Perfekt für Anfänger und erfahrene Schnorchler",
      "Sonnige Stimmung und entspannte Atmosphäre",
    ],
    arrivalNote: "Bitte kommen Sie 30 Minuten vor Abfahrt.",
    priceLine: "Ab $98 pro Erwachsenem",
    bookButtonLabel: "Diese Tour Buchen",
    sideImageAlt: "Gäste schnorcheln neben einer Meeresschildkröte im klaren türkisfarbenen Wasser",
  },
  it: {
    metaTitle: "Avventura Del Mattino",
    metaDescription:
      "Un'avventura di snorkeling mattutina di 4 ore a bordo della goletta tradizionale di Flagship Aruba: 3 soste snorkeling, attrezzatura, bevande e snack inclusi.",
    heroEyebrow: "Avventura Del Mattino",
    heroTitle: "Inizia la tua giornata in acqua",
    heroBody:
      "Tre soste per lo snorkeling tra acque cristalline e una vivace vita marina, con attrezzatura, bevande e snack inclusi.",
    heroAlt: "Un sub con boccaglio sorride alla telecamera in acque turchesi cristalline al largo della costa di Aruba",
    details: [
      { label: "9am to 1pm", sub: "4 ore" },
      { label: "3 soste snorkeling", sub: "Boca Catalina, Antilla, Malmok" },
      { label: "Bevande + snack", sub: "Incluso" },
      { label: "Adatto a tutte le età", sub: "Massimo 24 ospiti a bordo" },
    ],
    sideBadge: "L'escursione completa",
    sideTitle: "Tre siti, una mattinata semplice",
    sideParagraph:
      "Navighiamo verso tre dei migliori siti di snorkeling di Aruba: la tranquilla barriera corallina di Boca Catalina, il relitto della SS Antilla della Seconda Guerra Mondiale e le acque cristalline al largo di Malmok Beach. Maschera, boccaglio e pinne sono inclusi, e il nostro equipaggio continua a offrire bevande illimitate e snack caraibici per tutta la durata dell'escursione.",
    includedLabel: "Cosa È Incluso",
    included: [
      "Maschera, boccaglio e pinne",
      "3 soste snorkeling",
      "Bibite, succhi e acqua illimitati",
      "Snack caraibici",
      "Musica dal vivo e intrattenimento dell'equipaggio",
    ],
    highlightsLabel: "Punti Salienti",
    highlights: [
      "Acque cristalline con una vivace vita marina",
      "Visita a Boca Catalina e Malmok Beach",
      "Equipaggio professionale con istruzioni di sicurezza",
      "Perfetto per principianti e sub esperti",
      "Atmosfera soleggiata e rilassata",
    ],
    arrivalNote: "Si prega di arrivare 30 minuti prima della partenza.",
    priceLine: "A partire da $98 per adulto",
    bookButtonLabel: "Prenota Questa Escursione",
    sideImageAlt: "Ospiti fanno snorkeling accanto a una tartaruga marina in acque turchesi cristalline",
  },
  br: {
    metaTitle: "Aventura Matinal",
    metaDescription:
      "Uma aventura de mergulho com snorkel matinal de 4 horas a bordo da escuna tradicional da Flagship Aruba: 3 paradas para snorkel, equipamento, bebidas e petiscos incluídos.",
    heroEyebrow: "Aventura Matinal",
    heroTitle: "Comece o seu dia na água",
    heroBody:
      "Três paradas para snorkel em águas cristalinas e vida marinha vibrante, com equipamento, bebidas e petiscos incluídos.",
    heroAlt: "Um mergulhador sorri para a câmera em águas turquesa cristalinas na costa de Aruba",
    details: [
      { label: "9am to 1pm", sub: "4 horas" },
      { label: "3 paradas para snorkel", sub: "Boca Catalina, Antilla, Malmok" },
      { label: "Bebidas e petiscos", sub: "Incluído" },
      { label: "Todas as idades são bem-vindas", sub: "Máximo de 24 hóspedes a bordo" },
    ],
    sideBadge: "O passeio completo",
    sideTitle: "Três pontos, uma manhã tranquila",
    sideParagraph:
      "Navegamos até três dos melhores pontos de snorkel de Aruba: o recife calmo de Boca Catalina, o naufrágio do SS Antilla da Segunda Guerra Mundial, e as águas cristalinas em frente à Malmok Beach. Máscara, snorkel e nadadeiras estão incluídos, e nossa tripulação mantém bebidas ilimitadas e petiscos caribenhos o passeio todo.",
    includedLabel: "O Que Está Incluído",
    included: [
      "Máscara, snorkel e nadadeiras",
      "3 paradas para snorkel",
      "Refrigerantes, sucos e água ilimitados",
      "Petiscos caribenhos",
      "Música ao vivo e entretenimento da tripulação",
    ],
    highlightsLabel: "Destaques",
    highlights: [
      "Águas cristalinas com vida marinha vibrante",
      "Visite Boca Catalina e Malmok Beach",
      "Tripulação profissional com instrução de segurança",
      "Perfeito para iniciantes e mergulhadores experientes",
      "Clima ensolarado e ambiente relaxado",
    ],
    arrivalNote: "Por favor, chegue 30 minutos antes da partida.",
    priceLine: "A partir de $98 por adulto",
    bookButtonLabel: "Reserve Este Passeio",
    sideImageAlt: "Hóspedes fazendo snorkel ao lado de uma tartaruga marinha em águas turquesa cristalinas",
  },
  se: {
    metaTitle: "Morgonäventyr",
    metaDescription:
      "Ett 4 timmar långt morgonsnorklingsäventyr ombord på Flagship Arubas traditionella skonare: 3 snorkelstopp, utrustning, drycker och snacks ingår.",
    heroEyebrow: "Morgonäventyr",
    heroTitle: "Starta din dag i vattnet",
    heroBody:
      "Tre snorkelstopp genom kristallklart vatten och ett levande marint liv, med utrustning, drycker och snacks ingår.",
    heroAlt: "En snorklare ler mot kameran i klart turkosblått vatten utanför Arubas kust",
    details: [
      { label: "9am to 1pm", sub: "4 timmar" },
      { label: "3 snorkelstopp", sub: "Boca Catalina, Antilla, Malmok" },
      { label: "Drycker + snacks", sub: "Ingår" },
      { label: "Alla åldrar välkomna", sub: "Max 24 gäster ombord" },
    ],
    sideBadge: "Hela turen",
    sideTitle: "Tre platser, en enkel morgon",
    sideParagraph:
      "Vi seglar ut till tre av Arubas bästa snorkelplatser: det lugna revet vid Boca Catalina, andra världskrigsvraket SS Antilla, och det klara vattnet utanför Malmok Beach. Mask, snorkel och simfötter ingår, och vår besättning håller obegränsade drycker och karibiska snacks flödande hela vägen.",
    includedLabel: "Detta Ingår",
    included: [
      "Mask, snorkel och simfötter",
      "3 snorkelstopp",
      "Obegränsat med läsk, juice och vatten",
      "Karibiska snacks",
      "Livemusik och underhållning från besättningen",
    ],
    highlightsLabel: "Höjdpunkter",
    highlights: [
      "Kristallklart vatten med ett levande marint liv",
      "Besök Boca Catalina och Malmok Beach",
      "Professionell besättning med säkerhetsinstruktion",
      "Perfekt för nybörjare och erfarna snorklare",
      "Solig stämning och avslappnad atmosfär",
    ],
    arrivalNote: "Vänligen kom 30 minuter före avgång.",
    priceLine: "Från $98 per vuxen",
    bookButtonLabel: "Boka Denna Tur",
    sideImageAlt: "Gäster snorklar bredvid en havssköldpadda i klart turkosblått vatten",
  },
};
