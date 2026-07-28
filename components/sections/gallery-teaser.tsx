import { Reveal } from "@/components/magic/reveal";
import { Carousel } from "@/components/magic/carousel";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/magic/border-beam";

const slides = [
  { src: "/ingested/flagshiparuba/img-007.webp", alt: "The Flagship Aruba schooner under sail", caption: "Under Sail" },
  { src: "/ingested/flagshiparuba/img-006.webp", alt: "A guest jumps from the schooner into the ocean", caption: "Making a Splash" },
  { src: "https://images.unsplash.com/photo-1621932945904-c5be9be992d8?auto=format&fit=crop&w=1600&q=80", alt: "A happy group of friends riding on a boat", caption: "Good Times Onboard" },
  { src: "/ingested/flagshiparuba/img-008.webp", alt: "A snorkeler in clear turquoise water", caption: "Reef Snorkeling" },
  { src: "https://images.unsplash.com/photo-1519801584609-8ee5f072eddd?auto=format&fit=crop&w=1600&q=80", alt: "Friends relaxing together on the deck of a sailboat", caption: "Good Company" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80", alt: "A diver swims past a school of yellow reef fish", caption: "Marine Life" },
  { src: "/ingested/flagshiparuba/img-010.webp", alt: "Aerial view of the SS Antilla shipwreck", caption: "The Shipwreck" },
  { src: "https://images.unsplash.com/photo-1759567153576-abdd893a9065?auto=format&fit=crop&w=1600&q=80", alt: "Three friends laughing together at a beach hut", caption: "Making Memories" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80", alt: "A sailboat on the sand beside palm trees and a thatched umbrella", caption: "The Beach" },
  { src: "/ingested/flagshiparuba/img-009.webp", alt: "Aruba's rocky turquoise coastline", caption: "The Coastline" },
  { src: "https://images.unsplash.com/photo-1563196638-8c9457546e5f?auto=format&fit=crop&w=1600&q=80", alt: "A couple walking hand in hand on the beach at sunset", caption: "Golden Hour" },
];

export function GalleryTeaser() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground">
            Gallery
          </Badge>
          <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
            A day aboard Flagship Aruba
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
            From the first splash to the last sunset, here&apos;s what a trip with us
            actually looks like.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative mx-auto max-w-4xl rounded-[2rem] bg-background p-2 shadow-2xl shadow-black/20">
            <BorderBeam />
            <Carousel slides={slides} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
