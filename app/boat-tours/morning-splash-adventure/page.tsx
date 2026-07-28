import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, GlassWater, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Morning Splash Adventure",
  description:
    "A 4-hour morning snorkeling adventure aboard Flagship Aruba's traditional schooner: 3 snorkel stops, gear, drinks and snacks included.",
};

const details = [
  { icon: Clock, label: "9am – 1pm", sub: "4 hours" },
  { icon: MapPin, label: "3 snorkel stops", sub: "Boca Catalina, Antilla, Malmok" },
  { icon: GlassWater, label: "Drinks + snacks", sub: "Included" },
];

const included = [
  "Mask, snorkel and fins",
  "3 snorkel stops",
  "Unlimited soft drinks, juices and water",
  "Caribbean snacks",
  "Live music and crew entertainment",
];

export default function MorningSplashAdventurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Morning Splash Adventure"
          title="Start your day in the water"
          body="Three snorkel stops through crystal-clear water and vibrant marine life, with gear, drinks and snacks included."
          src="/ingested/flagshiparuba/img-008.webp"
          alt="A snorkeler smiles at the camera in clear turquoise water off Aruba's coast"
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
                Three sites, one easy morning
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                We sail out to three of Aruba&apos;s best snorkel sites: the calm reef at
                Boca Catalina, the WWII-era SS Antilla shipwreck, and the clear water off
                Malmok Beach. Mask, snorkel and fins are included, and our crew keeps
                unlimited drinks and Caribbean snacks coming the whole way.
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
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                  alt="A diver swims past a school of yellow reef fish"
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
              description="A calm, shallow reef, great for every skill level."
            />
            <ImageCard
              src="/ingested/flagshiparuba/img-006.webp"
              alt="A guest jumps from the schooner into the ocean"
              title="Off the Bow"
              description="Jump straight in between snorkel stops."
            />
            <ImageCard
              src="/ingested/flagshiparuba/img-007.webp"
              alt="The Flagship Aruba schooner under sail"
              title="The Ship"
              description="A traditional wooden schooner, built to feel like the real thing."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Prefer an evening trip?</h2>
            <p className="max-w-md text-muted-foreground">
              Our Sunset & Stars Cruise trades snorkeling for an open bar and a sky full
              of stars.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/boat-tours/sunset-stars-cruise">See Sunset & Stars Cruise</Link>
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
