import { type LocaleCode, localizePath } from "@/lib/i18n";

/**
 * Real Aruba.com menu structure (mirrors the source site's nav + footer exactly).
 * Sub-items point to the anchor section on their hub page, or to a real
 * dedicated sub-page (Why Aruba's children). Labels are translated per locale
 * below; hrefs are locale-prefixed at render time via localizePath().
 */
export type NavChild = { key: string; href: string };
export type NavItem = { key: string; href: string; children: NavChild[] };

const primaryNavBase: NavItem[] = [
  {
    key: "why-aruba",
    href: "/why-aruba",
    children: [
      { key: "adventure", href: "/why-aruba/adventure" },
      { key: "romance", href: "/why-aruba/romance" },
      { key: "culture", href: "/why-aruba/culture" },
      { key: "wellness", href: "/why-aruba/wellness" },
      { key: "eat-drink", href: "/why-aruba/eat-and-drink" },
      { key: "families", href: "/why-aruba/families" },
      { key: "weddings", href: "/why-aruba/weddings" },
    ],
  },
  {
    key: "things-to-do",
    href: "/things-to-do",
    children: [
      { key: "beaches-coves", href: "/things-to-do#beaches-coves" },
      { key: "on-the-water", href: "/things-to-do#on-the-water" },
      { key: "natural-wonders", href: "/things-to-do#natural-wonders" },
      { key: "dining", href: "/things-to-do#dining" },
      { key: "nightlife", href: "/things-to-do#nightlife" },
      { key: "arts-culture", href: "/things-to-do#arts-culture" },
      { key: "sightseeing-tours", href: "/things-to-do#sightseeing-tours" },
      { key: "shopping", href: "/things-to-do#shopping" },
      { key: "wellbeing", href: "/things-to-do#wellbeing" },
      { key: "sports-golf", href: "/things-to-do#sports-golf" },
      { key: "calendar", href: "/things-to-do#calendar" },
      { key: "itineraries", href: "/things-to-do#itineraries" },
    ],
  },
  {
    key: "plan-your-visit",
    href: "/plan-your-visit",
    children: [
      { key: "hotels-resorts", href: "/plan-your-visit#hotels-resorts" },
      { key: "vacation-rentals", href: "/plan-your-visit#vacation-rentals" },
      { key: "timeshares", href: "/plan-your-visit#timeshares" },
      { key: "all-inclusive", href: "/plan-your-visit#all-inclusive" },
      { key: "getting-to-aruba", href: "/plan-your-visit#getting-to-aruba" },
      { key: "getting-around", href: "/plan-your-visit#getting-around" },
      { key: "by-cruise", href: "/plan-your-visit#by-cruise" },
      { key: "vacations", href: "/plan-your-visit#vacations" },
      { key: "tips", href: "/plan-your-visit#tips" },
      { key: "guest-services", href: "/plan-your-visit#guest-services" },
    ],
  },
  {
    key: "our-island",
    href: "/our-island",
    children: [
      { key: "history-culture", href: "/our-island#history-culture" },
      { key: "island-facts", href: "/our-island#island-facts" },
      { key: "regions", href: "/our-island#regions" },
      { key: "map", href: "/our-island#map" },
    ],
  },
];

const secondaryNavBase: NavChild[] = [
  { key: "live", href: "/live-webcams" },
  { key: "deals", href: "/deals" },
  { key: "blog", href: "/blog" },
  { key: "news", href: "/news" },
];

const bookNowBase: NavChild = { key: "book-now", href: "/book-now" };

const legalNavBase: NavChild[] = [
  { key: "terms", href: "/terms" },
  { key: "privacy", href: "/privacy-policy" },
];

