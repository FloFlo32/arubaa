import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const cruises = [
  {
    eyebrow: "Most popular",
    title: "Morning Snorkeling Trip",
    time: "9am – 1pm · 4 hours",
    price: "$98",
    body: "Three snorkel stops during the calmest, clearest water of the day, a full BBQ lunch, open bar and the rope swing off the bow.",
    href: "/cruises/morning-snorkeling",
    img: "/ingested/jollypirates/img-051.webp",
    alt: "Guests leap from the Jolly Pirates schooner into the clear Caribbean water",
  },
  {
    eyebrow: "Shorter trip",
    title: "Afternoon Snorkeling Tour",
    time: "2pm – 5pm · 3 hours",
    price: "$76",
    body: "Two snorkel stops, the open bar and the rope swing, in a shorter window for guests who slept in.",
    href: "/cruises/afternoon-snorkeling",
    img: "/ingested/jollypirates/img-044.webp",
    alt: "Guests relaxing on the bow of the Jolly Pirates schooner in the afternoon sun",
  },
  {
    eyebrow: "Adults only",
    title: "Sunset Dinner Cruise",
    time: "5:30pm – 8:30pm · 3 hours",
    price: "$110",
    body: "A BBQ dinner with dessert, an open bar and a live DJ, aboard Aruba's liveliest pirate-ship party at sunset.",
    href: "/cruises/sunset-dinner-cruise",
    img: "/ingested/jollypirates/img-027.webp",
    alt: "Guests toast with drinks at golden hour aboard the Jolly Pirates sunset cruise",
  },
  {
    eyebrow: "Just the views",
    title: "Sunset Sail",
    time: "5:30pm – 7:30pm · 2 hours",
    price: "$59",
    body: "No snorkeling, just an open bar and the Aruban coastline as the sky turns pink over the water.",
    href: "/cruises/sunset-sail",
    img: "/ingested/jollypirates/img-031.webp",
    alt: "The Jolly Pirates schooner under sail along Aruba's turquoise coastline",
  },
];

export function CruisesOverview() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Our cruises
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Pick your Aruba adventure</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Four trips aboard our traditional teak schooners, from morning snorkeling to a
          sunset that turns the whole sky pink.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
        {cruises.map((c) => (
          <RevealItem key={c.title}>
            <Link
              href={c.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 top-3 rounded-full bg-background/95 px-3 py-1 font-display text-sm font-bold shadow-md">
                  {c.price}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {c.eyebrow}
                </span>
                <h3 className="flex items-start justify-between gap-2 font-display text-base font-semibold leading-snug">
                  {c.title}
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" /> {c.time}
                </p>
                <p className="text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
