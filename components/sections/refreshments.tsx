import { GlassWater, Utensils, Citrus, IceCreamCone } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

const menu = [
  {
    icon: GlassWater,
    title: "Open Bar",
    body: "Cocktails, local beer, wine and soft drinks, poured all trip long. No add-ons, no upcharges.",
    src: "/ingested/flagshiparubaa/guest-d.webp",
    alt: "Guests toasting with drinks at the onboard bar",
  },
  {
    icon: Utensils,
    title: "Caribbean Bites",
    body: "Island-style snacks and a full lunch spread on our afternoon and evening cruises.",
    src: "/ingested/flagship-owner/guest-drinks-three.jpg",
    alt: "Guests enjoying drinks and snacks together on deck",
  },
  {
    icon: Citrus,
    title: "Tropical Refreshers",
    body: "Fresh juices and cold water between snorkel stops, so nobody's ever thirsty out here.",
    src: "/ingested/flagshiparubaa/guest-onboard-drink.webp",
    alt: "A guest smiling with a tropical drink aboard the schooner",
  },
  {
    icon: IceCreamCone,
    title: "Golden Hour Treats",
    body: "Sweet island bites while the sky turns pink on the Sunset & Stars Cruise.",
    src: "/ingested/flagshiparubaa/schooner-sunset-guests.webp",
    alt: "Guests relaxing together as the sun sets",
  },
];

export function Refreshments() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[oklch(0.92_0.06_55)] via-[oklch(0.94_0.05_80)] to-ocean/15"
      />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge variant="accent" className="mx-auto border-[oklch(0.6_0.15_45)]/30 bg-[oklch(0.6_0.15_45)]/10 text-[oklch(0.42_0.14_40)]">
            <Utensils className="size-3.5" /> Eat, drink, sail
          </Badge>
          <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
            What&apos;s on board with every trip
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Good food and a full bar are part of the trip, not an upsell. Here&apos;s
            what&apos;s always waiting for you on deck.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {menu.map((m) => (
            <RevealItem
              key={m.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-ocean/15 text-ocean">
                  <m.icon className="size-5" />
                </span>
                <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
