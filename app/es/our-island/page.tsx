import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Ruler,
  Compass,
  Landmark,
  Fish,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map } from "@/components/sections/map";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nuestra Isla",
  description:
    "19.6 millas de desierto, costa y cultura: conoce la geografía y la historia de Aruba.",
};

const facts = [
  {
    icon: Ruler,
    label: "19.6 x 6 millas",
    body: "Con solo 19.6 millas de largo y seis millas de ancho, nuestra hermosa mota de arena blanca y suave es un paraíso moldeado por el mar.",
  },
  {
    icon: MapPin,
    label: "Caribe meridional",
    body: "Aruba es una pequeña isla en el sur del mar Caribe, a unas 15 millas al norte de Venezuela.",
  },
  {
    icon: Compass,
    label: "Fuera de la zona de huracanes",
    body: "Estamos justo fuera de la zona de huracanes, una razón más por la que nuestros días soleados son tan confiables.",
  },
];

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
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div id={id} className={cn("py-10 sm:py-12", id && "scroll-mt-24")}>
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
          <h3 className="mt-2 text-balance text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </div>
  );
}

export default function OurIslandPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-28 pb-16 sm:pt-32 sm:pb-24 md:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <Badge variant="accent">Nuestra isla feliz</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Nuestra Isla
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-foreground/80">
                ¿Alguna vez te preguntaste dónde está Aruba? En las cálidas aguas del
                sur del Caribe, justo fuera de la zona de huracanes, ahí es. Nuestra
                isla feliz.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Con solo 19.6 millas de largo y seis millas de ancho, nuestra hermosa
                mota de arena blanca y suave es un paraíso moldeado por el mar: una
                isla que te recibe con días soleados y cálidos, y gente aún más
                cálida y radiante. Al sur y al oeste, Aruba vibra con resorts, tiendas
                y vida nocturna. Al norte, las olas y el viento esculpen costas
                escarpadas y acantilados de piedra caliza. Y en nuestro corazón, el
                Parque Nacional Arikok protege un extenso paisaje de arena desértica,
                cactus imponentes y maravillas naturales.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="Una familia caminando junta, tomada de la mano, en una playa de Aruba"
                  width={900}
                  height={1050}
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[6/7] w-full object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Island Facts */}
        <section id="island-facts" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Datos De La Isla
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Lo esencial, antes de aterrizar
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {facts.map((f) => (
              <RevealItem key={f.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{f.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                <Fish className="size-4" />
              </span>
              <p className="text-pretty text-sm text-muted-foreground">
                Al planear unas vacaciones en el Caribe, quizás te preguntes cuántos
                animales exóticos podrás ver. Cuando esas vacaciones son en Aruba, la
                respuesta es: muchísimos.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Regions */}
        <section id="regions" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Regiones
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Del desierto árido a la capital colonial holandesa
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Desde nuestro desierto árido hasta nuestra capital colonial holandesa,
              cada rincón de Aruba nos hace distintos de cualquier otra isla del
              Caribe.
            </p>
          </Reveal>
          <div className="mt-4 divide-y divide-border">
            <SplitRow
              icon={MapPin}
              eyebrow="Sur Y Oeste"
              title="Resorts, tiendas y vida nocturna"
              body="Las costas sur y oeste están llenas de vida con resorts, boutiques y bares de playa, todos frente a las aguas más tranquilas de la isla."
              src="/ingested/arubaa/img-029.webp"
              alt="Vista aérea de bañistas caminando en las aguas turquesas de Aruba"
            />
            <SplitRow
              icon={Compass}
              eyebrow="Costa Norte"
              title="Costas escarpadas talladas por el viento"
              body="Las olas y el viento tallan la costa norte en acantilados de piedra caliza, cuevas marinas y arcos naturales de roca."
              src="/ingested/arubaa/img-027.webp"
              alt="Una pareja explora una cueva marina y un arco natural de roca en la costa norte de Aruba"
              reverse
            />
            <SplitRow
              icon={Landmark}
              eyebrow="El Interior"
              title="Arena desértica y cactus imponentes"
              body="En el corazón de la isla, el Parque Nacional Arikok protege un paisaje de senderos desérticos, cactus y tranquilas tierras de cultivo."
              src="/ingested/arubaa/img-033.webp"
              alt="Un grupo de amigos reunidos en una playa de Aruba"
            />
          </div>
        </section>

        {/* History & Culture */}
        <section id="history-culture" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/arubaa/img-042.webp"
                  alt="Una familia camina junta, tomada de la mano, por la costa de Aruba"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Landmark className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                De generación en generación
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Historia Y Cultura
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Encontrarás huellas de la historia y cultura de Aruba en las paredes
                de las cuevas, las fachadas de colores pastel y los rostros de nuestra
                gente feliz.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 360 Map */}
        <section id="map" className="container-px mx-auto max-w-4xl pt-4 pb-4 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Mapa 360
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Ve toda la isla de un vistazo
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Una vista interactiva de Aruba, desde los resorts del sur hasta la
              salvaje costa norte.
            </p>
          </Reveal>
        </section>
        <Map />

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                ¿Listo para verlo <span className="text-primary">con tus propios ojos</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Cada región de Aruba está más cerca de lo que crees.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/es/plan-your-visit">
                    Planifica Tu Visita <ArrowRight className="size-4" />
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
