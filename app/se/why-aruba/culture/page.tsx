import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowRight, Palette, Globe2, Music4 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Kultur på Aruba",
  description:
    "Hundra nationaliteter, en ö: gatukonst, festivaler och människorna bakom Aruba-effekten.",
};

const highlights = [
  {
    icon: Palette,
    title: "Gatukonst i San Nicolas",
    src: "/ingested/arubaa/img-033.webp",
    alt: "En grupp vänner samlade på en strand på Aruba",
    description:
      "Arubas andra stad förvandlade sina bakgator till ett galleri under öppen himmel, med muralmålningar från lokala och internationella konstnärer som täcker hela byggnader.",
  },
  {
    icon: Globe2,
    title: "Hundra nationaliteter, en ö",
    src: "/ingested/arubaa/img-061.webp",
    alt: "Tre kvinnor sitter på en klippa på en strand på Aruba",
    description:
      "Nederländska, papiamento, spanska och engelska talas alla här, ofta i samma konversation. Den blandningen syns i maten, musiken och välkomnandet.",
  },
  {
    icon: Music4,
    title: "Lokala festivaler",
    src: "/ingested/arubaa/img-064.webp",
    alt: "Tre kvinnor står tillsammans på en strand på Aruba",
    description:
      "Från karnevalens gatuparad till mindre grannskapsfester går Arubas kalender på musik, färg och en ursäkt att samlas.",
  },
  {
    icon: Users,
    title: "Gemenskap vid vattnet",
    src: "/ingested/arubaa/img-044.webp",
    alt: "En grupp människor promenerar tillsammans längs Arubas strand",
    description:
      "Lokalbor och besökare delar samma stränder, samma rombarer och samma utsikt över solnedgången, precis som ön vill ha det.",
  },
];

export default function CulturePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Hundra smaker"
          title="Kultur"
          body="Hundra nationaliteter. Hundra smaker. Arubas mångkulturella befolkning lever i harmoni, och det märks i varje hörn av ön, från muralmålningarna till menyerna."
          src="/ingested/arubaa/img-060.webp"
          alt="En grupp vänner samlade på en strand på Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Mer än en fond
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              En liten ö, en stor mix av människor
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Arubas kultur hålls inte i ett museum. Den finns i språket som byts mitt i en
              mening, doften från en gatukökbil och muralmålningen som sträcker sig runt ett
              helt kvarter.
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
              Var du känner den på riktigt
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-020.webp"
              alt="En jordbrukare arbetar på ett fält på Aruba"
              title="Lokala marknader"
              description="Bondemarknader och vägkantsstånd säljer det som odlats bara en bit bort."
            />
            <ImageCard
              src="/ingested/arubaa/img-066.webp"
              alt="Människor samlas tillsammans på en strand på Aruba"
              title="Grannskapssammankomster"
              description="Småstadsfester välkomnar besökare precis så lätt som de välkomnar grannar."
            />
            <ImageCard
              src="/ingested/arubaa/img-062.webp"
              alt="Två kvinnor springer tillsammans på en vit sandstrand"
              title="Delade stränder"
              description="Lokalbor och besökare blandas lätt på Arubas offentliga stränder, dag och natt."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Vill du ha hela historien?</h2>
            <p className="max-w-md text-muted-foreground">
              Se öns historia och de regioner som formade den.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/se/our-island#history-culture">
                  Historia & Kultur <ArrowRight className="size-4" />
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
