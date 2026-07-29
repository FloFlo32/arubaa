"use client";

import * as React from "react";

const slides = [
  { src: "/ingested/flagshiparubaa/schooner-turquoise-anchor.webp", alt: "The Flagship Aruba schooner anchored in turquoise water" },
  { src: "/ingested/flagship-owner/ladyblack-jump.jpg", alt: "A guest jumping off the bow into the ocean" },
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A large group of guests cheering together aboard the schooner" },
  { src: "/ingested/flagshiparubaa/snorkel-sea-turtle.webp", alt: "A sea turtle swimming in clear turquoise water" },
  { src: "/ingested/flagship-owner/ship-sunset-dramatic-wide.jpg", alt: "The schooner sailing under a dramatic pink sunset sky" },
];

/** Crossfading background slideshow for the Hero. Plain <img>, not next/image,
 * since every slide is preloaded and stacked (this is a background, not content). */
export function HeroSlideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 size-full" aria-hidden="true">
      {slides.map((s, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.src}
          src={s.src}
          alt=""
          className="absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
