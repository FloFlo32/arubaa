import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, Sparkles, Wind, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Benessere ad Aruba",
  description:
    "Quiete a picco sul mare e lusso lento e silenzioso: come disconnettersi e ritrovare te stesso ad Aruba.",
};

const highlights = [
  {
    icon: Sparkles,
    title: "Lusso lento e silenzioso",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Una donna in accappatoio da spa si rilassa vicino a una vasca illuminata da candele",
    description:
      "I rituali spa qui si affidano ai materiali stessi dell'isola: aloe, sale marino e ore che si allungano invece di correre.",
  },
  {
    icon: Wind,
    title: "Quiete a picco sul mare",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una donna in piedi da sola su un terreno sabbioso che si affaccia sul mare ad Aruba",
    description:
      "Le scogliere dell'isola guardano dritte verso gli alisei. Dieci minuti di quiete lassù fanno più di un'ora ovunque altro.",
  },
  {
    icon: Sunrise,
    title: "Mattine lente sull'acqua",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Una donna si rilassa su una sedia a sdraio in spiaggia al tramonto ad Aruba",
    description:
      "Nessuna sveglia richiesta. Le mattine di Aruba sono fatte per un caffè lento, un bagno più lungo e un programma che può aspettare fino a mezzogiorno.",
  },
  {
    icon: Flower2,
    title: "Disconnettersi, insieme",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Un uomo e una donna in piedi insieme vicino a una palma su una spiaggia di Aruba",
    description:
      "Il benessere qui non è per forza solitario. Le giornate lente sull'acqua sono facili da condividere quanto lo sono da vivere da soli.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Disconnettiti"
          title="Benessere"
          body="Aruba è fatta per aiutarti a disconnetterti dal mondo e ritrovare te stesso. Meno distrazioni, più sole, e un'isola piccola abbastanza che rallentare è tutto il punto."
          src="/ingested/arubaa/img-031.webp"
          alt="Una donna in piedi da sola su un terreno sabbioso che si affaccia sul mare ad Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Quiete incorporata
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              È davvero una vacanza se poi hai bisogno di un&apos;altra?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Buone notizie: Aruba non è quel tipo di viaggio. Sole costante, bassa umidità e
              un&apos;isola costruita intorno all&apos;acqua rendono il riposo l&apos;impostazione predefinita,
              non qualcosa che devi programmare.
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
              Qualche modo per staccare
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-039.webp"
              alt="Due persone sedute insieme su una spiaggia di Aruba"
              title="Yoga in spiaggia all'alba"
              description="Stretching silenzioso sulla sabbia prima che l'isola si svegli."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Una coppia chiacchiera insieme a bordo piscina in un resort ad Aruba"
              title="Giornate in piscina, disconnessi"
              description="Piscine di resort costruite per non fare assolutamente nulla, di proposito."
            />
            <ImageCard
              src="/ingested/arubaa/img-036.webp"
              alt="Una coppia si rilassa insieme sulle rocce costiere di Aruba"
              title="Passeggiate tra le pozze di marea"
              description="Camminate lente sulle rocce, senza un posto particolare dove andare."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Pronto a rallentare?</h2>
            <p className="max-w-md text-muted-foreground">
              Scopri i soggiorni all-inclusive e le opzioni di resort pensate per il riposo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/it/plan-your-visit#all-inclusive">
                  Scopri i Soggiorni All-Inclusive <ArrowRight className="size-4" />
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
