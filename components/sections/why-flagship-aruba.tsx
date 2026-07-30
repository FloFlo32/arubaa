import Link from "next/link";
import { Compass, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";

const values = [
  {
    icon: Compass,
    title: "Authentic Adventures",
    body: "We sail aboard a charming schooner, delivering an experience you won't find anywhere else in Aruba.",
  },
  {
    icon: Heart,
    title: "Passionate Crew",
    body: "Our friendly, witty crew makes every guest feel like family with their warmth, humor, and deep love for the sea.",
  },
  {
    icon: Sparkles,
    title: "Unforgettable Memories",
    body: "From snorkeling pristine reefs to rope-swinging into turquoise waters, we create moments that last a lifetime.",
  },
];

export function WhyFlagshipAruba() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <GridPattern className="opacity-20" />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            About Flagship Aruba
          </span>
          <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
            Why sail with us
          </h2>
          <p className="mt-3 text-pretty text-primary-foreground/85">
            Flagship Aruba delivers a memorable mix of adventure, snorkeling, and
            laid-back fun aboard a charming schooner.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3" stagger={0.08}>
          {values.map((v) => (
            <RevealItem
              key={v.title}
              className="flex flex-col rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-7"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-ocean/20 text-ocean ring-1 ring-ocean/30">
                <v.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">{v.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
            <Link href="/about">
              Our Story <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
