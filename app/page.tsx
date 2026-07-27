import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Updates } from "@/components/sections/updates";
import { Happiness } from "@/components/sections/happiness";
import { NextStop } from "@/components/sections/next-stop";
import { Effects } from "@/components/sections/effects";
import { Itineraries } from "@/components/sections/itineraries";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Updates />
        <Happiness />
        <NextStop />
        <Effects />
        <Itineraries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
