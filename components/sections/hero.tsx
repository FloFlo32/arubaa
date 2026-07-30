import Link from "next/link";
import { ArrowRight, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";
import { TripAdvisorBadge } from "@/components/sections/tripadvisor-badge";
import { type LocaleCode, localizePath } from "@/lib/i18n";

const copy: Record<
  LocaleCode,
  {
    badge: string;
    title: string;
    body: string;
    cta: string;
    bookNow: string;
    pill: string;
  }
> = {
  en: {
    badge: "Sail, Splash & Sunset Magic",
    title: "Set sail on a real pirate ship",
    body: "Climb aboard our traditional wooden schooner for reef snorkeling, an open bar and a sunset that turns the whole sky pink over Aruba's turquoise coast.",
    cta: "See Boat Tours",
    bookNow: "Book Now",
    pill: "snorkel sites visited, from calm reef to WWII shipwreck",
  },
  es: {
    badge: "Vela, Chapuzones Y Magia Del Atardecer",
    title: "Zarpa en un verdadero barco pirata",
    body: "Sube a bordo de nuestra goleta de madera tradicional para hacer snorkel en el arrecife, disfrutar de una barra libre y un atardecer que pinta todo el cielo de rosa sobre la costa turquesa de Aruba.",
    cta: "Ver Excursiones",
    bookNow: "Reservar Ahora",
    pill: "sitios de snorkel visitados, desde arrecife tranquilo hasta naufragio de la Segunda Guerra Mundial",
  },
  nl: {
    badge: "Zeilen, Zwemmen En Zonsondergangmagie",
    title: "Vaar uit op een echt piratenschip",
    body: "Ga aan boord van onze traditionele houten schoener voor snorkelen op het rif, een open bar en een zonsondergang die de hele hemel roze kleurt boven Aruba's turquoise kust.",
    cta: "Bekijk Boottochten",
    bookNow: "Boek Nu",
    pill: "bezochte snorkelplekken, van rustig rif tot wrak uit de Tweede Wereldoorlog",
  },
  de: {
    badge: "Segeln, Planschen Und Sonnenuntergangszauber",
    title: "Segeln Sie auf einem echten Piratenschiff",
    body: "Kommen Sie an Bord unseres traditionellen Holzschoners zum Schnorcheln am Riff, genießen Sie eine offene Bar und einen Sonnenuntergang, der den ganzen Himmel über Arubas türkiser Küste rosa färbt.",
    cta: "Bootstouren Ansehen",
    bookNow: "Jetzt Buchen",
    pill: "besuchte Schnorchelplätze, vom ruhigen Riff bis zum Wrack aus dem Zweiten Weltkrieg",
  },
  it: {
    badge: "Vela, Tuffi E Magia Del Tramonto",
    title: "Salpa su una vera nave pirata",
    body: "Sali a bordo della nostra tradizionale goletta di legno per fare snorkeling sulla barriera corallina, goderti un open bar e un tramonto che tinge di rosa tutto il cielo sopra la costa turchese di Aruba.",
    cta: "Vedi Le Escursioni",
    bookNow: "Prenota Ora",
    pill: "siti per snorkeling visitati, dalla barriera tranquilla al relitto della Seconda Guerra Mondiale",
  },
  br: {
    badge: "Vela, Mergulho E Magia Do Pôr Do Sol",
    title: "Zarpe em um verdadeiro navio pirata",
    body: "Suba a bordo da nossa tradicional escuna de madeira para fazer snorkel no recife, aproveitar um bar aberto e um pôr do sol que pinta todo o céu de rosa sobre a costa turquesa de Aruba.",
    cta: "Ver Passeios De Barco",
    bookNow: "Reserve Agora",
    pill: "locais de mergulho visitados, do recife tranquilo ao naufrágio da Segunda Guerra Mundial",
  },
  se: {
    badge: "Segling, Plask Och Solnedgångsmagi",
    title: "Sätt segel på ett riktigt piratskepp",
    body: "Kliv ombord på vår traditionella träskonare för snorkling vid revet, en öppen bar och en solnedgång som färgar hela himlen rosa över Arubas turkosa kust.",
    cta: "Se Båtturer",
    bookNow: "Boka Nu",
    pill: "besökta snorkelplatser, från lugnt rev till vrak från andra världskriget",
  },
};

export function Hero({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = copy[locale];
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-28">
      <HeroSlideshow />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      <div className="container-px relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
            <Anchor className="size-3.5" /> {t.badge}
          </Badge>
        </Reveal>

        <Reveal delay={0.04}>
          <TripAdvisorBadge className="mx-auto mt-5" />
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
            {t.title}
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">{t.body}</p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href={localizePath(locale, "/boat-tours")}>
                {t.cta} <ArrowRight className="size-4" />
              </Link>
            </Button>
            <BookNowButton
              label={t.bookNow}
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            />
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
            <span className="font-display text-lg font-bold">3</span>
            <span className="text-sm text-white/80">{t.pill}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
