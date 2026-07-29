"use client";

import * as React from "react";
import { Play, Hammer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

const restorationClips = [
  {
    title: "The Stakes Were Real",
    caption: "“One mistake could damage the vessel beyond repair.”",
    src: "/videos/restoration-forklift.mp4",
    poster: "/videos/posters/restoration-forklift.jpg",
  },
  {
    title: "Scraping Years Off the Hull",
    caption: "“For the first time in years, we could finally see the bottom of the ship.”",
    src: "/videos/restoration-equipment.mp4",
    poster: "/videos/posters/restoration-equipment.jpg",
  },
  {
    title: "All Hands on Deck",
    caption: "No shortcuts. Every rope, every plank, pulled by our own crew.",
    src: "/videos/restoration-announcement.mp4",
    poster: "/videos/posters/restoration-announcement.jpg",
  },
  {
    title: "Every Inch By Hand",
    caption: "Moving a wooden schooner this size takes patience and a steady hand.",
    src: "/videos/restoration-haulout.mp4",
    poster: "/videos/posters/restoration-haulout.jpg",
  },
];

function VideoCard({
  title,
  caption,
  src,
  poster,
  featured,
}: {
  title: string;
  caption: string;
  src: string;
  poster: string;
  featured?: boolean;
}) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card",
        featured ? "aspect-[4/5] sm:aspect-[16/10]" : "aspect-[4/5]"
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="none"
        className="absolute inset-0 size-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 flex cursor-pointer flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 text-left"
        >
          <span className="grid size-14 place-items-center self-center justify-self-center rounded-full bg-white/15 text-white ring-1 ring-white/40 backdrop-blur transition-transform duration-200 group-hover:scale-110">
            <Play className="size-6 fill-current" />
          </span>
          <span className="mt-auto">
            <span className="block text-lg font-semibold text-white">{title}</span>
            <span className="mt-1 block text-sm text-pretty text-white/80">{caption}</span>
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoShowcase() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <Badge variant="accent">
          <Hammer className="size-3.5" /> The full story
        </Badge>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          Watch the restoration, then watch the fun start
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          We filmed the whole rebuild, scraped hulls, hauled ropes and all, because we
          wanted guests to see exactly what it took to get this schooner back on the
          water. Press play on any clip below.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <VideoCard
            featured
            title="Life Aboard"
            caption="Snorkel masks on, life vests strapped, ready to jump in."
            src="/videos/hero-guests-waving.mp4"
            poster="/videos/posters/hero-guests-waving.jpg"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <VideoCard featured {...restorationClips[0]} />
        </Reveal>
      </div>

      <RevealGroup className="mt-5 grid grid-cols-3 gap-5" stagger={0.06}>
        {restorationClips.slice(1).map((c) => (
          <RevealItem key={c.title}>
            <VideoCard {...c} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
