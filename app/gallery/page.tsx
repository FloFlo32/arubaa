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
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A large group of guests cheering together aboard the schooner" },
  { src: "/ingested/flagshiparuba/img-008.webp", alt: "A snorkeler smiles at the camera in clear turquoise water off Aruba's coast" },
  { src: "/ingested/flagshiparubaa/guest-onboard-drink.webp", alt: "A guest smiling with a drink aboard the schooner" },
  { src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp", alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water" },
  { src: "/ingested/flagshiparubaa/guest-b.webp", alt: "A parent and child snorkeling together, the schooner visible in the background" },
  { src: "/ingested/flagshiparuba/img-009.webp", alt: "A rocky cove and turquoise water along Aruba's northwest coast" },
  { src: "/ingested/flagshiparubaa/snorkel-sea-turtle.webp", alt: "A sea turtle swimming in clear turquoise water" },
  { src: "/ingested/flagshiparubaa/schooner-sunset-guests.webp", alt: "Guests aboard the schooner at sunset" },
  { src: "/ingested/flagshiparubaa/malmok-beach.webp", alt: "The turquoise coastline at Malmok Beach" },
  { src: "/ingested/flagshiparubaa/guest-a.webp", alt: "Guests relaxing together on deck with drinks" },
  { src: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp", alt: "The schooner sailing past a rocky cliff at sunset" },
  { src: "/ingested/flagshiparubaa/afternoon-pirate-party.webp", alt: "A sailboat off Aruba's coast near a resort-lined beach" },
  { src: "/ingested/flagshiparubaa/schooner-pink-sunset.webp", alt: "The schooner silhouetted under a pink sunset sky" },
  { src: "/ingested/flagshiparubaa/sunset-bird-silhouette.webp", alt: "A bird silhouetted against the sunset over the ocean" },
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
