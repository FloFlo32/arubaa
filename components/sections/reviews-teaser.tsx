import { Quote } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";

export function ReviewsTeaser() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
        <Quote className="mx-auto size-7 text-primary/40" />
        <p className="mt-4 text-pretty text-lg font-medium text-foreground sm:text-xl">
          &ldquo;Flagship Aruba delivers a memorable mix of adventure, snorkeling, and
          laid-back fun aboard charming schooners. Guests consistently praise the
          friendly, witty crew, open bar, and great music, contributing to a festive
          atmosphere especially during the rope-swing finale. The snorkeling spots,
          including the WWII shipwreck SS Antilla, Boca Catalina, and Malmok Reef, are
          beautiful and well-chosen.&rdquo;
        </p>
        <p className="mt-4 text-sm font-semibold text-muted-foreground">Lisa de Boer</p>
      </Reveal>
    </section>
  );
}
