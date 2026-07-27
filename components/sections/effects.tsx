import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { ImageCard } from "@/components/magic/image-card";

const effects = [
  {
    eyebrow: "Effect 01",
    title: "Sun, Sand, Serenity",
    description:
      "Endless white sand and crystal blue water. Lay in the sun, float in ecstasy, and fill up on some much-needed Aruban warmth for your trip home.",
    href: "/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-005.webp",
  },
  {
    eyebrow: "Effect 02",
    title: "Savor It All",
    description:
      "With over a hundred nationalities on island, Aruba is filled with flavors from every corner of the globe. Don't be surprised if you leave with a new favorite dish.",
    href: "/things-to-do#dining",
    src: "/ingested/arubaa/img-024.webp",
  },
  {
    eyebrow: "Effect 03",
    title: "One With Nature",
    description:
      "We don't really do indoors in Aruba. There's no wrong way to be one with nature here, but we have a few suggestions to get you started.",
    href: "/things-to-do#natural-wonders",
    src: "/ingested/arubaa/img-022.webp",
  },
  {
    eyebrow: "Effect 04",
    title: "One Happy Family",
    description:
      "The Aruba Effect doesn't care if you're 5 or 50, it's felt by anyone who opens themselves to Aruba's magic. Perfect for parents and kids alike.",
    href: "/why-aruba#families",
    src: "/ingested/arubaa/img-037.webp",
  },
  {
    eyebrow: "Effect 05",
    title: "Slow It Down",
    description:
      "Sometimes all you need is peace and quiet to reconnect with those who matter most. Aruba is filled with the solace you need to slow things down.",
    href: "/why-aruba#wellness",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effect 06",
    title: "Instant Local",
    description:
      "All it takes is a few minutes on Aruba to feel like a local yourself. Pull up a seat at a rum shop, or find the best local swimming spot: either way you'll feel at home.",
    href: "/why-aruba#culture",
    src: "/ingested/arubaa/img-020.webp",
  },
];

export function Effects() {
  return (
    <section id="the-aruba-effect" className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Things to do in Aruba
        </span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
          Sure, our beaches are some of the best in the world.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          But look beyond the endless sun, sand and water, and you&apos;ll find an island
          teeming with experiences: scenic hikes, stunning coves and unforgettable cuisine.
          Explore the Aruba Effects below, written by local experts.
        </p>
      </Reveal>

      <div className="mt-10">
        <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[32%]">
          {effects.map((e) => (
            <ImageCard
              key={e.title}
              src={e.src}
              alt={e.title}
              eyebrow={e.eyebrow}
              title={e.title}
              description={e.description}
              href={e.href}
              className="h-full"
            />
          ))}
        </AutoSlider>
      </div>
    </section>
  );
}
