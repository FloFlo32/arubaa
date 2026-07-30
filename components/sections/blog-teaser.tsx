import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { posts } from "@/lib/blog-posts";

export function BlogTeaser() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Sunny Updates
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">From the sunny island</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Discover our latest stories, straight from the crew.
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.08}>
        {posts.map((p) => (
          <RevealItem key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="size-3.5" /> {p.date}
                </p>
                <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                  Read More <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
