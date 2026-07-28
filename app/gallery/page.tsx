import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from aboard Flagship Aruba and the turquoise water we sail every day.",
};

const images = [
  { src: "/ingested/flagshiparuba/img-007.webp", alt: "The Flagship Aruba schooner under sail off Aruba's coast" },
  { src: "/ingested/flagshiparuba/img-006.webp", alt: "A guest jumps from the Flagship Aruba schooner into the ocean" },
  { src: "/ingested/flagshiparuba/img-008.webp", alt: "A snorkeler smiles at the camera in clear turquoise water off Aruba's coast" },
  { src: "/ingested/flagshiparuba/img-010.webp", alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water" },
  { src: "/ingested/flagshiparuba/img-009.webp", alt: "A rocky cove and turquoise water along Aruba's northwest coast" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80", alt: "A diver swims past a school of yellow reef fish" },
  { src: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1200&q=80", alt: "A school of fish swimming over a reef" },
  { src: "https://images.unsplash.com/photo-1546456073-92b9f0a8d413?auto=format&fit=crop&w=1200&q=80", alt: "Sunlight through clear turquoise Caribbean water" },
  { src: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1200&q=80", alt: "Palm trees on a white sand Caribbean beach" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80", alt: "A sailboat on the sand beside palm trees and a thatched umbrella" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", alt: "A pink sunset over calm turquoise water" },
  { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80", alt: "Sunrise over the ocean with birds flying overhead" },
  { src: "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?auto=format&fit=crop&w=1200&q=80", alt: "Aerial view of a tropical island surrounded by turquoise reef" },
  { src: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=80", alt: "A cresting ocean wave under a dramatic sky" },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-12 text-center">
          <Reveal>
            <Badge variant="accent">
              <Camera className="size-3.5" /> Gallery
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              A look at life aboard
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Real moments from our schooner, and the turquoise water we sail every day.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <Gallery images={images} />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
