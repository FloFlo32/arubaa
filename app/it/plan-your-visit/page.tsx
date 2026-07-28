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
  title: "Pianifica La Tua Visita ad Aruba",
  description:
    "Tutto quello che serve per pianificare la tua vacanza ad Aruba: hotel, affitti, come arrivare e come muoversi.",
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
              className="aspect-[5/4] w-full object-cover object-center"
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
    title: "Multiproprietà",
    body: "Possiedi un pezzo dell'isola. Proprietà in multiproprietà per gli ospiti che continuano a tornare.",
    span: "md:col-span-2",
  },
  {
    id: "getting-to-aruba",
    icon: Plane,
    title: "Come Arrivare Ad Aruba",
    body: "Arrivare ad Aruba da quasi ogni parte del mondo è un'esperienza semplice e senza stress.",
  },
  {
    id: "getting-around",
    icon: Car,
    title: "Muoversi Ad Aruba",
    body: "Dalla nostra vivace capitale ai tranquilli paesini costieri, dalle spiagge incontaminate al deserto selvaggio, è facile andare ovunque.",
  },
  {
    id: "guest-services",
    icon: LifeBuoy,
    title: "Servizi Per Gli Ospiti",
    body: "Supporto e assistenza ogni volta che ne hai bisogno, prima di atterrare e mentre sei qui.",
  },
  {
    id: "tips",
    icon: Info,
    title: "Consigli Per I Visitatori",
    body: "Consigli locali su tempistiche, meteo e come sfruttare al meglio ogni giornata.",
    span: "md:col-span-2",
  },
];

const tips = [
  "Sole quasi tutti i giorni dell'anno: porta strati leggeri, non ombrelli.",
  "Gli alisei si intensificano nel pomeriggio, perfetti per il windsurf.",
  "Olandese, papiamento, spagnolo e inglese sono tutti ampiamente parlati.",
  "L'acqua del rubinetto è sicura da bere in tutta l'isola.",
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
                Pianifica in anticipo
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Pianifica La Tua Visita ad Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Pianificare la tua vacanza ad Aruba è facile, specialmente con un&apos;intera isola
                di volti amichevoli felici di condividere suggerimenti. Trasporti comodi, un
                arrivo sicuro sull&apos;isola e resort confortevoli rendono semplice relax ed
                esplorazione.
              </p>
            </Reveal>
          </div>
        </section>

        <SplitRow
          id="hotels-resorts"
          icon={BedDouble}
          eyebrow="Dove alloggiare"
          title="Hotel E Resort"
          body="Da rifugi boutique a torri sulla spiaggia, gli hotel e i resort di Aruba vanno da intimi a servizio completo, tutti a portata del mare."
          src="/ingested/arubaa/img-057.webp"
          alt="Una coppia chiacchiera insieme a bordo piscina in un resort ad Aruba"
        />

        <SplitRow
          id="vacation-rentals"
          icon={Home}
          eyebrow="Spazio per distendersi"
          title="Case Vacanza"
          body="Per soggiorni più lunghi o gruppi più numerosi, le case vacanza ti danno una base con cucina, più spazio e un ritmo più lento."
          src="/ingested/arubaa/img-036.webp"
          alt="Una coppia si rilassa insieme sulle rocce costiere vicino alla propria casa vacanza"
          reverse
        />

        {/* All-Inclusive */}
        <section id="all-inclusive" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Ticket className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Un prezzo, tutto incluso
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Tutto Incluso
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Pacchetti vacanza che comprendono pasti, bevande e attività, così
              l&apos;unica decisione rimasta è quale sdraio scegliere.
            </p>
          </Reveal>
          <div className="mt-10">
            <ImageCard
              src="/ingested/arubaa/img-053.webp"
              alt="Gli ospiti saltano insieme in una piscina di un resort"
              title="La vita da resort, tutta compresa"
              description="Pasti, bevande e attività riuniti in un unico soggiorno senza pensieri."
              className="mx-auto max-w-xl"
              ratio="aspect-[16/9]"
            />
          </div>
        </section>

        <SplitRow
          id="by-cruise"
          icon={Ship}
          eyebrow="Una giornata sull'isola"
          title="Aruba In Crociera"
          body="Le navi da crociera attraccano proprio a Oranjestad, mettendo spiagge, shopping e ristorazione a poca distanza a piedi o in taxi dal molo."
          src="/ingested/arubaa/img-051.webp"
          alt="Una sposa e uno sposo si tengono per mano su una spiaggia di Aruba"
        />

        {/* Aruba Vacations */}
        <section id="vacations" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Palmtree className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Pianificazione completa
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Vacanze Ad Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Risorse complete per pianificare la vacanza, dalla prenotazione del soggiorno a
              riempire ogni giorno una volta arrivati.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
            <ImageCard
              src="/ingested/arubaa/img-054.webp"
              alt="Un ospite fluttua in una piscina di un resort"
              title="Giornate in piscina"
              description="Piscine di resort costruite per non fare assolutamente nulla, di proposito."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Una coppia chiacchiera a bordo piscina in un resort"
              title="Serate a bordo piscina"
              description="Drink al tramonto a pochi passi dalla tua stanza."
            />
            <ImageCard
              src="/ingested/arubaa/img-055.webp"
              alt="Gli ospiti prendono il sole insieme a bordo piscina in un resort"
              title="Fughe di gruppo"
              description="Tanto spazio per tutto il gruppo per distendersi."
            />
          </AutoSlider>
        </section>

        {/* Logistics bento: Timeshares / Getting to / Getting around / Guest services / Tips */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              La logistica, gestita
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Tutto quello che ti serve per arrivare, muoverti e ricevere aiuto lungo il percorso.
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
              <h3 className="text-xl font-semibold">Alcune cose utili da sapere</h3>
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
                Il tuo viaggio su <span className="text-primary">One Happy Island</span> inizia qui
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Blocca le tue date, poi guarda iniziare il conto alla rovescia.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/it/book-now">
                    Prenota Ora <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/it/live-webcams">Guarda le Webcam Live</Link>
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
