import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, Mountain, Waves, Bike, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Avventura ad Aruba",
  description:
    "Archi di roccia, sentieri desertici e acque aperte: come vivere l'Effetto Aruba attraverso l'avventura.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Parco Nazionale Arikok",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una donna in piedi da sola su un terreno sabbioso che si affaccia sul mare ad Aruba",
    description:
      "Quasi un quinto dell'isola è deserto protetto: cactus imponenti, creste calcaree e sentieri che finiscono in baie nascoste.",
  },
  {
    icon: Waves,
    title: "Sull'acqua",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Due persone in kayak insieme lungo la costa di Aruba",
    description:
      "Venti alisei che non si fermano mai rendono Aruba uno dei migliori posti dei Caraibi per kayak, windsurf e vela, che tu stia gareggiando o andando alla deriva.",
  },
  {
    icon: Compass,
    title: "Grotte marine e archi di roccia",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Una coppia esplora una grotta marina e un arco di roccia lungo la costa di Aruba",
    description:
      "La costa nord è scolpita da vento e onde in ponti naturali e grotte scavate, da esplorare al meglio appena dopo l'alba prima che la luce diventi troppo intensa.",
  },
  {
    icon: Sunrise,
    title: "Rincorri l'orizzonte",
    src: "/ingested/arubaa/img-063.webp",
    alt: "Un gruppo di amici che salta insieme sulla spiaggia all'ora dorata",
    description:
      "Chi si sveglia presto ha praticamente l'isola tutta per sé: banchi di sabbia vuoti, aria fresca del deserto e un'alba che tinge d'oro tutta la costa.",
  },
];

export default function AdventurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Kaweta"
          title="Avventura"
          body="Kaweta. Significa curioso in papiamento, ed è la parola perfetta per lo spirito di esplorazione di Aruba. Oltre le spiagge, l'isola premia chiunque sia disposto a cercare."
          src="/ingested/arubaa/img-031.webp"
          alt="Una donna in piedi da sola su un terreno sabbioso che si affaccia sul mare ad Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Quattro modi per iniziare
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Trova la tua avventura
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba racchiude deserto, costa e acque aperte in un&apos;isola che puoi attraversare in
              meno di un&apos;ora, il che significa che puoi vivere tutto questo in un solo viaggio.
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
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Bike className="size-5" />
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Fatta per essere esplorata, non solo visitata
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Affitta un UTV per l&apos;interno desertico, prenota una barca per lo snorkeling sulle
              barriere, oppure inizia semplicemente a camminare dal tuo hotel: Aruba è piccola
              abbastanza che ogni tipo di avventura è a un breve viaggio da dove alloggi.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-077.webp"
              alt="Due persone che camminano insieme su un banco di sabbia ad Aruba"
              title="Passeggiate sui banchi di sabbia"
              description="La bassa marea apre banchi di sabbia che si estendono nelle acque basse turchesi."
            />
            <ImageCard
              src="/ingested/arubaa/img-004.webp"
              alt="Una coppia in silhouette sulle dune di Aruba al tramonto"
              title="Escursioni tra le dune"
              description="La costa nordorientale è tutta dune ondulate e vento, da vedere al meglio a piedi."
            />
            <ImageCard
              src="/ingested/arubaa/img-065.webp"
              alt="Un gruppo di amici che salta insieme sulla spiaggia"
              title="Escursioni di gruppo"
              description="L'avventura è meglio condivisa: prenota un tour di gruppo e confronta le impressioni a cena."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Pronto a esplorare?</h2>
            <p className="max-w-md text-muted-foreground">
              Scopri tour, noleggio attrezzature e tutto il resto delle cose da fare ad Aruba.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/it/things-to-do#natural-wonders">
                  Scopri le Meraviglie Naturali <ArrowRight className="size-4" />
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
