import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";
import { HeroVideo } from "@/components/magic/hero-video";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-28">
      <HeroVideo
        src="https://aruba.bynder.com/asset/bf675846-d8a4-4914-ad0a-75c106743d6b/mp4/01_ArubaHomepage_BGvideo_16x9_main.mp4"
        poster="/ingested/arubaa/img-040.webp"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />

      <div className="container-px relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
            One Happy Island
          </Badge>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
            Love Aruba. Feel it back.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            When you arrive with curiosity and openness, Aruba responds in kind. Discover
            the connections, culture and quiet moments that turn visitors into family.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/why-aruba">
                Discover the Aruba Effect <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a
                href="https://www.youtube.com/watch?v=GJYpiOU2mM0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="size-4" /> Watch the video
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
            <span className="font-display text-lg font-bold">300+</span>
            <span className="text-sm text-white/80">sunny days a year, more than any other Caribbean island</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
