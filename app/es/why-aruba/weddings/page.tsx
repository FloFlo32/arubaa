import type { Metadata } from "next";
import Link from "next/link";
import { Gem, ArrowRight, Sunset, Sparkles, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Bodas en Aruba",
  description:
    "Ceremonias descalzas y votos a la hora dorada: cómo planificar la boda de tus sueños en la Isla Feliz.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Ceremonias descalzas",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Una pareja celebra su boda en una playa arubeña",
    description:
      "Da tus votos con los pies en la arena y el mar como telón de fondo. La mayoría de los resorts frente a la playa se encargan de toda la ceremonia en el lugar.",
  },
  {
    icon: Sparkles,
    title: "Votos a la hora dorada",
    src: "/ingested/arubaa/img-048.webp",
    alt: "Una pareja recién casada se toma de las manos en la orilla",
    description:
      "La luz del atardecer convierte cada foto de la ceremonia en un recuerdo para siempre, y los cielos casi siempre despejados de Aruba facilitan planificar el momento.",
  },
  {
    icon: HeartHandshake,
    title: "Alegría, en movimiento",
    src: "/ingested/arubaa/img-050.webp",
    alt: "Una pareja corre por las aguas poco profundas el día de su boda",
    description:
      "Las aguas calmas y poco profundas de Aruba dejan espacio para un poco de celebración: una carrera por el agua, un brindis en la arena, retratos que no se sienten forzados.",
  },
  {
    icon: Gem,
    title: "Una luna de miel que empieza de inmediato",
    src: "/ingested/arubaa/img-052.webp",
    alt: "Un hombre y una mujer tomándose de las manos en una playa de Aruba",
    description:
      "No se necesita un día de traslado entre la boda y la luna de miel: la misma playa que fue sede de tu ceremonia puede serlo también de la semana siguiente.",
  },
];

export default function WeddingsPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Di sí, acepto"
          title="Bodas"
          body="El clima soleado constante y la belleza natural impresionante hacen de Aruba el lugar ideal para la boda de tus sueños, sea con cincuenta invitados o sin ninguno."
          src="/ingested/arubaa/img-046.webp"
          alt="Una pareja celebra su boda en una playa arubeña"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Un día feliz
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Di que sí en la Isla Feliz
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Los organizadores de bodas de Aruba se encargan de todo, desde los permisos
              hasta las flores, así que la única decisión real que queda es en qué tramo de
              playa dirás tus votos.
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
              Más maneras de celebrar
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-047.webp"
              alt="Una pareja en traje de boda corriendo por las aguas poco profundas de una playa de Aruba"
              title="Primer vistazo en la arena"
              description="Momentos privados y tempraneros antes de que la playa se llene de gente."
            />
            <ImageCard
              src="/ingested/arubaa/img-049.webp"
              alt="Una pareja de recién casados de pie juntos en una playa de Aruba"
              title="Renovación de votos"
              description="Vuelve y hazlo de nuevo, esta vez sin necesidad de planificar nada."
            />
            <ImageCard
              src="/ingested/arubaa/img-051.webp"
              alt="Una novia y un novio tomándose de las manos en una playa de Aruba"
              title="Suites de luna de miel"
              description="Reserva de una vez, para que la celebración no tenga que terminar."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Empieza a planificar tu día</h2>
            <p className="max-w-md text-muted-foreground">
              Descubre resorts, servicios para invitados y todo lo demás en tu lista de
              pendientes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/es/plan-your-visit#guest-services">
                  Ver Servicios Para Invitados <ArrowRight className="size-4" />
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
