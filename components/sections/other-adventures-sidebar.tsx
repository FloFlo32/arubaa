import Link from "next/link";
import { Clock } from "lucide-react";
import { BookNowButton } from "@/components/widget/book-now-button";
import { allAdventures } from "@/lib/adventures";

/**
 * Sticky sidebar of other adventures with a quick book action, meant to sit
 * beside a tour's main content so guests can cross-sell themselves without
 * leaving the page.
 */
export function OtherAdventuresSidebar({ excludeSlug }: { excludeSlug: string }) {
  const others = allAdventures.filter((a) => a.slug !== excludeSlug);

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl border border-primary/15 bg-primary p-5 text-primary-foreground">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
          Other Adventures
        </h3>
        <div className="mt-4 space-y-3">
          {others.map((a) => (
            <Link
              key={a.slug}
              href={a.href}
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-2.5 transition-colors hover:border-ocean/40 hover:bg-ocean/10"
            >
              <div className="size-14 shrink-0 overflow-hidden rounded-lg bg-primary-foreground/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={a.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold transition-colors group-hover:text-ocean">{a.title}</p>
                <p className="flex items-center gap-1 text-xs text-primary-foreground/70">
                  <Clock className="size-3 shrink-0" /> {a.time}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <BookNowButton activityId="" label="Book Any Adventure" size="default" className="w-full bg-ocean text-primary hover:bg-ocean/90" />
        </div>
      </div>
    </aside>
  );
}
