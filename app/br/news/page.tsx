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
  title: "Notícias de Aruba, Notícias de Turismo da Ilha",
  description: "As últimas notícias e atualizações de turismo de Aruba.",
};

const updates = [
  {
    title: "Festival Gastronômico Autentico Aruba",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Um casal relaxando junto nas rochas do litoral de Aruba",
    description:
      "O Autentico volta em outubro para mais uma celebração inesquecível da cena gastronômica de Aruba.",
  },
  {
    title: "App myAruba",
    src: "/ingested/arubaa/img-037.webp",
    alt: "Visitantes explorando o litoral de Aruba com o app myAruba",
    description: "Experimente o myAruba, o aplicativo que ajuda você a escolher os melhores lugares da ilha.",
  },
  {
    title: "Campanha Água de Torneira",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Vista aérea de banhistas nas águas turquesa de Aruba",
    description: "Aruba é conhecida por suas praias intocadas e águas turquesa.",
  },
  {
    title: "Requisitos de Viagem",
    src: "/ingested/arubaa/img-041.webp",
    alt: "Visitantes chegando a uma praia de Aruba para suas férias",
    description:
      "Aqui estão alguns detalhes importantes para viajar de e para Aruba, incluindo a nova taxa de sustentabilidade de US$ 20.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Atualizações da ilha"
          title="Aruba, Notícias de Turismo da Ilha"
          body="Estamos apenas começando a mostrar os efeitos incríveis que Aruba tem a oferecer. Explore os detalhes da sua viagem abaixo e desbloqueie uma experiência caribenha que vai te encher de sol e te mandar para casa com uma sensação de felicidade que nunca acaba."
          src="/ingested/arubaa/img-042.webp"
          alt="Uma família caminhando de mãos dadas em uma praia de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20 pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Requisitos de Viagem e Atualizações</h2>
            <p className="mt-4 text-muted-foreground">
              As últimas informações da Autoridade de Turismo de Aruba, sempre atualizadas para
              que sua próxima viagem comece com os dados certos.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {updates.map((item) => (
              <RevealItem key={item.title}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  eyebrow="Atualização"
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
                Boa notícia merece uma boa oferta
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Veja o que está em oferta agora e transforme a notícia de hoje na sua próxima
                viagem.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/br/deals">
                    Veja As Ofertas Atuais <ArrowRight className="size-4" />
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
