import type { Metadata } from "next";
import Link from "next/link";
import { Users, Anchor, PartyPopper, ArrowRight, Phone, Mail } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Private Charters",
  description:
    "Charter a full Jolly Pirates schooner in Aruba for a wedding, birthday, corporate event or family reunion.",
};

const uses = [
  {
    icon: PartyPopper,
    title: "Birthdays & bachelor parties",
    body: "Buy out the whole schooner so it's just your group, our crew and the open bar.",
  },
  {
    icon: Users,
    title: "Corporate events",
    body: "Bring the whole office out for a team day that doesn't feel like a team-building exercise.",
  },
  {
    icon: Anchor,
    title: "Weddings & reunions",
    body: "Say your vows or reunite the family aboard a traditional teak schooner at sunset.",
  },
];

export default function PrivateCharterPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Just your group"
          title="Private Charters"
          body="Buy out an entire Jolly Pirates schooner for your group: same snorkeling, same open bar, none of the other passengers."
          src="/ingested/jollypirates/img-044.webp"
          alt="A group of guests laughing together on the schooner"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">Made for groups</Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Any of our cruises, just for you
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Every cruise on our schedule, from morning snorkeling to the sunset dinner
              party, can be booked as a private charter. Pick the trip, the headcount and
              the occasion, and we&apos;ll build the rest around it.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {uses.map((u) => (
              <RevealItem
                key={u.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <u.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-12 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s plan your charter</h2>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Reach out with your group size, preferred date and cruise type, and
                  we&apos;ll send over pricing and availability.
                </p>
                <div className="mt-6">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Contact Us <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${brand.contact.phone}`}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Call us</span>
                    <span className="block font-semibold">+297 586 8107</span>
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
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
