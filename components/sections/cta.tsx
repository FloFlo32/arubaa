import { Check } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

const perks = [
  "Private charters available for any group size",
  "Custom itineraries & open bar included",
  "Premium snorkeling & rope swing adventures",
];

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl px-6 py-24 text-center sm:px-12 sm:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagshiparubaa/guest-e.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/50" />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold text-primary-foreground sm:text-5xl">
              Group or Private: We Sail for You
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-primary-foreground/85">
              Join one of our legendary group cruises or book the entire boat for your
              own private charter. Perfect for birthdays, anniversaries, corporate
              events, or any occasion worth celebrating at sea.
            </p>
            <ul className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-left text-sm text-primary-foreground/85">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <Check className="size-5 shrink-0 text-ocean" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex justify-center">
              <BookNowButton label="Group Inquiry" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
