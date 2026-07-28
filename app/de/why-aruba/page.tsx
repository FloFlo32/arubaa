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
  title: "Warum Aruba",
  description:
    "Entdecken Sie den Aruba-Effekt: Abenteuer, Romantik, Kultur, Wellness, Essen, Familienspaß und Hochzeiten auf One Happy Island.",
};

const effectStats = [
  { icon: Plane, label: "Einfach", body: "Über 100 Direktflüge von den größten Städten der USA und Kanadas." },
  { icon: Globe, label: "Praktisch", body: "Vier gesprochene Sprachen und mehr Sonnentage als jede andere Karibikinsel." },
  { icon: MapPin, label: "Entdeckbar", body: "Klein, sicher und modern, sodass die gesamte Insel zu Ihrem Spielplatz wird." },
];

const effects = [
  {
    icon: Compass,
    title: "Abenteuer",
    href: "/de/why-aruba/adventure",
    teaser: "Höhlenbögen, Offroad-Pfade und windsurftaugliche Küsten für Neugierige.",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Zwei Menschen paddeln gemeinsam vor der Küste Arubas im Kajak",
  },
  {
    icon: Heart,
    title: "Romantik",
    href: "/de/why-aruba/romance",
    teaser: "Spaziergänge bei Sonnenuntergang, private Abendessen und stille Buchten, die für zwei gemacht sind.",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Ein Paar steht zusammen neben einer Palme an einem Strand in Aruba",
  },
  {
    icon: Users,
    title: "Kultur",
    href: "/de/why-aruba/culture",
    teaser: "Hundert Nationalitäten, eine Insel, endlose Geschichten zu hören.",
    src: "/ingested/arubaa/img-060.webp",
    alt: "Eine Gruppe von Freunden versammelt sich an einem Strand in Aruba",
  },
  {
    icon: Flower2,
    title: "Wellness",
    href: "/de/why-aruba/wellness",
    teaser: "Stille an der Klippe und langsamer, ruhiger Luxus in Ihrem eigenen Tempo.",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Eine Frau steht allein auf sandigem Gelände mit Blick auf das Meer in Aruba",
  },
  {
    icon: Utensils,
    title: "Essen & Trinken",
    href: "/de/why-aruba/eat-and-drink",
    teaser: "Hundert Geschmacksrichtungen auf einer Insel, von Rum-Hütten bis zur Gourmetküche.",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Freunde halten gemeinsam Weingläser im Freien",
  },
  {
    icon: Baby,
    title: "Familien",
    href: "/de/why-aruba/families",
    teaser: "Ruhiges, flaches Wasser und entspannte Tage für jedes Alter.",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Zwei Jungen laufen gemeinsam an einem Strand in Aruba",
  },
  {
    icon: Gem,
    title: "Hochzeiten",
    href: "/de/why-aruba/weddings",
    teaser: "Barfußzeremonien und Eheversprechen zur goldenen Stunde am Meer.",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Ein Paar feiert seine Hochzeit an einem Strand in Aruba",
  },
];

export default function WhyArubaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
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
                Warum Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Arubas Charme kommt von mehr als nur Sonnenschein. Es sind die
                freundlichen Menschen, die Fülle an Sonnentagen (mehr als auf jeder
                anderen Karibikinsel) und der Aruba-Effekt: ein überwältigendes Gefühl
                von Wärme und Glück, das Sie auf der ganzen Insel spüren werden.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Aruba Effect */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Der Aruba-Effekt
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Glückliche Menschen: von Einheimischen bis zu Stammgästen. Was macht Aruba besonders?
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
              Sieben Gründe, eine Insel
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Entdecken Sie den Aruba-Effekt
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Jeder Besucher findet seinen eigenen Grund, sich in Aruba zu verlieben.
              Wählen Sie unten Ihren Grund für echte Aktivitäten, echte Menschen und
              einen kompletten Start für Ihre Reiseroute.
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
                Erleben Sie den <span className="text-primary">Aruba-Effekt</span> selbst
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Eine glückliche Insel, sieben Gründe für einen Besuch. Verwandeln Sie
                diese Seite in eine Reise.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/de/plan-your-visit">
                    Reise Jetzt Planen <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/de/deals">Heutige Angebote Ansehen</Link>
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
