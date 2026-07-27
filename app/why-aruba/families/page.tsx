import type { Metadata } from "next";
import Link from "next/link";
import { Baby, ArrowRight, Waves, Sun, Users2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Family Vacations in Aruba",
  description:
    "Calm, shallow water and easy days for every age: why Aruba works for family vacations.",
};

const highlights = [
  {
    icon: Waves,
    title: "Calm, shallow water",
    src: "/ingested/arubaa/img-070.webp",
    alt: "An adult carrying a child on an Aruba beach",
    description:
      "The island's leeward beaches are famously calm and shallow, which means more time swimming and less time watching the waves nervously.",
  },
  {
    icon: Sun,
    title: "Easy days, low stress",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Two boys running together on an Aruba beach",
    description:
      "Short flights, flat terrain and a small footprint mean less time in transit and more time letting the kids run themselves tired.",
  },
  {
    icon: Baby,
    title: "Built for the smallest guests",
    src: "/ingested/arubaa/img-072.webp",
    alt: "An adult holding a baby on an Aruba beach",
    description:
      "Warm, gentle water and soft sand make Aruba's beaches genuinely easy with a baby or toddler in tow, not just marketed that way.",
  },
  {
    icon: Users2,
    title: "For every generation",
    src: "/ingested/arubaa/img-074.webp",
    alt: "A family holding hands together on an Aruba beach at sunset",
    description:
      "Grandparents, parents and kids all find their own pace here: someone's always up for the water, and someone's always happy in a chair nearby.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="For every age"
          title="Families"
          body="Aruba has activities for guests of all ages, making it an ideal destination for a family vacation. The Aruba Effect doesn't care if you're 5 or 50."
          src="/ingested/arubaa/img-069.webp"
          alt="An adult and child holding hands on an Aruba seashore"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              One happy family
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Something for every member of the trip
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              The Aruba Effect is felt by anyone who opens themselves to it, and that
              includes the youngest travelers. If you&apos;re looking for something
              parents and kids can love equally, this is it.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2" stagger={0.06}>
            {highlights.map((h) => (
              <RevealItem key={h.title}>
                <ImageCard
                  src={h.src}
                  alt={h.alt}
                  eyebrow={h.title}
                  title={h.title}
                  description={h.description}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              A day that works for everyone
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-037.webp"
              alt="A family poses together for a photo on the sand"
              title="Beach days, together"
              description="Sand, shallows and shade for every member of the family."
            />
            <ImageCard
              src="/ingested/arubaa/img-042.webp"
              alt="A family walks together holding hands along the shoreline"
              title="Slow strolls"
              description="Easy, flat coastline that's kind to little legs."
            />
            <ImageCard
              src="/ingested/arubaa/img-035.webp"
              alt="A caregiver carries a young child along the beach"
              title="Built for little ones"
              description="Calm bays and warm, shallow water made for small swimmers."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Planning a family trip?</h2>
            <p className="max-w-md text-muted-foreground">
              See kid-friendly hotels, all-inclusive stays and easy-access beaches.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/plan-your-visit#hotels-resorts">
                  See Hotels & Resorts <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/why-aruba">Back to Why Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
