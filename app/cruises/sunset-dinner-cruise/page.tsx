import type { Metadata } from "next";
import Link from "next/link";
import { Clock, DollarSign, Music, Utensils, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Sunset Dinner Cruise",
  description:
    "An adults-only sunset dinner cruise on a pirate ship in Aruba: BBQ dinner, dessert, open bar and a live DJ.",
};

const details = [
  { icon: Clock, label: "5:30pm – 8:30pm", sub: "3 hours" },
  { icon: DollarSign, label: "$110 per person", sub: "Adults only" },
  { icon: Utensils, label: "BBQ + dessert", sub: "Included" },
  { icon: Music, label: "Live DJ", sub: "All cruise long" },
];

const included = [
  "BBQ dinner with dessert",
  "Open bar (beer, rum punch, cocktails, soda, water)",
  "Live DJ and dancing on deck",
  "Sunset views over Aruba's coastline",
  "A crew that keeps the party going",
];

export default function SunsetDinnerCruisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Adults-only Pirate Party"
          title="Sunset Dinner Cruise"
          body="Aruba's liveliest sunset session: a BBQ dinner, an open bar, a live DJ and a golden-hour sky, aboard a traditional teak schooner."
          src="/ingested/jollypirates/img-027.webp"
          alt="Guests toast with drinks at golden hour aboard the Jolly Pirates sunset cruise"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {details.map((d) => (
              <RevealItem key={d.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <d.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{d.label}</p>
                  <p className="text-xs text-muted-foreground">{d.sub}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-16 sm:pb-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <Badge variant="accent">Party like a pirate</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                No kids, all party
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                This is our adults-only trip, built for a night out rather than a day in
                the water. Dinner comes hot off the grill, the open bar covers cocktails
                as well as beer and rum punch, and a live DJ keeps the deck moving as
                the sun drops into the Caribbean Sea.
              </p>
              <ul className="mt-6 space-y-2.5">
                {included.map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/book-now">
                    Book This Cruise <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/jollypirates/img-020.webp"
                  alt="Guests enjoying drinks together on deck at sunset"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">More from this cruise</h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/jollypirates/img-031.webp"
              alt="The Jolly Pirates schooner under sail at golden hour"
              title="Golden Hour"
              description="Sunset views over Aruba's turquoise coastline."
            />
            <ImageCard
              src="/ingested/jollypirates/img-025.webp"
              alt="A crew member in a Jolly Pirates shirt with guests holding drinks"
              title="The Open Bar"
              description="Cocktails, beer, rum punch, soda and water."
            />
            <ImageCard
              src="/ingested/jollypirates/img-044.webp"
              alt="A group of guests laughing together on the schooner"
              title="On Deck"
              description="A live DJ keeps the party moving until we're back at the beach."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Bringing the whole family?</h2>
            <p className="max-w-md text-muted-foreground">
              Our sunset sail is a quieter, all-ages option with the same golden-hour views.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/cruises/sunset-sail">See Sunset Sail</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cruises">Back to All Cruises</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
