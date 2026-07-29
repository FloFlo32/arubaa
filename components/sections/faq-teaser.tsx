import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faqs";

export function FaqTeaser() {
  const preview = faqs.slice(0, 5);

  return (
    <section className="container-px mx-auto max-w-3xl py-20 sm:py-24">
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

      <RevealGroup className="mt-10 space-y-4" stagger={0.05}>
        {preview.map((f) => (
          <RevealItem key={f.q} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">{f.q}</h3>
            <p className="mt-2 text-pretty text-muted-foreground">{f.a}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-8 text-center">
        <Button asChild size="lg" variant="outline">
          <Link href="/faq">
            See All FAQs <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}
