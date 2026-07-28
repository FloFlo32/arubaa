import { type LocaleCode, localizePath } from "@/lib/i18n";

/**
 * Jolly Pirates menu structure: cruises hub with the 4 real trips, snorkel
 * sites, about, and private charters. Labels are translated per locale below;
 * hrefs are locale-prefixed at render time via localizePath().
 */
export type NavChild = { key: string; href: string };
export type NavItem = { key: string; href: string; children: NavChild[] };

const primaryNavBase: NavItem[] = [
  {
    key: "cruises",
    href: "/cruises",
    children: [
      { key: "morning-snorkel", href: "/cruises/morning-snorkeling" },
      { key: "afternoon-snorkel", href: "/cruises/afternoon-snorkeling" },
      { key: "sunset-dinner", href: "/cruises/sunset-dinner-cruise" },
      { key: "sunset-sail", href: "/cruises/sunset-sail" },
    ],
  },
  {
    key: "snorkel-sites",
    href: "/snorkel-sites",
    children: [
      { key: "boca-catalina", href: "/snorkel-sites#boca-catalina" },
      { key: "antilla-wreck", href: "/snorkel-sites#antilla-wreck" },
    ],
  },
  {
    key: "private-charters",
    href: "/private-charters",
    children: [],
  },
  {
    key: "about",
    href: "/about",
    children: [
      { key: "our-story", href: "/about#our-story" },
      { key: "sustainability", href: "/about#sustainability" },
    ],
  },
];

const secondaryNavBase: NavChild[] = [
  { key: "deals", href: "/deals" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];

const bookNowBase: NavChild = { key: "book-now", href: "/book-now" };

const legalNavBase: NavChild[] = [
  { key: "terms", href: "/terms" },
  { key: "privacy", href: "/privacy-policy" },
];

/** label translations, keyed by nav item key */
const t: Record<string, Record<LocaleCode, string>> = {
  cruises: { en: "Cruises", es: "Cruceros", nl: "Cruises", de: "Kreuzfahrten", it: "Crociere", br: "Cruzeiros", se: "Kryssningar" },
  "snorkel-sites": { en: "Snorkel Sites", es: "Sitios De Snorkel", nl: "Snorkelplekken", de: "Schnorchelplätze", it: "Siti Per Snorkeling", br: "Locais De Mergulho", se: "Snorkelplatser" },
  "private-charters": { en: "Private Charters", es: "Chárteres Privados", nl: "Privé Charters", de: "Private Charter", it: "Noleggi Privati", br: "Fretamentos Privados", se: "Privata Charter" },
  about: { en: "About", es: "Sobre Nosotros", nl: "Over Ons", de: "Über Uns", it: "Chi Siamo", br: "Sobre Nós", se: "Om Oss" },

  "morning-snorkel": { en: "Morning Snorkeling Trip", es: "Snorkel Matutino", nl: "Ochtend Snorkeltocht", de: "Schnorchel-Ausflug Am Morgen", it: "Snorkeling Del Mattino", br: "Passeio De Snorkel Matinal", se: "Morgonsnorkling" },
  "afternoon-snorkel": { en: "Afternoon Snorkeling Tour", es: "Snorkel Por La Tarde", nl: "Middag Snorkeltocht", de: "Schnorchel-Tour Am Nachmittag", it: "Snorkeling Del Pomeriggio", br: "Passeio De Snorkel Vespertino", se: "Eftermiddagssnorkling" },
  "sunset-dinner": { en: "Sunset Dinner Cruise", es: "Crucero Cena Al Atardecer", nl: "Zonsondergang Dinercruise", de: "Sonnenuntergangs-Dinnerfahrt", it: "Crociera Cena Al Tramonto", br: "Cruzeiro Jantar Ao Pôr Do Sol", se: "Solnedgångskryssning Med Middag" },
  "sunset-sail": { en: "Sunset Sail", es: "Vela Al Atardecer", nl: "Zonsondergangstocht", de: "Sonnenuntergangsfahrt", it: "Vela Al Tramonto", br: "Vela Ao Pôr Do Sol", se: "Solnedgångssegling" },

  "boca-catalina": { en: "Boca Catalina", es: "Boca Catalina", nl: "Boca Catalina", de: "Boca Catalina", it: "Boca Catalina", br: "Boca Catalina", se: "Boca Catalina" },
  "antilla-wreck": { en: "SS Antilla Shipwreck", es: "Naufragio Del SS Antilla", nl: "Scheepswrak SS Antilla", de: "Schiffswrack SS Antilla", it: "Relitto SS Antilla", br: "Naufrágio Do SS Antilla", se: "Vraket SS Antilla" },

  "our-story": { en: "Our Story", es: "Nuestra Historia", nl: "Ons Verhaal", de: "Unsere Geschichte", it: "La Nostra Storia", br: "Nossa História", se: "Vår Historia" },
  sustainability: { en: "Sustainability", es: "Sostenibilidad", nl: "Duurzaamheid", de: "Nachhaltigkeit", it: "Sostenibilità", br: "Sustentabilidade", se: "Hållbarhet" },

  deals: { en: "Deals", es: "Ofertas", nl: "Aanbiedingen", de: "Angebote", it: "Offerte", br: "Promoções", se: "Erbjudanden" },
  faq: { en: "FAQs", es: "Preguntas Frecuentes", nl: "Veelgestelde Vragen", de: "Häufige Fragen", it: "Domande Frequenti", br: "Perguntas Frequentes", se: "Vanliga Frågor" },
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
