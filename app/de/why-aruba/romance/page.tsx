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
  title: "Romantik in Aruba",
  description:
    "Spaziergänge bei Sonnenuntergang, private Abendessen und stille Buchten: wie Paare den Aruba-Effekt finden.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Goldene Stunde, jeden Abend",
    src: "/ingested/arubaa/img-076.webp",
    alt: "Ein Mann und eine Frau sitzen zusammen an einem Strand in Aruba während der goldenen Stunde",
    description:
      "Beständiger Sonnenschein bedeutet einen beständigen Sonnenuntergang. Suchen Sie sich einen Platz an der Westküste, und Ihnen ist ein Schauspiel garantiert, an den meisten Abenden ohne eine einzige Wolke.",
  },
  {
    icon: UtensilsCrossed,
    title: "Abendessen, barfuß im Sand",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Ein Mann und eine Frau stehen zusammen neben einer Palme an einem Strand in Aruba",
    description:
      "Restaurants direkt am Strand decken die Tische unmittelbar an der Wasserlinie, sodass das Abendessen mit dem Klang der Wellen und einem Sonnenuntergang in der ersten Reihe serviert wird.",
  },
  {
    icon: Flower2,
    title: "Ruhige Morgen, zwei Stühle",
    src: "/ingested/arubaa/img-080.webp",
    alt: "Eine Frau und ein Mann waten gemeinsam an einem Strand in Aruba",
    description:
      "Kein Reiseplan nötig. Aruba belohnt Paare, die nichts Ambitionierteres tun als einen langen Spaziergang und ein noch längeres Frühstück.",
  },
  {
    icon: Heart,
    title: "Stille Buchten für zwei",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ein Paar entspannt gemeinsam auf den Küstenfelsen in Aruba",
    description:
      "Fernab der Hauptpromenade sind die kleineren Buchten und Gezeitentümpel der Insel leicht zu finden und ganz für sich allein zu genießen.",
  },
];

export default function RomancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Gemeinsam"
          title="Romantik"
          body="Entfliehen Sie gemeinsam dem Alltag. Arubas wunderschöne Landschaft, warme Abende und das entspannte Tempo machen die Insel zum idealen Ziel für einen romantischen Kurzurlaub, ein erstes Date oder den fünfzigsten Hochzeitstag."
          src="/ingested/arubaa/img-076.webp"
          alt="Ein Mann und eine Frau sitzen zusammen an einem Strand in Aruba während der goldenen Stunde"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Gemacht für zwei
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Romantik braucht hier keine Reservierung
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Arubas Größe spielt Ihnen in die Karten: eine kurze Fahrt bringt Sie an
              eine andere Küste, in eine andere Stimmung, ohne dass Ihnen der
              restliche Tag verloren geht.
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
              Weitere Momente, die eine Planung wert sind
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-019.webp"
              alt="Eine Frau im Bademantel entspannt an einer kerzenbeleuchteten Badewanne"
              title="Spa-Tage für Paare"
              description="Behandlungen nebeneinander, die Sie beide gleichzeitig zur Ruhe kommen lassen."
            />
            <ImageCard
              src="/ingested/arubaa/img-068.webp"
              alt="Ein Paar hält gemeinsam Drinks im Freien in Aruba"
              title="Cocktails bei Sonnenuntergang"
              description="Strandbars richten die Happy Hour nach dem Sonnenuntergang aus, nicht nach der Uhr."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Ein Paar entspannt unter einem Sonnenschirm des Resorts bei Sonnenuntergang"
              title="Private Cabanas"
              description="Reservieren Sie sich für den Tag einen schattigen Platz und lassen Sie die Insel zu sich kommen."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planen Sie etwas Besonderes?</h2>
            <p className="max-w-md text-muted-foreground">
              Von Jubiläumsreisen bis zu Heiratsanträgen: erfahren Sie, wie Sie die Details planen.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/de/why-aruba/weddings">
                  Hochzeiten Entdecken <ArrowRight className="size-4" />
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
