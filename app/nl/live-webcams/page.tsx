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
  title: "Live Vanuit Aruba",
  description:
    "Bekijk Aruba live: strandresort-webcams en lokale kanalen die uitzenden vanuit One Happy Island.",
};

const WEBCAM_SOURCE = "https://www.aruba.com/us/live-webcams-and-channels";

const webcams = [
  {
    name: "Costa Linda Beach Resort",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Bezoekers relaxen op het strand bij Costa Linda Beach Resort in Aruba",
  },
  {
    name: "Playa Linda Beach Resort",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Gasten genieten van de kust bij Playa Linda Beach Resort in Aruba",
  },
  {
    name: "Amsterdam Manor Beach Resort",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Een familie wandelt over het strand bij Amsterdam Manor Beach Resort in Aruba",
  },
  {
    name: "Aruba Marriott Resort & Stellaris Casino",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Gasten bij het zwembad van Aruba Marriott Resort & Stellaris Casino",
  },
  {
    name: "Bucuti & Tara Beach Resort",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Strandgangers bij Bucuti & Tara Beach Resort in Aruba",
  },
];

const channels = [
  {
    name: "Aruba Tourist Channel",
    src: "/ingested/arubaa/img-042.webp",
    alt: "Bezoekers genieten van Aruba's kustlijn, te zien op het Aruba Tourist Channel",
  },
  {
    name: "Aruba.tv",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Locals en bezoekers delen Aruba's cultuur op Aruba.tv",
  },
];

export default function LiveWebcamsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Nu in beeld"
          title="Live Vanuit Aruba"
          body="Van pak- en reistips en Engels nieuws op het Live Channel, tot live sport- en cultuurevenementen, tot de rustige bries door een palmboom op het strand: bekijk Aruba live via onze webcams."
          src="/ingested/arubaa/img-029.webp"
          alt="Luchtfoto van strandgangers die in het turquoise water van Aruba lopen"
        />

        <div className="container-px mx-auto -mt-8 max-w-6xl">
          <Reveal delay={0.1}>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-medium">Live vanuit One Happy Island</p>
            </div>
          </Reveal>
        </div>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Live Strandwebcams</h2>
            <p className="mt-4 text-muted-foreground">
              Tik op een resort hieronder om de live streaming hub te openen en jouw
              uitzicht op het eiland te kiezen, precies nu.
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
                  aria-label={`Bekijk de live webcam van ${cam.name}`}
                >
                  <ImageCard
                    src={cam.src}
                    alt={cam.alt}
                    eyebrow="Nu live"
                    title={cam.name}
                    description="Stream de live strandwebcam van dit resort en zie het eiland in real time."
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
              <Tv className="size-3.5" /> Uitzending
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Lokale Kanalen</h2>
            <p className="mt-4 text-muted-foreground">
              Volg eilandnieuws, sport en cultuur rechtstreeks van Aruba&apos;s eigen
              omroepen.
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
                  aria-label={`Bekijk ${ch.name} live`}
                >
                  <ImageCard
                    src={ch.src}
                    alt={ch.alt}
                    eyebrow="Nu live"
                    title={ch.name}
                    description="Bekijk de live uitzending van dit kanaal vanuit Aruba."
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
                Genoeg gezien vanaf het scherm?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Ruil de webcam voor het echte uitzicht. Begin met het plannen van je eigen
                reis naar One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/nl/plan-your-visit">
                    Plan Je Reis <ArrowRight className="size-4" />
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
