import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "Can Non-Hotel Guests Visit Flamingo Beach?",
  description:
    "Aruba's famous flamingo beach on Renaissance Island isn't open to everyone the same way. Here's what to actually expect.",
};

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container-px mx-auto max-w-3xl pt-28 pb-24 sm:pt-32">
          <Reveal>
            <Link href="/blog" className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-3.5" /> Back to blog
            </Link>
            <p className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5" /> March 18, 2026
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              Can Non-Hotel Guests Visit Flamingo Beach on Renaissance Island?
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/aerial-yacht-reef.webp"
                alt="Aerial view of turquoise water off Aruba's coast"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              Flamingo Beach is the small stretch of sand on Renaissance Island where
              Aruba&apos;s resident flamingos actually hang out, and it&apos;s one of
              the most photographed spots on the island. Guests ask us about it
              constantly, usually while we&apos;re anchored a short sail away from it.
            </p>
            <h2>It&apos;s tied to one specific resort</h2>
            <p>
              Renaissance Island sits just offshore from downtown Oranjestad and is
              privately managed by the Renaissance Wind Creek Aruba Resort. Access isn&apos;t
              open to the general public the way most Aruba beaches are: it&apos;s
              reserved for resort guests, or for visitors who purchase a day pass when
              one is available.
            </p>
            <h2>Day passes exist, but they&apos;re limited</h2>
            <p>
              The resort does sell day passes to non-guests from time to time, and they
              typically cover ferry access to the island plus a spot on Flamingo Beach or
              the adjacent Iguana Beach. Availability changes with the season and resort
              occupancy, so it&apos;s worth checking directly with the resort before you
              build a whole day around it.
            </p>
            <h2>Prefer flamingos from the water instead?</h2>
            <p>
              If a day pass doesn&apos;t work out, our sunset and snorkel routes sail
              along this stretch of coastline, so you still get a good look at Renaissance
              Island and the surrounding water without needing a reservation months in
              advance.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="See the coastline from the water"
              body="Our cruises sail past this part of Aruba on the way to our snorkel sites."
              image="/ingested/flagshiparubaa/boat-aerial-turquoise.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours">
                  See Boat Tours <ArrowRight className="size-4" />
                </Link>
              </Button>
            </SectionCTA>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
