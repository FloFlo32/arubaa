import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Ruler,
  Compass,
  Landmark,
  Fish,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map } from "@/components/sections/map";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Vår Ö",
  description:
    "31,5 kilometer öken, kust och kultur: lär känna Arubas geografi och historia.",
};

const facts = [
  {
    icon: Ruler,
    label: "31,5 x 9,7 km",
    body: "Bara 31,5 kilometer lång och 9,7 kilometer bred, vår vackra fläck av pudrig vit sand är ett paradis format av havet.",
  },
  {
    icon: MapPin,
    label: "Södra Karibien",
    body: "Aruba är en liten ö i södra Karibiska havet, cirka 24 kilometer norr om Venezuela.",
  },
  {
    icon: Compass,
    label: "Utanför orkanbältet",
    body: "Vi ligger precis utanför orkanbältet, en anledning till att våra soliga dagar är så pålitliga.",
  },
];

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
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div id={id} className={cn("py-10 sm:py-12", id && "scroll-mt-24")}>
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
              className="aspect-[5/4] w-full object-cover object-center"
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
          <h3 className="mt-2 text-balance text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </div>
  );
}

export default function OurIslandPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <GridPattern />
          <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-28 pb-16 sm:pt-32 sm:pb-24 md:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <Badge variant="accent">Vår lyckliga ö</Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Vår Ö
              </h1>
              <p className="mt-5 max-w-lg text-pretty text-lg font-medium text-foreground/80">
                Har du någonsin frågat dig själv: var ligger Aruba? I de varma vattnen i
                södra Karibien, precis utanför orkanbältet, det är där. Vår lyckliga ö.
              </p>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Bara 31,5 kilometer lång och 9,7 kilometer bred, vår vackra fläck av
                pudrig vit sand är ett paradis format av havet: en ö som omfamnar dig
                med soliga dagar och ännu soligare människor. I söder och väster är
                Aruba full av liv med resorts, shopping och nattliv. I norr formar vågor
                och vind kuperade kustlinjer och kalkstensklippor. Och i vårt hjärta
                skyddar Arikok nationalpark ett vidsträckt landskap av ökensand, höga
                kaktusar och naturunder.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/10">
                <Image
                  src="/ingested/arubaa/img-042.webp"
                  alt="En familj promenerar tillsammans hand i hand på en strand på Aruba"
                  width={900}
                  height={1050}
                  priority
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[6/7] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Island Facts */}
        <section id="island-facts" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Öfakta
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Grunderna, innan du landar
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {facts.map((f) => (
              <RevealItem key={f.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{f.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{f.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                <Fish className="size-4" />
              </span>
              <p className="text-pretty text-sm text-muted-foreground">
                När du planerar en karibisk semester kanske du undrar hur många exotiska
                djur du kommer att se. När den semestern är på Aruba är svaret: väldigt många.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Regions */}
        <section id="regions" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Regioner
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Från torr öken till nederländsk kolonialhuvudstad
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Från vår torra öken till vår nederländska kolonialhuvudstad, varje del av
              Aruba gör oss annorlunda än alla andra karibiska öar.
            </p>
          </Reveal>
          <div className="mt-4 divide-y divide-border">
            <SplitRow
              icon={MapPin}
              eyebrow="Söder & Väster"
              title="Resorts, shopping och nattliv"
              body="Syd- och västkusten är fulla av liv med resorts, boutiquer och strandbarer, alla vända mot öns lugnaste vatten."
              src="/ingested/arubaa/img-029.webp"
              alt="Flygbild av badgäster som vadar i Arubas turkosa vatten"
            />
            <SplitRow
              icon={Compass}
              eyebrow="Norra kusten"
              title="Kuperade, vindformade stränder"
              body="Vågor och vind formar norra kusten till kalkstensklippor, havsgrottor och naturliga klippvalv."
              src="/ingested/arubaa/img-027.webp"
              alt="Ett par utforskar en havsgrotta och ett naturligt klippvalv på Arubas norra kust"
              reverse
            />
            <SplitRow
              icon={Landmark}
              eyebrow="Inlandet"
              title="Ökensand och höga kaktusar"
              body="I öns hjärta skyddar Arikok nationalpark ett landskap av ökenleder, kaktusar och lugnt jordbruksland."
              src="/ingested/arubaa/img-033.webp"
              alt="En grupp vänner samlade på en strand på Aruba"
            />
          </div>
        </section>

        {/* History & Culture */}
        <section id="history-culture" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ingested/arubaa/img-042.webp"
                  alt="En familj promenerar tillsammans hand i hand längs den arubanska strandlinjen"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[5/4] w-full object-cover object-center"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <Landmark className="size-5" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Nedärvt
              </p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Historia & Kultur
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-muted-foreground">
                Du hittar spår av Arubas historia och kultur på grottväggar, pastellfärgade
                fasader och ansiktena hos vårt lyckliga folk.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 360 Map */}
        <section id="map" className="container-px mx-auto max-w-4xl pt-4 pb-4 text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              360-Karta
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Se hela ön på en gång
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              En interaktiv översikt över Aruba, från resorten i söder till den vilda
              norra kusten.
            </p>
          </Reveal>
        </section>
        <Map />

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Redo att se det med <span className="text-primary">egna ögon</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Varje region av Aruba är närmare än du tror.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/se/plan-your-visit">
                    Planera Ditt Besök <ArrowRight className="size-4" />
                  </Link>
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
