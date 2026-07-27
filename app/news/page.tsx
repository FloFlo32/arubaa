import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Newspaper, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";

export const metadata: Metadata = {
  title: "Aruba News, Island Tourism News",
  description: "Latest tourism news and updates from Aruba.",
};

const updates = [
  {
    title: "Autentico Aruba Culinary Festival",
    src: "/ingested/arubaa/img-036.webp",
    alt: "A couple relaxing together on the coastal rocks in Aruba",
    description:
      "Autentico returns this October for another unforgettable celebration of Aruba's culinary scene.",
  },
  {
    title: "myAruba App",
    src: "/ingested/arubaa/img-037.webp",
    alt: "Visitors exploring the Aruba coastline with the myAruba app",
    description: "Try myAruba, the app that helps you select amazing spots on the island.",
  },
  {
    title: "Tap Water Campaign",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Aerial view of beachgoers wading in Aruba's turquoise water",
    description: "Aruba is known for its pristine beaches and turquoise waters.",
  },
  {
    title: "Travel Requirements",
    src: "/ingested/arubaa/img-041.webp",
    alt: "Visitors arriving on an Aruba beach for their vacation",
    description:
      "Here are some details to remember when traveling to and from Aruba, including the new $20 sustainability fee.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <div className="container-px mx-auto grid max-w-7xl gap-10 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <Badge variant="accent">
                  <Newspaper className="size-3.5" /> Island updates
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Aruba, Island <span className="text-gradient">Tourism News</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  We&apos;re just getting started with the amazing effects Aruba has to
                  offer. Dig into your trip details below to unlock a Caribbean
                  experience that will fill you with sunshine and send you home with a
                  happy afterglow that never fades.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="A family walking together holding hands on an Aruba beach"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  quality={80}
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-20 pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Travel Requirements & Updates</h2>
            <p className="mt-4 text-muted-foreground">
              The latest from the Aruba Tourism Authority, kept current so your next trip
              starts with the right information.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {updates.map((item) => (
              <RevealItem key={item.title}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  eyebrow="Update"
                  title={item.title}
                  description={item.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Good news deserves a good deal
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                See what&apos;s currently on offer and turn today&apos;s update into your
                next trip.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/deals">
                    See Current Deals <ArrowRight className="size-4" />
                  </Link>
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
