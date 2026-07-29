import { GridPattern } from "@/components/magic/grid-pattern";
import { cn } from "@/lib/utils";

/**
 * Attractive navy CTA panel — the replacement for the old plain white/cream
 * "bg-card" closing card used at the bottom of most pages. Optionally takes
 * a real photo background; otherwise falls back to a grid-pattern navy panel.
 */
export function SectionCTA({
  title,
  body,
  image,
  imageAlt,
  children,
  className,
}: {
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-16",
        !image && "bg-primary",
        className
      )}
    >
      {image ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt || ""} aria-hidden="true" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/55" />
        </>
      ) : (
        <GridPattern className="opacity-20" />
      )}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
        {body && <p className="max-w-md text-pretty text-primary-foreground/80">{body}</p>}
        {children && <div className="mt-2 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>
    </div>
  );
}
