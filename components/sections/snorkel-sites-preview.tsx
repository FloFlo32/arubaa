import { MapPin } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { snorkelSites } from "@/lib/snorkel-sites";

export function SnorkelSitesPreview() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Where we sail
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Our Snorkel Sites</h2>
        <p className="mt-3 text-muted-foreground">
          Discover Aruba&apos;s most beautiful underwater worlds.
        </p>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <RevealGroup className="space-y-4" stagger={0.08}>
          {snorkelSites.map((s) => (
            <RevealItem
              key={s.slug}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">{s.tagline}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-border shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagship-owner/guest-snorkel-vests-trio.jpg"
            alt="Guests wearing snorkel masks and life vests in the clear water off Aruba"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover sm:aspect-square"
          />
        </Reveal>
      </div>

      <Reveal delay={0.14} className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground">Ready to explore these sites for yourself?</p>
        <BookNowButton label="Book Your Snorkel Adventure" />
      </Reveal>
    </section>
  );
}
