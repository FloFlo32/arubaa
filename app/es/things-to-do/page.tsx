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
  title: "Qué Hacer en Aruba",
  description:
    "De playas y deportes acuáticos a vida nocturna, gastronomía, cultura y golf: todo lo que puedes hacer en Una Isla Feliz.",
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
    title: "Vida Nocturna",
    body: "Desde lounges frente a la playa hasta baile hasta la madrugada, las noches de Aruba son tan animadas como sus días.",
    span: "md:col-span-2",
  },
  {
    id: "sightseeing-tours",
    icon: Binoculars,
    title: "Turismo y Excursiones",
    body: "Experiencias guiadas y sitios históricos, vistos como solo los locales saben mostrarlos.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Compras",
    body: "Boutiques, mercados locales y hallazgos libres de impuestos por toda la isla.",
  },
  {
    id: "wellbeing",
    icon: Flower2,
    title: "Bienestar",
    body: "Actividades enfocadas en el bienestar, desde retiros de spa hasta estiramientos al amanecer junto al mar.",
  },
  {
    id: "sports-golf",
    icon: Dumbbell,
    title: "Deportes y Golf",
    body: "Campos de campeonato y actividades activas para cada tipo de viajero.",
    span: "md:col-span-2",
  },
];

const itineraries = [
  { icon: Sun, title: "Sol, Arena, Serenidad" },
  { icon: Utensils, title: "Saborea Todo" },
  { icon: Mountain, title: "Uno Con La Naturaleza" },
  { icon: Users2, title: "Una Familia Feliz" },
  { icon: Sunrise, title: "Bájale El Ritmo" },
  { icon: Footprints, title: "Local Al Instante" },
];

export default function ThingsToDoPageEs() {
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
                Una Isla Feliz
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Qué Hacer en Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba ofrece una amplia gama de experiencias para todos los ritmos. De
                playas tranquilas y paisajes naturales a sitios culturales y experiencias
                locales, la isla te invita a explorar con calma y disfrutar de momentos con
                significado. Claro, las playas de Aruba están entre las mejores del mundo.
                Pero mira más allá del sol, la arena y el agua interminables, y encontrarás
                una isla llena de experiencias: caminatas panorámicas, calas impresionantes y
                una cocina inolvidable.
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
              Más de 20 costas
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Playas y Calas
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba tiene más de 20 playas y calas públicas. Van desde bahías tranquilas y
              familiares hasta costas salvajes acariciadas por el viento.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ImageCard
              src="/ingested/arubaa/img-038.webp"
              alt="Visitantes caminando por la playa durante el día"
              title="Bahías tranquilas y familiares"
              description="Aguas poco profundas y resguardadas en el lado de sotavento de la isla."
            />
            <ImageCard
              src="/ingested/arubaa/img-030.webp"
              alt="Visitantes disfrutando de la costa durante el día"
              title="Costas acariciadas por el viento"
              description="Amplias calas abiertas donde los vientos alisios mantienen todo fresco."
            />
          </div>
        </section>

        <SplitRow
          id="on-the-water"
          icon={Sailboat}
          eyebrow="Viento y agua"
          title="En el Agua"
          body="De bahías tranquilas y protegidas a algunos de los mejores lugares de windsurf del mundo, la costa de Aruba pone a tu alcance todo tipo de deporte acuático."
          src="/ingested/arubaa/img-047.webp"
          alt="Una pareja en traje de novios corriendo por aguas poco profundas en una playa de Aruba"
        />

        <SplitRow
          id="natural-wonders"
          icon={Mountain}
          eyebrow="Arikok y más allá"
          title="Maravillas Naturales"
          body="Explora el paisaje desértico del Parque Nacional Arikok y luego refréscate haciendo esnórquel en calas talladas en la costa caliza de la isla."
          src="/ingested/arubaa/img-031.webp"
          alt="Una mujer de pie sola en un terreno arenoso con vista al mar"
          reverse
        />

        <SplitRow
          id="dining"
          icon={Utensils}
          eyebrow="Todos los sabores"
          title="Gastronomía"
          body="La escena gastronómica de Aruba abarca clásicos europeos, especias del sur de Asia y el marisco local más fresco, a menudo servido a pocos pasos del agua."
          src="/ingested/arubaa/img-036.webp"
          alt="Una pareja relajándose junta sobre las rocas de la costa en Aruba"
        />

        <SplitRow
          id="arts-culture"
          icon={Landmark}
          eyebrow="San Nicolas"
          title="Arte y Cultura"
          body="San Nicolas es rico en historia, cultura y arquitectura, un verdadero reflejo de sus habitantes y su vida cotidiana."
          src="/ingested/arubaa/img-034.webp"
          alt="Varias personas paseando por la costa cerca de San Nicolas"
          reverse
        />

        {/* Bento: Nightlife / Sightseeing / Shopping / Wellbeing / Sports & Golf */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Más maneras de pasar el día
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              El resto de la isla, en cinco direcciones.
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
              Calendario de Eventos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Encuentros comunitarios y festivales llenan el calendario de Aruba todo el año,
              desde la temporada de carnaval hasta celebraciones de comida y música junto al
              mar.
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
              Escrito por expertos locales
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Itinerarios
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Ideas de viaje ya planificadas, trazadas para que pases menos tiempo decidiendo
              y más tiempo disfrutando de la isla.
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
                  Una ruta cuidadosamente diseñada por la isla, creada por quienes mejor la
                  conocen.
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
                ¿Listo para llenar <span className="text-primary">tu propio itinerario</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Playas, calas, reservas para cenar y todo lo demás: reserva tu escape a Una
                Isla Feliz.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/es/book-now">
                    Reserva Tu Escape a Aruba <ArrowRight className="size-4" />
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
