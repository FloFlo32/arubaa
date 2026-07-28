import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, Mountain, Waves, Bike, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Avontuur op Aruba",
  description:
    "Grotbogen, woestijnpaden en open water: hoe je het Aruba-effect voelt door avontuur.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Arikok National Park",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Een vrouw staat alleen op zanderig terrein met uitzicht op de zee in Aruba",
    description:
      "Bijna een vijfde van het eiland is beschermde woestijnwildernis: torenhoge cactussen, kalkstenen ruggen en paden die eindigen bij verscholen baaien.",
  },
  {
    icon: Waves,
    title: "Op het water",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Twee mensen kajakken samen voor de kust van Aruba",
    description:
      "Passaatwinden die nooit stoppen maken Aruba tot een van de beste plekken in het Caribisch gebied voor kajakken, windsurfen en zeilen, of je nu racet of drijft.",
  },
  {
    icon: Compass,
    title: "Zeegrotten en rotsbogen",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Een koppel verkent een zeegrot en rotsboog langs de kust van Aruba",
    description:
      "De noordkust is door wind en golven uitgesneden tot natuurlijke bruggen en uitgeholde grotten, het best te ontdekken vlak na zonsopgang voordat het licht scherp wordt.",
  },
  {
    icon: Sunrise,
    title: "Jaag de horizon achterna",
    src: "/ingested/arubaa/img-063.webp",
    alt: "Een groep vrienden springt samen op het strand tijdens het gouden uur",
    description:
      "Vroege vogels hebben het eiland praktisch voor zichzelf: lege zandbanken, koele woestijnlucht en een zonsopgang die de hele kustlijn goud kleurt.",
  },
];

export default function AdventurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Kaweta"
          title="Avontuur"
          body="Kaweta. Het betekent nieuwsgierig in het Papiaments, en het is het perfecte woord voor Aruba's ontdekkingsgeest. Voorbij de stranden beloont het eiland iedereen die durft te zoeken."
          src="/ingested/arubaa/img-031.webp"
          alt="Een vrouw staat alleen op zanderig terrein met uitzicht op de zee in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Vier manieren om te beginnen
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Vind jouw soort avontuur
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba stopt woestijn, kust en open water in een eiland dat je in minder dan
              een uur kunt oversteken, wat betekent dat je het allemaal in één reis kunt
              beleven.
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
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Bike className="size-5" />
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Gemaakt om te ontdekken, niet alleen te bezoeken
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Huur een UTV voor het woestijnbinnenland, boek een snorkelboot voor de
              riffen, of begin gewoon te wandelen vanaf je hotel: Aruba is klein genoeg
              zodat elk soort avontuur maar een korte reis is van waar je verblijft.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-077.webp"
              alt="Twee mensen lopen samen over een zandbank op Aruba"
              title="Zandbankwandelingen"
              description="Bij laag water ontstaan zandbanken die zich uitstrekken tot in de turquoise ondiepten."
            />
            <ImageCard
              src="/ingested/arubaa/img-004.webp"
              alt="Een koppel silhouetteert op de duinen van Aruba bij zonsondergang"
              title="Duinwandelingen"
              description="De noordoostkust is één en al glooiende duinen en wind, het best te zien te voet."
            />
            <ImageCard
              src="/ingested/arubaa/img-065.webp"
              alt="Een groep vrienden springt samen op het strand"
              title="Groepsuitstapjes"
              description="Avontuur is beter samen: boek een groepstour en wissel verhalen uit bij het diner."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Klaar om te ontdekken?</h2>
            <p className="max-w-md text-muted-foreground">
              Bekijk tours, materiaalverhuur en de rest van Aruba&apos;s activiteiten.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/nl/things-to-do#natural-wonders">
                  Bekijk Natuurwonderen <ArrowRight className="size-4" />
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
