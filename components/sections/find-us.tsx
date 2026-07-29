import { MapPin, PartyPopper, Fish, Music, Anchor } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

const moments = [
  { icon: Fish, text: "Snorkeling above a real WWII shipwreck" },
  { icon: PartyPopper, text: "Swinging off the rope into the Caribbean Sea" },
  { icon: Music, text: "Island music and an open bar on deck" },
  { icon: Anchor, text: "Sailing a genuine wooden pirate-style schooner" },
];

export function FindUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ocean/15 via-background to-background py-20 sm:py-24">
      <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ocean">
            <MapPin className="size-3.5" /> You&apos;ll find us here
          </span>
          <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
            Right on Palm Beach, ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            We depart from the pier in front of MooMba Beach Bar on Palm Beach, an easy
            walk from most resorts. Come find the schooner, meet the crew, and let us
            show you our favorite corner of Aruba.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="container-px relative z-10 mx-auto mt-10 max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-ocean/20 bg-card p-4 shadow-xl shadow-ocean/10 sm:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagship-owner/malmok-map.jpg"
            alt="Map of Aruba showing where Flagship Aruba sails, near Palm Beach and Malmok"
            className="aspect-[3/2] w-full rounded-xl object-contain"
          />
        </div>
      </Reveal>

      <div className="container-px relative z-10 mx-auto mt-14 max-w-4xl text-center">
        <Reveal>
          <h3 className="text-balance text-2xl font-bold sm:text-3xl">
            Come enjoy some of our favorite moments
          </h3>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {moments.map((m) => (
            <RevealItem
              key={m.text}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-left"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/15 text-ocean">
                <m.icon className="size-5" />
              </span>
              <p className="font-medium">{m.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-10">
          <BookNowButton label="Come Sail With Us" />
        </Reveal>
      </div>
    </section>
  );
}
