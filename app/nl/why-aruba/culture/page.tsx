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
  title: "Cultuur op Aruba",
  description:
    "Honderd nationaliteiten, één eiland: straatkunst, festivals en de mensen achter het Aruba-effect.",
};

const highlights = [
  {
    icon: Palette,
    title: "Straatkunst in San Nicolas",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Een groep vrienden verzameld op een strand van Aruba",
    description:
      "Aruba's tweede stad veranderde haar achterstraten in een openluchtgalerie, met muurschilderingen van lokale en internationale kunstenaars die hele gebouwen bedekken.",
  },
  {
    icon: Globe2,
    title: "Honderd nationaliteiten, één eiland",
    src: "/ingested/arubaa/img-061.webp",
    alt: "Drie vrouwen zitten op een rots op een strand van Aruba",
    description:
      "Nederlands, Papiaments, Spaans en Engels worden hier allemaal gesproken, vaak in hetzelfde gesprek. Die mix is terug te zien in het eten, de muziek en het welkom.",
  },
  {
    icon: Music4,
    title: "Lokale festivals",
    src: "/ingested/arubaa/img-064.webp",
    alt: "Drie vrouwen staan samen op een strand van Aruba",
    description:
      "Van de optocht van Carnaval tot kleinere buurtfeesten, Aruba's kalender draait op muziek, kleur en een excuus om samen te komen.",
  },
  {
    icon: Users,
    title: "Gemeenschap aan het water",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Een groep mensen loopt samen langs de kust van Aruba",
    description:
      "Locals en bezoekers delen dezelfde stranden, dezelfde rumwinkeltjes en dezelfde uitzichten op de zonsondergang, en dat is precies hoe het eiland het graag heeft.",
  },
];

export default function CulturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Honderd smaken"
          title="Cultuur"
          body="Honderd nationaliteiten. Honderd smaken. Aruba's diverse bevolking leeft in harmonie, en dat is te zien in elke hoek van het eiland, van de muurschilderingen tot de menukaarten."
          src="/ingested/arubaa/img-060.webp"
          alt="Een groep vrienden verzameld op een strand van Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Meer dan een decor
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Een klein eiland, een grote mix van mensen
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba&apos;s cultuur zit niet in een museum. Het zit in de taal die
              halverwege een zin wisselt, het aroma dat uit een foodtruck langs de weg
              komt, en de muurschildering die om een heel stadsblok heen wikkelt.
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
              Waar je het zelf kunt voelen
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Een boer aan het werk op een Arubaans veld"
              title="Lokale markten"
              description="Boerenmarkten en kraampjes langs de weg verkopen wat vlakbij is geteeld."
            />
            <ImageCard
              src="/ingested/arubaa/img-066.webp"
              alt="Mensen komen samen op een strand van Aruba"
              title="Buurtfeesten"
              description="Kleine dorpsfeesten verwelkomen bezoekers net zo makkelijk als buren."
            />
            <ImageCard
              src="/ingested/arubaa/img-062.webp"
              alt="Twee vrouwen rennen samen op een wit zandstrand"
              title="Gedeelde stranden"
              description="Locals en bezoekers mengen makkelijk op de openbare stranden van Aruba, dag en nacht."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Wil je het hele verhaal?</h2>
            <p className="max-w-md text-muted-foreground">
              Bekijk de geschiedenis van het eiland en de regio&apos;s die het vormden.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/nl/our-island#history-culture">
                  Geschiedenis & Cultuur <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/nl/why-aruba">Terug Naar Waarom Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
