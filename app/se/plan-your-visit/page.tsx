import type { Metadata } from "next";
import Link from "next/link";
import {
  BedDouble,
  Home,
  Key,
  Ticket,
  Plane,
  Car,
  Ship,
  Palmtree,
  Info,
  LifeBuoy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Planera Ditt Besök På Aruba",
  description:
    "Allt du behöver för att planera din Aruba-semester: hotell, uthyrningar, resan hit och att ta dig runt.",
};

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
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="container-px mx-auto max-w-6xl py-16 sm:py-20">
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
              className="aspect-[5/4] w-full object-cover object-top"
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
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

const logisticsCells = [
  {
    id: "timeshares",
    icon: Key,
    title: "Delat Ägande",
    body: "Äg en bit av ön. Delägda fastigheter för gäster som fortsätter att komma tillbaka.",
    span: "md:col-span-2",
  },
  {
    id: "getting-to-aruba",
    icon: Plane,
    title: "Ta Dig Till Aruba",
    body: "Att ta dig till Aruba från nästan var som helst i världen är enkelt och stressfritt.",
  },
  {
    id: "getting-around",
    icon: Car,
    title: "Ta Dig Runt På Aruba",
    body: "Från vår livliga huvudstad till lugna kuststäder, orörda stränder till kuperad öken, det är lätt att ta sig vart som helst.",
  },
  {
    id: "guest-services",
    icon: LifeBuoy,
    title: "Gästservice",
    body: "Stöd och hjälp när du behöver det, innan du landar och under din vistelse.",
  },
  {
    id: "tips",
    icon: Info,
    title: "Tips För Besökare",
    body: "Lokal kunskap om tidpunkter, väder och att få ut mesta möjliga av varje dag.",
    span: "md:col-span-2",
  },
];

const tips = [
  "Soligt nästan varje dag om året: packa lätta lager, inte paraplyer.",
  "Passadvindarna tar fart på eftermiddagen, perfekt för vindsurfing.",
  "Nederländska, papiamento, spanska och engelska talas alla i stor utsträckning.",
  "Kranvattnet är säkert att dricka över hela ön.",
];

export default function PlanYourVisitPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/6923a03a-c228-4ba6-a03d-5530a8311041/mp4/FINAL-ANIMATION-VIDEO-HERO-HOME.mp4"
            poster="/ingested/arubaa/img-039.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                Planera i förväg
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Planera Ditt Besök På Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Att planera din semester till Aruba är enkelt, särskilt med en hel ö av
                vänliga ansikten som gärna delar tips. Smidiga transporter, säker tillgång
                till ön och bekväma hotell gör det enkelt att koppla av och utforska.
              </p>
            </Reveal>
          </div>
        </section>

        <SplitRow
          id="hotels-resorts"
          icon={BedDouble}
          eyebrow="Var du bor"
          title="Hotell & Resorts"
          body="Från boutiquegömställen till strandnära torn, Arubas hotell och resorts sträcker sig från intima till helservice, alla inom räckhåll för vattnet."
          src="/ingested/arubaa/img-057.webp"
          alt="Ett par pratar tillsammans vid poolen på ett hotell på Aruba"
        />

        <SplitRow
          id="vacation-rentals"
          icon={Home}
          eyebrow="Plats att sprida ut sig"
          title="Semesterboenden"
          body="För längre vistelser eller större sällskap ger semesterboenden dig en hembas med kök, mer utrymme och ett lugnare tempo."
          src="/ingested/arubaa/img-036.webp"
          alt="Ett par kopplar av tillsammans på kustklipporna nära sitt boende"
          reverse
        />

        {/* All-Inclusive */}
        <section id="all-inclusive" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Ticket className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Ett pris, allt inkluderat
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Allt Inkluderat
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Paketerade semesterpaket som täcker mat, dryck och aktiviteter, så det enda
              beslutet som kvarstår är vilken poolstol du ska ta.
            </p>
          </Reveal>
          <div className="mt-10">
            <ImageCard
              src="/ingested/arubaa/img-053.webp"
              alt="Gäster hoppar tillsammans i en hotellpool"
              title="Hotelliv, täckt"
              description="Mat, dryck och aktiviteter paketerade i en enkel vistelse."
              className="mx-auto max-w-xl"
              ratio="aspect-[16/9]"
            />
          </div>
        </section>

        <SplitRow
          id="by-cruise"
          icon={Ship}
          eyebrow="En dag på ön"
          title="Aruba Med Kryssning"
          body="Kryssningsfartyg lägger till direkt i Oranjestad, vilket ger stränder, shopping och matupplevelser inom kort promenad- eller taxiavstånd från kajen."
          src="/ingested/arubaa/img-051.webp"
          alt="En brud och brudgum håller händer på en strand på Aruba"
        />

        {/* Aruba Vacations */}
        <section id="vacations" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Palmtree className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Fullständig planering
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Semester På Aruba
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Kompletta planeringsresurser för semestern, från att boka din vistelse till
              att fylla varje dag när du har landat.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[55%] lg:w-[32%]">
            <ImageCard
              src="/ingested/arubaa/img-054.webp"
              alt="En gäst flyter i en hotellpool"
              title="Pooldagar"
              description="Hotellpooler byggda för att göra absolut ingenting, med flit."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Ett par pratar vid poolen på ett hotell"
              title="Poolkvällar"
              description="Solnedgångsdrinkar bara steg från rummet."
            />
            <ImageCard
              src="/ingested/arubaa/img-055.webp"
              alt="Gäster solar tillsammans vid en hotellpool"
              title="Gruppresor"
              description="Gott om utrymme för hela gänget att sprida ut sig."
            />
          </AutoSlider>
        </section>

        {/* Logistics bento: Timeshares / Getting to / Getting around / Guest services / Tips */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Logistiken, skött
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Allt du behöver för att ta dig hit, ta dig runt och få hjälp längs vägen.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {logisticsCells.map((c) => (
              <RevealItem key={c.id} className={cn("scroll-mt-24", c.span)}>
                <div
                  id={c.id}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Tips checklist */}
        <section className="container-px mx-auto max-w-4xl py-4 pb-16">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-semibold">Några saker värda att veta</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tips.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Din resa till <span className="text-primary">One Happy Island</span> börjar här
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Boka dina datum, och se sedan nedräkningen börja.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/se/book-now">
                    Boka Nu <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/se/live-webcams">Se Live-webbkameror</Link>
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
