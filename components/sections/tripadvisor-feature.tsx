import { TripAdvisorBadge } from "@/components/sections/tripadvisor-badge";
import { Reveal } from "@/components/magic/reveal";

export function TripAdvisorFeature() {
  return (
    <section className="container-px mx-auto max-w-4xl py-16 text-center">
      <Reveal className="flex flex-col items-center gap-5">
        <TripAdvisorBadge />
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">
          Recognized as Aruba&apos;s #1 boat tour
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Travelers on TripAdvisor have ranked Flagship Aruba the #1 boat tour on the
          island. We think it comes down to the basics: a real wooden schooner, a small
          group size, and a crew that treats every trip like it&apos;s their own.
        </p>
      </Reveal>
    </section>
  );
}
