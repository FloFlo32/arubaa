import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

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
    q: "Do I need to know how to swim or snorkel?",
    a: "No experience is required for the Morning Splash Adventure. Snorkel gear is included, and our crew is happy to help first-timers get comfortable.",
  },
  {
    q: "What should I bring?",
    a: "Swimwear, a towel, sunscreen and a waterproof phone case if you'd like photos. Snorkel gear, drinks and snacks are provided.",
  },
  {
    q: "Is food and drink included?",
    a: "Yes. The Morning Splash Adventure includes unlimited drinks and Caribbean snacks, and the Sunset & Stars Cruise includes an open bar and Caribbean-inspired bites.",
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
    a: "Yes, it works well for couples, honeymooners, families and friends. It is a more relaxed, scenic trip than the morning snorkeling adventure.",
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
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <HelpCircle className="size-3.5" /> Before you book
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know before stepping aboard.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-24">
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
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
