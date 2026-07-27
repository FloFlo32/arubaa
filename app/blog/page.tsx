import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Travel Blog: Tips, Culture, and Experiences",
  description:
    "Aruba travel tips, culture and experiences from the team behind One Happy Island.",
};

const topics = [
  {
    title: "Adventure",
    href: "/why-aruba/adventure",
    src: "/ingested/arubaa/img-027.webp",
    alt: "A couple exploring a sea cave and rock arch on Aruba's coastline",
    teaser: "Sea caves, rock arches and off road trails for the restless traveler.",
  },
  {
    title: "Romance",
    href: "/why-aruba/romance",
    src: "/ingested/arubaa/img-045.webp",
    alt: "A couple sharing a quiet moment on an Aruba beach at sunset",
    teaser: "Sunset walks, private dinners and the moments couples come back for.",
  },
  {
    title: "Culture",
    href: "/why-aruba/culture",
    src: "/ingested/arubaa/img-033.webp",
    alt: "A group gathered together on an Aruba beach",
    teaser: "The traditions and industries that make the island's identity.",
  },
  {
    title: "Wellness",
    href: "/why-aruba/wellness",
    src: "/ingested/arubaa/img-019.webp",
    alt: "A woman relaxing in a spa robe beside candles and a soaking tub",
    teaser: "Spas, stillness and the slow mornings that reset your clock.",
  },
  {
    title: "Eat & Drink",
    href: "/why-aruba/eat-and-drink",
    src: "/ingested/arubaa/img-036.webp",
    alt: "A couple relaxing together on the coastal rocks in Aruba",
    teaser: "Local flavor, fresh seafood and the tables worth lingering at.",
  },
  {
    title: "Families",
    href: "/why-aruba/families",
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
    src: "/ingested/arubaa/img-047.webp",
    alt: "A couple in wedding attire running through the shallows on an Aruba beach",
    teaser: "Ready made day plans, whether you have three days or ten.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Stories from the island"
          title="Travel Blog, Tips, Culture and Experiences"
          body="We're just getting started with the amazing effects Aruba has to offer. Dig into your trip details below to unlock a Caribbean experience."
          src="/ingested/arubaa/img-051.webp"
          alt="A newlywed couple holding hands on an Aruba beach"
        />

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
