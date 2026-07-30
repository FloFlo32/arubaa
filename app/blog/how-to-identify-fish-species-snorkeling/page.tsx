import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";

export const metadata: Metadata = {
  title: "How Do You Identify Fish Species While Reef Snorkeling?",
  description:
    "Identifying fish species while reef snorkeling becomes easier when you focus on distinctive features like body shape, color patterns, and swimming behavior.",
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
              <Calendar className="size-3.5" /> May 2026 · 6 min read
            </p>
            <h1 className="mt-2 text-balance text-4xl font-bold sm:text-5xl">
              How Do You Identify Fish Species While Reef Snorkeling?
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/snorkel-sea-turtle.webp"
                alt="A sea turtle swimming in clear turquoise water off Aruba's coast"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-headings:font-bold">
            <p>
              On a Flagship Aruba cruise you&apos;re going to see a lot of fish, at the
              SS Antilla wreck, in the shallows of Boca Catalina, along Malmok Reef.
              Most guests come up from the water asking the same question: &ldquo;What
              was that?&rdquo; This guide covers the species you&apos;re most likely to
              encounter on our tours, and the fastest way to tell them apart when
              you&apos;re floating above a reef with a mask full of colour.
            </p>

            <h2>The Aruba Advantage: Visibility Does Half the Work</h2>
            <p>
              Identifying fish in murky water is hard. Identifying them in Aruba is
              not. Water visibility on our snorkel sites regularly stays excellent,
              which means you get a clear, well-lit look at almost everything you
              encounter. There&apos;s no squinting through green water trying to make
              out a shape, you&apos;ll often see fish from the surface before you even
              get in.
            </p>
            <p>
              That clarity is one reason Aruba&apos;s reefs are so popular with
              snorkelers who want to actually learn what they&apos;re looking at.
              It&apos;s also why so many guests on our Afternoon Snorkel Tour end up
              spending longer in the water than they planned.
            </p>
            <p>
              <strong>Our crew knows these fish by name.</strong> If you spot something
              you can&apos;t identify, ask whoever&apos;s in the water with you, our
              team has been snorkeling these exact sites for years and can name almost
              anything you&apos;ll encounter at the Antilla or Boca Catalina.
            </p>

            <h2>Four Things to Look at First</h2>
            <p>
              When you see a fish you don&apos;t recognise, run through these four
              things quickly. It takes about five seconds and will narrow down almost
              any species to its family before the fish swims away.
            </p>

            <h3>1. Body Shape</h3>
            <p>
              Is it tall and disc-shaped? That&apos;s an angelfish, butterflyfish, or
              surgeonfish family. Long and thin like a stick? Trumpetfish or needlefish.
              Flat and diamond-shaped gliding across the sand? A stingray. Rounded and
              inflatable-looking? Pufferfish or balloonfish. Body shape tells you the
              family, colour and markings tell you the species.
            </p>

            <h3>2. Colour Pattern</h3>
            <p>
              Focus on the pattern more than the exact colour, patterns stay consistent
              even as fish age or change sex, and water depth can shift how colours
              appear. Horizontal stripes, vertical bars, solid blocks of colour, spots,
              each pattern is associated with specific groups. The bold black vertical
              stripes on a sergeant major, for example, make them unmistakable even at a
              distance.
            </p>

            <h3>3. How It Swims</h3>
            <p>
              Behaviour is often faster to read than colour. Parrotfish row through the
              water with their pectoral fins in a distinctive, almost bird-like motion.
              Trumpetfish hover nearly vertical, completely still, waiting to ambush
              prey. French grunts hover in tight, motionless clusters under ledges
              during the day. Once you know these behaviours, you can identify a
              species from ten metres away.
            </p>

            <h3>4. Where It Is on the Reef</h3>
            <p>
              Different species occupy different zones. If a large fish is resting on
              the sandy bottom under a coral overhang, it&apos;s likely a nurse shark or
              a large grouper. If something is hovering in mid-water above the wreck,
              it&apos;s likely a jack or barracuda. If it&apos;s nipping at coral
              surfaces, it&apos;s probably a parrotfish or damselfish. Location on the
              reef is a strong clue that most beginners overlook.
            </p>

            <h2>Fish You&apos;ll Almost Certainly See on a Flagship Aruba Cruise</h2>
            <p>
              These are the species our crew encounter on virtually every trip at the
              SS Antilla, at Boca Catalina, and along Malmok Reef.
            </p>
            <ul>
              <li>
                <strong>Sergeant Major</strong> (SS Antilla, Boca Catalina): small,
                oval-shaped, with bold black vertical stripes on a yellow-white body.
                You&apos;ll see them in enormous schools swirling around the upper
                sections of the Antilla wreck.
              </li>
              <li>
                <strong>French Grunt</strong> (SS Antilla): yellow diagonal stripes on a
                silver body. They gather in large stationary clusters under the ledges
                and overhangs of the Antilla during the day.
              </li>
              <li>
                <strong>Queen Angelfish</strong> (Boca Catalina, Malmok Reef): electric
                blue-yellow body, tall disc shape, and a distinctive dark
                &ldquo;crown&rdquo; marking on the forehead. Usually seen in pairs,
                moving slowly along coral heads.
              </li>
              <li>
                <strong>Parrotfish</strong> (all three sites): bright mosaic of green,
                blue, and pink scales, with a beak-like fused mouth used to scrape algae
                off coral. Their rowing fin motion makes them easy to track.
              </li>
              <li>
                <strong>Trumpetfish</strong> (Boca Catalina, Malmok Reef): extremely
                long and thin like a floating stick with a tiny mouth. Hovers vertically
                near sea fans and coral branches, waiting to ambush smaller fish.
              </li>
              <li>
                <strong>Green Moray Eel</strong> (SS Antilla): uniform green-yellow,
                thick, and muscular. Usually spotted with just the head poking out of a
                hole in the wreck, mouth opening and closing rhythmically, that&apos;s
                breathing, not aggression.
              </li>
            </ul>

            <h2>The Best Tip: Stop Moving</h2>
            <p>
              If there&apos;s one thing that separates guests who see everything from
              guests who see almost nothing, it&apos;s this: the best snorkelers stay
              still. When you fin aggressively through the water, fish scatter. When you
              float motionless on the surface, they come back, and within a minute or
              two they completely ignore you.
            </p>
            <p>
              Find a sandy patch between coral heads at Boca Catalina, stop kicking, and
              just watch. The reef comes alive around you. Fish emerge from crevices.
              Turtles continue feeding. A trumpetfish drifts into your field of view
              from nowhere. It&apos;s a completely different experience from chasing
              things around the reef.
            </p>

            <h2>Sea Turtles: A Special Mention</h2>
            <p>
              Green and hawksbill turtles feed regularly in the sea grass beds at Boca
              Catalina. They&apos;re not guaranteed on every trip, but they&apos;re
              common enough that our crew will actively look for them when we anchor
              there. When you find one, the rule is simple: stay calm, keep a
              respectful distance, and don&apos;t touch or chase. A turtle that feels
              safe will keep feeding calmly and give you several minutes of
              extraordinary observation.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14">
            <SectionCTA
              title="See Aruba's reef for yourself"
              body="The fish are there: the sergeant majors at the Antilla, the angelfish at Boca Catalina. Our crew will be in the water with you, naming everything you see."
              image="/ingested/flagship-owner/guest-snorkel-vests-trio.jpg"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/boat-tours">
                  Book Your Cruise <ArrowRight className="size-4" />
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
