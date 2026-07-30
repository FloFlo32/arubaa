"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const slides = [
  { src: "/ingested/flagshiparubaa/boat-aerial-turquoise.webp", alt: "The Flagship Aruba schooner sailing over turquoise water" },
  { src: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp", alt: "Guests snorkeling alongside a sea turtle" },
  { src: "/ingested/flagship-owner/ship-sunset-dramatic-wide.jpg", alt: "The schooner sailing under a dramatic pink sunset sky" },
  { src: "/ingested/flagshiparubaa/guest-e.webp", alt: "A large group of guests cheering together aboard the schooner" },
  { src: "/ingested/flagshiparubaa/schooner-turquoise-anchor.webp", alt: "The Flagship Aruba schooner anchored in turquoise water" },
];

const SLIDE_DURATION = 3000;
const FADE_DURATION = 600;
const TOTAL_MS = SLIDE_DURATION + FADE_DURATION * 2;

/** Hero background reel: Ken Burns zoom/pan per slide, fading through black
 * between slides, matching flagshiparuba.getyetti.com's hero animation. */
export function HeroSlideshow() {
  const [index, setIndex] = React.useState(0);
  const [fading, setFading] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let slideTimer: ReturnType<typeof setTimeout>;
    let fadeTimer: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      slideTimer = setTimeout(() => {
        setFading(true);
        fadeTimer = setTimeout(() => {
          setIndex((i) => (i + 1) % slides.length);
          setFading(false);
          scheduleNext();
        }, FADE_DURATION);
      }, SLIDE_DURATION);
    };

    scheduleNext();
    return () => {
      clearTimeout(slideTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className="absolute inset-0 size-full overflow-hidden" aria-hidden="true">
      <div
        key={index}
        className={cn(
          "absolute -inset-[10%] size-[120%] bg-cover bg-center motion-reduce:animate-none",
          index % 2 === 0 ? "animate-kenburns-a" : "animate-kenburns-b"
        )}
        style={{
          backgroundImage: `url(${slides[index].src})`,
          animationDuration: `${TOTAL_MS}ms`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black transition-opacity ease-in-out"
        style={{ opacity: fading ? 1 : 0, transitionDuration: `${FADE_DURATION}ms` }}
      />
    </div>
  );
}
