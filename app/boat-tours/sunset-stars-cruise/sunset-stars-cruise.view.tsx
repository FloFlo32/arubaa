import { Sparkles, GlassWater, Utensils, Waves, Music, Sunset as SunsetIcon } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { type LocaleCode } from "@/lib/i18n";
import { sunsetStarsCruiseContent } from "./sunset-stars-cruise.content";

const includedIcons = [GlassWater, Utensils, Waves, Music, SunsetIcon];

export function SunsetStarsCruisePage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = sunsetStarsCruiseContent[locale];
  const included = t.included.map((label, i) => ({ label, icon: includedIcons[i % includedIcons.length] }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow={t.heroEyebrow}
          title={t.heroTitle}
          body={t.heroBody}
          src="/ingested/flagshiparubaa/sunset-cruise-reference.webp"
          alt={t.heroAlt}
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <Badge variant="accent">{t.sectionBadge}</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
                {t.sectionTitle}
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                {t.sectionBody}
              </p>
              <p className="mt-6 text-lg font-bold text-ocean">{t.price}</p>
              <div className="mt-4">
                <BookNowButton activityId="8ff35752-c22a-41f6-b142-4679aa1d1fb4" label={t.bookLabel} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparubaa/sunset-bird-silhouette.webp"
                  alt="A bird silhouetted against the sunset sky over the ocean"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-16 sm:pb-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl">{t.includedHeading}</h3>
          </Reveal>
          <RevealGroup className="mt-5 grid gap-3 sm:grid-cols-2" stagger={0.05}>
            {included.map((item) => (
              <RevealItem
                key={item.label}
                className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4 transition-transform duration-300 hover:-translate-y-0.5 dark:bg-orange-950/20"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400">
                  <item.icon className="size-5" />
                </span>
                <span className="text-sm font-medium text-primary">{item.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {t.highlightsHeading}
            </h3>
            <ul className="mt-3 space-y-2.5">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" /> {h}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">{t.arrivalNote}</p>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
