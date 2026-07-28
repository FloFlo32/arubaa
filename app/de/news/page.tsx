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
  title: "Aruba Neuigkeiten, Nachrichten zum Inseltourismus",
  description: "Aktuelle Tourismusnachrichten und Updates aus Aruba.",
};

const updates = [
  {
    title: "Autentico Aruba Culinary Festival",
    src: "/ingested/arubaa/img-036.webp",
    alt: "Ein Paar entspannt gemeinsam auf den Felsen an der Küste Arubas",
    description:
      "Autentico kehrt diesen Oktober zurück für eine weitere unvergessliche Feier der kulinarischen Szene Arubas.",
  },
  {
    title: "myAruba App",
    src: "/ingested/arubaa/img-037.webp",
    alt: "Besucher erkunden die Küste Arubas mit der myAruba App",
    description: "Probieren Sie myAruba aus, die App, die Ihnen hilft, tolle Orte auf der Insel zu finden.",
  },
  {
    title: "Leitungswasser Kampagne",
    src: "/ingested/arubaa/img-029.webp",
    alt: "Luftaufnahme von Strandbesuchern, die im türkisfarbenen Wasser Arubas planschen",
    description: "Aruba ist bekannt für seine unberührten Strände und türkisfarbenen Gewässer.",
  },
  {
    title: "Reisebestimmungen",
    src: "/ingested/arubaa/img-041.webp",
    alt: "Besucher kommen für ihren Urlaub an einem Strand in Aruba an",
    description:
      "Hier sind einige Details, die Sie bei der Ein- und Ausreise nach und von Aruba beachten sollten, einschließlich der neuen Nachhaltigkeitsgebühr von 20 USD.",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Neuigkeiten von der Insel"
          title="Aruba, Neuigkeiten zum Inseltourismus"
          body="Wir stehen erst am Anfang der wunderbaren Wirkung, die Aruba zu bieten hat. Entdecken Sie unten Ihre Reisedetails und erschließen Sie sich ein karibisches Erlebnis, das Sie mit Sonnenschein erfüllt und Sie mit einem glücklichen Nachglühen nach Hause schickt, das niemals verblasst."
          src="/ingested/arubaa/img-042.webp"
          alt="Eine Familie geht händchenhaltend gemeinsam an einem Strand in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-20 pb-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Reisebestimmungen & Updates</h2>
            <p className="mt-4 text-muted-foreground">
              Die neuesten Informationen der Aruba Tourism Authority, stets aktuell, damit
              Ihre nächste Reise mit den richtigen Informationen beginnt.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {updates.map((item) => (
              <RevealItem key={item.title}>
                <ImageCard
                  src={item.src}
                  alt={item.alt}
                  eyebrow="Update"
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
                Gute Nachrichten verdienen ein gutes Angebot
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Sehen Sie sich die aktuellen Angebote an und verwandeln Sie das heutige
                Update in Ihre nächste Reise.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/de/deals">
                    Aktuelle Angebote Ansehen <ArrowRight className="size-4" />
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
