import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, CalendarCheck, Anchor } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { SectionCTA } from "@/components/sections/section-cta";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: "Deals & Offers",
  description: "Ways to get the best value on a Flagship Aruba boat tour or private charter.",
};

const offers = [
  {
    icon: Anchor,
    title: "Book direct, best price",
    body: "Booking straight through us means no reseller markup and no middleman. Message us directly and we'll always give you our best available rate.",
  },
  {
    icon: Users,
    title: "Group and private charter rates",
    body: "Buying out the whole schooner for a bachelor party, wedding or company outing gets you a custom group rate. The bigger the group, the more it's worth asking.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible dates, better availability",
    body: "Weekday and shoulder-season sailings tend to have more open spots and more flexibility on timing. If your dates are flexible, tell us and we'll find the best fit.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Deals & Offers"
          title="The best way to save is to ask us directly"
          body="We don't run flash sales, but we do work with every guest to find the tour, date and rate that fits."
          src="/ingested/flagshiparubaa/coastline-cliff-sunset.webp"
          alt="The Flagship Aruba schooner silhouetted against a sunset off Aruba's coast"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">How to get the best rate</Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              A few ways guests save with us
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              We&apos;re a small, family-run crew, not a call center. That means real answers
              about pricing and availability, not a generic discount code.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {offers.map((o) => (
              <RevealItem
                key={o.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
                  <o.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <SectionCTA
              title="Tell us your plans"
              body="Send us your group size, dates and which tour you're eyeing. We'll reply with pricing and let you know about any current availability deals."
              image="/ingested/flagshiparubaa/guest-d.webp"
            >
              <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                <Link href="/contact">
                  Contact Us <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <a href={`https://wa.me/${brand.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </SectionCTA>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
