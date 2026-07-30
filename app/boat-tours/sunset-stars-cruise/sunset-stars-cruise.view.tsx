import { Clock, GlassWater, Stars, Users, Check, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { type LocaleCode } from "@/lib/i18n";
import { sunsetStarsCruiseContent } from "./sunset-stars-cruise.content";

const detailIcons = [Clock, GlassWater, Stars, Users];

export function SunsetStarsCruisePage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = sunsetStarsCruiseContent[locale];
  const details = t.details.map((d, i) => ({ ...d, icon: detailIcons[i] }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow={t.heroEyebrow}
          title={t.heroTitle}
          body={t.heroBody}
          src="/ingested/flagship-owner/ship-sunset-dramatic-wide.jpg"
          alt={t.heroAlt}
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {details.map((d) => (
              <RevealItem key={d.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <d.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{d.label}</p>
                  <p className="text-xs text-muted-foreground">{d.sub}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <Badge variant="accent">{t.sectionBadge}</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                {t.sectionTitle}
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                {t.sectionBody}
              </p>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {t.includedHeading}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {t.included.map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {t.highlightsHeading}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" /> {h}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-muted-foreground">
                {t.arrivalNote}
              </p>
              <p className="mt-4 text-lg font-bold text-ocean">{t.price}</p>
              <div className="mt-4">
                <BookNowButton activityId="8ff35752-c22a-41f6-b142-4679aa1d1fb4" label={t.bookLabel} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagship-owner/schooner-pink-sunset-wide.jpg"
                  alt={t.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
