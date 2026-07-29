import { Waves, Utensils, Anchor } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const features = [
  {
    icon: Anchor,
    title: "Premium snorkel sites",
    body: "The WWII shipwreck SS Antilla, Boca Catalina and Malmok Reef, all in one trip on our pirate-style schooner.",
  },
  {
    icon: Utensils,
    title: "Open bar and local bites",
    body: "Drinks and Caribbean-style food come standard on every cruise. No add-ons, no upcharges.",
  },
  {
    icon: Waves,
    title: "The rope swing finale",
    body: "Every trip ends the same way: a proper rope swing off the ship into the clear Caribbean water.",
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
              A pirate-style schooner, a <span className="text-ocean">witty crew</span>, and no shortage of rum.
            </h2>
            <p className="mt-4 max-w-lg text-primary-foreground/85">
              Flagship Aruba runs a genuine pirate-style schooner to Aruba&apos;s best
              snorkel sites, with a crew guests describe as friendly, witty, and
              genuinely fun to spend an afternoon with.
            </p>

            <RevealGroup className="mt-10 space-y-4" stagger={0.08}>
              {features.map((f) => (
                <RevealItem key={f.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/20 text-ocean">
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
                src="/ingested/flagshiparubaa/boat-aerial-turquoise.webp"
                alt="The Flagship Aruba schooner under sail off Aruba's coast"
                loading="lazy"
                decoding="async"
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-black/50 p-4 backdrop-blur-md">
                <p className="font-display text-sm font-semibold text-white">
                  &ldquo;A pirate-style schooner, a laid-back crew, and three of Aruba&apos;s best snorkel sites.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
