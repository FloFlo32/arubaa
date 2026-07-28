import type { Metadata } from "next";
import Link from "next/link";
import { Clock, DollarSign, GlassWater, Sunset, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Sunset Sail",
  description:
    "A relaxed 2-hour sunset sail out of Aruba aboard a traditional schooner, with an open bar and views of the coastline.",
};

const details = [
  { icon: Clock, label: "5:30pm – 7:30pm", sub: "2 hours" },
  { icon: DollarSign, label: "$59 per person", sub: "All ages" },
  { icon: GlassWater, label: "Open bar", sub: "Included" },
  { icon: Sunset, label: "No snorkeling", sub: "Just the views" },
];

const included = [
  "Open bar (beer, rum punch, soda, water)",
  "Scenic views along Aruba's coastline",
  "A relaxed pace, no snorkel gear needed",
  "A crew that knows the best spot to watch the sun go down",
];

export default function SunsetSailPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Just the views"
          title="Sunset Sail"
          body="A relaxed two hours on the water, an open bar in hand, watching Aruba's sky turn every shade of pink and orange."
          src="/ingested/jollypirates/img-031.webp"
          alt="The Jolly Pirates schooner under sail along Aruba's turquoise coastline"
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
              <Badge variant="accent">The easy option</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                No plan needed, just show up
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                No snorkel gear, no BBQ, no itinerary: just a schooner, an open bar, and
                miles of Aruba&apos;s coastline sliding by as the sun drops toward the
                horizon. It&apos;s the shortest of our cruises, and the easiest to fit into
                any evening.
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
                    Book This Sail <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/jollypirates/img-027.webp"
                  alt="Guests toast with drinks at golden hour on deck"
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
            <h2 className="text-3xl font-bold sm:text-4xl">More from this sail</h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/jollypirates/img-010.webp"
              alt="The Jolly Pirates crew in costume aboard the schooner"
              title="The Crew"
              description="Friendly faces who know Aruba's coast by heart."
            />
            <ImageCard
              src="/ingested/jollypirates/img-025.webp"
              alt="A crew member in a Jolly Pirates shirt with guests holding drinks"
              title="The Open Bar"
              description="Beer, rum punch, soda and water, all included."
            />
            <ImageCard
              src="/ingested/jollypirates/img-020.webp"
              alt="Guests relaxing together on deck"
              title="Easy Evenings"
              description="No plan required, just an evening on the water."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Want dinner with your sunset?</h2>
            <p className="max-w-md text-muted-foreground">
              Our adults-only sunset dinner cruise adds a BBQ, dessert and a live DJ.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/cruises/sunset-dinner-cruise">See Sunset Dinner Cruise</Link>
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
