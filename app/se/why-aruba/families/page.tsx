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
  title: "Familjesemester på Aruba",
  description:
    "Lugnt, grunt vatten och lättsamma dagar för alla åldrar: varför Aruba fungerar för familjesemestrar.",
};

const highlights = [
  {
    icon: Waves,
    title: "Lugnt, grunt vatten",
    src: "/ingested/arubaa/img-070.webp",
    alt: "En vuxen bär ett barn på en strand på Aruba",
    description:
      "Öns läsidesstränder är kända för att vara lugna och grunda, vilket betyder mer tid att simma och mindre tid att oroligt bevaka vågorna.",
  },
  {
    icon: Sun,
    title: "Lättsamma dagar, lite stress",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Två pojkar springer tillsammans på en strand på Aruba",
    description:
      "Korta flyg, platt terräng och ett litet avtryck betyder mindre tid i transit och mer tid att låta barnen springa av sig.",
  },
  {
    icon: Baby,
    title: "Byggd för de minsta gästerna",
    src: "/ingested/arubaa/img-072.webp",
    alt: "En vuxen håller en baby på en strand på Aruba",
    description:
      "Varmt, mjukt vatten och len sand gör Arubas stränder genuint lätta att hantera med en baby eller ett litet barn, inte bara marknadsfört på det sättet.",
  },
  {
    icon: Users2,
    title: "För varje generation",
    src: "/ingested/arubaa/img-074.webp",
    alt: "En familj håller händer tillsammans på en strand på Aruba vid solnedgången",
    description:
      "Morföräldrar, föräldrar och barn hittar alla sitt eget tempo här: någon är alltid pigg på vattnet, och någon är alltid nöjd i en stol i närheten.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="För alla åldrar"
          title="Familjer"
          body="Aruba har aktiviteter för gäster i alla åldrar, vilket gör den till en idealisk destination för en familjesemester. Aruba-effekten bryr sig inte om du är 5 eller 50."
          src="/ingested/arubaa/img-069.webp"
          alt="En vuxen och ett barn håller händer på en strand på Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              En lycklig familj
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Något för alla i resesällskapet
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba-effekten känns av alla som öppnar sig för den, och det inkluderar de
              yngsta resenärerna. Om du letar efter något föräldrar och barn kan älska lika
              mycket, är det här det.
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
              En dag som fungerar för alla
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-037.webp"
              alt="En familj poserar tillsammans för ett foto i sanden"
              title="Stranddagar, tillsammans"
              description="Sand, grundvatten och skugga för alla i familjen."
            />
            <ImageCard
              src="/ingested/arubaa/img-042.webp"
              alt="En familj promenerar tillsammans hand i hand längs strandlinjen"
              title="Långsamma promenader"
              description="Lättillgänglig, platt kustlinje som är skonsam mot små ben."
            />
            <ImageCard
              src="/ingested/arubaa/img-035.webp"
              alt="En vårdnadshavare bär ett litet barn längs stranden"
              title="Byggd för de minsta"
              description="Lugna bukter och varmt, grunt vatten gjort för små simmare."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planerar du en familjeresa?</h2>
            <p className="max-w-md text-muted-foreground">
              Se barnvänliga hotell, allt-inkluderat-vistelser och lättillgängliga stränder.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/se/plan-your-visit#hotels-resorts">
                  Se Hotell & Resorts <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/se/why-aruba">Tillbaka Till Varför Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
