import Link from "next/link";
import { ArrowRight, Waves, Fish, Anchor } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";

const sites = [
  {
    slug: "boca-catalina",
    title: "Boca Catalina",
    tagline: "Calm, shallow and easy for every skill level",
    icon: Waves,
    src: "/ingested/flagshiparubaa/coastline-cliff-sunset.webp",
    alt: "The rocky Aruba coastline near Boca Catalina at dusk with the schooner offshore",
  },
  {
    slug: "malmok-beach",
    title: "Malmok Reef",
    tagline: "A livelier reef with a bit more current",
    icon: Fish,
    src: "/ingested/flagship-owner/kitesurf-coastline.jpg",
    alt: "Aerial view of the turquoise water and coastline near Malmok, Aruba",
  },
  {
    slug: "antilla-wreck",
    title: "SS Antilla Shipwreck",
    tagline: "One of the largest shipwrecks in the Caribbean",
    icon: Anchor,
    src: "/ingested/flagshiparuba/img-010.webp",
    alt: "Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water",
  },
];

export function SnorkelSitesPreview() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-20 sm:py-24">
      <div className="container-px relative mx-auto max-w-6xl">
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
          {sites.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href="/snorkel-sites"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-3 top-3 grid size-10 place-items-center rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm">
                    <s.icon className="size-4.5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-6">
                  <h3 className="flex items-start justify-between gap-2 font-display text-lg font-semibold">
                    {s.title}
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="text-sm text-pretty text-muted-foreground">{s.tagline}</p>
                </div>
              </Link>
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
      </div>
    </section>
  );
}
