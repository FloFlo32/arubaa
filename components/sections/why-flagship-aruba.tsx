import { Ship, Utensils, Heart } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const features = [
  {
    icon: Ship,
    title: "A real wooden pirate ship",
    body: "No modern catamarans here. Our schooner is a beautifully crafted wooden vessel built to look and feel like the real thing.",
  },
  {
    icon: Utensils,
    title: "Everything's included",
    body: "Snorkel gear, unlimited drinks and Caribbean bites come standard on every trip, no add-ons to think about.",
  },
  {
    icon: Heart,
    title: "Started by three friends",
    body: "We're a small, local crew who turned a childhood joke about owning a pirate ship into a real one.",
  },
];

export function WhyFlagshipAruba() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Why sail with us
          </span>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Three friends, one dream, one ship.
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            Flagship Aruba started as a childhood joke between three friends about
            owning a pirate ship someday. Today, that ship is real, and it&apos;s the one
            you&apos;ll be stepping onto.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.08}>
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary-foreground/15">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">{f.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
