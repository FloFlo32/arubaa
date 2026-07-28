import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowRight, Palette, Globe2, Music4 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Cultura en Aruba",
  description:
    "Cien nacionalidades, una isla: arte urbano, festivales y la gente detrás del Efecto Aruba.",
};

const highlights = [
  {
    icon: Palette,
    title: "Arte urbano en San Nicolas",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Un grupo de amigos reunidos en una playa de Aruba",
    description:
      "La segunda ciudad de Aruba convirtió sus calles traseras en una galería al aire libre, con murales de artistas locales e internacionales que cubren edificios enteros.",
  },
  {
    icon: Globe2,
    title: "Cien nacionalidades, una isla",
    src: "/ingested/arubaa/img-061.webp",
    alt: "Tres mujeres sentadas sobre una roca en una playa de Aruba",
    description:
      "Aquí se habla holandés, papiamento, español e inglés, muchas veces en la misma conversación. Esa mezcla se refleja en la comida, la música y la bienvenida.",
  },
  {
    icon: Music4,
    title: "Festivales locales",
    src: "/ingested/arubaa/img-064.webp",
    alt: "Tres mujeres de pie juntas en una playa de Aruba",
    description:
      "Desde el desfile del Carnaval hasta fiestas de barrio más pequeñas, el calendario de Aruba se mueve al ritmo de la música, el color y una excusa para reunirse.",
  },
  {
    icon: Users,
    title: "Comunidad junto al agua",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Un grupo de personas caminando juntas por la orilla de Aruba",
    description:
      "Locales y visitantes comparten las mismas playas, las mismas tiendas de ron y las mismas vistas del atardecer, que es exactamente como le gusta a la isla.",
  },
];

export default function CulturePageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Cien sabores"
          title="Cultura"
          body="Cien nacionalidades. Cien sabores. La diversa población de Aruba vive en armonía, y se nota en cada rincón de la isla, desde sus murales hasta sus menús."
          src="/ingested/arubaa/img-060.webp"
          alt="Un grupo de amigos reunidos en una playa de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Más que un telón de fondo
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Una isla pequeña, una gran mezcla de personas
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              La cultura de Aruba no está guardada en un museo. Está en el idioma que cambia a
              mitad de frase, en el aroma que sale de un puesto de comida al lado de la
              carretera, y en el mural que envuelve una manzana entera de la ciudad.
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
              Dónde sentirla de primera mano
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Un agricultor trabajando en un campo de Aruba"
              title="Mercados locales"
              description="Los mercados de agricultores y los puestos junto a la carretera venden lo que se cultiva a pocos kilómetros."
            />
            <ImageCard
              src="/ingested/arubaa/img-066.webp"
              alt="Personas reuniéndose juntas en una playa de Aruba"
              title="Reuniones de barrio"
              description="Las fiestas de pueblo dan la bienvenida a los visitantes tan fácilmente como a los vecinos."
            />
            <ImageCard
              src="/ingested/arubaa/img-062.webp"
              alt="Dos mujeres corriendo juntas en una playa de arena blanca"
              title="Playas compartidas"
              description="Locales y visitantes se mezclan con facilidad en las playas públicas de Aruba, de día y de noche."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Quieres la historia completa?</h2>
            <p className="max-w-md text-muted-foreground">
              Descubre la historia de la isla y las regiones que la formaron.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/es/our-island#history-culture">
                  Historia Y Cultura <ArrowRight className="size-4" />
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
