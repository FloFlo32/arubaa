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
  title: "Diretta da Aruba",
  description:
    "Guarda Aruba in diretta: webcam dei resort sulla spiaggia e canali locali in streaming da One Happy Island.",
};

const WEBCAM_SOURCE = "https://www.aruba.com/us/live-webcams-and-channels";

const webcams = [
  {
    name: "Costa Linda Beach Resort",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Visitatori che si rilassano sulla spiaggia vicino al Costa Linda Beach Resort ad Aruba",
  },
  {
    name: "Playa Linda Beach Resort",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Ospiti che si godono la costa presso il Playa Linda Beach Resort ad Aruba",
  },
  {
    name: "Amsterdam Manor Beach Resort",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Una famiglia che passeggia sulla spiaggia vicino all'Amsterdam Manor Beach Resort ad Aruba",
  },
  {
    name: "Aruba Marriott Resort & Stellaris Casino",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Ospiti in piscina all'Aruba Marriott Resort & Stellaris Casino",
  },
  {
    name: "Bucuti & Tara Beach Resort",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Persone in spiaggia vicino al Bucuti & Tara Beach Resort ad Aruba",
  },
];

const channels = [
  {
    name: "Aruba Tourist Channel",
    src: "/ingested/arubaa/img-042.webp",
    alt: "Visitatori che si godono la costa di Aruba, in onda su Aruba Tourist Channel",
  },
  {
    name: "Aruba.tv",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Locali e visitatori che condividono la cultura di Aruba su Aruba.tv",
  },
];

export default function LiveWebcamsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="In diretta ora"
          title="Diretta da Aruba"
          body="Da consigli per le valigie e notizie in inglese sul Live Channel, a eventi sportivi e culturali dal vivo, fino alla brezza tranquilla tra le palme sulla spiaggia: guarda Aruba in diretta attraverso le nostre webcam."
          src="/ingested/arubaa/img-029.webp"
          alt="Vista aerea di persone in spiaggia che sguazzano nell'acqua turchese di Aruba"
        />

        <div className="container-px mx-auto -mt-8 max-w-6xl">
          <Reveal delay={0.1}>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-medium">In diretta da One Happy Island</p>
            </div>
          </Reveal>
        </div>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Webcam Live delle Spiagge</h2>
            <p className="mt-4 text-muted-foreground">
              Tocca un resort qui sotto per aprire il centro streaming live e scegliere la tua
              vista dell&apos;isola, in tempo reale.
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
                  aria-label={`Guarda la webcam live di ${cam.name}`}
                >
                  <ImageCard
                    src={cam.src}
                    alt={cam.alt}
                    eyebrow="In diretta ora"
                    title={cam.name}
                    description="Guarda la webcam live sulla spiaggia di questo resort e vedi l&apos;isola in tempo reale."
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
              <Tv className="size-3.5" /> Trasmissione
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Canali Locali</h2>
            <p className="mt-4 text-muted-foreground">
              Segui notizie, sport e cultura dell&apos;isola direttamente dalle emittenti di Aruba.
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
                  aria-label={`Guarda ${ch.name} in diretta`}
                >
                  <ImageCard
                    src={ch.src}
                    alt={ch.alt}
                    eyebrow="In diretta ora"
                    title={ch.name}
                    description="Guarda la trasmissione in diretta di questo canale da Aruba."
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
                Visto abbastanza dallo schermo?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Scambia la webcam con la vista reale. Inizia a pianificare il tuo viaggio verso
                One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/it/plan-your-visit">
                    Pianifica Il Tuo Viaggio <ArrowRight className="size-4" />
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
