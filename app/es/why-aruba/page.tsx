import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Heart, Users, Flower2, Utensils, Baby, Gem, Plane, Globe, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Por Qué Aruba",
  description:
    "Descubre el Efecto Aruba: aventura, romance, cultura, bienestar, gastronomía, diversión familiar y bodas en Una Isla Feliz.",
};

const effectStats = [
  { icon: Plane, label: "Fácil", body: "Más de 100 vuelos directos desde las principales ciudades de EE. UU. y Canadá." },
  { icon: Globe, label: "Conveniente", body: "Se hablan cuatro idiomas y hay más días de sol que en cualquier otra isla del Caribe." },
  { icon: MapPin, label: "Explorable", body: "Pequeña, segura y moderna, para que conviertas toda la isla en tu patio de juegos." },
];

const effects = [
  {
    icon: Compass,
    title: "Aventura",
    href: "/es/why-aruba/adventure",
    teaser: "Arcos de cuevas, senderos todoterreno y costas listas para el windsurf para los curiosos.",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Dos personas remando juntas en kayak frente a la costa de Aruba",
  },
  {
    icon: Heart,
    title: "Romance",
    href: "/es/why-aruba/romance",
    teaser: "Paseos al atardecer, cenas privadas y calas tranquilas hechas para dos.",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Una pareja de pie junto a una palmera en una playa de Aruba",
  },
  {
    icon: Users,
    title: "Cultura",
    href: "/es/why-aruba/culture",
    teaser: "Cien nacionalidades, una isla, infinitas historias por escuchar.",
    src: "/ingested/arubaa/img-060.webp",
    alt: "Un grupo de amigos reunidos en una playa de Aruba",
  },
  {
    icon: Flower2,
    title: "Bienestar",
    href: "/es/why-aruba/wellness",
    teaser: "Quietud junto a los acantilados y un lujo lento y silencioso a tu propio ritmo.",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una mujer de pie sola en un terreno arenoso con vista al mar en Aruba",
  },
  {
    icon: Utensils,
    title: "Comer Y Beber",
    href: "/es/why-aruba/eat-and-drink",
    teaser: "Cien sabores en una sola isla, desde chiringuitos de ron hasta alta cocina.",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Amigos sosteniendo copas de vino juntos al aire libre",
  },
  {
    icon: Baby,
    title: "Familias",
    href: "/es/why-aruba/families",
    teaser: "Aguas tranquilas y poco profundas, y días sencillos para todas las edades.",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Dos niños corriendo juntos en una playa de Aruba",
  },
  {
    icon: Gem,
    title: "Bodas",
    href: "/es/why-aruba/weddings",
    teaser: "Ceremonias descalzas y votos junto al mar durante la hora dorada.",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Una pareja celebra su boda en una playa de Aruba",
  },
];

export default function WhyArubaPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/5a23170b-58df-46b2-b401-1d0a35a9a7b5/mp4/00_Homepage_BGvideo_16x9.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Una Isla Feliz
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Por Qué Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                El encanto de Aruba viene de mucho más que el sol. Es la gente amable, la
                abundancia de días soleados (más que en cualquier otra isla del Caribe) y el
                Efecto Aruba: una sensación abrumadora de calidez y felicidad que sentirás en
                toda la isla.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Aruba Effect */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              El Efecto Aruba
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Gente feliz: desde locales hasta visitantes recurrentes. ¿Qué hace especial a Aruba?
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {effectStats.map((s) => (
              <RevealItem key={s.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{s.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Seven reasons */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Siete razones, una isla
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Explora el Efecto Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Cada visitante encuentra su propia razón para enamorarse de Aruba. Elige la tuya
              a continuación para actividades reales, gente real y el inicio de un itinerario
              completo.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
            {effects.map((e) => (
              <ImageCard
                key={e.title}
                src={e.src}
                alt={e.alt}
                eyebrow={e.title}
                title={e.title}
                description={e.teaser}
                href={e.href}
                className="h-full"
              />
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Siente el <span className="text-primary">Efecto Aruba</span> por ti mismo
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Una isla feliz, siete razones para visitarla. Empieza a convertir esta página
                en un viaje.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/es/plan-your-visit">
                    Empieza A Planear Tu Viaje <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/es/deals">Ver Las Ofertas De Hoy</Link>
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
