import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, ArrowRight, Wine, Truck, Sunset } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Comer E Beber em Aruba",
  description:
    "Cem sabores em uma só ilha: gastronomia multicultural, quiosques de rum e coquetéis ao pôr do sol em Aruba.",
};

const highlights = [
  {
    icon: Wine,
    title: "Pôr do sol, copo na mão",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Amigos brindando com copos de vinho ao ar livre",
    description:
      "Os bares de praia constroem toda a noite em torno do pôr do sol, com o happy hour programado pelo horizonte, não pelo relógio.",
  },
  {
    icon: Truck,
    title: "Comida de rua e quiosques de rum",
    src: "/ingested/arubaa/img-066.webp",
    alt: "Pessoas reunidas juntas em uma praia de Aruba à noite",
    description:
      "Algumas das melhores refeições da ilha vêm de um food truck ou de um quiosque com cadeiras de plástico, não de um cardápio com carta de vinhos.",
  },
  {
    icon: Sunset,
    title: "Mesas na linha da água",
    src: "/ingested/arubaa/img-068.webp",
    alt: "Um casal segurando bebidas juntos ao ar livre em Aruba",
    description:
      "Muitos restaurantes montam suas mesas exatamente onde a areia encontra a água, então o jantar vem com vista própria.",
  },
  {
    icon: Utensils,
    title: "Cem sabores",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Um casal relaxando junto nas rochas costeiras de Aruba",
    description:
      "Clássicos europeus, especiarias do sul da Ásia e frutos do mar frescos e locais compartilham a mesma ilha pequena, muitas vezes o mesmo quarteirão.",
  },
];

export default function EatAndDrinkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Todos os gostos"
          title="Comer E Beber"
          body="A cena gastronômica de Aruba reflete sua população multicultural, com opções diversas para todos os gostos: dos quiosques de rum aos restaurantes sofisticados, e toda mesa ao pôr do sol pelo caminho."
          src="/ingested/arubaa/img-067.webp"
          alt="Amigos brindando com copos de vinho ao ar livre"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Cem sabores
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Uma ilha pequena com uma mesa grande
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Com mais de cem nacionalidades representadas na ilha, Aruba está repleta de
              sabores de todos os cantos do mundo. Não se surpreenda se sair de lá com um
              novo prato favorito.
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
              Como os moradores comem e bebem
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-060.webp"
              alt="Um grupo de amigos reunidos em uma praia de Aruba"
              title="Pratos e mesas compartilhados"
              description="A gastronomia aruana é comunitária: pratos maiores, mesas mais longas, mais brindes."
            />
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Um agricultor trabalhando em um campo em Aruba"
              title="Cultivado perto de casa"
              description="Fazendas locais abastecem mais cozinhas da ilha do que você imagina."
            />
            <ImageCard
              src="/ingested/arubaa/img-080.webp"
              alt="Uma mulher e um homem caminhando juntos na água em uma praia de Aruba"
              title="Drinques com os pés na areia"
              description="Sem necessidade de sapatos na maioria dos bares de praia, coquetel na mão."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Já com fome?</h2>
            <p className="max-w-md text-muted-foreground">
              Veja os melhores lugares para comer pela ilha, organizados por bairro e estilo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/br/things-to-do#dining">
                  Ver Gastronomia <ArrowRight className="size-4" />
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
