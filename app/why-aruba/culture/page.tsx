import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowRight, Palette, Globe2, Music4 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Culture in Aruba",
  description:
    "One hundred nationalities, one island: street art, festivals and the people behind the Aruba Effect.",
};

const highlights = [
  {
    icon: Palette,
    title: "San Nicolas street art",
    src: "/ingested/arubaa/img-033.webp",
    alt: "A group of friends gathered together on an Aruba beach",
    description:
      "Aruba's second city turned its back streets into an open-air gallery, with murals from local and international artists covering entire buildings.",
  },
  {
    icon: Globe2,
    title: "A hundred nationalities, one island",
    src: "/ingested/arubaa/img-061.webp",
    alt: "Three women sitting on a rock on an Aruba beach",
    description:
      "Dutch, Papiamento, Spanish and English are all spoken here, often in the same conversation. That mix shows up in the food, the music and the welcome.",
  },
  {
    icon: Music4,
    title: "Local festivals",
    src: "/ingested/arubaa/img-064.webp",
    alt: "Three women standing together on an Aruba beach",
    description:
      "From Carnival's road march to smaller neighborhood fiestas, Aruba's calendar runs on music, color and an excuse to gather.",
  },
  {
    icon: Users,
    title: "Community by the water",
    src: "/ingested/arubaa/img-044.webp",
    alt: "A group of people walking together along the Aruba seashore",
    description:
      "Locals and visitors share the same beaches, the same rum shacks and the same sunset views, which is exactly how the island likes it.",
  },
];

export default function CulturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="One hundred flavors"
          title="Culture"
          body="One hundred nationalities. One hundred flavors. Aruba's diverse population lives in harmony, and it shows in every corner of the island, from its murals to its menus."
          src="/ingested/arubaa/img-060.webp"
          alt="A group of friends gathered together on an Aruba beach"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              More than a backdrop
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              A small island, a big mix of people
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba&apos;s culture isn&apos;t kept in a museum. It&apos;s in the language
              switching mid-sentence, the aroma coming from a roadside food truck, and the
              mural that wraps around a whole city block.
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
              Where to feel it firsthand
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="A farmer working in an Aruban field"
              title="Local markets"
              description="Farmers markets and roadside stands sell what's grown just down the road."
            />
            <ImageCard
              src="/ingested/arubaa/img-066.webp"
              alt="People gathering together on an Aruba beach"
              title="Neighborhood gatherings"
              description="Small-town fiestas welcome visitors as easily as they welcome neighbors."
            />
            <ImageCard
              src="/ingested/arubaa/img-062.webp"
              alt="Two women running together on a white sand beach"
              title="Shared beaches"
              description="Locals and visitors mix easily on Aruba's public beaches, day and night."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Want the full story?</h2>
            <p className="max-w-md text-muted-foreground">
              See the island&apos;s history and the regions that shaped it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/our-island#history-culture">
                  History & Culture <ArrowRight className="size-4" />
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
