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
  title: "Familienurlaub auf Aruba",
  description:
    "Ruhiges, flaches Wasser und entspannte Tage für jedes Alter: warum Aruba für Familienurlaube funktioniert.",
};

const highlights = [
  {
    icon: Waves,
    title: "Ruhiges, flaches Wasser",
    src: "/ingested/arubaa/img-070.webp",
    alt: "Ein Erwachsener trägt ein Kind an einem Strand in Aruba",
    description:
      "Die windgeschützten Strände der Insel sind berühmt für ihre Ruhe und geringe Tiefe, was mehr Zeit im Wasser und weniger nervöses Beobachten der Wellen bedeutet.",
  },
  {
    icon: Sun,
    title: "Entspannte Tage, wenig Stress",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Zwei Jungen laufen gemeinsam an einem Strand in Aruba",
    description:
      "Kurze Flüge, flaches Gelände und kleine Entfernungen bedeuten weniger Zeit im Transit und mehr Zeit, die Kinder sich müde laufen zu lassen.",
  },
  {
    icon: Baby,
    title: "Gemacht für die kleinsten Gäste",
    src: "/ingested/arubaa/img-072.webp",
    alt: "Ein Erwachsener hält ein Baby an einem Strand in Aruba",
    description:
      "Warmes, sanftes Wasser und weicher Sand machen Arubas Strände wirklich unkompliziert mit Baby oder Kleinkind, nicht nur laut Werbung.",
  },
  {
    icon: Users2,
    title: "Für jede Generation",
    src: "/ingested/arubaa/img-074.webp",
    alt: "Eine Familie hält sich bei Sonnenuntergang gemeinsam an den Händen an einem Strand in Aruba",
    description:
      "Großeltern, Eltern und Kinder finden hier jeweils ihr eigenes Tempo: jemand hat immer Lust auf Wasser, und jemand ist immer glücklich in der Nähe im Liegestuhl.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Für jedes Alter"
          title="Familien"
          body="Aruba bietet Aktivitäten für Gäste jeden Alters und ist damit ein idealer Ort für einen Familienurlaub. Der Aruba-Effekt fragt nicht, ob Sie 5 oder 50 sind."
          src="/ingested/arubaa/img-069.webp"
          alt="Ein Erwachsener und ein Kind halten sich an den Händen an einem Strand in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Eine glückliche Familie
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Für jedes Mitglied der Reise etwas dabei
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Den Aruba-Effekt spürt jeder, der sich ihm öffnet, und dazu zählen auch die
              jüngsten Reisenden. Wenn Sie etwas suchen, das Eltern und Kinder gleichermaßen
              lieben können, sind Sie hier richtig.
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
              Ein Tag, der für alle passt
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-037.webp"
              alt="Eine Familie posiert gemeinsam für ein Foto im Sand"
              title="Strandtage, gemeinsam"
              description="Sand, flaches Wasser und Schatten für jedes Familienmitglied."
            />
            <ImageCard
              src="/ingested/arubaa/img-042.webp"
              alt="Eine Familie geht gemeinsam Hand in Hand entlang der Küste"
              title="Langsame Spaziergänge"
              description="Einfache, flache Küste, die auch für kleine Beine angenehm ist."
            />
            <ImageCard
              src="/ingested/arubaa/img-035.webp"
              alt="Eine Betreuungsperson trägt ein kleines Kind am Strand entlang"
              title="Gemacht für die Kleinsten"
              description="Ruhige Buchten und warmes, flaches Wasser für kleine Schwimmer."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planen Sie eine Familienreise?</h2>
            <p className="max-w-md text-muted-foreground">
              Entdecken Sie familienfreundliche Hotels, All-Inclusive-Aufenthalte und leicht zugängliche Strände.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/de/plan-your-visit#hotels-resorts">
                  Hotels & Resorts ansehen <ArrowRight className="size-4" />
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
