import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What to expect from a tour with Flagship Aruba, straight from the crew who runs it.",
};

const highlights = [
  {
    title: "A crew that knows the water",
    body: "Our captains choose the day's snorkel stops based on real-time conditions, not a fixed script.",
  },
  {
    title: "A ship we restored ourselves",
    body: "We hand-restored our own schooner rather than buy a modern catamaran, because guests notice the difference.",
  },
  {
    title: "Small enough to remember your name",
    body: "We're a family-run crew, not a franchise. You'll recognize the same faces if you sail with us twice.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Reviews"
          title="We're still writing our story"
          body="Flagship Aruba is a young, family-run crew. We don't have a wall of reviews to show off yet, but here's what we can promise every guest who comes aboard."
          src="/ingested/flagship-owner/guest-drinks-three.jpg"
          alt="Guests smiling with drinks aboard the schooner"
        />

        <section className="container-px mx-auto max-w-5xl pb-16 pt-16">
          <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.08}>
            {highlights.map((h) => (
              <RevealItem
                key={h.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-12 text-center">
            <MessageCircle className="size-8 text-primary" />
            <h2 className="text-2xl font-bold sm:text-3xl">Search us before you book</h2>
            <p className="max-w-md text-muted-foreground">
              Look up &ldquo;Flagship Aruba&rdquo; on TripAdvisor or Google to read
              independent reviews from guests who&apos;ve sailed with us. We&apos;d
              rather you check for yourself than take our word for it.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Questions First? Contact Us <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
