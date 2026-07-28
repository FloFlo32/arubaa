import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Sunset, UtensilsCrossed, Flower2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Romance em Aruba",
  description:
    "Caminhadas ao pôr do sol, jantares privados e enseadas tranquilas: como os casais encontram o Efeito Aruba.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Hora dourada, toda noite",
    src: "/ingested/arubaa/img-076.webp",
    alt: "Um homem e uma mulher sentados juntos em uma praia de Aruba durante a hora dourada",
    description:
      "Sol constante significa um pôr do sol constante. Escolha um ponto na costa oeste e o espetáculo está garantido, quase sempre sem uma nuvem no caminho.",
  },
  {
    icon: UtensilsCrossed,
    title: "Jantar de pés descalços na areia",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Um homem e uma mulher em pé juntos junto a uma palmeira em uma praia de Aruba",
    description:
      "Restaurantes à beira-mar montam mesas bem na linha da água, então o jantar vem acompanhado da trilha sonora das ondas e um pôr do sol na primeira fila.",
  },
  {
    icon: Flower2,
    title: "Manhãs tranquilas, duas cadeiras",
    src: "/ingested/arubaa/img-080.webp",
    alt: "Uma mulher e um homem caminhando juntos na água em uma praia de Aruba",
    description:
      "Nenhum roteiro é necessário. Aruba recompensa os casais que não fazem nada mais ambicioso do que uma longa caminhada e um café da manhã ainda mais longo.",
  },
  {
    icon: Heart,
    title: "Enseadas tranquilas para dois",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Um casal relaxando junto nas rochas costeiras de Aruba",
    description:
      "Longe do movimento principal, as enseadas menores e as piscinas naturais da ilha são fáceis de encontrar e fáceis de ter só para vocês dois.",
  },
];

export default function RomancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Juntos"
          title="Romance"
          body="Escapem do mundo juntos. A paisagem deslumbrante de Aruba, as noites amenas e o ritmo mais lento tornam a ilha o destino ideal para uma escapada romântica, um primeiro encontro ou um quinquagésimo aniversário."
          src="/ingested/arubaa/img-076.webp"
          alt="Um homem e uma mulher sentados juntos em uma praia de Aruba durante a hora dourada"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Feito para dois
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Aqui, o romance não precisa de reserva
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              O tamanho de Aruba trabalha a seu favor: um curto trajeto de carro leva você a
              outra costa, em outro clima, sem nunca perder o resto do dia.
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
              Mais momentos que vale a pena planejar
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-019.webp"
              alt="Uma mulher em um roupão de spa relaxa junto a uma banheira à luz de velas"
              title="Dias de spa para casais"
              description="Tratamentos lado a lado pensados para desacelerar vocês dois ao mesmo tempo."
            />
            <ImageCard
              src="/ingested/arubaa/img-068.webp"
              alt="Um casal segurando bebidas juntos ao ar livre em Aruba"
              title="Coquetéis ao pôr do sol"
              description="Os bares de praia programam o happy hour pelo pôr do sol, não pelo relógio."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Um casal relaxa sob uma cabana de resort ao pôr do sol"
              title="Cabanas privadas"
              description="Reserve um cantinho à sombra para o dia e deixe a ilha vir até vocês."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planejando algo especial?</h2>
            <p className="max-w-md text-muted-foreground">
              De viagens de aniversário a pedidos de casamento, veja como planejar cada detalhe.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/br/why-aruba/weddings">
                  Explorar Casamentos <ArrowRight className="size-4" />
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
