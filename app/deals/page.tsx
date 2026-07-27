import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Percent, ShieldCheck, Home, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageCard } from "@/components/magic/image-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { AuroraBackground } from "@/components/magic/aurora-background";

export const metadata: Metadata = {
  title: "Aruba Vacation & Travel Deals",
  description:
    "Save on your next Aruba vacation with flexible, affordable deals and offers.",
};

const featured = [
  {
    title: "One Happy Workation",
    src: "/ingested/arubaa/img-022.webp",
    alt: "A woman doing yoga on a cliff overlook in Aruba, working remotely between sessions",
    description:
      "In Aruba, we're in the business of happiness, so we're offering visitors a chance to work right from paradise.",
  },
  {
    title: "Travel Requirements",
    src: "/ingested/arubaa/img-030.webp",
    alt: "Visitors arriving on an Aruba beach, ready for their trip",
    description:
      "Here are some details to remember when traveling to and from Aruba. Learn more about the new $20 sustainability fee.",
  },
];

const savings = [
  {
    icon: Home,
    title: "Hotels & resorts",
    body: "Room rate savings at Aruba's amazing hotels and resorts, all year round.",
  },
  {
    icon: Briefcase,
    title: "Extended stays",
    body: "Flexible workation options for visitors who want more than a week in paradise.",
  },
  {
    icon: Heart,
    title: "Weddings & honeymoons",
    body: "Worry free wedding and honeymoon packages, built for your happiest days.",
  },
];

export default function DealsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <div className="container-px mx-auto grid max-w-7xl gap-10 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <Reveal delay={0.2} className="order-2 lg:order-1">
              <div className="relative aspect-[5/6] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-039.webp"
                  alt="Beachgoers enjoying a sunny afternoon on the Aruba shoreline"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <Badge variant="accent">
                  <Percent className="size-3.5" /> Save more, worry less
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Aruba Vacation <span className="text-gradient">& Travel Deals</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  There are so many ways for you to save on your next Aruba vacation.
                  We&apos;re welcoming visitors back with flexibility, serenity and
                  affordability.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-bold sm:text-5xl">Featured offers</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((deal) => (
              <RevealItem key={deal.title}>
                <ImageCard
                  src={deal.src}
                  alt={deal.alt}
                  eyebrow="Offer"
                  title={deal.title}
                  description={deal.description}
                  ratio="aspect-[16/10]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Always available
            </Badge>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Ways to save, year round</h2>
            <p className="mt-4 text-muted-foreground">
              Beyond limited time offers, Aruba keeps a standing set of savings programs
              open to every visitor.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {savings.map((s) => (
              <RevealItem
                key={s.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Ready to lock in your rate?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Grab today&apos;s deal before it&apos;s gone and start counting down to One
                Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/book-now">
                    Book Now <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
