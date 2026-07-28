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
  title: "Ao Vivo em Aruba",
  description:
    "Veja Aruba ao vivo: webcams de resorts de praia e canais locais transmitindo direto de One Happy Island.",
};

const WEBCAM_SOURCE = "https://www.aruba.com/us/live-webcams-and-channels";

const webcams = [
  {
    name: "Costa Linda Beach Resort",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Visitantes relaxando na praia perto do Costa Linda Beach Resort em Aruba",
  },
  {
    name: "Playa Linda Beach Resort",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Hóspedes aproveitando o litoral do Playa Linda Beach Resort em Aruba",
  },
  {
    name: "Amsterdam Manor Beach Resort",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Uma família caminhando pela praia perto do Amsterdam Manor Beach Resort em Aruba",
  },
  {
    name: "Aruba Marriott Resort & Stellaris Casino",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Hóspedes na piscina do Aruba Marriott Resort & Stellaris Casino",
  },
  {
    name: "Bucuti & Tara Beach Resort",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Banhistas perto do Bucuti & Tara Beach Resort em Aruba",
  },
];

const channels = [
  {
    name: "Aruba Tourist Channel",
    src: "/ingested/arubaa/img-042.webp",
    alt: "Visitantes aproveitando o litoral de Aruba, exibido no Aruba Tourist Channel",
  },
  {
    name: "Aruba.tv",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Locais e visitantes compartilhando a cultura de Aruba no Aruba.tv",
  },
];

export default function LiveWebcamsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Transmitindo agora"
          title="Ao Vivo em Aruba"
          body="De dicas de bagagem e notícias em inglês no Live Channel, a eventos esportivos e culturais ao vivo, até a brisa tranquila entre as palmeiras da praia: veja Aruba ao vivo pelas nossas webcams."
          src="/ingested/arubaa/img-029.webp"
          alt="Vista aérea de banhistas nas águas turquesa de Aruba"
        />

        <div className="container-px mx-auto -mt-8 max-w-6xl">
          <Reveal delay={0.1}>
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 shadow-lg shadow-black/5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <p className="text-sm font-medium">Ao vivo de One Happy Island</p>
            </div>
          </Reveal>
        </div>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Webcams de Praia Ao Vivo</h2>
            <p className="mt-4 text-muted-foreground">
              Toque em qualquer resort abaixo para abrir a transmissão ao vivo e escolher sua
              vista da ilha, agora mesmo.
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
                  aria-label={`Veja a webcam ao vivo de ${cam.name}`}
                >
                  <ImageCard
                    src={cam.src}
                    alt={cam.alt}
                    eyebrow="Ao vivo agora"
                    title={cam.name}
                    description="Veja a webcam de praia deste resort em tempo real e conheça a ilha agora mesmo."
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
              <Tv className="size-3.5" /> Transmissão
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Canais Locais</h2>
            <p className="mt-4 text-muted-foreground">
              Acompanhe notícias, esportes e cultura da ilha direto das próprias emissoras de
              Aruba.
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
                  aria-label={`Veja ${ch.name} ao vivo`}
                >
                  <ImageCard
                    src={ch.src}
                    alt={ch.alt}
                    eyebrow="Ao vivo agora"
                    title={ch.name}
                    description="Veja a transmissão ao vivo deste canal direto de Aruba."
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
                Já viu o suficiente pela tela?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Troque a webcam pela vista de verdade. Comece a planejar sua própria viagem a
                One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/br/plan-your-visit">
                    Planeje Sua Viagem <ArrowRight className="size-4" />
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
