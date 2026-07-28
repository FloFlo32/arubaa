import type { Metadata } from "next";
import Link from "next/link";
import { Clock, DollarSign, MapPin, GlassWater, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Afternoon Snorkeling Tour",
  description:
    "A 3-hour afternoon snorkeling tour aboard a traditional Aruba schooner: 2 snorkel stops, open bar and the rope swing.",
};

const details = [
  { icon: Clock, label: "2pm – 5pm", sub: "3 hours" },
  { icon: DollarSign, label: "$76 per person", sub: "Kids priced lower" },
  { icon: MapPin, label: "2 snorkel sites", sub: "Reef stops" },
  { icon: GlassWater, label: "Open bar", sub: "Included" },
];

const included = [
  "Mask, snorkel and fins",
  "2 snorkel stops",
  "Open bar (beer, rum punch, soda, water)",
  "Unlimited turns on the rope swing",
  "A crew that keeps things fun",
];

export default function AfternoonSnorkelingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Afternoon Snorkeling Tour"
          title="A shorter trip, same jolly moments"
          body="Two snorkel stops, the open bar and the rope swing, all wrapped into a 3-hour afternoon window."
          src="/ingested/jollypirates/img-044.webp"
          alt="Guests relaxing on the bow of the Jolly Pirates schooner in the afternoon sun"
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
              <Badge variant="accent">The full trip</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                Sleep in, then snorkel
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Our afternoon tour trims the morning trip down to its best parts: two
                snorkel stops in calm, shallow water, the rope swing off the bow, and an
                open bar that runs the whole way back to MooMba Beach.
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
                    Book This Trip <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/jollypirates/img-059.webp"
                  alt="The Jolly Pirates schooner anchored near a snorkel site with guests in the water"
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
            <h2 className="text-3xl font-bold sm:text-4xl">More from this trip</h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/jollypirates/img-041.webp"
              alt="A guest swings from the rope swing over clear turquoise water"
              title="The Rope Swing"
              description="Unlimited turns between snorkel stops."
            />
            <ImageCard
              src="/ingested/jollypirates/img-025.webp"
              alt="A crew member in a Jolly Pirates shirt with guests holding drinks"
              title="The Open Bar"
              description="Beer, rum punch, soda and water, all included."
            />
            <ImageCard
              src="/ingested/jollypirates/img-020.webp"
              alt="Guests relaxing together with drinks on deck"
              title="Onboard Fun"
              description="A crew that keeps the whole trip lighthearted."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Want the full morning trip?</h2>
            <p className="max-w-md text-muted-foreground">
              Our morning trip adds a third snorkel stop and a full BBQ lunch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/cruises/morning-snorkeling">See Morning Trip</Link>
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
