import {
  Glasses,
  LifeBuoy,
  GlassWater,
  Utensils,
  Waves,
  Shirt,
  Music,
  Droplets,
  PackageCheck,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    icon: Glasses,
    title: "Mask, Snorkel & Fins",
    body: "Sized for every guest and sanitized before each trip, so you can jump straight into the reef.",
  },
  {
    icon: LifeBuoy,
    title: "Life Jackets",
    body: "On board for every guest, every size, kids included.",
  },
  {
    icon: GlassWater,
    title: "Open Bar",
    body: "Unlimited soft drinks, juices, local beer and cocktails on our afternoon and sunset cruises.",
  },
  {
    icon: Utensils,
    title: "Caribbean Snacks",
    body: "Island-style bites and a light lunch served right on deck.",
  },
  {
    icon: Waves,
    title: "Rope Swing",
    body: "Every afternoon cruise ends with a proper rope swing off the ship into the clear water.",
  },
  {
    icon: Shirt,
    title: "Beach Towels",
    body: "Fresh towels waiting on deck so you can dry off between snorkel stops.",
  },
  {
    icon: Music,
    title: "Live Music & Crew",
    body: "Our crew keeps the soundtrack going and the good vibes rolling all trip long.",
  },
  {
    icon: Droplets,
    title: "Fresh Water Rinse",
    body: "Rinse off the salt water before we sail back to the dock.",
  },
];

export function WhatWeProvide() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge variant="accent" className="mx-auto">
          <PackageCheck className="size-3.5" /> What we provide
        </Badge>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          Everything&apos;s already on board
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Show up in your swimsuit. Gear, food, drinks and towels are all included, sized
          and ready for every guest before we leave the dock.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
        {items.map((f) => (
          <RevealItem key={f.title}>
            <div className="flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <f.icon className="size-5.5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{f.body}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
