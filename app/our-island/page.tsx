import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Ruler,
  Compass,
  Landmark,
  Fish,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map } from "@/components/sections/map";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Island",
  description:
    "19.6 miles of desert, coastline and culture: get to know the geography and history of Aruba.",
};

const facts = [
  {
    icon: Ruler,
    label: "19.6 x 6 miles",
    body: "Only 19.6 miles long and six miles across, our beautiful speck of powdery white sand is a paradise shaped by the sea.",
  },
  {
    icon: MapPin,
    label: "Southern Caribbean",
    body: "Aruba is a small island in the southern Caribbean Sea, about 15 miles north of Venezuela.",
  },
  {
    icon: Compass,
    label: "Outside the hurricane belt",
    body: "We sit just outside of the hurricane belt, one more reason our sunny days are so dependable.",
  },
];

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
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div id={id} className={cn("py-10 sm:py-12", id && "scroll-mt-24")}>
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
              className="aspect-[5/4] w-full object-cover object-center"
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
          <h3 className="mt-2 text-balance text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </div>
  );
}

export default function OurIslandPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-28 pb-16 sm:pt-32 sm:pb-24 md:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <Badge variant="accent">Our happy island</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Our Island
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-foreground/80">
                Ever ask yourself: where is Aruba? In the warm waters of the southern
                Caribbean, just outside of the hurricane belt, that&apos;s where. Our
                happy island.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Only 19.6 miles long and six miles across, our beautiful speck of
                powdery white sand is a paradise shaped by the sea: an island that
                embraces you with warm sunny days and even warmer, sunnier people. To
                the south and west, Aruba is alive with resorts, shopping and nightlife.
                To the north, waves and wind sculpt rugged coastlines and limestone
                cliffs. And in our heart, Arikok National Park protects a sprawling
                landscape of desert sand, towering cacti and natural wonders.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="A family walking together holding hands on an Aruba beach"
                  width={900}
                  height={1050}
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[6/7] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Island Facts */}
        <section id="island-facts" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Island Facts
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              The basics, before you land
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {facts.map((f) => (
              <RevealItem key={f.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{f.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                <Fish className="size-4" />
              </span>
              <p className="text-pretty text-sm text-muted-foreground">
                When planning a Caribbean vacation, you might wonder how many exotic
                animals you&apos;ll spot. When that vacation is to Aruba, the answer is:
                a lot.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Regions */}
        <section id="regions" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Regions
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              From dry desert to Dutch colonial capital
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              From our dry desert to our Dutch colonial capital, every part of Aruba
              makes us unlike any other Caribbean island.
            </p>
          </Reveal>
          <div className="mt-4 divide-y divide-border">
            <SplitRow
              icon={MapPin}
              eyebrow="South & West"
              title="Resorts, shopping and nightlife"
              body="The south and west coasts are alive with resorts, boutiques and beach bars, all facing the island's calmest water."
              src="/ingested/arubaa/img-029.webp"
              alt="Aerial view of beachgoers wading in Aruba's turquoise water"
            />
            <SplitRow
              icon={Compass}
              eyebrow="North coast"
              title="Rugged, wind-sculpted shores"
              body="Waves and wind carve the north coast into limestone cliffs, sea caves and natural rock arches."
              src="/ingested/arubaa/img-027.webp"
              alt="A couple explores a sea cave and natural rock arch on Aruba's north coast"
              reverse
            />
            <SplitRow
              icon={Landmark}
              eyebrow="The interior"
              title="Desert sand and towering cacti"
              body="At the island's heart, Arikok National Park protects a landscape of desert trails, cacti and quiet farmland."
              src="/ingested/arubaa/img-033.webp"
              alt="A group of friends gathered together on an Aruba beach"
            />
          </div>
        </section>

        {/* History & Culture */}
        <section id="history-culture" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/arubaa/img-042.webp"
                  alt="A family walks together holding hands along the Aruban shoreline"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Landmark className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Passed down
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                History & Culture
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                You&apos;ll find traces of Aruba&apos;s history and culture on cave
                walls, pastel facades, and the faces of our happy people.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 360 Map */}
        <section id="map" className="container-px mx-auto max-w-4xl pt-4 pb-4 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              360 Map
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              See the whole island at once
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              An interactive overview of Aruba, from the resorts in the south to the
              wild north coast.
            </p>
          </Reveal>
        </section>
        <Map />

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Ready to see it for <span className="text-primary">yourself</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Every region of Aruba is closer than you think.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/plan-your-visit">
                    Plan Your Visit <ArrowRight className="size-4" />
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
