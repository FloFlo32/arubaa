import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Blog di Viaggio: Consigli, Cultura ed Esperienze",
  description:
    "Consigli di viaggio, cultura ed esperienze ad Aruba dal team dietro One Happy Island.",
};

const topics = [
  {
    title: "Avventura",
    href: "/it/why-aruba/adventure",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Una coppia esplora una grotta marina e un arco di roccia sulla costa di Aruba",
    teaser: "Grotte marine, archi di roccia e sentieri fuoristrada per il viaggiatore irrequieto.",
  },
  {
    title: "Romanticismo",
    href: "/it/why-aruba/romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "Una coppia condivide un momento tranquillo su una spiaggia di Aruba al tramonto",
    teaser: "Passeggiate al tramonto, cene private e i momenti per cui le coppie tornano.",
  },
  {
    title: "Cultura",
    href: "/it/why-aruba/culture",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Un gruppo riunito su una spiaggia di Aruba",
    teaser: "Le tradizioni e le industrie che formano l'identità dell'isola.",
  },
  {
    title: "Benessere",
    href: "/it/why-aruba/wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Una donna si rilassa in accappatoio da spa vicino a candele e una vasca da bagno",
    teaser: "Spa, quiete e le mattine lente che resettano il tuo orologio.",
  },
  {
    title: "Mangiare e Bere",
    href: "/it/why-aruba/eat-and-drink",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una coppia si rilassa insieme sulle rocce costiere di Aruba",
    teaser: "Sapori locali, pesce fresco e i tavoli in cui vale la pena indugiare.",
  },
  {
    title: "Famiglie",
    href: "/it/why-aruba/families",
    src: "/ingested/arubaa/img-032.webp",
    alt: "Una famiglia si diverte insieme in spiaggia ad Aruba",
    teaser: "Giornate facili che mantengono felice ogni età della famiglia.",
  },
  {
    title: "Spiagge E Baie",
    href: "/it/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Una donna si rilassa su una sedia a sdraio in spiaggia al tramonto ad Aruba",
    teaser: "Dalle ampie sabbie pubbliche alle baie nascoste che meritano la deviazione.",
  },
  {
    title: "Itinerari",
    href: "/it/things-to-do#itineraries",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Una coppia in abiti da sposa corre tra le acque basse su una spiaggia di Aruba",
    teaser: "Piani giornalieri già pronti, che tu abbia tre giorni o dieci.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Storie dall'isola"
          title="Blog di Viaggio, Consigli, Cultura ed Esperienze"
          body="Siamo solo all'inizio con gli straordinari effetti che Aruba ha da offrire. Approfondisci i dettagli del tuo viaggio qui sotto per scoprire un'esperienza caraibica."
          src="/ingested/arubaa/img-051.webp"
          alt="Una coppia di sposi si tiene per mano su una spiaggia di Aruba"
        />

        <section className="py-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Sfoglia per argomento</h2>
              <p className="mt-4 text-muted-foreground">
                Questi sono i temi di cui scriviamo più spesso, ognuno con un link alla
                guida completa sull&apos;isola.
              </p>
            </Reveal>
          </div>

          <div className="container-px mx-auto max-w-6xl mt-10">
            <AutoSlider itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
              {topics.map((topic) => (
                <ImageCard
                  key={topic.title}
                  src={topic.src}
                  alt={topic.alt}
                  eyebrow="Argomento"
                  title={topic.title}
                  description={topic.teaser}
                  href={topic.href}
                />
              ))}
            </AutoSlider>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Vuoi la guida completa?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Scopri ogni spiaggia, baia e avventura che Aruba ha da offrire, organizzata per
                quello che ami fare.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/it/things-to-do">
                    Scopri di Più su Cosa Fare <ArrowRight className="size-4" />
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
