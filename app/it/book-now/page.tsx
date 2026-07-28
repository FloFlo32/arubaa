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
  title: "Prenota la Tua Vacanza ad Aruba",
  description: "Inizia a pianificare e prenotare il tuo viaggio su One Happy Island.",
};

const starters = [
  {
    title: "Hotel E Resort",
    href: "/it/plan-your-visit#hotels-resorts",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Ospiti che si rilassano a bordo piscina in un resort ad Aruba",
    description: "Da resort sulla spiaggia a soggiorni boutique, trova la stanza che si adatta al tuo viaggio.",
  },
  {
    title: "Pacchetti Vacanza",
    href: "/it/plan-your-visit#vacations",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Una coppia in abiti da sposa corre tra le acque basse su una spiaggia di Aruba",
    description: "Voli, soggiorni ed esperienze in un unico pacchetto per un viaggio più semplice.",
  },
  {
    title: "Offerte Attuali",
    href: "/it/deals",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Una coppia condivide un momento su una spiaggia di Aruba",
    description: "Controlla le offerte di oggi prima di bloccare le tue date.",
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
                  <CalendarCheck className="size-3.5" /> Pronti quando lo sei tu
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Prenota la Tua Vacanza <span className="text-gradient">ad Aruba</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  Non vediamo l&apos;ora di vederti. Qualunque sia il tuo modo di viaggiare, Aruba
                  rende facile prenotare il soggiorno giusto per te.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                <Image
                  src="/ingested/arubaa/img-045.webp"
                  alt="Una coppia in spiaggia ad Aruba, che pianifica il proprio soggiorno"
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
            <h2 className="text-4xl font-bold sm:text-5xl">Inizia con</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {starters.map((s) => (
              <RevealItem key={s.title}>
                <ImageCard
                  src={s.src}
                  alt={s.alt}
                  eyebrow="Inizia qui"
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
                    Preferisci parlarne di persona?
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Chiama o scrivi al nostro team e ti aiuteremo a costruire il viaggio, dal
                    primo volo all&apos;ultimo tramonto.
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
                      <span className="block text-sm text-muted-foreground">Chiamaci</span>
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
                      <span className="block text-sm text-muted-foreground">Scrivici</span>
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
              Non sai ancora da dove iniziare? Scopri tutto quello che c&apos;è da fare prima di
              scegliere le date.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/it/things-to-do">
                Scopri Prima Cosa Fare <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
