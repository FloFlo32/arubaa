import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Sunset, UtensilsCrossed, Flower2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Romantik på Aruba",
  description:
    "Solnedgångspromenader, privata middagar och tysta vikar: så hittar par Aruba-effekten.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Det gyllene timmen, varje kväll",
    src: "/ingested/arubaa/img-076.webp",
    alt: "En man och en kvinna sitter tillsammans på en strand på Aruba i det gyllene timmens ljus",
    description:
      "Konstant sol ger en konstant solnedgång. Välj en plats på västkusten och du är garanterad ett skådespel, oftast utan ett moln i vägen.",
  },
  {
    icon: UtensilsCrossed,
    title: "Middag, barfota i sanden",
    src: "/ingested/arubaa/img-078.webp",
    alt: "En man och en kvinna står tillsammans vid en palm på en strand på Aruba",
    description:
      "Strandrestauranger dukar borden precis vid vattenlinjen, så middagen kommer med ett soundtrack av vågor och en solnedgång på första parkett.",
  },
  {
    icon: Flower2,
    title: "Långsamma morgnar, två stolar",
    src: "/ingested/arubaa/img-080.webp",
    alt: "En kvinna och en man vadar tillsammans på en strand på Aruba",
    description:
      "Ingen resrutt krävs. Aruba belönar de par som inte gör något mer ambitiöst än en lång promenad och en ännu längre frukost.",
  },
  {
    icon: Heart,
    title: "Tysta vikar för två",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ett par kopplar av tillsammans på kustklipporna på Aruba",
    description:
      "Bortom huvudstråket är öns mindre vikar och tidvattenpooler lätta att hitta och lätta att ha helt för er själva.",
  },
];

export default function RomancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Tillsammans"
          title="Romantik"
          body="Fly från världen tillsammans. Arubas vackra natur, varma kvällar och lugnare tempo gör det till en idealisk destination för en romantisk resa, en första dejt eller en femtioårsdag."
          src="/ingested/arubaa/img-076.webp"
          alt="En man och en kvinna sitter tillsammans på en strand på Aruba i det gyllene timmens ljus"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Gjord för två
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Romantik behöver ingen bokning här
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Arubas storlek jobbar i din favör: en kort bilresa tar dig till en annan kustlinje,
              i ett annat stämningsläge, utan att du förlorar resten av dagen.
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
              Fler stunder värda att planera kring
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-019.webp"
              alt="En kvinna i en spa-morgonrock kopplar av vid ett ljusbadat badkar"
              title="Spadagar för par"
              description="Behandlingar sida vid sida, designade för att sänka tempot för er båda samtidigt."
            />
            <ImageCard
              src="/ingested/arubaa/img-068.webp"
              alt="Ett par håller drinkar tillsammans utomhus på Aruba"
              title="Cocktails vid solnedgången"
              description="Strandbarer lägger happy hour efter solnedgången, inte klockan."
            />
            <ImageCard
              src="/ingested/arubaa/img-009.webp"
              alt="Ett par kopplar av under ett hotellparasoll vid solnedgången"
              title="Privata cabanas"
              description="Reservera en skuggig plats för dagen och låt ön komma till er."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planerar du något speciellt?</h2>
            <p className="max-w-md text-muted-foreground">
              Från jubileumsresor till förslag, se hur du planerar detaljerna.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/se/why-aruba/weddings">
                  Utforska Bröllop <ArrowRight className="size-4" />
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
