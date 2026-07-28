import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Home, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Ofertas de Viagem e Férias em Aruba",
  description:
    "Economize na sua próxima viagem a Aruba com ofertas flexíveis e acessíveis.",
};

const featured = [
  {
    title: "One Happy Workation",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Uma mulher sozinha em terreno arenoso com vista para o mar em Aruba",
    description:
      "Em Aruba, nosso negócio é a felicidade, por isso oferecemos aos visitantes a chance de trabalhar direto do paraíso.",
  },
  {
    title: "Requisitos de Viagem",
    src: "/ingested/arubaa/img-030.webp",
    alt: "Visitantes chegando a uma praia de Aruba, prontos para a viagem",
    description:
      "Aqui estão alguns detalhes importantes para viajar de e para Aruba. Saiba mais sobre a nova taxa de sustentabilidade de US$ 20.",
  },
];

const savings = [
  {
    icon: Home,
    title: "Hotéis E Resorts",
    body: "Economia nas diárias dos incríveis hotéis e resorts de Aruba, o ano todo.",
  },
  {
    icon: Briefcase,
    title: "Estadias Prolongadas",
    body: "Opções flexíveis de workation para visitantes que querem mais de uma semana no paraíso.",
  },
  {
    icon: Heart,
    title: "Casamentos e Lua de Mel",
    body: "Pacotes de casamento e lua de mel sem preocupações, feitos para os dias mais felizes da sua vida.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Economize mais, preocupe-se menos"
          title="Ofertas de Viagem e Férias em Aruba"
          body="Existem tantas formas de economizar na sua próxima viagem a Aruba. Estamos recebendo os visitantes de volta com flexibilidade, tranquilidade e preços acessíveis."
          src="/ingested/arubaa/img-039.webp"
          alt="Banhistas aproveitando uma tarde de sol no litoral de Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Ofertas em destaque</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Oferta"
                  title={deal.title}
                  description={deal.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Sempre disponível
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Formas de economizar o ano todo</h2>
            <p className="mt-4 text-muted-foreground">
              Além das ofertas por tempo limitado, Aruba mantém um conjunto fixo de programas
              de economia abertos a todos os visitantes.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {savings.map((s) => (
              <RevealItem
                key={s.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Pronto para garantir sua tarifa?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Aproveite a oferta de hoje antes que acabe e comece a contagem regressiva para
                One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/br/book-now">
                    Reserve Agora <ArrowRight className="size-4" />
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
