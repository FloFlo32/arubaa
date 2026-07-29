import type { Metadata } from "next";
import Link from "next/link";
import { Ruler, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";
import { snorkelSites } from "@/lib/snorkel-sites";

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
          src="/ingested/flagshiparubaa/snorkel-sea-turtle.webp"
          alt="A sea turtle swimming in clear turquoise water off Aruba's coast"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="space-y-6">
            {snorkelSites.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <div className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[1.1fr_1.4fr]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.heroImage}
                      alt={s.heroAlt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">{s.title}</h2>
                    <span className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground">
                      <Ruler className="size-4" /> {s.depth} · {s.tagline}
                    </span>
                    <p className="text-pretty text-muted-foreground">{s.body}</p>
                    <div>
                      <Button asChild>
                        <Link href={`/snorkel-sites/${s.slug}`}>
                          Site Details <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <SectionCTA
              title="See all three sites in one trip"
              body="Our Morning Splash Adventure visits Boca Catalina, Malmok Beach and the SS Antilla, with gear, drinks and snacks included."
              image="/ingested/flagshiparubaa/snorkeler-boca-catalina.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours/morning-splash-adventure">
                  See the Morning Splash Adventure <ArrowRight className="size-4" />
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
