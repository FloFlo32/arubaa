import type { LocaleCode } from "@/lib/i18n";

export type AboutCopy = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  storyEyebrow: string;
  storyTitle: string;
  storyParagraph1: string;
  storyParagraph2: string;
  valuesBadge: string;
  valuesTitle: string;
  values: { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const aboutContent: Record<LocaleCode, AboutCopy> = {
  en: {
    metaTitle: "About Us",
    metaDescription:
      "Flagship Aruba delivers a memorable mix of adventure, snorkeling, and laid-back fun aboard a charming schooner.",
    heroEyebrow: "Our story",
    heroTitle: "From childhood joke to real pirate ship",
    heroBody: "Three friends with a shared love of the ocean turned an old joke into Flagship Aruba.",
    storyEyebrow: "Our story",
    storyTitle: "Flagship Aruba",
    storyParagraph1:
      "Flagship Aruba delivers a memorable mix of adventure, snorkeling, and laid-back fun aboard a charming schooner. We're proud to be one of Aruba's top-rated boat tour operators, offering guests an authentic Caribbean experience with premium snorkeling spots, an open bar, and unforgettable entertainment.",
    storyParagraph2: "All of our cruises depart from the pier in front of MooMba Beach Bar on Palm Beach.",
    valuesBadge: "What sets us apart",
    valuesTitle: "The details that matter",
    values: [
      {
        title: "Authentic Adventures",
        body: "We sail aboard a charming schooner, delivering an experience you won't find anywhere else in Aruba.",
      },
      {
        title: "Passionate Crew",
        body: "Our friendly, witty crew makes every guest feel like family with their warmth, humor, and deep love for the sea.",
      },
      {
        title: "Unforgettable Memories",
        body: "From snorkeling pristine reefs to rope-swinging into turquoise waters, we create moments that last a lifetime.",
      },
    ],
    ctaTitle: "Come sail with us",
    ctaBody: "See all three boat tours and find the trip that fits your trip.",
    ctaPrimary: "See Boat Tours",
    ctaSecondary: "Contact Us",
  },
  es: {
    metaTitle: "Sobre Nosotros",
    metaDescription:
      "Flagship Aruba ofrece una mezcla inolvidable de aventura, snorkel y diversión relajada a bordo de una encantadora goleta.",
    heroEyebrow: "Nuestra historia",
    heroTitle: "De broma de infancia a verdadero barco pirata",
    heroBody: "Tres amigos con un amor compartido por el mar convirtieron una vieja broma en Flagship Aruba.",
    storyEyebrow: "Nuestra historia",
    storyTitle: "Flagship Aruba",
    storyParagraph1:
      "Flagship Aruba ofrece una mezcla inolvidable de aventura, snorkel y diversión relajada a bordo de una encantadora goleta. Estamos orgullosos de ser uno de los operadores de excursiones en barco mejor calificados de Aruba, ofreciendo a los huéspedes una auténtica experiencia caribeña con sitios de snorkel de primera, barra libre y entretenimiento inolvidable.",
    storyParagraph2:
      "Todos nuestros cruceros zarpan desde el muelle frente a MooMba Beach Bar en Palm Beach.",
    valuesBadge: "Lo que nos distingue",
    valuesTitle: "Los detalles que importan",
    values: [
      {
        title: "Aventuras Auténticas",
        body: "Navegamos a bordo de una encantadora goleta, ofreciendo una experiencia que no encontrarás en ningún otro lugar de Aruba.",
      },
      {
        title: "Tripulación Apasionada",
        body: "Nuestra tripulación amigable e ingeniosa hace que cada huésped se sienta como en familia con su calidez, humor y profundo amor por el mar.",
      },
      {
        title: "Recuerdos Inolvidables",
        body: "Desde bucear en arrecifes prístinos hasta lanzarse con la cuerda a las aguas turquesas, creamos momentos que duran toda la vida.",
      },
    ],
    ctaTitle: "Navega con nosotros",
    ctaBody: "Descubre nuestras tres excursiones en barco y encuentra el viaje perfecto para ti.",
    ctaPrimary: "Ver Excursiones",
    ctaSecondary: "Contáctanos",
  },
  nl: {
    metaTitle: "Over Ons",
    metaDescription:
      "Flagship Aruba biedt een onvergetelijke mix van avontuur, snorkelen en ontspannen plezier aan boord van een charmante schoener.",
    heroEyebrow: "Ons verhaal",
    heroTitle: "Van jeugdgrap tot echt piratenschip",
    heroBody: "Drie vrienden met een gedeelde liefde voor de zee maakten van een oude grap Flagship Aruba.",
    storyEyebrow: "Ons verhaal",
    storyTitle: "Flagship Aruba",
    storyParagraph1:
      "Flagship Aruba biedt een onvergetelijke mix van avontuur, snorkelen en ontspannen plezier aan boord van een charmante schoener. We zijn er trots op een van Aruba's best beoordeelde bootverhuurders te zijn, met een authentieke Caribische ervaring, topsnorkelplekken, een open bar en onvergetelijk entertainment.",
    storyParagraph2:
      "Al onze cruises vertrekken vanaf de pier voor MooMba Beach Bar op Palm Beach.",
    valuesBadge: "Wat ons onderscheidt",
    valuesTitle: "De details die ertoe doen",
    values: [
      {
        title: "Authentieke Avonturen",
        body: "We varen aan boord van een charmante schoener en bieden een ervaring die u nergens anders op Aruba vindt.",
      },
      {
        title: "Gepassioneerde Bemanning",
        body: "Onze vriendelijke, geestige bemanning laat elke gast zich als familie voelen met hun warmte, humor en diepe liefde voor de zee.",
      },
      {
        title: "Onvergetelijke Herinneringen",
        body: "Van snorkelen bij ongerepte riffen tot van het touw zwaaien in turquoise water, wij creëren momenten die een leven lang meegaan.",
      },
    ],
    ctaTitle: "Vaar met ons mee",
    ctaBody: "Bekijk al onze drie boottochten en vind de trip die bij je past.",
    ctaPrimary: "Bekijk Boottochten",
    ctaSecondary: "Neem Contact Op",
  },
  de: {
    metaTitle: "Über Uns",
    metaDescription:
      "Flagship Aruba bietet eine unvergessliche Mischung aus Abenteuer, Schnorcheln und entspanntem Spaß an Bord eines charmanten Schoners.",
    heroEyebrow: "Unsere Geschichte",
    heroTitle: "Vom Kindheitswitz zum echten Piratenschiff",
    heroBody: "Drei Freunde mit einer gemeinsamen Liebe zum Meer machten aus einem alten Witz Flagship Aruba.",
    storyEyebrow: "Unsere Geschichte",
    storyTitle: "Flagship Aruba",
    storyParagraph1:
      "Flagship Aruba bietet eine unvergessliche Mischung aus Abenteuer, Schnorcheln und entspanntem Spaß an Bord eines charmanten Schoners. Wir sind stolz darauf, einer von Arubas bestbewerteten Bootstour-Anbietern zu sein und bieten Gästen ein authentisches karibisches Erlebnis mit erstklassigen Schnorchelplätzen, einer offenen Bar und unvergesslicher Unterhaltung.",
    storyParagraph2:
      "Alle unsere Kreuzfahrten starten am Pier vor der MooMba Beach Bar am Palm Beach.",
    valuesBadge: "Was uns auszeichnet",
    valuesTitle: "Die Details, die zählen",
    values: [
      {
        title: "Authentische Abenteuer",
        body: "Wir segeln an Bord eines charmanten Schoners und bieten ein Erlebnis, das man sonst nirgendwo in Aruba findet.",
      },
      {
        title: "Leidenschaftliche Crew",
        body: "Unsere freundliche, witzige Crew lässt jeden Gast mit ihrer Wärme, ihrem Humor und ihrer tiefen Liebe zum Meer wie Familie fühlen.",
      },
      {
        title: "Unvergessliche Erinnerungen",
        body: "Vom Schnorcheln an unberührten Riffen bis zum Seilschaukeln ins türkisfarbene Wasser schaffen wir Momente fürs Leben.",
      },
    ],
    ctaTitle: "Segeln Sie mit uns",
    ctaBody: "Entdecken Sie alle drei Bootstouren und finden Sie den Ausflug, der zu Ihnen passt.",
    ctaPrimary: "Bootstouren Ansehen",
    ctaSecondary: "Kontaktieren Sie Uns",
  },
  it: {
    metaTitle: "Chi Siamo",
    metaDescription:
      "Flagship Aruba offre un mix memorabile di avventura, snorkeling e divertimento rilassato a bordo di un'affascinante goletta.",
    heroEyebrow: "La nostra storia",
    heroTitle: "Da scherzo d'infanzia a vera nave pirata",
    heroBody: "Tre amici con un amore condiviso per il mare hanno trasformato una vecchia battuta in Flagship Aruba.",
    storyEyebrow: "La nostra storia",
    storyTitle: "Flagship Aruba",
    storyParagraph1:
      "Flagship Aruba offre un mix memorabile di avventura, snorkeling e divertimento rilassato a bordo di un'affascinante goletta. Siamo orgogliosi di essere uno degli operatori di escursioni in barca meglio recensiti di Aruba, offrendo agli ospiti un'autentica esperienza caraibica con siti di snorkeling di prima classe, open bar e intrattenimento indimenticabile.",
    storyParagraph2:
      "Tutte le nostre crociere partono dal molo di fronte al MooMba Beach Bar a Palm Beach.",
    valuesBadge: "Cosa ci contraddistingue",
    valuesTitle: "I dettagli che contano",
    values: [
      {
        title: "Avventure Autentiche",
        body: "Navighiamo a bordo di un'affascinante goletta, offrendo un'esperienza che non troverai da nessun'altra parte ad Aruba.",
      },
      {
        title: "Equipaggio Appassionato",
        body: "Il nostro equipaggio simpatico e spiritoso fa sentire ogni ospite come parte della famiglia con calore, umorismo e un profondo amore per il mare.",
      },
      {
        title: "Ricordi Indimenticabili",
        body: "Dallo snorkeling su barriere coralline incontaminate al tuffo con la corda in acque turchesi, creiamo momenti che durano tutta la vita.",
      },
    ],
    ctaTitle: "Salpa con noi",
    ctaBody: "Scopri tutte e tre le escursioni in barca e trova il viaggio che fa per te.",
    ctaPrimary: "Vedi Le Escursioni",
    ctaSecondary: "Contattaci",
  },
  br: {
    metaTitle: "Sobre Nós",
    metaDescription:
      "A Flagship Aruba oferece uma mistura memorável de aventura, mergulho com snorkel e diversão descontraída a bordo de uma charmosa escuna.",
    heroEyebrow: "Nossa história",
    heroTitle: "De piada de infância a verdadeiro navio pirata",
    heroBody: "Três amigos com um amor compartilhado pelo mar transformaram uma velha piada na Flagship Aruba.",
    storyEyebrow: "Nossa história",
    storyTitle: "Flagship Aruba",
    storyParagraph1:
      "A Flagship Aruba oferece uma mistura memorável de aventura, mergulho com snorkel e diversão descontraída a bordo de uma charmosa escuna. Temos orgulho de ser um dos operadores de passeios de barco mais bem avaliados de Aruba, oferecendo aos hóspedes uma autêntica experiência caribenha com pontos de snorkel de primeira, bar aberto e entretenimento inesquecível.",
    storyParagraph2:
      "Todos os nossos cruzeiros partem do píer em frente ao MooMba Beach Bar, em Palm Beach.",
    valuesBadge: "O que nos diferencia",
    valuesTitle: "Os detalhes que importam",
    values: [
      {
        title: "Aventuras Autênticas",
        body: "Navegamos a bordo de uma charmosa escuna, proporcionando uma experiência que você não encontrará em nenhum outro lugar de Aruba.",
      },
      {
        title: "Tripulação Apaixonada",
        body: "Nossa tripulação amigável e espirituosa faz cada hóspede se sentir em família com sua calidez, humor e profundo amor pelo mar.",
      },
      {
        title: "Memórias Inesquecíveis",
        body: "Do mergulho em recifes intocados ao balanço na corda em águas turquesa, criamos momentos que duram para sempre.",
      },
    ],
    ctaTitle: "Navegue conosco",
    ctaBody: "Veja nossos três passeios de barco e encontre a viagem perfeita para você.",
    ctaPrimary: "Ver Passeios De Barco",
    ctaSecondary: "Fale Conosco",
  },
  se: {
    metaTitle: "Om Oss",
    metaDescription:
      "Flagship Aruba erbjuder en minnesvärd blandning av äventyr, snorkling och avslappnad kul ombord på en charmig skonare.",
    heroEyebrow: "Vår historia",
    heroTitle: "Från barndomsskämt till riktigt piratskepp",
    heroBody: "Tre vänner med en gemensam kärlek till havet förvandlade ett gammalt skämt till Flagship Aruba.",
    storyEyebrow: "Vår historia",
    storyTitle: "Flagship Aruba",
    storyParagraph1:
      "Flagship Aruba erbjuder en minnesvärd blandning av äventyr, snorkling och avslappnad kul ombord på en charmig skonare. Vi är stolta över att vara en av Arubas bäst rankade båtturoperatörer och erbjuder gästerna en autentisk karibisk upplevelse med förstklassiga snorkelplatser, öppen bar och oförglömlig underhållning.",
    storyParagraph2:
      "Alla våra kryssningar avgår från piren framför MooMba Beach Bar på Palm Beach.",
    valuesBadge: "Vad som gör oss unika",
    valuesTitle: "Detaljerna som spelar roll",
    values: [
      {
        title: "Äkta Äventyr",
        body: "Vi seglar ombord på en charmig skonare och erbjuder en upplevelse du inte hittar någon annanstans på Aruba.",
      },
      {
        title: "Passionerad Besättning",
        body: "Vår vänliga, kvicka besättning får varje gäst att känna sig som familj med sin värme, humor och djupa kärlek till havet.",
      },
      {
        title: "Oförglömliga Minnen",
        body: "Från snorkling vid orörda rev till repgungning i turkosblått vatten, vi skapar stunder som varar hela livet.",
      },
    ],
    ctaTitle: "Segla med oss",
    ctaBody: "Se alla våra tre båtturer och hitta resan som passar dig.",
    ctaPrimary: "Se Båtturer",
    ctaSecondary: "Kontakta Oss",
  },
};
