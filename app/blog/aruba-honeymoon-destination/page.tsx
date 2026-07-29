import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "What Makes Aruba a Popular Honeymoon Destination?",
  description:
    "Consistent sunshine, calm water and a small-island pace. Here's why so many couples end up choosing Aruba.",
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
              <Calendar className="size-3.5" /> February 20, 2026
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              What Makes Aruba Such a Popular Honeymoon Destination?
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagship-owner/ship-sunset-dramatic-wide.jpg"
                alt="A dramatic pink sunset over the water off Aruba's coast"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              We sail a lot of honeymooning couples, and after enough sunset cruises you
              start to notice the same reasons come up over and over.
            </p>
            <h2>The weather is close to a sure thing</h2>
            <p>
              Aruba sits outside the Caribbean&apos;s main hurricane belt and gets very
              little rainfall for most of the year, which matters a lot when you&apos;re
              planning a trip around one specific week and can&apos;t afford for it to
              wash out.
            </p>
            <h2>It&apos;s small enough to actually relax</h2>
            <p>
              The island is compact, easy to get around, and doesn&apos;t require the
              kind of full-day excursions some other Caribbean destinations do. That
              leaves more time for the parts of a honeymoon that aren&apos;t logistics:
              a slow dinner, a quiet beach, a sunset sail.
            </p>
            <h2>The water is calm, not just pretty</h2>
            <p>
              Aruba&apos;s leeward coast is shielded from the rougher Atlantic swell, so
              the water tends to be calm and clear rather than just photogenic. That
              makes it a genuinely good spot for couples who want to swim, snorkel or
              just sit on a boat together without fighting the ocean to do it.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="Sail into the sunset, literally"
              body="Our Sunset & Stars Cruise is a regular pick for honeymooners and anniversary trips."
              image="/ingested/flagship-owner/ship-sunset-dramatic-wide.jpg"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours/sunset-stars-cruise">
                  See Sunset & Stars Cruise <ArrowRight className="size-4" />
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
