import { Plane, Globe, Compass } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const features = [
  {
    icon: Plane,
    title: "Easy",
    body: "Aruba has convenient and direct flights from major U.S. and Canadian cities.",
  },
  {
    icon: Globe,
    title: "Convenient",
    body: "We speak four languages, and have more sunny days than any other Caribbean island.",
  },
  {
    icon: Compass,
    title: "Discoverable",
    body: "We're small, safe and modern, so you can make our entire island your playground.",
  },
];

export function NextStop() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Why we&apos;re different
          </span>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Next stop, One happy island.
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            There are many reasons why so many guests return to Aruba year after year. Here
            are just a few of the things that make our One happy island unlike any other
            destination.
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
