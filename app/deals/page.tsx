import type { Metadata } from "next";
import Link from "next/link";
import { Users, CalendarDays, Gift, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { PhotoHero } from "@/components/magic/photo-hero";

export const metadata: Metadata = {
  title: "Deals",
  description: "Group rates and combo pricing on Jolly Pirates snorkeling trips and sunset cruises in Aruba.",
};

const featured = [
  {
    title: "Two-Cruise Combo",
    src: "/ingested/jollypirates/img-020.webp",
    alt: "Guests relaxing together with drinks on deck",
    description:
      "Book the morning snorkeling trip and a sunset cruise together and ask our crew about combo pricing.",
  },
  {
    title: "Group Rates",
    src: "/ingested/jollypirates/img-044.webp",
    alt: "A group of guests laughing together on the schooner",
    description:
      "Traveling with 10 or more? Ask about group pricing on any of our four cruises.",
  },
];

const perks = [
  {
    icon: Users,
    title: "Group bookings",
    body: "Discounted per-person rates for parties of 10 or more on any cruise.",
  },
  {
    icon: CalendarDays,
    title: "Off-peak pricing",
    body: "Ask about seasonal rates on the afternoon snorkeling tour and sunset sail.",
  },
  {
    icon: Gift,
    title: "Kids sail for less",
    body: "Children are priced below the adult rate on every cruise except our adults-only sunset dinner.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Save on your cruise"
          title="Deals"
          body="Group rates, combo pricing and seasonal offers on our snorkeling trips and sunset cruises."
          src="/ingested/jollypirates/img-020.webp"
          alt="Guests relaxing together with drinks on deck"
        />

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Featured offers</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Offer"
                  title={deal.title}
                  description={deal.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">
              <Gift className="size-3.5" /> Always available
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Ways to save, year round</h2>
            <p className="mt-4 text-muted-foreground">
              Beyond limited-time offers, we keep a standing set of savings open to every
              guest. Contact us for current pricing.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {perks.map((s) => (
              <RevealItem
                key={s.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Ready to lock in your date?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Reach out for current pricing and availability before you book.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/book-now">
                    Book Now <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
