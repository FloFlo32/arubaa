import type { Metadata } from "next";
import Link from "next/link";
import {
  BedDouble,
  Home,
  Key,
  Ticket,
  Plane,
  Car,
  Ship,
  Palmtree,
  Info,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Plan Your Visit to Aruba",
  description:
    "Everything you need to plan your Aruba vacation: hotels, rentals, getting here and getting around.",
};

function SplitRow({
  id,
  icon: Icon,
  eyebrow,
  title,
  body,
  src,
  alt,
  reverse = false,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-6xl py-16 sm:py-20">
      <div
        className={cn(
          "grid items-center gap-10 md:grid-cols-2 md:gap-14",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
            <Icon className="size-5" />
          </span>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

const logisticsCells = [
  {
    id: "timeshares",
    icon: Key,
    title: "Timeshares",
    body: "Own a piece of the island. Timeshare properties for guests who keep coming back.",
    span: "md:col-span-2",
  },
  {
    id: "getting-to-aruba",
    icon: Plane,
    title: "Getting to Aruba",
    body: "Getting to Aruba from almost anywhere in the world is a simple, stress-free experience.",
  },
  {
    id: "getting-around",
    icon: Car,
    title: "Getting Around Aruba",
    body: "From our lively capital to quiet seaside towns, pristine beaches to rugged desert, it's easy to go anywhere.",
  },
  {
    id: "guest-services",
    icon: LifeBuoy,
    title: "Guest Services",
    body: "Support and assistance whenever you need it, before you land and while you're here.",
  },
  {
    id: "tips",
    icon: Info,
    title: "Tips for Visitors",
    body: "Local know-how on timing, weather and getting the most out of every day.",
    span: "md:col-span-2",
  },
];

const tips = [
  "Sunny nearly every day of the year: pack light layers, not umbrellas.",
  "The trade winds pick up in the afternoon, perfect for windsurfing.",
  "Dutch, Papiamento, Spanish and English are all widely spoken.",
  "Tap water is safe to drink island-wide.",
];

export default function PlanYourVisitPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/6923a03a-c228-4ba6-a03d-5530a8311041/mp4/FINAL-ANIMATION-VIDEO-HERO-HOME.mp4"
            poster="/ingested/arubaa/img-039.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Plan ahead
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Plan Your Visit to Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Planning your vacation to Aruba is easy, especially with a whole island
                of friendly faces happy to share suggestions. Convenient transportation,
                safe island access and comfortable resorts make it simple to relax and
                explore.
              </p>
            </Reveal>
          </div>
        </section>

        <SplitRow
          id="hotels-resorts"
          icon={BedDouble}
          eyebrow="Where to stay"
          title="Hotels & Resorts"
          body="From boutique hideaways to beachfront towers, Aruba's hotels and resorts range from intimate to full-service, all within reach of the water."
          src="/ingested/arubaa/img-057.webp"
          alt="A couple chats poolside together at a resort in Aruba"
        />

        <SplitRow
          id="vacation-rentals"
          icon={Home}
          eyebrow="Space to spread out"
          title="Vacation Rentals"
          body="For longer stays or bigger groups, vacation rentals give you a home base with a kitchen, more room and a slower pace."
          src="/ingested/arubaa/img-036.webp"
          alt="A couple relaxes together on the coastal rocks near their rental"
          reverse
        />

        {/* All-Inclusive */}
        <section id="all-inclusive" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Ticket className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              One price, everything included
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              All-Inclusive
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Bundled vacation packages covering meals, drinks and activities, so the
              only decision left is which pool chair to claim.
            </p>
          </Reveal>
          <div className="mt-10">
            <ImageCard
              src="/ingested/arubaa/img-053.webp"
              alt="Guests jump into a resort pool together"
              title="Resort life, covered"
              description="Meals, drinks, and activities bundled into one easy stay."
              className="mx-auto max-w-xl"
              ratio="aspect-[16/9]"
            />
          </div>
        </section>

        <SplitRow
          id="by-cruise"
          icon={Ship}
          eyebrow="A day on the island"
          title="Aruba by Cruise"
          body="Cruise ships dock right in Oranjestad, putting beaches, shopping and dining within a short walk or taxi ride of the pier."
          src="/ingested/arubaa/img-051.webp"
          alt="A bride and groom holding hands on an Aruba beach"
        />

        {/* Aruba Vacations */}
        <section id="vacations" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Palmtree className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Complete planning
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Aruba Vacations
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Complete vacation planning resources, from booking your stay to filling
              every day once you land.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
            <ImageCard
              src="/ingested/arubaa/img-054.webp"
              alt="A guest floats in a resort pool"
              title="Pool days"
              description="Resort pools built for doing absolutely nothing, on purpose."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="A pair chats poolside at a resort"
              title="Poolside evenings"
              description="Sunset drinks steps from your room."
            />
            <ImageCard
              src="/ingested/arubaa/img-055.webp"
              alt="Guests sunbathing together at a resort pool"
              title="Group getaways"
              description="Plenty of room for the whole crew to spread out."
            />
          </AutoSlider>
        </section>

        {/* Logistics bento: Timeshares / Getting to / Getting around / Guest services / Tips */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              The logistics, handled
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Everything you need to get here, get around and get help along the way.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {logisticsCells.map((c) => (
              <RevealItem key={c.id} className={cn("scroll-mt-24", c.span)}>
                <div
                  id={c.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Tips checklist */}
        <section className="container-px mx-auto max-w-4xl py-4 pb-16">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold">A few things worth knowing</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tips.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Your <span className="text-primary">One Happy Island</span> trip starts here
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Lock in your dates, then watch the countdown begin.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/book-now">
                    Book Now <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/live-webcams">See Live Webcams</Link>
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
