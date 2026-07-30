import Link from "next/link";
import { Compass, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { BorderBeam } from "@/components/magic/border-beam";
import { type LocaleCode, localizePath } from "@/lib/i18n";
import { aboutContent } from "@/app/about/about.content";

const valueIcons = [Compass, Heart, Sparkles];

const copy: Record<LocaleCode, { eyebrow: string; title: string; subtitle: string; cta: string }> = {
  en: {
    eyebrow: "About Flagship Aruba",
    title: "Why sail with us",
    subtitle:
      "Flagship Aruba delivers a memorable mix of adventure, snorkeling, and laid-back fun aboard a charming schooner.",
    cta: "Our Story",
  },
  es: {
    eyebrow: "Sobre Flagship Aruba",
    title: "Por qué navegar con nosotros",
    subtitle:
      "Flagship Aruba ofrece una mezcla inolvidable de aventura, snorkel y diversión relajada a bordo de una encantadora goleta.",
    cta: "Nuestra Historia",
  },
  nl: {
    eyebrow: "Over Flagship Aruba",
    title: "Waarom met ons varen",
    subtitle:
      "Flagship Aruba biedt een onvergetelijke mix van avontuur, snorkelen en ontspannen plezier aan boord van een charmante schoener.",
    cta: "Ons Verhaal",
  },
  de: {
    eyebrow: "Über Flagship Aruba",
    title: "Warum mit uns segeln",
    subtitle:
      "Flagship Aruba bietet eine unvergessliche Mischung aus Abenteuer, Schnorcheln und entspanntem Spaß an Bord eines charmanten Schoners.",
    cta: "Unsere Geschichte",
  },
  it: {
    eyebrow: "Chi è Flagship Aruba",
    title: "Perché navigare con noi",
    subtitle:
      "Flagship Aruba offre un mix memorabile di avventura, snorkeling e divertimento rilassato a bordo di un'affascinante goletta.",
    cta: "La Nostra Storia",
  },
  br: {
    eyebrow: "Sobre A Flagship Aruba",
    title: "Por que navegar conosco",
    subtitle:
      "A Flagship Aruba oferece uma mistura memorável de aventura, mergulho com snorkel e diversão descontraída a bordo de uma charmosa escuna.",
    cta: "Nossa História",
  },
  se: {
    eyebrow: "Om Flagship Aruba",
    title: "Varför segla med oss",
    subtitle:
      "Flagship Aruba erbjuder en minnesvärd blandning av äventyr, snorkling och avslappnad kul ombord på en charmig skonare.",
    cta: "Vår Historia",
  },
};

export function WhyFlagshipAruba({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = copy[locale];
  const values = aboutContent[locale].values.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <AuroraBackground />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
            <BorderBeam colorFrom="var(--color-ocean)" colorTo="var(--color-aurora-2)" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ingested/flagshiparubaa/guest-c.webp"
              alt="A parent and child snorkeling together with the Flagship Aruba schooner visible in the background"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-square"
            />
          </Reveal>

          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                {t.eyebrow}
              </span>
              <h2 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
                {t.title}
              </h2>
              <p className="mt-3 max-w-lg text-pretty text-primary-foreground/85">
                {t.subtitle}
              </p>
            </Reveal>

            <RevealGroup className="mt-9 space-y-1" stagger={0.08}>
              {values.map((v, i) => (
                <RevealItem
                  key={v.title}
                  className="group flex items-start gap-5 border-t border-primary-foreground/15 py-5 transition-colors duration-300 first:border-t-0 hover:bg-primary-foreground/[0.04]"
                >
                  <span className="font-display text-3xl font-bold text-primary-foreground/20 transition-colors duration-300 group-hover:text-ocean/60">
                    0{i + 1}
                  </span>
                  <span className="mt-1 grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/20 text-ocean ring-1 ring-ocean/30">
                    <v.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{v.title}</h3>
                    <p className="mt-1 text-sm text-pretty text-primary-foreground/75">{v.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1} className="mt-9">
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href={localizePath(locale, "/about")}>
                  {t.cta} <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
