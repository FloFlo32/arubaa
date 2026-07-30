import type { Metadata } from "next";
import Link from "next/link";
import { Ruler, Users, Anchor, Waves, Fish, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";
import { BookNowButton } from "@/components/widget/book-now-button";
import { TrustSidebar } from "@/components/sections/trust-sidebar";
import { cn } from "@/lib/utils";
import { snorkelSites } from "@/lib/snorkel-sites";

export const metadata: Metadata = {
  title: "Snorkel Sites",
  description:
    "The snorkel sites our boat tours visit off Aruba's coast: Boca Catalina, Malmok Beach, and the SS Antilla shipwreck.",
};

const siteIcons: Record<string, typeof Anchor> = {
  "boca-catalina": Waves,
  "malmok-beach": Fish,
  "antilla-wreck": Anchor,
};

export default function SnorkelSitesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Where we sail"
          title="Snorkel Sites"
          body="Our Morning Snorkel Tour visits a rotation of Aruba's best snorkel spots, from calm reef to WWII shipwreck."
          src="/ingested/flagshiparubaa/snorkel-sea-turtle.webp"
          alt="A sea turtle swimming in clear turquoise water off Aruba's coast"
        />

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              {snorkelSites.map((s, i) => {
                const Icon = siteIcons[s.slug] ?? Anchor;
                const reversed = i % 2 === 1;
                return (
                  <Reveal key={s.slug} delay={i * 0.06}>
                    <div className="group grid gap-0 overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 md:grid-cols-2">
                      <div
                        className={cn(
                          "relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto",
                          reversed && "md:order-2"
                        )}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.heroImage}
                          alt={s.heroAlt}
                          loading="lazy"
                          decoding="async"
                          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                          {s.depth} deep
                        </span>
                      </div>
                      <div className={cn("flex flex-col justify-center gap-4 p-7 sm:p-9", reversed && "md:order-1")}>
                        <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                          <Icon className="size-5" />
                        </span>
                        <h2 className="font-display text-2xl font-bold sm:text-3xl">{s.title}</h2>
                        <p className="text-sm font-medium text-primary">{s.tagline}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Ruler className="size-4" /> {s.depth}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="size-4" /> {s.goodFor}
                          </span>
                        </div>
                        <p className="text-pretty text-muted-foreground">{s.body}</p>
                        <div>
                          <BookNowButton />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <TrustSidebar />
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <SectionCTA
              title="See all three sites in one trip"
              body="Our Morning Snorkel Tour visits Boca Catalina, Malmok Beach and the SS Antilla, with gear, drinks and snacks included."
              image="/ingested/flagshiparubaa/snorkeler-boca-catalina.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours/morning-splash-adventure">
                  See the Morning Snorkel Tour <ArrowRight className="size-4" />
                </Link>
              </Button>
            </SectionCTA>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
