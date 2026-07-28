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
  title: "Ons Eiland",
  description:
    "19,6 mijl woestijn, kust en cultuur: leer de geografie en geschiedenis van Aruba kennen.",
};

const facts = [
  {
    icon: Ruler,
    label: "19,6 x 6 mijl",
    body: "Slechts 19,6 mijl lang en zes mijl breed, ons prachtige stukje poederwit zand is een paradijs gevormd door de zee.",
  },
  {
    icon: MapPin,
    label: "Zuidelijk Caribisch gebied",
    body: "Aruba is een klein eiland in de zuidelijke Caribische Zee, ongeveer 15 mijl ten noorden van Venezuela.",
  },
  {
    icon: Compass,
    label: "Buiten de orkaangordel",
    body: "Wij liggen net buiten de orkaangordel, nog een reden waarom onze zonnige dagen zo betrouwbaar zijn.",
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
              <Badge variant="accent">Ons blije eiland</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Ons Eiland
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-foreground/80">
                Vraag je jezelf ooit af: waar ligt Aruba? In de warme wateren van het
                zuidelijke Caribisch gebied, net buiten de orkaangordel, daar. Ons blije
                eiland.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Slechts 19,6 mijl lang en zes mijl breed, ons prachtige stukje poederwit
                zand is een paradijs gevormd door de zee: een eiland dat je
                omarmt met zonnige dagen en nog zonnigere mensen. In het zuiden en westen
                is Aruba levendig met resorts, winkels en nachtleven. In het noorden
                beeldhouwen golven en wind ruige kustlijnen en kalkstenen kliffen. En in
                ons hart beschermt Arikok National Park een uitgestrekt landschap van
                woestijnzand, torenhoge cactussen en natuurwonderen.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="Een familie loopt samen hand in hand op een strand van Aruba"
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
              Eilandfeiten
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              De basis, voordat je landt
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
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                <Fish className="size-4" />
              </span>
              <p className="text-pretty text-sm text-muted-foreground">
                Bij het plannen van een Caribische vakantie vraag je je misschien af
                hoeveel exotische dieren je zult spotten. Als die vakantie naar Aruba
                gaat, is het antwoord: heel veel.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Regions */}
        <section id="regions" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Regio&apos;s
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Van droge woestijn tot Nederlandse koloniale hoofdstad
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Van onze droge woestijn tot onze Nederlandse koloniale hoofdstad, elk deel
              van Aruba maakt ons anders dan elk ander Caribisch eiland.
            </p>
          </Reveal>
          <div className="mt-4 divide-y divide-border">
            <SplitRow
              icon={MapPin}
              eyebrow="Zuid & West"
              title="Resorts, winkelen en nachtleven"
              body="De zuid- en westkust zijn levendig met resorts, boetiekjes en strandbars, allemaal gericht op het rustigste water van het eiland."
              src="/ingested/arubaa/img-029.webp"
              alt="Luchtfoto van strandgangers die in het turquoise water van Aruba lopen"
            />
            <SplitRow
              icon={Compass}
              eyebrow="Noordkust"
              title="Ruige, door de wind gebeeldhouwde kusten"
              body="Golven en wind beeldhouwen de noordkust tot kalkstenen kliffen, zeegrotten en natuurlijke rotsbogen."
              src="/ingested/arubaa/img-027.webp"
              alt="Een koppel verkent een zeegrot en natuurlijke rotsboog aan de noordkust van Aruba"
              reverse
            />
            <SplitRow
              icon={Landmark}
              eyebrow="Het binnenland"
              title="Woestijnzand en torenhoge cactussen"
              body="In het hart van het eiland beschermt Arikok National Park een landschap van woestijnpaden, cactussen en rustig landbouwland."
              src="/ingested/arubaa/img-033.webp"
              alt="Een groep vrienden verzameld op een strand van Aruba"
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
                  alt="Een familie loopt samen hand in hand langs de Arubaanse kustlijn"
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
                Doorgegeven
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Geschiedenis & Cultuur
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Je vindt sporen van Aruba&apos;s geschiedenis en cultuur op grotwanden,
                pastelkleurige gevels, en de gezichten van onze blije mensen.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 360 Map */}
        <section id="map" className="container-px mx-auto max-w-4xl pt-4 pb-4 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              360-Kaart
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Bekijk het hele eiland in één keer
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Een interactief overzicht van Aruba, van de resorts in het zuiden tot de
              ruige noordkust.
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
                Klaar om het zelf te <span className="text-primary">zien</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Elke regio van Aruba is dichterbij dan je denkt.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/nl/plan-your-visit">
                    Plan Je Bezoek <ArrowRight className="size-4" />
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
