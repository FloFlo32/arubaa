import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Sailboat,
  Mountain,
  Utensils,
  Music,
  Landmark,
  Binoculars,
  ShoppingBag,
  Flower2,
  Dumbbell,
  CalendarDays,
  MapIcon,
  ArrowRight,
  Sun,
  Sunrise,
  Users2,
  Footprints,
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
  title: "Saker Att Göra På Aruba",
  description:
    "Från stränder och vattensport till nattliv, matupplevelser, kultur och golf: allt att göra på One Happy Island.",
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
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-lg text-pretty text-muted-foreground">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}

const bentoCells = [
  {
    id: "nightlife",
    icon: Music,
    title: "Nattliv",
    body: "Från strandlounger till nattlig dans, Arubas kvällar är lika livliga som dess dagar.",
    span: "md:col-span-2",
  },
  {
    id: "sightseeing-tours",
    icon: Binoculars,
    title: "Sightseeing & Turer",
    body: "Guidade upplevelser och historiska landmärken, sedda som lokalbor känner dem bäst.",
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    title: "Shopping",
    body: "Boutiquer, lokala marknader och taxfree-fynd över hela ön.",
  },
  {
    id: "wellbeing",
    icon: Flower2,
    title: "Välmående",
    body: "Wellnessfokuserade aktiviteter, från spa-retreater till stretchövningar vid soluppgången vid havet.",
  },
  {
    id: "sports-golf",
    icon: Dumbbell,
    title: "Sport & Golf",
    body: "Mästerskapsbanor och aktiva sysslor för alla typer av resenärer.",
    span: "md:col-span-2",
  },
];

const itineraries = [
  { icon: Sun, title: "Sol, Sand, Stillhet" },
  { icon: Utensils, title: "Njut Av Allt" },
  { icon: Mountain, title: "Ett Med Naturen" },
  { icon: Users2, title: "En Lycklig Familj" },
  { icon: Sunrise, title: "Sänk Tempot" },
  { icon: Footprints, title: "Lokal På En Gång" },
];

export default function ThingsToDoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/1c987a2c-afe4-4348-b459-383e6ac9916e/mp4/CORTO-PT-HERO-ANIMATION.mp4"
            poster="/ingested/arubaa/img-029.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Saker Att Göra På Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba erbjuder ett brett utbud av upplevelser för alla tempon. Från lugna
                stränder och naturlandskap till kulturella platser och lokala upplevelser,
                ön bjuder in dig att utforska med eftertanke och njuta av meningsfulla
                stunder. Visst, Arubas stränder är några av de bästa i världen. Men titta
                bortom den ändlösa solen, sanden och vattnet, och du hittar en ö full av
                upplevelser: vandringar med vacker utsikt, hänförande vikar och oförglömlig mat.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Beaches & Coves */}
        <section id="beaches-coves" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Waves className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              20+ stränder
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Stränder & Vikar
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba har mer än 20 offentliga stränder och vikar. De sträcker sig från lugna,
              familjevänliga bukter till vilda, vindpinade stränder.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <ImageCard
              src="/ingested/arubaa/img-038.webp"
              alt="Besökare promenerar längs stranden i dagsljus"
              title="Lugna, familjevänliga bukter"
              description="Grunt, skyddat vatten på öns läsida."
            />
            <ImageCard
              src="/ingested/arubaa/img-030.webp"
              alt="Besökare njuter av havet i dagsljus"
              title="Vindpinade stränder"
              description="Vidöppna vikar där passadvindarna håller det svalt."
            />
          </div>
        </section>

        <SplitRow
          id="on-the-water"
          icon={Sailboat}
          eyebrow="Vind och vatten"
          title="På Vattnet"
          body="Från lugna, skyddade bukter till några av världens bästa vindsurfingplatser, Arubas kust gör alla typer av vattensport tillgängliga."
          src="/ingested/arubaa/img-047.webp"
          alt="Ett par i bröllopsklädsel springer genom det grunda vattnet på en strand på Aruba"
        />

        <SplitRow
          id="natural-wonders"
          icon={Mountain}
          eyebrow="Arikok och bortom"
          title="Naturunder"
          body="Utforska Arikok nationalparks ökenlandskap, kyl sedan av dig med snorkling i vikar huggna ur öns kalkstenskust."
          src="/ingested/arubaa/img-031.webp"
          alt="En kvinna står ensam på sandig mark med utsikt över havet"
          reverse
        />

        <SplitRow
          id="dining"
          icon={Utensils}
          eyebrow="Varje smak"
          title="Matupplevelser"
          body="Arubas restaurangscen spänner över europeiska klassiker, sydasiatiska kryddor och det färskaste lokala fisket, ofta serverat bara stegen från vattnet."
          src="/ingested/arubaa/img-036.webp"
          alt="Ett par kopplar av tillsammans på kustklipporna på Aruba"
        />

        <SplitRow
          id="arts-culture"
          icon={Landmark}
          eyebrow="San Nicolas"
          title="Konst & Kultur"
          body="San Nicolas är rikt på historia, kultur och arkitektur, en sann spegling av invånarna i San Nicolas och deras vardag."
          src="/ingested/arubaa/img-034.webp"
          alt="Flera personer promenerar längs kusten nära San Nicolas"
          reverse
        />

        {/* Bento: Nightlife / Sightseeing / Shopping / Wellbeing / Sports & Golf */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Fler sätt att spendera dagen
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Resten av ön, i fem riktningar.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
            {bentoCells.map((c) => (
              <RevealItem
                key={c.id}
                className={cn(
                  "scroll-mt-24",
                  c.span
                )}
              >
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

        {/* Calendar of Events */}
        <section id="calendar" className="container-px mx-auto max-w-4xl py-16 text-center sm:py-20">
          <Reveal>
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <CalendarDays className="size-6" />
            </span>
            <h2 className="mt-5 text-balance text-3xl font-bold sm:text-4xl">
              Evenemangskalender
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Gemenskapsträffar och festivaler fyller Arubas kalender året runt, från
              karnevalssäsong till strandnära mat- och musikfiranden.
            </p>
          </Reveal>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <MapIcon className="size-5" />
            </span>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Skrivna av lokala experter
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Resrutter
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Färdigplanerade residéer, kartlagda så att du kan spendera mindre tid på att
              bestämma dig och mer tid på att njuta av ön.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[75%] sm:w-[40%] lg:w-[23%]">
            {itineraries.map((it) => (
              <div
                key={it.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <it.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  En genomtänkt resrutt över ön, skapad av de som känner den bäst.
                </p>
              </div>
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Redo att fylla din <span className="text-primary">egen resrutt</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Stränder, vikar, middagsbokningar och allt däremellan: boka din flykt till
                One Happy Island.
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/se/book-now">
                    Boka Din Aruba-Flykt <ArrowRight className="size-4" />
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
