import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, ArrowRight, Wine, Truck, Sunset } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Mangiare e Bere ad Aruba",
  description:
    "Cento sapori su un'isola: cucina multiculturale, spacci di rum e cocktail al tramonto ad Aruba.",
};

const highlights = [
  {
    icon: Wine,
    title: "Tramonto, bicchiere in mano",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Amici che tengono bicchieri di vino insieme all'aperto",
    description:
      "I bar sulla spiaggia costruiscono tutta la loro serata intorno al tramonto, con l'happy hour sincronizzato con l'orizzonte invece che con l'orologio.",
  },
  {
    icon: Truck,
    title: "Cibo di strada e spacci di rum",
    src: "/ingested/arubaa/img-066.webp",
    alt: "Persone che si riuniscono insieme su una spiaggia di Aruba di sera",
    description:
      "Alcuni dei pasti migliori dell'isola arrivano da un camioncino o da uno spaccio con sedie di plastica, non da un menu con la carta dei vini.",
  },
  {
    icon: Sunset,
    title: "Tavoli a filo d'acqua",
    src: "/ingested/arubaa/img-068.webp",
    alt: "Una coppia che tiene drink insieme all'aperto ad Aruba",
    description:
      "Molti ristoranti apparecchiano i tavoli proprio dove la sabbia incontra l'acqua, così la cena arriva con vista propria.",
  },
  {
    icon: Utensils,
    title: "Cento sapori",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una coppia si rilassa insieme sulle rocce costiere di Aruba",
    description:
      "Classici europei, spezie sudasiatiche e pesce fresco locale condividono la stessa piccola isola, spesso lo stesso isolato.",
  },
];

export default function EatAndDrinkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Ogni voglia"
          title="Mangiare e Bere"
          body="La scena culinaria di Aruba riflette la sua popolazione multiculturale, con proposte diverse per ogni voglia: dagli spacci di rum alla cucina raffinata, e ogni tavolo al tramonto in mezzo."
          src="/ingested/arubaa/img-067.webp"
          alt="Amici che tengono bicchieri di vino insieme all'aperto"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Cento sapori
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Un&apos;isola piccola con un grande tavolo
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Con oltre cento nazionalità rappresentate sull&apos;isola, Aruba è ricca di
              sapori da ogni angolo del globo. Non sorprenderti se te ne vai
              con un nuovo piatto preferito.
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
              Come mangiano e bevono i locali
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-060.webp"
              alt="Un gruppo di amici riuniti su una spiaggia di Aruba"
              title="Piatti condivisi, tavoli condivisi"
              description="La cucina arubana tende al comune: piatti più grandi, tavoli più lunghi, più brindisi."
            />
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Un agricoltore che lavora in un campo di Aruba"
              title="Coltivato vicino a casa"
              description="Le fattorie locali forniscono più cucine dell'isola di quanto si pensi."
            />
            <ImageCard
              src="/ingested/arubaa/img-080.webp"
              alt="Una donna e un uomo che camminano insieme in una spiaggia di Aruba"
              title="Drink con i piedi nella sabbia"
              description="Niente scarpe richieste nella maggior parte dei bar sulla spiaggia, cocktail in mano."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Già affamato?</h2>
            <p className="max-w-md text-muted-foreground">
              Scopri i locali dell&apos;isola, ordinati per quartiere e atmosfera.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/it/things-to-do#dining">
                  Scopri la Ristorazione <ArrowRight className="size-4" />
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
