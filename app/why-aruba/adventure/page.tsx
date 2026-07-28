import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, Mountain, Waves, Bike, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Adventure in Aruba",
  description:
    "Cave arches, desert trails and open water: how to feel the Aruba Effect through adventure.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Arikok National Park",
    src: "/ingested/arubaa/img-031.webp",
    alt: "A woman standing alone on sandy terrain overlooking the sea in Aruba",
    description:
      "Nearly a fifth of the island is protected desert wilderness: towering cacti, limestone ridges and trails that end at hidden coves.",
  },
  {
    icon: Waves,
    title: "On the water",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Two people kayaking together off the Aruba coast",
    description:
      "Trade winds that never quit make Aruba one of the Caribbean's best spots for kayaking, windsurfing and sailing, whether you're racing or drifting.",
  },
  {
    icon: Compass,
    title: "Sea caves and rock arches",
    src: "/ingested/arubaa/img-027.webp",
    alt: "A couple explores a sea cave and rock arch along Aruba's coastline",
    description:
      "The north coast is carved by wind and waves into natural bridges and hollowed caves, best explored just after sunrise before the light gets sharp.",
  },
  {
    icon: Sunrise,
    title: "Chase the horizon",
    src: "/ingested/arubaa/img-063.webp",
    alt: "A group of friends jumping together on the beach at golden hour",
    description:
      "Early risers get the island practically to themselves: empty sandbars, cool desert air and a sunrise that turns the whole coastline gold.",
  },
];

export default function AdventurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Kaweta"
          title="Adventure"
          body="Kaweta. It means curious in Papiamento, and it's the perfect word for Aruba's spirit of exploration. Beyond the beaches, the island rewards anyone willing to go looking."
          src="/ingested/arubaa/img-031.webp"
          alt="A woman standing alone on sandy terrain overlooking the sea in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Four ways in
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Find your kind of adventure
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba packs desert, coastline and open water into an island you can cross in
              under an hour, which means you can chase all of it in a single trip.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2" stagger={0.06}>
            {highlights.map((h) => (
              <RevealItem key={h.title}>
                <ImageCard
                  src={h.src}
                  alt={h.alt}
                  eyebrow={h.title}
                  title={h.title}
                  description={h.description}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Bike className="size-5" />
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Built for exploring, not just visiting
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Rent a UTV for the desert interior, book a snorkel boat for the reefs, or just
              start walking from your hotel: Aruba is small enough that every kind of
              adventure is a short trip from where you&apos;re staying.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-077.webp"
              alt="Two people walking together on a sandbar in Aruba"
              title="Sandbar walks"
              description="Low tide opens up sandbars that stretch out into the turquoise shallows."
            />
            <ImageCard
              src="/ingested/arubaa/img-081.webp"
              alt="Two hikers silhouetted on a sand dune in Aruba"
              title="Dune hikes"
              description="The northeast coast is all rolling dunes and wind, best seen on foot."
            />
            <ImageCard
              src="/ingested/arubaa/img-065.webp"
              alt="A group of friends jumping together on the beach"
              title="Group excursions"
              description="Adventure is better shared: book a group tour and compare notes over dinner."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to explore?</h2>
            <p className="max-w-md text-muted-foreground">
              See tours, gear rentals and the rest of Aruba&apos;s things to do.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/things-to-do#natural-wonders">
                  See Natural Wonders <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/why-aruba">Back to Why Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
