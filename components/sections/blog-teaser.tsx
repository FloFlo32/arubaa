import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { posts } from "@/lib/blog-posts";
import { type LocaleCode, localizePath } from "@/lib/i18n";

const copy: Record<LocaleCode, { eyebrow: string; title: string; subtitle: string; readMore: string }> = {
  en: {
    eyebrow: "Sunny Updates",
    title: "From the sunny island",
    subtitle: "Discover our latest stories, straight from the crew.",
    readMore: "Read More",
  },
  es: {
    eyebrow: "Noticias Soleadas",
    title: "Desde la isla soleada",
    subtitle: "Descubre nuestras últimas historias, directamente de la tripulación.",
    readMore: "Leer Más",
  },
  nl: {
    eyebrow: "Zonnig Nieuws",
    title: "Vanaf het zonnige eiland",
    subtitle: "Ontdek onze laatste verhalen, rechtstreeks van de bemanning.",
    readMore: "Lees Meer",
  },
  de: {
    eyebrow: "Sonnige Neuigkeiten",
    title: "Von der sonnigen Insel",
    subtitle: "Entdecken Sie unsere neuesten Geschichten, direkt von der Crew.",
    readMore: "Weiterlesen",
  },
  it: {
    eyebrow: "Notizie Assolate",
    title: "Dall'isola assolata",
    subtitle: "Scopri le nostre ultime storie, direttamente dall'equipaggio.",
    readMore: "Leggi Di Più",
  },
  br: {
    eyebrow: "Novidades Ensolaradas",
    title: "Da ilha ensolarada",
    subtitle: "Descubra nossas últimas histórias, direto da tripulação.",
    readMore: "Leia Mais",
  },
  se: {
    eyebrow: "Soliga Nyheter",
    title: "Från den soliga ön",
    subtitle: "Upptäck våra senaste berättelser, direkt från besättningen.",
    readMore: "Läs Mer",
  },
};

export function BlogTeaser({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = copy[locale];
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t.eyebrow}
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">{t.title}</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">{t.subtitle}</p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.08}>
        {posts.map((p) => (
          <RevealItem key={p.slug}>
            <Link href={localizePath(locale, `/blog/${p.slug}`)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="size-3.5" /> {p.date}
                </p>
                <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                  {t.readMore} <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
