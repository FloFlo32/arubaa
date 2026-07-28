import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Sunset, UtensilsCrossed, Flower2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Romantiek op Aruba",
  description:
    "Zonsondergangwandelingen, privédiners en rustige baaien: hoe koppels het Aruba-effect vinden.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Gouden uur, elke avond",
    src: "/ingested/arubaa/img-076.webp",
    alt: "Een man en vrouw zitten samen op een strand van Aruba tijdens het gouden uur",
    description:
      "Constante zon betekent een constante zonsondergang. Kies een plek aan de westkust en je krijgt gegarandeerd een show, meestal zonder een wolk in de weg.",
  },
  {
    icon: UtensilsCrossed,
    title: "Diner, met je voeten in het zand",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Een man en vrouw staan samen bij een palmboom op een strand van Aruba",
    description:
      "Strandrestaurants dekken de tafels precies aan de waterlijn, zodat het diner een soundtrack van golven en een zonsondergang in de eerste rij heeft.",
  },
  {
    icon: Flower2,
    title: "Trage ochtenden, twee stoelen",
    src: "/ingested/arubaa/img-080.webp",
    alt: "Een vrouw en man lopen samen door het water op een strand van Aruba",
    description:
      "Geen reisschema nodig. Aruba beloont de koppels die niets ambitieuzer doen dan een lange wandeling en een nog langer ontbijt.",
  },
  {
    icon: Heart,
    title: "Rustige baaien voor twee",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Een koppel relaxt samen op de kustrotsen van Aruba",
    description:
      "Weg van de hoofdstrook zijn de kleinere baaien en getijdenpoelen van het eiland makkelijk te vinden en makkelijk helemaal voor jezelf te hebben.",
  },
];

export default function RomancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Samen"
          title="Romantiek"
          body="Ontsnap samen aan de wereld. Aruba's prachtige landschap, warme avonden en rustigere tempo maken het een ideale bestemming voor een romantische reis, eerste date of vijftigste huwelijksdag."
          src="/ingested/arubaa/img-076.webp"
          alt="Een man en vrouw zitten samen op een strand van Aruba tijdens het gouden uur"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Gemaakt voor twee
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Romantiek heeft hier geen reservering nodig
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba&apos;s formaat werkt in jouw voordeel: een korte rit brengt je naar een
              andere kustlijn, in een andere stemming, zonder ooit de rest van de dag te
              verliezen.
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
              Meer momenten die het plannen waard zijn
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-019.webp"
              alt="Een vrouw in een badjas relaxt bij een bad met kaarslicht"
              title="Spadagen voor koppels"
              description="Behandelingen naast elkaar, ontworpen om jullie samen te laten vertragen."
            />
            <ImageCard
              src="/ingested/arubaa/img-068.webp"
              alt="Een koppel houdt samen drankjes vast in de buitenlucht op Aruba"
              title="Cocktails bij zonsondergang"
              description="Strandbars plannen happy hour rond de zonsondergang, niet de klok."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Een koppel relaxt onder een resortparasol bij zonsondergang"
              title="Privécabana's"
              description="Reserveer een schaduwrijke plek voor de dag en laat het eiland naar jou toe komen."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Iets speciaals in de planning?</h2>
            <p className="max-w-md text-muted-foreground">
              Van jubileumreizen tot huwelijksaanzoeken, bekijk hoe je de details plant.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/nl/why-aruba/weddings">
                  Ontdek Bruiloften <ArrowRight className="size-4" />
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
