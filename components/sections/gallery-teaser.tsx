import { Reveal } from "@/components/magic/reveal";
import { Carousel } from "@/components/magic/carousel";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/magic/border-beam";

const slides = [
  { src: "/ingested/jollypirates/img-030.webp", alt: "A guest swings from the rope swing beside the Jolly Pirates schooner", caption: "The Rope Swing" },
  { src: "/ingested/jollypirates/img-031.webp", alt: "The Jolly Pirates schooner under sail along Aruba's coast", caption: "Under Sail" },
  { src: "/ingested/jollypirates/img-010.webp", alt: "The Jolly Pirates crew in costume aboard the schooner", caption: "The Crew" },
  { src: "/ingested/jollypirates/img-020.webp", alt: "Guests enjoying drinks from the open bar on deck", caption: "The Open Bar" },
  { src: "/ingested/jollypirates/img-050.webp", alt: "A guest backflips into the Caribbean Sea off the coast of Aruba", caption: "Making a Splash" },
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
            26 years of jolly moments
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
            From the rope swing to the sunset toast, here&apos;s what a day aboard the
            Jolly Pirates schooners actually looks like.
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
