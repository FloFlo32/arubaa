import type { Metadata } from "next";
import Link from "next/link";
import { Gem, ArrowRight, Sunset, Sparkles, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Matrimoni ad Aruba",
  description:
    "Cerimonie a piedi nudi e promesse all'ora dorata: pianificare il matrimonio dei sogni su One Happy Island.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Cerimonie a piedi nudi",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Una coppia festeggia il proprio matrimonio su una spiaggia di Aruba",
    description:
      "Pronuncia le tue promesse con i piedi nella sabbia e il mare come sfondo. La maggior parte dei resort sulla spiaggia gestisce l'intera cerimonia in loco.",
  },
  {
    icon: Sparkles,
    title: "Promesse all'ora dorata",
    src: "/ingested/arubaa/img-048.webp",
    alt: "Una coppia di sposi si tiene per mano sulla riva del mare",
    description:
      "La luce del tramonto trasforma ogni foto della cerimonia in un ricordo, e i cieli quasi sempre sereni di Aruba rendono facile pianificare l'orario.",
  },
  {
    icon: HeartHandshake,
    title: "Gioia, in movimento",
    src: "/ingested/arubaa/img-050.webp",
    alt: "Una coppia corre tra le acque basse nel giorno del proprio matrimonio",
    description:
      "I bassi fondali calmi di Aruba lasciano spazio a un po' di festa: una corsa nell'acqua, un brindisi sulla sabbia, ritratti che non sembrano posati.",
  },
  {
    icon: Gem,
    title: "Una luna di miele che inizia subito",
    src: "/ingested/arubaa/img-052.webp",
    alt: "Un uomo e una donna che si tengono per mano su una spiaggia di Aruba",
    description:
      "Nessun giorno di transito richiesto tra il matrimonio e la luna di miele: la stessa spiaggia che ha ospitato la cerimonia può ospitare la settimana successiva.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Dì di sì"
          title="Matrimoni"
          body="Il clima costantemente soleggiato e la straordinaria bellezza naturale rendono Aruba il luogo ideale per il matrimonio dei sogni, che si tratti di cinquanta ospiti o nessuno."
          src="/ingested/arubaa/img-046.webp"
          alt="Una coppia festeggia il proprio matrimonio su una spiaggia di Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Un giorno felice
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Dì di sì su One Happy Island
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              I wedding planner di Aruba si occupano di tutto, dai permessi ai fiori, così
              l&apos;unica vera decisione rimasta è quale tratto di spiaggia scegliere per le promesse.
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
              Altri modi per festeggiare
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-047.webp"
              alt="Una coppia in abiti da sposa corre tra le acque basse su una spiaggia di Aruba"
              title="Primo sguardo sulla sabbia"
              description="Primi sguardi privati e in prima mattina prima che la spiaggia si riempia."
            />
            <ImageCard
              src="/ingested/arubaa/img-049.webp"
              alt="Una coppia di sposi in piedi insieme su una spiaggia di Aruba"
              title="Rinnovo delle promesse"
              description="Torna e rifallo, questa volta senza bisogno di pianificazione."
            />
            <ImageCard
              src="/ingested/arubaa/img-051.webp"
              alt="Una sposa e uno sposo si tengono per mano su una spiaggia di Aruba"
              title="Suite per la luna di miele"
              description="Prenota tutto d'un pezzo, così la festa non deve finire."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Inizia a pianificare il tuo giorno</h2>
            <p className="max-w-md text-muted-foreground">
              Scopri resort, servizi per gli ospiti e tutto il resto della tua lista.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/it/plan-your-visit#guest-services">
                  Scopri i Servizi Per Gli Ospiti <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/it/why-aruba">Torna a Perché Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
