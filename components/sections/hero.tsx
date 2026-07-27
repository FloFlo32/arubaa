import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-7xl gap-10 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <Badge variant="accent">One Happy Island</Badge>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
              Love Aruba.
              <br />
              <span className="text-gradient">Feel it back.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              When you arrive with curiosity and openness, Aruba responds in kind. Discover
              the connections, culture and quiet moments that turn visitors into family.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/why-aruba">
                  Discover the Aruba Effect <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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
        </div>

        <Reveal delay={0.2}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
              <Image
                src="/ingested/arubaa/img-023.webp"
                alt="A dancer leaping on the beach rocks of Aruba at sunset"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={80}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-black/10 sm:block">
              <p className="font-display text-3xl font-bold text-primary">300+</p>
              <p className="mt-1 text-sm text-muted-foreground">sunny days a year, more than any other Caribbean island</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
