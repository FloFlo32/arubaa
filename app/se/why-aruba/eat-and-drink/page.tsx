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
  title: "Mat & Dryck på Aruba",
  description:
    "Hundra smaker på en ö: mångkulturell matlagning, rombarer och cocktails vid solnedgången på Aruba.",
};

const highlights = [
  {
    icon: Wine,
    title: "Solnedgång, glas i hand",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Vänner håller vinglas tillsammans utomhus",
    description:
      "Strandbarer bygger hela kvällen runt solnedgången, med happy hour lagd efter horisonten snarare än klockan.",
  },
  {
    icon: Truck,
    title: "Vägkantsmat och rombarer",
    src: "/ingested/arubaa/img-066.webp",
    alt: "Människor samlas tillsammans på en strand på Aruba kvällstid",
    description:
      "Några av öns bästa måltider kommer från en matbil eller ett skjul med plaststolar, inte en meny med vinlista.",
  },
  {
    icon: Sunset,
    title: "Bord vid vattenlinjen",
    src: "/ingested/arubaa/img-068.webp",
    alt: "Ett par håller drinkar tillsammans utomhus på Aruba",
    description:
      "Gott om restauranger dukar sina bord precis där sanden möter vattnet, så middagen kommer med sin egen utsikt.",
  },
  {
    icon: Utensils,
    title: "Hundra smaker",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ett par kopplar av tillsammans på kustklipporna på Aruba",
    description:
      "Europeiska klassiker, sydasiatiska kryddor och färska lokala skaldjur delar samma lilla ö, ofta samma kvarter.",
  },
];

export default function EatAndDrinkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Varje sug"
          title="Mat & Dryck"
          body="Arubas matscen speglar dess mångkulturella befolkning, med varierat utbud för varje sug: från rombarer till fine dining, och varje solnedgångsbord i mellan."
          src="/ingested/arubaa/img-067.webp"
          alt="Vänner håller vinglas tillsammans utomhus"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Hundra smaker
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              En liten ö med ett stort bord
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Med över hundra nationaliteter representerade på ön är Aruba fyllt av smaker
              från jordens alla hörn. Bli inte förvånad om du åker hem med en ny favoriträtt.
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
              Så äter och dricker lokalbor
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-060.webp"
              alt="En grupp vänner samlade på en strand på Aruba"
              title="Delade rätter, delade bord"
              description="Arubansk matkultur är gemenskaplig: större rätter, längre bord, fler skålar."
            />
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="En jordbrukare arbetar på ett fält på Aruba"
              title="Odlat nära hemmet"
              description="Lokala gårdar försörjer fler av öns kök än man kan tro."
            />
            <ImageCard
              src="/ingested/arubaa/img-080.webp"
              alt="En kvinna och en man vadar tillsammans på en strand på Aruba"
              title="Drinkar med fötterna i sanden"
              description="Inga skor krävs på de flesta strandbarer, cocktail i hand."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Redan hungrig?</h2>
            <p className="max-w-md text-muted-foreground">
              Se matställen över hela ön, sorterade efter område och stämning.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/se/things-to-do#dining">
                  Se Matupplevelser <ArrowRight className="size-4" />
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
