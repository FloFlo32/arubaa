import Link from "next/link";
import { Anchor, Compass, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { type LocaleCode, localizePath } from "@/lib/i18n";
import { aboutContent } from "./about.content";

const valueIcons = [Compass, Heart, Sparkles];

export function AboutPage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = aboutContent[locale];
  const values = t.values.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow={t.heroEyebrow}
          title={t.heroTitle}
          body={t.heroBody}
          src="/ingested/flagshiparubaa/schooner-turquoise-anchor.webp"
          alt="The Flagship Aruba schooner under sail"
        />

        <section id="our-story" className="container-px mx-auto max-w-6xl py-16 sm:py-20 scroll-mt-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/flagshiparuba/img-006.webp"
                  alt="A guest jumps from the Flagship Aruba schooner into the ocean"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Anchor className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {t.storyEyebrow}
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                {t.storyTitle}
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                {t.storyParagraph1}
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                {t.storyParagraph2}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">{t.valuesBadge}</Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              {t.valuesTitle}
            </h2>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {values.map((v) => (
              <RevealItem
                key={v.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <v.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.ctaTitle}</h2>
            <p className="max-w-md text-muted-foreground">{t.ctaBody}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href={localizePath(locale, "/boat-tours")}>
                  {t.ctaPrimary} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={localizePath(locale, "/contact")}>{t.ctaSecondary}</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
