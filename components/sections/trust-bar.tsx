import { Sun, Waves, Globe2, Plane } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";

const stats = [
  {
    icon: Sun,
    value: "300+",
    label: "Sunny days a year, more than any other Caribbean island",
  },
  {
    icon: Waves,
    value: "20+",
    label: "Public beaches and coves to choose from",
  },
  {
    icon: Globe2,
    value: "100+",
    label: "Nationalities living together on one happy island",
  },
  {
    icon: Plane,
    value: "100+",
    label: "Direct flights from major U.S. and Canadian cities",
  },
];

export function TrustBar() {
  return (
    <section className="container-px mx-auto -mt-10 max-w-7xl relative z-10 sm:-mt-14">
      <RevealGroup className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-black/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4" stagger={0.06}>
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <div className="flex h-full items-start gap-4 rounded-2xl p-3 transition-colors duration-200 hover:bg-accent">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <s.icon className="size-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold leading-none">{s.value}</p>
                <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
