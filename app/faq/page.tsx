import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about booking a Jolly Pirates cruise in Aruba.",
};

const faqs = [
  {
    q: "Where do the cruises depart from?",
    a: "All cruises depart from MooMba Beach on Palm Beach, between the Holiday Inn and the Marriott. Look for our crew and schooners right on the sand.",
  },
  {
    q: "Do I need to know how to swim or snorkel?",
    a: "No experience is required. Mask, snorkel and fins are included, our crew gives a quick briefing before the first stop, and life jackets are available for anyone who wants one.",
  },
  {
    q: "Is the Sunset Dinner Cruise really adults only?",
    a: "Yes, the Pirate Party Sunset Dinner Cruise is 18 and over. Our other three cruises, the morning and afternoon snorkeling trips and the sunset sail, are open to all ages.",
  },
  {
    q: "What should I bring?",
    a: "Swimwear, a towel, sunscreen, and a waterproof case for your phone if you'd like photos. Snorkel gear, drinks and food (where included) are provided.",
  },
  {
    q: "Is food and drink really included?",
    a: "Yes. The morning trip includes a full BBQ lunch, the sunset dinner cruise includes BBQ and dessert, and every cruise includes an open bar with beer, rum punch, soda and water.",
  },
  {
    q: "What happens if the weather turns bad?",
    a: "Safety comes first. If a cruise needs to be shortened, rescheduled or canceled for weather, our crew will contact you directly to sort out the best option.",
  },
  {
    q: "How far in advance should I book?",
    a: "Our cruises are popular, especially the morning trip, so we recommend booking a few days ahead, particularly in high season.",
  },
  {
    q: "Are children welcome?",
    a: "Yes, on every cruise except the adults-only Sunset Dinner Cruise. Children are priced lower than adults, contact us for exact pricing.",
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
