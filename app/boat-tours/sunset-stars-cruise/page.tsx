import type { Metadata } from "next";
import { Clock, GlassWater, Stars, Users, Check, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

export const metadata: Metadata = {
  title: "Sunset Cruise",
  description:
    "A 2-hour evening sail with Flagship Aruba: open bar, Caribbean bites, swimming stops and stargazing over the water.",
};

const details = [
  { icon: Clock, label: "5:30pm to 7:30pm", sub: "2 hours" },
  { icon: GlassWater, label: "Open bar", sub: "Cocktails, soft drinks, juices" },
  { icon: Stars, label: "Stargazing", sub: "As night falls" },
  { icon: Users, label: "Couples & families", sub: "Max 24 guests aboard" },
];

const included = [
  "Open bar: soft drinks, juices, cocktails and snacks",
  "Caribbean-inspired food",
  "Two swimming stops",
  "Music and entertainment",
  "Scenic sunset sailing along Aruba's coastline",
];

const highlights = [
  "Watch the sun dip below the Caribbean horizon",
  "Savor local Aruban bites and premium drinks",
  "Gentle ocean breezes and relaxing music",
  "Perfect for couples, friends, or special occasions",
  "Sail under the emerging stars",
  "Unforgettable golden-hour photo opportunities",
];

export default function SunsetStarsCruisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Sunset Cruise"
          title="An evening on the water"
          body="Unwind as the sun dips below the horizon, with local bites, drinks and ocean breezes for couples, families and friends."
          src="/ingested/flagship-owner/ship-sunset-dramatic-wide.jpg"
          alt="The Flagship Aruba schooner silhouetted against a dramatic sunset sky"
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

        <section className="container-px mx-auto max-w-6xl pb-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <Badge variant="accent">A relaxed evening</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                Sail, swim, and watch the stars come out
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                This is our easygoing evening sail: no snorkel gear required, just an
                open bar, Caribbean bites, two swimming stops, and a front-row seat as
                the sky turns from sunset orange to a blanket of stars over the water.
                It suits couples, honeymooners, families and groups of friends alike.
              </p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                What&apos;s Included
              </h3>
              <ul className="mt-3 space-y-2.5">
                {included.map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Highlights
              </h3>
              <ul className="mt-3 space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" /> {h}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-muted-foreground">
                Please arrive 30 minutes before departure.
              </p>
              <p className="mt-4 text-lg font-bold text-ocean">From $90 per adult</p>
              <div className="mt-4">
                <BookNowButton activityId="8ff35752-c22a-41f6-b142-4679aa1d1fb4" label="Book This Cruise" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagship-owner/schooner-pink-sunset-wide.jpg"
                  alt="The Flagship Aruba schooner sailing under a pink sunset sky"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
