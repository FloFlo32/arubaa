import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";
import { BorderBeam } from "@/components/magic/border-beam";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
          <GridPattern />
          <BorderBeam />
          <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold sm:text-5xl">
            We can&apos;t wait to see you.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Whichever way you like to travel, Aruba makes it easy to book the stay that&apos;s
            right for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/book-now">
                Book Now <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/deals">See Today&apos;s Deals</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
