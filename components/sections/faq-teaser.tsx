"use client";

import * as React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight, Plus } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { faqs } from "@/lib/faqs";

export function FaqTeaser() {
  const preview = faqs.slice(0, 5);
  const [open, setOpen] = React.useState(0);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ocean/10 via-background to-background" />
      <div className="container-px relative z-10 mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Badge variant="accent" className="mx-auto">
            <HelpCircle className="size-3.5" /> Before you book
          </Badge>
          <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
            Questions? We&apos;ve got answers
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            The things guests ask us most, before they even step aboard.
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-primary/5">
          {preview.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={cn(i !== 0 && "border-t border-border")}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-ocean/5"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ocean/15 text-sm font-bold text-ocean">
                      {i + 1}
                    </span>
                    <span className="text-lg font-semibold">{f.q}</span>
                  </span>
                  <Plus className={cn("size-5 shrink-0 text-ocean transition-transform duration-200", isOpen && "rotate-45")} />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-pretty px-6 pb-6 pl-[3.75rem] text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal delay={0.1} className="mt-8 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/faq">
              See All FAQs <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
