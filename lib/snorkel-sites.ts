import type { LocaleCode } from "@/lib/i18n";

export const snorkelSites: {
  slug: string;
  title: Record<LocaleCode, string>;
  tagline: Record<LocaleCode, string>;
}[] = [
  {
    slug: "antilla-wreck",
    title: {
      en: "SS Antilla Shipwreck",
      es: "Naufragio SS Antilla",
      nl: "Scheepswrak SS Antilla",
      de: "Schiffswrack SS Antilla",
      it: "Relitto SS Antilla",
      br: "Naufrágio SS Antilla",
      se: "Vraket SS Antilla",
    },
    tagline: {
      en: "Explore the famous WWII German freighter, one of the Caribbean's most iconic wreck dives, home to colorful coral and tropical fish.",
      es: "Explora el famoso carguero alemán de la Segunda Guerra Mundial, una de las inmersiones en naufragios más icónicas del Caribe, hogar de coral colorido y peces tropicales.",
      nl: "Ontdek het beroemde Duitse vrachtschip uit de Tweede Wereldoorlog, een van de meest iconische wrakduiken van het Caribisch gebied, vol kleurrijk koraal en tropische vissen.",
      de: "Entdecken Sie den berühmten deutschen Frachter aus dem Zweiten Weltkrieg, einen der ikonischsten Wracktauchgänge der Karibik, mit farbenfroher Koralle und tropischen Fischen.",
      it: "Esplora il famoso cargo tedesco della Seconda Guerra Mondiale, uno dei relitti più iconici dei Caraibi, popolato da coralli colorati e pesci tropicali.",
      br: "Explore o famoso cargueiro alemão da Segunda Guerra Mundial, um dos mergulhos em naufrágios mais icônicos do Caribe, repleto de corais coloridos e peixes tropicais.",
      se: "Utforska det berömda tyska lastfartyget från andra världskriget, en av Karibiens mest ikoniska vrakdykningar, hem för färgglada koraller och tropiska fiskar.",
    },
  },
  {
    slug: "boca-catalina",
    title: {
      en: "Boca Catalina",
      es: "Boca Catalina",
      nl: "Boca Catalina",
      de: "Boca Catalina",
      it: "Boca Catalina",
      br: "Boca Catalina",
      se: "Boca Catalina",
    },
    tagline: {
      en: "A calm, shallow bay with crystal-clear water perfect for beginners and experienced snorkelers alike, teeming with sea life.",
      es: "Una bahía tranquila y poco profunda con agua cristalina, perfecta tanto para principiantes como para buceadores experimentados, llena de vida marina.",
      nl: "Een rustige, ondiepe baai met kristalhelder water, perfect voor zowel beginners als ervaren snorkelaars, boordevol zeeleven.",
      de: "Eine ruhige, flache Bucht mit kristallklarem Wasser, perfekt für Anfänger und erfahrene Schnorchler gleichermaßen, voller Meereslebewesen.",
      it: "Una baia calma e poco profonda con acque cristalline, perfetta sia per principianti che per snorkelisti esperti, ricca di vita marina.",
      br: "Uma baía calma e rasa com água cristalina, perfeita tanto para iniciantes quanto para praticantes experientes de snorkel, repleta de vida marinha.",
      se: "En lugn, grund vik med kristallklart vatten, perfekt för både nybörjare och erfarna snorklare, full av marint liv.",
    },
  },
  {
    slug: "malmok-reef",
    title: {
      en: "Malmok Reef",
      es: "Arrecife Malmok",
      nl: "Malmok Rif",
      de: "Malmok-Riff",
      it: "Barriera Malmok",
      br: "Recife de Malmok",
      se: "Malmok-revet",
    },
    tagline: {
      en: "Vibrant coral formations and abundant marine life make this one of Aruba's premier snorkeling destinations along the northwest coast.",
      es: "Las vibrantes formaciones de coral y la abundante vida marina hacen de este uno de los mejores destinos de snorkel de Aruba en la costa noroeste.",
      nl: "Levendige koraalformaties en overvloedig zeeleven maken dit een van Aruba's beste snorkelplekken langs de noordwestkust.",
      de: "Lebendige Korallenformationen und reiches Meeresleben machen dies zu einem der besten Schnorchelziele Arubas an der Nordwestküste.",
      it: "Formazioni coralline vivaci e abbondante vita marina rendono questa una delle migliori destinazioni per lo snorkeling di Aruba, lungo la costa nordoccidentale.",
      br: "Formações de coral vibrantes e vida marinha abundante fazem deste um dos principais destinos de snorkel de Aruba, na costa noroeste.",
      se: "Levande korallformationer och rikt marint liv gör detta till en av Arubas främsta snorkeldestinationer längs nordvästkusten.",
    },
  },
];

export type SnorkelSite = (typeof snorkelSites)[number];
