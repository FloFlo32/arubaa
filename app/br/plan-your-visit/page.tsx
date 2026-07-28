import type { Metadata } from "next";
import Link from "next/link";
import {
  BedDouble,
  Home,
  Key,
  Ticket,
  Plane,
  Car,
  Ship,
  Palmtree,
  Info,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
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
  title: "Planeje Sua Visita a Aruba",
  description:
    "Tudo o que você precisa para planejar suas férias em Aruba: hotéis, aluguéis, como chegar e como se locomover.",
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

const logisticsCells = [
  {
    id: "timeshares",
    icon: Key,
    title: "Time-share",
    body: "Tenha um pedaço da ilha. Propriedades de time-share para hóspedes que sempre voltam.",
    span: "md:col-span-2",
  },
  {
    id: "getting-to-aruba",
    icon: Plane,
    title: "Como Chegar A Aruba",
    body: "Chegar a Aruba de praticamente qualquer lugar do mundo é uma experiência simples e sem estresse.",
  },
  {
    id: "getting-around",
    icon: Car,
    title: "Como Se Locomover Em Aruba",
    body: "Da nossa capital animada a vilarejos tranquilos à beira-mar, de praias intocadas ao deserto acidentado, é fácil chegar a qualquer lugar.",
  },
  {
    id: "guest-services",
    icon: LifeBuoy,
    title: "Serviços Ao Hóspede",
    body: "Suporte e assistência sempre que você precisar, antes de desembarcar e durante toda a sua estadia.",
  },
  {
    id: "tips",
    icon: Info,
    title: "Dicas Para Visitantes",
    body: "Conhecimento local sobre horários, clima e como aproveitar cada dia ao máximo.",
    span: "md:col-span-2",
  },
];

const tips = [
  "Sol quase todos os dias do ano: leve roupas leves em camadas, não guarda-chuvas.",
  "Os ventos alísios aumentam à tarde, perfeitos para o windsurf.",
  "Holandês, papiamento, espanhol e inglês são todos amplamente falados.",
  "A água da torneira é segura para beber em toda a ilha.",
];

export default function PlanYourVisitPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/6923a03a-c228-4ba6-a03d-5530a8311041/mp4/FINAL-ANIMATION-VIDEO-HERO-HOME.mp4"
            poster="/ingested/arubaa/img-039.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Planeje com antecedência
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Planeje Sua Visita a Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Planejar suas férias em Aruba é fácil, especialmente com uma ilha
                inteira de gente simpática e feliz em compartilhar dicas. Transporte
                conveniente, acesso seguro à ilha e resorts confortáveis facilitam
                relaxar e explorar.
              </p>
            </Reveal>
          </div>
        </section>

        <SplitRow
          id="hotels-resorts"
          icon={BedDouble}
          eyebrow="Onde se hospedar"
          title="Hotéis E Resorts"
          body="De refúgios boutique a torres à beira-mar, os hotéis e resorts de Aruba vão do íntimo ao serviço completo, todos a poucos passos da água."
          src="/ingested/arubaa/img-057.webp"
          alt="Um casal conversa junto à piscina de um resort em Aruba"
        />

        <SplitRow
          id="vacation-rentals"
          icon={Home}
          eyebrow="Espaço para se espalhar"
          title="Aluguéis De Temporada"
          body="Para estadias mais longas ou grupos maiores, os aluguéis de temporada oferecem uma base com cozinha, mais espaço e um ritmo mais tranquilo."
          src="/ingested/arubaa/img-036.webp"
          alt="Um casal relaxa junto às rochas da costa perto do imóvel alugado"
          reverse
        />

        {/* All-Inclusive */}
        <section id="all-inclusive" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Ticket className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Um preço, tudo incluído
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Tudo Incluído
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Pacotes de férias completos que cobrem refeições, bebidas e atividades,
              para que a única decisão que resta seja qual espreguiçadeira escolher.
            </p>
          </Reveal>
          <div className="mt-10">
            <ImageCard
              src="/ingested/arubaa/img-053.webp"
              alt="Hóspedes pulando juntos na piscina de um resort"
              title="A vida de resort, sem preocupações"
              description="Refeições, bebidas e atividades reunidas em uma estadia sem complicações."
              className="mx-auto max-w-xl"
              ratio="aspect-[16/9]"
            />
          </div>
        </section>

        <SplitRow
          id="by-cruise"
          icon={Ship}
          eyebrow="Um dia na ilha"
          title="Aruba De Cruzeiro"
          body="Os navios de cruzeiro atracam direto em Oranjestad, deixando praias, compras e gastronomia a uma curta caminhada ou corrida de taxi do píer."
          src="/ingested/arubaa/img-051.webp"
          alt="Um casal de noivos de mãos dadas em uma praia de Aruba"
        />

        {/* Aruba Vacations */}
        <section id="vacations" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Palmtree className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Planejamento completo
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Férias Em Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Recursos completos de planejamento de férias, desde a reserva da sua
              estadia até preencher cada dia depois que você desembarcar.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
            <ImageCard
              src="/ingested/arubaa/img-054.webp"
              alt="Um hóspede flutua na piscina de um resort"
              title="Dias de piscina"
              description="Piscinas de resort feitas para não fazer absolutamente nada, de propósito."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Uma dupla conversa junto à piscina de um resort"
              title="Noites à beira da piscina"
              description="Drinques ao pôr do sol a poucos passos do seu quarto."
            />
            <ImageCard
              src="/ingested/arubaa/img-055.webp"
              alt="Hóspedes tomando sol juntos na piscina de um resort"
              title="Viagens em grupo"
              description="Espaço de sobra para toda a turma se espalhar."
            />
          </AutoSlider>
        </section>

        {/* Logistics bento: Timeshares / Getting to / Getting around / Guest services / Tips */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              A logística, resolvida
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Tudo o que você precisa para chegar, se locomover e encontrar ajuda pelo
              caminho.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {logisticsCells.map((c) => (
              <RevealItem key={c.id} className={cn("scroll-mt-24", c.span)}>
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

        {/* Tips checklist */}
        <section className="container-px mx-auto max-w-4xl py-4 pb-16">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold">Algumas coisas boas de saber</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tips.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Sua viagem para a <span className="text-primary">One Happy Island</span> começa aqui
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Garanta suas datas e depois assista a contagem regressiva começar.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/br/book-now">
                    Reserve Agora <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/br/live-webcams">Ver Câmeras Em Tempo Real</Link>
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
