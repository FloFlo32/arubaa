import Link from "next/link";
import { Waves, ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { snorkelSites } from "@/lib/snorkel-sites";

/** Bottom-of-page "Related Sites" grid, mirroring RelatedTours for snorkel pages. */
export function RelatedSites({ excludeSlug }: { excludeSlug: string }) {
  const others = snorkelSites.filter((s) => s.slug !== excludeSlug);

  return (
    <section className="container-px mx-auto max-w-6xl pb-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Other snorkel sites</h2>
      <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.08}>
        {others.map((s) => (
          <RevealItem key={s.slug}>
            <Link
              href={`/snorkel-sites/${s.slug}`}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.heroImage}
                  alt={s.heroAlt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-5">
                <h3 className="flex items-center justify-between gap-2 font-semibold">
                  {s.title}
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Waves className="size-3.5 shrink-0" /> {s.tagline}
                </p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
