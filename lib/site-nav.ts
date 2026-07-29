import { type LocaleCode, localizePath } from "@/lib/i18n";

/**
 * Flagship Aruba menu structure: boat tours hub with the 2 real cruises,
 * snorkel sites, and about. Labels are translated per locale below; hrefs
 * are locale-prefixed at render time via localizePath().
 */
export type NavChild = { key: string; href: string };
export type NavItem = { key: string; href: string; children: NavChild[] };

const primaryNavBase: NavItem[] = [
  {
    key: "boat-tours",
    href: "/boat-tours",
    children: [
      { key: "morning-splash", href: "/boat-tours/morning-splash-adventure" },
      { key: "afternoon-pirate", href: "/boat-tours/afternoon-pirate-party" },
      { key: "sunset-stars", href: "/boat-tours/sunset-stars-cruise" },
    ],
  },
  {
    key: "snorkel-sites",
    href: "/snorkel-sites",
    children: [
      { key: "boca-catalina", href: "/snorkel-sites/boca-catalina" },
      { key: "malmok-beach", href: "/snorkel-sites/malmok-beach" },
      { key: "antilla-wreck", href: "/snorkel-sites/antilla-wreck" },
    ],
  },
  {
    key: "about",
    href: "/about",
    children: [
      { key: "our-story", href: "/about#our-story" },
      { key: "the-restoration", href: "/about#the-restoration" },
    ],
  },
  {
    key: "private-charters",
    href: "/private-charters",
    children: [
      { key: "reviews", href: "/reviews" },
      { key: "contact", href: "/contact" },
    ],
  },
];

