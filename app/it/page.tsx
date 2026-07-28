import Link from "next/link";
import { ArrowRight, ArrowUpRight, PlayCircle, Plane, Globe, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Carousel } from "@/components/magic/carousel";
import { ImageCard } from "@/components/magic/image-card";
import { cn } from "@/lib/utils";

const updates = [
  {
    eyebrow: "Festival culinario",
    title: "Autentico Aruba Culinary Festival",
    body: "Autentico torna questo ottobre per un'altra indimenticabile celebrazione della scena culinaria di Aruba.",
    href: "/it/things-to-do#dining",
    img: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Pianifica meglio",
    title: "App myAruba",
    body: "Vuoi esplorare Aruba? Prova myAruba, l'app che ti aiuta a scegliere i posti più belli dell'isola.",
    href: "/it/plan-your-visit",
    img: "/ingested/arubaa/img-038.webp",
  },
  {
    eyebrow: "Sostenibilità",
    title: "Campagna Acqua del Rubinetto",
    body: "Aruba è conosciuta per le sue spiagge incontaminate e le acque turchesi, e stiamo lavorando per mantenerle così.",
    href: "/it/our-island#island-facts",
    img: "/ingested/arubaa/img-030.webp",
  },
  {
    eyebrow: "Prima di partire",
    title: "Requisiti di Viaggio",
    body: "Ecco alcuni dettagli da ricordare quando si viaggia da e per Aruba, inclusa la nuova tassa di sostenibilità di $20.",
    href: "/it/plan-your-visit#tips",
    img: "/ingested/arubaa/img-044.webp",
  },
];

