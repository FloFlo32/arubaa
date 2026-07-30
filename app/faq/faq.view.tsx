import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { SectionCTA } from "@/components/sections/section-cta";
import { faqs } from "@/lib/faqs";
import { type LocaleCode, localizePath } from "@/lib/i18n";
import { faqContent } from "./faq.content";

export function FaqPage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = faqContent[locale];
  const localeFaqs = faqs[locale];
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow={t.heroEyebrow}
          title={t.heroTitle}
          body={t.heroBody}
          src="/ingested/flagshiparubaa/guest-f.webp"
          alt="A group of guests laughing together aboard the schooner"
        />

        <section className="container-px mx-auto max-w-3xl pb-24 pt-16">
          <RevealGroup className="mt-6 space-y-4" stagger={0.05}>
            {localeFaqs.map((f) => (
              <RevealItem key={f.q} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold">{f.q}</h2>
                <p className="mt-2 text-pretty text-muted-foreground">{f.a}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10">
            <SectionCTA title={t.ctaTitle} body={t.ctaBody}>
              <BookNowButton />
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <Link href={localizePath(locale, "/contact")}>
                  {t.ctaButton} <ArrowRight className="size-4" />
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
