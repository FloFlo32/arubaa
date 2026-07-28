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
  title: "Boek Je Aruba-vakantie",
  description: "Begin met het plannen en boeken van je reis naar One Happy Island.",
};

const starters = [
  {
    title: "Hotels & Resorts",
    href: "/nl/plan-your-visit#hotels-resorts",
    src: "/ingested/arubaa/img-053.webp",
    alt: "Gasten relaxen bij een resortzwembad in Aruba",
    description: "Van resorts aan het strand tot boetiekverblijven, vind de kamer die bij je reis past.",
  },
  {
    title: "Vakantiepakketten",
    href: "/nl/plan-your-visit#vacations",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Een koppel in trouwkleding rent door het ondiepe water op een strand van Aruba",
    description: "Vluchten, verblijf en ervaringen gebundeld voor een makkelijkere reis.",
  },
  {
    title: "Huidige Aanbiedingen",
    href: "/nl/deals",
    src: "/ingested/arubaa/img-047.webp",
    alt: "Een koppel deelt een moment op een strand van Aruba",
    description: "Bekijk de aanbiedingen van vandaag voordat je je data vastlegt.",
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
                  <CalendarCheck className="size-3.5" /> Klaar wanneer jij het bent
                </Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-6 max-w-xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                  Boek Je Vakantie <span className="text-gradient">Naar Aruba</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  We kunnen niet wachten om je te zien. Hoe je ook het liefst reist, Aruba
                  maakt het gemakkelijk om het verblijf te boeken dat bij jou past.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 sm:aspect-[5/6]">
                <Image
                  src="/ingested/arubaa/img-045.webp"
                  alt="Een koppel op het strand van Aruba, terwijl ze hun verblijf plannen"
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
            <h2 className="text-4xl font-bold sm:text-5xl">Begin met</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {starters.map((s) => (
              <RevealItem key={s.title}>
                <ImageCard
                  src={s.src}
                  alt={s.alt}
                  eyebrow="Begin hier"
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
                    Liever er samen doorheen praten?
                  </h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Bel of mail ons team en wij helpen je de reis samenstellen, van de
                    eerste vlucht tot de laatste zonsondergang.
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
                      <span className="block text-sm text-muted-foreground">Bel ons</span>
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
                      <span className="block text-sm text-muted-foreground">Mail ons</span>
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
              Nog niet zeker waar je moet beginnen? Bekijk alles wat er te doen is
              voordat je je data kiest.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/nl/things-to-do">
                Ontdek Eerst Wat Te Doen <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
