import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";

export function ReviewsTeaser() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="relative grid overflow-hidden rounded-3xl bg-primary text-primary-foreground sm:grid-cols-[1fr_1.2fr]">
        <GridPattern className="opacity-20" />
        <BorderBeam colorFrom="var(--color-ocean)" colorTo="var(--color-aurora-2)" />
        <div className="relative min-h-[220px] sm:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagshiparubaa/schooner-sunset-guests.webp"
            alt="Guests aboard the Flagship Aruba schooner"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center gap-4 p-8 sm:p-12">
          <Quote className="size-8 text-ocean" />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-ocean text-ocean" />
            ))}
          </div>
          <p className="text-pretty text-lg font-medium sm:text-xl">
            &ldquo;Flagship Aruba delivers a memorable mix of adventure, snorkeling, and
            laid-back fun aboard charming schooners. Guests consistently praise the
            friendly, witty crew, open bar, and great music, contributing to a festive
            atmosphere especially during the rope-swing finale. The snorkeling spots,
            including the WWII shipwreck SS Antilla, Boca Catalina, and Malmok Reef, are
            beautiful and well-chosen.&rdquo;
          </p>
          <p className="text-sm font-semibold text-primary-foreground/80">Lisa de Boer</p>
        </div>
      </Reveal>
    </section>
  );
}
