import Link from "next/link";
import { ArrowRight, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-28">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ingested/jollypirates/img-030.webp"
        alt="A guest swings from the rope swing into turquoise water beside the Jolly Pirates schooner"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      <div className="container-px relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
            <Anchor className="size-3.5" /> 26+ years sailing Aruba
          </Badge>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
            Snorkel, swing and sail like a pirate
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Climb aboard a traditional teak schooner for reef snorkeling, a rope-swing
            splash, an open bar and a sunset that turns the whole sky pink over Aruba&apos;s
            turquoise coast.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/cruises">
                See All Cruises <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/book-now">Book Now</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
            <span className="font-display text-lg font-bold">26+</span>
            <span className="text-sm text-white/80">years of sailing excursions on Aruba&apos;s twin schooners</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
