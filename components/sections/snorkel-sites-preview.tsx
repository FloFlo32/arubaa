import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/magic/image-card";
import { snorkelSites } from "@/lib/snorkel-sites";

export function SnorkelSitesPreview() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Where we sail
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Our Snorkel Sites</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Discover Aruba&apos;s most beautiful underwater worlds.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3" stagger={0.08}>
        {snorkelSites.map((s) => (
          <RevealItem key={s.slug}>
            <ImageCard
              src={s.heroImage}
              alt={s.heroAlt}
              title={s.title}
              description={s.tagline}
              href="/snorkel-sites"
              className="h-full"
            />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-10 text-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/snorkel-sites">
            Explore Snorkel Sites <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
