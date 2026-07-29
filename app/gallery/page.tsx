import type { Metadata } from "next";
import { Camera } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Gallery } from "@/components/magic/gallery";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Every real photo we have of Flagship Aruba: the schooner, the crew, the guests, and the water we sail every day.",
};

const images = [
  { src: "/ingested/flagshiparuba/img-007.webp", alt: "The Flagship Aruba schooner, Lady Black, under sail" },
  { src: "/ingested/flagshiparubaa/schooner-turquoise-anchor.webp", alt: "The Flagship Aruba schooner under sail off Aruba's coast" },
  { src: "/ingested/flagshiparuba/img-006.webp", alt: "A guest jumps from the Flagship Aruba schooner into the ocean" },
  { src: "/ingested/flagship-owner/ladyblack-transom.jpg", alt: "The stern of the schooner, painted with her name" },
  { src: "/ingested/flagship-owner/ship-transom-flagship-name.jpg", alt: "The schooner's stern, freshly painted with the Flagship Aruba name" },
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A large group of guests cheering together aboard the schooner" },
  { src: "/ingested/flagshiparubaa/guest-f.webp", alt: "A group of friends posing together on deck" },
  { src: "/ingested/flagshiparubaa/guest-g.webp", alt: "Guests dancing together at golden hour" },
  { src: "/ingested/flagshiparubaa/guest-d.webp", alt: "Guests toasting with drinks at the onboard bar" },
  { src: "/ingested/flagshiparubaa/guest-c.webp", alt: "A parent and child snorkeling together, the schooner visible in the background" },
  { src: "/ingested/flagshiparubaa/guest-h.webp", alt: "Guests relaxing together on the bow net" },
  { src: "/ingested/flagshiparubaa/guest-b.webp", alt: "A parent and child snorkeling together, the schooner visible in the background" },
  { src: "/ingested/flagshiparubaa/guest-onboard-drink.webp", alt: "A guest smiling with a drink aboard the schooner" },
  { src: "/ingested/flagship-owner/guest-snorkel-vests-trio.jpg", alt: "Three guests smiling in snorkel masks and life vests" },
  { src: "/ingested/flagshiparuba/img-008.webp", alt: "A snorkeler smiles at the camera in clear turquoise water off Aruba's coast" },
  { src: "/ingested/flagshiparubaa/snorkeler-boca-catalina.webp", alt: "A snorkeler smiling in the clear turquoise water off Boca Catalina" },
  { src: "/ingested/flagshiparubaa/snorkel-sea-turtle.webp", alt: "A sea turtle swimming in clear turquoise water" },
  { src: "/ingested/flagshiparuba/img-010.webp", alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water" },
  { src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp", alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water" },
  { src: "/ingested/flagshiparubaa/malmok-beach.webp", alt: "The turquoise coastline at Malmok Beach" },
  { src: "/ingested/flagship-owner/afternoon-coastline.jpg", alt: "The schooner anchored off Aruba's coast near Palm Beach" },
  { src: "/ingested/flagship-owner/kitesurf-coastline.jpg", alt: "Aerial view of the coastline near Malmok, Aruba" },
  { src: "/ingested/flagshiparubaa/boat-aerial-turquoise.webp", alt: "Aerial view of the schooner anchored in turquoise water" },
  { src: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp", alt: "The schooner sailing past a rocky cliff at sunset" },
  { src: "/ingested/flagshiparubaa/afternoon-pirate-party.webp", alt: "A sailboat off Aruba's coast near a resort-lined beach" },
  { src: "/ingested/flagshiparubaa/schooner-sunset-guests.webp", alt: "Guests aboard the schooner at sunset" },
  { src: "/ingested/flagshiparubaa/schooner-pink-sunset.webp", alt: "The schooner silhouetted under a pink sunset sky" },
  { src: "/ingested/flagshiparubaa/sunset-bird-silhouette.webp", alt: "A bird silhouetted against the sunset over the ocean" },
  { src: "/ingested/flagship-owner/restoration-owner-portrait.jpg", alt: "One of Flagship Aruba's owners beside the schooner during restoration" },
  { src: "/ingested/flagship-owner/restoration-worker-drilling.jpg", alt: "A crew member working on deck rigging during restoration" },
  { src: "/ingested/flagship-owner/restoration-worker-mask.jpg", alt: "A crew member preparing the hull during restoration" },
  { src: "/ingested/flagship-owner/restoration-worker-thumbsup.jpg", alt: "A crew member giving a thumbs up during the restoration project" },
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
              Every real photo we&apos;ve got
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The schooner, the crew, the restoration, and the guests who make every
              trip different. No stock photos, just what actually happens out there.
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
