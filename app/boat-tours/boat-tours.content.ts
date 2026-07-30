import type { LocaleCode } from "@/lib/i18n";

export type BoatToursCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroAlt: string;
  stats: { value: string; label: string }[];
  tours: {
    title: string;
    tag: string;
    time: string;
    price: string;
    body: string;
    alt: string;
  }[];
  tourDetailsLabel: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

/**
 * Tour titles reuse the exact translated strings from lib/site-nav.ts's `t`
 * dictionary (keys "morning-splash", "afternoon-pirate", "sunset-stars") for
 * consistency across the site.
 */
export const boatToursContent: Record<LocaleCode, BoatToursCopy> = {
  en: {
    metaTitle: "Boat Tours",
    metaDescription:
      "Three boat tours out of Aruba aboard our traditional wooden schooner: the Morning Snorkel Tour, the Afternoon Snorkel Tour, and the Sunset Cruise.",
    heroEyebrow: "All tours",
    heroTitle: "Three ways to sail with us",
    heroBody: "Every tour departs from the pier in front of MooMba Beach Bar aboard our traditional wooden schooner.",
    heroAlt: "The Flagship Aruba schooner under sail off Aruba's coast",
    stats: [
      { value: "5-Star", label: "Average Rating" },
      { value: "3", label: "Unique Cruises" },
      { value: "1,000+", label: "Happy Guests" },
      { value: "3", label: "Premium Snorkel Sites" },
    ],
    tours: [
      {
        title: "Morning Snorkel Tour",
        tag: "Gear Included",
        time: "9am to 1pm · 4 hours",
        price: "From $98 per adult",
        body: "Three snorkel stops, gear included, unlimited drinks and Caribbean snacks. A full day of adventure before lunch.",
        alt: "Guests snorkeling alongside a sea turtle in clear turquoise water",
      },
      {
        title: "Afternoon Snorkel Tour",
        tag: "Open Bar",
        time: "1:30pm to 5pm · 3.5 hours",
        price: "From $86 per adult",
        body: "Two premium snorkel stops, a Caribbean-style lunch, open bar, rope swing and island music for a livelier afternoon.",
        alt: "A large group of guests cheering together aboard the schooner",
      },
      {
        title: "Sunset Cruise",
        tag: "Premium Cocktails",
        time: "5:30pm to 7:30pm · 2 hours",
        price: "From $90 per adult",
        body: "An open bar, Caribbean bites, two swimming stops, and stargazing as the sky darkens over the water.",
        alt: "A guest jumps from the Flagship Aruba schooner into the ocean",
      },
    ],
    tourDetailsLabel: "Tour Details",
    ctaTitle: "Not sure which to pick?",
    ctaBody: "Reach out and our crew will help you choose the right tour for your trip.",
    ctaButton: "Contact Us",
  },
  es: {
    metaTitle: "Excursiones En Barco",
    metaDescription:
      "Tres excursiones en barco desde Aruba a bordo de nuestra goleta de madera tradicional: la Aventura Matutina, la Fiesta Pirata Vespertina y el Crucero Atardecer Y Estrellas.",
    heroEyebrow: "Todas las excursiones",
    heroTitle: "Tres formas de navegar con nosotros",
    heroBody: "Todas nuestras excursiones zarpan desde el muelle frente a MooMba Beach Bar a bordo de nuestra goleta de madera tradicional.",
    heroAlt: "La goleta de Flagship Aruba navegando frente a la costa de Aruba",
    stats: [
      { value: "5 Estrellas", label: "Calificación Promedio" },
      { value: "3", label: "Cruceros Únicos" },
      { value: "1.000+", label: "Huéspedes Felices" },
      { value: "3", label: "Sitios De Snorkel Premium" },
    ],
    tours: [
      {
        title: "Aventura Matutina",
        tag: "Equipo Incluido",
        time: "9am a 1pm · 4 horas",
        price: "Desde $98 por adulto",
        body: "Tres paradas para hacer snorkel, equipo incluido, bebidas ilimitadas y bocadillos caribeños. Un día completo de aventura antes del almuerzo.",
        alt: "Huéspedes haciendo snorkel junto a una tortuga marina en aguas turquesas transparentes",
      },
      {
        title: "Fiesta Pirata Vespertina",
        tag: "Barra Libre",
        time: "1:30pm a 5pm · 3.5 horas",
        price: "Desde $86 por adulto",
        body: "Dos paradas premium para hacer snorkel, un almuerzo estilo caribeño, barra libre, columpio de cuerda y música isleña para una tarde más animada.",
        alt: "Un gran grupo de huéspedes celebrando juntos a bordo de la goleta",
      },
      {
        title: "Crucero Atardecer Y Estrellas",
        tag: "Cócteles Premium",
        time: "5:30pm a 7:30pm · 2 horas",
        price: "Desde $90 por adulto",
        body: "Barra libre, bocadillos caribeños, dos paradas para nadar y observación de estrellas mientras el cielo se oscurece sobre el agua.",
        alt: "Un huésped salta desde la goleta de Flagship Aruba al océano",
      },
    ],
    tourDetailsLabel: "Ver Detalles",
    ctaTitle: "¿No sabes cuál elegir?",
    ctaBody: "Contáctanos y nuestra tripulación te ayudará a elegir la excursión adecuada para tu viaje.",
    ctaButton: "Contáctanos",
  },
  nl: {
    metaTitle: "Boottochten",
    metaDescription:
      "Drie boottochten vanuit Aruba aan boord van onze traditionele houten schoener: het Ochtend Avontuur, het Middag Piratenfeest en de Zonsondergang & Sterrencruise.",
    heroEyebrow: "Alle tochten",
    heroTitle: "Drie manieren om met ons te varen",
    heroBody: "Elke tocht vertrekt vanaf de pier voor MooMba Beach Bar aan boord van onze traditionele houten schoener.",
    heroAlt: "De schoener van Flagship Aruba onder zeil voor de kust van Aruba",
    stats: [
      { value: "5 Sterren", label: "Gemiddelde Beoordeling" },
      { value: "3", label: "Unieke Cruises" },
      { value: "1.000+", label: "Tevreden Gasten" },
      { value: "3", label: "Premium Snorkelplekken" },
    ],
    tours: [
      {
        title: "Ochtend Avontuur",
        tag: "Uitrusting Inbegrepen",
        time: "9.00 tot 13.00 uur · 4 uur",
        price: "Vanaf $98 per volwassene",
        body: "Drie snorkelstops, uitrusting inbegrepen, onbeperkt drinken en Caribische snacks. Een volle dag avontuur voor de lunch.",
        alt: "Gasten snorkelen naast een zeeschildpad in helder turquoise water",
      },
      {
        title: "Middag Piratenfeest",
        tag: "Open Bar",
        time: "13.30 tot 17.00 uur · 3,5 uur",
        price: "Vanaf $86 per volwassene",
        body: "Twee premium snorkelstops, een Caribische lunch, open bar, touwschommel en eilandmuziek voor een levendigere middag.",
        alt: "Een grote groep gasten juicht samen aan boord van de schoener",
      },
      {
        title: "Zonsondergang & Sterrencruise",
        tag: "Premium Cocktails",
        time: "17.30 tot 19.30 uur · 2 uur",
        price: "Vanaf $90 per volwassene",
        body: "Een open bar, Caribische hapjes, twee zwemstops en sterren kijken terwijl de lucht boven het water donker wordt.",
        alt: "Een gast springt vanaf de schoener van Flagship Aruba in de oceaan",
      },
    ],
    tourDetailsLabel: "Bekijk Details",
    ctaTitle: "Weet u niet welke u moet kiezen?",
    ctaBody: "Neem contact op en onze bemanning helpt u de juiste tocht voor uw reis te kiezen.",
    ctaButton: "Neem Contact Op",
  },
  de: {
    metaTitle: "Bootstouren",
    metaDescription:
      "Drei Bootstouren ab Aruba an Bord unseres traditionellen Holzschoners: das Morgenabenteuer, die Nachmittags-Piratenparty und die Sonnenuntergangs- und Sternenfahrt.",
    heroEyebrow: "Alle Touren",
    heroTitle: "Drei Arten, mit uns zu segeln",
    heroBody: "Jede Tour startet am Pier vor der MooMba Beach Bar an Bord unseres traditionellen Holzschoners.",
    heroAlt: "Der Schoner von Flagship Aruba unter Segel vor der Küste Arubas",
    stats: [
      { value: "5 Sterne", label: "Durchschnittliche Bewertung" },
      { value: "3", label: "Einzigartige Kreuzfahrten" },
      { value: "1.000+", label: "Zufriedene Gäste" },
      { value: "3", label: "Erstklassige Schnorchelplätze" },
    ],
    tours: [
      {
        title: "Morgenabenteuer",
        tag: "Ausrüstung Inklusive",
        time: "9 bis 13 Uhr · 4 Stunden",
        price: "Ab $98 pro Erwachsenem",
        body: "Drei Schnorchelstopps, Ausrüstung inklusive, unbegrenzte Getränke und karibische Snacks. Ein ganzer Tag Abenteuer vor dem Mittagessen.",
        alt: "Gäste schnorcheln neben einer Meeresschildkröte in klarem türkisfarbenem Wasser",
      },
      {
        title: "Nachmittags-Piratenparty",
        tag: "Offene Bar",
        time: "13:30 bis 17 Uhr · 3,5 Stunden",
        price: "Ab $86 pro Erwachsenem",
        body: "Zwei erstklassige Schnorchelstopps, ein karibisches Mittagessen, offene Bar, Seilschaukel und Inselmusik für einen lebhafteren Nachmittag.",
        alt: "Eine große Gruppe von Gästen jubelt gemeinsam an Bord des Schoners",
      },
      {
        title: "Sonnenuntergangs- Und Sternenfahrt",
        tag: "Premium-Cocktails",
        time: "17:30 bis 19:30 Uhr · 2 Stunden",
        price: "Ab $90 pro Erwachsenem",
        body: "Offene Bar, karibische Häppchen, zwei Schwimmstopps und Sternenbeobachtung, während der Himmel über dem Wasser dunkler wird.",
        alt: "Ein Gast springt vom Schoner von Flagship Aruba ins Meer",
      },
    ],
    tourDetailsLabel: "Details Ansehen",
    ctaTitle: "Nicht sicher, welche Tour die richtige ist?",
    ctaBody: "Kontaktieren Sie uns und unsere Crew hilft Ihnen, die passende Tour für Ihre Reise zu finden.",
    ctaButton: "Kontaktieren Sie Uns",
  },
  it: {
    metaTitle: "Escursioni In Barca",
    metaDescription:
      "Tre escursioni in barca da Aruba a bordo della nostra tradizionale goletta di legno: l'Avventura Del Mattino, la Festa Pirata Del Pomeriggio e la Crociera Tramonto E Stelle.",
    heroEyebrow: "Tutte le escursioni",
    heroTitle: "Tre modi per navigare con noi",
    heroBody: "Ogni escursione parte dal molo di fronte al MooMba Beach Bar a bordo della nostra tradizionale goletta di legno.",
    heroAlt: "La goletta di Flagship Aruba a vela al largo della costa di Aruba",
    stats: [
      { value: "5 Stelle", label: "Valutazione Media" },
      { value: "3", label: "Crociere Uniche" },
      { value: "1.000+", label: "Ospiti Felici" },
      { value: "3", label: "Siti Di Snorkeling Premium" },
    ],
    tours: [
      {
        title: "Avventura Del Mattino",
        tag: "Attrezzatura Inclusa",
        time: "9:00 alle 13:00 · 4 ore",
        price: "Da $98 per adulto",
        body: "Tre soste per lo snorkeling, attrezzatura inclusa, bevande illimitate e snack caraibici. Una giornata intera di avventura prima di pranzo.",
        alt: "Ospiti fanno snorkeling accanto a una tartaruga marina in acque turchesi cristalline",
      },
      {
        title: "Festa Pirata Del Pomeriggio",
        tag: "Open Bar",
        time: "13:30 alle 17:00 · 3,5 ore",
        price: "Da $86 per adulto",
        body: "Due soste premium per lo snorkeling, un pranzo in stile caraibico, open bar, altalena con corda e musica caraibica per un pomeriggio più vivace.",
        alt: "Un grande gruppo di ospiti festeggia insieme a bordo della goletta",
      },
      {
        title: "Crociera Tramonto E Stelle",
        tag: "Cocktail Premium",
        time: "17:30 alle 19:30 · 2 ore",
        price: "Da $90 per adulto",
        body: "Open bar, stuzzichini caraibici, due soste per nuotare e osservazione delle stelle mentre il cielo si scurisce sull'acqua.",
        alt: "Un ospite si tuffa dalla goletta di Flagship Aruba nell'oceano",
      },
    ],
    tourDetailsLabel: "Vedi Dettagli",
    ctaTitle: "Non sai quale scegliere?",
    ctaBody: "Contattaci e il nostro equipaggio ti aiuterà a scegliere l'escursione giusta per il tuo viaggio.",
    ctaButton: "Contattaci",
  },
  br: {
    metaTitle: "Passeios De Barco",
    metaDescription:
      "Três passeios de barco saindo de Aruba a bordo de nossa tradicional escuna de madeira: a Aventura Matinal, a Festa Pirata Vespertina e o Cruzeiro Pôr Do Sol E Estrelas.",
    heroEyebrow: "Todos os passeios",
    heroTitle: "Três maneiras de navegar conosco",
    heroBody: "Todos os nossos passeios partem do píer em frente ao MooMba Beach Bar a bordo de nossa tradicional escuna de madeira.",
    heroAlt: "A escuna da Flagship Aruba navegando ao largo da costa de Aruba",
    stats: [
      { value: "5 Estrelas", label: "Avaliação Média" },
      { value: "3", label: "Cruzeiros Únicos" },
      { value: "1.000+", label: "Hóspedes Satisfeitos" },
      { value: "3", label: "Locais De Mergulho Premium" },
    ],
    tours: [
      {
        title: "Aventura Matinal",
        tag: "Equipamento Incluído",
        time: "9h às 13h · 4 horas",
        price: "A partir de $98 por adulto",
        body: "Três paradas para mergulho com snorkel, equipamento incluído, bebidas ilimitadas e petiscos caribenhos. Um dia inteiro de aventura antes do almoço.",
        alt: "Hóspedes mergulhando com snorkel ao lado de uma tartaruga marinha em águas turquesa cristalinas",
      },
      {
        title: "Festa Pirata Vespertina",
        tag: "Bar Aberto",
        time: "13h30 às 17h · 3,5 horas",
        price: "A partir de $86 por adulto",
        body: "Duas paradas premium para snorkel, um almoço estilo caribenho, bar aberto, balanço de corda e música ilhéu para uma tarde mais animada.",
        alt: "Um grande grupo de hóspedes comemorando juntos a bordo da escuna",
      },
      {
        title: "Cruzeiro Pôr Do Sol E Estrelas",
        tag: "Coquetéis Premium",
        time: "17h30 às 19h30 · 2 horas",
        price: "A partir de $90 por adulto",
        body: "Bar aberto, petiscos caribenhos, duas paradas para nadar e observação de estrelas enquanto o céu escurece sobre a água.",
        alt: "Um hóspede pula da escuna da Flagship Aruba no oceano",
      },
    ],
    tourDetailsLabel: "Ver Detalhes",
    ctaTitle: "Não sabe qual escolher?",
    ctaBody: "Entre em contato e nossa tripulação ajudará você a escolher o passeio certo para sua viagem.",
    ctaButton: "Fale Conosco",
  },
  se: {
    metaTitle: "Båtturer",
    metaDescription:
      "Tre båtturer från Aruba ombord på vår traditionella träskonare: Morgonäventyret, Eftermiddagens Piratfest och Solnedgång Och Stjärnkryssning.",
    heroEyebrow: "Alla turer",
    heroTitle: "Tre sätt att segla med oss",
    heroBody: "Varje tur avgår från piren framför MooMba Beach Bar ombord på vår traditionella träskonare.",
    heroAlt: "Flagship Arubas skonare under segel utanför Arubas kust",
    stats: [
      { value: "5 Stjärnor", label: "Genomsnittligt Betyg" },
      { value: "3", label: "Unika Kryssningar" },
      { value: "1 000+", label: "Nöjda Gäster" },
      { value: "3", label: "Förstklassiga Snorkelplatser" },
    ],
    tours: [
      {
        title: "Morgonäventyret",
        tag: "Utrustning Ingår",
        time: "9 till 13 · 4 timmar",
        price: "Från $98 per vuxen",
        body: "Tre snorkelstopp, utrustning ingår, obegränsat med drycker och karibiska snacks. En hel dag av äventyr före lunch.",
        alt: "Gäster snorklar tillsammans med en havssköldpadda i klart turkosblått vatten",
      },
      {
        title: "Eftermiddagens Piratfest",
        tag: "Fri Bar",
        time: "13:30 till 17 · 3,5 timmar",
        price: "Från $86 per vuxen",
        body: "Två förstklassiga snorkelstopp, en lunch i karibisk stil, fri bar, repgunga och ölandsmusik för en livligare eftermiddag.",
        alt: "En stor grupp gäster jublar tillsammans ombord på skonaren",
      },
      {
        title: "Solnedgång Och Stjärnkryssning",
        tag: "Premiumcocktails",
        time: "17:30 till 19:30 · 2 timmar",
        price: "Från $90 per vuxen",
        body: "Fri bar, karibiska smårätter, två badstopp och stjärnskådning medan himlen mörknar över vattnet.",
        alt: "En gäst hoppar från Flagship Arubas skonare i havet",
      },
    ],
    tourDetailsLabel: "Se Detaljer",
    ctaTitle: "Osäker på vilken du ska välja?",
    ctaBody: "Hör av dig så hjälper vår besättning dig att välja rätt tur för din resa.",
    ctaButton: "Kontakta Oss",
  },
};
