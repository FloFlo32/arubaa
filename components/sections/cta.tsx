import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl px-6 py-24 text-center sm:px-12 sm:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagship-owner/ladyblack-jump.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/50" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ocean ring-1 ring-ocean/30">
              Spots go fast
            </span>
            <h2 className="mx-auto mt-5 max-w-xl text-balance text-4xl font-bold text-primary-foreground sm:text-5xl">
              Ready to set sail?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-primary-foreground/85">
              Reserve your spot on the Morning Splash Adventure, the Afternoon Pirate
              Party, or the Sunset & Stars Cruise.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookNowButton />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <Link href="/boat-tours">
                  See Boat Tours <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
