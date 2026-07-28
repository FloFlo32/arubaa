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
  title: "Comer Y Beber en Aruba",
  description:
    "Cien sabores en una sola isla: gastronomía multicultural, ranchos de ron y cócteles al atardecer en Aruba.",
};

const highlights = [
  {
    icon: Wine,
    title: "Atardecer, copa en mano",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Amigos sosteniendo copas de vino juntos al aire libre",
    description:
      "Los bares de playa construyen toda su noche alrededor del atardecer, con la hora feliz marcada por el horizonte en lugar del reloj.",
  },
  {
    icon: Truck,
    title: "Puestos de calle y ranchos de ron",
    src: "/ingested/arubaa/img-066.webp",
    alt: "Personas reunidas juntas en una playa de Aruba al anochecer",
    description:
      "Algunas de las mejores comidas de la isla vienen de un camión o un rancho con sillas de plástico, no de un menú con carta de vinos.",
  },
  {
    icon: Sunset,
    title: "Mesas junto al agua",
    src: "/ingested/arubaa/img-068.webp",
    alt: "Una pareja sosteniendo bebidas juntos al aire libre en Aruba",
    description:
      "Muchos restaurantes colocan sus mesas justo donde la arena se encuentra con el agua, para que la cena venga con su propia vista.",
  },
  {
    icon: Utensils,
    title: "Cien sabores",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una pareja relajándose junta sobre las rocas costeras de Aruba",
    description:
      "Clásicos europeos, especias del sur de Asia y mariscos locales frescos comparten la misma isla pequeña, a menudo la misma cuadra.",
  },
];

export default function EatAndDrinkPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Todos los antojos"
          title="Comer Y Beber"
          body="La escena culinaria de Aruba refleja su población multicultural, con opciones diversas para cada antojo: desde ranchos de ron hasta alta cocina, y toda mesa al atardecer entre medio."
          src="/ingested/arubaa/img-067.webp"
          alt="Amigos sosteniendo copas de vino juntos al aire libre"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Cien sabores
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Una isla pequeña con una mesa grande
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Con más de cien nacionalidades representadas en la isla, Aruba está llena de
              sabores de cada rincón del planeta. No te sorprendas si te vas con un nuevo
              plato favorito.
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
              Como comen y beben los locales
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-060.webp"
              alt="Un grupo de amigos reunidos juntos en una playa de Aruba"
              title="Platos compartidos, mesas compartidas"
              description="La gastronomía arubeña tiende a lo comunitario: platos más grandes, mesas más largas, más brindis."
            />
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Un agricultor trabajando en un campo arubeño"
              title="Cultivado cerca de casa"
              description="Las granjas locales abastecen más cocinas de la isla de lo que imaginarías."
            />
            <ImageCard
              src="/ingested/arubaa/img-080.webp"
              alt="Una mujer y un hombre caminando juntos por el agua en una playa de Aruba"
              title="Tragos con los pies en la arena"
              description="No se necesitan zapatos en la mayoría de los bares de playa, cóctel en mano."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Ya tienes hambre?</h2>
            <p className="max-w-md text-muted-foreground">
              Descubre los lugares para comer en toda la isla, organizados por vecindario y
              ambiente.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/es/things-to-do#dining">
                  Ver Gastronomía <ArrowRight className="size-4" />
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
