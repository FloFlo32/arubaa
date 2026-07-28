import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Home, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Ofertas De Vacaciones Y Viajes A Aruba",
  description:
    "Ahorra en tus próximas vacaciones en Aruba con ofertas flexibles y accesibles.",
};

const featured = [
  {
    title: "One Happy Workation",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una mujer de pie sola en un terreno arenoso con vista al mar en Aruba",
    description:
      "En Aruba, nuestro negocio es la felicidad, así que les damos a los visitantes la oportunidad de trabajar directamente desde el paraíso.",
  },
  {
    title: "Requisitos De Viaje",
    src: "/ingested/arubaa/img-030.webp",
    alt: "Visitantes llegando a una playa de Aruba, listos para su viaje",
    description:
      "Aquí tienes algunos detalles a tener en cuenta al viajar hacia y desde Aruba. Conoce más sobre la nueva tarifa de sostenibilidad de $20.",
  },
];

const savings = [
  {
    icon: Home,
    title: "Hoteles Y Resorts",
    body: "Ahorra en las tarifas de habitación de los increíbles hoteles y resorts de Aruba, durante todo el año.",
  },
  {
    icon: Briefcase,
    title: "Estancias Prolongadas",
    body: "Opciones flexibles de workation para visitantes que quieren más de una semana en el paraíso.",
  },
  {
    icon: Heart,
    title: "Bodas Y Lunas De Miel",
    body: "Paquetes de boda y luna de miel sin preocupaciones, creados para tus días más felices.",
  },
];

export default function DealsPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Ahorra más, preocúpate menos"
          title="Ofertas De Vacaciones Y Viajes A Aruba"
          body="Hay muchísimas maneras de ahorrar en tus próximas vacaciones en Aruba. Recibimos de vuelta a los visitantes con flexibilidad, tranquilidad y precios accesibles."
          src="/ingested/arubaa/img-039.webp"
          alt="Bañistas disfrutando de una tarde soleada en la costa de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Ofertas Destacadas</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Oferta"
                  title={deal.title}
                  description={deal.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Siempre Disponible
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Maneras De Ahorrar Todo El Año</h2>
            <p className="mt-4 text-muted-foreground">
              Más allá de las ofertas por tiempo limitado, Aruba mantiene un conjunto
              permanente de programas de ahorro abiertos a todos los visitantes.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {savings.map((s) => (
              <RevealItem
                key={s.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                ¿Listo para asegurar tu tarifa?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Aprovecha la oferta de hoy antes de que se acabe y empieza la cuenta
                regresiva hacia la Isla Más Feliz.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/es/book-now">
                    Reservar Ahora <ArrowRight className="size-4" />
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
