import type { Metadata } from "next";
import Link from "next/link";
import { Tv, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

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
        <PhotoHero
          eyebrow="Streaming now"
          title="Live from Aruba"
          body="From packing tips and English news on the Live Channel, to live sport and culture events, to the peaceful breeze through a palm tree on the beach: watch Aruba live through our webcams."
          src="/ingested/arubaa/img-029.webp"
          alt="Aerial view of beachgoers wading in Aruba's turquoise water"
        />

        <div className="container-px mx-auto -mt-8 max-w-6xl">
          <Reveal delay={0.1}>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-medium">Live from One Happy Island</p>
            </div>
          </Reveal>
        </div>

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
