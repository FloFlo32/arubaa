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
  title: "Aruba Vakantie- & Reisaanbiedingen",
  description:
    "Bespaar op je volgende Aruba-vakantie met flexibele, betaalbare deals en aanbiedingen.",
};

const featured = [
  {
    title: "One Happy Workation",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Een vrouw staat alleen op zanderig terrein met uitzicht op de zee in Aruba",
    description:
      "Op Aruba zijn we in het geluksvak, dus bieden we bezoekers de kans om vanuit het paradijs te werken.",
  },
  {
    title: "Reisvereisten",
    src: "/ingested/arubaa/img-030.webp",
    alt: "Bezoekers arriveren op een strand van Aruba, klaar voor hun reis",
    description:
      "Hier zijn een aantal details om te onthouden wanneer je naar en van Aruba reist. Lees meer over de nieuwe duurzaamheidsheffing van $20.",
  },
];

const savings = [
  {
    icon: Home,
    title: "Hotels & resorts",
    body: "Bespaar op kamerprijzen bij Aruba's geweldige hotels en resorts, het hele jaar rond.",
  },
  {
    icon: Briefcase,
    title: "Langere verblijven",
    body: "Flexibele workation-opties voor bezoekers die meer dan een week in het paradijs willen.",
  },
  {
    icon: Heart,
    title: "Bruiloften & huwelijksreizen",
    body: "Zorgeloze bruilofts- en huwelijksreispakketten, gemaakt voor je blijste dagen.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Bespaar meer, maak je minder zorgen"
          title="Aruba Vakantie- & Reisaanbiedingen"
          body="Er zijn zoveel manieren om te besparen op je volgende Aruba-vakantie. We verwelkomen bezoekers terug met flexibiliteit, rust en betaalbaarheid."
          src="/ingested/arubaa/img-039.webp"
          alt="Strandgangers genieten van een zonnige middag aan de kust van Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Uitgelichte aanbiedingen</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Aanbieding"
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
              <ShieldCheck className="size-3.5" /> Altijd beschikbaar
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Manieren om te besparen, het hele jaar door</h2>
            <p className="mt-4 text-muted-foreground">
              Naast tijdelijke aanbiedingen houdt Aruba een vaste set bespaarprogramma&apos;s
              open voor elke bezoeker.
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
                Klaar om je tarief vast te leggen?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Grijp de aanbieding van vandaag voordat die verdwijnt en begin met
                aftellen naar One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/nl/book-now">
                    Nu Boeken <ArrowRight className="size-4" />
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
