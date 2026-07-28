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
  title: "Boka Din Aruba-Semester",
  description: "Börja planera och boka din resa till One Happy Island.",
};

const starters = [
  {
    title: "Hotell & Resorts",
    href: "/se/plan-your-visit#hotels-resorts",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Gäster kopplar av vid en hotellpool på Aruba",
    description: "Från strandnära resorts till boutiquevistelser, hitta rummet som passar din resa.",
  },
  {
    title: "Semesterpaket",
    href: "/se/plan-your-visit#vacations",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Ett par i bröllopsklädsel springer genom det grunda vattnet på en strand på Aruba",
    description: "Flyg, vistelser och upplevelser paketerade tillsammans för en enklare resa.",
  },
  {
    title: "Aktuella Erbjudanden",
    href: "/se/deals",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Ett par delar en stund på en strand på Aruba",
    description: "Kolla dagens erbjudanden innan du bokar dina datum.",
  },
];

export default function BookNowPage() {
  const phoneDisplay = "1-800-862-7822";

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
                  <CalendarCheck className="size-3.5" /> Redo när du är det
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Boka Din Semester <span className="text-gradient">till Aruba</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  Vi kan inte vänta på att få se dig. Oavsett hur du gillar att resa gör
                  Aruba det enkelt att boka den vistelse som passar dig.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                <Image
                  src="/ingested/arubaa/img-045.webp"
                  alt="Ett par på stranden på Aruba, planerar sin vistelse"
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
            <h2 className="text-4xl font-bold sm:text-5xl">Börja med</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {starters.map((s) => (
              <RevealItem key={s.title}>
                <ImageCard
                  src={s.src}
                  alt={s.alt}
                  eyebrow="Börja här"
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
                    Föredrar du att prata igenom det?
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Ring eller mejla vårt team och vi hjälper dig bygga resan, från det
                    första flyget till den sista solnedgången.
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
                      <span className="block text-sm text-muted-foreground">Ring oss</span>
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
                      <span className="block text-sm text-muted-foreground">Mejla oss</span>
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
              Osäker på var du ska börja? Se allt det finns att göra innan du väljer dina datum.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/se/things-to-do">
                Utforska Saker Att Göra Först <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
