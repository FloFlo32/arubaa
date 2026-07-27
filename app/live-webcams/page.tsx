import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Radio, Tv, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";

export const metadata: Metadata = {
  title: "Live from Aruba",
  description:
    "Watch Aruba live: beach resort webcams and local channels streaming from One Happy Island.",
};

const WEBCAM_SOURCE = "https://www.aruba.com/us/live-webcams-and-channels";

const webcams = [
  {
    name: "Costa Linda Beach Resort",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Visitors relaxing on the beach near Costa Linda Beach Resort in Aruba",
  },
  {
    name: "Playa Linda Beach Resort",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Guests enjoying the shoreline at Playa Linda Beach Resort in Aruba",
  },
  {
    name: "Amsterdam Manor Beach Resort",
    src: "/ingested/arubaa/img-033.webp",
    alt: "A family walking the beach near Amsterdam Manor Beach Resort in Aruba",
  },
  {
    name: "Aruba Marriott Resort & Stellaris Casino",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Guests at the pool of Aruba Marriott Resort & Stellaris Casino",
  },
  {
    name: "Bucuti & Tara Beach Resort",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Beachgoers near Bucuti & Tara Beach Resort in Aruba",
  },
];

const channels = [
  {
    name: "Aruba Tourist Channel",
    src: "/ingested/arubaa/img-042.webp",
    alt: "Visitors enjoying Aruba's coastline, featured on the Aruba Tourist Channel",
  },
  {
    name: "Aruba.tv",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Locals and visitors sharing Aruba's culture on Aruba.tv",
  },
];

export default function LiveWebcamsPage() {
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
                  <Radio className="size-3.5" /> Streaming now
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Live from <span className="text-gradient">Aruba</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  From packing tips and English news on the Live Channel, to live sport and
                  culture events, to the peaceful breeze through a palm tree on the beach:
                  watch Aruba live through our webcams.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                  <Image
                    src="/ingested/arubaa/img-029.webp"
                    alt="Aerial view of beachgoers wading in Aruba's turquoise water"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    quality={80}
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl shadow-black/10 sm:flex">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                  </span>
                  <p className="text-sm font-medium">Live from One Happy Island</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Live Beach Webcams</h2>
            <p className="mt-4 text-muted-foreground">
              Tap any resort below to open the live stream hub and pick your view of the
              island, right now.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {webcams.map((cam) => (
              <RevealItem key={cam.name}>
                <a
                  href={WEBCAM_SOURCE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                  aria-label={`Watch the live webcam for ${cam.name}`}
                >
                  <ImageCard
                    src={cam.src}
                    alt={cam.alt}
                    eyebrow="Live now"
                    title={cam.name}
                    description="Stream this resort&apos;s live beach webcam and see the island in real time."
                    className="cursor-pointer"
                  />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">
              <Tv className="size-3.5" /> Broadcast
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Local Channels</h2>
            <p className="mt-4 text-muted-foreground">
              Catch island news, sport and culture straight from Aruba&apos;s own broadcasters.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {channels.map((ch) => (
              <RevealItem key={ch.name}>
                <a
                  href={WEBCAM_SOURCE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                  aria-label={`Watch ${ch.name} live`}
                >
                  <ImageCard
                    src={ch.src}
                    alt={ch.alt}
                    eyebrow="Live now"
                    title={ch.name}
                    description="Watch this channel's live broadcast from Aruba."
                    ratio="aspect-[16/9]"
                    className="cursor-pointer"
                  />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Seen enough from the screen?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Trade the webcam for the real view. Start planning your own trip to One
                Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/plan-your-visit">
                    Plan Your Trip <ArrowRight className="size-4" />
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
