import { Check, X, Scale } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { BookNowButton } from "@/components/widget/book-now-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const rows = [
  {
    label: "Guests aboard",
    us: "Capped at 24, so the crew actually knows your name",
    them: "50+ passengers packed onto one boat",
  },
  {
    label: "The bar",
    us: "Real open bar: cocktails, local beer, wine, included",
    them: "Basic drinks only, premium pours cost extra",
  },
  {
    label: "The vessel",
    us: "A genuine traditional wooden schooner",
    them: "Standard fiberglass catamarans, like every other tour",
  },
  {
    label: "Deck space",
    us: "Room to actually stretch out and sunbathe",
    them: "Elbow to elbow, waiting your turn to jump in",
  },
  {
    label: "The vibe",
    us: "Small enough for real conversations, not anonymous crowds",
    them: "Generic, high-volume service",
  },
];

export function Comparison() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge variant="accent" className="mx-auto">
          <Scale className="size-3.5" /> How we compare
        </Badge>
        <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
          Not every boat tour in Aruba is built the same
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          We limit every cruise to 24 guests on purpose. Here&apos;s what that actually
          changes compared to the bigger operators.
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ingested/flagship-owner/ladyblack-transom.jpg" alt="The Flagship Aruba schooner" loading="lazy" decoding="async" className="aspect-square w-full rounded-2xl border border-border object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ingested/flagshiparubaa/guest-d.webp" alt="Guests at the open bar" loading="lazy" decoding="async" className="aspect-square w-full rounded-2xl border border-border object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ingested/flagshiparubaa/snorkeler-boca-catalina.webp" alt="A guest snorkeling in clear water" loading="lazy" decoding="async" className="aspect-square w-full rounded-2xl border border-border object-cover" />
      </Reveal>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border">
        <div className="grid grid-cols-2 bg-primary text-primary-foreground sm:grid-cols-[1.2fr_1fr_1fr]">
          <div className="hidden items-center p-5 font-display text-sm font-semibold uppercase tracking-wide sm:flex">
            What matters
          </div>
          <div className="flex items-center justify-center gap-2 p-5 text-center font-display text-sm font-semibold uppercase tracking-wide">
            Flagship Aruba
          </div>
          <div className="flex items-center justify-center p-5 text-center font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
            Typical Big-Boat Tours
          </div>
        </div>

        <RevealGroup stagger={0.06}>
          {rows.map((r, i) => (
            <RevealItem
              key={r.label}
              className={`grid grid-cols-2 sm:grid-cols-[1.2fr_1fr_1fr] ${i % 2 === 0 ? "bg-card" : "bg-muted/50"}`}
            >
              <div className="hidden p-5 text-sm font-semibold sm:block">{r.label}</div>
              <div className="flex items-start gap-2 border-t border-border p-5 sm:border-t-0">
                <Check className="mt-0.5 size-4 shrink-0 text-ocean" />
                <p className="text-sm text-pretty">{r.us}</p>
              </div>
              <div className="flex items-start gap-2 border-t border-l border-border p-5 sm:border-t-0">
                <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <p className="text-sm text-pretty text-muted-foreground">{r.them}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="max-w-md text-muted-foreground">
          Small group, real schooner, real bar. See it for yourself.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <BookNowButton />
          <Button asChild size="lg" variant="outline">
            <Link href="/boat-tours">
              See Boat Tours <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
