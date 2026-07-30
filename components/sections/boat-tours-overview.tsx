import Link from "next/link";
import { Clock } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { type LocaleCode, localizePath } from "@/lib/i18n";

type Tour = {
  tag: string;
  title: string;
  time: string;
  price: string;
  body: string;
  href: string;
  activityId: string;
  img: string;
  alt: string;
};

const sectionCopy: Record<LocaleCode, { eyebrow: string; title: string; subtitle: string }> = {
  en: {
    eyebrow: "Our boat tours",
    title: "Pick your time of day",
    subtitle:
      "Three ways to sail with us: a morning snorkeling adventure, a livelier afternoon party, or an evening under sail and stars.",
  },
  es: {
    eyebrow: "Nuestras excursiones en barco",
    title: "Elige tu momento del día",
    subtitle:
      "Tres formas de navegar con nosotros: una aventura de snorkel matutina, una fiesta vespertina más animada, o una noche bajo vela y estrellas.",
  },
  nl: {
    eyebrow: "Onze boottochten",
    title: "Kies je moment van de dag",
    subtitle:
      "Drie manieren om met ons te varen: een ochtend vol snorkelavontuur, een levendiger middagfeest, of een avond onder zeil en sterren.",
  },
  de: {
    eyebrow: "Unsere Bootstouren",
    title: "Wählen Sie Ihre Tageszeit",
    subtitle:
      "Drei Arten, mit uns zu segeln: ein morgendliches Schnorchelabenteuer, eine lebhaftere Nachmittagsparty oder ein Abend unter Segeln und Sternen.",
  },
  it: {
    eyebrow: "Le nostre escursioni in barca",
    title: "Scegli il tuo momento della giornata",
    subtitle:
      "Tre modi per navigare con noi: un'avventura di snorkeling al mattino, una festa pomeridiana più movimentata, o una serata a vela sotto le stelle.",
  },
  br: {
    eyebrow: "Nossos passeios de barco",
    title: "Escolha o seu horário do dia",
    subtitle:
      "Três formas de navegar conosco: uma aventura de snorkel pela manhã, uma festa mais animada à tarde, ou uma noite à vela sob as estrelas.",
  },
  se: {
    eyebrow: "Våra båtturer",
    title: "Välj din tid på dagen",
    subtitle:
      "Tre sätt att segla med oss: ett morgonäventyr med snorkling, en livligare eftermiddagsfest, eller en kväll under segel och stjärnor.",
  },
};

