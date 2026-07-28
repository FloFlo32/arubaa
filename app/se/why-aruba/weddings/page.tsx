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
  title: "Bröllop på Aruba",
  description:
    "Barfotaceremonier och löften i det gyllene timmens ljus: att planera ett drömbröllop på One Happy Island.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Barfotaceremonier",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Ett par firar sitt bröllop på en strand på Aruba",
    description:
      "Säg era löften med tårna i sanden och havet som fond. De flesta strandhotell tar hand om hela ceremonin på plats.",
  },
  {
    icon: Sparkles,
    title: "Löften i det gyllene timmens ljus",
    src: "/ingested/arubaa/img-048.webp",
    alt: "Ett nygift par håller händer vid strandlinjen",
    description:
      "Solnedgångsljuset förvandlar varje ceremonifoto till ett minne, och Arubas nästan garanterat klara himmel gör tidpunkten lätt att planera kring.",
  },
  {
    icon: HeartHandshake,
    title: "Glädje, i rörelse",
    src: "/ingested/arubaa/img-050.webp",
    alt: "Ett par springer genom det grunda vattnet på sin bröllopsdag",
    description:
      "Arubas lugna grundvatten lämnar plats för lite firande: ett spring genom vattnet, en skål i sanden, porträtt som inte känns poserade.",
  },
  {
    icon: Gem,
    title: "En smekmånad som börjar direkt",
    src: "/ingested/arubaa/img-052.webp",
    alt: "En man och en kvinna håller händer på en strand på Aruba",
    description:
      "Ingen transitdag krävs mellan bröllopet och smekmånaden: samma strand som var värd för er ceremoni kan vara värd för veckan efter.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Säg ja"
          title="Bröllop"
          body="Jämnt soligt väder och hänförande natursköna vyer gör Aruba till den idealiska platsen för ett drömbröllop, oavsett om det betyder femtio gäster eller inga alls."
          src="/ingested/arubaa/img-046.webp"
          alt="Ett par firar sitt bröllop på en strand på Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              En lycklig dag
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Säg ja på One Happy Island
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Arubas bröllopsplanerare tar hand om allt från tillstånd till blommor, så det
              enda riktiga beslutet som kvarstår är vilken strandremsa ni ska säga era löften på.
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
              Fler sätt att fira
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-047.webp"
              alt="Ett par i bröllopsklädsel springer genom det grunda vattnet på en strand på Aruba"
              title="Första titten i sanden"
              description="Privata first looks tidigt på morgonen innan stranden fylls på."
            />
            <ImageCard
              src="/ingested/arubaa/img-049.webp"
              alt="Ett nygift par står tillsammans på en strand på Aruba"
              title="Vigselförnyelser"
              description="Kom tillbaka och gör om det, denna gång utan någon planering alls."
            />
            <ImageCard
              src="/ingested/arubaa/img-051.webp"
              alt="En brud och brudgum håller händer på en strand på Aruba"
              title="Bröllopssviter"
              description="Boka rakt igenom, så firandet inte behöver ta slut."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Börja planera din dag</h2>
            <p className="max-w-md text-muted-foreground">
              Se hotell, gästservice och allt annat på din checklista.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/se/plan-your-visit#guest-services">
                  Se Gästservice <ArrowRight className="size-4" />
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
