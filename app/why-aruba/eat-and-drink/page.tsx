import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, ArrowRight, Wine, Truck, Sunset } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Eat & Drink in Aruba",
  description:
    "A hundred flavors on one island: multicultural dining, rum shacks and sunset cocktails in Aruba.",
};

const highlights = [
  {
    icon: Wine,
    title: "Sunset, glass in hand",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Friends holding wine glasses together outdoors",
    description:
      "Beach bars build their whole evening around the sunset, with happy hour timed to the horizon instead of the clock.",
  },
  {
    icon: Truck,
    title: "Roadside and rum shacks",
    src: "/ingested/arubaa/img-066.webp",
    alt: "People gathering together on an Aruba beach in the evening",
    description:
      "Some of the best meals on the island come from a truck or a shack with plastic chairs, not a menu with a wine list.",
  },
  {
    icon: Sunset,
    title: "Tables at the waterline",
    src: "/ingested/arubaa/img-068.webp",
    alt: "A couple holding drinks together outdoors in Aruba",
    description:
      "Plenty of restaurants set their tables right where the sand meets the water, so dinner comes with its own view.",
  },
  {
    icon: Utensils,
    title: "A hundred flavors",
    src: "/ingested/arubaa/img-036.webp",
    alt: "A couple relaxing together on the coastal rocks in Aruba",
    description:
      "European classics, South Asian spice and fresh local seafood share the same small island, often the same block.",
  },
];

export default function EatAndDrinkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Every craving"
          title="Eat & Drink"
          body="Aruba's culinary scene reflects its multicultural population, with diverse offerings for every craving: from rum shacks to fine dining, and every sunset table in between."
          src="/ingested/arubaa/img-067.webp"
          alt="Friends holding wine glasses together outdoors"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              One hundred flavors
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              A small island with a big table
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              With over a hundred nationalities represented on island, Aruba is filled with
              flavors from every corner of the globe. Don&apos;t be surprised if you leave
              with a new favorite dish.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2" stagger={0.06}>
            {highlights.map((h) => (
              <RevealItem key={h.title}>
                <ImageCard
                  src={h.src}
                  alt={h.alt}
                  eyebrow={h.title}
                  title={h.title}
                  description={h.description}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              How locals eat and drink
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-060.webp"
              alt="A group of friends gathered together on an Aruba beach"
              title="Shared plates, shared tables"
              description="Aruban dining leans communal: bigger plates, longer tables, more toasts."
            />
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="A farmer working in an Aruban field"
              title="Grown close to home"
              description="Local farms supply more of the island's kitchens than you'd expect."
            />
            <ImageCard
              src="/ingested/arubaa/img-080.webp"
              alt="A woman and man wading together on an Aruba beach"
              title="Drinks with your feet in the sand"
              description="No shoes required at most beach bars, cocktail in hand."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Hungry already?</h2>
            <p className="max-w-md text-muted-foreground">
              See dining spots across the island, sorted by neighborhood and vibe.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/things-to-do#dining">
                  See Dining <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/why-aruba">Back to Why Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
