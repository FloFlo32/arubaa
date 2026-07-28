import type { Metadata } from "next";
import Link from "next/link";
import { Gem, ArrowRight, Sunset, Sparkles, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Hochzeiten auf Aruba",
  description:
    "Barfuß-Zeremonien und Gelübde zur goldenen Stunde: die Planung einer Traumhochzeit auf One Happy Island.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Barfuß-Zeremonien",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Ein Paar feiert seine Hochzeit an einem Strand in Aruba",
    description:
      "Sprechen Sie Ihre Gelübde mit den Zehen im Sand und dem Meer als Kulisse. Die meisten Strandresorts übernehmen die gesamte Zeremonie vor Ort.",
  },
  {
    icon: Sparkles,
    title: "Gelübde zur goldenen Stunde",
    src: "/ingested/arubaa/img-048.webp",
    alt: "Ein frisch verheiratetes Paar hält sich an den Händen am Ufer",
    description:
      "Das Licht des Sonnenuntergangs verwandelt jedes Zeremonienfoto in ein Andenken, und Arubas nahezu garantiert klarer Himmel macht die Planung des Zeitpunkts leicht.",
  },
  {
    icon: HeartHandshake,
    title: "Freude in Bewegung",
    src: "/ingested/arubaa/img-050.webp",
    alt: "Ein Paar läuft an ihrem Hochzeitstag durch das flache Wasser",
    description:
      "Arubas ruhige Flachwasserzonen lassen Raum für ein kleines Fest: ein Lauf durchs Wasser, ein Toast im Sand, Porträts, die nicht gestellt wirken.",
  },
  {
    icon: Gem,
    title: "Eine Flitterwochenreise, die sofort beginnt",
    src: "/ingested/arubaa/img-052.webp",
    alt: "Ein Mann und eine Frau halten sich an den Händen an einem Strand in Aruba",
    description:
      "Kein Reisetag nötig zwischen Hochzeit und Flitterwochen: derselbe Strand, der Ihre Zeremonie ausgerichtet hat, kann auch die Woche danach ausrichten.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Ja, ich will"
          title="Hochzeiten"
          body="Beständig sonniges Wetter und atemberaubende Naturschönheit machen Aruba zum idealen Ort für eine Traumhochzeit, ob mit fünfzig Gästen oder ganz ohne."
          src="/ingested/arubaa/img-046.webp"
          alt="Ein Paar feiert seine Hochzeit an einem Strand in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Ein glücklicher Tag
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Sagen Sie Ja auf One Happy Island
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Arubas Hochzeitsplaner kümmern sich um alles, von Genehmigungen bis zu
              Blumen, sodass die einzige verbleibende Entscheidung ist, an welchem
              Strandabschnitt Sie Ihre Gelübde sprechen.
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
              Weitere Wege zu feiern
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-047.webp"
              alt="Ein Paar in Hochzeitskleidung läuft durch das flache Wasser an einem Strand in Aruba"
              title="Erster Blick im Sand"
              description="Private, frühmorgendliche erste Blicke, bevor der Strand sich füllt."
            />
            <ImageCard
              src="/ingested/arubaa/img-049.webp"
              alt="Ein frisch verheiratetes Paar steht gemeinsam an einem Strand in Aruba"
              title="Erneuerung des Eheversprechens"
              description="Kommen Sie zurück und tun Sie es noch einmal, dieses Mal ganz ohne Planung."
            />
            <ImageCard
              src="/ingested/arubaa/img-051.webp"
              alt="Eine Braut und ein Bräutigam halten sich an den Händen an einem Strand in Aruba"
              title="Hochzeitssuiten"
              description="Buchen Sie durchgehend, damit das Fest nicht enden muss."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Beginnen Sie mit der Planung Ihres Tages</h2>
            <p className="max-w-md text-muted-foreground">
              Entdecken Sie Resorts, Gästeservices und alles andere auf Ihrer Checkliste.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/de/plan-your-visit#guest-services">
                  Gästeservices ansehen <ArrowRight className="size-4" />
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
