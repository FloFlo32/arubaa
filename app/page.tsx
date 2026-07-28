import { Navbar } from "@/components/sections/navbar";
import { LanguageGate } from "@/components/sections/language-gate";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { BoatToursOverview } from "@/components/sections/boat-tours-overview";
import { SnorkelSitesTeaser } from "@/components/sections/snorkel-sites-teaser";
import { WhyFlagshipAruba } from "@/components/sections/why-flagship-aruba";
import { ExperienceSlider } from "@/components/sections/experience-slider";
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
        <SnorkelSitesTeaser />
        <WhyFlagshipAruba />
        <ExperienceSlider />
        <GalleryTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
