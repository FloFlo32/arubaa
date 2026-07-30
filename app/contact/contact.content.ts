import type { LocaleCode } from "@/lib/i18n";

export type ContactCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  channelLabels: {
    call: string;
    whatsapp: string;
    email: string;
    find: string;
  };
  whatsappValue: string;
  bookButton: string;
};

export const contactContent: Record<LocaleCode, ContactCopy> = {
  en: {
    metaTitle: "Contact",
    metaDescription: "Get in touch with Flagship Aruba: phone, WhatsApp, email or find us at MooMba Beach Bar.",
    heroEyebrow: "Get in touch",
    heroTitle: "Get in Touch",
    heroBody:
      "How can we help you set sail on your perfect Aruba tour? Let Flagship Aruba be your trusted crew for unforgettable adventures.",
    channelLabels: {
      call: "Call us",
      whatsapp: "WhatsApp",
      email: "Email us",
      find: "Find us",
    },
    whatsappValue: "Chat with our crew",
    bookButton: "Book Your Adventure Now",
  },
  es: {
    metaTitle: "Contacto",
    metaDescription: "Ponte en contacto con Flagship Aruba: teléfono, WhatsApp, correo electrónico o visítanos en MooMba Beach Bar.",
    heroEyebrow: "Ponte en contacto",
    heroTitle: "Ponte en Contacto",
    heroBody:
      "¿Cómo podemos ayudarte a zarpar en tu tour perfecto por Aruba? Deja que Flagship Aruba sea tu tripulación de confianza para aventuras inolvidables.",
    channelLabels: {
      call: "Llámanos",
      whatsapp: "WhatsApp",
      email: "Escríbenos",
      find: "Encuéntranos",
    },
    whatsappValue: "Chatea con nuestra tripulación",
    bookButton: "Reserva Tu Aventura Ahora",
  },
  nl: {
    metaTitle: "Contact",
    metaDescription: "Neem contact op met Flagship Aruba: telefoon, WhatsApp, e-mail of bezoek ons bij MooMba Beach Bar.",
    heroEyebrow: "Neem contact op",
    heroTitle: "Neem Contact Op",
    heroBody:
      "Hoe kunnen we je helpen om aan je perfecte Aruba tour te beginnen? Laat Flagship Aruba je vertrouwde bemanning zijn voor onvergetelijke avonturen.",
    channelLabels: {
      call: "Bel ons",
      whatsapp: "WhatsApp",
      email: "Mail ons",
      find: "Vind ons",
    },
    whatsappValue: "Chat met onze bemanning",
    bookButton: "Boek Nu Je Avontuur",
  },
  de: {
    metaTitle: "Kontakt",
    metaDescription: "Kontaktieren Sie Flagship Aruba: Telefon, WhatsApp, E-Mail oder besuchen Sie uns an der MooMba Beach Bar.",
    heroEyebrow: "Kontaktieren Sie uns",
    heroTitle: "Kontaktieren Sie Uns",
    heroBody:
      "Wie können wir Ihnen helfen, in Ihre perfekte Aruba Tour zu starten? Lassen Sie Flagship Aruba Ihre vertrauenswürdige Crew für unvergessliche Abenteuer sein.",
    channelLabels: {
      call: "Rufen Sie uns an",
      whatsapp: "WhatsApp",
      email: "Schreiben Sie uns",
      find: "Finden Sie uns",
    },
    whatsappValue: "Chatten Sie mit unserer Crew",
    bookButton: "Jetzt Ihr Abenteuer Buchen",
  },
  it: {
    metaTitle: "Contatti",
    metaDescription: "Mettiti in contatto con Flagship Aruba: telefono, WhatsApp, email o vieni a trovarci al MooMba Beach Bar.",
    heroEyebrow: "Mettiti in contatto",
    heroTitle: "Mettiti in Contatto",
    heroBody:
      "Come possiamo aiutarti a salpare per il tuo tour perfetto ad Aruba? Lascia che Flagship Aruba sia il tuo equipaggio di fiducia per avventure indimenticabili.",
    channelLabels: {
      call: "Chiamaci",
      whatsapp: "WhatsApp",
      email: "Scrivici",
      find: "Trovaci",
    },
    whatsappValue: "Chatta con il nostro equipaggio",
    bookButton: "Prenota La Tua Avventura Ora",
  },
  br: {
    metaTitle: "Contato",
    metaDescription: "Entre em contato com a Flagship Aruba: telefone, WhatsApp, email ou nos encontre no MooMba Beach Bar.",
    heroEyebrow: "Entre em contato",
    heroTitle: "Entre em Contato",
    heroBody:
      "Como podemos ajudar você a zarpar no seu passeio perfeito por Aruba? Deixe a Flagship Aruba ser sua tripulação de confiança para aventuras inesquecíveis.",
    channelLabels: {
      call: "Ligue para nós",
      whatsapp: "WhatsApp",
      email: "Envie um email",
      find: "Encontre nos",
    },
    whatsappValue: "Converse com nossa tripulação",
    bookButton: "Reserve Sua Aventura Agora",
  },
  se: {
    metaTitle: "Kontakt",
    metaDescription: "Kom i kontakt med Flagship Aruba: telefon, WhatsApp, e post eller besök oss vid MooMba Beach Bar.",
    heroEyebrow: "Kom i kontakt",
    heroTitle: "Kom i Kontakt",
    heroBody:
      "Hur kan vi hjälpa dig att ge dig ut på din perfekta Aruba tur? Låt Flagship Aruba vara din pålitliga besättning för oförglömliga äventyr.",
    channelLabels: {
      call: "Ring oss",
      whatsapp: "WhatsApp",
      email: "Maila oss",
      find: "Hitta oss",
    },
    whatsappValue: "Chatta med vår besättning",
    bookButton: "Boka Ditt Äventyr Nu",
  },
};
