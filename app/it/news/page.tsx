import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Notizie da Aruba, Notizie sul Turismo dell'Isola",
  description: "Le ultime notizie e aggiornamenti sul turismo da Aruba.",
};

const updates = [
  {
    title: "Autentico Aruba Culinary Festival",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una coppia si rilassa insieme sulle rocce costiere di Aruba",
    description:
      "Autentico torna questo ottobre per un'altra indimenticabile celebrazione della scena culinaria di Aruba.",
  },
  {
    title: "App myAruba",
    src: "/ingested/arubaa/img-037.webp",
    alt: "Visitatori che esplorano la costa di Aruba con l'app myAruba",
    description: "Prova myAruba, l'app che ti aiuta a scegliere i posti più belli dell'isola.",
  },
  {
    title: "Campagna Acqua del Rubinetto",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Vista aerea di persone in spiaggia che sguazzano nell'acqua turchese di Aruba",
    description: "Aruba è conosciuta per le sue spiagge incontaminate e le acque turchesi.",
  },
  {
    title: "Requisiti di Viaggio",
    src: "/ingested/arubaa/img-041.webp",
    alt: "Visitatori in arrivo su una spiaggia di Aruba per la loro vacanza",
    description:
      "Ecco alcuni dettagli da ricordare quando si viaggia da e per Aruba, inclusa la nuova tassa di sostenibilità di $20.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Aggiornamenti dall'isola"
          title="Aruba, Notizie sul Turismo dell'Isola"
          body="Siamo solo all'inizio con gli straordinari effetti che Aruba ha da offrire. Approfondisci i dettagli del tuo viaggio qui sotto per scoprire un'esperienza caraibica che ti riempirà di sole e ti farà tornare a casa con un bagliore di felicità che non svanisce mai."
          src="/ingested/arubaa/img-042.webp"
          alt="Una famiglia che cammina insieme mano nella mano su una spiaggia di Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20 pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Requisiti di Viaggio e Aggiornamenti</h2>
            <p className="mt-4 text-muted-foreground">
              Le ultime novità dall&apos;Autorità del Turismo di Aruba, sempre aggiornate perché il
              tuo prossimo viaggio inizi con le informazioni giuste.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {updates.map((item) => (
              <RevealItem key={item.title}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  eyebrow="Aggiornamento"
                  title={item.title}
                  description={item.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Una buona notizia merita una buona offerta
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Scopri cosa c&apos;è attualmente in offerta e trasforma l&apos;aggiornamento di oggi nel tuo
                prossimo viaggio.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/it/deals">
                    Vedi le Offerte Attuali <ArrowRight className="size-4" />
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
