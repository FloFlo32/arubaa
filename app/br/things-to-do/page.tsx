import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Sailboat,
  Mountain,
  Utensils,
  Music,
  Landmark,
  Binoculars,
  ShoppingBag,
  Flower2,
  Dumbbell,
  CalendarDays,
  MapIcon,
  ArrowRight,
  Sun,
  Sunrise,
  Users2,
  Footprints,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "O Que Fazer em Aruba",
  description:
    "De praias e esportes aquáticos a vida noturna, gastronomia, cultura e golfe: tudo o que você pode fazer na One Happy Island.",
};

function SplitRow({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  src,
  alt,
  reverse = false,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-6xl py-16 sm:py-20">
      <div
        className={cn(
          "grid items-center gap-10 md:grid-cols-2 md:gap-14",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <Icon className="size-5" />
          </span>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

const bentoCells = [
  {
    id: "nightlife",
    icon: Music,
    title: "Vida Noturna",
    body: "De lounges à beira-mar a noites de dança até tarde, as noites de Aruba são tão animadas quanto os seus dias.",
    span: "md:col-span-2",
  },
  {
    id: "sightseeing-tours",
    icon: Binoculars,
    title: "Turismo E Passeios",
    body: "Experiências guiadas e marcos históricos, vistos como só os moradores locais conhecem.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Compras",
    body: "Boutiques, mercados locais e achados livres de impostos por toda a ilha.",
  },
  {
    id: "wellbeing",
    icon: Flower2,
    title: "Bem-estar",
    body: "Atividades focadas em bem-estar, de retiros de spa a alongamentos ao nascer do sol junto ao mar.",
  },
  {
    id: "sports-golf",
    icon: Dumbbell,
    title: "Esportes E Golfe",
    body: "Campos de golfe de nível internacional e atividades ativas para todo tipo de viajante.",
    span: "md:col-span-2",
  },
];

const itineraries = [
  { icon: Sun, title: "Sol, Areia, Serenidade" },
  { icon: Utensils, title: "Saboreie Tudo" },
  { icon: Mountain, title: "Em Sintonia Com A Natureza" },
  { icon: Users2, title: "Uma Família Feliz" },
  { icon: Sunrise, title: "Sem Pressa" },
  { icon: Footprints, title: "Como Um Local" },
];

export default function ThingsToDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/1c987a2c-afe4-4348-b459-383e6ac9916e/mp4/CORTO-PT-HERO-ANIMATION.mp4"
            poster="/ingested/arubaa/img-029.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                O Que Fazer em Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba oferece uma grande variedade de experiências para todos os ritmos.
                De praias tranquilas e paisagens naturais a sítios culturais e vivências
                locais, a ilha convida você a explorar com calma e aproveitar momentos
                marcantes. Claro, as praias de Aruba estão entre as melhores do mundo.
                Mas olhe além do sol, da areia e da água sem fim, e você encontrará uma
                ilha repleta de experiências: trilhas cênicas, enseadas deslumbrantes e
                uma gastronomia inesquecível.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Beaches & Coves */}
        <section id="beaches-coves" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Waves className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Mais de 20 praias
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Praias E Enseadas
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba tem mais de 20 praias e enseadas públicas. Elas vão de baías calmas
              e ideais para famílias a litorais bravios e acariciados pelo vento.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ImageCard
              src="/ingested/arubaa/img-038.webp"
              alt="Visitantes caminhando pela praia durante o dia"
              title="Baías calmas, ideais para famílias"
              description="Águas rasas e protegidas no lado a favor do vento da ilha."
            />
            <ImageCard
              src="/ingested/arubaa/img-030.webp"
              alt="Visitantes aproveitando a orla durante o dia"
              title="Litorais acariciados pelo vento"
              description="Enseadas amplas e abertas onde os ventos alísios mantêm tudo fresco."
            />
          </div>
        </section>

        <SplitRow
          id="on-the-water"
          icon={Sailboat}
          eyebrow="Vento e água"
          title="Na Água"
          body="De baías calmas e protegidas a alguns dos melhores pontos de windsurf do mundo, o litoral de Aruba coloca todo tipo de esporte aquático a seu alcance."
          src="/ingested/arubaa/img-047.webp"
          alt="Um casal em trajes de casamento correndo pelas águas rasas em uma praia de Aruba"
        />

        <SplitRow
          id="natural-wonders"
          icon={Mountain}
          eyebrow="Arikok e além"
          title="Maravilhas Naturais"
          body="Explore a paisagem desértica do Parque Nacional Arikok e depois refresque-se fazendo snorkel em enseadas talhadas na costa calcária da ilha."
          src="/ingested/arubaa/img-031.webp"
          alt="Uma mulher sozinha em terreno arenoso com vista para o mar"
          reverse
        />

        <SplitRow
          id="dining"
          icon={Utensils}
          eyebrow="Todos os sabores"
          title="Gastronomia"
          body="A cena gastronômica de Aruba reúne clássicos europeus, especiarias do sul da Ásia e os frutos do mar locais mais frescos, muitas vezes servidos a poucos passos da água."
          src="/ingested/arubaa/img-036.webp"
          alt="Um casal relaxando junto às rochas da costa de Aruba"
        />

        <SplitRow
          id="arts-culture"
          icon={Landmark}
          eyebrow="San Nicolas"
          title="Arte E Cultura"
          body="San Nicolas é rica em história, cultura e arquitetura, um verdadeiro reflexo dos moradores de San Nicolas e do seu dia a dia."
          src="/ingested/arubaa/img-034.webp"
          alt="Várias pessoas passeando pelo litoral perto de San Nicolas"
          reverse
        />

        {/* Bento: Nightlife / Sightseeing / Shopping / Wellbeing / Sports & Golf */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Mais formas de aproveitar o dia
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              O resto da ilha, em cinco direções.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {bentoCells.map((c) => (
              <RevealItem
                key={c.id}
                className={cn(
                  "scroll-mt-24",
                  c.span
                )}
              >
                <div
                  id={c.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Calendar of Events */}
        <section id="calendar" className="container-px mx-auto max-w-4xl py-16 text-center sm:py-20">
          <Reveal>
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <CalendarDays className="size-6" />
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl">
              Calendário De Eventos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Encontros comunitários e festivais preenchem o calendário de Aruba o ano
              todo, da temporada de carnaval a celebrações de música e gastronomia à
              beira-mar.
            </p>
          </Reveal>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <MapIcon className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Escritos por especialistas locais
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Roteiros
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Ideias de viagem já planejadas, para que você gaste menos tempo decidindo
              e mais tempo aproveitando a ilha.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[75%] sm:w-[40%] lg:w-[23%]">
            {itineraries.map((it) => (
              <div
                key={it.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <it.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Uma rota selecionada pela ilha, criada por quem a conhece melhor.
                </p>
              </div>
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Pronto para montar <span className="text-primary">seu próprio roteiro</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Praias, enseadas, reservas de jantar e tudo o que há entre elas: reserve
                sua escapada para a One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/br/book-now">
                    Reserve Sua Escapada Para Aruba <ArrowRight className="size-4" />
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
