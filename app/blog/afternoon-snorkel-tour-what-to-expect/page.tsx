import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "What to Expect on the Aruba Afternoon Snorkel Tour",
  description:
    "Rope swings, open bar, live DJ, and iconic shipwreck snorkeling: here's everything you need to know before boarding Aruba's most legendary afternoon cruise.",
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
              <Calendar className="size-3.5" /> April 2025 · 8 min read
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              What to Expect on the Aruba Afternoon Snorkel Tour
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/afternoon-pirate-party.webp"
                alt="Guests enjoying the Afternoon Pirate Party cruise aboard the schooner"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              Picture this: warm Caribbean wind in your hair, a cold drink in your hand,
              live music pumping the speakers, and the most legendary shipwreck in the
              Caribbean just below the surface. That&apos;s an afternoon aboard Flagship
              Aruba&apos;s Afternoon Pirate Party, and it&apos;s every bit as epic as it
              sounds. Here&apos;s exactly what to expect from the moment you step on
              board.
            </p>

            <h2>What Is the Afternoon Snorkel Tour?</h2>
            <p>
              The Afternoon Pirate Party is Flagship Aruba&apos;s most popular cruise,
              and it&apos;s not hard to see why. Running for 3.5 hours on the
              crystal-blue waters off Aruba&apos;s northwest coast, this tour blends
              world-class snorkeling with an open bar, live music, rope swings, and a
              crew that knows how to keep the energy sky-high.
            </p>
            <p>
              It&apos;s a group cruise, you&apos;ll share the boat with fellow
              travellers from around the world, which means the party vibe starts
              before you&apos;ve even reached the first snorkel site. Think of it less
              like a tour and more like a floating beach festival with one very
              impressive underwater intermission.
            </p>

            <h2>The Snorkeling: SS Antilla &amp; Boca Catalina</h2>
            <p>
              The snorkeling on this tour is genuinely world-class. You&apos;ll visit
              two of Aruba&apos;s most celebrated underwater spots:
            </p>

            <h3>The SS Antilla Shipwreck</h3>
            <p>
              The SS Antilla is one of the largest shipwrecks in the Caribbean, a German
              WWII freighter scuttled by her own crew rather than let her be seized. Even
              from the surface, the scale is breathtaking. Schools of sergeant majors,
              angelfish, and parrotfish weave through the rusted superstructure, while
              soft corals blanket the hull in vivid oranges and purples. It&apos;s equal
              parts history lesson and underwater playground.
            </p>
            <p>
              Snorkeling gear is provided for every guest, and the crew is on hand in
              the water to help beginners feel confident. You don&apos;t need to be an
              experienced swimmer to enjoy this: just willing to put your face in the
              water and look around.
            </p>

            <h3>Boca Catalina</h3>
            <p>
              After the Antilla, the boat anchors at Boca Catalina, a shallow, calm bay
              with gin-clear visibility and an abundance of tropical fish. It&apos;s
              perfect for those still getting used to the snorkel, and equally
              entertaining for seasoned underwater explorers. Sea turtles make
              occasional appearances here, and the coral formations are stunning even in
              shallow water.
            </p>
            <p>
              <strong>Tip:</strong> Apply your sunscreen at least 15 to 20 minutes
              before entering the water. Reef-safe sunscreen is strongly encouraged to
              protect Aruba&apos;s coral ecosystems.
            </p>

            <h2>The Rope Swing: Yes, It&apos;s Real</h2>
            <p>
              One of the most talked-about moments on the entire tour is the rope
              swing. Anchored off the side of the boat, it lets guests swing out over
              the turquoise water and drop in with a satisfying splash. It sounds
              simple, but the combination of warm sea air, cheering fellow passengers,
              and an open bar beforehand turns it into an absolute highlight.
            </p>
            <p>You&apos;ll find yourself doing it twice. Maybe three times.</p>

            <h2>The Open Bar</h2>
            <p>
              The open bar runs for the entire duration of the cruise. You&apos;ll find
              a solid selection of local Aruban rum punches, cold local beer, wine, and
              soft drinks for those keeping it light. The crew mixes drinks with
              enthusiasm, and the atmosphere at the bar is as much a part of the
              experience as the snorkeling.
            </p>

            <h2>The Music &amp; Atmosphere</h2>
            <p>
              Live island music keeps the energy going throughout the cruise. Expect
              Caribbean vibes: soca, reggae, dancehall, punctuated by crowd favourites
              that get everyone on their feet. The crew are entertainers as much as
              sailors, and their enthusiasm is genuinely infectious.
            </p>
            <p>
              By the time you&apos;re anchored at Boca Catalina with a drink in hand,
              the sun overhead, and a playlist that would make any beach bar jealous, it
              becomes very clear why this tour has earned so many 5-star reviews.
            </p>

            <h2>What&apos;s Included</h2>
            <ul>
              <li>Professional snorkeling gear (mask, snorkel, fins) for each guest</li>
              <li>Full open bar throughout the cruise</li>
              <li>Caribbean-style lunch served midway through the cruise</li>
              <li>Rope swing access off the boat</li>
              <li>In-water crew assistance at snorkel sites</li>
              <li>Life jackets available for all guests</li>
              <li>Towels provided on board</li>
            </ul>

            <h2>What to Bring</h2>
            <ul>
              <li>Reef-safe sunscreen (SPF 30+ recommended)</li>
              <li>A swimsuit and light cover-up for the boat</li>
              <li>Cash or card for gratuities, the crew works hard and it&apos;s very much appreciated</li>
              <li>An underwater camera or waterproof phone case, you&apos;ll want photos at the Antilla</li>
              <li>An appetite for adventure and a willingness to get wet</li>
            </ul>
            <p>
              <strong>Pro tip:</strong> Book at least a day or two in advance, especially
              during high season (December to April). Spots fill up fast, particularly
              on weekends and holidays.
            </p>

            <h2>Is It Right for You?</h2>
            <p>
              The Afternoon Pirate Party is ideal for anyone who wants to experience
              Aruba&apos;s best snorkeling while having a genuinely fun, social time on
              the water. It&apos;s a great fit for solo travellers looking to meet
              people, couples wanting something more energetic than a sunset cruise, and
              groups of friends or family who want a shared adventure.
            </p>
            <p>
              It&apos;s not the tour for you if you&apos;re looking for a quiet, intimate
              experience: for that, the Morning Splash Adventure or a private charter
              would be a better match. But if you want the full Aruba experience in one
              unforgettable afternoon, the Afternoon Pirate Party delivers every time.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="Ready to join the party?"
              body="Grab your spot on Aruba's most legendary afternoon cruise before it sells out. Open bar, rope swing, and world-class snorkeling included."
              image="/ingested/flagshiparubaa/guest-e.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours/afternoon-pirate-party">
                  Book the Afternoon Pirate Party <ArrowRight className="size-4" />
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
