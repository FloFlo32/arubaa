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
  title: "Reiseblog: Tipps, Kultur und Erlebnisse",
  description:
    "Aruba-Reisetipps, Kultur und Erlebnisse vom Team hinter One Happy Island.",
};

const topics = [
  {
    title: "Abenteuer",
    href: "/de/why-aruba/adventure",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Ein Paar erkundet eine Meereshöhle und einen Felsbogen an Arubas Küste",
    teaser: "Meereshöhlen, Felsbögen und Offroad-Pfade für den ruhelosen Reisenden.",
  },
  {
    title: "Romantik",
    href: "/de/why-aruba/romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "Ein Paar teilt einen ruhigen Moment an einem Strand in Aruba bei Sonnenuntergang",
    teaser: "Spaziergänge bei Sonnenuntergang, private Dinner und die Momente, für die Paare zurückkommen.",
  },
  {
    title: "Kultur",
    href: "/de/why-aruba/culture",
    src: "/ingested/arubaa/img-033.webp",
    alt: "Eine Gruppe versammelt sich an einem Strand in Aruba",
    teaser: "Die Traditionen und Wirtschaftszweige, die die Identität der Insel prägen.",
  },
  {
    title: "Wellness",
    href: "/de/why-aruba/wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "Eine Frau entspannt in einem Spa-Bademantel neben Kerzen und einer Badewanne",
    teaser: "Spas, Stille und die ruhigen Morgenstunden, die Ihre innere Uhr zurücksetzen.",
  },
  {
    title: "Essen & Trinken",
    href: "/de/why-aruba/eat-and-drink",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ein Paar entspannt gemeinsam auf den Küstenfelsen in Aruba",
    teaser: "Lokale Aromen, frische Meeresfrüchte und Tische, an denen man gerne länger verweilt.",
  },
  {
    title: "Familien",
    href: "/de/why-aruba/families",
    src: "/ingested/arubaa/img-032.webp",
    alt: "Eine Familie genießt gemeinsam den Strand in Aruba",
    teaser: "Entspannte Ausflüge, die jedes Familienmitglied jeden Alters glücklich machen.",
  },
  {
    title: "Strände & Buchten",
    href: "/de/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-026.webp",
    alt: "Eine Frau entspannt in einem Strandliegestuhl bei Sonnenuntergang in Aruba",
    teaser: "Von weiten öffentlichen Sandstränden bis zu versteckten Buchten, die einen Umweg wert sind.",
  },
  {
    title: "Reiserouten",
    href: "/de/things-to-do#itineraries",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Ein Paar in Hochzeitskleidung läuft durch das flache Wasser an einem Strand in Aruba",
    teaser: "Fertige Tagespläne, egal ob Sie drei oder zehn Tage Zeit haben.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Geschichten von der Insel"
          title="Reiseblog, Tipps, Kultur und Erlebnisse"
          body="Wir stehen erst am Anfang der erstaunlichen Erlebnisse, die Aruba zu bieten hat. Erfahren Sie unten mehr über Ihre Reisedetails und entdecken Sie ein karibisches Erlebnis."
          src="/ingested/arubaa/img-051.webp"
          alt="Ein frisch verheiratetes Paar hält sich an den Händen an einem Strand in Aruba"
        />

        <section className="py-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Nach Thema durchsuchen</h2>
              <p className="mt-4 text-muted-foreground">
                Das sind die Themen, über die wir am meisten schreiben, jedes verlinkt zum
                vollständigen Guide über die Insel.
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
                  eyebrow="Thema"
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
                Möchten Sie den vollständigen Guide?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Entdecken Sie jeden Strand, jede Bucht und jedes Abenteuer, das Aruba zu
                bieten hat, organisiert nach dem, was Sie gerne tun.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/de/things-to-do">
                    Mehr Zu Was Zu Tun Ist Erfahren <ArrowRight className="size-4" />
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
