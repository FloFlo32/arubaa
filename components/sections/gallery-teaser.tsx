import { Reveal } from "@/components/magic/reveal";
import { Carousel } from "@/components/magic/carousel";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/magic/border-beam";

const slides = [
  { src: "/ingested/flagshiparuba/img-007.webp", alt: "The Flagship Aruba schooner under sail", caption: "Under Sail" },
  { src: "/ingested/flagshiparuba/img-006.webp", alt: "A guest jumps from the schooner into the ocean", caption: "Making a Splash" },
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A large group of guests cheering together aboard the schooner", caption: "Good Times Onboard" },
  { src: "/ingested/flagshiparuba/img-008.webp", alt: "A snorkeler in clear turquoise water", caption: "Reef Snorkeling" },
  { src: "/ingested/flagshiparubaa/snorkel-sea-turtle.webp", alt: "A sea turtle swimming in clear turquoise water", caption: "Marine Life" },
  { src: "/ingested/flagshiparubaa/guest-onboard-drink.webp", alt: "A guest smiling with a drink aboard the schooner", caption: "Onboard Vibes" },
  { src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp", alt: "Aerial view of the SS Antilla shipwreck", caption: "The Shipwreck" },
  { src: "/ingested/flagshiparubaa/guest-b.webp", alt: "A parent and child snorkeling together, the schooner visible in the background", caption: "Family Time" },
  { src: "/ingested/flagshiparubaa/malmok-beach.webp", alt: "The turquoise coastline at Malmok Beach", caption: "The Coastline" },
  { src: "/ingested/flagshiparubaa/schooner-sunset-guests.webp", alt: "Guests aboard the schooner at sunset", caption: "Golden Hour" },
  { src: "/ingested/flagshiparubaa/sunset-bird-silhouette.webp", alt: "A bird silhouetted against the sunset over the ocean", caption: "Day's End" },
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
