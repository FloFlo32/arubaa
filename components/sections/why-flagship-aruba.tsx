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
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              Why sail with us
            </span>
            <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
              Three friends, one dream, one ship.
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/85">
              Flagship Aruba started as a childhood joke between three friends about
              owning a pirate ship someday. Today, that ship is real, and it&apos;s the
              one you&apos;ll be stepping onto.
            </p>

            <RevealGroup className="mt-10 space-y-4" stagger={0.08}>
              {features.map((f) => (
                <RevealItem key={f.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/15">
                      <f.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-primary-foreground/85">{f.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary-foreground/15 shadow-2xl shadow-black/30 sm:aspect-[5/6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparuba/img-007.webp"
                alt="The Flagship Aruba schooner under sail off Aruba's coast"
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-black/50 p-4 backdrop-blur-md">
                <p className="font-display text-sm font-semibold text-white">
                  &ldquo;A childhood joke, now a real pirate ship.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