const secondaryNavBase: NavChild[] = [
  { key: "gallery", href: "/gallery" },
  { key: "reviews", href: "/reviews" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];

const footerInfoBase: NavChild[] = [
  { key: "blog", href: "/blog" },
  { key: "deals", href: "/deals" },
  { key: "reviews", href: "/reviews" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];

const footerMenuBase: NavChild[] = [
  { key: "boat-tours", href: "/boat-tours" },
  { key: "morning-splash", href: "/boat-tours/morning-splash-adventure" },
  { key: "afternoon-pirate", href: "/boat-tours/afternoon-pirate-party" },
  { key: "sunset-stars", href: "/boat-tours/sunset-stars-cruise" },
  { key: "snorkel-sites", href: "/snorkel-sites" },
  { key: "about", href: "/about" },
];

const bookNowBase: NavChild = { key: "book-now", href: "/book-now" };

const legalNavBase: NavChild[] = [
  { key: "terms", href: "/terms" },
  { key: "privacy", href: "/privacy-policy" },
];

/** label translations, keyed by nav item key */
const t: Record<string, Record<LocaleCode, string>> = {
  "boat-tours": { en: "Boat Tours", es: "Excursiones En Barco", nl: "Boottochten", de: "Bootstouren", it: "Escursioni In Barca", br: "Passeios De Barco", se: "Båtturer" },
  "snorkel-sites": { en: "Snorkel Sites", es: "Sitios De Snorkel", nl: "Snorkelplekken", de: "Schnorchelplätze", it: "Siti Per Snorkeling", br: "Locais De Mergulho", se: "Snorkelplatser" },
  about: { en: "About Us", es: "Sobre Nosotros", nl: "Over Ons", de: "Über Uns", it: "Chi Siamo", br: "Sobre Nós", se: "Om Oss" },
  "our-story": { en: "Our Story", es: "Nuestra Historia", nl: "Ons Verhaal", de: "Unsere Geschichte", it: "La Nostra Storia", br: "Nossa História", se: "Vår Historia" },
  "the-restoration": { en: "The Restoration", es: "La Restauración", nl: "De Restauratie", de: "Die Restaurierung", it: "Il Restauro", br: "A Restauração", se: "Restaureringen" },
  "private-charters": { en: "Private Charters", es: "Chárteres Privados", nl: "Privé Charters", de: "Private Charter", it: "Noleggi Privati", br: "Fretamentos Privados", se: "Privata Charter" },
  reviews: { en: "Reviews", es: "Opiniones", nl: "Beoordelingen", de: "Bewertungen", it: "Recensioni", br: "Avaliações", se: "Recensioner" },

  "morning-splash": { en: "Morning Splash Adventure", es: "Aventura Matutina", nl: "Ochtend Avontuur", de: "Morgenabenteuer", it: "Avventura Del Mattino", br: "Aventura Matinal", se: "Morgonäventyr" },
  "afternoon-pirate": { en: "Afternoon Pirate Party", es: "Fiesta Pirata Vespertina", nl: "Middag Piratenfeest", de: "Nachmittags-Piratenparty", it: "Festa Pirata Del Pomeriggio", br: "Festa Pirata Vespertina", se: "Eftermiddagens Piratfest" },
  "sunset-stars": { en: "Sunset & Stars Cruise", es: "Crucero Atardecer Y Estrellas", nl: "Zonsondergang & Sterrencruise", de: "Sonnenuntergangs- Und Sternenfahrt", it: "Crociera Tramonto E Stelle", br: "Cruzeiro Pôr Do Sol E Estrelas", se: "Solnedgång Och Stjärnkryssning" },

  "boca-catalina": { en: "Boca Catalina", es: "Boca Catalina", nl: "Boca Catalina", de: "Boca Catalina", it: "Boca Catalina", br: "Boca Catalina", se: "Boca Catalina" },
  "malmok-beach": { en: "Malmok Beach", es: "Malmok Beach", nl: "Malmok Beach", de: "Malmok Beach", it: "Malmok Beach", br: "Malmok Beach", se: "Malmok Beach" },
  "antilla-wreck": { en: "SS Antilla Shipwreck", es: "Naufragio Del SS Antilla", nl: "Scheepswrak SS Antilla", de: "Schiffswrack SS Antilla", it: "Relitto SS Antilla", br: "Naufrágio Do SS Antilla", se: "Vraket SS Antilla" },

  gallery: { en: "Gallery", es: "Galería", nl: "Galerij", de: "Galerie", it: "Galleria", br: "Galeria", se: "Galleri" },
  blog: { en: "Blog", es: "Blog", nl: "Blog", de: "Blog", it: "Blog", br: "Blog", se: "Blogg" },
  deals: { en: "Deals", es: "Ofertas", nl: "Aanbiedingen", de: "Angebote", it: "Offerte", br: "Promoções", se: "Erbjudanden" },
  faq: { en: "FAQ", es: "Preguntas Frecuentes", nl: "Veelgestelde Vragen", de: "Häufige Fragen", it: "Domande Frequenti", br: "Perguntas Frequentes", se: "Vanliga Frågor" },
  contact: { en: "Contact", es: "Contacto", nl: "Contact", de: "Kontakt", it: "Contatti", br: "Contato", se: "Kontakt" },

  "book-now": { en: "Book Now", es: "Reservar Ahora", nl: "Nu Boeken", de: "Jetzt Buchen", it: "Prenota Ora", br: "Reserve Agora", se: "Boka Nu" },
  terms: { en: "Terms & Conditions", es: "Términos Y Condiciones", nl: "Algemene Voorwaarden", de: "AGB", it: "Termini E Condizioni", br: "Termos E Condições", se: "Villkor" },
  privacy: { en: "Privacy Policy", es: "Política De Privacidad", nl: "Privacybeleid", de: "Datenschutzrichtlinie", it: "Informativa Sulla Privacy", br: "Política De Privacidade", se: "Integritetspolicy" },
};

const label = (key: string, locale: LocaleCode) => t[key]?.[locale] ?? t[key]?.en ?? key;

export function getPrimaryNav(locale: LocaleCode) {
  return primaryNavBase.map((item) => ({
    label: label(item.key, locale),
    href: localizePath(locale, item.href),
    children: item.children.map((c) => ({
      label: label(c.key, locale),
      href: localizePath(locale, c.href),
    })),
  }));
}

export function getSecondaryNav(locale: LocaleCode) {
  return secondaryNavBase.map((c) => ({ label: label(c.key, locale), href: localizePath(locale, c.href) }));
}

export function getFooterMenu(locale: LocaleCode) {
  return footerMenuBase.map((c) => ({ label: label(c.key, locale), href: localizePath(locale, c.href) }));
}

export function getFooterInfo(locale: LocaleCode) {
  return footerInfoBase.map((c) => ({ label: label(c.key, locale), href: localizePath(locale, c.href) }));
}

export function getBookNow(locale: LocaleCode) {
  return { label: label(bookNowBase.key, locale), href: localizePath(locale, bookNowBase.href) };
}

export function getLegalNav(locale: LocaleCode) {
  return legalNavBase.map((c) => ({ label: label(c.key, locale), href: localizePath(locale, c.href) }));
}

// Backwards-compatible English-only exports (used by pages that don't yet pass a locale).
export const primaryNav = getPrimaryNav("en");
export const secondaryNav = getSecondaryNav("en");
export const bookNow = getBookNow("en");
export const legalNav = getLegalNav("en");
