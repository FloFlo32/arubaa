import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { SectionCTA } from "@/components/sections/section-cta";
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

          <Reveal delay={0.1} className="mt-10">
            <SectionCTA title="Still have questions?" body="Our crew is happy to help by phone, email or WhatsApp.">
              <BookNowButton />
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <Link href="/contact">
                  Contact Us <ArrowRight className="size-4" />
                </Link>
              </Button>
            </SectionCTA>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
