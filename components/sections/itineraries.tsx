import { Reveal } from "@/components/magic/reveal";
import { Carousel } from "@/components/magic/carousel";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/magic/border-beam";

const slides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Aerial view of beachgoers on Aruba's turquoise water", caption: "Sun, sand, serenity" },
  { src: "/ingested/arubaa/img-041.webp", alt: "A parent carrying a child beachside in Aruba", caption: "Happy Kids, Happy Vacation" },
  { src: "/ingested/arubaa/img-019.webp", alt: "A woman relaxing in a spa robe in Aruba", caption: "In the Lap of Luxury" },
  { src: "/ingested/arubaa/img-040.webp", alt: "A traveler smiling on an Aruba beach", caption: "Riding Solo" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Friends gathered on the beach in Aruba", caption: "Savor It All" },
];

export function Itineraries() {
  return (
    <section id="itineraries" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground">
            Itineraries
          </Badge>
          <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
            Your Aruba Escape, planned by locals
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
            Explore itineraries written by local experts: from Sun, Sand, Serenity to Happy
            Kids, Happy Vacation, In the Lap of Luxury, and Riding Solo. Each one maps a
            full day of the Aruba Effect.
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
