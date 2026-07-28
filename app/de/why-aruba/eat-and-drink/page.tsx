import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, ArrowRight, Wine, Truck, Sunset } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Essen & Trinken auf Aruba",
  description:
    "Hundert Aromen auf einer Insel: multikulturelle Küche, Rum-Buden und Cocktails zum Sonnenuntergang auf Aruba.",
};

const highlights = [
  {
    icon: Wine,
    title: "Sonnenuntergang, Glas in der Hand",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Freunde halten gemeinsam Weingläser im Freien",
    description:
      "Strandbars richten ihren ganzen Abend am Sonnenuntergang aus, mit einer Happy Hour, die sich am Horizont statt an der Uhr orientiert.",
  },
  {
    icon: Truck,
    title: "Straßenstände und Rum-Buden",
    src: "/ingested/arubaa/img-066.webp",
    alt: "Menschen versammeln sich abends gemeinsam an einem Strand in Aruba",
    description:
      "Einige der besten Mahlzeiten der Insel kommen von einem Truck oder einer Bude mit Plastikstühlen, nicht von einer Karte mit Weinliste.",
  },
  {
    icon: Sunset,
    title: "Tische am Wasser",
    src: "/ingested/arubaa/img-068.webp",
    alt: "Ein Paar hält gemeinsam Getränke im Freien in Aruba",
    description:
      "Viele Restaurants stellen ihre Tische genau dort auf, wo der Sand auf das Wasser trifft, damit das Abendessen die passende Aussicht mitbringt.",
  },
  {
    icon: Utensils,
    title: "Hundert Aromen",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ein Paar entspannt zusammen auf den Küstenfelsen in Aruba",
    description:
      "Europäische Klassiker, südasiatische Würze und frische lokale Meeresfrüchte teilen sich dieselbe kleine Insel, oft sogar denselben Straßenzug.",
  },
];

export default function EatAndDrinkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Für jeden Appetit"
          title="Essen & Trinken"
          body="Arubas kulinarische Szene spiegelt die multikulturelle Bevölkerung wider, mit vielfältigen Angeboten für jeden Appetit: von Rum-Buden bis Fine Dining, und jedem Tisch zum Sonnenuntergang dazwischen."
          src="/ingested/arubaa/img-067.webp"
          alt="Freunde halten gemeinsam Weingläser im Freien"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Hundert Aromen
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Eine kleine Insel mit einem großen Tisch
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Mit über hundert vertretenen Nationalitäten auf der Insel ist Aruba voller
              Aromen aus jeder Ecke der Welt. Wundern Sie sich nicht, wenn Sie mit einem
              neuen Lieblingsgericht abreisen.
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
              Wie Einheimische essen und trinken
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-060.webp"
              alt="Eine Gruppe von Freunden versammelt sich gemeinsam an einem Strand in Aruba"
              title="Geteilte Teller, geteilte Tische"
              description="Arubanische Küche setzt auf Gemeinschaft: größere Teller, längere Tische, mehr Trinksprüche."
            />
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Ein Landwirt arbeitet auf einem arubanischen Feld"
              title="Nah am Ursprung angebaut"
              description="Lokale Bauernhöfe versorgen mehr Küchen der Insel, als man erwarten würde."
            />
            <ImageCard
              src="/ingested/arubaa/img-080.webp"
              alt="Eine Frau und ein Mann waten gemeinsam an einem Strand in Aruba"
              title="Drinks mit den Füßen im Sand"
              description="Keine Schuhe nötig in den meisten Strandbars, Cocktail in der Hand."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Schon hungrig?</h2>
            <p className="max-w-md text-muted-foreground">
              Entdecken Sie Restaurants auf der ganzen Insel, sortiert nach Viertel und Stimmung.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/de/things-to-do#dining">
                  Gastronomie ansehen <ArrowRight className="size-4" />
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
