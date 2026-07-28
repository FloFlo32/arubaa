import type { Metadata } from "next";
import Link from "next/link";
import {
  BedDouble,
  Home,
  Key,
  Ticket,
  Plane,
  Car,
  Ship,
  Palmtree,
  Info,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
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
  title: "Planifica Tu Visita a Aruba",
  description:
    "Todo lo que necesitas para planificar tus vacaciones en Aruba: hoteles, alquileres, cómo llegar y cómo moverte.",
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

const logisticsCells = [
  {
    id: "timeshares",
    icon: Key,
    title: "Multipropiedad",
    body: "Sé dueño de un pedazo de la isla. Propiedades en multipropiedad para huéspedes que siguen regresando.",
    span: "md:col-span-2",
  },
  {
    id: "getting-to-aruba",
    icon: Plane,
    title: "Cómo Llegar a Aruba",
    body: "Llegar a Aruba desde casi cualquier parte del mundo es una experiencia simple y sin estrés.",
  },
  {
    id: "getting-around",
    icon: Car,
    title: "Moverse por Aruba",
    body: "Desde nuestra animada capital hasta pueblos costeros tranquilos, playas prístinas hasta desierto agreste, es fácil llegar a cualquier lugar.",
  },
  {
    id: "guest-services",
    icon: LifeBuoy,
    title: "Servicios al Huésped",
    body: "Apoyo y asistencia siempre que lo necesites, antes de aterrizar y mientras estás aquí.",
  },
  {
    id: "tips",
    icon: Info,
    title: "Consejos para Visitantes",
    body: "Conocimiento local sobre el clima, los horarios y cómo aprovechar al máximo cada día.",
    span: "md:col-span-2",
  },
];

const tips = [
  "Hace sol casi todos los días del año: empaca capas ligeras, no paraguas.",
  "Los vientos alisios aumentan por la tarde, perfectos para el windsurf.",
  "Se hablan ampliamente el neerlandés, el papiamento, el español y el inglés.",
  "El agua del grifo es segura para beber en toda la isla.",
];

export default function PlanYourVisitPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/6923a03a-c228-4ba6-a03d-5530a8311041/mp4/FINAL-ANIMATION-VIDEO-HERO-HOME.mp4"
            poster="/ingested/arubaa/img-039.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Planifica con anticipación
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Planifica Tu Visita a Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Planificar tus vacaciones en Aruba es fácil, sobre todo con toda una isla
                de caras amables felices de compartir recomendaciones. El transporte
                conveniente, el acceso seguro a la isla y los resorts cómodos hacen que
                relajarte y explorar sea sencillo.
              </p>
            </Reveal>
          </div>
        </section>

        <SplitRow
          id="hotels-resorts"
          icon={BedDouble}
          eyebrow="Dónde alojarte"
          title="Hoteles y Resorts"
          body="Desde escondites boutique hasta torres frente al mar, los hoteles y resorts de Aruba van de lo íntimo a lo full-service, todos cerca del agua."
          src="/ingested/arubaa/img-057.webp"
          alt="Una pareja conversa junto a la piscina en un resort de Aruba"
        />

        <SplitRow
          id="vacation-rentals"
          icon={Home}
          eyebrow="Espacio para extenderte"
          title="Alquileres Vacacionales"
          body="Para estancias más largas o grupos más grandes, los alquileres vacacionales te dan una base con cocina, más espacio y un ritmo más tranquilo."
          src="/ingested/arubaa/img-036.webp"
          alt="Una pareja se relaja junta sobre las rocas costeras cerca de su alquiler"
          reverse
        />

        {/* All-Inclusive */}
        <section id="all-inclusive" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Ticket className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Un precio, todo incluido
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Todo Incluido
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Paquetes vacacionales que incluyen comidas, bebidas y actividades, para que
              la única decisión pendiente sea qué silla de piscina reclamar.
            </p>
          </Reveal>
          <div className="mt-10">
            <ImageCard
              src="/ingested/arubaa/img-053.webp"
              alt="Huéspedes saltando juntos a la piscina de un resort"
              title="La vida de resort, cubierta"
              description="Comidas, bebidas y actividades reunidas en una estancia sin complicaciones."
              className="mx-auto max-w-xl"
              ratio="aspect-[16/9]"
            />
          </div>
        </section>

        <SplitRow
          id="by-cruise"
          icon={Ship}
          eyebrow="Un día en la isla"
          title="Aruba en Crucero"
          body="Los cruceros atracan justo en Oranjestad, dejando playas, tiendas y restaurantes a un corto paseo o viaje en taxi desde el muelle."
          src="/ingested/arubaa/img-051.webp"
          alt="Una novia y un novio tomados de la mano en una playa de Aruba"
        />

        {/* Aruba Vacations */}
        <section id="vacations" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Palmtree className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Planificación completa
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Vacaciones en Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Recursos completos de planificación de vacaciones, desde reservar tu
              estancia hasta llenar cada día una vez que aterrizas.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
            <ImageCard
              src="/ingested/arubaa/img-054.webp"
              alt="Un huésped flota en la piscina de un resort"
              title="Días de piscina"
              description="Piscinas de resort hechas para no hacer absolutamente nada, a propósito."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Una pareja conversa junto a la piscina de un resort"
              title="Atardeceres junto a la piscina"
              description="Tragos al atardecer a pasos de tu habitación."
            />
            <ImageCard
              src="/ingested/arubaa/img-055.webp"
              alt="Huéspedes tomando el sol juntos en la piscina de un resort"
              title="Escapadas en grupo"
              description="Espacio de sobra para que toda la pandilla se acomode."
            />
          </AutoSlider>
        </section>

        {/* Logistics bento: Timeshares / Getting to / Getting around / Guest services / Tips */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              La logística, resuelta
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Todo lo que necesitas para llegar, moverte y recibir ayuda en el camino.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {logisticsCells.map((c) => (
              <RevealItem key={c.id} className={cn("scroll-mt-24", c.span)}>
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

        {/* Tips checklist */}
        <section className="container-px mx-auto max-w-4xl py-4 pb-16">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold">Algunas cosas que vale la pena saber</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tips.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Tu viaje a <span className="text-primary">One Happy Island</span> comienza aquí
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Reserva tus fechas y luego observa cómo comienza la cuenta regresiva.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/es/book-now">
                    Reservar Ahora <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/es/live-webcams">Ver Cámaras en Vivo</Link>
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
