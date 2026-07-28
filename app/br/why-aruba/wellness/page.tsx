import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, Sparkles, Wind, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Bem-estar em Aruba",
  description:
    "Quietude à beira do penhasco e um luxo lento e silencioso: como se desconectar e se redescobrir em Aruba.",
};

const highlights = [
  {
    icon: Sparkles,
    title: "Luxo lento e silencioso",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Uma mulher em um roupão de spa relaxa junto a uma banheira à luz de velas",
    description:
      "Os rituais de spa daqui se apoiam nos próprios recursos da ilha: aloe vera, sal marinho e horas que se esticam em vez de correr.",
  },
  {
    icon: Wind,
    title: "Quietude à beira do penhasco",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Uma mulher sozinha em um terreno arenoso com vista para o mar em Aruba",
    description:
      "As falésias da ilha ficam de frente para os ventos alísios. Dez minutos de silêncio lá em cima fazem mais do que uma hora em qualquer outro lugar.",
  },
  {
    icon: Sunrise,
    title: "Manhãs tranquilas junto à água",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Uma mulher relaxando em uma espreguiçadeira de praia ao pôr do sol em Aruba",
    description:
      "Nenhum despertador é necessário. As manhãs de Aruba são para um café tranquilo, um mergulho mais longo e uma agenda que pode esperar até o meio-dia.",
  },
  {
    icon: Flower2,
    title: "Desconecte-se, juntos",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Um homem e uma mulher em pé juntos junto a uma palmeira em uma praia de Aruba",
    description:
      "Bem-estar aqui não é solitário por padrão. Dias tranquilos junto à água são tão fáceis de compartilhar quanto de viver sozinho.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Desconecte-se"
          title="Bem-estar"
          body="Aruba foi feita para ajudar você a se desconectar do mundo e se redescobrir. Menos distrações, mais sol, e uma ilha pequena o suficiente para que desacelerar seja o objetivo principal."
          src="/ingested/arubaa/img-031.webp"
          alt="Uma mulher sozinha em um terreno arenoso com vista para o mar em Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Quietude de origem
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              É realmente férias se você precisa de outras férias depois?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Boa notícia: Aruba não é esse tipo de viagem. Sol constante, baixa umidade e
              uma ilha construída em torno da água fazem do descanso o padrão, não algo que
              você precisa agendar.
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
              Algumas formas de desligar
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-039.webp"
              alt="Duas pessoas sentadas juntas em uma praia de Aruba"
              title="Yoga na praia ao amanhecer"
              description="Alongamentos tranquilos na areia antes que a ilha desperte."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Um casal conversa junto à piscina em um resort de Aruba"
              title="Dias de piscina, desconectado"
              description="Piscinas de resort feitas para não fazer absolutamente nada, de propósito."
            />
            <ImageCard
              src="/ingested/arubaa/img-036.webp"
              alt="Um casal relaxando junto nas rochas costeiras de Aruba"
              title="Passeios pelas piscinas naturais"
              description="Caminhadas tranquilas pelas rochas, sem nenhum lugar específico para chegar."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Pronto para desacelerar?</h2>
            <p className="max-w-md text-muted-foreground">
              Veja estadias tudo incluído e opções de resort feitas para o descanso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/br/plan-your-visit#all-inclusive">
                  Ver Estadias Tudo Incluído <ArrowRight className="size-4" />
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
