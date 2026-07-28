import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, Mountain, Waves, Bike, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Abenteuer in Aruba",
  description:
    "Höhlenbögen, Wüstenpfade und offenes Wasser: wie Sie den Aruba-Effekt durch Abenteuer erleben.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Arikok-Nationalpark",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Eine Frau steht allein auf sandigem Gelände mit Blick auf das Meer in Aruba",
    description:
      "Fast ein Fünftel der Insel ist geschützte Wüstenwildnis: hochaufragende Kakteen, Kalksteinkämme und Pfade, die an verborgenen Buchten enden.",
  },
  {
    icon: Waves,
    title: "Auf Dem Wasser",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Zwei Menschen paddeln gemeinsam vor der Küste Arubas im Kajak",
    description:
      "Beständige Passatwinde machen Aruba zu einem der besten Orte der Karibik zum Kajakfahren, Windsurfen und Segeln, ob beim Wettkampf oder beim gemütlichen Treiben.",
  },
  {
    icon: Compass,
    title: "Meereshöhlen und Felsbögen",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Ein Paar erkundet eine Meereshöhle und einen Felsbogen an der Küste Arubas",
    description:
      "Die Nordküste wurde von Wind und Wellen zu natürlichen Brücken und ausgehöhlten Höhlen geformt, am besten kurz nach Sonnenaufgang zu erkunden, bevor das Licht zu grell wird.",
  },
  {
    icon: Sunrise,
    title: "Dem Horizont entgegen",
    src: "/ingested/arubaa/img-063.webp",
    alt: "Eine Gruppe von Freunden springt gemeinsam am Strand zur goldenen Stunde",
    description:
      "Frühaufsteher haben die Insel praktisch für sich allein: leere Sandbänke, kühle Wüstenluft und einen Sonnenaufgang, der die gesamte Küste golden färbt.",
  },
];

export default function AdventurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Kaweta"
          title="Abenteuer"
          body="Kaweta. Das bedeutet neugierig auf Papiamento, und es ist das perfekte Wort für Arubas Entdeckergeist. Jenseits der Strände belohnt die Insel jeden, der bereit ist, genauer hinzusehen."
          src="/ingested/arubaa/img-031.webp"
          alt="Eine Frau steht allein auf sandigem Gelände mit Blick auf das Meer in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Vier Wege hinein
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Finden Sie Ihr Abenteuer
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba vereint Wüste, Küste und offenes Wasser auf einer Insel, die Sie in
              weniger als einer Stunde durchqueren können, sodass Sie alles auf einer
              einzigen Reise erleben können.
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
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Bike className="size-5" />
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Gemacht zum Entdecken, nicht nur zum Besuchen
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Mieten Sie ein UTV für das Wüsteninnere, buchen Sie ein Schnorchelboot
              für die Riffe, oder gehen Sie einfach von Ihrem Hotel aus los: Aruba ist
              klein genug, dass jedes Abenteuer nur eine kurze Fahrt von Ihrer
              Unterkunft entfernt liegt.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-077.webp"
              alt="Zwei Menschen gehen gemeinsam auf einer Sandbank in Aruba"
              title="Spaziergänge auf der Sandbank"
              description="Bei Ebbe entstehen Sandbänke, die sich bis in die türkisfarbenen Untiefen erstrecken."
            />
            <ImageCard
              src="/ingested/arubaa/img-081.webp"
              alt="Ein Paar als Silhouette auf den Dünen Arubas bei Sonnenuntergang"
              title="Dünenwanderungen"
              description="Die Nordostküste besteht aus sanften Dünen und Wind, am besten zu Fuß zu erleben."
            />
            <ImageCard
              src="/ingested/arubaa/img-065.webp"
              alt="Eine Gruppe von Freunden springt gemeinsam am Strand"
              title="Gruppenausflüge"
              description="Abenteuer sind schöner zu zweit oder in der Gruppe: buchen Sie eine Gruppentour und tauschen Sie sich beim Abendessen aus."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Bereit zum Entdecken?</h2>
            <p className="max-w-md text-muted-foreground">
              Entdecken Sie Touren, Ausrüstungsverleih und alle weiteren Aktivitäten auf Aruba.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/de/things-to-do#natural-wonders">
                  Naturwunder Entdecken <ArrowRight className="size-4" />
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
