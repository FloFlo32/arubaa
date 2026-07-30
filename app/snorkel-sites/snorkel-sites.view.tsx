import { Anchor, Waves, Fish, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { snorkelSites } from "@/lib/snorkel-sites";
import { type LocaleCode } from "@/lib/i18n";
import { snorkelSitesContent } from "./snorkel-sites.content";

const siteIcons: Record<string, typeof Anchor> = {
  "antilla-wreck": Anchor,
  "boca-catalina": Waves,
  "malmok-reef": Fish,
};

export function SnorkelSitesPage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = snorkelSitesContent[locale];
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="absolute inset-0 -z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ingested/flagshiparubaa/malmok-beach.webp"
              alt=""
              aria-hidden="true"
              className="size-full object-cover"
              style={{ objectPosition: "0% 65%" }}
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="container-px relative mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Compass className="size-6" />
              </span>
              <h1 className="mt-5 text-gradient text-balance text-5xl font-bold sm:text-6xl">
                {t.title}
              </h1>
              <p className="mt-4 text-lg text-pretty text-muted-foreground">{t.subtitle}</p>
            </Reveal>

            <RevealGroup className="mt-8 flex flex-wrap items-center justify-center gap-3" stagger={0.06}>
              {snorkelSites.map((s) => {
                const Icon = siteIcons[s.slug] ?? Anchor;
                return (
                  <RevealItem
                    key={s.slug}
                    className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                  >
                    <Icon className="size-4 text-primary" /> {s.title[locale]}
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </section>

        <section className="container-px relative mx-auto max-w-6xl pb-24 pt-20 sm:pt-24">
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
                      <h2 className="font-display text-xl font-semibold">{s.title[locale]}</h2>
                      <p className="mt-1.5 text-pretty text-muted-foreground">{s.tagline[locale]}</p>
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
            <p className="text-muted-foreground">{t.cta}</p>
            <BookNowButton label={t.button} />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
