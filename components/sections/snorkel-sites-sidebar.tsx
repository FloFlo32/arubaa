import Link from "next/link";
import { Waves } from "lucide-react";
import { BookNowButton } from "@/components/widget/book-now-button";
import { snorkelSites } from "@/lib/snorkel-sites";

/**
 * Sticky sidebar of the other snorkel sites with a quick book action, meant
 * to sit beside a site's detail content.
 */
export function SnorkelSitesSidebar({ excludeSlug }: { excludeSlug: string }) {
  const others = snorkelSites.filter((s) => s.slug !== excludeSlug);

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Other Snorkel Sites
        </h3>
        <div className="mt-4 space-y-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/snorkel-sites/${s.slug}`}
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background p-2.5 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.heroImage}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold transition-colors group-hover:text-primary">{s.title}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Waves className="size-3 shrink-0" /> {s.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <BookNowButton activityId="" label="Book a Snorkel Tour" size="default" className="w-full" />
        </div>
      </div>
    </aside>
  );
}
