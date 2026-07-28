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
  title: "En Vivo Desde Aruba",
  description:
    "Mira Aruba en vivo: cámaras web de resorts de playa y canales locales transmitiendo desde la Isla Más Feliz.",
};

const WEBCAM_SOURCE = "https://www.aruba.com/us/live-webcams-and-channels";

const webcams = [
  {
    name: "Costa Linda Beach Resort",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Visitantes relajándose en la playa cerca de Costa Linda Beach Resort en Aruba",
  },
  {
    name: "Playa Linda Beach Resort",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Huéspedes disfrutando de la costa en Playa Linda Beach Resort en Aruba",
  },
  {
    name: "Amsterdam Manor Beach Resort",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Una familia caminando por la playa cerca de Amsterdam Manor Beach Resort en Aruba",
  },
  {
    name: "Aruba Marriott Resort & Stellaris Casino",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Huéspedes en la piscina de Aruba Marriott Resort & Stellaris Casino",
  },
  {
    name: "Bucuti & Tara Beach Resort",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Bañistas cerca de Bucuti & Tara Beach Resort en Aruba",
  },
];

const channels = [
  {
    name: "Aruba Tourist Channel",
    src: "/ingested/arubaa/img-042.webp",
    alt: "Visitantes disfrutando de la costa de Aruba, presentado en Aruba Tourist Channel",
  },
  {
    name: "Aruba.tv",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Locales y visitantes compartiendo la cultura de Aruba en Aruba.tv",
  },
];

export default function LiveWebcamsPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Transmitiendo ahora"
          title="En Vivo Desde Aruba"
          body="Desde consejos para hacer las maletas y noticias en inglés en el Canal En Vivo, hasta eventos deportivos y culturales en directo, y la suave brisa entre las palmeras de la playa: mira Aruba en vivo a través de nuestras cámaras web."
          src="/ingested/arubaa/img-029.webp"
          alt="Vista aérea de bañistas caminando en las aguas turquesas de Aruba"
        />

        <div className="container-px mx-auto -mt-8 max-w-6xl">
          <Reveal delay={0.1}>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-medium">En vivo desde la Isla Más Feliz</p>
            </div>
          </Reveal>
        </div>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Cámaras En Vivo De La Playa</h2>
            <p className="mt-4 text-muted-foreground">
              Toca cualquier resort a continuación para abrir el centro de transmisión
              en vivo y elegir tu vista de la isla, en este momento.
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
                  aria-label={`Ver la cámara en vivo de ${cam.name}`}
                >
                  <ImageCard
                    src={cam.src}
                    alt={cam.alt}
                    eyebrow="En vivo ahora"
                    title={cam.name}
                    description="Transmite la cámara web en vivo de la playa de este resort y ve la isla en tiempo real."
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
              <Tv className="size-3.5" /> Transmisión
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Canales Locales</h2>
            <p className="mt-4 text-muted-foreground">
              Entérate de las noticias, deportes y cultura de la isla directamente
              desde los canales propios de Aruba.
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
                  aria-label={`Ver ${ch.name} en vivo`}
                >
                  <ImageCard
                    src={ch.src}
                    alt={ch.alt}
                    eyebrow="En vivo ahora"
                    title={ch.name}
                    description="Mira la transmisión en vivo de este canal desde Aruba."
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
                ¿Ya viste suficiente desde la pantalla?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Cambia la cámara web por la vista real. Empieza a planear tu propio
                viaje a la Isla Más Feliz.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/es/plan-your-visit">
                    Planifica Tu Viaje <ArrowRight className="size-4" />
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
