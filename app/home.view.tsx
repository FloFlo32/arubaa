import { Navbar } from "@/components/sections/navbar";
import { LanguageGate } from "@/components/sections/language-gate";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { BoatToursOverview } from "@/components/sections/boat-tours-overview";
import { SnorkelSitesPreview } from "@/components/sections/snorkel-sites-preview";
import { WhyFlagshipAruba } from "@/components/sections/why-flagship-aruba";
import { ReviewsTeaser } from "@/components/sections/reviews-teaser";
import { CTA } from "@/components/sections/cta";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { Footer } from "@/components/sections/footer";
import { type LocaleCode } from "@/lib/i18n";

export function HomePage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  return (
    <>
      <LanguageGate />
      <Navbar />
      <main className="flex-1">
        <Hero locale={locale} />
        <TrustBar locale={locale} />
        <BoatToursOverview locale={locale} />
        <SnorkelSitesPreview locale={locale} />
        <WhyFlagshipAruba locale={locale} />
        <ReviewsTeaser locale={locale} />
        <CTA locale={locale} />
        <BlogTeaser locale={locale} />
      </main>
      <Footer />
    </>
  );
}
