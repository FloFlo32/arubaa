import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Sunset, UtensilsCrossed, Flower2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Romance in Aruba",
  description:
    "Sunset walks, private dinners and quiet coves: how couples find the Aruba Effect.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Golden hour, every evening",
    src: "/ingested/arubaa/img-076.webp",
    alt: "A man and woman sitting together on an Aruba beach during golden hour",
    description:
      "Consistent sun means a consistent sunset. Pick a spot on the west coast and you're guaranteed a show, most nights without a cloud in the way.",
  },
  {
    icon: UtensilsCrossed,
    title: "Dinner, barefoot in the sand",
    src: "/ingested/arubaa/img-078.webp",
    alt: "A man and woman standing together near a palm tree on an Aruba beach",
    description:
      "Beachfront restaurants set tables right at the waterline, so dinner comes with a soundtrack of waves and a front-row sunset.",
  },
  {
    icon: Flower2,
    title: "Slow mornings, two chairs",
    src: "/ingested/arubaa/img-080.webp",
    alt: "A woman and man wading together on an Aruba beach",
    description:
      "No itinerary required. Aruba rewards the couples who do nothing more ambitious than a long walk and an even longer breakfast.",
  },
  {
    icon: Heart,
    title: "Quiet coves for two",
    src: "/ingested/arubaa/img-036.webp",
    alt: "A couple relaxing together on the coastal rocks in Aruba",
    description:
      "Away from the main strip, the island's smaller coves and tide pools are easy to find and easy to have entirely to yourselves.",
  },
];

export default function RomancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Together"
          title="Romance"
          body="Escape the world together. Aruba's beautiful scenery, warm evenings and slower pace make it an ideal destination for a romantic getaway, first date or fiftieth anniversary alike."
          src="/ingested/arubaa/img-076.webp"
          alt="A man and woman sitting together on an Aruba beach during golden hour"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Made for two
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Romance doesn&apos;t need a reservation here
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba&apos;s size works in your favor: a short drive puts you on a different
              coastline, in a different mood, without ever losing the rest of the day.
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
              More moments worth planning around
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-019.webp"
              alt="A woman in a spa robe relaxes by a candlelit tub"
              title="Couples spa days"
              description="Side-by-side treatments designed to slow both of you down at once."
            />
            <ImageCard
              src="/ingested/arubaa/img-068.webp"
              alt="A couple holding drinks together outdoors in Aruba"
              title="Sunset cocktails"
              description="Beach bars time happy hour to the sunset, not the clock."
            />
            <ImageCard
              src="/ingested/arubaa/img-009.webp"
              alt="A couple relaxes under a resort umbrella at sunset"
              title="Private cabanas"
              description="Reserve a shaded spot for the day and let the island come to you."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planning something special?</h2>
            <p className="max-w-md text-muted-foreground">
              From anniversary trips to proposals, see how to plan the details.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/why-aruba/weddings">
                  Explore Weddings <ArrowRight className="size-4" />
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
