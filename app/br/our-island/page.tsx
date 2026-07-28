import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Ruler,
  Compass,
  Landmark,
  Fish,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map } from "@/components/sections/map";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nossa Ilha",
  description:
    "19,6 milhas de deserto, litoral e cultura: conheça a geografia e a história de Aruba.",
};

const facts = [
  {
    icon: Ruler,
    label: "19,6 x 6 milhas",
    body: "Com apenas 19,6 milhas de comprimento e seis milhas de largura, nosso belo pedaço de areia branca e fina é um paraíso moldado pelo mar.",
  },
  {
    icon: MapPin,
    label: "Caribe meridional",
    body: "Aruba é uma pequena ilha no sul do Mar do Caribe, a cerca de 15 milhas ao norte da Venezuela.",
  },
  {
    icon: Compass,
    label: "Fora da rota de furacões",
    body: "Estamos bem fora da rota de furacões, mais um motivo para nossos dias ensolarados serem tão confiáveis.",
  },
];

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
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div id={id} className={cn("py-10 sm:py-12", id && "scroll-mt-24")}>
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
          <h3 className="mt-2 text-balance text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </div>
  );
}

export default function OurIslandPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-28 pb-16 sm:pt-32 sm:pb-24 md:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <Badge variant="accent">Nossa ilha feliz</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Nossa Ilha
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-foreground/80">
                Já se perguntou: onde fica Aruba? Nas águas quentes do sul do Caribe,
                bem fora da rota de furacões, é ali que estamos. Nossa ilha feliz.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Com apenas 19,6 milhas de comprimento e seis milhas de largura, nosso
                belo pedaço de areia branca e fina é um paraíso moldado pelo mar: uma
                ilha que te acolhe com dias quentes e ensolarados e pessoas ainda
                mais calorosas e alegres. Ao sul e a oeste, Aruba pulsa com resorts,
                compras e vida noturna. Ao norte, ondas e vento esculpem litorais
                acidentados e falésias de calcário. E, em seu coração, o Parque Nacional
                Arikok protege uma vasta paisagem de areia desértica, cactos imponentes
                e maravilhas naturais.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="Uma família caminhando de mãos dadas em uma praia de Aruba"
                  width={900}
                  height={1050}
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[6/7] w-full object-cover object-top"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Island Facts */}
        <section id="island-facts" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Curiosidades Da Ilha
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              O básico, antes de você desembarcar
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {facts.map((f) => (
              <RevealItem key={f.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{f.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-6">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                <Fish className="size-4" />
              </span>
              <p className="text-pretty text-sm text-muted-foreground">
                Ao planejar férias no Caribe, você pode se perguntar quantos animais
                exóticos vai avistar. Quando essas férias são em Aruba, a resposta é:
                muitos.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Regions */}
        <section id="regions" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Regiões
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Do deserto árido à capital colonial holandesa
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Do nosso deserto árido à nossa capital colonial holandesa, cada parte de
              Aruba nos torna diferentes de qualquer outra ilha caribenha.
            </p>
          </Reveal>
          <div className="mt-4 divide-y divide-border">
            <SplitRow
              icon={MapPin}
              eyebrow="Sul e oeste"
              title="Resorts, compras e vida noturna"
              body="As costas sul e oeste pulsam com resorts, boutiques e bares de praia, todos voltados para as águas mais calmas da ilha."
              src="/ingested/arubaa/img-029.webp"
              alt="Vista aérea de banhistas nas águas turquesa de Aruba"
            />
            <SplitRow
              icon={Compass}
              eyebrow="Costa norte"
              title="Litorais acidentados, esculpidos pelo vento"
              body="Ondas e vento esculpem a costa norte em falésias de calcário, cavernas marinhas e arcos naturais de pedra."
              src="/ingested/arubaa/img-027.webp"
              alt="Um casal explora uma caverna marinha e um arco natural de pedra na costa norte de Aruba"
              reverse
            />
            <SplitRow
              icon={Landmark}
              eyebrow="O interior"
              title="Areia de deserto e cactos imponentes"
              body="No coração da ilha, o Parque Nacional Arikok protege uma paisagem de trilhas desérticas, cactos e terras agrícolas tranquilas."
              src="/ingested/arubaa/img-033.webp"
              alt="Um grupo de amigos reunidos em uma praia de Aruba"
            />
          </div>
        </section>

        {/* History & Culture */}
        <section id="history-culture" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/arubaa/img-042.webp"
                  alt="Uma família caminha de mãos dadas pelo litoral de Aruba"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Landmark className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Passado de geração em geração
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                História E Cultura
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Você encontrará vestígios da história e da cultura de Aruba nas paredes
                de cavernas, nas fachadas em tons pastel e nos rostos do nosso povo
                feliz.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 360 Map */}
        <section id="map" className="container-px mx-auto max-w-4xl pt-4 pb-4 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Mapa 360
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Veja a ilha inteira de uma só vez
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Uma visão interativa de Aruba, dos resorts no sul ao litoral norte
              indomável.
            </p>
          </Reveal>
        </section>
        <Map />

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Pronto para ver com <span className="text-primary">seus próprios olhos</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Cada região de Aruba está mais perto do que você imagina.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/br/plan-your-visit">
                    Planeje Sua Visita <ArrowRight className="size-4" />
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
