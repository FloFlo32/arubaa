import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Home, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Offerte Vacanza e Viaggio ad Aruba",
  description:
    "Risparmia sulla tua prossima vacanza ad Aruba con offerte flessibili e convenienti.",
};

const featured = [
  {
    title: "One Happy Workation",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Una donna in piedi da sola su un terreno sabbioso che si affaccia sul mare ad Aruba",
    description:
      "Ad Aruba ci occupiamo di felicità, quindi offriamo ai visitatori la possibilità di lavorare direttamente dal paradiso.",
  },
  {
    title: "Requisiti di Viaggio",
    src: "/ingested/arubaa/img-030.webp",
    alt: "Visitatori in arrivo su una spiaggia di Aruba, pronti per il loro viaggio",
    description:
      "Ecco alcuni dettagli da ricordare quando si viaggia da e per Aruba. Scopri di più sulla nuova tassa di sostenibilità di $20.",
  },
];

const savings = [
  {
    icon: Home,
    title: "Hotel e resort",
    body: "Risparmi sulle tariffe delle camere nei fantastici hotel e resort di Aruba, tutto l'anno.",
  },
  {
    icon: Briefcase,
    title: "Soggiorni prolungati",
    body: "Opzioni di workation flessibili per i visitatori che vogliono più di una settimana in paradiso.",
  },
  {
    icon: Heart,
    title: "Matrimoni e lune di miele",
    body: "Pacchetti per matrimoni e lune di miele senza pensieri, pensati per i tuoi giorni più felici.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Risparmia di più, preoccupati di meno"
          title="Offerte Vacanza e Viaggio ad Aruba"
          body="Ci sono tanti modi per risparmiare sulla tua prossima vacanza ad Aruba. Accogliamo di nuovo i visitatori con flessibilità, serenità e convenienza."
          src="/ingested/arubaa/img-039.webp"
          alt="Persone in spiaggia che si godono un pomeriggio di sole sulla costa di Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Offerte in evidenza</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Offerta"
                  title={deal.title}
                  description={deal.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Sempre disponibile
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Modi per risparmiare, tutto l&apos;anno</h2>
            <p className="mt-4 text-muted-foreground">
              Oltre alle offerte a tempo limitato, Aruba mantiene una serie di programmi di
              risparmio sempre aperti a ogni visitatore.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {savings.map((s) => (
              <RevealItem
                key={s.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Pronto a bloccare la tua tariffa?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Approfitta dell&apos;offerta di oggi prima che finisca e inizia il conto alla rovescia
                verso One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/it/book-now">
                    Prenota Ora <ArrowRight className="size-4" />
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
