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
  title: "Blog de Viagem: Dicas, Cultura e Experiências",
  description:
    "Dicas de viagem, cultura e experiências de Aruba, direto da equipe por trás de One Happy Island.",
};

const topics = [
  {
    title: "Aventura",
    href: "/br/why-aruba/adventure",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Um casal explorando uma caverna marinha e um arco de pedra no litoral de Aruba",
    teaser: "Cavernas marinhas, arcos de pedra e trilhas off road para o viajante inquieto.",
  },
  {
    title: "Romance",
    href: "/br/why-aruba/romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "Um casal compartilhando um momento tranquilo em uma praia de Aruba ao pôr do sol",
    teaser: "Caminhadas ao pôr do sol, jantares privados e os momentos que fazem os casais voltarem.",
  },
  {
    title: "Cultura",
    href: "/br/why-aruba/culture",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Um grupo reunido em uma praia de Aruba",
    teaser: "As tradições e atividades que formam a identidade da ilha.",
  },
  {
    title: "Bem-estar",
    href: "/br/why-aruba/wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Uma mulher relaxando em um robe de spa ao lado de velas e uma banheira",
    teaser: "Spas, quietude e manhãs tranquilas que renovam suas energias.",
  },
  {
    title: "Comer E Beber",
    href: "/br/why-aruba/eat-and-drink",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Um casal relaxando junto nas rochas do litoral de Aruba",
    teaser: "Sabor local, frutos do mar frescos e mesas que valem a pena aproveitar com calma.",
  },
  {
    title: "Famílias",
    href: "/br/why-aruba/families",
    src: "/ingested/arubaa/img-032.webp",
    alt: "Uma família aproveitando a praia junta em Aruba",
    teaser: "Passeios tranquilos que deixam todas as idades da família felizes.",
  },
  {
    title: "Praias E Enseadas",
    href: "/br/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Uma mulher relaxando em uma espreguiçadeira de praia ao pôr do sol em Aruba",
    teaser: "De amplas praias públicas a enseadas escondidas que valem o desvio.",
  },
  {
    title: "Roteiros",
    href: "/br/things-to-do#itineraries",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Um casal em trajes de casamento correndo pelas águas rasas de uma praia de Aruba",
    teaser: "Planos de dia prontos, seja para três dias ou dez.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Histórias da ilha"
          title="Blog de Viagem, Dicas, Cultura e Experiências"
          body="Estamos apenas começando a mostrar os efeitos incríveis que Aruba tem a oferecer. Explore os detalhes da sua viagem abaixo e desbloqueie uma experiência caribenha."
          src="/ingested/arubaa/img-051.webp"
          alt="Um casal de recém-casados de mãos dadas em uma praia de Aruba"
        />

        <section className="py-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Navegue por tema</h2>
              <p className="mt-4 text-muted-foreground">
                Esses são os temas sobre os quais mais escrevemos, cada um levando ao guia
                completo sobre a ilha.
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
                Quer o guia completo?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Veja todas as praias, enseadas e aventuras que Aruba tem a oferecer,
                organizadas pelo que você mais gosta de fazer.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/br/things-to-do">
                    Veja Mais em O Que Fazer <ArrowRight className="size-4" />
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
