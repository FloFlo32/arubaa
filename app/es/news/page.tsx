import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Noticias de Aruba, Noticias de Turismo de la Isla",
  description: "Las últimas noticias y actualizaciones de turismo de Aruba.",
};

const updates = [
  {
    title: "Festival Culinario Autentico Aruba",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Una pareja relajándose juntos sobre las rocas costeras de Aruba",
    description:
      "Autentico regresa este octubre para otra celebración inolvidable de la escena culinaria de Aruba.",
  },
  {
    title: "App myAruba",
    src: "/ingested/arubaa/img-037.webp",
    alt: "Visitantes explorando la costa de Aruba con la app myAruba",
    description: "Prueba myAruba, la app que te ayuda a elegir lugares increíbles en la isla.",
  },
  {
    title: "Campaña del Agua Potable",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Vista aérea de bañistas caminando en las aguas turquesas de Aruba",
    description: "Aruba es conocida por sus playas prístinas y sus aguas turquesas.",
  },
  {
    title: "Requisitos De Viaje",
    src: "/ingested/arubaa/img-041.webp",
    alt: "Visitantes llegando a una playa de Aruba para sus vacaciones",
    description:
      "Aquí hay algunos detalles a recordar al viajar hacia y desde Aruba, incluida la nueva tarifa de sostenibilidad de $20.",
  },
];

export default function NewsPageEs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Novedades de la isla"
          title="Aruba, Noticias de Turismo de la Isla"
          body="Apenas estamos comenzando con los increíbles efectos que Aruba tiene para ofrecer. Explora los detalles de tu viaje a continuación para descubrir una experiencia caribeña que te llenará de sol y te enviará a casa con un brillo de felicidad que nunca se apaga."
          src="/ingested/arubaa/img-042.webp"
          alt="Una familia caminando junta, tomados de la mano, en una playa de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20 pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Requisitos De Viaje Y Actualizaciones</h2>
            <p className="mt-4 text-muted-foreground">
              Lo más reciente de la Autoridad de Turismo de Aruba, siempre actualizado para
              que tu próximo viaje comience con la información correcta.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {updates.map((item) => (
              <RevealItem key={item.title}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  eyebrow="Actualización"
                  title={item.title}
                  description={item.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Las buenas noticias merecen una buena oferta
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Descubre lo que está en oferta hoy y convierte esta actualización en tu
                próximo viaje.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/es/deals">
                    Ver Ofertas Actuales <ArrowRight className="size-4" />
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
