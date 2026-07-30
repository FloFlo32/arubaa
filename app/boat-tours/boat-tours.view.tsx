import Link from "next/link";
import { Clock, ArrowRight, Star, Ship, Users, Fish } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";
import { BookNowButton } from "@/components/widget/book-now-button";
import { TrustSidebar } from "@/components/sections/trust-sidebar";
import { type LocaleCode, localizePath } from "@/lib/i18n";
import { boatToursContent } from "./boat-tours.content";

const statIcons = [Star, Ship, Users, Fish];

const tourMeta = [
  {
    href: "/boat-tours/morning-splash-adventure",
    activityId: "01083159-5861-4408-b78d-22c81e19faa4",
    img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
  },
  {
    href: "/boat-tours/afternoon-pirate-party",
    activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
    img: "/ingested/flagshiparubaa/guest-e.webp",
  },
  {
    href: "/boat-tours/sunset-stars-cruise",
    activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
    img: "/ingested/flagshiparuba/img-006.webp",
  },
];

export function BoatToursPage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = boatToursContent[locale];
  const stats = t.stats.map((s, i) => ({ ...s, icon: statIcons[i] }));
  const tours = t.tours.map((tour, i) => ({ ...tour, ...tourMeta[i] }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow={t.heroEyebrow}
          title={t.heroTitle}
          body={t.heroBody}
          src="/ingested/flagshiparubaa/schooner-turquoise-anchor.webp"
          alt={t.heroAlt}
        />

        <section className="container-px mx-auto -mt-10 max-w-7xl relative z-10 sm:-mt-14">
          <RevealGroup className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-black/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4" stagger={0.06}>
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="flex h-full items-center gap-3 rounded-2xl p-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
                    <s.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold leading-none">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-7xl py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              {tours.map((tour, i) => (
                <Reveal key={tour.title} delay={i * 0.06}>
                  <div className="group grid gap-0 overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 md:grid-cols-[1.1fr_1.4fr]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tour.img}
                        alt={tour.alt}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                        {tour.tag}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center gap-3 p-7 sm:p-9">
                      <h2 className="font-display text-2xl font-bold sm:text-3xl">{tour.title}</h2>
                      <span className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="size-4" /> {tour.time}
                      </span>
                      <p className="text-pretty text-muted-foreground">{tour.body}</p>
                      <p className="text-lg font-bold text-ocean">{tour.price}</p>
                      <div className="mt-2 flex flex-wrap gap-3">
                        <Button asChild variant="outline">
                          <Link href={localizePath(locale, tour.href)}>
                            {t.tourDetailsLabel} <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                        <BookNowButton activityId={tour.activityId} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <TrustSidebar />
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <SectionCTA
              title={t.ctaTitle}
              body={t.ctaBody}
              image="/ingested/flagshiparubaa/guest-e.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href={localizePath(locale, "/contact")}>{t.ctaButton}</Link>
              </Button>
            </SectionCTA>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
