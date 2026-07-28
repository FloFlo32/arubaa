import Link from "next/link";
import { ArrowRight, ArrowUpRight, PlayCircle, Plane, Globe, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { HeroVideo } from "@/components/magic/hero-video";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Carousel } from "@/components/magic/carousel";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { cn } from "@/lib/utils";

const updates = [
  {
    eyebrow: "Festival gastronômico",
    title: "Autentico Aruba Culinary Festival",
    body: "O Autentico volta em outubro para mais uma celebração inesquecível da cena gastronômica de Aruba.",
    href: "/br/things-to-do#dining",
    img: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Planeje melhor",
    title: "myAruba App",
    body: "Quer explorar Aruba? Experimente o myAruba, o aplicativo que ajuda você a escolher lugares incríveis na ilha.",
    href: "/br/plan-your-visit",
    img: "/ingested/arubaa/img-038.webp",
  },
  {
    eyebrow: "Sustentabilidade",
    title: "Campanha da Água Potável",
    body: "Aruba é conhecida por suas praias intocadas e águas turquesa, e estamos trabalhando para mantê-las assim.",
    href: "/br/our-island#island-facts",
    img: "/ingested/arubaa/img-030.webp",
  },
  {
    eyebrow: "Antes de viajar",
    title: "Requisitos de Viagem",
    body: "Aqui estão alguns detalhes para lembrar ao viajar de e para Aruba, incluindo a nova taxa de sustentabilidade de $20.",
    href: "/br/plan-your-visit#tips",
    img: "/ingested/arubaa/img-044.webp",
  },
];

