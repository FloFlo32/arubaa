import type { Metadata } from "next";
import Link from "next/link";
import { Anchor, Users, Ship, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Flagship Aruba started as a childhood joke between three friends about owning a pirate ship. Now it's real.",
};

const values = [
  {
    icon: Users,
    title: "Three friends, one dream",
    body: "We grew up joking about owning a pirate ship someday. Today, that ship is the one you'll be stepping onto.",
  },
  {
    icon: Ship,
    title: "A real wooden schooner",
    body: "Not a modern catamaran dressed up for photos. Ours is a genuinely wooden vessel, built to feel like the real thing.",
  },
  {
    icon: Anchor,
    title: "MooMba Beach, Palm Beach",
    body: "We depart from the pier in front of MooMba Beach Bar, an easy walk from most Palm Beach resorts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Our story"
          title="From childhood joke to real pirate ship"
          body="Three friends with a shared love of the ocean turned an old joke into Flagship Aruba."
          src="/ingested/flagshiparuba/img-007.webp"
          alt="The Flagship Aruba schooner under sail"
        />

        <section id="our-story" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparuba/img-006.webp"
                  alt="A guest jumps from the Flagship Aruba schooner into the ocean"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Anchor className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Our story
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Three friends, one dream
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Flagship Aruba was founded by three lifelong friends with maritime
                backgrounds who shared a love of the ocean and a childhood joke about
                someday owning a pirate ship of their own. They turned that joke into a
                real, beautifully crafted wooden vessel, and built a crew around sharing
                the same sense of adventure with every guest who comes aboard.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                All of our cruises depart from the pier in front of MooMba Beach Bar on
                Palm Beach.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">What sets us apart</Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              The details that matter
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {values.map((v) => (
              <RevealItem
                key={v.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <v.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Come sail with us</h2>
            <p className="max-w-md text-muted-foreground">
              See all three boat tours and find the trip that fits your trip.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/boat-tours">
                  See Boat Tours <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
