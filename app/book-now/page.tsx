import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone, Mail, ArrowRight } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { AuroraBackground } from "@/components/magic/aurora-background";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Book a Flagship Aruba boat tour: the Morning Splash Adventure or the Sunset & Stars Cruise.",
};

const starters = [
  {
    title: "Morning Splash Adventure",
    href: "/boat-tours/morning-splash-adventure",
    src: "/ingested/flagshiparuba/img-008.webp",
    alt: "A snorkeler smiles at the camera in clear turquoise water off Aruba's coast",
    description: "3 snorkel stops, gear, drinks and snacks included. 9am-1pm.",
  },
  {
    title: "Sunset & Stars Cruise",
    href: "/boat-tours/sunset-stars-cruise",
    src: "/ingested/flagshiparuba/img-006.webp",
    alt: "A guest jumps from the Flagship Aruba schooner into the ocean",
    description: "Open bar, Caribbean bites and stargazing. 5:30pm-7:30pm.",
  },
];

export default function BookNowPage() {
  const phoneDisplay = "+297 567 7637";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <div className="container-px mx-auto grid max-w-7xl gap-10 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <Badge variant="accent">
                  <CalendarCheck className="size-3.5" /> Ready when you are
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Book Your <span className="text-gradient">Aruba Boat Tour</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  Two tours to choose from, both departing MooMba Beach Bar. Call,
                  WhatsApp or email us to lock in your date.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                <Image
                  src="/ingested/flagshiparuba/img-007.webp"
                  alt="The Flagship Aruba schooner under sail off Aruba's coast"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  quality={80}
                  className="object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Start with</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {starters.map((s) => (
              <RevealItem key={s.title}>
                <ImageCard
                  src={s.src}
                  alt={s.alt}
                  eyebrow="Start here"
                  title={s.title}
                  description={s.description}
                  href={s.href}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
              <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Prefer to talk it through?
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Call, WhatsApp or email our crew and we&apos;ll help you pick the
                    right tour and lock in your date.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a
                    href={`tel:${brand.contact.phone}`}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">Call us</span>
                      <span className="block font-semibold">{phoneDisplay}</span>
                    </span>
                  </a>
                  <a
                    href={`mailto:${brand.social.email}`}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">Email us</span>
                      <span className="block font-semibold">{brand.social.email}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-muted-foreground">
              Not sure yet which tour fits your trip? Compare both first.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/boat-tours">
                See Both Boat Tours First <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
