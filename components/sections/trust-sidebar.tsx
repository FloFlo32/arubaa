import { Ship, Users, GlassWater, Star, MessageCircle } from "lucide-react";
import { brand } from "@/brand.config";
import { Reveal } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

const facts = [
  { icon: Ship, text: "A genuine traditional wooden schooner" },
  { icon: Users, text: "Capped at 24 guests, never a crowd" },
  { icon: GlassWater, text: "Open bar on our afternoon & sunset cruises" },
];

export function TrustSidebar() {
  return (
    <Reveal delay={0.1} className="lg:sticky lg:top-24">
      <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Why sail with us
          </p>
          <ul className="mt-4 space-y-3">
            {facts.map((f) => (
              <li key={f.text} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                  <f.icon className="size-4" />
                </span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-5">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-ocean text-ocean" />
            ))}
          </div>
          <p className="mt-2 text-sm text-pretty text-muted-foreground">
            &ldquo;Guests consistently praise the friendly, witty crew, open bar, and
            great music.&rdquo;
          </p>
          <p className="mt-1.5 text-xs font-semibold text-muted-foreground">Lisa de Boer</p>
        </div>

        <div className="border-t border-border pt-5">
          <BookNowButton className="w-full" />
          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex cursor-pointer items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </Reveal>
  );
}
