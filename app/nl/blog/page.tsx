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
  title: "Reisblog: Tips, Cultuur En Ervaringen",
  description:
    "Aruba reistips, cultuur en ervaringen van het team achter One Happy Island.",
};

const topics = [
  {
    title: "Avontuur",
    href: "/nl/why-aruba/adventure",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Een koppel verkent een zeegrot en rotsboog langs de kust van Aruba",
    teaser: "Zeegrotten, rotsbogen en offroadpaden voor de rusteloze reiziger.",
  },
  {
    title: "Romantiek",
    href: "/nl/why-aruba/romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "Een koppel deelt een rustig moment op een strand van Aruba bij zonsondergang",
    teaser: "Zonsondergangwandelingen, privédiners en de momenten waarvoor koppels terugkomen.",
  },
  {
    title: "Cultuur",
    href: "/nl/why-aruba/culture",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Een groep verzameld op een strand van Aruba",
    teaser: "De tradities en industrieën die de identiteit van het eiland vormen.",
  },
  {
    title: "Welzijn",
    href: "/nl/why-aruba/wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Een vrouw relaxt in een badjas naast kaarsen en een badkuip",
    teaser: "Spa's, rust en de trage ochtenden die je klok resetten.",
  },
  {
    title: "Eten & Drinken",
    href: "/nl/why-aruba/eat-and-drink",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Een koppel relaxt samen op de kustrotsen van Aruba",
    teaser: "Lokale smaken, verse zeevruchten en de tafels die de moeite van het toeven waard zijn.",
  },
  {
    title: "Families",
    href: "/nl/why-aruba/families",
    src: "/ingested/arubaa/img-032.webp",
    alt: "Een familie geniet samen van het strand op Aruba",
    teaser: "Gemakkelijke dagen die elke leeftijd van de familie blij houden.",
  },
  {
    title: "Stranden & Baaien",
    href: "/nl/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Een vrouw relaxt in een strandligstoel bij zonsondergang in Aruba",
    teaser: "Van brede openbare stranden tot verscholen baaien die een omweg waard zijn.",
  },
  {
    title: "Reisroutes",
    href: "/nl/things-to-do#itineraries",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Een koppel in trouwkleding rent door het ondiepe water op een strand van Aruba",
    teaser: "Kant-en-klare dagplannen, of je nu drie dagen of tien hebt.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Verhalen van het eiland"
          title="Reisblog, Tips, Cultuur En Ervaringen"
          body="We staan nog maar aan het begin van de geweldige effecten die Aruba te bieden heeft. Duik in je reisdetails hieronder om een Caribische ervaring te ontgrendelen."
          src="/ingested/arubaa/img-051.webp"
          alt="Een net getrouwd koppel houdt elkaars hand vast op een strand van Aruba"
        />

        <section className="py-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Bladeren op onderwerp</h2>
              <p className="mt-4 text-muted-foreground">
                Dit zijn de thema&apos;s waarover we het meest schrijven, elk verwijzend
                naar de volledige gids over het eiland.
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
                  eyebrow="Onderwerp"
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
                Wil je de volledige gids?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Bekijk elk strand, elke baai en elk avontuur dat Aruba te bieden heeft,
                georganiseerd op wat je graag doet.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/nl/things-to-do">
                    Lees Meer Over Wat Te Doen <ArrowRight className="size-4" />
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
