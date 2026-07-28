import type { Metadata } from "next";
import Link from "next/link";
import {
  BedDouble,
  Home,
  Key,
  Ticket,
  Plane,
  Car,
  Ship,
  Palmtree,
  Info,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ihren Besuch in Aruba Planen",
  description:
    "Alles, was Sie für die Planung Ihres Aruba-Urlaubs brauchen: Hotels, Unterkünfte, Anreise und Fortbewegung vor Ort.",
};

function SplitRow({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  src,
  alt,
  reverse = false,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-6xl py-16 sm:py-20">
      <div
        className={cn(
          "grid items-center gap-10 md:grid-cols-2 md:gap-14",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <Icon className="size-5" />
          </span>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

const logisticsCells = [
  {
    id: "timeshares",
    icon: Key,
    title: "Timesharing",
    body: "Besitzen Sie ein Stück der Insel. Timesharing-Immobilien für Gäste, die immer wiederkommen.",
    span: "md:col-span-2",
  },
  {
    id: "getting-to-aruba",
    icon: Plane,
    title: "Anreise nach Aruba",
    body: "Die Anreise nach Aruba ist von fast überall auf der Welt einfach und stressfrei.",
  },
  {
    id: "getting-around",
    icon: Car,
    title: "Fortbewegung auf Aruba",
    body: "Von unserer lebendigen Hauptstadt bis zu ruhigen Küstenstädten, von makellosen Stränden bis zur rauen Wüste: Sie kommen überallhin.",
  },
  {
    id: "guest-services",
    icon: LifeBuoy,
    title: "Gästeservice",
    body: "Unterstützung und Hilfe, wann immer Sie sie brauchen, schon vor der Landung und während Ihres Aufenthalts.",
  },
  {
    id: "tips",
    icon: Info,
    title: "Tipps für Besucher",
    body: "Lokales Wissen über Timing, Wetter und wie Sie jeden Tag optimal nutzen.",
    span: "md:col-span-2",
  },
];

const tips = [
  "Fast jeden Tag im Jahr sonnig: Packen Sie leichte Kleidung ein, keine Regenschirme.",
  "Die Passatwinde frischen am Nachmittag auf, perfekt zum Windsurfen.",
  "Niederländisch, Papiamento, Spanisch und Englisch werden überall gesprochen.",
  "Leitungswasser kann auf der ganzen Insel bedenkenlos getrunken werden.",
];

export default function PlanYourVisitPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/6923a03a-c228-4ba6-a03d-5530a8311041/mp4/FINAL-ANIMATION-VIDEO-HERO-HOME.mp4"
            poster="/ingested/arubaa/img-039.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Vorausplanen
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Ihren Besuch in Aruba Planen
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Ihren Aruba-Urlaub zu planen ist einfach, vor allem mit einer ganzen Insel
                freundlicher Gesichter, die gerne Tipps teilen. Bequeme Transportmittel,
                sichere Einreise und komfortable Resorts machen es leicht, sich zu
                entspannen und zu entdecken.
              </p>
            </Reveal>
          </div>
        </section>

        <SplitRow
          id="hotels-resorts"
          icon={BedDouble}
          eyebrow="Wo Sie wohnen"
          title="Hotels & Resorts"
          body="Von Boutique-Rückzugsorten bis zu Türmen direkt am Strand: Arubas Hotels und Resorts reichen von intim bis Full-Service, alle in Reichweite des Wassers."
          src="/ingested/arubaa/img-057.webp"
          alt="Ein Paar unterhält sich am Pool eines Resorts in Aruba"
        />

        <SplitRow
          id="vacation-rentals"
          icon={Home}
          eyebrow="Platz zum Ausbreiten"
          title="Ferienunterkünfte"
          body="Für längere Aufenthalte oder größere Gruppen bieten Ferienunterkünfte eine eigene Basis mit Küche, mehr Raum und einem entspannteren Tempo."
          src="/ingested/arubaa/img-036.webp"
          alt="Ein Paar entspannt zusammen auf den Küstenfelsen in der Nähe ihrer Unterkunft"
          reverse
        />

        {/* All-Inclusive */}
        <section id="all-inclusive" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Ticket className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Ein Preis, alles inklusive
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              All-Inclusive
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Gebündelte Urlaubspakete mit Mahlzeiten, Getränken und Aktivitäten, sodass
              die einzige verbleibende Entscheidung ist, welchen Poolstuhl Sie belegen.
            </p>
          </Reveal>
          <div className="mt-10">
            <ImageCard
              src="/ingested/arubaa/img-053.webp"
              alt="Gäste springen gemeinsam in einen Resortpool"
              title="Resortleben, rundum abgedeckt"
              description="Mahlzeiten, Getränke und Aktivitäten in einem unkomplizierten Aufenthalt gebündelt."
              className="mx-auto max-w-xl"
              ratio="aspect-[16/9]"
            />
          </div>
        </section>

        <SplitRow
          id="by-cruise"
          icon={Ship}
          eyebrow="Ein Tag auf der Insel"
          title="Aruba per Kreuzfahrt"
          body="Kreuzfahrtschiffe legen direkt in Oranjestad an, sodass Strände, Einkaufen und Restaurants nur einen kurzen Spaziergang oder eine Taxifahrt vom Pier entfernt sind."
          src="/ingested/arubaa/img-051.webp"
          alt="Ein Brautpaar hält Händchen an einem Strand in Aruba"
        />

        {/* Aruba Vacations */}
        <section id="vacations" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Palmtree className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Komplette Planung
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Aruba-Urlaub
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Umfassende Ressourcen für die Urlaubsplanung, von der Buchung Ihres
              Aufenthalts bis zur Füllung jedes Tages nach Ihrer Landung.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
            <ImageCard
              src="/ingested/arubaa/img-054.webp"
              alt="Ein Gast schwebt in einem Resortpool"
              title="Pooltage"
              description="Resortpools, die absichtlich zum Nichtstun gebaut wurden."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Ein Paar unterhält sich am Pool eines Resorts"
              title="Poolabende"
              description="Sonnenuntergangs-Drinks nur wenige Schritte von Ihrem Zimmer entfernt."
            />
            <ImageCard
              src="/ingested/arubaa/img-055.webp"
              alt="Gäste sonnen sich gemeinsam an einem Resortpool"
              title="Gruppenausflüge"
              description="Genug Platz, damit sich die ganze Truppe ausbreiten kann."
            />
          </AutoSlider>
        </section>

        {/* Logistics bento: Timeshares / Getting to / Getting around / Guest services / Tips */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Die Logistik, erledigt
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Alles, was Sie brauchen, um hierher zu kommen, sich fortzubewegen und
              unterwegs Hilfe zu bekommen.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {logisticsCells.map((c) => (
              <RevealItem key={c.id} className={cn("scroll-mt-24", c.span)}>
                <div
                  id={c.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Tips checklist */}
        <section className="container-px mx-auto max-w-4xl py-4 pb-16">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold">Ein paar Dinge, die gut zu wissen sind</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tips.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Ihre Reise nach <span className="text-primary">One Happy Island</span> beginnt hier
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Legen Sie Ihre Reisedaten fest, dann beginnt der Countdown.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/de/book-now">
                    Jetzt Buchen <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/de/live-webcams">Live-Webcams Ansehen</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