const tourCopy: Record<LocaleCode, Tour[]> = {
  en: [
    {
      tag: "Gear Included",
      title: "Morning Snorkel Tour",
      time: "3 hrs",
      price: "From $98",
      body: "Kick off your day the best way possible, gliding through crystal-clear turquoise waters aboard our schooner. Explore premium snorkeling spots teeming with tropical fish, vibrant coral, and stunning marine life. All gear and refreshing drinks included, plus a friendly crew to guide you every step of the way.",
      href: "/boat-tours/morning-splash-adventure",
      activityId: "01083159-5861-4408-b78d-22c81e19faa4",
      img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
      alt: "Guests snorkeling alongside a sea turtle in clear turquoise water",
    },
    {
      tag: "Open Bar",
      title: "Afternoon Snorkel Tour",
      time: "3 hrs",
      price: "From $86",
      body: "The most legendary afternoon on the Caribbean Sea! Snorkel the iconic SS Antilla shipwreck and Boca Catalina, then swing off the rope into turquoise waters. With live DJ music, an open bar flowing all cruise long, and a witty crew that keeps the energy high, this is the tour guests rave about most.",
      href: "/boat-tours/afternoon-pirate-party",
      activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
      img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
      alt: "Guests snorkeling alongside a sea turtle near the boat",
    },
    {
      tag: "Premium Cocktails",
      title: "Sunset Cruise",
      time: "3 hrs",
      price: "From $90",
      body: "As golden hour paints the sky in amber and rose, set sail on the most magical evening in Aruba. Sip premium cocktails, savor local Aruban bites, and let the gentle ocean breeze carry away the day's worries. Ideal for couples celebrating a special moment or friends looking for a serene, unforgettable evening at sea.",
      href: "/boat-tours/sunset-stars-cruise",
      activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
      img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
      alt: "The schooner sailing under a dramatic orange sunset sky",
    },
  ],
  es: [
    {
      tag: "Equipo Incluido",
      title: "Aventura Matutina",
      time: "3 hrs",
      price: "From $98",
      body: "Comienza tu día de la mejor manera posible, deslizándote por aguas turquesas cristalinas a bordo de nuestra goleta. Explora sitios de snorkel de primera, repletos de peces tropicales, coral vibrante y una vida marina impresionante. Todo el equipo y bebidas refrescantes incluidos, además de una tripulación amable que te guía en cada paso.",
      href: "/boat-tours/morning-splash-adventure",
      activityId: "01083159-5861-4408-b78d-22c81e19faa4",
      img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
      alt: "Huéspedes haciendo snorkel junto a una tortuga marina en agua turquesa cristalina",
    },
    {
      tag: "Barra Libre",
      title: "Fiesta Pirata Vespertina",
      time: "3 hrs",
      price: "From $86",
      body: "¡La tarde más legendaria del Mar Caribe! Haz snorkel en el icónico naufragio del SS Antilla y en Boca Catalina, y luego lánzate con la cuerda a las aguas turquesas. Con música de DJ en vivo, barra libre durante todo el crucero y una tripulación ingeniosa que mantiene la energía al máximo, esta es la excursión que más elogian nuestros huéspedes.",
      href: "/boat-tours/afternoon-pirate-party",
      activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
      img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
      alt: "Huéspedes haciendo snorkel junto a una tortuga marina cerca del barco",
    },
    {
      tag: "Cócteles Premium",
      title: "Crucero Atardecer Y Estrellas",
      time: "3 hrs",
      price: "From $90",
      body: "Mientras la hora dorada pinta el cielo de ámbar y rosa, zarpa hacia la noche más mágica de Aruba. Disfruta de cócteles premium, saborea bocados aruberos locales y deja que la suave brisa del océano se lleve las preocupaciones del día. Ideal para parejas que celebran un momento especial o amigos que buscan una noche serena e inolvidable en el mar.",
      href: "/boat-tours/sunset-stars-cruise",
      activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
      img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
      alt: "La goleta navegando bajo un dramático cielo de atardecer anaranjado",
    },
  ],
  nl: [
    {
      tag: "Uitrusting Inbegrepen",
      title: "Ochtend Avontuur",
      time: "3 hrs",
      price: "From $98",
      body: "Begin je dag op de best mogelijke manier, glijdend door kristalhelder turquoise water aan boord van onze schoener. Ontdek eersteklas snorkelplekken vol tropische vissen, levendig koraal en prachtig zeeleven. Alle uitrusting en verfrissende drankjes inbegrepen, plus een vriendelijke bemanning die je bij elke stap begeleidt.",
      href: "/boat-tours/morning-splash-adventure",
      activityId: "01083159-5861-4408-b78d-22c81e19faa4",
      img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
      alt: "Gasten snorkelen naast een zeeschildpad in helder turquoise water",
    },
    {
      tag: "Open Bar",
      title: "Middag Piratenfeest",
      time: "3 hrs",
      price: "From $86",
      body: "De meest legendarische middag op de Caribische Zee! Snorkel bij het iconische wrak van de SS Antilla en bij Boca Catalina, en zwaai vervolgens aan het touw het turquoise water in. Met live dj-muziek, een open bar de hele cruise lang, en een geestige bemanning die de energie hoog houdt, is dit de tocht waar gasten het meest lyrisch over zijn.",
      href: "/boat-tours/afternoon-pirate-party",
      activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
      img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
      alt: "Gasten snorkelen naast een zeeschildpad dicht bij de boot",
    },
    {
      tag: "Premium Cocktails",
      title: "Zonsondergang & Sterrencruise",
      time: "3 hrs",
      price: "From $90",
      body: "Terwijl het gouden uur de hemel amberkleurig en roze kleurt, vaar je uit voor de meest magische avond van Aruba. Nip aan premium cocktails, proef lokale Arubaanse hapjes en laat de zachte oceaanbries de zorgen van de dag wegblazen. Ideaal voor stellen die een bijzonder moment vieren of vrienden die op zoek zijn naar een serene, onvergetelijke avond op zee.",
      href: "/boat-tours/sunset-stars-cruise",
      activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
      img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
      alt: "De schoener vaart onder een dramatische oranje zonsonderganghemel",
    },
  ],
  de: [
    {
      tag: "Ausrüstung Inklusive",
      title: "Morgenabenteuer",
      time: "3 hrs",
      price: "From $98",
      body: "Starten Sie Ihren Tag auf die beste Art und Weise, gleitend durch kristallklares türkisfarbenes Wasser an Bord unseres Schoners. Entdecken Sie erstklassige Schnorchelplätze voller tropischer Fische, lebendiger Korallen und beeindruckendem Meeresleben. Die gesamte Ausrüstung und erfrischende Getränke sind inklusive, dazu eine freundliche Crew, die Sie bei jedem Schritt begleitet.",
      href: "/boat-tours/morning-splash-adventure",
      activityId: "01083159-5861-4408-b78d-22c81e19faa4",
      img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
      alt: "Gäste schnorcheln neben einer Meeresschildkröte im klaren türkisfarbenen Wasser",
    },
    {
      tag: "Offene Bar",
      title: "Nachmittags-Piratenparty",
      time: "3 hrs",
      price: "From $86",
      body: "Der legendärste Nachmittag auf der Karibischen See! Schnorcheln Sie am ikonischen Wrack der SS Antilla und bei Boca Catalina, und schwingen Sie sich anschließend am Seil ins türkisfarbene Wasser. Mit Live-DJ-Musik, einer offenen Bar die ganze Fahrt über und einer witzigen Crew, die die Stimmung hochhält, ist dies die Tour, von der Gäste am meisten schwärmen.",
      href: "/boat-tours/afternoon-pirate-party",
      activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
      img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
      alt: "Gäste schnorcheln neben einer Meeresschildkröte nahe dem Boot",
    },
    {
      tag: "Premium-Cocktails",
      title: "Sonnenuntergangs- Und Sternenfahrt",
      time: "3 hrs",
      price: "From $90",
      body: "Während die goldene Stunde den Himmel in Bernstein und Rosa taucht, segeln Sie in den magischsten Abend Arubas. Genießen Sie Premium-Cocktails, kosten Sie lokale arubanische Häppchen und lassen Sie die sanfte Meeresbrise die Sorgen des Tages davontragen. Ideal für Paare, die einen besonderen Moment feiern, oder Freunde, die einen ruhigen, unvergesslichen Abend auf See suchen.",
      href: "/boat-tours/sunset-stars-cruise",
      activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
      img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
      alt: "Der Schoner segelt unter einem dramatischen orangefarbenen Sonnenuntergangshimmel",
    },
  ],
  it: [
    {
      tag: "Attrezzatura Inclusa",
      title: "Avventura Del Mattino",
      time: "3 hrs",
      price: "From $98",
      body: "Inizia la tua giornata nel modo migliore possibile, scivolando su acque turchesi cristalline a bordo della nostra goletta. Esplora siti di snorkeling di prima classe pieni di pesci tropicali, coralli vivaci e una splendida vita marina. Tutta l'attrezzatura e bevande rinfrescanti incluse, oltre a un equipaggio cordiale che ti guida in ogni fase.",
      href: "/boat-tours/morning-splash-adventure",
      activityId: "01083159-5861-4408-b78d-22c81e19faa4",
      img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
      alt: "Ospiti che fanno snorkeling accanto a una tartaruga marina in acque turchesi cristalline",
    },
    {
      tag: "Open Bar",
      title: "Festa Pirata Del Pomeriggio",
      time: "3 hrs",
      price: "From $86",
      body: "Il pomeriggio più leggendario del Mar dei Caraibi! Fai snorkeling sull'iconico relitto della SS Antilla e a Boca Catalina, poi lanciati con la corda nelle acque turchesi. Con musica DJ dal vivo, open bar per tutta la crociera e un equipaggio brillante che tiene alta l'energia, questa è l'escursione di cui gli ospiti parlano di più.",
      href: "/boat-tours/afternoon-pirate-party",
      activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
      img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
      alt: "Ospiti che fanno snorkeling accanto a una tartaruga marina vicino alla barca",
    },
    {
      tag: "Cocktail Premium",
      title: "Crociera Tramonto E Stelle",
      time: "3 hrs",
      price: "From $90",
      body: "Mentre l'ora dorata dipinge il cielo d'ambra e rosa, salpa per la serata più magica di Aruba. Sorseggia cocktail premium, assapora stuzzichini locali arubani e lascia che la brezza marina porti via le preoccupazioni della giornata. Ideale per coppie che festeggiano un momento speciale o amici in cerca di una serata serena e indimenticabile in mare.",
      href: "/boat-tours/sunset-stars-cruise",
      activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
      img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
      alt: "La goletta naviga sotto un drammatico cielo al tramonto color arancio",
    },
  ],
  br: [
    {
      tag: "Equipamento Incluso",
      title: "Aventura Matinal",
      time: "3 hrs",
      price: "From $98",
      body: "Comece seu dia da melhor maneira possível, deslizando por águas turquesas cristalinas a bordo da nossa escuna. Explore locais de mergulho de primeira, repletos de peixes tropicais, corais vibrantes e uma vida marinha deslumbrante. Todo o equipamento e bebidas refrescantes incluídos, além de uma tripulação simpática para guiar você em cada etapa.",
      href: "/boat-tours/morning-splash-adventure",
      activityId: "01083159-5861-4408-b78d-22c81e19faa4",
      img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
      alt: "Hóspedes fazendo snorkel ao lado de uma tartaruga marinha em água turquesa cristalina",
    },
    {
      tag: "Bar Aberto",
      title: "Festa Pirata Vespertina",
      time: "3 hrs",
      price: "From $86",
      body: "A tarde mais lendária do Mar do Caribe! Faça snorkel no icônico naufrágio do SS Antilla e em Boca Catalina, e depois se jogue na corda nas águas turquesas. Com música de DJ ao vivo, bar aberto durante todo o passeio e uma tripulação espirituosa que mantém a energia lá em cima, este é o passeio mais elogiado pelos hóspedes.",
      href: "/boat-tours/afternoon-pirate-party",
      activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
      img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
      alt: "Hóspedes fazendo snorkel ao lado de uma tartaruga marinha perto do barco",
    },
    {
      tag: "Coquetéis Premium",
      title: "Cruzeiro Pôr Do Sol E Estrelas",
      time: "3 hrs",
      price: "From $90",
      body: "Enquanto a hora dourada pinta o céu de âmbar e rosa, zarpe para a noite mais mágica de Aruba. Saboreie coquetéis premium, experimente petiscos arubanos locais e deixe a brisa suave do oceano levar embora as preocupações do dia. Ideal para casais celebrando um momento especial ou amigos em busca de uma noite serena e inesquecível no mar.",
      href: "/boat-tours/sunset-stars-cruise",
      activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
      img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
      alt: "A escuna navegando sob um dramático céu de pôr do sol alaranjado",
    },
  ],
  se: [
    {
      tag: "Utrustning Ingår",
      title: "Morgonäventyr",
      time: "3 hrs",
      price: "From $98",
      body: "Starta din dag på bästa möjliga sätt, glidande genom kristallklart turkost vatten ombord på vår skonare. Utforska förstklassiga snorkelplatser fyllda med tropiska fiskar, levande korall och fantastiskt marint liv. All utrustning och läskande drycker ingår, plus en vänlig besättning som guidar dig varje steg på vägen.",
      href: "/boat-tours/morning-splash-adventure",
      activityId: "01083159-5861-4408-b78d-22c81e19faa4",
      img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
      alt: "Gäster snorklar bredvid en havssköldpadda i klart turkost vatten",
    },
    {
      tag: "Öppen Bar",
      title: "Eftermiddagens Piratfest",
      time: "3 hrs",
      price: "From $86",
      body: "Den mest legendariska eftermiddagen på Karibiska havet! Snorkla vid det ikoniska vraket SS Antilla och Boca Catalina, och gunga sedan i repet ner i det turkosa vattnet. Med levande dj-musik, öppen bar hela kryssningen och en kvick besättning som håller energin uppe, är detta turen gästerna pratar mest om.",
      href: "/boat-tours/afternoon-pirate-party",
      activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
      img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
      alt: "Gäster snorklar bredvid en havssköldpadda nära båten",
    },
    {
      tag: "Premiumcocktails",
      title: "Solnedgång Och Stjärnkryssning",
      time: "3 hrs",
      price: "From $90",
      body: "När den gyllene timmen målar himlen i bärnsten och rosa, sätter du segel mot den mest magiska kvällen på Aruba. Njut av premiumcocktails, smaka lokala arubanska smakbitar och låt den milda havsbrisen föra bort dagens bekymmer. Perfekt för par som firar ett speciellt ögonblick eller vänner som söker en lugn, oförglömlig kväll till havs.",
      href: "/boat-tours/sunset-stars-cruise",
      activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
      img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
      alt: "Skonaren seglar under en dramatisk orange solnedgångshimmel",
    },
  ],
};

export function BoatToursOverview({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const s = sectionCopy[locale];
  const tours = tourCopy[locale];
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {s.eyebrow}
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{s.title}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{s.subtitle}</p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {tours.map((t) => (
          <RevealItem key={t.href}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10">
              <Link href={localizePath(locale, t.href)} className="relative block aspect-[16/10] cursor-pointer overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <Link href={localizePath(locale, t.href)} className="cursor-pointer font-display text-xl font-semibold leading-snug hover:text-primary">
                  {t.title}
                </Link>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-t border-border py-2.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {t.time}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                    {t.tag}
                  </span>
                  <span className="ml-auto text-sm font-bold text-ocean">{t.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t.body}</p>
                <div className="mt-auto pt-4">
                  <BookNowButton activityId={t.activityId} className="w-full" showIcon={false} />
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
