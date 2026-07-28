import { Ship, Utensils, Leaf } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const features = [
  {
    icon: Ship,
    title: "Real teak schooners",
    body: "No modern catamarans here. Our twin 85-foot wooden schooners have sailed Aruba's coast for over 26 years.",
  },
  {
    icon: Utensils,
    title: "Everything's included",
    body: "Snorkel gear, an open bar and a full BBQ spread come standard, no add-ons to think about at checkout.",
  },
  {
    icon: Leaf,
    title: "Reef-friendly by design",
    body: "Recyclable cups, reusable souvenir bags, and proceeds from our reef bracelets support Aruba's Marine Park.",
  },
];

export function WhyJollyPirates() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Why sail with us
          </span>
          <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            26 years of the same winning formula.
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/85">
            Majestic wooden ships, onboard merriment and expert crews, now paired with
            greener habits that keep Aruba&apos;s reefs healthy for the next 26 years.
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
