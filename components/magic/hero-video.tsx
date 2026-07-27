"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * HeroVideo — full-bleed looping background video for a hero section.
 * Mirrors the source site's own hero treatment: a muted, looping video behind
 * the hero copy with a dark scrim on top for text contrast.
 *
 * Plays via a ref effect rather than the `autoplay` attribute so playback is
 * skipped entirely under prefers-reduced-motion (the poster frame shows instead).
 */
export function HeroVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={cn("absolute inset-0 size-full object-cover", className)}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
