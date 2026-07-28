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
  title: "Semester- Och Reseerbjudanden Till Aruba",
  description:
    "Spara på din nästa Aruba-semester med flexibla, prisvärda erbjudanden.",
};

const featured = [
  {
    title: "One Happy Workation",
    src: "/ingested/arubaa/img-031.webp",
    alt: "En kvinna står ensam på sandig mark med utsikt över havet på Aruba",
    description:
      "På Aruba är vi i lyckans bransch, så vi erbjuder besökare chansen att arbeta rakt från paradiset.",
  },
  {
    title: "Resekrav",
    src: "/ingested/arubaa/img-030.webp",
    alt: "Besökare anländer till en strand på Aruba, redo för sin resa",
    description:
      "Här är några saker att komma ihåg när du reser till och från Aruba. Läs mer om den nya hållbarhetsavgiften på 20 dollar.",
  },
];

const savings = [
  {
    icon: Home,
    title: "Hotell & resorts",
    body: "Rabatterade rumspriser på Arubas fantastiska hotell och resorts, året runt.",
  },
  {
    icon: Briefcase,
    title: "Längre vistelser",
    body: "Flexibla workation-alternativ för besökare som vill ha mer än en vecka i paradiset.",
  },
  {
    icon: Heart,
    title: "Bröllop & smekmånader",
    body: "Bekymmersfria bröllops- och smekmånadspaket, byggda för dina lyckligaste dagar.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Spara mer, oroa dig mindre"
          title="Semester- Och Reseerbjudanden Till Aruba"
          body="Det finns så många sätt för dig att spara på din nästa Aruba-semester. Vi välkomnar tillbaka besökare med flexibilitet, lugn och prisvärdhet."
          src="/ingested/arubaa/img-039.webp"
          alt="Badgäster njuter av en solig eftermiddag på Arubas strandlinje"
        />

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Utvalda erbjudanden</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Erbjudande"
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
              <ShieldCheck className="size-3.5" /> Alltid tillgängligt
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Sätt att spara, året runt</h2>
            <p className="mt-4 text-muted-foreground">
              Utöver tidsbegränsade erbjudanden håller Aruba en stående uppsättning
              sparprogram öppna för alla besökare.
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
                Redo att låsa in ditt pris?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Ta dagens erbjudande innan det är slut och börja räkna ner till One Happy
                Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/se/book-now">
                    Boka Nu <ArrowRight className="size-4" />
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
