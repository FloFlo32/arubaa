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
  title: "Unsere Insel",
  description:
    "19,6 Meilen aus Wüste, Küste und Kultur: Lernen Sie die Geografie und Geschichte von Aruba kennen.",
};

const facts = [
  {
    icon: Ruler,
    label: "19,6 x 6 Meilen",
    body: "Nur 19,6 Meilen lang und sechs Meilen breit ist unser wunderschönes Stückchen puderweißer Sand ein vom Meer geformtes Paradies.",
  },
  {
    icon: MapPin,
    label: "Südliche Karibik",
    body: "Aruba ist eine kleine Insel in der südlichen Karibik, etwa 15 Meilen nördlich von Venezuela.",
  },
  {
    icon: Compass,
    label: "Außerhalb des Hurrikangürtels",
    body: "Wir liegen knapp außerhalb des Hurrikangürtels, ein weiterer Grund, warum unsere sonnigen Tage so verlässlich sind.",
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
              <Badge variant="accent">Unsere glückliche Insel</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Unsere Insel
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-foreground/80">
                Haben Sie sich je gefragt: Wo liegt Aruba? In den warmen Gewässern
                der südlichen Karibik, knapp außerhalb des Hurrikangürtels, genau
                dort. Unsere glückliche Insel.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Nur 19,6 Meilen lang und sechs Meilen breit ist unser
                wunderschönes Stückchen puderweißer Sand ein vom Meer geformtes
                Paradies: eine Insel, die Sie mit warmen, sonnigen Tagen und noch
                wärmeren, sonnigeren Menschen empfängt. Im Süden und Westen ist
                Aruba voller Resorts, Shopping und Nightlife. Im Norden formen
                Wellen und Wind schroffe Küsten und Kalksteinklippen. Und im
                Herzen der Insel bewahrt der Arikok-Nationalpark eine weite
                Landschaft aus Wüstensand, hoch aufragenden Kakteen und
                Naturwundern.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="Eine Familie geht Hand in Hand an einem Strand in Aruba"
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
              Inselfakten
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Das Wichtigste, bevor Sie landen
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
                Bei der Planung eines Karibikurlaubs fragen Sie sich vielleicht,
                wie viele exotische Tiere Sie zu Gesicht bekommen werden. Wenn
                dieser Urlaub nach Aruba geht, lautet die Antwort: sehr viele.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Regions */}
        <section id="regions" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Regionen
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Von trockener Wüste bis zur niederländischen Kolonialhauptstadt
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Von unserer trockenen Wüste bis zu unserer niederländischen
              Kolonialhauptstadt macht jeder Teil Arubas uns anders als jede
              andere Karibikinsel.
            </p>
          </Reveal>
          <div className="mt-4 divide-y divide-border">
            <SplitRow
              icon={MapPin}
              eyebrow="Süden & Westen"
              title="Resorts, Shopping und Nightlife"
              body="Die Süd- und Westküste sind voller Resorts, Boutiquen und Strandbars, alle mit Blick auf das ruhigste Wasser der Insel."
              src="/ingested/arubaa/img-029.webp"
              alt="Luftaufnahme von Strandbesuchern, die im türkisblauen Wasser Arubas planschen"
            />
            <SplitRow
              icon={Compass}
              eyebrow="Nordküste"
              title="Schroffe, vom Wind geformte Küsten"
              body="Wellen und Wind formen die Nordküste zu Kalksteinklippen, Meereshöhlen und natürlichen Felsbögen."
              src="/ingested/arubaa/img-027.webp"
              alt="Ein Paar erkundet eine Meereshöhle und einen natürlichen Felsbogen an Arubas Nordküste"
              reverse
            />
            <SplitRow
              icon={Landmark}
              eyebrow="Das Inland"
              title="Wüstensand und hoch aufragende Kakteen"
              body="Im Herzen der Insel bewahrt der Arikok-Nationalpark eine Landschaft aus Wüstenpfaden, Kakteen und ruhigem Ackerland."
              src="/ingested/arubaa/img-033.webp"
              alt="Eine Gruppe von Freunden versammelt an einem Strand in Aruba"
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
                  alt="Eine Familie geht Hand in Hand an der Küste Arubas"
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
                Überliefert
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Geschichte & Kultur
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Spuren der Geschichte und Kultur Arubas finden Sie an
                Höhlenwänden, an pastellfarbenen Fassaden und in den Gesichtern
                unserer glücklichen Menschen.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 360 Map */}
        <section id="map" className="container-px mx-auto max-w-4xl pt-4 pb-4 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              360-Karte
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Die ganze Insel auf einen Blick
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Ein interaktiver Überblick über Aruba, von den Resorts im Süden
              bis zur wilden Nordküste.
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
                Bereit, es <span className="text-primary">selbst</span> zu erleben?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Jede Region Arubas ist näher, als Sie denken.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/de/plan-your-visit">
                    Besuch Planen <ArrowRight className="size-4" />
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
