import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { ViatorLogoIcon, TripAdvisorLogoIcon, GetYourGuideLogoIcon } from "@/components/icons";

const partners = [
  {
    href: "https://www.viator.com",
    label: "Viator",
    Icon: ViatorLogoIcon,
    color: "oklch(0.62 0.16 45)",
    tint: "oklch(0.62 0.16 45 / 0.1)",
    border: "oklch(0.62 0.16 45 / 0.25)",
  },
  {
    href: "https://www.tripadvisor.com",
    label: "TripAdvisor",
    Icon: TripAdvisorLogoIcon,
    color: "oklch(0.6 0.15 155)",
    tint: "oklch(0.6 0.15 155 / 0.1)",
    border: "oklch(0.6 0.15 155 / 0.25)",
  },
  {
    href: "https://www.getyourguide.com",
    label: "GetYourGuide",
    Icon: GetYourGuideLogoIcon,
    color: "oklch(0.6 0.19 25)",
    tint: "oklch(0.6 0.19 25 / 0.1)",
    border: "oklch(0.6 0.19 25 / 0.25)",
  },
];

export function WeWorkWith() {
  return (
    <section className="container-px mx-auto max-w-5xl py-16">
      <Reveal className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          We work with
        </p>
      </Reveal>
      <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-3" stagger={0.08}>
        {partners.map((p) => (
          <RevealItem key={p.label}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.label}
              className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: p.tint, borderColor: p.border }}
            >
              <p.Icon className="h-7" style={{ color: p.color }} />
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
