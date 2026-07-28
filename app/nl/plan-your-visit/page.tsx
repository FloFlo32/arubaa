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
  title: "Plan Je Bezoek Aan Aruba",
  description:
    "Alles wat je nodig hebt om je Aruba-vakantie te plannen: hotels, verhuur, hierheen komen en rondreizen.",
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
    title: "Timeshares",
    body: "Bezit een stukje van het eiland. Timeshare-eigendommen voor gasten die steeds weer terugkomen.",
    span: "md:col-span-2",
  },
  {
    id: "getting-to-aruba",
    icon: Plane,
    title: "Naar Aruba Reizen",
    body: "Naar Aruba komen vanuit vrijwel elke plek in de wereld is een simpele, stressvrije ervaring.",
  },
  {
    id: "getting-around",
    icon: Car,
    title: "Rondreizen Op Aruba",
    body: "Van onze levendige hoofdstad tot rustige kustplaatsjes, ongerepte stranden tot ruige woestijn, je komt overal makkelijk.",
  },
  {
    id: "guest-services",
    icon: LifeBuoy,
    title: "Gastenservice",
    body: "Ondersteuning en hulp wanneer je het nodig hebt, voordat je landt en terwijl je hier bent.",
  },
  {
    id: "tips",
    icon: Info,
    title: "Tips Voor Bezoekers",
    body: "Lokale kennis over timing, weer en het meeste uit elke dag halen.",
    span: "md:col-span-2",
  },
];

const tips = [
  "Bijna elke dag van het jaar zonnig: pak lichte laagjes in, geen paraplu's.",
  "De passaatwinden steken in de middag op, perfect voor windsurfen.",
  "Nederlands, Papiaments, Spaans en Engels worden allemaal veel gesproken.",
  "Kraanwater is overal op het eiland veilig om te drinken.",
];

export default function PlanYourVisitPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/6923a03a-c228-4ba6-a03d-5530a8311041/mp4/FINAL-ANIMATION-VIDEO-HERO-HOME.mp4"
            poster="/ingested/arubaa/img-039.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Vooruit plannen
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Plan Je Bezoek Aan Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Je vakantie naar Aruba plannen is eenvoudig, zeker met een heel eiland
                vriendelijke gezichten die graag suggesties delen. Handig vervoer,
                veilige toegang tot het eiland en comfortabele resorts maken het simpel
                om te relaxen en te ontdekken.
              </p>
            </Reveal>
          </div>
        </section>

        <SplitRow
          id="hotels-resorts"
          icon={BedDouble}
          eyebrow="Waar te verblijven"
          title="Hotels & Resorts"
          body="Van boetiekonderkomens tot torens aan het strand, Aruba's hotels en resorts variëren van intiem tot full-service, allemaal binnen bereik van het water."
          src="/ingested/arubaa/img-057.webp"
          alt="Een koppel praat samen bij het zwembad van een resort in Aruba"
        />

        <SplitRow
          id="vacation-rentals"
          icon={Home}
          eyebrow="Ruimte om je uit te spreiden"
          title="Vakantieverhuur"
          body="Voor langere verblijven of grotere groepen geeft vakantieverhuur je een thuisbasis met een keuken, meer ruimte en een rustiger tempo."
          src="/ingested/arubaa/img-036.webp"
          alt="Een koppel relaxt samen op de kustrotsen bij hun huurwoning"
          reverse
        />

        {/* All-Inclusive */}
        <section id="all-inclusive" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Ticket className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Eén prijs, alles inbegrepen
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              All-inclusive
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Gebundelde vakantiepakketten met maaltijden, drankjes en activiteiten,
              zodat de enige beslissing die overblijft is welke ligstoel je claimt.
            </p>
          </Reveal>
          <div className="mt-10">
            <ImageCard
              src="/ingested/arubaa/img-053.webp"
              alt="Gasten springen samen in een resortzwembad"
              title="Resortleven, gedekt"
              description="Maaltijden, drankjes en activiteiten gebundeld in één gemakkelijk verblijf."
              className="mx-auto max-w-xl"
              ratio="aspect-[16/9]"
            />
          </div>
        </section>

        <SplitRow
          id="by-cruise"
          icon={Ship}
          eyebrow="Een dag op het eiland"
          title="Aruba Per Cruiseschip"
          body="Cruiseschepen leggen direct aan in Oranjestad, waardoor stranden, winkelen en dineren op korte loop- of taxiafstand van de pier liggen."
          src="/ingested/arubaa/img-051.webp"
          alt="Een bruid en bruidegom houden elkaars hand vast op een strand van Aruba"
        />

        {/* Aruba Vacations */}
        <section id="vacations" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Palmtree className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Complete planning
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Vakantie Op Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Complete hulpmiddelen om je vakantie te plannen, van het boeken van je
              verblijf tot het vullen van elke dag zodra je landt.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
            <ImageCard
              src="/ingested/arubaa/img-054.webp"
              alt="Een gast drijft in een resortzwembad"
              title="Zwembaddagen"
              description="Resortzwembaden gemaakt om er expres helemaal niets te doen."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Een paar praat samen bij het zwembad van een resort"
              title="Zwembadavonden"
              description="Drankjes bij zonsondergang op enkele stappen van je kamer."
            />
            <ImageCard
              src="/ingested/arubaa/img-055.webp"
              alt="Gasten zonnebaden samen bij een resortzwembad"
              title="Groepsuitjes"
              description="Genoeg ruimte voor de hele groep om zich te verspreiden."
            />
          </AutoSlider>
        </section>

        {/* Logistics bento: Timeshares / Getting to / Getting around / Guest services / Tips */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              De logistiek, geregeld
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Alles wat je nodig hebt om hierheen te komen, rond te reizen en onderweg
              hulp te krijgen.
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
              <h3 className="text-xl font-semibold">Een paar dingen die goed zijn om te weten</h3>
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
                Jouw <span className="text-primary">One Happy Island</span> reis begint hier
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Leg je data vast, en kijk hoe het aftellen begint.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/nl/book-now">
                    Nu Boeken <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/nl/live-webcams">Bekijk Live Webcams</Link>
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
