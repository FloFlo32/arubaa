import type { LocaleCode } from "@/lib/i18n";

export type SnorkelSitesCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  cta: string;
  button: string;
};

export const snorkelSitesContent: Record<LocaleCode, SnorkelSitesCopy> = {
  en: {
    metaTitle: "Snorkel Sites",
    metaDescription:
      "Discover Aruba's most beautiful underwater worlds: the SS Antilla shipwreck, Boca Catalina and Malmok Reef.",
    title: "Our Snorkel Sites",
    subtitle: "Discover Aruba's most beautiful underwater worlds.",
    cta: "Ready to explore these sites for yourself?",
    button: "Book Your Snorkel Adventure",
  },
  es: {
    metaTitle: "Sitios De Snorkel",
    metaDescription:
      "Descubre los mundos submarinos más hermosos de Aruba: el naufragio SS Antilla, Boca Catalina y el arrecife Malmok.",
    title: "Nuestros Sitios de Snorkel",
    subtitle: "Descubre los mundos submarinos más hermosos de Aruba.",
    cta: "¿Listo para explorar estos sitios tú mismo?",
    button: "Reserva Tu Aventura de Snorkel",
  },
  nl: {
    metaTitle: "Snorkelplekken",
    metaDescription:
      "Ontdek Aruba's mooiste onderwaterwerelden: het scheepswrak SS Antilla, Boca Catalina en het Malmok-rif.",
    title: "Onze Snorkelplekken",
    subtitle: "Ontdek Aruba's mooiste onderwaterwerelden.",
    cta: "Klaar om deze plekken zelf te ontdekken?",
    button: "Boek Je Snorkelavontuur",
  },
  de: {
    metaTitle: "Schnorchelplätze",
    metaDescription:
      "Entdecken Sie Arubas schönste Unterwasserwelten: das Schiffswrack SS Antilla, Boca Catalina und das Malmok-Riff.",
    title: "Unsere Schnorchelplätze",
    subtitle: "Entdecken Sie Arubas schönste Unterwasserwelten.",
    cta: "Bereit, diese Orte selbst zu entdecken?",
    button: "Buchen Sie Ihr Schnorchelabenteuer",
  },
  it: {
    metaTitle: "Siti Per Snorkeling",
    metaDescription:
      "Scopri i mondi sottomarini più belli di Aruba: il relitto SS Antilla, Boca Catalina e la barriera di Malmok.",
    title: "I Nostri Siti Per Snorkeling",
    subtitle: "Scopri i mondi sottomarini più belli di Aruba.",
    cta: "Pronto a esplorare questi siti di persona?",
    button: "Prenota La Tua Avventura Di Snorkeling",
  },
  br: {
    metaTitle: "Locais De Mergulho",
    metaDescription:
      "Descubra os mais belos mundos subaquáticos de Aruba: o naufrágio SS Antilla, Boca Catalina e o recife de Malmok.",
    title: "Nossos Locais De Mergulho",
    subtitle: "Descubra os mais belos mundos subaquáticos de Aruba.",
    cta: "Pronto para explorar esses locais você mesmo?",
    button: "Reserve Sua Aventura De Snorkel",
  },
  se: {
    metaTitle: "Snorkelplatser",
    metaDescription:
      "Upptäck Arubas vackraste undervattensvärldar: vraket SS Antilla, Boca Catalina och Malmok-revet.",
    title: "Våra Snorkelplatser",
    subtitle: "Upptäck Arubas vackraste undervattensvärldar.",
    cta: "Redo att utforska dessa platser själv?",
    button: "Boka Ditt Snorkeläventyr",
  },
};
