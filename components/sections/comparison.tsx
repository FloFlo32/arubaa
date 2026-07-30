import { Check, X, Scale, ArrowRight, Anchor } from "lucide-react";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { BookNowButton } from "@/components/widget/book-now-button";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { cn } from "@/lib/utils";

/** Generic, unbranded catamaran silhouette used to represent "other ships"
 * without depicting or naming any real competitor's actual vessel. */
function DummyShipIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 110" fill="none" aria-hidden className={cn("h-24 w-auto", className)}>
      <path d="M20 78 L180 78 L165 96 Q100 104 35 96 Z" fill="currentColor" opacity="0.5" />
      <rect x="55" y="40" width="90" height="10" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="40" y="50" width="120" height="28" rx="3" fill="currentColor" opacity="0.6" />
      <line x1="100" y1="12" x2="100" y2="50" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
      <path d="M100 12 L128 24 L100 34 Z" fill="currentColor" opacity="0.3" />
      {[62, 78, 94, 110, 126, 142].map((cx) => (
        <circle key={cx} cx={cx} cy="62" r="5" fill="currentColor" opacity="0.85" />
      ))}
    </svg>
  );
}

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

const GREEN = "oklch(0.55 0.13 150)";
const RED = "oklch(0.62 0.16 25)";

export function Comparison() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <AuroraBackground className="opacity-50" />
      <div className="container-px relative mx-auto max-w-6xl">
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

        <Reveal delay={0.06} className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ingested/flagship-owner/ladyblack-transom.jpg"
              alt="The Flagship Aruba schooner, a traditional wooden sailing vessel"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="flex items-center gap-2 bg-card p-4">
              <Check className="size-4 shrink-0" style={{ color: GREEN }} />
              <div>
                <p className="text-sm font-bold text-foreground">Flagship Aruba</p>
                <p className="text-xs text-muted-foreground">Our schooner, max 24 guests</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-dashed border-border">
            <div className="relative flex aspect-[4/3] items-center justify-center bg-muted">
              <GridPattern className="opacity-40" />
              <DummyShipIllustration className="relative text-muted-foreground" />
            </div>
            <div className="flex items-center gap-2 bg-card p-4">
              <X className="size-4 shrink-0" style={{ color: RED }} />
              <div>
                <p className="text-sm font-bold text-foreground">Other Ships</p>
                <p className="text-xs text-muted-foreground">Typical big-group tour boats</p>
              </div>
            </div>
          </div>
        </Reveal>

        <RevealGroup
          className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-border shadow-sm"
          stagger={0.06}
        >
          <div className="grid grid-cols-2">
            <div
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold"
              style={{ backgroundColor: "color-mix(in oklch, " + GREEN + " 14%, transparent)", color: GREEN }}
            >
              <Anchor className="size-4" /> Flagship Aruba
            </div>
            <div
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold"
              style={{ backgroundColor: "color-mix(in oklch, " + RED + " 10%, transparent)", color: RED }}
            >
              <X className="size-4" /> Other Ships
            </div>
          </div>
          <div className="divide-y divide-border">
            {rows.map((r) => (
              <RevealItem key={r.label}>
                <p className="bg-muted/40 px-5 pt-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:px-6">
                  {r.label}
                </p>
                <div className="grid grid-cols-2">
                  <div
                    className="flex items-start gap-2 p-5 pt-3 sm:p-6 sm:pt-3"
                    style={{ backgroundColor: "color-mix(in oklch, " + GREEN + " 6%, transparent)" }}
                  >
                    <Check className="mt-0.5 size-4 shrink-0" style={{ color: GREEN }} />
                    <p className="text-sm font-medium text-foreground">{r.us}</p>
                  </div>
                  <div
                    className="flex items-start gap-2 border-l border-border p-5 pt-3 sm:p-6 sm:pt-3"
                    style={{ backgroundColor: "color-mix(in oklch, " + RED + " 4%, transparent)" }}
                  >
                    <X className="mt-0.5 size-4 shrink-0" style={{ color: RED }} />
                    <p className="text-sm text-muted-foreground">{r.them}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>

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
      </div>
    </section>
  );
}
