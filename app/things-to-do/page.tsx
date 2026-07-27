import type { Metadata } from "next";
import Image from "next/image";
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
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Things to Do in Aruba",
  description:
    "From beaches and water sports to nightlife, dining, culture and golf: everything to do on One Happy Island.",
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
              className="aspect-[5/4] w-full object-cover"
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
    title: "Nightlife",
    body: "From beachside lounges to late-night dancing, Aruba's evenings are as lively as its days.",
    span: "md:col-span-2",
  },
  {
    id: "sightseeing-tours",
    icon: Binoculars,
    title: "Sightseeing & Tours",
    body: "Guided experiences and historic landmarks, seen the way locals know them best.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Shopping",
    body: "Boutiques, local markets and duty-free finds across the island.",
  },
  {
    id: "wellbeing",
    icon: Flower2,
    title: "Wellbeing",
    body: "Wellness-focused activities, from spa retreats to sunrise stretches by the sea.",
  },
  {
    id: "sports-golf",
    icon: Dumbbell,
    title: "Sports & Golf",
    body: "Championship courses and active pursuits for every kind of traveler.",
    span: "md:col-span-2",
  },
];

const itineraries = [
  { icon: Sun, title: "Sun, Sand, Serenity" },
  { icon: Utensils, title: "Savor It All" },
  { icon: Mountain, title: "One With Nature" },
  { icon: Users2, title: "One Happy Family" },
  { icon: Sunrise, title: "Slow It Down" },
  { icon: Footprints, title: "Instant Local" },
];

export default function ThingsToDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-16 pb-16 sm:pt-24 sm:pb-24 md:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-029.webp"
                  alt="Aerial view of beachgoers wading in Aruba's turquoise water"
                  width={1000}
                  height={800}
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Badge variant="accent">One Happy Island</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Things to Do in Aruba
              </h1>
              <p className="mt-6 max-w-lg text-pretty text-lg text-muted-foreground">
                Aruba offers a wide range of experiences for every pace. From calm
                beaches and natural landscapes to cultural sites and local experiences,
                the island invites you to explore thoughtfully and enjoy meaningful
                moments. Sure, Aruba&apos;s beaches are some of the best in the world.
                But look beyond the endless sun, sand and water, and you&apos;ll find an
                island teeming with experiences: scenic hikes, stunning coves and
                unforgettable cuisine.
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
              20+ shores
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Beaches & Coves
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba has more than 20 public beaches and coves. They range from calm,
              family-friendly bays to wild, wind-kissed shores.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ImageCard
              src="/ingested/arubaa/img-038.webp"
              alt="Visitors walking along the beach in daylight"
              title="Calm, family-friendly bays"
              description="Shallow, sheltered water on the island's leeward side."
            />
            <ImageCard
              src="/ingested/arubaa/img-030.webp"
              alt="Visitors enjoying the seaside in daylight"
              title="Wind-kissed shores"
              description="Wide open coves where the trade winds keep things cool."
            />
          </div>
        </section>

        <SplitRow
          id="on-the-water"
          icon={Sailboat}
          eyebrow="Wind and water"
          title="On the Water"
          body="From calm, protected bays to some of the best windsurfing spots in the world, Aruba's coastline puts every kind of water sport within reach."
          src="/ingested/arubaa/img-017.webp"
          alt="Aerial shot of a couple on a sailboat deck off the Aruban coast"
        />

        <SplitRow
          id="natural-wonders"
          icon={Mountain}
          eyebrow="Arikok & beyond"
          title="Natural Wonders"
          body="Explore Arikok National Park's desert landscape, then cool off snorkeling in coves carved into the island's limestone coast."
          src="/ingested/arubaa/img-031.webp"
          alt="A woman stands alone on sandy terrain overlooking the sea"
          reverse
        />

        <SplitRow
          id="dining"
          icon={Utensils}
          eyebrow="Every flavor"
          title="Dining"
          body="Aruba's restaurant scene spans European classics, South Asian spice and the freshest local seafood, often served just steps from the water."
          src="/ingested/arubaa/img-024.webp"
          alt="Friends raise their glasses over a dinner table"
        />

        <SplitRow
          id="arts-culture"
          icon={Landmark}
          eyebrow="San Nicolas"
          title="Arts & Culture"
          body="San Nicolas is rich in history, culture and architecture, a true reflection of the inhabitants of San Nicolas and their daily lives."
          src="/ingested/arubaa/img-034.webp"
          alt="Several people strolling along the coastline near San Nicolas"
          reverse
        />

        {/* Bento: Nightlife / Sightseeing / Shopping / Wellbeing / Sports & Golf */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              More ways to spend the day
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              The rest of the island, in five directions.
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
              Calendar of Events
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Community gatherings and festivals fill Aruba&apos;s calendar year-round, from
              carnival season to seaside food and music celebrations.
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
              Written by local experts
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Itineraries
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Pre-planned trip ideas, mapped out so you can spend less time deciding and
              more time enjoying the island.
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
                  A curated route through the island, built by the people who know it
                  best.
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
                Ready to fill your <span className="text-primary">own itinerary</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Beaches, coves, dinner reservations and everything in between: book your
                escape to One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/book-now">
                    Book Your Aruba Escape <ArrowRight className="size-4" />
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
