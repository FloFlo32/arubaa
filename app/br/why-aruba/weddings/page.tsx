import type { Metadata } from "next";
import Link from "next/link";
import { Gem, ArrowRight, Sunset, Sparkles, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Casamentos em Aruba",
  description:
    "Cerimônias de pés descalços e votos ao pôr do sol: como planejar o casamento dos sonhos na Ilha Mais Feliz.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Cerimônias de pés descalços",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Um casal celebra o casamento em uma praia de Aruba",
    description:
      "Diga seus votos com os pés na areia e o mar como cenário. A maioria dos resorts à beira-mar conduz toda a cerimônia no local.",
  },
  {
    icon: Sparkles,
    title: "Votos na hora dourada",
    src: "/ingested/arubaa/img-048.webp",
    alt: "Um casal recém-casado de mãos dadas na beira da praia",
    description:
      "A luz do pôr do sol transforma cada foto da cerimônia em uma lembrança para guardar, e os céus quase sempre limpos de Aruba facilitam planejar o horário.",
  },
  {
    icon: HeartHandshake,
    title: "Alegria, em movimento",
    src: "/ingested/arubaa/img-050.webp",
    alt: "Um casal corre pelas águas rasas no dia do casamento",
    description:
      "As águas calmas e rasas de Aruba deixam espaço para uma pequena celebração: uma corrida pela água, um brinde na areia, retratos que não parecem posados.",
  },
  {
    icon: Gem,
    title: "Uma lua de mel que começa imediatamente",
    src: "/ingested/arubaa/img-052.webp",
    alt: "Um homem e uma mulher de mãos dadas em uma praia de Aruba",
    description:
      "Nenhum dia de deslocamento é necessário entre o casamento e a lua de mel: a mesma praia que recebeu sua cerimônia pode receber a semana seguinte também.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Diga sim"
          title="Casamentos"
          body="O clima ensolarado constante e a beleza natural impressionante fazem de Aruba o lugar ideal para o casamento dos sonhos, seja com cinquenta convidados ou nenhum."
          src="/ingested/arubaa/img-046.webp"
          alt="Um casal celebra o casamento em uma praia de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Um dia feliz
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Diga sim na Ilha Mais Feliz
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Os organizadores de casamento de Aruba cuidam de tudo, das autorizações às
              flores, então a única decisão que resta de fato é em qual trecho de praia
              dizer os votos.
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
              Mais formas de celebrar
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-047.webp"
              alt="Um casal em trajes de noiva correndo pelas águas rasas em uma praia de Aruba"
              title="Primeiro olhar na areia"
              description="Primeiros olhares privados e bem cedo pela manhã, antes que a praia comece a se encher."
            />
            <ImageCard
              src="/ingested/arubaa/img-049.webp"
              alt="Um casal recém-casado em pé junto em uma praia de Aruba"
              title="Renovação de votos"
              description="Voltem e façam de novo, desta vez sem nenhum planejamento necessário."
            />
            <ImageCard
              src="/ingested/arubaa/img-051.webp"
              alt="Uma noiva e um noivo de mãos dadas em uma praia de Aruba"
              title="Suítes de lua de mel"
              description="Reserve direto, para que a celebração não precise terminar."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Comece a planejar o seu dia</h2>
            <p className="max-w-md text-muted-foreground">
              Veja resorts, serviços ao hóspede e tudo mais na sua lista de tarefas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/br/plan-your-visit#guest-services">
                  Ver Serviços Ao Hóspede <ArrowRight className="size-4" />
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
