import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const sites = [
  {
    title: "SS Antilla Shipwreck",
    description:
      "A WWII-era wreck resting in Aruba's clear water, one of the largest shipwrecks in the Caribbean.",
    href: "/snorkel-sites#antilla-wreck",
    src: "/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp",
    alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Boca Catalina",
    description:
      "A calm, shallow reef close to shore, thick with tropical fish and easy for every skill level.",
    href: "/snorkel-sites#boca-catalina",
    src: "/ingested/flagshiparuba/img-009.webp",
    alt: "A rocky cove and turquoise water along Aruba's northwest coast",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Malmok Beach",
    description:
      "One of Aruba's top snorkel spots, with clear water close to shore and easy access.",
    href: "/snorkel-sites#malmok-beach",
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
      </div>

      <Reveal delay={0.12} className="mt-8 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/snorkel-sites">
            See All Snorkel Sites <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
