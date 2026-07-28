import type { Metadata } from "next";
import Link from "next/link";
import { Gem, ArrowRight, Sunset, Sparkles, HeartHandshake } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Weddings in Aruba",
  description:
    "Barefoot ceremonies and golden-hour vows: planning a dream wedding on One Happy Island.",
};

const highlights = [
  {
    icon: Sunset,
    title: "Barefoot ceremonies",
    src: "/ingested/arubaa/img-046.webp",
    alt: "A couple celebrates their wedding on an Aruban beach",
    description:
      "Say your vows with your toes in the sand and the sea as a backdrop. Most beachfront resorts handle the whole ceremony on-site.",
  },
  {
    icon: Sparkles,
    title: "Golden hour vows",
    src: "/ingested/arubaa/img-048.webp",
    alt: "A newly married couple holds hands on the shoreline",
    description:
      "Sunset light turns every ceremony photo into a keepsake, and Aruba's near-guaranteed clear skies make the timing easy to plan around.",
  },
  {
    icon: HeartHandshake,
    title: "Joy, in motion",
    src: "/ingested/arubaa/img-050.webp",
    alt: "A couple runs through the shallows on their wedding day",
    description:
      "Aruba's calm shallows leave room for a little celebration: a run through the water, a toast on the sand, portraits that don't feel posed.",
  },
  {
    icon: Gem,
    title: "A honeymoon that starts immediately",
    src: "/ingested/arubaa/img-052.webp",
    alt: "A man and a woman holding hands on an Aruba beach",
    description:
      "No transit day required between the wedding and the honeymoon: the same beach that hosted your ceremony can host the week after it.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Say I do"
          title="Weddings"
          body="Consistent sunny weather and stunning natural beauty make Aruba the ideal place for a dream wedding, whether that means fifty guests or none at all."
          src="/ingested/arubaa/img-046.webp"
          alt="A couple celebrates their wedding on an Aruban beach"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              One happy day
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Say yes on One Happy Island
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba&apos;s wedding planners handle everything from permits to flowers, so
              the only real decision left is where to say your vows: Eagle Beach for a
              classic backdrop, or the hilltop Alto Vista Chapel for something quieter.
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
              More ways to celebrate
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-047.webp"
              alt="A couple in wedding attire running through the shallows on an Aruba beach"
              title="First look on the sand"
              description="Private, early-morning first looks before the beach fills in."
            />
            <ImageCard
              src="/ingested/arubaa/img-049.webp"
              alt="A newlywed couple standing together on an Aruba beach"
              title="Vow renewals"
              description="Come back and do it again, this time with no planning required."
            />
            <ImageCard
              src="/ingested/arubaa/img-051.webp"
              alt="A bride and groom holding hands on an Aruba beach"
              title="Honeymoon suites"
              description="Book straight through, so the celebration doesn't have to end."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Start planning your day</h2>
            <p className="max-w-md text-muted-foreground">
              See resorts, guest services and everything else on your checklist.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/plan-your-visit#guest-services">
                  See Guest Services <ArrowRight className="size-4" />
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
