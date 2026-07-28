import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Reseblogg: Tips, Kultur Och Upplevelser",
  description:
    "Aruba-resetips, kultur och upplevelser från teamet bakom One Happy Island.",
};

const topics = [
  {
    title: "Äventyr",
    href: "/se/why-aruba/adventure",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Ett par utforskar en havsgrotta och ett klippvalv längs Arubas kust",
    teaser: "Havsgrottor, klippvalv och terrängleder för den rastlösa resenären.",
  },
  {
    title: "Romantik",
    href: "/se/why-aruba/romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "Ett par delar en stilla stund på en strand på Aruba vid solnedgången",
    teaser: "Solnedgångspromenader, privata middagar och stunderna par kommer tillbaka för.",
  },
  {
    title: "Kultur",
    href: "/se/why-aruba/culture",
    src: "/ingested/arubaa/img-033.webp",
    alt: "En grupp samlad på en strand på Aruba",
    teaser: "Traditionerna och näringarna som formar öns identitet.",
  },
  {
    title: "Välbefinnande",
    href: "/se/why-aruba/wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "En kvinna kopplar av i en spa-morgonrock bredvid ljus och ett badkar",
    teaser: "Spa, stillhet och de långsamma morgnarna som återställer din klocka.",
  },
  {
    title: "Mat & Dryck",
    href: "/se/why-aruba/eat-and-drink",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ett par kopplar av tillsammans på kustklipporna på Aruba",
    teaser: "Lokal smak, färska skaldjur och borden värda att dröja kvar vid.",
  },
  {
    title: "Familjer",
    href: "/se/why-aruba/families",
    src: "/ingested/arubaa/img-032.webp",
    alt: "En familj njuter av stranden tillsammans på Aruba",
    teaser: "Lättsamma dagar ute som håller alla åldrar i familjen glada.",
  },
  {
    title: "Stränder & Vikar",
    href: "/se/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-026.webp",
    alt: "En kvinna kopplar av i en strandstol vid solnedgången på Aruba",
    teaser: "Från breda offentliga sandstränder till dolda vikar värda omvägen.",
  },
  {
    title: "Resrutter",
    href: "/se/things-to-do#itineraries",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Ett par i bröllopsklädsel springer genom det grunda vattnet på en strand på Aruba",
    teaser: "Färdiga dagsplaner, oavsett om du har tre dagar eller tio.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Berättelser från ön"
          title="Reseblogg, Tips, Kultur Och Upplevelser"
          body="Vi har bara börjat med de fantastiska effekterna Aruba har att erbjuda. Dyk in i dina resedetaljer nedan för att låsa upp en karibisk upplevelse."
          src="/ingested/arubaa/img-051.webp"
          alt="Ett nygift par håller händer på en strand på Aruba"
        />

        <section className="py-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Bläddra efter ämne</h2>
              <p className="mt-4 text-muted-foreground">
                Dessa är de teman vi skriver mest om, var och en länkar tillbaka till hela
                guiden om ön.
              </p>
            </Reveal>
          </div>

          <div className="container-px mx-auto max-w-6xl mt-10">
            <AutoSlider itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
              {topics.map((topic) => (
                <ImageCard
                  key={topic.title}
                  src={topic.src}
                  alt={topic.alt}
                  eyebrow="Ämne"
                  title={topic.title}
                  description={topic.teaser}
                  href={topic.href}
                />
              ))}
            </AutoSlider>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Vill du ha hela guiden?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Se varje strand, vik och äventyr Aruba har att erbjuda, organiserat efter
                vad du älskar att göra.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/se/things-to-do">
                    Läs Mer Om Saker Att Göra <ArrowRight className="size-4" />
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
