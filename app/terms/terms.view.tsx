import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";
import { type LocaleCode } from "@/lib/i18n";
import { termsContent } from "./terms.content";

export function TermsPage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = termsContent[locale];
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <Scale className="size-3.5" /> {t.badge}
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.heroBody}
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                {t.noticeText}
              </p>
              <a
                href="https://www.flagshiparuba.com/terms-conditions/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.noticeLinkLabel} <ExternalLink className="size-3.5" />
              </a>
            </div>
          </Reveal>
        </section>

        <article className="container-px mx-auto max-w-3xl pb-24">
          <Reveal>
            <div className="space-y-10 border-t border-border pt-10">
              {t.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="text-2xl font-semibold">{s.heading}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </section>
              ))}
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
