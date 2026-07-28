import { Navbar } from "@/components/sections/navbar";
import { LanguageGate } from "@/components/sections/language-gate";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { CruisesOverview } from "@/components/sections/cruises-overview";
import { SnorkelSitesTeaser } from "@/components/sections/snorkel-sites-teaser";
import { WhyJollyPirates } from "@/components/sections/why-jolly-pirates";
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
        <CruisesOverview />
        <SnorkelSitesTeaser />
        <WhyJollyPirates />
        <ExperienceSlider />
        <GalleryTeaser />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
