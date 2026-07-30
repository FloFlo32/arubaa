import { MapPin } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { snorkelSites } from "@/lib/snorkel-sites";
import { type LocaleCode } from "@/lib/i18n";

const copy: Record<LocaleCode, { eyebrow: string; title: string; subtitle: string; cta: string; button: string }> = {
  en: {
    eyebrow: "Where we sail",
    title: "Our Snorkel Sites",
    subtitle: "Discover Aruba's most beautiful underwater worlds.",
    cta: "Ready to explore these sites for yourself?",
    button: "Book Your Snorkel Adventure",
  },
  es: {
    eyebrow: "Adónde navegamos",
    title: "Nuestros Sitios de Snorkel",
    subtitle: "Descubre los mundos submarinos más hermosos de Aruba.",
    cta: "¿Listo para explorar estos sitios tú mismo?",
    button: "Reserva Tu Aventura de Snorkel",
  },
  nl: {
    eyebrow: "Waar we varen",
    title: "Onze Snorkelplekken",
    subtitle: "Ontdek Aruba's mooiste onderwaterwerelden.",
    cta: "Klaar om deze plekken zelf te ontdekken?",
    button: "Boek Je Snorkelavontuur",
  },
  de: {
    eyebrow: "Wo wir segeln",
    title: "Unsere Schnorchelplätze",
    subtitle: "Entdecken Sie Arubas schönste Unterwasserwelten.",
    cta: "Bereit, diese Orte selbst zu entdecken?",
    button: "Buchen Sie Ihr Schnorchelabenteuer",
  },
  it: {
    eyebrow: "Dove navighiamo",
    title: "I Nostri Siti Per Snorkeling",
    subtitle: "Scopri i mondi sottomarini più belli di Aruba.",
    cta: "Pronto a esplorare questi siti di persona?",
    button: "Prenota La Tua Avventura Di Snorkeling",
  },
  br: {
    eyebrow: "Onde navegamos",
    title: "Nossos Locais De Mergulho",
    subtitle: "Descubra os mais belos mundos subaquáticos de Aruba.",
    cta: "Pronto para explorar esses locais você mesmo?",
    button: "Reserve Sua Aventura De Snorkel",
  },
  se: {
    eyebrow: "Var vi seglar",
    title: "Våra Snorkelplatser",
    subtitle: "Upptäck Arubas vackraste undervattensvärldar.",
    cta: "Redo att utforska dessa platser själv?",
    button: "Boka Ditt Snorkeläventyr",
  },
};

export function SnorkelSitesPreview({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = copy[locale];
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t.eyebrow}
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{t.title}</h2>
        <p className="mt-3 text-muted-foreground">{t.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
        <RevealGroup className="space-y-4" stagger={0.08}>
          {snorkelSites.map((s) => (
            <RevealItem
              key={s.slug}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{s.title[locale]}</h3>
                <p className="mt-1 text-sm text-pretty text-muted-foreground">{s.tagline[locale]}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-border shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagship-owner/guest-snorkel-vests-trio.jpg"
            alt="Guests wearing snorkel masks and life vests in the clear water off Aruba"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover sm:aspect-square"
          />
        </Reveal>
      </div>

      <Reveal delay={0.14} className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground">{t.cta}</p>
        <BookNowButton label={t.button} />
      </Reveal>
    </section>
  );
}
