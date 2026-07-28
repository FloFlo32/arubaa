import type { Metadata } from "next";
import Link from "next/link";
import { Gem, ArrowRight, Sunset, Sparkles, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Bruiloften op Aruba",
  description:
    "Kale voeten in het zand en gouden gelofte-momenten: het plannen van een droombruiloft op One Happy Island.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Blote voeten ceremonies",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Een koppel viert hun bruiloft op een strand in Aruba",
    description:
      "Zeg je gelofte met je tenen in het zand en de zee als decor. De meeste strandresorts regelen de hele ceremonie op locatie.",
  },
  {
    icon: Sparkles,
    title: "Geloftes bij het gouden uur",
    src: "/ingested/arubaa/img-048.webp",
    alt: "Een net getrouwd koppel houdt elkaars hand vast op de kustlijn",
    description:
      "Licht bij zonsondergang verandert elke ceremoniefoto in een blijvende herinnering, en Aruba's bijna gegarandeerde heldere lucht maakt de planning makkelijk.",
  },
  {
    icon: HeartHandshake,
    title: "Vreugde, in beweging",
    src: "/ingested/arubaa/img-050.webp",
    alt: "Een koppel rent door het ondiepe water op hun trouwdag",
    description:
      "Aruba's rustige ondiepten laten ruimte voor een klein feestje: een sprint door het water, een toost op het zand, portretten die niet geposeerd aanvoelen.",
  },
  {
    icon: Gem,
    title: "Een huwelijksreis die meteen begint",
    src: "/ingested/arubaa/img-052.webp",
    alt: "Een man en een vrouw houden elkaars hand vast op een strand van Aruba",
    description:
      "Geen reisdag nodig tussen de bruiloft en de huwelijksreis: hetzelfde strand dat je ceremonie huisvestte, kan ook de week erna huisvesten.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Zeg ja"
          title="Bruiloften"
          body="Constant zonnig weer en prachtige natuurlijke schoonheid maken Aruba de ideale plek voor een droombruiloft, of dat vijftig gasten betekent of helemaal geen."
          src="/ingested/arubaa/img-046.webp"
          alt="Een koppel viert hun bruiloft op een strand in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Één blije dag
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Zeg ja op One Happy Island
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba&apos;s huwelijksplanners regelen alles van vergunningen tot bloemen,
              zodat de enige echte beslissing die overblijft is welk stuk strand je
              gelofte krijgt.
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
              Meer manieren om te vieren
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-047.webp"
              alt="Een koppel in trouwkleding rent door het ondiepe water op een strand van Aruba"
              title="Eerste blik op het zand"
              description="Privé, vroege ochtend eerste blikken voordat het strand vol raakt."
            />
            <ImageCard
              src="/ingested/arubaa/img-049.webp"
              alt="Een net getrouwd koppel staat samen op een strand van Aruba"
              title="Geloftes hernieuwen"
              description="Kom terug en doe het opnieuw, deze keer zonder planning nodig."
            />
            <ImageCard
              src="/ingested/arubaa/img-051.webp"
              alt="Een bruid en bruidegom houden elkaars hand vast op een strand van Aruba"
              title="Huwelijksreissuites"
              description="Boek direct door, zodat het feest niet hoeft te eindigen."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Begin met het plannen van je dag</h2>
            <p className="max-w-md text-muted-foreground">
              Bekijk resorts, gastenservice en alles wat verder op je lijstje staat.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/nl/plan-your-visit#guest-services">
                  Bekijk Gastenservice <ArrowRight className="size-4" />
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
