import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    title: "Capped at 24 guests",
    body: "Small enough that the crew learns your name and your drink order by the second stop.",
  },
];

export function ReviewsTeaser() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge variant="accent" className="mx-auto">
          <Star className="size-3.5" /> Reviews
        </Badge>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          What to expect, straight from the crew
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          We&apos;re a young, family-run crew and we&apos;d rather you check independent
          reviews yourself than take our word for it. Here&apos;s what we can promise
          every guest who comes aboard.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
          >
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
          </div>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-10 text-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/reviews">
            Search Us on TripAdvisor & Google <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
