import Link from "next/link";
import { Clock } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

const tours = [
  {
    tag: "Gear Included",
    title: "Morning Snorkel Tour",
    time: "3 hrs",
    price: "From $98",
    body: "Kick off your day the best way possible, gliding through crystal-clear turquoise waters aboard our schooner. Explore premium snorkeling spots teeming with tropical fish, vibrant coral, and stunning marine life. All gear and refreshing drinks included, plus a friendly crew to guide you every step of the way.",
    href: "/boat-tours/morning-splash-adventure",
    activityId: "01083159-5861-4408-b78d-22c81e19faa4",
    img: "/ingested/flagshiparubaa/snorkel-couple-turtle.webp",
    alt: "Guests snorkeling alongside a sea turtle in clear turquoise water",
  },
  {
    tag: "Open Bar",
    title: "Afternoon Snorkel Tour",
    time: "3 hrs",
    price: "From $86",
    body: "The most legendary afternoon on the Caribbean Sea! Snorkel the iconic SS Antilla shipwreck and Boca Catalina, then swing off the rope into turquoise waters. With live DJ music, an open bar flowing all cruise long, and a witty crew that keeps the energy high, this is the tour guests rave about most.",
    href: "/boat-tours/afternoon-pirate-party",
    activityId: "47611e71-4496-4915-99ef-816cb4ec6fe2",
    img: "/ingested/flagshiparubaa/afternoon-snorkel-reference.webp",
    alt: "Guests snorkeling alongside a sea turtle near the boat",
  },
  {
    tag: "Premium Cocktails",
    title: "Sunset Cruise",
    time: "3 hrs",
    price: "From $90",
    body: "As golden hour paints the sky in amber and rose, set sail on the most magical evening in Aruba. Sip premium cocktails, savor local Aruban bites, and let the gentle ocean breeze carry away the day's worries. Ideal for couples celebrating a special moment or friends looking for a serene, unforgettable evening at sea.",
    href: "/boat-tours/sunset-stars-cruise",
    activityId: "8ff35752-c22a-41f6-b142-4679aa1d1fb4",
    img: "/ingested/flagshiparubaa/sunset-cruise-reference.webp",
    alt: "The schooner sailing under a dramatic orange sunset sky",
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
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10">
              <Link href={t.href} className="relative block aspect-[16/10] cursor-pointer overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <Link href={t.href} className="cursor-pointer font-display text-xl font-semibold leading-snug hover:text-primary">
                  {t.title}
                </Link>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-t border-border py-2.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {t.time}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                    {t.tag}
                  </span>
                  <span className="ml-auto text-sm font-bold text-ocean">{t.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t.body}</p>
                <div className="mt-auto pt-4">
                  <BookNowButton activityId={t.activityId} className="w-full" showIcon={false} />
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
