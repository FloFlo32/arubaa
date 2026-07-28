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
  title: "Aruba Nieuws, Eilandtoerismenieuws",
  description: "Het laatste toerismenieuws en updates van Aruba.",
};

const updates = [
  {
    title: "Autentico Aruba Culinary Festival",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Een koppel relaxt samen op de kustrotsen van Aruba",
    description:
      "Autentico is deze oktober terug voor nog een onvergetelijke viering van Aruba's culinaire scene.",
  },
  {
    title: "myAruba App",
    src: "/ingested/arubaa/img-037.webp",
    alt: "Bezoekers verkennen de kustlijn van Aruba met de myAruba app",
    description: "Probeer myAruba, de app die je helpt geweldige plekken op het eiland te ontdekken.",
  },
  {
    title: "Kraanwatercampagne",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Luchtfoto van strandgangers die in het turquoise water van Aruba lopen",
    description: "Aruba is bekend om zijn ongerepte stranden en turquoise water.",
  },
  {
    title: "Reisvereisten",
    src: "/ingested/arubaa/img-041.webp",
    alt: "Bezoekers arriveren op een strand van Aruba voor hun vakantie",
    description:
      "Hier zijn een aantal details om te onthouden wanneer je naar en van Aruba reist, waaronder de nieuwe duurzaamheidsheffing van $20.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Eilandupdates"
          title="Aruba, Eilandtoerismenieuws"
          body="We staan nog maar aan het begin van de geweldige effecten die Aruba te bieden heeft. Duik in je reisdetails hieronder om een Caribische ervaring te ontgrendelen die je vult met zonneschijn en je met een blij gevoel naar huis stuurt dat nooit vervaagt."
          src="/ingested/arubaa/img-042.webp"
          alt="Een familie loopt samen hand in hand op een strand van Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20 pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Reisvereisten & Updates</h2>
            <p className="mt-4 text-muted-foreground">
              Het laatste nieuws van de Aruba Tourism Authority, actueel gehouden zodat je
              volgende reis met de juiste informatie begint.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {updates.map((item) => (
              <RevealItem key={item.title}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  eyebrow="Update"
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
                Goed nieuws verdient een goede aanbieding
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Bekijk wat er momenteel wordt aangeboden en maak van de update van vandaag
                je volgende reis.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/nl/deals">
                    Bekijk Huidige Aanbiedingen <ArrowRight className="size-4" />
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
