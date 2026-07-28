import type { Metadata } from "next";
import Link from "next/link";
import { Baby, ArrowRight, Waves, Sun, Users2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Familievakanties op Aruba",
  description:
    "Rustig, ondiep water en gemakkelijke dagen voor elke leeftijd: waarom Aruba werkt voor familievakanties.",
};

const highlights = [
  {
    icon: Waves,
    title: "Rustig, ondiep water",
    src: "/ingested/arubaa/img-070.webp",
    alt: "Een volwassene draagt een kind op een strand van Aruba",
    description:
      "De luwe stranden van het eiland zijn befaamd rustig en ondiep, wat betekent meer tijd zwemmen en minder tijd nerveus naar de golven kijken.",
  },
  {
    icon: Sun,
    title: "Gemakkelijke dagen, weinig stress",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Twee jongens rennen samen op een strand van Aruba",
    description:
      "Korte vluchten, vlak terrein en een klein oppervlak betekenen minder tijd in transit en meer tijd om de kinderen zichzelf moe te laten rennen.",
  },
  {
    icon: Baby,
    title: "Gemaakt voor de kleinste gasten",
    src: "/ingested/arubaa/img-072.webp",
    alt: "Een volwassene houdt een baby vast op een strand van Aruba",
    description:
      "Warm, zacht water en zacht zand maken de stranden van Aruba echt gemakkelijk met een baby of peuter, niet alleen zo bedacht in de marketing.",
  },
  {
    icon: Users2,
    title: "Voor elke generatie",
    src: "/ingested/arubaa/img-074.webp",
    alt: "Een familie houdt elkaars hand samen vast op een strand van Aruba bij zonsondergang",
    description:
      "Grootouders, ouders en kinderen vinden hier allemaal hun eigen tempo: iemand wil altijd het water op, en iemand is altijd blij in een stoel in de buurt.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Voor elke leeftijd"
          title="Families"
          body="Aruba heeft activiteiten voor gasten van alle leeftijden, wat het een ideale bestemming maakt voor een familievakantie. Het Aruba-effect maakt niet uit of je 5 of 50 bent."
          src="/ingested/arubaa/img-069.webp"
          alt="Een volwassene en kind houden elkaars hand vast op een strand van Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Één blije familie
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Iets voor elk lid van de reis
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Het Aruba-effect wordt gevoeld door iedereen die zich ervoor openstelt, en
              dat geldt ook voor de jongste reizigers. Als je op zoek bent naar iets waar
              ouders en kinderen evenveel van houden, is dit het.
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
              Een dag die voor iedereen werkt
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-037.webp"
              alt="Een familie poseert samen voor een foto op het zand"
              title="Strandagen, samen"
              description="Zand, ondiep water en schaduw voor elk lid van de familie."
            />
            <ImageCard
              src="/ingested/arubaa/img-042.webp"
              alt="Een familie loopt samen hand in hand langs de kustlijn"
              title="Trage wandelingen"
              description="Gemakkelijke, vlakke kustlijn die vriendelijk is voor kleine beentjes."
            />
            <ImageCard
              src="/ingested/arubaa/img-035.webp"
              alt="Een verzorger draagt een jong kind langs het strand"
              title="Gemaakt voor de kleintjes"
              description="Rustige baaien en warm, ondiep water gemaakt voor kleine zwemmers."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Een familiereis in de planning?</h2>
            <p className="max-w-md text-muted-foreground">
              Bekijk kindvriendelijke hotels, all-inclusive verblijven en makkelijk
              toegankelijke stranden.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/nl/plan-your-visit#hotels-resorts">
                  Bekijk Hotels & Resorts <ArrowRight className="size-4" />
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
