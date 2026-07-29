import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { allAdventures } from "@/lib/adventures";

/**
 * Bottom-of-page "Related Tours" grid: every other tour/adventure, with a
 * photo and quick blurb, so guests always have a next step after reading.
 */
export function RelatedTours({ excludeSlug, title = "You might also like" }: { excludeSlug: string; title?: string }) {
  const others = allAdventures.filter((a) => a.slug !== excludeSlug).slice(0, 3);

  return (
    <section className="container-px mx-auto max-w-6xl pb-24">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-3" stagger={0.08}>
        {others.map((a) => (
          <RevealItem key={a.slug}>
            <Link
              href={a.href}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={a.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-5">
                <h3 className="flex items-center justify-between gap-2 font-semibold">
                  {a.title}
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5 shrink-0" /> {a.time}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{a.blurb}</p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
