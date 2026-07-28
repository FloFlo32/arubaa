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
  title: "Live Från Aruba",
  description:
    "Se Aruba live: strandhotellens webbkameror och lokala kanaler som sänder från One Happy Island.",
};

const WEBCAM_SOURCE = "https://www.aruba.com/us/live-webcams-and-channels";

const webcams = [
  {
    name: "Costa Linda Beach Resort",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Besökare kopplar av på stranden nära Costa Linda Beach Resort på Aruba",
  },
  {
    name: "Playa Linda Beach Resort",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Gäster njuter av strandlinjen vid Playa Linda Beach Resort på Aruba",
  },
  {
    name: "Amsterdam Manor Beach Resort",
    src: "/ingested/arubaa/img-033.webp",
    alt: "En familj promenerar på stranden nära Amsterdam Manor Beach Resort på Aruba",
  },
  {
    name: "Aruba Marriott Resort & Stellaris Casino",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Gäster vid poolen på Aruba Marriott Resort & Stellaris Casino",
  },
  {
    name: "Bucuti & Tara Beach Resort",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Badgäster nära Bucuti & Tara Beach Resort på Aruba",
  },
];

const channels = [
  {
    name: "Aruba Tourist Channel",
    src: "/ingested/arubaa/img-042.webp",
    alt: "Besökare njuter av Arubas kust, sänt på Aruba Tourist Channel",
  },
  {
    name: "Aruba.tv",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Lokalbor och besökare delar Arubas kultur på Aruba.tv",
  },
];

export default function LiveWebcamsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Sänds nu"
          title="Live Från Aruba"
          body="Från packningstips och engelska nyheter på Live Channel, till livesport och kulturevenemang, till den lugna brisen genom en palm på stranden: se Aruba live genom våra webbkameror."
          src="/ingested/arubaa/img-029.webp"
          alt="Flygbild av badgäster som vadar i Arubas turkosa vatten"
        />

        <div className="container-px mx-auto -mt-8 max-w-6xl">
          <Reveal delay={0.1}>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-medium">Live från One Happy Island</p>
            </div>
          </Reveal>
        </div>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Live-strandwebbkameror</h2>
            <p className="mt-4 text-muted-foreground">
              Tryck på valfritt hotell nedan för att öppna livesändningsnavet och välja din
              vy av ön, just nu.
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
                  aria-label={`Se live-webbkameran för ${cam.name}`}
                >
                  <ImageCard
                    src={cam.src}
                    alt={cam.alt}
                    eyebrow="Live nu"
                    title={cam.name}
                    description="Se det här hotellets live-strandwebbkamera och se ön i realtid."
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
              <Tv className="size-3.5" /> Sändning
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Lokala Kanaler</h2>
            <p className="mt-4 text-muted-foreground">
              Ta del av öns nyheter, sport och kultur direkt från Arubas egna sändningsbolag.
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
                  aria-label={`Se ${ch.name} live`}
                >
                  <ImageCard
                    src={ch.src}
                    alt={ch.alt}
                    eyebrow="Live nu"
                    title={ch.name}
                    description="Se den här kanalens livesändning från Aruba."
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
                Sett nog från skärmen?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Byt webbkameran mot den verkliga utsikten. Börja planera din egen resa till
                One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/se/plan-your-visit">
                    Planera Din Resa <ArrowRight className="size-4" />
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
