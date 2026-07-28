import type { Metadata } from "next";
import Link from "next/link";
import { Waves, ShipWheel, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Snorkel Sites",
  description:
    "The snorkel sites our cruises visit off Aruba's coast: the calm reef at Boca Catalina and the SS Antilla shipwreck.",
};

export default function SnorkelSitesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Where we sail"
          title="Snorkel Sites"
          body="Our cruises visit a rotation of Aruba's best snorkel spots, from calm reef to WWII shipwreck."
          src="/ingested/jollypirates/img-059.webp"
          alt="The Jolly Pirates schooner anchored near a snorkel site with guests in the water"
        />

        <section id="boca-catalina" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/jollypirates/img-059.webp"
                  alt="The Jolly Pirates schooner anchored near the rocky shore at Boca Catalina with guests snorkeling nearby"
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
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">Boca Catalina</h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                A calm, shallow cove close to shore, thick with tropical fish and easy
                for every skill level to enjoy. It&apos;s usually our first stop on the
                morning and afternoon trips, giving new snorkelers a gentle start
                before we move to open water.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="antilla-wreck" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal delay={0.08} className="order-2 md:order-1">
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <ShipWheel className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Site two
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                SS Antilla Shipwreck
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                A WWII-era German freighter scuttled off Aruba&apos;s coast, now one of the
                largest shipwrecks in the Caribbean. Its shallow depth makes it visible
                to snorkelers on the surface, and it&apos;s home to a rich mix of marine life
                that&apos;s grown around the wreck over the decades.
              </p>
            </Reveal>
            <Reveal className="order-1 md:order-2">
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/jollypirates/img-041.webp"
                  alt="Clear turquoise water over one of Aruba's snorkel sites"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <Badge variant="accent" className="mx-auto">Ready to go</Badge>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                See both sites in one trip
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Our morning snorkeling trip visits three sites including both of these,
                plus a full BBQ lunch and the rope swing.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/cruises/morning-snorkeling">
                    See the Morning Trip <ArrowRight className="size-4" />
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
