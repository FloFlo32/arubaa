import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Music, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Afternoon Pirate Party",
  description:
    "A 3.5-hour afternoon cruise with Flagship Aruba: two premium snorkel stops, a Caribbean-style lunch, open bar, rope swing and island music.",
};

const details = [
  { icon: Clock, label: "1:30pm – 5:00pm", sub: "3.5 hours" },
  { icon: MapPin, label: "2 snorkel stops", sub: "Boca Catalina, Malmok" },
  { icon: Music, label: "Rope swing + music", sub: "Caribbean rhythms onboard" },
];

const included = [
  "Mask, snorkel and fins",
  "Caribbean-style lunch served midway through the cruise",
  "Open bar: unlimited soft drinks, warm drinks, juices and cocktails",
  "Two snorkel stops, chosen daily by the captain",
  "Rope swing into the ocean",
];

export default function AfternoonPiratePartyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Afternoon Pirate Party"
          title="A lively midday cruise"
          body="Music, a rope swing, premium snorkel spots and an open bar, for guests who want more energy in their afternoon."
          src="/ingested/flagshiparuba/img-006.webp"
          alt="A guest jumps from the Flagship Aruba schooner into the ocean"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <RevealGroup className="grid gap-4 sm:grid-cols-3" stagger={0.06}>
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
              <Badge variant="accent">The full trip</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                Snorkel, swing, and soak up the music
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Our captain picks the two best snorkel sites of the day, usually Boca
                Catalina and Malmok, based on the morning&apos;s conditions. Between stops, a
                Caribbean-style lunch comes out, the rope swing sees plenty of use, and
                island music keeps the deck lively the whole way.
              </p>
              <ul className="mt-6 space-y-2.5">
                {included.map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Please arrive 30 minutes before departure.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/book-now">
                    Book This Tour <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1546456073-92b9f0a8d413?auto=format&fit=crop&w=1200&q=80"
                  alt="Sunlight through clear turquoise Caribbean water"
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
            <h2 className="text-3xl font-bold sm:text-4xl">More from this tour</h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/flagshiparuba/img-009.webp"
              alt="A rocky cove and turquoise water along Aruba's northwest coast"
              title="Boca Catalina"
              description="A calm reef, great for every skill level."
            />
            <ImageCard
              src="/ingested/flagshiparuba/img-008.webp"
              alt="A snorkeler in clear turquoise water"
              title="Malmok"
              description="Clear water and easy access close to shore."
            />
            <ImageCard
              src="https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1200&q=80"
              alt="A school of fish swimming over a reef"
              title="Marine Life"
              description="Colorful reef fish at every stop."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Want mornings instead?</h2>
            <p className="max-w-md text-muted-foreground">
              Our Morning Splash Adventure covers three snorkel sites earlier in the day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/boat-tours/morning-splash-adventure">See Morning Splash Adventure</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/boat-tours">Back to All Boat Tours</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
