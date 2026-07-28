import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Cruises",
  description:
    "Four traditional schooner cruises out of Aruba: morning and afternoon snorkeling, a sunset dinner party, and a sunset sail.",
};

const cruises = [
  {
    title: "Morning Snorkeling Trip",
    time: "9am – 1pm · 4 hours",
    price: "$98",
    audience: "All ages",
    body: "Three snorkel stops during the clearest morning water, a full BBQ lunch, open bar and the rope swing off the bow.",
    href: "/cruises/morning-snorkeling",
    img: "/ingested/jollypirates/img-051.webp",
    alt: "Guests leap from the Jolly Pirates schooner into the clear Caribbean water",
  },
  {
    title: "Afternoon Snorkeling Tour",
    time: "2pm – 5pm · 3 hours",
    price: "$76",
    audience: "All ages",
    body: "Two snorkel stops, open bar and the rope swing, in a shorter window that fits an easy afternoon.",
    href: "/cruises/afternoon-snorkeling",
    img: "/ingested/jollypirates/img-044.webp",
    alt: "Guests relaxing on the bow of the Jolly Pirates schooner in the afternoon sun",
  },
  {
    title: "Sunset Dinner Cruise",
    time: "5:30pm – 8:30pm · 3 hours",
    price: "$110",
    audience: "Adults only",
    body: "A BBQ dinner with dessert, open bar and a live DJ aboard Aruba's liveliest pirate-ship sunset party.",
    href: "/cruises/sunset-dinner-cruise",
    img: "/ingested/jollypirates/img-027.webp",
    alt: "Guests toast with drinks at golden hour aboard the Jolly Pirates sunset cruise",
  },
  {
    title: "Sunset Sail",
    time: "5:30pm – 7:30pm · 2 hours",
    price: "$59",
    audience: "All ages",
    body: "No snorkeling, just an open bar and Aruba's coastline as the sky turns pink over the water.",
    href: "/cruises/sunset-sail",
    img: "/ingested/jollypirates/img-031.webp",
    alt: "The Jolly Pirates schooner under sail along Aruba's turquoise coastline",
  },
];

export default function CruisesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="All cruises"
          title="Four ways to sail with us"
          body="Every trip departs from MooMba Beach aboard a traditional teak schooner. Pick your time of day and how much snorkeling you want."
          src="/ingested/jollypirates/img-031.webp"
          alt="The Jolly Pirates schooner under sail along Aruba's turquoise coastline"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="space-y-6">
            {cruises.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[1.1fr_1.4fr]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-2xl font-bold sm:text-3xl">{c.title}</h2>
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-lg font-bold text-primary">
                        {c.price}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" /> {c.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="size-4" /> {c.audience}
                      </span>
                    </div>
                    <p className="text-pretty text-muted-foreground">{c.body}</p>
                    <div>
                      <Button asChild>
                        <Link href={c.href}>
                          Trip Details <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Planning a group trip?</h2>
            <p className="max-w-md text-muted-foreground">
              Buy out an entire schooner for your wedding, reunion or work party.
            </p>
            <RevealGroup className="flex flex-wrap items-center justify-center gap-3">
              <RevealItem>
                <Button asChild size="lg">
                  <Link href="/private-charters">See Private Charters</Link>
                </Button>
              </RevealItem>
              <RevealItem>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </RevealItem>
            </RevealGroup>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
