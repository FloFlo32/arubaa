import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const tours = [
  {
    eyebrow: "Morning",
    tag: "Gear Included",
    title: "Morning Snorkel Tour",
    time: "9am to 1pm · 4 hours",
    price: "From $98 per adult",
    body: "Three snorkel stops, gear included, unlimited drinks and Caribbean snacks aboard our traditional schooner.",
    href: "/boat-tours/morning-splash-adventure",
    img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
    alt: "Guests snorkeling alongside a sea turtle in clear turquoise water",
  },
  {
    eyebrow: "Afternoon",
    tag: "Open Bar",
    title: "Afternoon Snorkel Tour",
    time: "1:30pm to 5pm · 3.5 hours",
    price: "From $86 per adult",
    body: "Two premium snorkel stops, a Caribbean-style lunch, open bar, rope swing and island music.",
    href: "/boat-tours/afternoon-pirate-party",
    img: "/ingested/flagshiparubaa/guest-e.webp",
    alt: "A large group of guests cheering together aboard the schooner",
  },
  {
    eyebrow: "Sunset",
    tag: "Premium Cocktails",
    title: "Sunset Cruise",
    time: "5:30pm to 7:30pm · 2 hours",
    price: "From $90 per adult",
    body: "An open bar, Caribbean bites and two swimming stops as the sky turns to stars over the water.",
    href: "/boat-tours/sunset-stars-cruise",
    img: "/ingested/flagshiparubaa/schooner-sunset-guests.webp",
    alt: "Guests aboard the schooner at sunset",
  },
];

export function BoatToursOverview() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Our boat tours
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Pick your time of day</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Three ways to sail with us: a morning snorkeling adventure, a livelier
          afternoon party, or an evening under sail and stars.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {tours.map((t) => (
          <RevealItem key={t.title}>
            <Link
              href={t.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                  {t.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {t.eyebrow}
                </span>
                <h3 className="flex items-start justify-between gap-2 font-display text-xl font-semibold leading-snug">
                  {t.title}
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" /> {t.time}
                </p>
                <p className="text-sm text-muted-foreground">{t.body}</p>
                <p className="mt-1 text-lg font-bold text-ocean">{t.price}</p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
