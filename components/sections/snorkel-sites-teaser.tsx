import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";
import { BookNowButton } from "@/components/widget/book-now-button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";

const sites = [
  {
    title: "SS Antilla Shipwreck",
    description:
      "A WWII-era wreck resting in Aruba's clear water, one of the largest shipwrecks in the Caribbean.",
    href: "/snorkel-sites/antilla-wreck",
    src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp",
    alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Boca Catalina",
    description:
      "A calm, shallow reef close to shore, thick with tropical fish and easy for every skill level.",
    href: "/snorkel-sites/boca-catalina",
    src: "/ingested/flagshiparubaa/snorkeler-boca-catalina.webp",
    alt: "A snorkeler smiling at the camera in the clear turquoise water off Boca Catalina",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Malmok Beach",
    description:
      "One of Aruba's top snorkel spots, with clear water close to shore and easy access.",
    href: "/snorkel-sites/malmok-beach",
    src: "/ingested/flagshiparubaa/malmok-beach.webp",
    alt: "The turquoise coastline and rocky shore at Malmok Beach in Aruba",
    span: "",
    ratio: "aspect-[4/3]",
  },
];

export function SnorkelSitesTeaser() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Where we sail
        </span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
          Reef to shipwreck, all in one trip
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {sites.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06} className={cn(s.span)}>
            <ImageCard
              src={s.src}
              alt={s.alt}
              title={s.title}
              description={s.description}
              href={s.href}
              ratio={s.ratio}
              className="h-full"
            />
          </Reveal>
        ))}

        <Reveal delay={0.18} className="sm:col-span-2">
          <div className="relative flex h-full flex-col justify-center gap-5 overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
            <GridPattern className="opacity-20" />
            <BorderBeam colorFrom="var(--color-ocean)" colorTo="var(--color-aurora-2)" />
            <div className="relative z-10 flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ocean/20 text-ocean ring-1 ring-ocean/30">
                <Compass className="size-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold">See all three in one trip</h3>
                <p className="mt-2 max-w-md text-sm text-pretty text-primary-foreground/80">
                  You don&apos;t have to pick just one. Our Morning Splash Adventure
                  visits the calm reef at Boca Catalina, the clear water off Malmok
                  Beach, and the WWII-era SS Antilla shipwreck, all in a single
                  4-hour trip with gear, drinks and snacks included. Our captain
                  reads the day&apos;s conditions and routes you through all three
                  for the best visibility.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex shrink-0 flex-wrap gap-2.5">
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <Link href="/snorkel-sites">
                  See All Sites <ArrowRight className="size-4" />
                </Link>
              </Button>
              <BookNowButton size="default" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
