import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, Mountain, Waves, Bike, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Aventura en Aruba",
  description:
    "Arcos de cuevas, senderos desérticos y aguas abiertas: cómo sentir el Efecto Aruba a través de la aventura.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Parque Nacional Arikok",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una mujer de pie sola en un terreno arenoso con vista al mar en Aruba",
    description:
      "Casi un quinto de la isla es un desierto virgen protegido: cactus imponentes, crestas de piedra caliza y senderos que terminan en calas escondidas.",
  },
  {
    icon: Waves,
    title: "En el agua",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Dos personas remando juntas en kayak frente a la costa de Aruba",
    description:
      "Los vientos alisios que nunca cesan hacen de Aruba uno de los mejores lugares del Caribe para el kayak, el windsurf y la vela, ya sea que compitas o te dejes llevar.",
  },
  {
    icon: Compass,
    title: "Cuevas marinas y arcos de roca",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Una pareja explora una cueva marina y un arco de roca en la costa de Aruba",
    description:
      "La costa norte está tallada por el viento y las olas en puentes naturales y cuevas huecas, mejor exploradas justo después del amanecer, antes de que la luz se vuelva intensa.",
  },
  {
    icon: Sunrise,
    title: "Persigue el horizonte",
    src: "/ingested/arubaa/img-063.webp",
    alt: "Un grupo de amigos saltando juntos en la playa durante la hora dorada",
    description:
      "Quienes se levantan temprano tienen la isla prácticamente para sí mismos: bancos de arena vacíos, aire fresco del desierto y un amanecer que dora toda la costa.",
  },
];

export default function AdventurePageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Kaweta"
          title="Aventura"
          body="Kaweta. Significa curioso en papiamento, y es la palabra perfecta para el espíritu de exploración de Aruba. Más allá de las playas, la isla recompensa a quien esté dispuesto a buscar."
          src="/ingested/arubaa/img-031.webp"
          alt="Una mujer de pie sola en un terreno arenoso con vista al mar en Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Cuatro maneras de empezar
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Encuentra tu tipo de aventura
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba concentra desierto, costa y aguas abiertas en una isla que puedes cruzar
              en menos de una hora, lo que significa que puedes perseguirlo todo en un solo
              viaje.
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
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Bike className="size-5" />
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Hecha para explorar, no solo para visitar
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Alquila un UTV para el interior desértico, reserva un bote de esnórquel para
              los arrecifes, o simplemente empieza a caminar desde tu hotel: Aruba es lo
              bastante pequeña como para que cualquier aventura esté a un corto trayecto de
              donde te alojas.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-077.webp"
              alt="Dos personas caminando juntas por un banco de arena en Aruba"
              title="Paseos por bancos de arena"
              description="La marea baja abre bancos de arena que se extienden hacia las aguas poco profundas de color turquesa."
            />
            <ImageCard
              src="/ingested/arubaa/img-004.webp"
              alt="Una pareja en silueta sobre las dunas de Aruba al atardecer"
              title="Caminatas por las dunas"
              description="La costa noreste es toda dunas onduladas y viento, mejor vista a pie."
            />
            <ImageCard
              src="/ingested/arubaa/img-065.webp"
              alt="Un grupo de amigos saltando juntos en la playa"
              title="Excursiones en grupo"
              description="La aventura es mejor compartida: reserva un tour grupal y comparte anécdotas durante la cena."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Listo para explorar?</h2>
            <p className="max-w-md text-muted-foreground">
              Descubre tours, alquiler de equipo y el resto de las cosas que hacer en Aruba.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/es/things-to-do#natural-wonders">
                  Ver Maravillas Naturales <ArrowRight className="size-4" />
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
