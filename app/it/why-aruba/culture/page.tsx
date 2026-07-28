import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowRight, Palette, Globe2, Music4 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Cultura ad Aruba",
  description:
    "Cento nazionalità, un'isola: arte urbana, festival e le persone dietro l'Effetto Aruba.",
};

const highlights = [
  {
    icon: Palette,
    title: "Arte urbana a San Nicolas",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Un gruppo di amici riuniti su una spiaggia di Aruba",
    description:
      "La seconda città di Aruba ha trasformato le sue strade secondarie in una galleria a cielo aperto, con murales di artisti locali e internazionali che ricoprono intere costruzioni.",
  },
  {
    icon: Globe2,
    title: "Cento nazionalità, un'isola",
    src: "/ingested/arubaa/img-061.webp",
    alt: "Tre donne sedute su una roccia su una spiaggia di Aruba",
    description:
      "Olandese, papiamento, spagnolo e inglese si parlano tutti qui, spesso nella stessa conversazione. Questo mix si ritrova nel cibo, nella musica e nell'accoglienza.",
  },
  {
    icon: Music4,
    title: "Festival locali",
    src: "/ingested/arubaa/img-064.webp",
    alt: "Tre donne in piedi insieme su una spiaggia di Aruba",
    description:
      "Dalla sfilata del Carnevale alle fiestas di quartiere più piccole, il calendario di Aruba corre a ritmo di musica, colore e voglia di stare insieme.",
  },
  {
    icon: Users,
    title: "Comunità in riva al mare",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Un gruppo di persone che camminano insieme lungo la riva del mare ad Aruba",
    description:
      "Locali e visitatori condividono le stesse spiagge, gli stessi spacci di rum e le stesse viste al tramonto, esattamente come piace all'isola.",
  },
];

export default function CulturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Cento sapori"
          title="Cultura"
          body="Cento nazionalità. Cento sapori. La popolazione diversificata di Aruba vive in armonia, e si vede in ogni angolo dell'isola, dai murales ai menu."
          src="/ingested/arubaa/img-060.webp"
          alt="Un gruppo di amici riuniti su una spiaggia di Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Più di uno sfondo
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Un&apos;isola piccola, un grande mix di persone
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              La cultura di Aruba non è custodita in un museo. È nella lingua che
              cambia a metà frase, nell&apos;aroma che arriva da un food truck sul ciglio della
              strada e nel murale che avvolge un intero isolato.
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
              Dove sentirla in prima persona
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Un agricoltore che lavora in un campo di Aruba"
              title="Mercati locali"
              description="Mercati agricoli e bancarelle sul ciglio della strada vendono ciò che cresce poco più in là."
            />
            <ImageCard
              src="/ingested/arubaa/img-066.webp"
              alt="Persone che si riuniscono insieme su una spiaggia di Aruba"
              title="Ritrovi di quartiere"
              description="Le piccole fiestas di paese accolgono i visitatori con la stessa facilità con cui accolgono i vicini."
            />
            <ImageCard
              src="/ingested/arubaa/img-062.webp"
              alt="Due donne che corrono insieme su una spiaggia di sabbia bianca"
              title="Spiagge condivise"
              description="Locali e visitatori si mescolano facilmente sulle spiagge pubbliche di Aruba, di giorno e di notte."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Vuoi la storia completa?</h2>
            <p className="max-w-md text-muted-foreground">
              Scopri la storia dell&apos;isola e le regioni che l&apos;hanno modellata.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/it/our-island#history-culture">
                  Storia E Cultura <ArrowRight className="size-4" />
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