/** label translations, keyed by nav item key */
const t: Record<string, Record<LocaleCode, string>> = {
  "why-aruba": { en: "Why Aruba", es: "Por Qué Aruba", nl: "Waarom Aruba", de: "Warum Aruba", it: "Perché Aruba", br: "Por Que Aruba", se: "Varför Aruba" },
  "things-to-do": { en: "Things To Do", es: "Qué Hacer", nl: "Wat Te Doen", de: "Was Zu Tun Ist", it: "Cosa Fare", br: "O Que Fazer", se: "Saker Att Göra" },
  "plan-your-visit": { en: "Plan Your Visit", es: "Planifica Tu Visita", nl: "Plan Je Bezoek", de: "Besuch Planen", it: "Pianifica La Visita", br: "Planeje Sua Visita", se: "Planera Ditt Besök" },
  "our-island": { en: "Our Island", es: "Nuestra Isla", nl: "Ons Eiland", de: "Unsere Insel", it: "La Nostra Isola", br: "Nossa Ilha", se: "Vår Ö" },

  adventure: { en: "Adventure", es: "Aventura", nl: "Avontuur", de: "Abenteuer", it: "Avventura", br: "Aventura", se: "Äventyr" },
  romance: { en: "Romance", es: "Romance", nl: "Romantiek", de: "Romantik", it: "Romanticismo", br: "Romance", se: "Romantik" },
  culture: { en: "Culture", es: "Cultura", nl: "Cultuur", de: "Kultur", it: "Cultura", br: "Cultura", se: "Kultur" },
  wellness: { en: "Wellness", es: "Bienestar", nl: "Welzijn", de: "Wellness", it: "Benessere", br: "Bem-estar", se: "Välbefinnande" },
  "eat-drink": { en: "Eat & Drink", es: "Comer Y Beber", nl: "Eten & Drinken", de: "Essen & Trinken", it: "Mangiare E Bere", br: "Comer E Beber", se: "Mat & Dryck" },
  families: { en: "Families", es: "Familias", nl: "Families", de: "Familien", it: "Famiglie", br: "Famílias", se: "Familjer" },
  weddings: { en: "Weddings", es: "Bodas", nl: "Bruiloften", de: "Hochzeiten", it: "Matrimoni", br: "Casamentos", se: "Bröllop" },

  "beaches-coves": { en: "Beaches & coves", es: "Playas Y Calas", nl: "Stranden & Baaien", de: "Strände & Buchten", it: "Spiagge E Baie", br: "Praias E Enseadas", se: "Stränder & Vikar" },
  "on-the-water": { en: "On the water", es: "En El Agua", nl: "Op Het Water", de: "Auf Dem Wasser", it: "Sull'acqua", br: "Na Água", se: "På Vattnet" },
  "natural-wonders": { en: "Natural Wonders", es: "Maravillas Naturales", nl: "Natuurwonderen", de: "Naturwunder", it: "Meraviglie Naturali", br: "Maravilhas Naturais", se: "Naturunder" },
  dining: { en: "Dining", es: "Gastronomía", nl: "Dineren", de: "Gastronomie", it: "Ristorazione", br: "Gastronomia", se: "Matupplevelser" },
  nightlife: { en: "Nightlife", es: "Vida Nocturna", nl: "Nachtleven", de: "Nachtleben", it: "Vita Notturna", br: "Vida Noturna", se: "Nattliv" },
  "arts-culture": { en: "Arts & Culture", es: "Arte Y Cultura", nl: "Kunst & Cultuur", de: "Kunst & Kultur", it: "Arte E Cultura", br: "Arte E Cultura", se: "Konst & Kultur" },
  "sightseeing-tours": { en: "Sightseeing & Tours", es: "Turismo Y Excursiones", nl: "Sightseeing & Tours", de: "Sightseeing & Touren", it: "Visite Ed Escursioni", br: "Turismo E Passeios", se: "Sightseeing & Turer" },
  shopping: { en: "Shopping", es: "Compras", nl: "Winkelen", de: "Einkaufen", it: "Shopping", br: "Compras", se: "Shopping" },
  wellbeing: { en: "Wellbeing", es: "Bienestar", nl: "Welzijn", de: "Wohlbefinden", it: "Benessere", br: "Bem-estar", se: "Välmående" },
  "sports-golf": { en: "Sports & Golf", es: "Deportes Y Golf", nl: "Sport & Golf", de: "Sport & Golf", it: "Sport E Golf", br: "Esportes E Golfe", se: "Sport & Golf" },
  calendar: { en: "Calendar of events", es: "Calendario De Eventos", nl: "Evenementenkalender", de: "Veranstaltungskalender", it: "Calendario Eventi", br: "Calendário De Eventos", se: "Evenemangskalender" },
  itineraries: { en: "Itineraries", es: "Itinerarios", nl: "Reisroutes", de: "Reiserouten", it: "Itinerari", br: "Roteiros", se: "Resrutter" },

  "hotels-resorts": { en: "Hotels & Resorts", es: "Hoteles Y Resorts", nl: "Hotels & Resorts", de: "Hotels & Resorts", it: "Hotel E Resort", br: "Hotéis E Resorts", se: "Hotell & Resorts" },
  "vacation-rentals": { en: "Vacation Rentals", es: "Alquileres Vacacionales", nl: "Vakantieverhuur", de: "Ferienunterkünfte", it: "Case Vacanza", br: "Aluguéis De Temporada", se: "Semesterboenden" },
  timeshares: { en: "Timeshares", es: "Multipropiedad", nl: "Timeshares", de: "Timesharing", it: "Multiproprietà", br: "Time-share", se: "Delat Ägande" },
  "all-inclusive": { en: "All-inclusive", es: "Todo Incluido", nl: "All-inclusive", de: "All-Inclusive", it: "Tutto Incluso", br: "Tudo Incluído", se: "Allt Inkluderat" },
  "getting-to-aruba": { en: "Getting to Aruba", es: "Cómo Llegar A Aruba", nl: "Naar Aruba Reizen", de: "Anreise Nach Aruba", it: "Come Arrivare Ad Aruba", br: "Como Chegar A Aruba", se: "Ta Dig Till Aruba" },
  "getting-around": { en: "Getting around Aruba", es: "Moverse Por Aruba", nl: "Rondreizen Op Aruba", de: "Fortbewegung Auf Aruba", it: "Muoversi Ad Aruba", br: "Como Se Locomover Em Aruba", se: "Ta Dig Runt På Aruba" },
  "by-cruise": { en: "Aruba by cruise", es: "Aruba En Crucero", nl: "Aruba Per Cruiseschip", de: "Aruba Per Kreuzfahrt", it: "Aruba In Crociera", br: "Aruba De Cruzeiro", se: "Aruba Med Kryssning" },
  vacations: { en: "Aruba vacations", es: "Vacaciones En Aruba", nl: "Vakantie Op Aruba", de: "Aruba-Urlaub", it: "Vacanze Ad Aruba", br: "Férias Em Aruba", se: "Semester På Aruba" },
  tips: { en: "Tips for visitors", es: "Consejos Para Visitantes", nl: "Tips Voor Bezoekers", de: "Tipps Für Besucher", it: "Consigli Per I Visitatori", br: "Dicas Para Visitantes", se: "Tips För Besökare" },
  "guest-services": { en: "Guest Services", es: "Servicios Al Huésped", nl: "Gastenservice", de: "Gästeservice", it: "Servizi Per Gli Ospiti", br: "Serviços Ao Hóspede", se: "Gästservice" },

  "history-culture": { en: "History & culture", es: "Historia Y Cultura", nl: "Geschiedenis & Cultuur", de: "Geschichte & Kultur", it: "Storia E Cultura", br: "História E Cultura", se: "Historia & Kultur" },
  "island-facts": { en: "Island facts", es: "Datos De La Isla", nl: "Eilandfeiten", de: "Inselfakten", it: "Curiosità Sull'isola", br: "Curiosidades Da Ilha", se: "Öfakta" },
  regions: { en: "Regions", es: "Regiones", nl: "Regio's", de: "Regionen", it: "Regioni", br: "Regiões", se: "Regioner" },
  map: { en: "360 map", es: "Mapa 360", nl: "360-Kaart", de: "360-Karte", it: "Mappa 360", br: "Mapa 360", se: "360-Karta" },

  live: { en: "Live", es: "En Vivo", nl: "Live", de: "Live", it: "Diretta", br: "Ao Vivo", se: "Live" },
  deals: { en: "Deals & Offers", es: "Ofertas", nl: "Aanbiedingen", de: "Angebote", it: "Offerte", br: "Ofertas", se: "Erbjudanden" },
  blog: { en: "Blog", es: "Blog", nl: "Blog", de: "Blog", it: "Blog", br: "Blog", se: "Blogg" },
  news: { en: "News", es: "Noticias", nl: "Nieuws", de: "Neuigkeiten", it: "Notizie", br: "Notícias", se: "Nyheter" },

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
