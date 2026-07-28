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
  title: "Kultur in Aruba",
  description:
    "Hundert Nationalitäten, eine Insel: Straßenkunst, Feste und die Menschen hinter dem Aruba-Effekt.",
};

const highlights = [
  {
    icon: Palette,
    title: "Straßenkunst in San Nicolas",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Eine Gruppe von Freunden versammelt sich an einem Strand in Aruba",
    description:
      "Arubas zweitgrößte Stadt hat ihre Seitenstraßen in eine Freiluftgalerie verwandelt, mit Wandgemälden von lokalen und internationalen Künstlern, die ganze Gebäude bedecken.",
  },
  {
    icon: Globe2,
    title: "Hundert Nationalitäten, eine Insel",
    src: "/ingested/arubaa/img-061.webp",
    alt: "Drei Frauen sitzen auf einem Felsen an einem Strand in Aruba",
    description:
      "Niederländisch, Papiamento, Spanisch und Englisch werden hier alle gesprochen, oft im selben Gespräch. Diese Mischung zeigt sich im Essen, in der Musik und im Willkommen.",
  },
  {
    icon: Music4,
    title: "Lokale Feste",
    src: "/ingested/arubaa/img-064.webp",
    alt: "Drei Frauen stehen zusammen an einem Strand in Aruba",
    description:
      "Vom Straßenumzug des Karnevals bis zu kleineren Nachbarschaftsfesten: Arubas Kalender lebt von Musik, Farbe und jedem Anlass, zusammenzukommen.",
  },
  {
    icon: Users,
    title: "Gemeinschaft am Wasser",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Eine Gruppe von Menschen geht gemeinsam entlang der Küste Arubas",
    description:
      "Einheimische und Besucher teilen sich dieselben Strände, dieselben Rum-Hütten und dieselben Sonnenuntergänge, und genau so mag es die Insel.",
  },
];

export default function CulturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Hundert Geschmacksrichtungen"
          title="Kultur"
          body="Hundert Nationalitäten. Hundert Geschmacksrichtungen. Arubas vielfältige Bevölkerung lebt in Harmonie, und das zeigt sich in jeder Ecke der Insel, von den Wandgemälden bis zu den Speisekarten."
          src="/ingested/arubaa/img-060.webp"
          alt="Eine Gruppe von Freunden versammelt sich an einem Strand in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Mehr als nur Kulisse
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Eine kleine Insel, eine große Mischung an Menschen
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Arubas Kultur wird nicht in einem Museum aufbewahrt. Sie zeigt sich im
              Sprachwechsel mitten im Satz, im Duft eines Foodtrucks am Straßenrand
              und im Wandgemälde, das sich um einen ganzen Straßenblock zieht.
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
              Wo Sie es hautnah erleben
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Ein Bauer arbeitet auf einem Feld in Aruba"
              title="Lokale Märkte"
              description="Bauernmärkte und Straßenstände verkaufen, was gleich um die Ecke angebaut wird."
            />
            <ImageCard
              src="/ingested/arubaa/img-066.webp"
              alt="Menschen versammeln sich an einem Strand in Aruba"
              title="Nachbarschaftstreffen"
              description="Kleinstadtfeste heißen Besucher genauso herzlich willkommen wie Nachbarn."
            />
            <ImageCard
              src="/ingested/arubaa/img-062.webp"
              alt="Zwei Frauen laufen gemeinsam an einem weißen Sandstrand"
              title="Gemeinsame Strände"
              description="Einheimische und Besucher mischen sich mühelos an Arubas öffentlichen Stränden, Tag und Nacht."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Möchten Sie die ganze Geschichte erfahren?</h2>
            <p className="max-w-md text-muted-foreground">
              Entdecken Sie die Geschichte der Insel und die Regionen, die sie geprägt haben.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/de/our-island#history-culture">
                  Geschichte & Kultur <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/de/why-aruba">Zurück zu Warum Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
