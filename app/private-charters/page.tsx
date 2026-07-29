import type { Metadata } from "next";
import Link from "next/link";
import { Users, PartyPopper, HeartHandshake, ArrowRight, Phone, Mail, GlassWater, Utensils } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Gallery } from "@/components/magic/gallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const partyPhotos = [
  { src: "/ingested/flagshiparubaa/guest-f.webp", alt: "A bachelorette group posing together on deck" },
  { src: "/ingested/flagshiparubaa/guest-g.webp", alt: "Guests dancing together at golden hour" },
  { src: "/ingested/flagshiparubaa/guest-d.webp", alt: "Guests toasting with drinks at the onboard bar" },
  { src: "/ingested/flagship-owner/ladyblack-jump.jpg", alt: "A guest jumping off the bow into the ocean" },
];

export const metadata: Metadata = {
  title: "Private Charters",
  description:
    "Charter the full Flagship Aruba schooner for a birthday, bachelor or bachelorette party, corporate event, or family reunion.",
};

const uses = [
  {
    icon: PartyPopper,
    title: "Birthdays & bachelor parties",
    body: "Buy out the whole schooner so it's just your group, our crew and the open bar.",
    src: "/ingested/flagshiparubaa/guest-f.webp",
    alt: "A bachelorette group posing together on deck",
  },
  {
    icon: Users,
    title: "Corporate events",
    body: "Bring the whole office out for a team day that doesn't feel like a team-building exercise.",
    src: "/ingested/flagshiparubaa/guest-a.webp",
    alt: "A group of guests relaxing together with drinks on deck",
  },
  {
    icon: HeartHandshake,
    title: "Weddings & reunions",
    body: "Say your vows or reunite the family aboard a genuinely restored wooden schooner.",
    src: "/ingested/flagshiparubaa/guest-h.webp",
    alt: "Guests relaxing together on the bow net",
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
          body="Buy out the entire Flagship Aruba schooner for your group: same snorkeling, same open bar, none of the other passengers."
          src="/ingested/flagshiparubaa/guest-e.webp"
          alt="A large group of guests cheering together aboard the schooner"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <Badge variant="accent">Made for groups</Badge>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Any of our tours, just for you
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              The Morning Splash Adventure, the Afternoon Pirate Party, and the Sunset &
              Stars Cruise can all be booked as a private charter. Pick the tour, the
              headcount and the occasion, and we&apos;ll build the rest around it.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {uses.map((u) => (
              <RevealItem
                key={u.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={u.src}
                    alt={u.alt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="grid size-12 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
                    <u.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-16 sm:pb-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Your group, your energy</h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Bachelorette parties, birthdays, reunions: every charter looks a little
              different once it&apos;s just your crowd on board.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <Gallery images={partyPhotos} />
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-16 sm:pb-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <span className="grid size-11 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
                <GlassWater className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Eating & drinking
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Your bar, your menu, your pace
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Every charter comes with a full open bar, poured all trip long, and we&apos;ll
                build the food around your event: Caribbean-style snacks for a casual
                afternoon, a full lunch spread for a longer celebration, or something more
                specific if you tell us what you have in mind.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Utensils className="size-4 shrink-0 text-ocean" /> Catering scales with your group size and occasion
              </div>
            </Reveal>
            <Reveal delay={0.08} className="grid grid-cols-2 gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagshiparubaa/guest-d.webp"
                alt="Guests toasting with drinks at the onboard bar"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-2xl border border-border object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagship-owner/guest-drinks-three.jpg"
                alt="Guests enjoying drinks and snacks together on deck"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-2xl border border-border object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal>
            <div className="relative grid gap-8 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12 md:grid-cols-[1.2fr_1fr] md:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ingested/flagship-owner/ladyblack-transom.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 size-full object-cover opacity-25"
              />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s plan your charter</h2>
                <p className="mt-3 max-w-md text-primary-foreground/80">
                  Reach out with your group size, preferred date and tour type, and
                  we&apos;ll send over pricing and availability.
                </p>
                <div className="mt-6">
                  <Button asChild size="lg" className="bg-ocean text-primary hover:bg-ocean/90">
                    <Link href="/contact">
                      Contact Us <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <a
                  href={`tel:${brand.contact.phone}`}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4 transition-colors hover:border-ocean/40 hover:bg-ocean/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ocean/20 text-ocean">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm text-primary-foreground/70">Call us</span>
                    <span className="block font-semibold">+297 567 7637</span>
                  </span>
                </a>
                <a
                  href={`mailto:${brand.social.email}`}
                  className="flex cursor-pointer items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4 transition-colors hover:border-ocean/40 hover:bg-ocean/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ocean/20 text-ocean">
                    <Mail className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm text-primary-foreground/70">Email us</span>
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
