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
  title: "Buchen Sie Ihren Aruba Urlaub",
  description: "Beginnen Sie mit der Planung und Buchung Ihrer Reise zur One Happy Island.",
};

const starters = [
  {
    title: "Hotels & Resorts",
    href: "/plan-your-visit#hotels-resorts",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Gäste entspannen am Pool eines Resorts in Aruba",
    description: "Von Strandresorts bis zu Boutique-Unterkünften: Finden Sie das Zimmer, das zu Ihrer Reise passt.",
  },
  {
    title: "Urlaubspakete",
    href: "/plan-your-visit#vacations",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Ein Paar in Hochzeitskleidung läuft durch das flache Wasser an einem Strand in Aruba",
    description: "Flüge, Unterkünfte und Erlebnisse gebündelt für eine einfachere Reise.",
  },
  {
    title: "Aktuelle Angebote",
    href: "/deals",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Ein Paar genießt einen Moment an einem Strand in Aruba",
    description: "Sehen Sie sich die heutigen Angebote an, bevor Sie Ihre Reisedaten festlegen.",
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
                  <CalendarCheck className="size-3.5" /> Bereit, wann immer Sie es sind
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Buchen Sie Ihren Urlaub <span className="text-gradient">nach Aruba</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  Wir können es kaum erwarten, Sie zu sehen. Wie auch immer Sie gerne
                  reisen, Aruba macht es Ihnen leicht, den Aufenthalt zu buchen, der zu
                  Ihnen passt.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                <Image
                  src="/ingested/arubaa/img-045.webp"
                  alt="Ein Paar am Strand in Aruba plant seinen Aufenthalt"
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
            <h2 className="text-4xl font-bold sm:text-5xl">Beginnen Sie mit</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {starters.map((s) => (
              <RevealItem key={s.title}>
                <ImageCard
                  src={s.src}
                  alt={s.alt}
                  eyebrow="Hier beginnen"
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
                    Möchten Sie lieber persönlich sprechen?
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Rufen Sie unser Team an oder schreiben Sie eine E-Mail, und wir
                    helfen Ihnen, die Reise zu planen, vom ersten Flug bis zum letzten
                    Sonnenuntergang.
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
                      <span className="block text-sm text-muted-foreground">Anrufen</span>
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
                      <span className="block text-sm text-muted-foreground">E-Mail schreiben</span>
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
              Noch nicht sicher, wo Sie anfangen sollen? Sehen Sie sich alles an, was
              es zu tun gibt, bevor Sie Ihre Reisedaten wählen.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/de/things-to-do">
                Zuerst Was Zu Tun Ist Entdecken <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
