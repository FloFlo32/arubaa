import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";
import { BorderBeam } from "@/components/magic/border-beam";
import { BookNowButton } from "@/components/widget/book-now-button";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
          <GridPattern />
          <BorderBeam />
          <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold sm:text-5xl">
            Ready to set sail?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Reserve your spot on the Morning Splash Adventure, the Afternoon Pirate
            Party, or the Sunset & Stars Cruise.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookNowButton />
            <Button asChild size="lg" variant="outline">
              <Link href="/boat-tours">See Boat Tours</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
