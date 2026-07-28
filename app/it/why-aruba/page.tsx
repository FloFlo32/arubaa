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
  title: "Perché Aruba",
  description:
    "Scopri l'Effetto Aruba: avventura, romanticismo, cultura, benessere, cibo, divertimento in famiglia e matrimoni su One Happy Island.",
};

const effectStats = [
  { icon: Plane, label: "Facile", body: "Oltre 100 voli diretti dalle principali città degli Stati Uniti e del Canada." },
  { icon: Globe, label: "Conveniente", body: "Quattro lingue parlate e più giornate di sole di qualsiasi altra isola caraibica." },
  { icon: MapPin, label: "Da scoprire", body: "Piccola, sicura e moderna, così puoi trasformare l'intera isola nel tuo parco giochi." },
];

const effects = [
  {
    icon: Compass,
    title: "Avventura",
    href: "/it/why-aruba/adventure",
    teaser: "Archi di roccia, sentieri fuoristrada e coste pronte per il windsurf per i più curiosi.",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Due persone in kayak insieme lungo la costa di Aruba",
  },
  {
    icon: Heart,
    title: "Romanticismo",
    href: "/it/why-aruba/romance",
    teaser: "Passeggiate al tramonto, cene private e baie tranquille fatte per due.",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Una coppia in piedi insieme vicino a una palma su una spiaggia di Aruba",
  },
  {
    icon: Users,
    title: "Cultura",
    href: "/it/why-aruba/culture",
    teaser: "Cento nazionalità, un'isola, storie infinite da ascoltare.",
    src: "/ingested/arubaa/img-060.webp",
    alt: "Un gruppo di amici riuniti su una spiaggia di Aruba",
  },
  {
    icon: Flower2,
    title: "Benessere",
    href: "/it/why-aruba/wellness",
    teaser: "Quiete a picco sul mare e lusso lento e silenzioso al tuo ritmo.",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una donna in piedi da sola su un terreno sabbioso che si affaccia sul mare ad Aruba",
  },
  {
    icon: Utensils,
    title: "Mangiare e Bere",
    href: "/it/why-aruba/eat-and-drink",
    teaser: "Cento sapori su un'isola, dagli spacci di rum alla cucina raffinata.",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Amici che tengono bicchieri di vino insieme all'aperto",
  },
  {
    icon: Baby,
    title: "Famiglie",
    href: "/it/why-aruba/families",
    teaser: "Acqua calma e poco profonda e giornate facili costruite per ogni età.",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Due ragazzi che corrono insieme su una spiaggia di Aruba",
  },
  {
    icon: Gem,
    title: "Matrimoni",
    href: "/it/why-aruba/weddings",
    teaser: "Cerimonie a piedi nudi e promesse all'ora dorata sul mare.",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Una coppia festeggia il proprio matrimonio su una spiaggia di Aruba",
  },
];

export default function WhyArubaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/5a23170b-58df-46b2-b401-1d0a35a9a7b5/mp4/00_Homepage_BGvideo_16x9.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Perché Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Il fascino di Aruba viene da più del semplice sole. Sono le persone
                accoglienti, l&apos;abbondanza di giornate di sole (più di qualsiasi altra isola
                caraibica) e l&apos;Effetto Aruba: una travolgente sensazione di calore e
                felicità che sentirai in tutta l&apos;isola.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Aruba Effect */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              L&apos;Effetto Aruba
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Persone felici: dai locali ai visitatori abituali. Cosa rende speciale Aruba?
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
              Sette motivi, un&apos;isola
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Scopri l&apos;Effetto Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Ogni visitatore trova la propria ragione per innamorarsi di Aruba. Scegli la tua
              qui sotto per attività reali, persone reali e uno spunto per un itinerario completo.
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
                Vivi <span className="text-primary">l&apos;Effetto Aruba</span> in prima persona
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Un&apos;isola felice, sette motivi per visitarla. Inizia a trasformare questa pagina
                in un viaggio.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/it/plan-your-visit">
                    Inizia a Pianificare il Tuo Viaggio <ArrowRight className="size-4" />
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
