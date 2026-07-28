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
  title: "Cultura em Aruba",
  description:
    "Cem nacionalidades, uma ilha: arte urbana, festivais e as pessoas por trás do Efeito Aruba.",
};

const highlights = [
  {
    icon: Palette,
    title: "Arte urbana em San Nicolas",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Um grupo de amigos reunidos em uma praia de Aruba",
    description:
      "A segunda maior cidade de Aruba transformou suas ruas de fundo em uma galeria a céu aberto, com murais de artistas locais e internacionais cobrindo prédios inteiros.",
  },
  {
    icon: Globe2,
    title: "Cem nacionalidades, uma ilha",
    src: "/ingested/arubaa/img-061.webp",
    alt: "Três mulheres sentadas em uma pedra em uma praia de Aruba",
    description:
      "Holandês, papiamento, espanhol e inglês são falados aqui, muitas vezes na mesma conversa. Essa mistura aparece na comida, na música e na forma de receber.",
  },
  {
    icon: Music4,
    title: "Festivais locais",
    src: "/ingested/arubaa/img-064.webp",
    alt: "Três mulheres em pé juntas em uma praia de Aruba",
    description:
      "Do desfile de Carnaval às festinhas de bairro mais discretas, o calendário de Aruba roda em torno de música, cor e qualquer desculpa para se reunir.",
  },
  {
    icon: Users,
    title: "Comunidade junto à água",
    src: "/ingested/arubaa/img-044.webp",
    alt: "Um grupo de pessoas caminhando juntas pelo litoral de Aruba",
    description:
      "Moradores e visitantes compartilham as mesmas praias, os mesmos quiosques de rum e as mesmas vistas do pôr do sol, exatamente como a ilha gosta.",
  },
];

export default function CulturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Cem sabores"
          title="Cultura"
          body="Cem nacionalidades. Cem sabores. A população diversa de Aruba vive em harmonia, e isso se reflete em cada canto da ilha, dos murais aos cardápios."
          src="/ingested/arubaa/img-060.webp"
          alt="Um grupo de amigos reunidos em uma praia de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Mais do que um cenário
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Uma ilha pequena, uma grande mistura de gente
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              A cultura de Aruba não fica guardada em um museu. Ela está no idioma que
              muda no meio de uma frase, no aroma que vem de um food truck na beira da
              estrada, e no mural que cobre um quarteirão inteiro.
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
              Onde sentir isso de perto
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Um agricultor trabalhando em um campo em Aruba"
              title="Mercados locais"
              description="Mercados de agricultores e bancas na beira da estrada vendem o que é cultivado ali mesmo, logo adiante."
            />
            <ImageCard
              src="/ingested/arubaa/img-066.webp"
              alt="Pessoas reunidas juntas em uma praia de Aruba"
              title="Encontros de bairro"
              description="Festinhas de cidade pequena recebem visitantes com a mesma facilidade com que recebem vizinhos."
            />
            <ImageCard
              src="/ingested/arubaa/img-062.webp"
              alt="Duas mulheres correndo juntas em uma praia de areia branca"
              title="Praias compartilhadas"
              description="Moradores e visitantes se misturam com facilidade nas praias públicas de Aruba, de dia e de noite."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Quer a história completa?</h2>
            <p className="max-w-md text-muted-foreground">
              Veja a história da ilha e as regiões que a formaram.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/br/our-island#history-culture">
                  História E Cultura <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/br/why-aruba">Voltar Para Por Que Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
