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
  title: "Aventura em Aruba",
  description:
    "Arcos de caverna, trilhas no deserto e mar aberto: como sentir o Efeito Aruba através da aventura.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Parque Nacional Arikok",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Uma mulher sozinha em um terreno arenoso com vista para o mar em Aruba",
    description:
      "Quase um quinto da ilha é deserto protegido: cactos imponentes, encostas de calcário e trilhas que terminam em enseadas escondidas.",
  },
  {
    icon: Waves,
    title: "Na água",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Duas pessoas andando de caiaque juntas na costa de Aruba",
    description:
      "Ventos alísios constantes fazem de Aruba um dos melhores pontos do Caribe para caiaque, windsurf e vela, seja você competindo ou apenas relaxando na água.",
  },
  {
    icon: Compass,
    title: "Cavernas marinhas e arcos de rocha",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Um casal explora uma caverna marinha e um arco de rocha na costa de Aruba",
    description:
      "A costa norte foi esculpida pelo vento e pelas ondas em pontes naturais e cavernas escavadas, melhor exploradas logo depois do amanhecer, antes que a luz fique forte demais.",
  },
  {
    icon: Sunrise,
    title: "Persiga o horizonte",
    src: "/ingested/arubaa/img-063.webp",
    alt: "Um grupo de amigos saltando juntos na praia durante a hora dourada",
    description:
      "Quem madruga tem a ilha praticamente só para si: bancos de areia vazios, o ar fresco do deserto e um amanhecer que deixa toda a costa dourada.",
  },
];

export default function AdventurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Kaweta"
          title="Aventura"
          body="Kaweta. Significa curioso em papiamento, e é a palavra perfeita para o espírito de exploração de Aruba. Além das praias, a ilha recompensa quem estiver disposto a procurar."
          src="/ingested/arubaa/img-031.webp"
          alt="Uma mulher sozinha em um terreno arenoso com vista para o mar em Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Quatro caminhos
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Encontre o seu tipo de aventura
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba reúne deserto, litoral e mar aberto em uma ilha que você atravessa em
              menos de uma hora, o que significa que dá para viver tudo isso em uma única
              viagem.
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
              Feita para explorar, não só para visitar
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Alugue um UTV para o interior do deserto, reserve um barco de snorkel para os
              recifes, ou simplesmente comece a caminhar a partir do seu hotel: Aruba é
              pequena o suficiente para que qualquer tipo de aventura fique a uma curta
              distância de onde você está hospedado.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-077.webp"
              alt="Duas pessoas caminhando juntas em um banco de areia em Aruba"
              title="Caminhadas em bancos de areia"
              description="A maré baixa revela bancos de areia que se estendem pelas águas turquesa."
            />
            <ImageCard
              src="/ingested/arubaa/img-004.webp"
              alt="Um casal em silhueta nas dunas de Aruba ao pôr do sol"
              title="Caminhadas nas dunas"
              description="A costa nordeste é toda dunas ondulantes e vento, melhor vista a pé."
            />
            <ImageCard
              src="/ingested/arubaa/img-065.webp"
              alt="Um grupo de amigos saltando juntos na praia"
              title="Excursões em grupo"
              description="Aventura é melhor compartilhada: reserve um passeio em grupo e troque histórias no jantar."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Pronto para explorar?</h2>
            <p className="max-w-md text-muted-foreground">
              Veja passeios, aluguel de equipamentos e o resto do que fazer em Aruba.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/br/things-to-do#natural-wonders">
                  Ver Maravilhas Naturais <ArrowRight className="size-4" />
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
