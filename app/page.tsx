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

export default function Home() {
  return (
    <>
      <LanguageGate />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <BoatToursOverview />
        <SnorkelSitesPreview />
        <WhyFlagshipAruba />
        <ReviewsTeaser />
        <CTA />
        <BlogTeaser />
      </main>
      <Footer />
    </>
  );
}
