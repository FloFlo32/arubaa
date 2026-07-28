import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Heart, Users, Flower2, Utensils, Baby, Gem, Plane, Globe, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { ImageCard } from "@/components/magic/image-card";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Varför Aruba",
  description:
    "Upptäck Aruba-effekten: äventyr, romantik, kultur, välbefinnande, mat, familjeroligheter och bröllop på One Happy Island.",
};

const effectStats = [
  { icon: Plane, label: "Enkelt", body: "Över 100 direktflyg från stora städer i USA och Kanada." },
  { icon: Globe, label: "Bekvämt", body: "Fyra talade språk och fler soldagar än någon annan karibisk ö." },
  { icon: MapPin, label: "Lätt att upptäcka", body: "Litet, tryggt och modernt, så du kan göra hela ön till din lekplats." },
];

const effects = [
  {
    icon: Compass,
    title: "Äventyr",
    href: "/se/why-aruba/adventure",
    teaser: "Grottvalv, terrängleder och vindsurfingvänliga kuster för den nyfikne.",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Två personer paddlar kajak tillsammans utanför Arubas kust",
  },
  {
    icon: Heart,
    title: "Romantik",
    href: "/se/why-aruba/romance",
    teaser: "Solnedgångspromenader, privata middagar och tysta vikar gjorda för två.",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Ett par står tillsammans vid en palm på en strand på Aruba",
  },
  {
    icon: Users,
    title: "Kultur",
    href: "/se/why-aruba/culture",
    teaser: "Hundra nationaliteter, en ö, oändliga historier att lyssna på.",
    src: "/ingested/arubaa/img-060.webp",
    alt: "En grupp vänner samlade på en strand på Aruba",
  },
  {
    icon: Flower2,
    title: "Välbefinnande",
    href: "/se/why-aruba/wellness",
    teaser: "Stillhet på klippkanten och långsam, tyst lyx i din egen takt.",
    src: "/ingested/arubaa/img-031.webp",
    alt: "En kvinna står ensam på sandig mark med utsikt över havet på Aruba",
  },
  {
    icon: Utensils,
    title: "Mat & Dryck",
    href: "/se/why-aruba/eat-and-drink",
    teaser: "Hundra smaker på en ö, från rombarer till fine dining.",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Vänner håller vinglas tillsammans utomhus",
  },
  {
    icon: Baby,
    title: "Familjer",
    href: "/se/why-aruba/families",
    teaser: "Lugnt, grunt vatten och lättsamma dagar för alla åldrar.",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Två pojkar springer tillsammans på en strand på Aruba",
  },
  {
    icon: Gem,
    title: "Bröllop",
    href: "/se/why-aruba/weddings",
    teaser: "Barfotaceremonier och löften i det gyllene timmens ljus vid havet.",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Ett par firar sitt bröllop på en strand på Aruba",
  },
];

export default function WhyArubaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24 sm:pt-28">
          <HeroVideo
            src="https://aruba.bynder.com/asset/5a23170b-58df-46b2-b401-1d0a35a9a7b5/mp4/00_Homepage_BGvideo_16x9.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/70" />
          <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
                Varför Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Arubas charm kommer från mer än solsken. Det är de vänliga människorna, det
                stora antalet soldagar (fler än på någon annan karibisk ö), och Aruba-effekten:
                en överväldigande känsla av värme och lycka som du känner över hela ön.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Aruba Effect */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Aruba-effekten
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Lyckliga människor: från lokalbor till återkommande besökare. Vad gör Aruba speciellt?
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-3">
            {effectStats.map((s) => (
              <RevealItem key={s.label} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <s.icon className="size-5" />
                </span>
                <p className="mt-4 text-lg font-semibold">{s.label}</p>
                <p className="mt-1 text-pretty text-sm text-muted-foreground">{s.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Seven reasons */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Sju anledningar, en ö
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Utforska Aruba-effekten
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Varje besökare hittar sin egen anledning att förälska sig i Aruba. Välj din nedan
              för verkliga aktiviteter, verkliga människor och en färdig start på din resrutt.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[85%] sm:w-[55%] lg:w-[31%]">
            {effects.map((e) => (
              <ImageCard
                key={e.title}
                src={e.src}
                alt={e.alt}
                eyebrow={e.title}
                title={e.title}
                description={e.teaser}
                href={e.href}
                className="h-full"
              />
            ))}
          </AutoSlider>
        </section>

        {/* CTA */}
        <section className="container-px mx-auto max-w-6xl py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <GridPattern />
              <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
                Känn <span className="text-primary">Aruba-effekten</span> själv
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                En lycklig ö, sju anledningar att besöka. Börja förvandla den här sidan till en resa.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/se/plan-your-visit">
                    Börja Planera Din Resa <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/se/deals">Se Dagens Erbjudanden</Link>
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
