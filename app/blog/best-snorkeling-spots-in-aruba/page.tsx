import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "Best Snorkeling Spots in Aruba: SS Antilla & Beyond",
  description:
    "From the WWII shipwreck SS Antilla to the vibrant reefs of Boca Catalina, discover the top underwater spots our crew visits on every cruise.",
};

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="container-px mx-auto max-w-3xl pt-28 pb-24 sm:pt-32">
          <Reveal>
            <Link href="/blog" className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-3.5" /> Back to blog
            </Link>
            <p className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5" /> May 2025 · 7 min read
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              Best Snorkeling Spots in Aruba: SS Antilla &amp; Beyond
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/ss-antilla-wreck-aerial.webp"
                alt="Aerial view of the SS Antilla shipwreck resting in Aruba's turquoise water"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              Every Flagship Aruba cruise stops at the same three locations on
              Aruba&apos;s northwest coast, and every single one of them is worth the
              trip on its own. The SS Antilla shipwreck, Boca Catalina bay, and Malmok
              Reef are the reason guests come back year after year, and the reason our
              crew never gets tired of jumping in the water. Here&apos;s what
              you&apos;ll find at each one.
            </p>
            <p>
              We didn&apos;t pick these sites at random. After years of running cruises
              along Aruba&apos;s northwest coast, our captains and crew know every
              section of reef, every current pattern, and every season. The SS Antilla,
              Boca Catalina, and Malmok Reef offer a perfect combination: dramatic
              history, calm water for beginners, and enough marine life to keep
              experienced snorkelers busy for hours.
            </p>

            <h2>Stop 1: The SS Antilla Shipwreck</h2>
            <p>
              The SS Antilla is the centrepiece of every Flagship Aruba cruise and it
              earns that status every single time. This German cargo vessel was
              scuttled by her own crew at the outbreak of World War II rather than let
              her be seized. She now lies on her side off Aruba&apos;s northwest tip
              near Malmok, and she is one of the largest shipwrecks in the Caribbean.
            </p>
            <p>
              The SS Antilla is one of the most photographed snorkel sites in the
              Caribbean, and photos through the clear water, with the coral-covered
              hull in the background, come out stunning even on a phone in a waterproof
              case.
            </p>

            <h2>Stop 2: Boca Catalina</h2>
            <p>
              After the drama of the Antilla, Boca Catalina gives you something
              different: calm, shallow, gin-clear water in a protected bay where you can
              slow down and really look at things. The water here rarely runs deep,
              which makes it perfect for beginners, but it&apos;s also where we
              consistently see the most sea turtles, so experienced snorkelers love it
              too.
            </p>
            <p>
              Green and hawksbill turtles feed in the sea grass beds at Boca Catalina,
              often completely unbothered by snorkelers who approach slowly and keep a
              respectful distance. Our crew know where they tend to be and will point
              you in the right direction, but there&apos;s never a guarantee with
              wildlife, which makes it all the more exciting when you find one.
            </p>

            <h2>Stop 3: Malmok Reef</h2>
            <p>
              Malmok Reef runs along the northwest coastline between the Antilla and
              Boca Catalina, a stretch of coral formations and rocky outcrops that
              supports an incredibly varied mix of marine life. It sees fewer visiting
              boats than the famous wreck, which means the fish here are less
              accustomed to snorkelers and behave more naturally.
            </p>
            <p>
              The reef drops away more steeply than Boca Catalina, and snorkelers who
              are comfortable in deeper water can peer down and watch larger species
              resting on the sandy bottom beneath a coral overhang. The coral formations
              here are some of the healthiest in Aruba.
            </p>
            <p>
              Malmok is a regular stop on our private charter routes. If you&apos;re
              booking a private cruise and want to see the reef at its best, ask us to
              build your day around the morning slack tide, that&apos;s when visibility
              is at its clearest.
            </p>

            <h2>See Them All in One Trip</h2>
            <p>
              Our Morning Snorkel Tour visits all three sites, while the Afternoon
              Snorkel Tour visits the SS Antilla and Boca Catalina, the two most
              popular stops, as part of a cruise that also includes an open bar, live
              music, and the famous rope swing. It&apos;s the best way to experience
              these sites for yourself, with a party atmosphere that keeps the energy
              high between snorkel stops.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="Ready to explore these sites for yourself?"
              body="Book a cruise and see the SS Antilla, Boca Catalina and Malmok Reef with a crew that knows every section of reef."
              image="/ingested/flagshiparubaa/snorkeler-boca-catalina.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/snorkel-sites">
                  Book Your Snorkel Adventure <ArrowRight className="size-4" />
                </Link>
              </Button>
            </SectionCTA>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