const happinessCells = [
  {
    title: "Le Spiagge e Baie di Aruba",
    description:
      "Più di 20 spiagge e baie pubbliche, dalle baie calme e adatte alle famiglie alle coste selvagge baciate dal vento.",
    href: "/it/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Cosa Fare ad Aruba",
    description: "Un'ampia gamma di esperienze per ogni ritmo.",
    href: "/it/things-to-do",
    src: "/ingested/arubaa/img-034.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Matrimoni",
    description: "Sposarsi ad Aruba è il modo ideale per unire due cuori felici.",
    href: "/it/why-aruba#weddings",
    src: "/ingested/arubaa/img-050.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Benessere ad Aruba",
    description:
      "È davvero una vacanza se alla fine senti il bisogno di un'altra vacanza? Buone notizie: Aruba non è quel tipo di viaggio.",
    href: "/it/why-aruba#wellness",
    src: "/ingested/arubaa/img-031.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "La Città di San Nicolas",
    description:
      "Ricca di storia, cultura e architettura, un vero riflesso degli abitanti di San Nicolas e della loro vita quotidiana.",
    href: "/it/things-to-do#arts-culture",
    src: "/ingested/arubaa/img-033.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

const nextStopFeatures = [
  {
    icon: Plane,
    title: "Facile",
    body: "Aruba dispone di voli comodi e diretti dalle principali città degli Stati Uniti e del Canada.",
  },
  {
    icon: Globe,
    title: "Conveniente",
    body: "Parliamo quattro lingue e abbiamo più giornate di sole di qualsiasi altra isola caraibica.",
  },
  {
    icon: Compass,
    title: "Da scoprire",
    body: "Siamo piccoli, sicuri e moderni, così puoi trasformare l'intera isola nel tuo parco giochi.",
  },
];

const effects = [
  {
    eyebrow: "Effetto 01",
    title: "Sole, Sabbia, Serenità",
    description:
      "Sabbia bianca infinita e acqua blu cristallina. Sdraiati al sole, fluttua nell'estasi e fai il pieno del calore aruba di cui hai bisogno per il viaggio di ritorno.",
    href: "/it/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
  },
  {
    eyebrow: "Effetto 02",
    title: "Gusta Tutto",
    description:
      "Con oltre cento nazionalità sull'isola, Aruba è ricca di sapori da ogni angolo del globo. Non sorprenderti se te ne vai con un nuovo piatto preferito.",
    href: "/it/things-to-do#dining",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effetto 03",
    title: "In Una Cosa Sola Con La Natura",
    description:
      "Ad Aruba non stiamo davvero al chiuso. Non c'è un modo sbagliato di essere in armonia con la natura qui, ma abbiamo qualche suggerimento per iniziare.",
    href: "/it/things-to-do#natural-wonders",
    src: "/ingested/arubaa/img-031.webp",
  },
  {
    eyebrow: "Effetto 04",
    title: "Una Famiglia Felice",
    description:
      "L'Effetto Aruba non fa differenze tra i 5 e i 50 anni, lo sente chiunque si apra alla magia di Aruba. Perfetto sia per genitori che per bambini.",
    href: "/it/why-aruba#families",
    src: "/ingested/arubaa/img-037.webp",
  },
  {
    eyebrow: "Effetto 05",
    title: "Rallenta i Ritmi",
    description:
      "A volte tutto ciò che serve è pace e tranquillità per riconnettersi con chi conta davvero. Aruba è ricca della quiete di cui hai bisogno per rallentare.",
    href: "/it/why-aruba#wellness",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effetto 06",
    title: "Locale all'Istante",
    description:
      "Bastano pochi minuti ad Aruba per sentirsi come un locale. Prendi posto in uno spaccio di rum, oppure trova il miglior punto per fare il bagno: in entrambi i casi ti sentirai a casa.",
    href: "/it/why-aruba#culture",
    src: "/ingested/arubaa/img-033.webp",
  },
];

const itinerarySlides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Vista aerea di persone in spiaggia sull'acqua turchese di Aruba", caption: "Sole, sabbia, serenità" },
  { src: "/ingested/arubaa/img-041.webp", alt: "Un genitore porta in braccio un bambino in riva al mare ad Aruba", caption: "Bambini Felici, Vacanza Felice" },
  { src: "/ingested/arubaa/img-019.webp", alt: "Una donna si rilassa in accappatoio da spa ad Aruba", caption: "Nel Lusso Più Assoluto" },
  { src: "/ingested/arubaa/img-040.webp", alt: "Un viaggiatore sorride su una spiaggia di Aruba", caption: "Da Solo" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Amici riuniti sulla spiaggia ad Aruba", caption: "Gusta Tutto" },
];

export default function Home() {
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
                One Happy Island
              </Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                Ama Aruba. Sentilo tornare.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                Quando arrivi con curiosità e apertura, Aruba risponde allo stesso modo. Scopri
                le connessioni, la cultura e i momenti di quiete che trasformano i visitatori in famiglia.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/it/why-aruba">
                    Scopri l&apos;Effetto Aruba <ArrowRight className="size-4" />
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
                    <PlayCircle className="size-4" /> Guarda il video
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
                <span className="font-display text-lg font-bold">300+</span>
                <span className="text-sm text-white/80">giornate di sole all&apos;anno, più di qualsiasi altra isola caraibica</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Updates */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Resta informato
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Le nostre novità più felici</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Come rendiamo il tuo viaggio ad Aruba sicuro, comodo, flessibile e indimenticabile.
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
              L&apos;Effetto Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Infiniti modi per trovare la felicità
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {happinessCells.map((c, i) => (
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
                Perché siamo diversi
              </span>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Prossima tappa, One Happy Island.
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Ci sono molte ragioni per cui tanti ospiti tornano ad Aruba anno dopo anno. Ecco
                solo alcune delle cose che rendono la nostra isola felice diversa da qualsiasi altra
                destinazione.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.08}>
              {nextStopFeatures.map((f) => (
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
              Cose da fare ad Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Certo, le nostre spiagge sono tra le migliori al mondo.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Ma guarda oltre il sole, la sabbia e l&apos;acqua infiniti, e troverai un&apos;isola
              piena di esperienze: escursioni panoramiche, baie splendide e una cucina indimenticabile.
              Scopri gli Effetti Aruba qui sotto, scritti da esperti locali.
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
                Itinerari
              </Badge>
              <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
                La Tua Fuga ad Aruba, pianificata dai locali
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
                Scopri gli itinerari scritti da esperti locali: da Sole, Sabbia, Serenità a Bambini
                Felici, Vacanza Felice, Nel Lusso Più Assoluto e Da Solo. Ognuno traccia
                una giornata intera dell&apos;Effetto Aruba.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="relative mx-auto max-w-4xl rounded-[2rem] bg-background p-2 shadow-2xl shadow-black/20">
                <BorderBeam />
                <Carousel slides={itinerarySlides} />
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
                Non vediamo l&apos;ora di vederti.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Qualunque sia il tuo modo di viaggiare, Aruba rende facile prenotare il soggiorno
                giusto per te.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/it/book-now">
                    Prenota Ora <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/it/deals">Vedi le Offerte di Oggi</Link>
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
