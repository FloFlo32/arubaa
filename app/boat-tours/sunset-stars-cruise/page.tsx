import type { Metadata } from "next";
import Link from "next/link";
import { Clock, GlassWater, Stars, Check } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { OtherAdventuresSidebar } from "@/components/sections/other-adventures-sidebar";

export const metadata: Metadata = {
  title: "Sunset & Stars Cruise",
  description:
    "A 2-hour evening sail with Flagship Aruba: open bar, Caribbean bites, swimming stops and stargazing over the water.",
};

const details = [
  { icon: Clock, label: "5:30pm – 7:30pm", sub: "2 hours" },
  { icon: GlassWater, label: "Open bar", sub: "Cocktails, soft drinks, juices" },
  { icon: Stars, label: "Stargazing", sub: "As night falls" },
];

const included = [
  "Open bar: soft drinks, juices, cocktails and snacks",
  "Caribbean-inspired food",
  "Two swimming stops",
  "Music and entertainment",
  "Scenic sunset sailing along Aruba's coastline",
];

export default function SunsetStarsCruisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Sunset & Stars Cruise"
          title="An evening on the water"
          body="Unwind as the sun dips below the horizon, with local bites, drinks and ocean breezes for couples, families and friends."
          src="/ingested/flagshiparuba/img-009.webp"
          alt="Aruba's rocky turquoise coastline at golden hour"
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
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
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
                <BookNowButton activityId="" label="Book This Cruise" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparubaa/schooner-turquoise-anchor.webp"
                  alt="The Flagship Aruba schooner under sail at dusk"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
          <OtherAdventuresSidebar excludeSlug="sunset-stars-cruise" />
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">More from this cruise</h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/flagshiparubaa/schooner-sunset-guests.webp"
              alt="Guests aboard the schooner at sunset"
              title="Good Company"
              description="Room to relax with friends, family or a date."
            />
            <ImageCard
              src="/ingested/flagshiparubaa/schooner-pink-sunset.webp"
              alt="The schooner silhouetted under a pink sunset sky"
              title="Golden Hour"
              description="Front-row views as the sun drops toward the horizon."
            />
            <ImageCard
              src="/ingested/flagshiparuba/img-006.webp"
              alt="A guest jumps from the schooner into the ocean"
              title="Swimming Stops"
              description="Two chances to cool off along the way."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Want to snorkel first?</h2>
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
