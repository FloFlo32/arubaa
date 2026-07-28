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
  title: "Aruba Urlaubs- und Reiseangebote",
  description:
    "Sparen Sie bei Ihrem nächsten Aruba-Urlaub mit flexiblen, erschwinglichen Angeboten.",
};

const featured = [
  {
    title: "One Happy Workation",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Eine Frau steht allein auf sandigem Terrain mit Blick auf das Meer in Aruba",
    description:
      "In Aruba sind wir im Geschäft des Glücks, deshalb bieten wir Besuchern die Chance, direkt aus dem Paradies zu arbeiten.",
  },
  {
    title: "Reisebestimmungen",
    src: "/ingested/arubaa/img-030.webp",
    alt: "Besucher kommen an einem Strand in Aruba an, bereit für ihre Reise",
    description:
      "Hier sind einige Details, die Sie bei der Reise nach und von Aruba beachten sollten. Erfahren Sie mehr über die neue Nachhaltigkeitsgebühr von 20 $.",
  },
];

const savings = [
  {
    icon: Home,
    title: "Hotels & Resorts",
    body: "Ersparnisse bei den Zimmerpreisen in Arubas fantastischen Hotels und Resorts, das ganze Jahr über.",
  },
  {
    icon: Briefcase,
    title: "Verlängerte Aufenthalte",
    body: "Flexible Workation-Optionen für Besucher, die mehr als eine Woche im Paradies verbringen möchten.",
  },
  {
    icon: Heart,
    title: "Hochzeiten & Flitterwochen",
    body: "Sorgenfreie Hochzeits- und Flitterwochenpakete, gemacht für Ihre glücklichsten Tage.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Mehr sparen, weniger sorgen"
          title="Aruba Urlaubs- und Reiseangebote"
          body="Es gibt so viele Möglichkeiten, bei Ihrem nächsten Aruba-Urlaub zu sparen. Wir begrüßen Besucher mit Flexibilität, Gelassenheit und Erschwinglichkeit zurück."
          src="/ingested/arubaa/img-039.webp"
          alt="Strandbesucher genießen einen sonnigen Nachmittag an der Küste Arubas"
        />

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Ausgewählte Angebote</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Angebot"
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
              <ShieldCheck className="size-3.5" /> Immer verfügbar
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Sparmöglichkeiten, das ganze Jahr über</h2>
            <p className="mt-4 text-muted-foreground">
              Neben zeitlich begrenzten Angeboten bietet Aruba dauerhafte Sparprogramme, die
              jedem Besucher offen stehen.
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
                Bereit, Ihren Preis zu sichern?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Sichern Sie sich das heutige Angebot, bevor es weg ist, und beginnen Sie den
                Countdown nach One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/de/book-now">
                    Jetzt Buchen <ArrowRight className="size-4" />
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
