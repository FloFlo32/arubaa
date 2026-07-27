import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Heart,
  Users,
  Flower2,
  Utensils,
  Baby,
  Gem,
  Plane,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why Aruba",
  description:
    "Discover the Aruba Effect: adventure, romance, culture, wellness, food, family fun and weddings on One Happy Island.",
};

const effectStats = [
  {
    icon: Plane,
    label: "Easy",
    body: "Over 100 direct flights from major U.S. and Canadian cities.",
  },
  {
    icon: Globe,
    label: "Convenient",
    body: "Four languages spoken, and more sunny days than any other Caribbean island.",
  },
  {
    icon: MapPin,
    label: "Discoverable",
    body: "Small, safe and modern, so you can make the entire island your playground.",
  },
];

function SplitRow({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  src,
  alt,
  reverse = false,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-6xl py-16 sm:py-20">
      <div
        className={cn(
          "grid items-center gap-10 md:grid-cols-2 md:gap-14",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <Icon className="size-5" />
          </span>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

function SliderSection({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  items,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  items: { src: string; alt: string; title: string; description: string }[];
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-6xl py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
          <Icon className="size-5" />
        </span>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-4 text-pretty text-muted-foreground">{body}</p>
      </Reveal>
      <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
        {items.map((it) => (
          <ImageCard key={it.src} {...it} />
        ))}
      </AutoSlider>
    </section>
  );
}

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
              <RevealItem
                key={s.label}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{s.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <SplitRow
          id="adventure"
          icon={Compass}
          eyebrow="Kaweta"
          title="Adventure"
          body="Kaweta. It means curious in Papiamento, and it's the perfect word to describe Aruba's spirit of exploration."
          src="/ingested/arubaa/img-027.webp"
          alt="A couple explores a sea cave and rock arch along Aruba's coastline"
        />

        <SplitRow
          id="romance"
          icon={Heart}
          eyebrow="Together"
          title="Romance"
          body="Escape the world together. Aruba's beautiful scenery makes it an ideal destination for a romantic getaway."
          src="/ingested/arubaa/img-057.webp"
          alt="A couple chats poolside together at a resort in Aruba"
          reverse
        />

        <SplitRow
          id="culture"
          icon={Users}
          eyebrow="One hundred flavors"
          title="Culture"
          body="One hundred nationalities. One hundred flavors. Aruba's diverse population lives in harmony, and it shows in every corner of the island."
          src="/ingested/arubaa/img-033.webp"
          alt="A group of friends gathered together on an Aruba beach"
        />

        <SliderSection
          id="wellness"
          icon={Flower2}
          eyebrow="Disconnect"
          title="Wellness"
          body="Aruba is made to help you disconnect from the world and discover yourself."
          items={[
            {
              src: "/ingested/arubaa/img-031.webp",
              alt: "A woman standing alone on sandy terrain overlooking the sea in Aruba",
              title: "Cliffside stillness",
              description: "Quiet moments on the bluffs, with the Caribbean stretched out below.",
            },
            {
              src: "/ingested/arubaa/img-019.webp",
              alt: "A woman in a spa robe relaxes by a candlelit tub",
              title: "Slow, quiet luxury",
              description: "Spa rituals designed to help you unwind at your own pace.",
            },
          ]}
        />

        <SplitRow
          id="eat-drink"
          icon={Utensils}
          eyebrow="Every craving"
          title="Eat & Drink"
          body="Aruba's culinary scene reflects its multicultural population, with diverse offerings for every craving."
          src="/ingested/arubaa/img-036.webp"
          alt="A couple relaxing together on the coastal rocks in Aruba"
          reverse
        />

        <SliderSection
          id="families"
          icon={Baby}
          eyebrow="For every age"
          title="Families"
          body="Aruba has activities for guests of all ages, making it an ideal destination for a family vacation."
          items={[
            {
              src: "/ingested/arubaa/img-037.webp",
              alt: "A family poses together for a photo on the sand",
              title: "Beach days, together",
              description: "Sand, shallows and shade for every member of the family.",
            },
            {
              src: "/ingested/arubaa/img-042.webp",
              alt: "A family walks together holding hands along the shoreline",
              title: "Slow strolls",
              description: "Easy, flat coastline that's kind to little legs.",
            },
            {
              src: "/ingested/arubaa/img-035.webp",
              alt: "A caregiver carries a young child along the beach",
              title: "Built for little ones",
              description: "Calm bays and warm, shallow water made for small swimmers.",
            },
          ]}
        />

        <SliderSection
          id="weddings"
          icon={Gem}
          eyebrow="Say I do"
          title="Weddings"
          body="Consistent sunny weather and stunning natural beauty make Aruba the ideal place for a dream wedding."
          items={[
            {
              src: "/ingested/arubaa/img-046.webp",
              alt: "A couple celebrates their wedding on an Aruban beach",
              title: "Barefoot ceremonies",
              description: "Say your vows with your toes in the sand and the sea as a backdrop.",
            },
            {
              src: "/ingested/arubaa/img-048.webp",
              alt: "A newly married couple holds hands on the shoreline",
              title: "Golden hour vows",
              description: "Sunset light turns every ceremony photo into a keepsake.",
            },
            {
              src: "/ingested/arubaa/img-050.webp",
              alt: "A couple runs through the shallows on their wedding day",
              title: "Joy, in motion",
              description: "Aruba's calm shallows make room for a little celebration.",
            },
          ]}
        />

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
