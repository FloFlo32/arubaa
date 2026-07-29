import { Ship, Fish, Utensils, Users } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";

const stats = [
  {
    icon: Ship,
    value: "1",
    label: "Traditional wooden schooner, built to look like a real pirate ship",
  },
  {
    icon: Fish,
    value: "3",
    label: "Snorkel sites in rotation, from calm reef to WWII shipwreck",
  },
  {
    icon: Utensils,
    value: "3",
    label: "Boat tours to choose from, morning splash to sunset and stars",
  },
  {
    icon: Users,
    value: "3",
    label: "Friends who turned a childhood dream into a real crew",
  },
];

export function TrustBar() {
  return (
    <section className="container-px mx-auto -mt-10 max-w-7xl relative z-10 sm:-mt-14">
      <RevealGroup className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-black/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4" stagger={0.06}>
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <div className="flex h-full items-start gap-4 rounded-2xl p-3 transition-colors duration-200 hover:bg-accent">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
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
