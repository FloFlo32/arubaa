import type { Metadata } from "next";
import { Clock, MapPin, Music, Users, Check, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

export const metadata: Metadata = {
  title: "Afternoon Pirate Party",
  description:
    "A 3.5-hour afternoon cruise with Flagship Aruba: two premium snorkel stops, a Caribbean-style lunch, open bar, rope swing and island music.",
};

const details = [
  { icon: Clock, label: "1:30pm to 5:00pm", sub: "3.5 hours" },
  { icon: MapPin, label: "2 snorkel stops", sub: "Boca Catalina, Malmok" },
  { icon: Music, label: "Rope swing + music", sub: "Caribbean rhythms onboard" },
  { icon: Users, label: "Thrill-seekers welcome", sub: "Max 24 guests aboard" },
];

const included = [
  "Mask, snorkel and fins",
  "Caribbean-style lunch served midway through the cruise",
  "Open bar: unlimited soft drinks, warm drinks, juices and cocktails",
  "Two snorkel stops, chosen daily by the captain",
  "Rope swing into the ocean",
];

const highlights = [
  "Rope swinging into turquoise Caribbean waters",
  "Visit the WWII shipwreck SS Antilla",
  "Premium snorkeling at Boca Catalina",
  "Open bar with local drinks and bites",
  "Live music and festive vibes",
  "Friendly, witty crew that makes it unforgettable",
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
          src="/ingested/flagship-owner/afternoon-coastline.jpg"
          alt="The schooner anchored off Aruba's coast near Palm Beach"
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
                Snorkel, swing, and soak up the music
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Our captain picks the two best snorkel sites of the day, usually Boca
                Catalina and Malmok, based on the morning&apos;s conditions. Between stops, a
                Caribbean-style lunch comes out, the rope swing sees plenty of use, and
                island music keeps the deck lively the whole way.
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
              <p className="mt-4 text-lg font-bold text-primary">From $86 per adult</p>
              <div className="mt-4">
                <BookNowButton activityId="47611e71-4496-4915-99ef-816cb4ec6fe2" label="Book This Tour" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparubaa/guest-d.webp"
                  alt="Guests toasting with drinks at the onboard bar"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center"
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
