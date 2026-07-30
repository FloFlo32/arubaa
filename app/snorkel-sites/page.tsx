import type { Metadata } from "next";
import { Anchor, Waves, Fish } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { snorkelSites } from "@/lib/snorkel-sites";

export const metadata: Metadata = {
  title: "Snorkel Sites",
  description:
    "Discover Aruba's most beautiful underwater worlds: the SS Antilla shipwreck, Boca Catalina and Malmok Reef.",
};

const siteIcons: Record<string, typeof Anchor> = {
  "antilla-wreck": Anchor,
  "boca-catalina": Waves,
  "malmok-reef": Fish,
};

export default function SnorkelSitesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <AuroraBackground />
          <div className="container-px relative mx-auto max-w-2xl text-center">
            <Reveal>
              <h1 className="text-gradient text-balance text-5xl font-bold sm:text-6xl">
                Our Snorkel Sites
              </h1>
              <p className="mt-4 text-lg text-pretty text-muted-foreground">
                Discover Aruba&apos;s most beautiful underwater worlds.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px relative mx-auto max-w-6xl pb-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <RevealGroup className="space-y-4" stagger={0.08}>
              {snorkelSites.map((s) => {
                const Icon = siteIcons[s.slug] ?? Anchor;
                return (
                  <RevealItem
                    key={s.slug}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                      <p className="mt-1.5 text-pretty text-muted-foreground">{s.tagline}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <Reveal
              delay={0.1}
              className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/snorkeler-boca-catalina.webp"
                alt="A snorkeler smiling at the camera in the clear turquoise water off Aruba's coast"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:aspect-[4/3]"
              />
            </Reveal>
          </div>

          <Reveal delay={0.16} className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-muted-foreground">Ready to explore these sites for yourself?</p>
            <BookNowButton label="Book Your Snorkel Adventure" />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
