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
  title: "Cosa Fare ad Aruba",
  description:
    "Dalle spiagge e sport acquatici alla vita notturna, ristorazione, cultura e golf: tutto quello che c'è da fare su One Happy Island.",
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
    title: "Vita Notturna",
    body: "Dai lounge sulla spiaggia ai ballerini a tarda notte, le serate di Aruba sono vivaci quanto le sue giornate.",
    span: "md:col-span-2",
  },
  {
    id: "sightseeing-tours",
    icon: Binoculars,
    title: "Visite Ed Escursioni",
    body: "Esperienze guidate e siti storici, visti nel modo in cui i locali li conoscono meglio.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Shopping",
    body: "Boutique, mercati locali e occasioni duty-free in tutta l'isola.",
  },
  {
    id: "wellbeing",
    icon: Flower2,
    title: "Benessere",
    body: "Attività incentrate sul benessere, dai ritiri spa allo stretching all'alba vicino al mare.",
  },
  {
    id: "sports-golf",
    icon: Dumbbell,
    title: "Sport E Golf",
    body: "Campi da campionato e attività dinamiche per ogni tipo di viaggiatore.",
    span: "md:col-span-2",
  },
];

const itineraries = [
  { icon: Sun, title: "Sole, Sabbia, Serenità" },
  { icon: Utensils, title: "Gusta Tutto" },
  { icon: Mountain, title: "In Una Cosa Sola Con La Natura" },
  { icon: Users2, title: "Una Famiglia Felice" },
  { icon: Sunrise, title: "Rallenta i Ritmi" },
  { icon: Footprints, title: "Locale all'Istante" },
];

export default function ThingsToDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
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
                Cosa Fare ad Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba offre un&apos;ampia gamma di esperienze per ogni ritmo. Dalle spiagge
                tranquille e i paesaggi naturali ai siti culturali e alle esperienze locali,
                l&apos;isola ti invita a esplorare con attenzione e a vivere momenti
                significativi. Certo, le spiagge di Aruba sono tra le migliori al mondo.
                Ma guarda oltre il sole, la sabbia e l&apos;acqua infiniti, e troverai
                un&apos;isola piena di esperienze: escursioni panoramiche, baie splendide e una
                cucina indimenticabile.
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
              Oltre 20 lidi
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Spiagge E Baie
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba ha più di 20 spiagge e baie pubbliche. Vanno da baie calme e
              adatte alle famiglie a coste selvagge baciate dal vento.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ImageCard
              src="/ingested/arubaa/img-038.webp"
              alt="Visitatori che camminano lungo la spiaggia di giorno"
              title="Baie calme e adatte alle famiglie"
              description="Acque basse e riparate sul lato sottovento dell'isola."
            />
            <ImageCard
              src="/ingested/arubaa/img-030.webp"
              alt="Visitatori che si godono il mare di giorno"
              title="Coste baciate dal vento"
              description="Ampie baie apere dove gli alisei mantengono l'aria fresca."
            />
          </div>
        </section>

        <SplitRow
          id="on-the-water"
          icon={Sailboat}
          eyebrow="Vento e acqua"
          title="Sull'Acqua"
          body="Da baie calme e protette a alcuni dei migliori spot di windsurf al mondo, la costa di Aruba metta ogni tipo di sport acquatico a portata di mano."
          src="/ingested/arubaa/img-047.webp"
          alt="Una coppia in abiti da sposa corre tra le acque basse su una spiaggia di Aruba"
        />

        <SplitRow
          id="natural-wonders"
          icon={Mountain}
          eyebrow="Arikok e oltre"
          title="Meraviglie Naturali"
          body="Esplora il paesaggio desertico del Parco Nazionale Arikok, poi rinfrescati facendo snorkeling nelle baie scavate nella costa calcarea dell'isola."
          src="/ingested/arubaa/img-031.webp"
          alt="Una donna in piedi da sola su un terreno sabbioso che si affaccia sul mare"
          reverse
        />

        <SplitRow
          id="dining"
          icon={Utensils}
          eyebrow="Ogni sapore"
          title="Ristorazione"
          body="La scena gastronomica di Aruba spazia dai classici europei alle spezie sudasiatiche fino al pesce locale più fresco, spesso servito a pochi passi dal mare."
          src="/ingested/arubaa/img-036.webp"
          alt="Una coppia si rilassa insieme sulle rocce costiere di Aruba"
        />

        <SplitRow
          id="arts-culture"
          icon={Landmark}
          eyebrow="San Nicolas"
          title="Arte E Cultura"
          body="San Nicolas è ricca di storia, cultura e architettura, un vero riflesso degli abitanti di San Nicolas e della loro vita quotidiana."
          src="/ingested/arubaa/img-034.webp"
          alt="Diverse persone che passeggiano lungo la costa vicino a San Nicolas"
          reverse
        />

        {/* Bento: Nightlife / Sightseeing / Shopping / Wellbeing / Sports & Golf */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Altri modi per vivere la giornata
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Il resto dell&apos;isola, in cinque direzioni.
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
              Calendario Eventi
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Ritrovi comunitari e festival riempiono il calendario di Aruba tutto l&apos;anno, dalla
              stagione del carnevale alle celebrazioni di cibo e musica in riva al mare.
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
              Scritti da esperti locali
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Itinerari
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Idee di viaggio già pronte, pianificate per farti passare meno tempo a decidere e
              più tempo a goderti l&apos;isola.
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
                  Un percorso curato attraverso l&apos;isola, creato dalle persone che la
                  conoscono meglio.
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
                Pronto a riempire il <span className="text-primary">tuo itinerario</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Spiagge, baie, prenotazioni a cena e tutto quello che c&apos;è in mezzo: prenota la tua
                fuga su One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/it/book-now">
                    Prenota La Tua Fuga Ad Aruba <ArrowRight className="size-4" />
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
