import type { Metadata } from "next";
import Link from "next/link";
import { Anchor, Recycle, Fish, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "For over 26 years, Jolly Pirates has sailed twin teak schooners along Aruba's coast for snorkeling trips and sunset cruises.",
};

const values = [
  {
    icon: Recycle,
    title: "Reef-friendly cups & bags",
    body: "We've swapped in recyclable cups and reusable souvenir bags to cut down on what ends up in the water.",
  },
  {
    icon: Fish,
    title: "Save the reefs bracelets",
    body: "Proceeds from our reef bracelets go toward Aruba's Marine Park and its marine protection work.",
  },
  {
    icon: Anchor,
    title: "Traditional schooners",
    body: "Our twin 85-foot teak schooners are built the old way, and we intend to keep sailing them the old way.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Since day one"
          title="26 years on Aruba's water"
          body="Two traditional teak schooners, one winning formula: onboard merriment, expert crews, and Aruba's clearest water."
          src="/ingested/jollypirates/img-010.webp"
          alt="The Jolly Pirates crew in costume aboard the schooner"
        />

        <section id="our-story" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/jollypirates/img-031.webp"
                  alt="The Jolly Pirates schooner under sail along Aruba's turquoise coastline"
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
                Twin schooners, one Aruba tradition
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                For over 26 years, Jolly Pirates has sailed Aruba&apos;s coast with the
                billowing sails of our twin schooners, running snorkeling trips and
                sunset cruises for visitors from every corner of the world. We&apos;ve held
                to the same formula the whole time: majestic wooden ships, onboard
                merriment, and a crew that treats every trip like it&apos;s the first one.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                We depart from MooMba Beach, between the Holiday Inn and the Marriott,
                so wherever you&apos;re staying on the north coast, we&apos;re close by.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="sustainability" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">Looking after the reef</Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Greener habits, same good time
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              The water we sail is the reason we&apos;re still in business after 26 years, so
              we&apos;ve been shifting toward habits that keep it healthy for the next 26.
            </p>
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
              See our full cruise schedule and find the trip that fits your trip.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/cruises">
                  See All Cruises <ArrowRight className="size-4" />
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
