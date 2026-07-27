import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, Sparkles, Wind, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Wellness in Aruba",
  description:
    "Cliffside stillness and slow, quiet luxury: how to disconnect and discover yourself in Aruba.",
};

const highlights = [
  {
    icon: Sparkles,
    title: "Slow, quiet luxury",
    src: "/ingested/arubaa/img-019.webp",
    alt: "A woman in a spa robe relaxes by a candlelit tub",
    description:
      "Spa rituals here lean into the island's own materials: aloe, sea salt and hours that stretch instead of rush.",
  },
  {
    icon: Wind,
    title: "Cliffside stillness",
    src: "/ingested/arubaa/img-031.webp",
    alt: "A woman standing alone on sandy terrain overlooking the sea in Aruba",
    description:
      "The island's bluffs face straight into the trade winds. Ten quiet minutes up there does more than an hour anywhere else.",
  },
  {
    icon: Sunrise,
    title: "Slow mornings by the water",
    src: "/ingested/arubaa/img-026.webp",
    alt: "A woman relaxing in a beach lounge chair at sunset in Aruba",
    description:
      "No alarm required. Aruba's mornings are for a slow coffee, a longer swim and a schedule that can wait until noon.",
  },
  {
    icon: Flower2,
    title: "Disconnect, together",
    src: "/ingested/arubaa/img-078.webp",
    alt: "A man and woman standing together near a palm tree on an Aruba beach",
    description:
      "Wellness here isn't solitary by default. Slow days by the water are just as easy to share as they are to spend alone.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Disconnect"
          title="Wellness"
          body="Aruba is made to help you disconnect from the world and discover yourself. Fewer distractions, more sun, and an island small enough that slowing down is the whole point."
          src="/ingested/arubaa/img-031.webp"
          alt="A woman standing alone on sandy terrain overlooking the sea in Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Built-in stillness
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Is it really a vacation if you need another one after?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Good news: Aruba isn&apos;t that kind of trip. Constant sun, low humidity and
              an island built around the water make rest the default setting, not
              something you have to schedule.
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
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              A few ways to unplug
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-039.webp"
              alt="Two people seated together on an Aruba beach"
              title="Beach yoga at sunrise"
              description="Quiet stretches on the sand before the island wakes up."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="A couple chats poolside together at a resort in Aruba"
              title="Pool days, unplugged"
              description="Resort pools built for doing absolutely nothing, on purpose."
            />
            <ImageCard
              src="/ingested/arubaa/img-036.webp"
              alt="A couple relaxing together on the coastal rocks in Aruba"
              title="Tide pool wandering"
              description="Slow walks along the rocks, with nowhere in particular to be."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to slow down?</h2>
            <p className="max-w-md text-muted-foreground">
              See all-inclusive stays and resort options built for rest.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/plan-your-visit#all-inclusive">
                  See All-Inclusive Stays <ArrowRight className="size-4" />
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
