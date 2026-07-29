import { Camera } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Gallery } from "@/components/magic/gallery";
import { Badge } from "@/components/ui/badge";

const funPhotos = [
  { src: "/ingested/flagship-owner/ladyblack-jump.jpg", alt: "A guest jumping off the bow into the ocean" },
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A large group of guests cheering together aboard the schooner" },
  { src: "/ingested/flagshiparubaa/guest-g.webp", alt: "Guests dancing on deck at golden hour" },
  { src: "/ingested/flagshiparubaa/guest-b.webp", alt: "Three guests smiling in snorkel masks and life vests" },
  { src: "/ingested/flagshiparubaa/guest-d.webp", alt: "Guests toasting with drinks at the onboard bar" },
  { src: "/ingested/flagship-owner/guest-drinks-three.jpg", alt: "Guests smiling with drinks aboard the schooner" },
  { src: "/ingested/flagshiparubaa/guest-c.webp", alt: "A parent and child snorkeling together with the schooner behind them" },
  { src: "/ingested/flagshiparubaa/guest-h.webp", alt: "Guests relaxing together on the bow net" },
  { src: "/ingested/flagshiparubaa/guest-onboard-drink.webp", alt: "A guest smiling with a drink aboard the schooner" },
];

export function FunGallery() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge variant="accent" className="mx-auto">
          <Camera className="size-3.5" /> Real guests, real fun
        </Badge>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          This is what a day with us actually looks like
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          No stock photos. Every one of these is a real guest on a real Flagship Aruba
          cruise.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <Gallery images={funPhotos} />
      </Reveal>
    </section>
  );
}
