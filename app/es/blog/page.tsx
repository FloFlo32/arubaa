import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Blog de Viajes: Consejos, Cultura y Experiencias",
  description:
    "Consejos de viaje, cultura y experiencias de Aruba, de parte del equipo detrás de One Happy Island.",
};

const topics = [
  {
    title: "Aventura",
    href: "/es/why-aruba/adventure",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Una pareja explora una cueva marina y un arco de roca en la costa de Aruba",
    teaser: "Cuevas marinas, arcos de roca y senderos todoterreno para el viajero inquieto.",
  },
  {
    title: "Romance",
    href: "/es/why-aruba/romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "Una pareja comparte un momento tranquilo en una playa de Aruba al atardecer",
    teaser: "Caminatas al atardecer, cenas privadas y los momentos por los que las parejas vuelven.",
  },
  {
    title: "Cultura",
    href: "/es/why-aruba/culture",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Un grupo reunido en una playa de Aruba",
    teaser: "Las tradiciones y actividades que forjan la identidad de la isla.",
  },
  {
    title: "Bienestar",
    href: "/es/why-aruba/wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Una mujer relajándose con una bata de spa junto a velas y una bañera",
    teaser: "Spas, calma y mañanas tranquilas que reinician tu reloj interno.",
  },
  {
    title: "Comer Y Beber",
    href: "/es/why-aruba/eat-and-drink",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una pareja relajándose juntos sobre las rocas costeras de Aruba",
    teaser: "Sabor local, mariscos frescos y las mesas que vale la pena disfrutar con calma.",
  },
  {
    title: "Familias",
    href: "/es/why-aruba/families",
    src: "/ingested/arubaa/img-032.webp",
    alt: "Una familia disfrutando juntos de la playa en Aruba",
    teaser: "Días sencillos que mantienen felices a todas las edades de la familia.",
  },
  {
    title: "Playas Y Calas",
    href: "/es/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Una mujer relajándose en una tumbona de playa al atardecer en Aruba",
    teaser: "Desde amplias playas públicas hasta calas escondidas que valen el desvío.",
  },
  {
    title: "Itinerarios",
    href: "/es/things-to-do#itineraries",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Una pareja en atuendo de boda corriendo por las aguas poco profundas de una playa de Aruba",
    teaser: "Planes de día ya armados, ya sea que tengas tres días o diez.",
  },
];

export default function BlogPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Historias de la isla"
          title="Blog de Viajes, Consejos, Cultura y Experiencias"
          body="Apenas estamos comenzando con los increíbles efectos que Aruba tiene para ofrecer. Explora los detalles de tu viaje a continuación para descubrir una experiencia caribeña."
          src="/ingested/arubaa/img-051.webp"
          alt="Una pareja de recién casados tomados de la mano en una playa de Aruba"
        />

        <section className="py-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Explora por tema</h2>
              <p className="mt-4 text-muted-foreground">
                Estos son los temas sobre los que más escribimos, cada uno enlaza a la
                guía completa de la isla.
              </p>
            </Reveal>
          </div>

          <div className="container-px mx-auto max-w-6xl mt-10">
            <AutoSlider itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
              {topics.map((topic) => (
                <ImageCard
                  key={topic.title}
                  src={topic.src}
                  alt={topic.alt}
                  eyebrow="Tema"
                  title={topic.title}
                  description={topic.teaser}
                  href={topic.href}
                />
              ))}
            </AutoSlider>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                ¿Quieres la guía completa?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Descubre cada playa, cala y aventura que Aruba tiene para ofrecer,
                organizadas según lo que más te gusta hacer.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/es/things-to-do">
                    Ver Más En Qué Hacer <ArrowRight className="size-4" />
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
