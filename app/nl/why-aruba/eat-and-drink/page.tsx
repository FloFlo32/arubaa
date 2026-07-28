import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, ArrowRight, Wine, Truck, Sunset } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Eten & Drinken op Aruba",
  description:
    "Honderd smaken op één eiland: multicultureel dineren, rumwinkeltjes en cocktails bij zonsondergang op Aruba.",
};

const highlights = [
  {
    icon: Wine,
    title: "Zonsondergang, glas in de hand",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Vrienden houden samen wijnglazen vast in de buitenlucht",
    description:
      "Strandbars bouwen hun hele avond rond de zonsondergang, met happy hour getimed op de horizon in plaats van de klok.",
  },
  {
    icon: Truck,
    title: "Langs de weg en rumwinkeltjes",
    src: "/ingested/arubaa/img-066.webp",
    alt: "Mensen komen samen op een strand van Aruba in de avond",
    description:
      "Een aantal van de beste maaltijden op het eiland komen van een truck of winkeltje met plastic stoelen, niet van een menu met een wijnkaart.",
  },
  {
    icon: Sunset,
    title: "Tafels aan de waterlijn",
    src: "/ingested/arubaa/img-068.webp",
    alt: "Een koppel houdt samen drankjes vast in de buitenlucht op Aruba",
    description:
      "Veel restaurants dekken hun tafels precies waar het zand het water raakt, zodat het diner een eigen uitzicht heeft.",
  },
  {
    icon: Utensils,
    title: "Honderd smaken",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Een koppel relaxt samen op de kustrotsen van Aruba",
    description:
      "Europese klassiekers, Zuid-Aziatische kruiden en verse lokale zeevruchten delen hetzelfde kleine eiland, vaak hetzelfde blok.",
  },
];

export default function EatAndDrinkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Elke trek"
          title="Eten & Drinken"
          body="Aruba's culinaire scene weerspiegelt de multiculturele bevolking, met een divers aanbod voor elke trek: van rumwinkeltjes tot fine dining, en elke zonsondergangtafel daartussenin."
          src="/ingested/arubaa/img-067.webp"
          alt="Vrienden houden samen wijnglazen vast in de buitenlucht"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Honderd smaken
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Een klein eiland met een grote tafel
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Met meer dan honderd nationaliteiten vertegenwoordigd op het eiland, is
              Aruba gevuld met smaken uit alle hoeken van de wereld. Wees niet verbaasd
              als je met een nieuw favoriet gerecht vertrekt.
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
              Hoe locals eten en drinken
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-060.webp"
              alt="Een groep vrienden verzameld op een strand van Aruba"
              title="Gedeelde gerechten, gedeelde tafels"
              description="Arubaanse dinergewoontes zijn gericht op samen: grotere borden, langere tafels, meer toosts."
            />
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="Een boer aan het werk op een Arubaans veld"
              title="Dichtbij huis verbouwd"
              description="Lokale boerderijen leveren meer aan de keukens van het eiland dan je zou verwachten."
            />
            <ImageCard
              src="/ingested/arubaa/img-080.webp"
              alt="Een vrouw en man lopen samen door het water op een strand van Aruba"
              title="Drankjes met je voeten in het zand"
              description="Geen schoenen nodig bij de meeste strandbars, cocktail in de hand."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Al honger?</h2>
            <p className="max-w-md text-muted-foreground">
              Bekijk eetgelegenheden over het hele eiland, gesorteerd op buurt en sfeer.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/nl/things-to-do#dining">
                  Bekijk Dineren <ArrowRight className="size-4" />
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
