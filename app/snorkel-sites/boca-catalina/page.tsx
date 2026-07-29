import type { Metadata } from "next";
import Link from "next/link";
import { Waves, Ruler, Users, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { SnorkelSitesSidebar } from "@/components/sections/snorkel-sites-sidebar";
import { snorkelSites } from "@/lib/snorkel-sites";

const site = snorkelSites.find((s) => s.slug === "boca-catalina")!;

export const metadata: Metadata = {
  title: site.title,
  description: `${site.tagline}. One of Flagship Aruba's regular snorkel stops on the Morning Splash Adventure.`,
};

export default function BocaCatalinaPage() {
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
                    <Waves className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Boca Catalina</p>
                    <p className="text-xs text-muted-foreground">Aruba&apos;s NW coast</p>
                  </div>
                </div>
              </div>

              <Reveal className="mt-10">
                <p className="text-pretty text-lg text-muted-foreground">{site.body}</p>
              </Reveal>

              <Reveal delay={0.08} className="mt-8 overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.secondaryImage}
                  alt={site.secondaryAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover"
                />
              </Reveal>

              <Reveal delay={0.12} className="mt-8">
                <BookNowButton activityId="" label="Book the Morning Splash Adventure" />
              </Reveal>
            </div>

            <SnorkelSitesSidebar excludeSlug="boca-catalina" />
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">See it for yourself</h2>
            <p className="max-w-md text-muted-foreground">
              Boca Catalina is one of three stops on our Morning Splash Adventure.
            </p>
            <Link
              href="/boat-tours/morning-splash-adventure"
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              See the Morning Splash Adventure <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
