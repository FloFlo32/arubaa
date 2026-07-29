import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about booking a Flagship Aruba boat tour.",
};

const faqs = [
  {
    q: "Where do the tours depart from?",
    a: "All cruises depart from the pier in front of MooMba Beach Bar on Palm Beach.",
  },
  {
    q: "Which tour has the most energy?",
    a: "The Afternoon Pirate Party. It runs 1:30pm-5pm with two snorkel stops, a rope swing and island music, and moves at a livelier pace than our morning trip.",
  },
  {
    q: "Do I need to know how to swim or snorkel?",
    a: "No experience is required. Snorkel gear is included on the Morning Splash Adventure and Afternoon Pirate Party, and our crew is happy to help first-timers get comfortable.",
  },
  {
    q: "What should I bring?",
    a: "Swimwear, a towel, sunscreen and a waterproof phone case if you'd like photos. Snorkel gear, drinks and snacks are provided.",
  },
  {
    q: "Is food and drink included?",
    a: "Yes, on every tour. The Morning Splash Adventure includes unlimited drinks and snacks, the Afternoon Pirate Party includes a Caribbean-style lunch and open bar, and the Sunset & Stars Cruise includes an open bar and Caribbean-inspired bites.",
  },
  {
    q: "What time should I arrive?",
    a: "Please arrive about 30 minutes before departure so we can get everyone checked in and settled before we set sail.",
  },
  {
    q: "What happens if the weather turns bad?",
    a: "Safety comes first. If a cruise needs to be shortened, rescheduled or canceled for weather, our crew will contact you directly to sort out the best option.",
  },
  {
    q: "Is the Sunset & Stars Cruise suitable for families?",
    a: "Yes, it works well for couples, honeymooners, families and friends. It is a more relaxed, scenic trip than our snorkeling tours.",
  },
  {
    q: "Which snorkel sites will we visit?",
    a: "Our captain chooses from Boca Catalina, Malmok Beach and the SS Antilla shipwreck based on conditions that day. The Morning Splash Adventure covers all three; the Afternoon Pirate Party covers two.",
  },
  {
    q: "How do I book, and where can I see pricing?",
    a: "Contact us by phone, WhatsApp or email and our crew will confirm current pricing and availability for your dates.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Before you book"
          title="Frequently Asked Questions"
          body="Everything you need to know before stepping aboard."
          src="/ingested/flagshiparubaa/guest-f.webp"
          alt="A group of guests laughing together aboard the schooner"
        />

        <section className="container-px mx-auto max-w-3xl pb-24 pt-16">
          <RevealGroup className="mt-6 space-y-4" stagger={0.05}>
            {faqs.map((f) => (
              <RevealItem key={f.q} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold">{f.q}</h2>
                <p className="mt-2 text-pretty text-muted-foreground">{f.a}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-12 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Still have questions?</h2>
            <p className="max-w-md text-muted-foreground">
              Our crew is happy to help by phone, email or WhatsApp.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <BookNowButton />
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Contact Us <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
