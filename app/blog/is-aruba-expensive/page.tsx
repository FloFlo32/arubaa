import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "Is Aruba an Expensive Destination?",
  description:
    "Aruba isn't the cheapest island in the Caribbean, but it isn't the most expensive either. Here's where the money actually goes.",
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
              <Calendar className="size-3.5" /> January 22, 2026
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              Is Aruba an Expensive Destination Compared to Other Caribbean Islands?
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/boat-aerial-turquoise.webp"
                alt="Aerial view of a schooner anchored in turquoise water off Aruba"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              Short answer: Aruba sits in the middle of the pack, not the bargain end of
              the Caribbean, but not the most expensive either. Here&apos;s where that
              reputation actually comes from.
            </p>
            <h2>Almost everything is imported</h2>
            <p>
              Aruba is a small desert island with limited agriculture, so most food,
              drink and retail goods arrive by boat or plane. That pushes grocery and
              restaurant prices above what you&apos;d pay on a larger, more
              self-sufficient island.
            </p>
            <h2>It&apos;s still cheaper than the most exclusive islands</h2>
            <p>
              Compared to islands built around ultra-luxury tourism, Aruba is
              noticeably more accessible. There&apos;s a wide range of hotel categories,
              plenty of free or low-cost beaches, and tour operators (including us) that
              compete on value rather than assuming guests won&apos;t compare prices.
            </p>
            <h2>Where the real savings are</h2>
            <p>
              Booking activities directly with local operators instead of through resort
              concierge desks or third-party resellers is usually the single biggest way
              to save on excursions. It also tends to get you a more accurate answer
              about what a trip actually includes.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="Book direct, skip the markup"
              body="See how we price our tours and where the savings actually come from."
              image="/ingested/flagshiparubaa/coastline-cliff-sunset.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/deals">
                  See Deals & Offers <ArrowRight className="size-4" />
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
