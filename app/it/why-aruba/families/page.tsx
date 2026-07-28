import type { Metadata } from "next";
import Link from "next/link";
import { Baby, ArrowRight, Waves, Sun, Users2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Vacanze in Famiglia ad Aruba",
  description:
    "Acqua calma e poco profonda e giornate facili per ogni età: perché Aruba funziona per le vacanze in famiglia.",
};

const highlights = [
  {
    icon: Waves,
    title: "Acqua calma e poco profonda",
    src: "/ingested/arubaa/img-070.webp",
    alt: "Un adulto porta in braccio un bambino su una spiaggia di Aruba",
    description:
      "Le spiagge sottovento dell'isola sono famose per essere calme e poco profonde, il che significa più tempo a nuotare e meno tempo a guardare le onde con ansia.",
  },
  {
    icon: Sun,
    title: "Giornate facili, poco stress",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Due ragazzi che corrono insieme su una spiaggia di Aruba",
    description:
      "Voli brevi, terreno pianeggiante e uno spazio ridotto significano meno tempo in viaggio e più tempo a lasciare che i bambini si stanchino correndo.",
  },
  {
    icon: Baby,
    title: "Pensata per gli ospiti più piccoli",
    src: "/ingested/arubaa/img-072.webp",
    alt: "Un adulto tiene in braccio un bambino su una spiaggia di Aruba",
    description:
      "Acqua calda e delicata e sabbia soffice rendono le spiagge di Aruba davvero facili con un bebè o un bambino piccolo, non solo pubblicizzate come tali.",
  },
  {
    icon: Users2,
    title: "Per ogni generazione",
    src: "/ingested/arubaa/img-074.webp",
    alt: "Una famiglia che si tiene per mano insieme su una spiaggia di Aruba al tramonto",
    description:
      "Nonni, genitori e bambini trovano tutti il proprio ritmo qui: qualcuno è sempre pronto per l'acqua, e qualcuno è sempre felice su una sedia lì vicino.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Per ogni età"
          title="Famiglie"
          body="Aruba offre attività per ospiti di tutte le età, il che la rende una destinazione ideale per una vacanza in famiglia. All'Effetto Aruba non importa se hai 5 o 50 anni."
          src="/ingested/arubaa/img-069.webp"
          alt="Un adulto e un bambino che si tengono per mano su una riva del mare ad Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Una famiglia felice
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Qualcosa per ogni membro del viaggio
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              L&apos;Effetto Aruba lo sente chiunque si apra ad esso, e questo include
              anche i viaggiatori più giovani. Se stai cercando qualcosa che
              genitori e figli possano amare in egual misura, questo è il posto giusto.
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
              Una giornata che funziona per tutti
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-037.webp"
              alt="Una famiglia posa insieme per una foto sulla sabbia"
              title="Giornate in spiaggia, insieme"
              description="Sabbia, bassi fondali e ombra per ogni membro della famiglia."
            />
            <ImageCard
              src="/ingested/arubaa/img-042.webp"
              alt="Una famiglia cammina insieme mano nella mano lungo la costa"
              title="Passeggiate lente"
              description="Costa facile e pianeggiante, gentile per le gambe più piccole."
            />
            <ImageCard
              src="/ingested/arubaa/img-035.webp"
              alt="Un adulto porta in braccio un bambino piccolo lungo la spiaggia"
              title="Pensato per i più piccoli"
              description="Baie calme e acqua calda e poco profonda fatta per i piccoli nuotatori."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Stai pianificando un viaggio in famiglia?</h2>
            <p className="max-w-md text-muted-foreground">
              Scopri hotel per famiglie, soggiorni all-inclusive e spiagge facilmente accessibili.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/it/plan-your-visit#hotels-resorts">
                  Scopri Hotel E Resort <ArrowRight className="size-4" />
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
