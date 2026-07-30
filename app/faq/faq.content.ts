import type { LocaleCode } from "@/lib/i18n";

export type FaqCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
};

export const faqContent: Record<LocaleCode, FaqCopy> = {
  en: {
    metaTitle: "FAQ",
    metaDescription: "Answers to common questions about booking a Flagship Aruba boat tour.",
    heroEyebrow: "Before you book",
    heroTitle: "Frequently Asked Questions",
    heroBody: "Everything you need to know before stepping aboard.",
    ctaTitle: "Still have questions?",
    ctaBody: "Our crew is happy to help by phone, email or WhatsApp.",
    ctaButton: "Contact Us",
  },
  es: {
    metaTitle: "Preguntas Frecuentes",
    metaDescription:
      "Respuestas a las preguntas más comunes sobre cómo reservar una excursión en barco con Flagship Aruba.",
    heroEyebrow: "Antes de reservar",
    heroTitle: "Preguntas Frecuentes",
    heroBody: "Todo lo que necesitas saber antes de subir a bordo.",
    ctaTitle: "¿Todavía tienes preguntas?",
    ctaBody: "Nuestra tripulación estará encantada de ayudarte por teléfono, correo electrónico o WhatsApp.",
    ctaButton: "Contáctanos",
  },
  nl: {
    metaTitle: "Veelgestelde Vragen",
    metaDescription: "Antwoorden op veelgestelde vragen over het boeken van een boottocht bij Flagship Aruba.",
    heroEyebrow: "Voor je boekt",
    heroTitle: "Veelgestelde Vragen",
    heroBody: "Alles wat u moet weten voordat u aan boord gaat.",
    ctaTitle: "Nog vragen?",
    ctaBody: "Onze bemanning helpt u graag telefonisch, per e-mail of via WhatsApp.",
    ctaButton: "Neem Contact Op",
  },
  de: {
    metaTitle: "Häufig Gestellte Fragen",
    metaDescription: "Antworten auf häufige Fragen zur Buchung einer Bootstour bei Flagship Aruba.",
    heroEyebrow: "Vor der Buchung",
    heroTitle: "Häufig Gestellte Fragen",
    heroBody: "Alles, was Sie wissen müssen, bevor Sie an Bord gehen.",
    ctaTitle: "Noch Fragen?",
    ctaBody: "Unsere Crew hilft Ihnen gerne per Telefon, E-Mail oder WhatsApp.",
    ctaButton: "Kontaktieren Sie Uns",
  },
  it: {
    metaTitle: "Domande Frequenti",
    metaDescription:
      "Risposte alle domande più comuni sulla prenotazione di un'escursione in barca con Flagship Aruba.",
    heroEyebrow: "Prima di prenotare",
    heroTitle: "Domande Frequenti",
    heroBody: "Tutto ciò che devi sapere prima di salire a bordo.",
    ctaTitle: "Hai ancora domande?",
    ctaBody: "Il nostro equipaggio è felice di aiutarti telefonicamente, via email o WhatsApp.",
    ctaButton: "Contattaci",
  },
  br: {
    metaTitle: "Perguntas Frequentes",
    metaDescription:
      "Respostas para as perguntas mais comuns sobre como reservar um passeio de barco com a Flagship Aruba.",
    heroEyebrow: "Antes de reservar",
    heroTitle: "Perguntas Frequentes",
    heroBody: "Tudo o que você precisa saber antes de embarcar.",
    ctaTitle: "Ainda tem dúvidas?",
    ctaBody: "Nossa tripulação terá prazer em ajudar por telefone, e-mail ou WhatsApp.",
    ctaButton: "Fale Conosco",
  },
  se: {
    metaTitle: "Vanliga Frågor",
    metaDescription: "Svar på vanliga frågor om att boka en båttur med Flagship Aruba.",
    heroEyebrow: "Innan du bokar",
    heroTitle: "Vanliga Frågor",
    heroBody: "Allt du behöver veta innan du går ombord.",
    ctaTitle: "Har du fler frågor?",
    ctaBody: "Vår besättning hjälper gärna till via telefon, e-post eller WhatsApp.",
    ctaButton: "Kontakta Oss",
  },
};
