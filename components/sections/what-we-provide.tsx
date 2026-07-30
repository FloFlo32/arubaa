import { Waves, Music, PackageCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";

const iconItems = [
  {
    icon: Waves,
    title: "Fresh Towels",
    body: "Beach towels waiting on deck so you can dry off and relax between snorkel stops.",
  },
  {
    icon: Music,
    title: "Live Music & Crew",
    body: "Our crew keeps the soundtrack going, pours the drinks, and takes care of the rest.",
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

      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
        <RevealItem className="lg:col-span-2">
          <ImageCard
            src="/ingested/flagship-owner/guest-snorkel-vests-trio.jpg"
            alt="Three guests wearing life jackets and snorkel masks aboard the schooner"
            title="Life Jackets & Snorkel Gear"
            description="Masks, snorkels, fins and life jackets sized for every guest, sanitized and ready before you board."
            className="h-full"
          />
        </RevealItem>
        <RevealItem className="lg:col-span-2">
          <ImageCard
            src="/ingested/flagship-owner/guest-drinks-three.jpg"
            alt="Guests holding drinks with beach towels and fins aboard the schooner"
            title="Drinks & Caribbean Snacks"
            description="Unlimited soft drinks, water and Caribbean snacks, all cruise long."
            className="h-full"
          />
        </RevealItem>
        {iconItems.map((f) => (
          <RevealItem key={f.title} className="lg:col-span-2">
            <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <f.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">{f.body}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
