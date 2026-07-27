import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Heart, Users, Flower2, Utensils, Baby, Gem, Plane, Globe, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Why Aruba",
  description:
    "Discover the Aruba Effect: adventure, romance, culture, wellness, food, family fun and weddings on One Happy Island.",
};

const effectStats = [
  { icon: Plane, label: "Easy", body: "Over 100 direct flights from major U.S. and Canadian cities." },
  { icon: Globe, label: "Convenient", body: "Four languages spoken, and more sunny days than any other Caribbean island." },
  { icon: MapPin, label: "Discoverable", body: "Small, safe and modern, so you can make the entire island your playground." },
];

const effects = [
  {
    icon: Compass,
    title: "Adventure",
    href: "/why-aruba/adventure",
    teaser: "Cave arches, off-road trails and windsurf-ready coastlines for the curious.",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Two people kayaking together off the Aruba coast",
  },
  {
    icon: Heart,
    title: "Romance",
    href: "/why-aruba/romance",
    teaser: "Sunset walks, private dinners and quiet coves made for two.",
    src: "/ingested/arubaa/img-078.webp",
    alt: "A couple standing together near a palm tree on an Aruba beach",
  },
  {
    icon: Users,
    title: "Culture",
    href: "/why-aruba/culture",
    teaser: "One hundred nationalities, one island, endless stories to hear.",
    src: "/ingested/arubaa/img-060.webp",
    alt: "A group of friends gathered together on an Aruba beach",
  },
  {
    icon: Flower2,
    title: "Wellness",
    href: "/why-aruba/wellness",
    teaser: "Cliffside stillness and slow, quiet luxury at your own pace.",
    src: "/ingested/arubaa/img-031.webp",
    alt: "A woman standing alone on sandy terrain overlooking the sea in Aruba",
  },
  {
    icon: Utensils,
    title: "Eat & Drink",
    href: "/why-aruba/eat-and-drink",
    teaser: "A hundred flavors on one island, from rum shacks to fine dining.",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Friends holding wine glasses together outdoors",
  },
  {
    icon: Baby,
    title: "Families",
    href: "/why-aruba/families",
    teaser: "Calm, shallow water and easy days built for every age.",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Two boys running together on an Aruba beach",
  },
  {
    icon: Gem,
    title: "Weddings",
    href: "/why-aruba/weddings",
    teaser: "Barefoot ceremonies and golden-hour vows by the sea.",
    src: "/ingested/arubaa/img-046.webp",
    alt: "A couple celebrates their wedding on an Aruban beach",
  },
];

export default function WhyArubaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/5a23170b-58df-46b2-b401-1d0a35a9a7b5/mp4/00_Homepage_BGvideo_16x9.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Why Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba&apos;s charm comes from more than sunshine. It&apos;s the friendly
                people, the abundance of sunny days (more than any other Caribbean
                island), and the Aruba Effect: an overwhelming sense of warmth and
                happiness you&apos;ll feel all across the island.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Aruba Effect */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              The Aruba Effect
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Happy people: from locals to repeat visitors. What makes Aruba special?
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {effectStats.map((s) => (
              <RevealItem key={s.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{s.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Seven reasons */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Seven reasons, one island
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Explore the Aruba Effect
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Every visitor finds their own reason to fall for Aruba. Pick yours below for
              real activities, real people, and a full itinerary starter.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
            {effects.map((e) => (
              <ImageCard
                key={e.title}
                src={e.src}
                alt={e.alt}
                eyebrow={e.title}
                title={e.title}
                description={e.teaser}
                href={e.href}
                className="h-full"
              />
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Feel the <span className="text-primary">Aruba Effect</span> for yourself
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                One happy island, seven reasons to visit. Start turning this page into a
                trip.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/plan-your-visit">
                    Start Planning Your Trip <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/deals">See Today&apos;s Deals</Link>
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
