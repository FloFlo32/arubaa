import type { Metadata } from "next";
import Link from "next/link";
import { Baby, ArrowRight, Waves, Sun, Users2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Vacaciones Familiares en Aruba",
  description:
    "Agua calma y poco profunda, y días fáciles para toda edad: por qué Aruba funciona para las vacaciones familiares.",
};

const highlights = [
  {
    icon: Waves,
    title: "Agua calma y poco profunda",
    src: "/ingested/arubaa/img-070.webp",
    alt: "Un adulto llevando a un niño en una playa de Aruba",
    description:
      "Las playas de la costa de sotavento de la isla son famosas por su calma y poca profundidad, lo que significa más tiempo nadando y menos tiempo vigilando las olas con nervios.",
  },
  {
    icon: Sun,
    title: "Días fáciles, poco estrés",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Dos niños corriendo juntos en una playa de Aruba",
    description:
      "Vuelos cortos, terreno plano y una huella pequeña significan menos tiempo en tránsito y más tiempo dejando que los niños se cansen corriendo por sí mismos.",
  },
  {
    icon: Baby,
    title: "Hecha para los invitados más pequeños",
    src: "/ingested/arubaa/img-072.webp",
    alt: "Un adulto sosteniendo a un bebé en una playa de Aruba",
    description:
      "El agua tibia y suave y la arena blanda hacen que las playas de Aruba sean realmente fáciles con un bebé o un niño pequeño, y no solo de manera publicitaria.",
  },
  {
    icon: Users2,
    title: "Para cada generación",
    src: "/ingested/arubaa/img-074.webp",
    alt: "Una familia tomándose de las manos junta en una playa de Aruba al atardecer",
    description:
      "Abuelos, padres e hijos encuentran su propio ritmo aquí: alguien siempre quiere entrar al agua, y alguien siempre está feliz en una silla cerca.",
  },
];

export default function FamiliesPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Para toda edad"
          title="Familias"
          body="Aruba tiene actividades para huéspedes de todas las edades, lo que la convierte en un destino ideal para unas vacaciones en familia. Al Efecto Aruba no le importa si tienes 5 o 50 años."
          src="/ingested/arubaa/img-069.webp"
          alt="Un adulto y un niño tomándose de las manos en una orilla de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Una familia feliz
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Algo para cada integrante del viaje
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              El Efecto Aruba lo siente cualquiera que se abra a él, y eso incluye a los
              viajeros más pequeños. Si buscas algo que padres e hijos puedan disfrutar por
              igual, esto es.
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
              Un día que funciona para todos
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-037.webp"
              alt="Una familia posa junta para una foto en la arena"
              title="Días de playa, en familia"
              description="Arena, aguas poco profundas y sombra para cada integrante de la familia."
            />
            <ImageCard
              src="/ingested/arubaa/img-042.webp"
              alt="Una familia camina junta tomada de las manos por la orilla"
              title="Paseos tranquilos"
              description="Una costa fácil y plana, amable con las piernas pequeñas."
            />
            <ImageCard
              src="/ingested/arubaa/img-035.webp"
              alt="Un cuidador lleva a un niño pequeño por la playa"
              title="Hecha para los más pequeños"
              description="Bahías calmas y agua tibia y poco profunda pensadas para pequeños nadadores."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Planeando un viaje en familia?</h2>
            <p className="max-w-md text-muted-foreground">
              Descubre hoteles para niños, estadías todo incluido y playas de fácil acceso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/es/plan-your-visit#hotels-resorts">
                  Ver Hoteles Y Resorts <ArrowRight className="size-4" />
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
