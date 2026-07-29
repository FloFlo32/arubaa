import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "What to Pack for a Boat Day in Aruba",
  description:
    "A short, honest packing list from a crew that has seen what people wish they'd brought, and what they wish they hadn't.",
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
              <Calendar className="size-3.5" /> May 14, 2026
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              What to Pack for a Boat Day in Aruba
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/guest-h.webp"
                alt="Guests relaxing on the bow net of the schooner"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              We load and unload this boat every single day, so we&apos;ve seen exactly
              what guests wish they&apos;d packed, and what ends up sitting in a bag the
              whole trip. Here&apos;s the short version.
            </p>
            <h2>Bring this</h2>
            <ul>
              <li>Reef-safe sunscreen, applied before you get on the boat</li>
              <li>A swimsuit you can wear under your clothes, so you&apos;re ready to jump in</li>
              <li>A dry bag or ziplock for your phone and wallet</li>
              <li>A towel (we don&apos;t provide these on every tour)</li>
              <li>A light cover-up or hat for the ride between snorkel stops</li>
              <li>A GoPro or waterproof phone case if you want photos in the water</li>
            </ul>
            <h2>Skip this</h2>
            <ul>
              <li>Heavy bags. Storage on deck is limited and you won&apos;t need much.</li>
              <li>Your own snorkel gear, unless you have a strong preference. Mask, snorkel and fins are included.</li>
              <li>Glass containers of any kind, for obvious reasons on a moving boat.</li>
            </ul>
            <h2>One thing people forget</h2>
            <p>
              Motion sickness medication, if you know you&apos;re prone to it. Aruba&apos;s
              water is calmer than most Caribbean islands, but it&apos;s still open
              water. Take it before you board, not after you start feeling it.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="Ready to book?"
              body="Pick the tour that fits your trip and we'll take care of the rest."
              image="/ingested/flagshiparubaa/guest-e.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours">
                  See All Boat Tours <ArrowRight className="size-4" />
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
