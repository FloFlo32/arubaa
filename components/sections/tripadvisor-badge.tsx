import { Star } from "lucide-react";
import { TripAdvisorIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * TripAdvisor "#1 Boat Tour" recognition badge. Used in the Hero (compact)
 * and in the dedicated homepage section before the FAQ (larger, with copy).
 */
export function TripAdvisorBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border border-[oklch(0.6_0.15_155)]/25 bg-card px-4 py-2.5 shadow-lg shadow-black/10",
        className
      )}
    >
      <TripAdvisorIcon className="size-7 shrink-0 text-[oklch(0.5_0.14_155)]" />
      <div className="text-left leading-tight">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-[oklch(0.6_0.15_155)] text-[oklch(0.6_0.15_155)]" />
          ))}
        </div>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-foreground">
          #1 Boat Tour in Aruba
        </p>
      </div>
    </div>
  );
}
