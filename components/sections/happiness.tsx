import { cn } from "@/lib/utils";
import { Reveal } from "@/components/magic/reveal";
import { ImageCard } from "@/components/magic/image-card";

const cells = [
  {
    title: "Aruba's Beaches & Coves",
    description:
      "More than 20 public beaches and coves, ranging from calm, family-friendly bays to wild, wind-kissed shores.",
    href: "/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Things to Do in Aruba",
    description: "A wide range of experiences for every pace.",
    href: "/things-to-do",
    src: "/ingested/arubaa/img-034.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Weddings",
    description: "Getting married in Aruba is the ideal way to unite two happy hearts.",
    href: "/why-aruba/weddings",
    src: "/ingested/arubaa/img-050.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Wellness in Aruba",
    description:
      "Is it really a vacation if you feel like you need another one by the end of it? Good news: Aruba isn't that kind of trip.",
    href: "/why-aruba/wellness",
    src: "/ingested/arubaa/img-031.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "San Nicolas City",
    description:
      "Rich in history, culture and architecture, a true reflection of the inhabitants of San Nicolas and their daily lives.",
    href: "/things-to-do#arts-culture",
    src: "/ingested/arubaa/img-033.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
];

export function Happiness() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          The Aruba Effect
        </span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
          Countless ways to find happiness
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {cells.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06} className={cn(c.span)}>
            <ImageCard
              src={c.src}
              alt={c.title}
              title={c.title}
              description={c.description}
              href={c.href}
              ratio={c.ratio}
              className="h-full"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
