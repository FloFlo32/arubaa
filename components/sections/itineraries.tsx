import { Reveal } from "@/components/magic/reveal";
import { Carousel } from "@/components/magic/carousel";

const slides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Aerial view of beachgoers on Aruba's turquoise water", caption: "Sun, sand, serenity" },
  { src: "/ingested/arubaa/img-041.webp", alt: "A parent carrying a child beachside in Aruba", caption: "Happy Kids, Happy Vacation" },
  { src: "/ingested/arubaa/img-019.webp", alt: "A woman relaxing in a spa robe in Aruba", caption: "In the Lap of Luxury" },
  { src: "/ingested/arubaa/img-040.webp", alt: "A traveler smiling on an Aruba beach", caption: "Riding Solo" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Friends gathered on the beach in Aruba", caption: "Savor It All" },
];

export function Itineraries() {
  return (
    <section id="itineraries" className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Itineraries
        </span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
          Your Aruba Escape, planned by locals
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Explore itineraries written by local experts: from Sun, Sand, Serenity to Happy
          Kids, Happy Vacation, In the Lap of Luxury, and Riding Solo. Each one maps a full
          day of the Aruba Effect.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <Carousel slides={slides} className="mx-auto max-w-4xl" />
      </Reveal>
    </section>
  );
}
