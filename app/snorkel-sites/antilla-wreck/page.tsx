import type { Metadata } from "next";
import Link from "next/link";
import { ShipWheel, Ruler, Users, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { SnorkelSitesSidebar } from "@/components/sections/snorkel-sites-sidebar";
import { RelatedSites } from "@/components/sections/related-sites";
import { SectionCTA } from "@/components/sections/section-cta";
import { snorkelSites } from "@/lib/snorkel-sites";

const site = snorkelSites.find((s) => s.slug === "antilla-wreck")!;

export const metadata: Metadata = {
  title: site.title,
  description: `${site.tagline}. A WWII-era wreck visited on Flagship Aruba's boat tours.`,
};

export default function AntillaWreckPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Snorkel site"
          title={site.title}
          body={site.tagline}
          src={site.heroImage}
          alt={site.heroAlt}
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Ruler className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{site.depth}</p>
                    <p className="text-xs text-muted-foreground">Typical depth</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
                    <Users className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{site.goodFor}</p>
                    <p className="text-xs text-muted-foreground">Good for</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <ShipWheel className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">WWII wreck</p>
                    <p className="text-xs text-muted-foreground">Scuttled in 1940</p>
                  </div>
                </div>
              </div>

              <Reveal className="mt-10">
                <p className="text-pretty text-lg text-muted-foreground">{site.body}</p>
              </Reveal>

              <Reveal delay={0.06} className="mt-4">
                <p className="text-pretty text-muted-foreground">
                  Because so much of the wreck sits close to the surface, it&apos;s
                  snorkel-friendly even though it&apos;s deeper than our other two
                  regular stops. Expect schools of fish using the hull for cover, and
                  some of the most dramatic photos of the whole trip.
                </p>
              </Reveal>

              <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ingested/flagship-owner/ladyblack-jump.jpg"
                    alt="A guest jumping off the bow into the ocean near the wreck site"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ingested/flagshiparubaa/guest-onboard-drink.webp"
                    alt="A guest smiling with a drink after snorkeling the wreck"
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.14} className="mt-8">
                <BookNowButton activityId="" label="Book the Morning Splash Adventure" />
              </Reveal>
            </div>

            <SnorkelSitesSidebar excludeSlug="antilla-wreck" />
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <SectionCTA
              title="See it for yourself"
              body="The SS Antilla is one of three stops on our Morning Splash Adventure."
              image="/ingested/flagshiparubaa/guest-e.webp"
            >
              <Link
                href="/boat-tours/morning-splash-adventure"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:scale-105"
              >
                See the Morning Splash Adventure <ArrowRight className="size-4" />
              </Link>
            </SectionCTA>
          </Reveal>
        </section>

        <RelatedSites excludeSlug="antilla-wreck" />
      </main>
      <Footer />
    </>
  );
}
