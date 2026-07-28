import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Sailboat,
  Mountain,
  Utensils,
  Music,
  Landmark,
  Binoculars,
  ShoppingBag,
  Flower2,
  Dumbbell,
  CalendarDays,
  MapIcon,
  ArrowRight,
  Sun,
  Sunrise,
  Users2,
  Footprints,
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
  title: "Wat Te Doen Op Aruba",
  description:
    "Van stranden en watersporten tot nachtleven, dineren, cultuur en golf: alles om te doen op One Happy Island.",
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

const bentoCells = [
  {
    id: "nightlife",
    icon: Music,
    title: "Nachtleven",
    body: "Van strandlounges tot laat in de nacht dansen, Aruba's avonden zijn net zo levendig als de dagen.",
    span: "md:col-span-2",
  },
  {
    id: "sightseeing-tours",
    icon: Binoculars,
    title: "Sightseeing & Tours",
    body: "Begeleide ervaringen en historische bezienswaardigheden, gezien zoals de locals ze het beste kennen.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Winkelen",
    body: "Boetiekjes, lokale markten en duty-free vondsten door het hele eiland.",
  },
  {
    id: "wellbeing",
    icon: Flower2,
    title: "Welzijn",
    body: "Op welzijn gerichte activiteiten, van spa-retraites tot stretchoefeningen bij zonsopgang aan de zee.",
  },
  {
    id: "sports-golf",
    icon: Dumbbell,
    title: "Sport & Golf",
    body: "Kampioensbanen en actieve bezigheden voor elke soort reiziger.",
    span: "md:col-span-2",
  },
];

const itineraries = [
  { icon: Sun, title: "Zon, Zand, Sereniteit" },
  { icon: Utensils, title: "Proef Alles" },
  { icon: Mountain, title: "Eén Met De Natuur" },
  { icon: Users2, title: "Één Blije Familie" },
  { icon: Sunrise, title: "Vertraag" },
  { icon: Footprints, title: "Meteen Een Local" },
];

export default function ThingsToDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/1c987a2c-afe4-4348-b459-383e6ac9916e/mp4/CORTO-PT-HERO-ANIMATION.mp4"
            poster="/ingested/arubaa/img-029.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Wat Te Doen Op Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba biedt een breed scala aan ervaringen voor elk tempo. Van rustige
                stranden en natuurlijke landschappen tot culturele bezienswaardigheden en
                lokale ervaringen, het eiland nodigt je uit om bewust te ontdekken en
                betekenisvolle momenten te beleven. Natuurlijk, Aruba&apos;s stranden
                horen bij de beste in de wereld. Maar kijk verder dan de eindeloze zon,
                het zand en het water, en je vindt een eiland vol ervaringen: schitterende
                wandelingen, prachtige baaien en onvergetelijke gerechten.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Beaches & Coves */}
        <section id="beaches-coves" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Waves className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              20+ kusten
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Stranden & Baaien
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba heeft meer dan 20 openbare stranden en baaien. Ze variëren van
              rustige, gezinsvriendelijke baaien tot ruige, door de wind gekuste kusten.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ImageCard
              src="/ingested/arubaa/img-038.webp"
              alt="Bezoekers wandelen langs het strand bij daglicht"
              title="Rustige, gezinsvriendelijke baaien"
              description="Ondiep, beschut water aan de luwe zijde van het eiland."
            />
            <ImageCard
              src="/ingested/arubaa/img-030.webp"
              alt="Bezoekers genieten van de zeekant bij daglicht"
              title="Door de wind gekuste kusten"
              description="Wijde open baaien waar de passaatwinden het koel houden."
            />
          </div>
        </section>

        <SplitRow
          id="on-the-water"
          icon={Sailboat}
          eyebrow="Wind en water"
          title="Op Het Water"
          body="Van rustige, beschutte baaien tot een van de beste windsurfplekken in de wereld, de kustlijn van Aruba brengt elke soort watersport binnen handbereik."
          src="/ingested/arubaa/img-047.webp"
          alt="Een koppel in trouwkleding rent door het ondiepe water op een strand van Aruba"
        />

        <SplitRow
          id="natural-wonders"
          icon={Mountain}
          eyebrow="Arikok en verder"
          title="Natuurwonderen"
          body="Ontdek het woestijnlandschap van Arikok National Park, en koel daarna af met snorkelen in baaien uitgesneden in de kalkstenen kust van het eiland."
          src="/ingested/arubaa/img-031.webp"
          alt="Een vrouw staat alleen op zanderig terrein met uitzicht op de zee"
          reverse
        />

        <SplitRow
          id="dining"
          icon={Utensils}
          eyebrow="Elke smaak"
          title="Dineren"
          body="Aruba's restaurantscene omvat Europese klassiekers, Zuid-Aziatische kruiden en de meest verse lokale zeevruchten, vaak geserveerd op enkele stappen van het water."
          src="/ingested/arubaa/img-036.webp"
          alt="Een koppel relaxt samen op de kustrotsen van Aruba"
        />

        <SplitRow
          id="arts-culture"
          icon={Landmark}
          eyebrow="San Nicolas"
          title="Kunst & Cultuur"
          body="San Nicolas is rijk aan geschiedenis, cultuur en architectuur, een ware weerspiegeling van de inwoners van San Nicolas en hun dagelijks leven."
          src="/ingested/arubaa/img-034.webp"
          alt="Meerdere mensen wandelen langs de kust bij San Nicolas"
          reverse
        />

        {/* Bento: Nightlife / Sightseeing / Shopping / Wellbeing / Sports & Golf */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Meer manieren om de dag te vullen
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              De rest van het eiland, in vijf richtingen.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {bentoCells.map((c) => (
              <RevealItem
                key={c.id}
                className={cn(
                  "scroll-mt-24",
                  c.span
                )}
              >
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

        {/* Calendar of Events */}
        <section id="calendar" className="container-px mx-auto max-w-4xl py-16 text-center sm:py-20">
          <Reveal>
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <CalendarDays className="size-6" />
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl">
              Evenementenkalender
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Gemeenschapsbijeenkomsten en festivals vullen Aruba&apos;s kalender het hele
              jaar door, van carnavalsseizoen tot eet- en muziekfeesten aan de zee.
            </p>
          </Reveal>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <MapIcon className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Geschreven door lokale experts
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Reisroutes
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Kant-en-klare reisideeën, uitgestippeld zodat je minder tijd besteedt aan
              beslissen en meer tijd aan het genieten van het eiland.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[75%] sm:w-[40%] lg:w-[23%]">
            {itineraries.map((it) => (
              <div
                key={it.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <it.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Een uitgestippelde route door het eiland, gemaakt door de mensen die het
                  het beste kennen.
                </p>
              </div>
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Klaar om je <span className="text-primary">eigen reisroute</span> te vullen?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Stranden, baaien, dinerreserveringen en alles daartussenin: boek je
                ontsnapping naar One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/nl/book-now">
                    Boek Je Aruba-ontsnapping <ArrowRight className="size-4" />
                  </Link>
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
