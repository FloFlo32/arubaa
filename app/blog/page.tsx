import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";

export const metadata: Metadata = {
  title: "Travel Blog: Tips, Culture, and Experiences",
  description:
    "Aruba travel tips, culture and experiences from the team behind One Happy Island.",
};

const topics = [
  {
    title: "Adventure",
    href: "/why-aruba#adventure",
    src: "/ingested/arubaa/img-014.webp",
    alt: "A couple exploring a sea cave and rock arch on Aruba's coastline",
    teaser: "Sea caves, rock arches and off road trails for the restless traveler.",
  },
  {
    title: "Romance",
    href: "/why-aruba#romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "A couple sharing a quiet moment on an Aruba beach at sunset",
    teaser: "Sunset walks, private dinners and the moments couples come back for.",
  },
  {
    title: "Culture",
    href: "/why-aruba#culture",
    src: "/ingested/arubaa/img-020.webp",
    alt: "A farmer harvesting aloe in an Aruban aloe field",
    teaser: "The traditions and industries that make the island's identity.",
  },
  {
    title: "Wellness",
    href: "/why-aruba#wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "A woman relaxing in a spa robe beside candles and a soaking tub",
    teaser: "Spas, stillness and the slow mornings that reset your clock.",
  },
  {
    title: "Eat & Drink",
    href: "/why-aruba#eat-drink",
    src: "/ingested/arubaa/img-024.webp",
    alt: "Friends toasting drinks over a dinner table in Aruba",
    teaser: "Local flavor, fresh seafood and the tables worth lingering at.",
  },
  {
    title: "Families",
    href: "/why-aruba#families",
    src: "/ingested/arubaa/img-032.webp",
    alt: "A family enjoying the beach together in Aruba",
    teaser: "Easy days out that keep every age of the family happy.",
  },
  {
    title: "Beaches & Coves",
    href: "/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-026.webp",
    alt: "A woman relaxing in a beach lounge chair at sunset in Aruba",
    teaser: "From wide public sands to hidden coves worth the detour.",
  },
  {
    title: "Itineraries",
    href: "/things-to-do#itineraries",
    src: "/ingested/arubaa/img-017.webp",
    alt: "An aerial view of a couple on a sailboat deck off Aruba",
    teaser: "Ready made day plans, whether you have three days or ten.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <div className="container-px mx-auto grid max-w-7xl gap-10 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <Badge variant="accent">
                  <BookOpen className="size-3.5" /> Stories from the island
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Travel Blog, Tips, <span className="text-gradient">Culture and Experiences</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  We&apos;re just getting started with the amazing effects Aruba has to
                  offer. Dig into your trip details below to unlock a Caribbean
                  experience.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                <Image
                  src="/ingested/arubaa/img-018.webp"
                  alt="An aerial view of a couple on a sailboat deck off the coast of Aruba"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container-px mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl font-bold sm:text-5xl">Browse by topic</h2>
              <p className="mt-4 text-muted-foreground">
                These are the themes we write about most, each one linking back to the
                full guide on the island.
              </p>
            </Reveal>
          </div>

          <div className="container-px mx-auto max-w-6xl mt-10">
            <AutoSlider itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
              {topics.map((topic) => (
                <ImageCard
                  key={topic.title}
                  src={topic.src}
                  alt={topic.alt}
                  eyebrow="Topic"
                  title={topic.title}
                  description={topic.teaser}
                  href={topic.href}
                />
              ))}
            </AutoSlider>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Want the full guide?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                See every beach, cove and adventure Aruba has to offer, organized by what
                you love to do.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/things-to-do">
                    Read More on Things To Do <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
