import { Navbar } from "@/components/sections/navbar";
import { LanguageGate } from "@/components/sections/language-gate";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { HighlightsMarquee } from "@/components/sections/highlights-marquee";
import { BoatToursOverview } from "@/components/sections/boat-tours-overview";
import { SnorkelSitesTeaser } from "@/components/sections/snorkel-sites-teaser";
import { WhyFlagshipAruba } from "@/components/sections/why-flagship-aruba";
import { Comparison } from "@/components/sections/comparison";
import { ExperienceSlider } from "@/components/sections/experience-slider";
import { VideoShowcase } from "@/components/sections/video-showcase";
import { FindUs } from "@/components/sections/find-us";
import { FunGallery } from "@/components/sections/fun-gallery";
import { ReviewsTeaser } from "@/components/sections/reviews-teaser";
import { GalleryTeaser } from "@/components/sections/gallery-teaser";
import { CTA } from "@/components/sections/cta";
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
        <HighlightsMarquee />
        <SnorkelSitesTeaser />
        <WhyFlagshipAruba />
        <Comparison />
        <ExperienceSlider />
        <VideoShowcase />
        <FindUs />
        <FunGallery />
        <ReviewsTeaser />
        <GalleryTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
