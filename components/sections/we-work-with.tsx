import { Reveal } from "@/components/magic/reveal";

const partners = [
  { href: "https://www.viator.com", label: "Viator", src: "/partners/viator.svg" },
  { href: "https://www.tripadvisor.com", label: "TripAdvisor", src: "/partners/tripadvisor.svg" },
  { href: "https://www.getyourguide.com", label: "GetYourGuide", src: "/partners/getyourguide.svg" },
];

export function WeWorkWith() {
  return (
    <section className="container-px mx-auto max-w-5xl py-14">
      <Reveal className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          We work with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          {partners.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.label}
              className="cursor-pointer opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.label} className="h-6 w-auto sm:h-7" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
