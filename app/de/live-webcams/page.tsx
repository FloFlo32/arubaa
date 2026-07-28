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
  title: "Live aus Aruba",
  description:
    "Aruba live erleben: Strand-Resort-Webcams und lokale Sender, live von One Happy Island.",
};

const WEBCAM_SOURCE = "https://www.aruba.com/us/live-webcams-and-channels";

const webcams = [
  {
    name: "Costa Linda Beach Resort",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Besucher entspannen am Strand in der Nähe des Costa Linda Beach Resort in Aruba",
  },
  {
    name: "Playa Linda Beach Resort",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Gäste genießen die Küste am Playa Linda Beach Resort in Aruba",
  },
  {
    name: "Amsterdam Manor Beach Resort",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Eine Familie spaziert am Strand in der Nähe des Amsterdam Manor Beach Resort in Aruba",
  },
  {
    name: "Aruba Marriott Resort & Stellaris Casino",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Gäste am Pool des Aruba Marriott Resort & Stellaris Casino",
  },
  {
    name: "Bucuti & Tara Beach Resort",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Strandbesucher in der Nähe des Bucuti & Tara Beach Resort in Aruba",
  },
];

const channels = [
  {
    name: "Aruba Tourist Channel",
    src: "/ingested/arubaa/img-042.webp",
    alt: "Besucher genießen Arubas Küste, zu sehen auf dem Aruba Tourist Channel",
  },
  {
    name: "Aruba.tv",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Einheimische und Besucher teilen Arubas Kultur auf Aruba.tv",
  },
];

export default function LiveWebcamsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Jetzt im Livestream"
          title="Live aus Aruba"
          body="Von Packtipps und englischsprachigen Nachrichten auf dem Live-Kanal über Live-Sport- und Kulturevents bis hin zur sanften Brise durch eine Palme am Strand: Erleben Sie Aruba live über unsere Webcams."
          src="/ingested/arubaa/img-029.webp"
          alt="Luftaufnahme von Strandbesuchern, die im türkisfarbenen Wasser Arubas planschen"
        />

        <div className="container-px mx-auto -mt-8 max-w-6xl">
          <Reveal delay={0.1}>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-medium">Live von One Happy Island</p>
            </div>
          </Reveal>
        </div>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Live-Strand-Webcams</h2>
            <p className="mt-4 text-muted-foreground">
              Tippen Sie unten auf ein Resort, um das Livestream-Center zu öffnen und Ihre
              Ansicht der Insel jetzt auszuwählen.
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
                  aria-label={`Live-Webcam für ${cam.name} ansehen`}
                >
                  <ImageCard
                    src={cam.src}
                    alt={cam.alt}
                    eyebrow="Jetzt live"
                    title={cam.name}
                    description="Streamen Sie die Live-Strand-Webcam dieses Resorts und erleben Sie die Insel in Echtzeit."
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
              <Tv className="size-3.5" /> Übertragung
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Lokale Sender</h2>
            <p className="mt-4 text-muted-foreground">
              Verfolgen Sie Inselnachrichten, Sport und Kultur direkt von Arubas eigenen
              Sendern.
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
                  aria-label={`${ch.name} live ansehen`}
                >
                  <ImageCard
                    src={ch.src}
                    alt={ch.alt}
                    eyebrow="Jetzt live"
                    title={ch.name}
                    description="Sehen Sie die Live-Übertragung dieses Senders aus Aruba."
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
                Genug vom Bildschirm gesehen?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Tauschen Sie die Webcam gegen die echte Aussicht. Beginnen Sie jetzt mit der
                Planung Ihrer eigenen Reise nach One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/de/plan-your-visit">
                    Besuch Planen <ArrowRight className="size-4" />
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
