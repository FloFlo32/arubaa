import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { ImageCard } from "@/components/magic/image-card";

const moments = [
  {
    eyebrow: "Moment 01",
    title: "The Rope Swing",
    description:
      "Swing out from the bow and let go. Every trip includes unlimited turns on the swing that made us famous.",
    href: "/cruises/morning-snorkeling",
    src: "/ingested/jollypirates/img-041.webp",
  },
  {
    eyebrow: "Moment 02",
    title: "Reef Snorkeling",
    description:
      "Mask, snorkel and fins included. Drift over calm, shallow reefs thick with tropical fish.",
    href: "/snorkel-sites",
    src: "/ingested/jollypirates/img-059.webp",
  },
  {
    eyebrow: "Moment 03",
    title: "Life on the Bow",
    description:
      "Stretch out on deck between stops while the schooner cuts through the turquoise water.",
    href: "/cruises",
    src: "/ingested/jollypirates/img-044.webp",
  },
  {
    eyebrow: "Moment 04",
    title: "The Open Bar",
    description:
      "Every cruise includes drinks at our open bar, from the first stop to the last splash.",
    href: "/cruises",
    src: "/ingested/jollypirates/img-025.webp",
  },
  {
    eyebrow: "Moment 05",
    title: "Golden Hour Toast",
    description:
      "Raise a glass as the sun drops into the Caribbean Sea on our sunset cruises.",
    href: "/cruises/sunset-sail",
    src: "/ingested/jollypirates/img-027.webp",
  },
  {
    eyebrow: "Moment 06",
    title: "The Splash Landing",
    description:
      "Cannonballs, backflips and belly flops off the schooner: the whole crew cheers you on.",
    href: "/cruises/morning-snorkeling",
    src: "/ingested/jollypirates/img-051.webp",
  },
];

export function ExperienceSlider() {
  return (
    <section id="the-experience" className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Onboard
        </span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
          Every cruise, the same jolly moments
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Whichever cruise you pick, expect the same traditional schooners, the same
          open bar, and the same rope swing that&apos;s been an Aruba tradition for over
          26 years.
        </p>
      </Reveal>

      <div className="mt-10">
        <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[32%]">
          {moments.map((m) => (
            <ImageCard
              key={m.title}
              src={m.src}
              alt={m.title}
              eyebrow={m.eyebrow}
              title={m.title}
              description={m.description}
              href={m.href}
              className="h-full"
            />
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
