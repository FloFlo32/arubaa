import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, Sparkles, Wind, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Wellness auf Aruba",
  description:
    "Stille an den Klippen und langsamer, leiser Luxus: wie man auf Aruba abschaltet und sich selbst wiederfindet.",
};

const highlights = [
  {
    icon: Sparkles,
    title: "Langsamer, leiser Luxus",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Eine Frau im Bademantel entspannt bei einer kerzenbeleuchteten Badewanne",
    description:
      "Spa-Rituale hier setzen auf die eigenen Materialien der Insel: Aloe, Meersalz und Stunden, die sich dehnen statt zu hetzen.",
  },
  {
    icon: Wind,
    title: "Stille an den Klippen",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Eine Frau steht allein auf sandigem Gelände mit Blick auf das Meer in Aruba",
    description:
      "Die Klippen der Insel liegen direkt im Passatwind. Zehn stille Minuten dort oben bewirken mehr als eine Stunde anderswo.",
  },
  {
    icon: Sunrise,
    title: "Langsame Morgen am Wasser",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Eine Frau entspannt in einem Strandliegestuhl bei Sonnenuntergang in Aruba",
    description:
      "Kein Wecker nötig. Arubas Morgen sind für einen langsamen Kaffee, ein längeres Bad und einen Plan, der bis Mittag warten kann.",
  },
  {
    icon: Flower2,
    title: "Gemeinsam abschalten",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Ein Mann und eine Frau stehen zusammen an einer Palme an einem Strand in Aruba",
    description:
      "Wellness ist hier nicht zwangsläufig etwas Einsames. Langsame Tage am Wasser lassen sich genauso leicht teilen wie allein genießen.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Abschalten"
          title="Wellness"
          body="Aruba ist dafür gemacht, dass Sie von der Welt abschalten und sich selbst wiederentdecken. Weniger Ablenkung, mehr Sonne und eine Insel, die klein genug ist, dass Entschleunigung der ganze Sinn der Sache ist."
          src="/ingested/arubaa/img-031.webp"
          alt="Eine Frau steht allein auf sandigem Gelände mit Blick auf das Meer in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Stille inklusive
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Ist es wirklich Urlaub, wenn man danach einen weiteren braucht?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Gute Nachrichten: Auf Aruba ist das nicht der Fall. Beständige Sonne, niedrige
              Luftfeuchtigkeit und eine Insel, die ganz auf das Wasser ausgerichtet ist,
              machen Erholung zum Normalzustand, nicht zu etwas, das man einplanen muss.
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
              Ein paar Wege, um abzuschalten
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-039.webp"
              alt="Zwei Personen sitzen zusammen an einem Strand in Aruba"
              title="Strandyoga bei Sonnenaufgang"
              description="Stille Dehnübungen im Sand, bevor die Insel erwacht."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Ein Paar unterhält sich zusammen am Pool eines Resorts in Aruba"
              title="Pooltage ohne Stecker"
              description="Resortpools, die absichtlich zum völligen Nichtstun einladen."
            />
            <ImageCard
              src="/ingested/arubaa/img-036.webp"
              alt="Ein Paar entspannt zusammen auf den Küstenfelsen in Aruba"
              title="Wandern zwischen Gezeitentümpeln"
              description="Langsame Spaziergänge über die Felsen, ohne festes Ziel."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Bereit, herunterzuschalten?</h2>
            <p className="max-w-md text-muted-foreground">
              Entdecken Sie All-Inclusive-Aufenthalte und Resortoptionen, die auf Erholung ausgelegt sind.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/de/plan-your-visit#all-inclusive">
                  All-Inclusive-Unterkünfte ansehen <ArrowRight className="size-4" />
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
