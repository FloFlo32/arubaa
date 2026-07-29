import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Why We Restored Our Own Schooner",
  description:
    "A modern catamaran would have been easier. Here's why three friends spent weeks restoring a wooden ship instead.",
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
              <Calendar className="size-3.5" /> April 8, 2026
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              Why We Restored Our Own Schooner Instead of Buying a Catamaran
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagship-owner/ship-transom-flagship-name.jpg"
                alt="The Flagship Aruba schooner's stern, freshly painted with the ship's name"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              Most boat tours in Aruba run modern catamarans: fast, wide, easy to
              maintain. We could have bought one. Instead, we spent weeks hand-restoring
              a wooden schooner, and guests ask us why almost every trip.
            </p>
            <h2>It had to feel like a real ship</h2>
            <p>
              Flagship Aruba started as a childhood joke between three friends about
              owning a pirate ship someday. A catamaran is a great boat, but it doesn&apos;t
              look or feel like one. A wooden schooner does: the rigging, the deck, the
              way she sits in the water. If we were going to build this, we wanted guests
              to step onto something that actually feels like the ship they imagined.
            </p>
            <h2>The restoration wasn&apos;t glamorous</h2>
            <p>
              Before she could carry her first guests, our crew hauled her out, scraped
              years of growth off the hull, rebuilt sections of the rigging, and repainted
              her name across the stern by hand. We filmed most of it, and it&apos;s not a
              highlight reel, it&apos;s sanding, scraping and a lot of patience. You can
              watch the actual footage on our homepage.
            </p>
            <h2>We still maintain her ourselves</h2>
            <p>
              A wooden ship this old only stays beautiful if someone takes care of her
              like family, so our crew still handles the maintenance directly instead of
              outsourcing it. It&apos;s more work than a fiberglass hull would be. We
              think it&apos;s worth it every time a guest asks if she&apos;s a real pirate
              ship.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">See the restoration for yourself</h2>
            <p className="max-w-md text-muted-foreground">
              Watch the full behind-the-scenes footage and read the rest of our story.
            </p>
            <Button asChild size="lg">
              <Link href="/about#the-restoration">
                See the Restoration <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
