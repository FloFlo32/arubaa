import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Aruba Nyheter, Nyheter Om Öns Turism",
  description: "Senaste turismnyheterna och uppdateringarna från Aruba.",
};

const updates = [
  {
    title: "Autentico Aruba Culinary Festival",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ett par kopplar av tillsammans på kustklipporna på Aruba",
    description:
      "Autentico är tillbaka i oktober för ännu ett oförglömligt firande av Arubas matkultur.",
  },
  {
    title: "myAruba-appen",
    src: "/ingested/arubaa/img-037.webp",
    alt: "Besökare utforskar Arubas kust med myAruba-appen",
    description: "Prova myAruba, appen som hjälper dig hitta fantastiska platser på ön.",
  },
  {
    title: "Kampanjen för kranvatten",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Flygbild av badgäster som vadar i Arubas turkosa vatten",
    description: "Aruba är känt för sina orörda stränder och turkosa vatten.",
  },
  {
    title: "Resekrav",
    src: "/ingested/arubaa/img-041.webp",
    alt: "Besökare anländer till en strand på Aruba för sin semester",
    description:
      "Här är några saker att komma ihåg när du reser till och från Aruba, inklusive den nya hållbarhetsavgiften på 20 dollar.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Nyheter från ön"
          title="Aruba, Nyheter Om Öns Turism"
          body="Vi har bara börjat med de fantastiska effekterna Aruba har att erbjuda. Dyk in i dina resedetaljer nedan för att låsa upp en karibisk upplevelse som fyller dig med solsken och skickar dig hem med en lycklig glöd som aldrig tonar bort."
          src="/ingested/arubaa/img-042.webp"
          alt="En familj promenerar tillsammans hand i hand på en strand på Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20 pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Resekrav & Uppdateringar</h2>
            <p className="mt-4 text-muted-foreground">
              Det senaste från Arubas turistmyndighet, hållet aktuellt så att din nästa
              resa börjar med rätt information.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {updates.map((item) => (
              <RevealItem key={item.title}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  eyebrow="Uppdatering"
                  title={item.title}
                  description={item.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Goda nyheter förtjänar ett bra erbjudande
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Se vad som just nu erbjuds och förvandla dagens uppdatering till din nästa resa.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/se/deals">
                    Se Aktuella Erbjudanden <ArrowRight className="size-4" />
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
