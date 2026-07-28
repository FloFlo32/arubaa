import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Sailboat,
  Mountain,
  Utensils,
  Music,
  Landmark,
  Binoculars,
  ShoppingBag,
  Flower2,
  Dumbbell,
  CalendarDays,
  MapIcon,
  ArrowRight,
  Sun,
  Sunrise,
  Users2,
  Footprints,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Was zu tun ist in Aruba",
  description:
    "Von Stränden und Wassersport über Nachtleben, Gastronomie und Kultur bis hin zu Golf: alles, was es auf One Happy Island zu erleben gibt.",
};

function SplitRow({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  src,
  alt,
  reverse = false,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-6xl py-16 sm:py-20">
      <div
        className={cn(
          "grid items-center gap-10 md:grid-cols-2 md:gap-14",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <Icon className="size-5" />
          </span>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

const bentoCells = [
  {
    id: "nightlife",
    icon: Music,
    title: "Nachtleben",
    body: "Von Strandlounges bis zum Tanzen bis in die Nacht: Arubas Abende sind genauso lebendig wie seine Tage.",
    span: "md:col-span-2",
  },
  {
    id: "sightseeing-tours",
    icon: Binoculars,
    title: "Sightseeing & Touren",
    body: "Geführte Erlebnisse und historische Sehenswürdigkeiten, so gesehen, wie Einheimische sie am besten kennen.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Einkaufen",
    body: "Boutiquen, lokale Märkte und zollfreie Schnäppchen auf der ganzen Insel.",
  },
  {
    id: "wellbeing",
    icon: Flower2,
    title: "Wohlbefinden",
    body: "Aktivitäten rund um Wellness, von Spa-Aufenthalten bis zu Dehnübungen bei Sonnenaufgang am Meer.",
  },
  {
    id: "sports-golf",
    icon: Dumbbell,
    title: "Sport & Golf",
    body: "Championship-Golfplätze und aktive Unternehmungen für jeden Reisetyp.",
    span: "md:col-span-2",
  },
];

const itineraries = [
  { icon: Sun, title: "Sonne, Sand, Gelassenheit" },
  { icon: Utensils, title: "Alles Genießen" },
  { icon: Mountain, title: "Eins Mit Der Natur" },
  { icon: Users2, title: "Eine Glückliche Familie" },
  { icon: Sunrise, title: "Einen Gang Runterschalten" },
  { icon: Footprints, title: "Sofort Einheimisch" },
];

export default function ThingsToDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/1c987a2c-afe4-4348-b459-383e6ac9916e/mp4/CORTO-PT-HERO-ANIMATION.mp4"
            poster="/ingested/arubaa/img-029.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Was zu tun ist in Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba bietet eine große Vielfalt an Erlebnissen für jedes Tempo. Von
                ruhigen Stränden und Naturlandschaften bis hin zu kulturellen Stätten und
                lokalen Erfahrungen lädt die Insel dazu ein, achtsam zu erkunden und
                bedeutungsvolle Momente zu genießen. Natürlich zählen Arubas Strände zu
                den besten der Welt. Doch wer über die endlose Sonne, den Sand und das
                Wasser hinausblickt, findet eine Insel voller Erlebnisse: malerische
                Wanderungen, atemberaubende Buchten und unvergessliche Küche.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Beaches & Coves */}
        <section id="beaches-coves" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Waves className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Über 20 Strände
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Strände & Buchten
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba hat mehr als 20 öffentliche Strände und Buchten. Sie reichen von
              ruhigen, familienfreundlichen Buchten bis zu wilden, windumwehten
              Küstenabschnitten.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ImageCard
              src="/ingested/arubaa/img-038.webp"
              alt="Besucher spazieren bei Tageslicht am Strand entlang"
              title="Ruhige, familienfreundliche Buchten"
              description="Flaches, geschütztes Wasser auf der windgeschützten Seite der Insel."
            />
            <ImageCard
              src="/ingested/arubaa/img-030.webp"
              alt="Besucher genießen bei Tageslicht die Küste"
              title="Windumwehte Küstenabschnitte"
              description="Weite, offene Buchten, in denen die Passatwinde für angenehme Kühle sorgen."
            />
          </div>
        </section>

        <SplitRow
          id="on-the-water"
          icon={Sailboat}
          eyebrow="Wind und Wasser"
          title="Auf Dem Wasser"
          body="Von ruhigen, geschützten Buchten bis zu einigen der besten Windsurf-Spots der Welt: Arubas Küste macht jede Art von Wassersport erreichbar."
          src="/ingested/arubaa/img-047.webp"
          alt="Ein Paar in Hochzeitskleidung läuft durch das flache Wasser an einem Strand in Aruba"
        />

        <SplitRow
          id="natural-wonders"
          icon={Mountain}
          eyebrow="Arikok und mehr"
          title="Naturwunder"
          body="Erkunden Sie die Wüstenlandschaft des Arikok-Nationalparks und kühlen Sie sich anschließend beim Schnorcheln in Buchten ab, die in die Kalksteinküste der Insel geschnitten sind."
          src="/ingested/arubaa/img-031.webp"
          alt="Eine Frau steht allein auf sandigem Gelände mit Blick auf das Meer"
          reverse
        />

        <SplitRow
          id="dining"
          icon={Utensils}
          eyebrow="Jeder Geschmack"
          title="Gastronomie"
          body="Arubas Restaurantszene reicht von europäischen Klassikern über südasiatische Gewürze bis hin zu den frischesten lokalen Meeresfrüchten, oft nur wenige Schritte vom Wasser entfernt serviert."
          src="/ingested/arubaa/img-036.webp"
          alt="Ein Paar entspannt gemeinsam auf den Küstenfelsen in Aruba"
        />

        <SplitRow
          id="arts-culture"
          icon={Landmark}
          eyebrow="San Nicolas"
          title="Kunst & Kultur"
          body="San Nicolas ist reich an Geschichte, Kultur und Architektur, ein wahres Abbild der Bewohner von San Nicolas und ihres Alltags."
          src="/ingested/arubaa/img-034.webp"
          alt="Mehrere Menschen schlendern entlang der Küste bei San Nicolas"
          reverse
        />

        {/* Bento: Nightlife / Sightseeing / Shopping / Wellbeing / Sports & Golf */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Weitere Möglichkeiten, den Tag zu verbringen
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Der Rest der Insel, in fünf Richtungen.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {bentoCells.map((c) => (
              <RevealItem
                key={c.id}
                className={cn(
                  "scroll-mt-24",
                  c.span
                )}
              >
                <div
                  id={c.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Calendar of Events */}
        <section id="calendar" className="container-px mx-auto max-w-4xl py-16 text-center sm:py-20">
          <Reveal>
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <CalendarDays className="size-6" />
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl">
              Veranstaltungskalender
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Gemeinschaftstreffen und Festivals füllen Arubas Kalender das ganze Jahr
              über, von der Karnevalssaison bis zu Food- und Musikfeiern am Meer.
            </p>
          </Reveal>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <MapIcon className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Verfasst von lokalen Experten
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Reiserouten
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Vorgeplante Reiseideen, damit Sie weniger Zeit mit Entscheiden und mehr
              Zeit mit dem Genießen der Insel verbringen.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[75%] sm:w-[40%] lg:w-[23%]">
            {itineraries.map((it) => (
              <div
                key={it.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <it.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Eine kuratierte Route durch die Insel, erstellt von den Menschen, die
                  sie am besten kennen.
                </p>
              </div>
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Bereit, Ihre <span className="text-primary">eigene Reiseroute</span> zu füllen?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Strände, Buchten, Restaurantreservierungen und alles dazwischen: buchen
                Sie Ihre Flucht auf die One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/de/book-now">
                    Buchen Sie Ihre Aruba-Flucht <ArrowRight className="size-4" />
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
