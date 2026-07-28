import type { Metadata } from "next";
import Link from "next/link";
import { Waves, ShipWheel, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Snorkel Sites",
  description:
    "The snorkel sites our boat tours visit off Aruba's coast: Boca Catalina, Malmok Beach, and the SS Antilla shipwreck.",
};

export default function SnorkelSitesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Where we sail"
          title="Snorkel Sites"
          body="Our Morning Splash Adventure visits a rotation of Aruba's best snorkel spots, from calm reef to WWII shipwreck."
          src="/ingested/flagshiparuba/img-008.webp"
          alt="A snorkeler in clear turquoise water off Aruba's coast"
        />

        <section id="boca-catalina" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparuba/img-009.webp"
                  alt="A rocky cove and turquoise water along Aruba's northwest coast"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Waves className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Site one
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">Boca Catalina Reefs</h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                A calm, shallow cove close to shore, thick with tropical fish and easy
                for every skill level to enjoy. It is one of our regular stops on the
                Morning Splash Adventure.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="malmok-beach" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal delay={0.08} className="order-2 md:order-1">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Sparkles className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Site two
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">Malmok Beach</h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                One of Aruba&apos;s top snorkel sites, with clear water and easy access
                close to shore. A favorite spot on the northwest coast for spotting
                colorful reef fish.
              </p>
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparuba/img-008.webp"
                  alt="A snorkeler in clear water off Malmok Beach in Aruba"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="antilla-wreck" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparuba/img-010.webp"
                  alt="Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <ShipWheel className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Site three
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                SS Antilla Shipwreck
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Aruba&apos;s most famous snorkel site: a WWII-era freighter resting in
                shallow water, now one of the largest shipwrecks in the Caribbean and
                home to a rich mix of marine life.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <Badge variant="accent" className="mx-auto">Ready to go</Badge>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                See all three sites in one trip
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Our Morning Splash Adventure visits Boca Catalina, Malmok Beach and the
                SS Antilla, with gear, drinks and snacks included.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/boat-tours/morning-splash-adventure">
                    See the Morning Splash Adventure <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
