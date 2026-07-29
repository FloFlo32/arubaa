import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { ImageCard } from "@/components/magic/image-card";

const moments = [
  {
    eyebrow: "Moment 01",
    title: "Reef Snorkeling",
    description:
      "Mask, snorkel and fins included. Drift over calm, shallow reefs thick with tropical fish.",
    href: "/snorkel-sites",
    src: "/ingested/flagshiparuba/img-008.webp",
  },
  {
    eyebrow: "Moment 02",
    title: "Suited Up and Ready",
    description:
      "Vests on, masks ready. The best part of the trip is one step away.",
    href: "/boat-tours/morning-splash-adventure",
    src: "/ingested/flagship-owner/guest-snorkel-vests-trio.jpg",
  },
  {
    eyebrow: "Moment 03",
    title: "Good Company",
    description:
      "Friends, couples and families lounging together on deck between stops.",
    href: "/boat-tours/sunset-stars-cruise",
    src: "https://images.unsplash.com/photo-1519801584609-8ee5f072eddd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    eyebrow: "Moment 04",
    title: "Her Name on the Stern",
    description:
      "FLAGSHIP ARUBA, painted across the ship you'll actually be sailing on.",
    href: "/about#the-restoration",
    src: "/ingested/flagship-owner/ship-transom-blue-sky.jpg",
  },
  {
    eyebrow: "Moment 05",
    title: "Group Fun",
    description:
      "A boat full of friends is a better boat, every single time.",
    href: "/boat-tours/afternoon-pirate-party",
    src: "/ingested/flagshiparubaa/guest-e.webp",
  },
  {
    eyebrow: "Moment 06",
    title: "Sky on Fire",
    description:
      "Some evenings the whole sky turns pink and gold as we sail back in.",
    href: "/boat-tours/sunset-stars-cruise",
    src: "/ingested/flagship-owner/ship-sunset-dramatic.jpg",
  },
  {
    eyebrow: "Moment 07",
    title: "Life Under Sail",
    description:
      "Stretch out on deck while the schooner cuts through the turquoise water.",
    href: "/boat-tours",
    src: "/ingested/flagshiparubaa/schooner-turquoise-anchor.webp",
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
          Every trip, the same magic
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Whichever cruise you pick, expect the same wooden schooner, the same open bar,
          and the same crew that built this from a childhood dream.
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
