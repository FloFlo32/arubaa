"use client";

import * as React from "react";

const slides = [
  { src: "/ingested/flagshiparubaa/boat-aerial-turquoise.webp", alt: "The Flagship Aruba schooner sailing over turquoise water" },
  { src: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp", alt: "Guests snorkeling alongside a sea turtle" },
  { src: "/ingested/flagship-owner/ship-sunset-dramatic-wide.jpg", alt: "The schooner sailing under a dramatic pink sunset sky" },
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A large group of guests cheering together aboard the schooner" },
  { src: "/ingested/flagshiparubaa/schooner-turquoise-anchor.webp", alt: "The Flagship Aruba schooner anchored in turquoise water" },
  { src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp", alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water" },
  { src: "/ingested/flagshiparubaa/schooner-pink-sunset.webp", alt: "The schooner silhouetted under a vivid pink and orange sunset sky" },
];

const SLIDE_DURATION = 5000;
const FADE_DURATION = 1500;

/** Hero background reel: all slides stay mounted (so nothing ever pops in
 * mid-transition) and simply cross-dissolve via opacity, each with its own
 * slow, continuous Ken Burns zoom running independently of the fade. */
export function HeroSlideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 size-full overflow-hidden bg-primary" aria-hidden="true">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className="absolute -inset-[6%] size-[112%] animate-kenburns-loop bg-cover bg-center motion-reduce:animate-none"
          style={{
            backgroundImage: `url(${s.src})`,
            opacity: i === index ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            animationDelay: `${i * -4000}ms`,
          }}
        />
      ))}
    </div>
  );
}
