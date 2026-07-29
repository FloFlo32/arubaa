import Link from "next/link";
import { Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/brand.config";
import { allAdventures } from "@/lib/adventures";
import { snorkelSites } from "@/lib/snorkel-sites";

const tours = allAdventures.filter((a) => a.slug !== "private-charters");

export function ContactSidebar() {
  const query = encodeURIComponent(brand.contact.mapQuery || brand.contact.address);
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="bg-muted p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagship-owner/malmok-map.jpg"
            alt="Map of Aruba showing where Flagship Aruba sails"
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full rounded-lg object-contain"
          />
        </div>
        <div className="p-4">
          <Button asChild size="sm" className="w-full">
            <a href={directions} target="_blank" rel="noopener noreferrer">
              <Navigation className="size-4" /> Get Directions
            </a>
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Boat Tours
        </h3>
        <ul className="mt-3 space-y-2">
          {tours.map((t) => (
            <li key={t.slug}>
              <Link
                href={t.href}
                className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {t.title} <ArrowRight className="size-3.5 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Snorkel Sites
        </h3>
        <ul className="mt-3 space-y-2">
          {snorkelSites.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/snorkel-sites/${s.slug}`}
                className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {s.title} <ArrowRight className="size-3.5 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
