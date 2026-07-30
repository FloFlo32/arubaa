import type { Metadata } from "next";
import { Clock, MapPin, GlassWater, Users, Check, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

export const metadata: Metadata = {
  title: "Morning Splash Adventure",
  description:
    "A 4-hour morning snorkeling adventure aboard Flagship Aruba's traditional schooner: 3 snorkel stops, gear, drinks and snacks included.",
};

const details = [
  { icon: Clock, label: "9am to 1pm", sub: "4 hours" },
  { icon: MapPin, label: "3 snorkel stops", sub: "Boca Catalina, Antilla, Malmok" },
  { icon: GlassWater, label: "Drinks + snacks", sub: "Included" },
  { icon: Users, label: "All ages welcome", sub: "Max 24 guests aboard" },
];

const included = [
  "Mask, snorkel and fins",
  "3 snorkel stops",
  "Unlimited soft drinks, juices and water",
  "Caribbean snacks",
  "Live music and crew entertainment",
];

const highlights = [
  "Crystal-clear waters with vibrant marine life",
  "Visit Boca Catalina & Malmok Beach",
  "Professional crew with safety instruction",
  "Perfect for beginners and experienced snorkelers",
  "Sunny vibes and relaxed atmosphere",
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
              <p className="mt-4 text-lg font-bold text-primary">From $98 per adult</p>
              <div className="mt-4">
                <BookNowButton activityId="" label="Book This Tour" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparubaa/snorkel-sea-turtle.webp"
                  alt="A sea turtle swimming in clear turquoise water"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: "28% center" }}
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
