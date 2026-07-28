import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Sunset, UtensilsCrossed, Flower2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Romanticismo ad Aruba",
  description:
    "Passeggiate al tramonto, cene private e baie tranquille: come le coppie vivono l'Effetto Aruba.",
};

const highlights = [
  {
    icon: Sunset,
    title: "L'ora dorata, ogni sera",
    src: "/ingested/arubaa/img-076.webp",
    alt: "Un uomo e una donna seduti insieme su una spiaggia di Aruba durante l'ora dorata",
    description:
      "Sole costante significa tramonto costante. Scegli un posto sulla costa occidentale e ti garantiamo uno spettacolo, quasi ogni sera senza una nuvola in vista.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cena, a piedi nudi nella sabbia",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Un uomo e una donna in piedi insieme vicino a una palma su una spiaggia di Aruba",
    description:
      "I ristoranti sulla spiaggia apparecchiano i tavoli proprio in riva al mare, così la cena arriva con una colonna sonora di onde e un tramonto in prima fila.",
  },
  {
    icon: Flower2,
    title: "Mattine lente, due sedie",
    src: "/ingested/arubaa/img-080.webp",
    alt: "Una donna e un uomo che camminano insieme in una spiaggia di Aruba",
    description:
      "Nessun itinerario richiesto. Aruba premia le coppie che non fanno nulla di più ambizioso di una lunga passeggiata e una colazione ancora più lunga.",
  },
  {
    icon: Heart,
    title: "Baie tranquille per due",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una coppia si rilassa insieme sulle rocce costiere di Aruba",
    description:
      "Lontano dalla strada principale, le baie più piccole e le pozze di marea dell'isola sono facili da trovare e facili da avere interamente per voi.",
  },
];

export default function RomancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Insieme"
          title="Romanticismo"
          body="Scappa dal mondo insieme. Il bellissimo paesaggio di Aruba, le serate calde e il ritmo più lento la rendono una destinazione ideale sia per una fuga romantica, un primo appuntamento o un cinquantesimo anniversario."
          src="/ingested/arubaa/img-076.webp"
          alt="Un uomo e una donna seduti insieme su una spiaggia di Aruba durante l'ora dorata"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Fatto per due
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Qui il romanticismo non ha bisogno di prenotazione
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Le dimensioni di Aruba giocano a tuo favore: un breve tragitto ti porta su una
              costa diversa, in un&apos;atmosfera diversa, senza mai perdere il resto della giornata.
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
              Altri momenti da pianificare
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-019.webp"
              alt="Una donna in accappatoio da spa si rilassa vicino a una vasca illuminata da candele"
              title="Giornate spa in coppia"
              description="Trattamenti fianco a fianco pensati per rallentare entrambi allo stesso tempo."
            />
            <ImageCard
              src="/ingested/arubaa/img-068.webp"
              alt="Una coppia che tiene drink insieme all'aperto ad Aruba"
              title="Cocktail al tramonto"
              description="I bar sulla spiaggia sincronizzano l'happy hour con il tramonto, non con l'orologio."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Una coppia si rilassa sotto un ombrellone di un resort al tramonto"
              title="Cabine private"
              description="Riserva un posto all'ombra per tutto il giorno e lascia che l'isola venga da te."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Stai pianificando qualcosa di speciale?</h2>
            <p className="max-w-md text-muted-foreground">
              Dai viaggi per anniversari alle proposte di matrimonio, scopri come pianificare i dettagli.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/it/why-aruba/weddings">
                  Scopri i Matrimoni <ArrowRight className="size-4" />
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
