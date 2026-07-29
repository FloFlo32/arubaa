import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PhotoHero } from "@/components/magic/photo-hero";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { posts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, stories and guides from the Flagship Aruba crew.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="From the crew"
          title="The Flagship Aruba blog"
          body="Guides, tips and stories from the people who actually run the boat."
          src="/ingested/flagshiparubaa/schooner-sunset-guests.webp"
          alt="Guests aboard the Flagship Aruba schooner at sunset"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <RevealGroup className="grid gap-8 md:grid-cols-3" stagger={0.08}>
            {posts.map((p) => (
              <RevealItem key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block cursor-pointer">
                  <div className="overflow-hidden rounded-2xl border border-border bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" />
                    {new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                  <h2 className="mt-2 text-balance text-lg font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary">
                    Read more <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </main>
      <Footer />
    </>
  );
}
