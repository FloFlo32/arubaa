import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

const updates = [
  {
    eyebrow: "Culinary festival",
    title: "Autentico Aruba Culinary Festival",
    body: "Autentico returns this October for another unforgettable celebration of Aruba's culinary scene.",
    href: "/things-to-do#dining",
    img: "/ingested/arubaa/img-024.webp",
  },
  {
    eyebrow: "Plan smarter",
    title: "myAruba App",
    body: "Do you want to explore Aruba? Try myAruba, the app that helps you select amazing spots on the island.",
    href: "/plan-your-visit",
    img: "/ingested/arubaa/img-038.webp",
  },
  {
    eyebrow: "Sustainability",
    title: "Tap Water Campaign",
    body: "Aruba is known for its pristine beaches and turquoise waters, and we're working to keep them that way.",
    href: "/our-island#island-facts",
    img: "/ingested/arubaa/img-030.webp",
  },
  {
    eyebrow: "Before you go",
    title: "Travel Requirements",
    body: "Here are some details to remember when traveling to and from Aruba, including the new $20 sustainability fee.",
    href: "/plan-your-visit#tips",
    img: "/ingested/arubaa/img-044.webp",
  },
];

export function Updates() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Stay in the know
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Our newest happy updates</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          How we&apos;re making your Aruba travel safe, convenient, flexible and unforgettable.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
        {updates.map((u) => (
          <RevealItem key={u.title}>
            <Link
              href={u.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={u.img}
                  alt={u.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {u.eyebrow}
                </span>
                <h3 className="flex items-start justify-between gap-2 font-display text-base font-semibold leading-snug">
                  {u.title}
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-sm text-muted-foreground">{u.body}</p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
