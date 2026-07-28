import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, Sparkles, Wind, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Bienestar en Aruba",
  description:
    "Quietud junto a los acantilados y un lujo lento y silencioso: cómo desconectar y descubrirte en Aruba.",
};

const highlights = [
  {
    icon: Sparkles,
    title: "Lujo lento y silencioso",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Una mujer con bata de spa se relaja junto a una tina iluminada con velas",
    description:
      "Los rituales de spa aquí se apoyan en los propios materiales de la isla: aloe, sal marina y horas que se estiran en lugar de correr.",
  },
  {
    icon: Wind,
    title: "Quietud junto al acantilado",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una mujer de pie sola en un terreno arenoso con vista al mar en Aruba",
    description:
      "Los acantilados de la isla miran directamente hacia los vientos alisios. Diez minutos de silencio ahí arriba hacen más que una hora en cualquier otro lugar.",
  },
  {
    icon: Sunrise,
    title: "Mañanas lentas junto al agua",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Una mujer relajándose en una tumbona de playa al atardecer en Aruba",
    description:
      "No se necesita alarma. Las mañanas de Aruba son para un café tranquilo, un baño más largo y una agenda que puede esperar hasta el mediodía.",
  },
  {
    icon: Flower2,
    title: "Desconectar, juntos",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Un hombre y una mujer de pie juntos junto a una palmera en una playa de Aruba",
    description:
      "El bienestar aquí no es solitario por defecto. Los días lentos junto al agua son igual de fáciles de compartir que de disfrutar en solitario.",
  },
];

export default function WellnessPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Desconecta"
          title="Bienestar"
          body="Aruba está hecha para ayudarte a desconectar del mundo y descubrirte a ti mismo. Menos distracciones, más sol, y una isla lo bastante pequeña como para que bajar el ritmo sea el objetivo principal."
          src="/ingested/arubaa/img-031.webp"
          alt="Una mujer de pie sola en un terreno arenoso con vista al mar en Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Quietud incorporada
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              ¿Es realmente una vacación si necesitas otra después?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Buenas noticias: Aruba no es ese tipo de viaje. El sol constante, la baja
              humedad y una isla construida alrededor del agua hacen que descansar sea lo
              habitual, no algo que tengas que programar.
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
              Algunas formas de desconectar
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-039.webp"
              alt="Dos personas sentadas juntas en una playa de Aruba"
              title="Yoga en la playa al amanecer"
              description="Estiramientos tranquilos sobre la arena antes de que la isla despierte."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Una pareja conversa junto a la piscina en un resort de Aruba"
              title="Días de piscina, sin conexión"
              description="Piscinas de resort hechas para no hacer absolutamente nada, a propósito."
            />
            <ImageCard
              src="/ingested/arubaa/img-036.webp"
              alt="Una pareja relajándose junta sobre las rocas costeras de Aruba"
              title="Paseos por las pozas de marea"
              description="Caminatas lentas por las rocas, sin ningún lugar en particular al que llegar."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Listo para bajar el ritmo?</h2>
            <p className="max-w-md text-muted-foreground">
              Descubre estancias todo incluido y opciones de resort hechas para el descanso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/es/plan-your-visit#all-inclusive">
                  Ver Estancias Todo Incluido <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/es/why-aruba">Volver A Por Qué Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
