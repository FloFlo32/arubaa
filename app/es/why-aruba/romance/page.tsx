import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Sunset, UtensilsCrossed, Flower2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Romance en Aruba",
  description:
    "Paseos al atardecer, cenas privadas y calas tranquilas: cómo las parejas encuentran el Efecto Aruba.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Hora dorada, cada noche",
    src: "/ingested/arubaa/img-076.webp",
    alt: "Un hombre y una mujer sentados juntos en una playa de Aruba durante la hora dorada",
    description:
      "El sol constante significa un atardecer constante. Elige un lugar en la costa oeste y tendrás garantizado un espectáculo, casi todas las noches sin una nube que lo estropee.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cena, descalzos en la arena",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Un hombre y una mujer de pie juntos junto a una palmera en una playa de Aruba",
    description:
      "Los restaurantes frente al mar montan las mesas justo a la orilla, así que la cena viene con la banda sonora de las olas y un atardecer en primera fila.",
  },
  {
    icon: Flower2,
    title: "Mañanas lentas, dos sillas",
    src: "/ingested/arubaa/img-080.webp",
    alt: "Una mujer y un hombre caminando juntos por una playa de Aruba",
    description:
      "No se necesita itinerario. Aruba recompensa a las parejas que no hacen nada más ambicioso que una larga caminata y un desayuno aún más largo.",
  },
  {
    icon: Heart,
    title: "Calas tranquilas para dos",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una pareja relajándose junta sobre las rocas costeras de Aruba",
    description:
      "Lejos de la franja principal, las calas y pozas de marea más pequeñas de la isla son fáciles de encontrar y fáciles de tener enteramente para ustedes.",
  },
];

export default function RomancePageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Juntos"
          title="Romance"
          body="Escapen del mundo juntos. El hermoso paisaje de Aruba, las noches cálidas y el ritmo más lento la convierten en un destino ideal tanto para una escapada romántica como para una primera cita o un quincuagésimo aniversario."
          src="/ingested/arubaa/img-076.webp"
          alt="Un hombre y una mujer sentados juntos en una playa de Aruba durante la hora dorada"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Hecho para dos
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Aquí el romance no necesita reservación
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              El tamaño de Aruba juega a tu favor: un corto trayecto te lleva a otra costa, a
              otro ambiente, sin perder nunca el resto del día.
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
              Más momentos que vale la pena planear
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-019.webp"
              alt="Una mujer con bata de spa se relaja junto a una tina iluminada con velas"
              title="Días de spa en pareja"
              description="Tratamientos lado a lado diseñados para relajarlos a ambos a la vez."
            />
            <ImageCard
              src="/ingested/arubaa/img-068.webp"
              alt="Una pareja sostiene bebidas juntos al aire libre en Aruba"
              title="Cócteles al atardecer"
              description="Los bares de playa programan la hora feliz según el atardecer, no el reloj."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Una pareja se relaja bajo una sombrilla de resort al atardecer"
              title="Cabañas privadas"
              description="Reserva un lugar con sombra por el día y deja que la isla venga a ti."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Planeando algo especial?</h2>
            <p className="max-w-md text-muted-foreground">
              Desde viajes de aniversario hasta propuestas de matrimonio, descubre cómo
              planear los detalles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/es/why-aruba/weddings">
                  Explorar Bodas <ArrowRight className="size-4" />
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
