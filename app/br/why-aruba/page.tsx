import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Heart, Users, Flower2, Utensils, Baby, Gem, Plane, Globe, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Por Que Aruba",
  description:
    "Descubra o Efeito Aruba: aventura, romance, cultura, bem-estar, gastronomia, diversão em família e casamentos na Ilha Mais Feliz.",
};

const effectStats = [
  { icon: Plane, label: "Fácil", body: "Mais de 100 voos diretos partindo das principais cidades dos Estados Unidos e do Canadá." },
  { icon: Globe, label: "Conveniente", body: "Quatro idiomas falados e mais dias de sol do que qualquer outra ilha do Caribe." },
  { icon: MapPin, label: "Fácil de descobrir", body: "Pequena, segura e moderna, para você transformar a ilha inteira no seu playground." },
];

const effects = [
  {
    icon: Compass,
    title: "Aventura",
    href: "/br/why-aruba/adventure",
    teaser: "Arcos de caverna, trilhas off-road e litorais perfeitos para windsurf, para os curiosos.",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Duas pessoas andando de caiaque juntas na costa de Aruba",
  },
  {
    icon: Heart,
    title: "Romance",
    href: "/br/why-aruba/romance",
    teaser: "Caminhadas ao pôr do sol, jantares privados e enseadas tranquilas feitas para dois.",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Um casal em pé junto a uma palmeira em uma praia de Aruba",
  },
  {
    icon: Users,
    title: "Cultura",
    href: "/br/why-aruba/culture",
    teaser: "Cem nacionalidades, uma ilha, histórias infinitas para ouvir.",
    src: "/ingested/arubaa/img-060.webp",
    alt: "Um grupo de amigos reunidos em uma praia de Aruba",
  },
  {
    icon: Flower2,
    title: "Bem-estar",
    href: "/br/why-aruba/wellness",
    teaser: "Quietude à beira do penhasco e um luxo lento e silencioso, no seu próprio ritmo.",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Uma mulher sozinha em um terreno arenoso com vista para o mar em Aruba",
  },
  {
    icon: Utensils,
    title: "Comer E Beber",
    href: "/br/why-aruba/eat-and-drink",
    teaser: "Cem sabores em uma só ilha, dos quiosques de rum aos restaurantes sofisticados.",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Amigos brindando com copos de vinho ao ar livre",
  },
  {
    icon: Baby,
    title: "Famílias",
    href: "/br/why-aruba/families",
    teaser: "Águas calmas e rasas e dias tranquilos, pensados para todas as idades.",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Dois garotos correndo juntos em uma praia de Aruba",
  },
  {
    icon: Gem,
    title: "Casamentos",
    href: "/br/why-aruba/weddings",
    teaser: "Cerimônias de pés descalços e votos ao pôr do sol junto ao mar.",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Um casal celebra o casamento em uma praia de Aruba",
  },
];

export default function WhyArubaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/5a23170b-58df-46b2-b401-1d0a35a9a7b5/mp4/00_Homepage_BGvideo_16x9.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Ilha Mais Feliz
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Por Que Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                O charme de Aruba vem de muito mais do que sol. É a gentileza do seu povo, a
                abundância de dias ensolarados (mais do que em qualquer outra ilha do
                Caribe) e o Efeito Aruba: uma sensação avassaladora de calor humano e
                felicidade que você vai sentir em toda a ilha.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Aruba Effect */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              O Efeito Aruba
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Gente feliz: de moradores a visitantes recorrentes. O que faz de Aruba um lugar especial?
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {effectStats.map((s) => (
              <RevealItem key={s.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{s.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Seven reasons */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Sete motivos, uma ilha
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Explore o Efeito Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Cada visitante encontra seu próprio motivo para se apaixonar por Aruba. Escolha
              o seu abaixo e descubra atividades reais, pessoas reais e um roteiro para
              começar a planejar.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
            {effects.map((e) => (
              <ImageCard
                key={e.title}
                src={e.src}
                alt={e.alt}
                eyebrow={e.title}
                title={e.title}
                description={e.teaser}
                href={e.href}
                className="h-full"
              />
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Sinta o <span className="text-primary">Efeito Aruba</span> com você mesmo
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Uma ilha feliz, sete motivos para visitar. Comece a transformar esta página
                em uma viagem.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/br/plan-your-visit">
                    Comece A Planejar Sua Viagem <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/br/deals">Veja As Ofertas De Hoje</Link>
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
