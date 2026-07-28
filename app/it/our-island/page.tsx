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
  title: "La Nostra Isola",
  description:
    "31,5 km di deserto, costa e cultura: conosci la geografia e la storia di Aruba.",
};

const facts = [
  {
    icon: Ruler,
    label: "31,5 x 10 km",
    body: "Lunga solo 31,5 km e larga 10 km, il nostro splendido lembo di sabbia bianca e soffice è un paradiso modellato dal mare.",
  },
  {
    icon: MapPin,
    label: "Caraibi meridionali",
    body: "Aruba è una piccola isola nel mar dei Caraibi meridionale, a circa 24 km a nord del Venezuela.",
  },
  {
    icon: Compass,
    label: "Fuori dalla fascia degli uragani",
    body: "Ci troviamo appena fuori dalla fascia degli uragani, un motivo in più per cui le nostre giornate di sole sono così affidabili.",
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
              <Badge variant="accent">La nostra isola felice</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                La Nostra Isola
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-foreground/80">
                Ti sei mai chiesto: dov&apos;è Aruba? Nelle acque calde dei Caraibi meridionali,
                appena fuori dalla fascia degli uragani, ecco dove. La nostra isola felice.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Lunga solo 31,5 km e larga 10 km, il nostro splendido lembo di
                sabbia bianca e soffice è un paradiso modellato dal mare: un&apos;isola che
                ti abbraccia con giornate calde e soleggiate e persone ancora più calde e
                solari. A sud e a ovest, Aruba è viva di resort, shopping e vita notturna.
                A nord, onde e vento scolpiscono coste selvagge e scogliere calcaree.
                E nel nostro cuore, il Parco Nazionale Arikok protegge un vasto
                paesaggio di sabbia desertica, cactus imponenti e meraviglie naturali.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="Una famiglia che cammina insieme mano nella mano su una spiaggia di Aruba"
                  width={900}
                  height={1050}
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[6/7] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Island Facts */}
        <section id="island-facts" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Curiosità Sull&apos;isola
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Le basi, prima di atterrare
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
                Quando pianifichi una vacanza ai Caraibi, potresti chiederti quanti animali
                esotici avvisterai. Quando quella vacanza è ad Aruba, la risposta è:
                moltissimi.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Regions */}
        <section id="regions" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Regioni
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Dal deserto secco alla capitale coloniale olandese
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Dal nostro deserto secco alla nostra capitale coloniale olandese, ogni parte di
              Aruba ci rende diversi da qualsiasi altra isola caraibica.
            </p>
          </Reveal>
          <div className="mt-4 divide-y divide-border">
            <SplitRow
              icon={MapPin}
              eyebrow="Sud e Ovest"
              title="Resort, shopping e vita notturna"
              body="Le coste sud e ovest sono vivaci di resort, boutique e bar sulla spiaggia, tutti rivolti verso le acque più calme dell'isola."
              src="/ingested/arubaa/img-029.webp"
              alt="Vista aerea di persone in spiaggia che sguazzano nell'acqua turchese di Aruba"
            />
            <SplitRow
              icon={Compass}
              eyebrow="Costa Nord"
              title="Coste selvagge, scolpite dal vento"
              body="Onde e vento scolpiscono la costa nord in scogliere calcaree, grotte marine e archi di roccia naturali."
              src="/ingested/arubaa/img-027.webp"
              alt="Una coppia esplora una grotta marina e un arco di roccia naturale sulla costa nord di Aruba"
              reverse
            />
            <SplitRow
              icon={Landmark}
              eyebrow="L'interno"
              title="Sabbia desertica e cactus imponenti"
              body="Nel cuore dell'isola, il Parco Nazionale Arikok protegge un paesaggio di sentieri desertici, cactus e terreni agricoli tranquilli."
              src="/ingested/arubaa/img-033.webp"
              alt="Un gruppo di amici riuniti su una spiaggia di Aruba"
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
                  alt="Una famiglia cammina insieme mano nella mano lungo la costa arubana"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Landmark className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Trasmesso nel tempo
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Storia E Cultura
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Troverai tracce della storia e della cultura di Aruba sulle pareti
                delle grotte, sulle facciate pastello e sui volti della nostra gente felice.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 360 Map */}
        <section id="map" className="container-px mx-auto max-w-4xl pt-4 pb-4 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Mappa 360
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Guarda l&apos;intera isola in un solo colpo d&apos;occhio
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Una panoramica interattiva di Aruba, dai resort a sud alla selvaggia
              costa nord.
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
                Pronto a vederla con i tuoi <span className="text-primary">occhi</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Ogni regione di Aruba è più vicina di quanto pensi.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/it/plan-your-visit">
                    Pianifica La Tua Visita <ArrowRight className="size-4" />
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
