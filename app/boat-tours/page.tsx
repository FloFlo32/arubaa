import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Boat Tours",
  description:
    "Three boat tours out of Aruba aboard our traditional wooden schooner: the Morning Splash Adventure, the Afternoon Pirate Party, and the Sunset & Stars Cruise.",
};

const tours = [
  {
    title: "Morning Splash Adventure",
    time: "9am – 1pm · 4 hours",
    body: "Three snorkel stops, gear included, unlimited drinks and Caribbean snacks. A full day of adventure before lunch.",
    href: "/boat-tours/morning-splash-adventure",
    img: "/ingested/flagshiparuba/img-008.webp",
    alt: "A snorkeler smiles at the camera in clear turquoise water off Aruba's coast",
  },
  {
    title: "Afternoon Pirate Party",
    time: "1:30pm – 5pm · 3.5 hours",
    body: "Two premium snorkel stops, a Caribbean-style lunch, open bar, rope swing and island music for a livelier afternoon.",
    href: "/boat-tours/afternoon-pirate-party",
    img: "/ingested/flagshiparubaa/guest-e.webp",
    alt: "A large group of guests cheering together aboard the schooner",
  },
  {
    title: "Sunset & Stars Cruise",
    time: "5:30pm – 7:30pm · 2 hours",
    body: "An open bar, Caribbean bites, two swimming stops, and stargazing as the sky darkens over the water.",
    href: "/boat-tours/sunset-stars-cruise",
    img: "/ingested/flagshiparuba/img-006.webp",
    alt: "A guest jumps from the Flagship Aruba schooner into the ocean",
  },
];

export default function BoatToursPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="All tours"
          title="Three ways to sail with us"
          body="Every tour departs from the pier in front of MooMba Beach Bar aboard our traditional wooden schooner."
          src="/ingested/flagshiparubaa/schooner-turquoise-anchor.webp"
          alt="The Flagship Aruba schooner under sail off Aruba's coast"
        />

        <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
          <div className="space-y-6">
            {tours.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="grid gap-0 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[1.1fr_1.4fr]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.img}
                      alt={t.alt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
                    <h2 className="font-display text-2xl font-bold sm:text-3xl">{t.title}</h2>
                    <span className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="size-4" /> {t.time}
                    </span>
                    <p className="text-pretty text-muted-foreground">{t.body}</p>
                    <div>
                      <Button asChild>
                        <Link href={t.href}>
                          Tour Details <ArrowRight className="size-4" />
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
            <h2 className="text-3xl font-bold sm:text-4xl">Not sure which to pick?</h2>
            <p className="max-w-md text-muted-foreground">
              Reach out and our crew will help you choose the right tour for your trip.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
