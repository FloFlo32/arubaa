import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about booking a Flagship Aruba boat tour.",
};

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
