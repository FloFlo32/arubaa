import { Anchor, GlassWater, Fish, Ship, Music, Sunset } from "lucide-react";
import { Marquee } from "@/components/magic/marquee";

const highlights = [
  { icon: Ship, label: "Real Wooden Schooner" },
  { icon: GlassWater, label: "Open Bar Included" },
  { icon: Fish, label: "3 Snorkel Sites" },
  { icon: Anchor, label: "Family-Run Crew" },
  { icon: Music, label: "Island Music Onboard" },
  { icon: Sunset, label: "Sunset Views" },
];

export function HighlightsMarquee() {
  return (
    <section className="border-y border-border bg-card py-4">
      <Marquee pauseOnHover className="[--marquee-duration:32s]">
        {highlights.map((h) => (
          <span
            key={h.label}
            className="flex items-center gap-2.5 whitespace-nowrap px-6 text-sm font-medium text-muted-foreground"
          >
            <h.icon className="size-4 text-primary" /> {h.label}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