const cells = [
  {
    title: "Praias E Enseadas De Aruba",
    description:
      "Mais de 20 praias e enseadas públicas, de baías calmas e ideais para famílias a costas selvagens acariciadas pelo vento.",
    href: "/br/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "O Que Fazer Em Aruba",
    description: "Uma ampla variedade de experiências para todos os ritmos.",
    href: "/br/things-to-do",
    src: "/ingested/arubaa/img-034.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Casamentos",
    description: "Casar-se em Aruba é a forma ideal de unir dois corações felizes.",
    href: "/br/why-aruba#weddings",
    src: "/ingested/arubaa/img-050.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Bem-estar Em Aruba",
    description:
      "Será que é mesmo férias se, no final, você sente que precisa de outras férias? Boa notícia: Aruba não é esse tipo de viagem.",
    href: "/br/why-aruba#wellness",
    src: "/ingested/arubaa/img-031.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Cidade De San Nicolas",
    description:
      "Rica em história, cultura e arquitetura, um verdadeiro reflexo dos moradores de San Nicolas e do seu cotidiano.",
    href: "/br/things-to-do#arts-culture",
    src: "/ingested/arubaa/img-033.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

const features = [
  {
    icon: Plane,
    title: "Fácil",
    body: "Aruba tem voos convenientes e diretos a partir das principais cidades dos Estados Unidos e do Canadá.",
  },
  {
    icon: Globe,
    title: "Conveniente",
    body: "Falamos quatro idiomas e temos mais dias de sol do que qualquer outra ilha do Caribe.",
  },
  {
    icon: Compass,
    title: "Explorável",
    body: "Somos pequenos, seguros e modernos, então você pode transformar toda a nossa ilha no seu playground.",
  },
];

const effects = [
  {
    eyebrow: "Efeito 01",
    title: "Sol, Areia, Serenidade",
    description:
      "Areia branca sem fim e água azul cristalina. Deite-se ao sol, flutue em êxtase e encha-se do calor arubano de que você tanto precisa para a volta para casa.",
    href: "/br/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
  },
  {
    eyebrow: "Efeito 02",
    title: "Saboreie Tudo",
    description:
      "Com mais de cem nacionalidades na ilha, Aruba está repleta de sabores de todos os cantos do mundo. Não se surpreenda se voltar para casa com um novo prato favorito.",
    href: "/br/things-to-do#dining",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Efeito 03",
    title: "Um Só Com A Natureza",
    description:
      "Em Aruba, a gente não fica muito tempo dentro de casa. Não existe jeito errado de se conectar com a natureza aqui, mas temos algumas sugestões para você começar.",
    href: "/br/things-to-do#natural-wonders",
    src: "/ingested/arubaa/img-031.webp",
  },
  {
    eyebrow: "Efeito 04",
    title: "Uma Família Feliz",
    description:
      "O Efeito Aruba não faz diferença entre ter 5 ou 50 anos: quem se abrir para a magia de Aruba vai sentir. Perfeito tanto para pais quanto para filhos.",
    href: "/br/why-aruba#families",
    src: "/ingested/arubaa/img-037.webp",
  },
  {
    eyebrow: "Efeito 05",
    title: "Desacelere",
    description:
      "Às vezes tudo o que você precisa é paz e sossego para se reconectar com quem mais importa. Aruba está repleta da tranquilidade que você precisa para desacelerar.",
    href: "/br/why-aruba#wellness",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Efeito 06",
    title: "Local Instantâneo",
    description:
      "Bastam alguns minutos em Aruba para você se sentir um local. Sente-se em um bar de rum ou encontre o melhor ponto de mergulho da região: de um jeito ou de outro, você vai se sentir em casa.",
    href: "/br/why-aruba#culture",
    src: "/ingested/arubaa/img-033.webp",
  },
];

const slides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Vista aérea de banhistas nas águas turquesa de Aruba", caption: "Sol, areia, serenidade" },
  { src: "/ingested/arubaa/img-041.webp", alt: "Um pai carregando uma criança na praia em Aruba", caption: "Crianças Felizes, Férias Felizes" },
  { src: "/ingested/arubaa/img-019.webp", alt: "Uma mulher relaxando em um roupão de spa em Aruba", caption: "No Colo Do Luxo" },
  { src: "/ingested/arubaa/img-040.webp", alt: "Uma viajante sorrindo em uma praia de Aruba", caption: "Viajando Sozinho" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Amigos reunidos na praia de Aruba", caption: "Saboreie Tudo" },
];

export default function HomeBr() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/bf675846-d8a4-4914-ad0a-75c106743d6b/mp4/01_ArubaHomepage_BGvideo_16x9_main.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />

          <div className="container-px relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Uma Ilha Feliz
              </Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                Ame Aruba. Sinta esse amor de volta.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                Quando você chega com curiosidade e a mente aberta, Aruba responde da mesma
                forma. Descubra as conexões, a cultura e os momentos tranquilos que
                transformam visitantes em família.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/br/why-aruba">
                    Descubra o Efeito Aruba <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <a
                    href="https://www.youtube.com/watch?v=GJYpiOU2mM0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="size-4" /> Veja o vídeo
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
                <span className="font-display text-lg font-bold">300+</span>
                <span className="text-sm text-white/80">dias de sol por ano, mais que qualquer outra ilha do Caribe</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Updates */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Fique por dentro
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Nossas novidades mais felizes</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Como estamos tornando sua viagem a Aruba segura, conveniente, flexível e inesquecível.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {updates.map((u) => (
              <RevealItem key={u.title}>
                <Link
                  href={u.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={u.img}
                      alt={u.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {u.eyebrow}
                    </span>
                    <h3 className="flex items-start justify-between gap-2 font-display text-base font-semibold leading-snug">
                      {u.title}
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{u.body}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Happiness */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              O Efeito Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Inúmeras formas de encontrar a felicidade
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {cells.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className={cn(c.span)}>
                <ImageCard
                  src={c.src}
                  alt={c.title}
                  title={c.title}
                  description={c.description}
                  href={c.href}
                  ratio={c.ratio}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Next Stop */}
        <section className="bg-primary py-20 text-primary-foreground sm:py-24">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                Por que somos diferentes
              </span>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Próximo destino, Uma ilha feliz.
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Há muitos motivos pelos quais tantos hóspedes voltam a Aruba ano após ano.
                Aqui estão apenas algumas das coisas que fazem da nossa ilha feliz um destino
                diferente de qualquer outro.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.08}>
              {features.map((f) => (
                <RevealItem key={f.title}>
                  <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary-foreground/15">
                      <f.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/85">{f.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Effects */}
        <section id="the-aruba-effect" className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              O que fazer em Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Sim, nossas praias estão entre as melhores do mundo.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Mas olhe além do sol, da areia e da água sem fim, e você vai encontrar uma ilha
              repleta de experiências: trilhas cênicas, enseadas deslumbrantes e uma
              gastronomia inesquecível. Explore os Efeitos Aruba abaixo, escritos por
              especialistas locais.
            </p>
          </Reveal>

          <div className="mt-10">
            <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[32%]">
              {effects.map((e) => (
                <ImageCard
                  key={e.title}
                  src={e.src}
                  alt={e.title}
                  eyebrow={e.eyebrow}
                  title={e.title}
                  description={e.description}
                  href={e.href}
                  className="h-full"
                />
              ))}
            </AutoSlider>
          </div>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground">
                Roteiros
              </Badge>
              <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
                Sua Fuga Para Aruba, planejada por locais
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
                Explore roteiros escritos por especialistas locais: de Sol, Areia, Serenidade
                a Crianças Felizes, Férias Felizes, No Colo Do Luxo e Viajando Sozinho. Cada
                um mapeia um dia inteiro do Efeito Aruba.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="relative mx-auto max-w-4xl rounded-[2rem] bg-background p-2 shadow-2xl shadow-black/20">
                <BorderBeam />
                <Carousel slides={slides} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="container-px mx-auto max-w-6xl py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
              <GridPattern />
              <BorderBeam />
              <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold sm:text-5xl">
                Estamos ansiosos para te receber.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Seja qual for o seu jeito de viajar, Aruba facilita reservar a estadia
                perfeita para você.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/br/book-now">
                    Reserve Agora <ArrowRight className="size-4" />
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
