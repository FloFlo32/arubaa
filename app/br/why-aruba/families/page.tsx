import type { Metadata } from "next";
import Link from "next/link";
import { Baby, ArrowRight, Waves, Sun, Users2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Férias em Família em Aruba",
  description:
    "Águas calmas e rasas e dias tranquilos para todas as idades: por que Aruba funciona para férias em família.",
};

const highlights = [
  {
    icon: Waves,
    title: "Águas calmas e rasas",
    src: "/ingested/arubaa/img-070.webp",
    alt: "Um adulto carregando uma criança em uma praia de Aruba",
    description:
      "As praias a favor do vento da ilha são conhecidas por serem calmas e rasas, o que significa mais tempo nadando e menos tempo de olho nas ondas com preocupação.",
  },
  {
    icon: Sun,
    title: "Dias tranquilos, sem estresse",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Dois garotos correndo juntos em uma praia de Aruba",
    description:
      "Voos curtos, terreno plano e uma área pequena significam menos tempo em trânsito e mais tempo deixando as crianças correrem até se cansarem.",
  },
  {
    icon: Baby,
    title: "Pensada para os hóspedes mais pequenos",
    src: "/ingested/arubaa/img-072.webp",
    alt: "Um adulto segurando um bebê em uma praia de Aruba",
    description:
      "Água quente e suave e areia fofa fazem das praias de Aruba realmente fáceis com um bebê ou uma criança pequena, e não apenas na propaganda.",
  },
  {
    icon: Users2,
    title: "Para todas as gerações",
    src: "/ingested/arubaa/img-074.webp",
    alt: "Uma família de mãos dadas em uma praia de Aruba ao pôr do sol",
    description:
      "Avós, pais e filhos encontram seu próprio ritmo aqui: alguém sempre está disposto a entrar na água, e alguém sempre está feliz em uma cadeira por perto.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Para todas as idades"
          title="Famílias"
          body="Aruba tem atividades para hóspedes de todas as idades, o que a torna um destino ideal para férias em família. O Efeito Aruba não se importa se você tem 5 ou 50 anos."
          src="/ingested/arubaa/img-069.webp"
          alt="Um adulto e uma criança de mãos dadas no litoral de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Uma família feliz
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Algo para cada membro da viagem
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              O Efeito Aruba é sentido por qualquer pessoa que se abre a ele, e isso
              inclui os viajantes mais jovens. Se você está procurando algo que pais e
              filhos possam amar igualmente, é isso.
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
              Um dia que funciona para todo mundo
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-037.webp"
              alt="Uma família posa junta para uma foto na areia"
              title="Dias de praia, juntos"
              description="Areia, águas rasas e sombra para cada membro da família."
            />
            <ImageCard
              src="/ingested/arubaa/img-042.webp"
              alt="Uma família caminha junta de mãos dadas pelo litoral"
              title="Passeios tranquilos"
              description="Litoral plano e tranquilo, gentil com as perninhas pequenas."
            />
            <ImageCard
              src="/ingested/arubaa/img-035.webp"
              alt="Um cuidador carrega uma criança pequena pela praia"
              title="Pensada para os pequenos"
              description="Baías calmas e água quente e rasa, feitas para nadadores pequenos."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planejando uma viagem em família?</h2>
            <p className="max-w-md text-muted-foreground">
              Veja hotéis para crianças, estadias tudo incluído e praias de fácil acesso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/br/plan-your-visit#hotels-resorts">
                  Ver Hotéis E Resorts <ArrowRight className="size-4" />
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
