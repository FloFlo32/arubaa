import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "Boca Catalina vs. Malmok Beach",
  description:
    "Both are calm, shallow snorkel spots near Palm Beach. Here's how our crew decides which one to visit on a given day.",
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
              <Calendar className="size-3.5" /> June 2, 2026
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              Boca Catalina vs. Malmok Beach: Which Snorkel Spot Should You Pick?
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/guest-c.webp"
                alt="A parent and child snorkeling together with a schooner in the background"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              We visit both Boca Catalina and Malmok Beach on our Morning Splash
              Adventure and Afternoon Pirate Party, and guests ask us almost every trip:
              which one is actually better? The honest answer is that they solve
              different problems, so we usually try to hit both in the same outing when
              conditions allow.
            </p>
            <h2>Boca Catalina: the calmer, shallower option</h2>
            <p>
              Boca Catalina is a small, sheltered cove close to shore. The water is
              shallow enough that nervous swimmers and first-time snorkelers can stand up
              if they need a break, and the visibility is consistently good because the
              cove blocks most of the current. It&apos;s our default pick for families
              with younger kids or anyone snorkeling for the first time.
            </p>
            <h2>Malmok Beach: a bit more to see</h2>
            <p>
              Malmok sits along a rockier stretch of coastline and tends to have a
              slightly livelier reef, with more structure for fish to hide in. The trade
              off is a touch more current on certain days, so it rewards guests who are
              already comfortable in the water.
            </p>
            <h2>So which one should you pick?</h2>
            <p>
              If you&apos;re snorkeling with young kids or you&apos;ve never worn a mask
              and fins before, Boca Catalina is the safer, easier stop. If you&apos;ve
              snorkeled before and want a bit more scenery, Malmok is worth the slightly
              longer swim. On most of our tours you don&apos;t have to choose. We build
              the route around real-time conditions and try to give guests a taste of
              both.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="See both on the same trip"
              body="The Morning Splash Adventure visits Boca Catalina, Malmok Beach and the SS Antilla shipwreck in one outing."
              image="/ingested/flagshiparubaa/snorkeler-boca-catalina.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours/morning-splash-adventure">
                  See the Morning Splash Adventure <ArrowRight className="size-4" />
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
