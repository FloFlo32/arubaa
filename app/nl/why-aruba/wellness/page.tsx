import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, Sparkles, Wind, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Welzijn op Aruba",
  description:
    "Rust aan de kliffen en trage, stille luxe: hoe je loskoppelt en jezelf herontdekt op Aruba.",
};

const highlights = [
  {
    icon: Sparkles,
    title: "Trage, stille luxe",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Een vrouw in een badjas relaxt bij een bad met kaarslicht",
    description:
      "Spa-rituelen hier leunen op de eigen materialen van het eiland: aloë, zeezout en uren die zich uitrekken in plaats van haasten.",
  },
  {
    icon: Wind,
    title: "Rust aan de kliffen",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Een vrouw staat alleen op zanderig terrein met uitzicht op de zee in Aruba",
    description:
      "De kliffen van het eiland kijken recht in de passaatwinden. Tien rustige minuten daarboven doen meer dan een uur ergens anders.",
  },
  {
    icon: Sunrise,
    title: "Trage ochtenden aan het water",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Een vrouw relaxt in een strandligstoel bij zonsondergang in Aruba",
    description:
      "Geen wekker nodig. Aruba's ochtenden zijn voor een trage koffie, een langere zwempartij en een schema dat tot de middag kan wachten.",
  },
  {
    icon: Flower2,
    title: "Samen loskoppelen",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Een man en vrouw staan samen bij een palmboom op een strand van Aruba",
    description:
      "Welzijn hier is niet standaard iets voor alleen. Trage dagen aan het water zijn net zo makkelijk te delen als alleen te doorbrengen.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Loskoppelen"
          title="Welzijn"
          body="Aruba is gemaakt om je te helpen loskoppelen van de wereld en jezelf te herontdekken. Minder afleidingen, meer zon, en een eiland klein genoeg dat vertragen het hele punt is."
          src="/ingested/arubaa/img-031.webp"
          alt="Een vrouw staat alleen op zanderig terrein met uitzicht op de zee in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Ingebouwde rust
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Is het echt vakantie als je er daarna nog een nodig hebt?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Goed nieuws: op Aruba heb je dat niet. Constante zon, lage luchtvochtigheid
              en een eiland gebouwd rond het water maken rust de standaard, niet iets wat
              je moet inplannen.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2" stagger={0.06}>
            {highlights.map((h) => (
              <RevealItem key={h.title}>
                <ImageCard
                  src={h.src}
                  alt={h.alt}
                  eyebrow={h.title}
                  title={h.title}
                  description={h.description}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Een paar manieren om af te schakelen
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-039.webp"
              alt="Twee mensen zitten samen op een strand van Aruba"
              title="Strandyoga bij zonsopgang"
              description="Rustige stretches in het zand voordat het eiland wakker wordt."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Een koppel praat samen bij het zwembad van een resort in Aruba"
              title="Zwembaddagen, offline"
              description="Resortzwembaden gemaakt om er expres helemaal niets te doen."
            />
            <ImageCard
              src="/ingested/arubaa/img-036.webp"
              alt="Een koppel relaxt samen op de kustrotsen van Aruba"
              title="Rondslenteren bij getijdenpoelen"
              description="Trage wandelingen langs de rotsen, zonder ergens in het bijzonder te moeten zijn."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Klaar om te vertragen?</h2>
            <p className="max-w-md text-muted-foreground">
              Bekijk all-inclusive verblijven en resortopties gemaakt voor rust.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/nl/plan-your-visit#all-inclusive">
                  Bekijk All-Inclusive Verblijven <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/nl/why-aruba">Terug Naar Waarom Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
