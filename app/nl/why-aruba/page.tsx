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
  title: "Waarom Aruba",
  description:
    "Ontdek het Aruba-effect: avontuur, romantiek, cultuur, welzijn, eten, familieplezier en bruiloften op One Happy Island.",
};

const effectStats = [
  { icon: Plane, label: "Eenvoudig", body: "Meer dan 100 directe vluchten vanuit grote steden in de VS en Canada." },
  { icon: Globe, label: "Praktisch", body: "Vier gesproken talen, en meer zonnige dagen dan enig ander Caribisch eiland." },
  { icon: MapPin, label: "Ontdekbaar", body: "Klein, veilig en modern, zodat je het hele eiland tot je speelplaats kunt maken." },
];

const effects = [
  {
    icon: Compass,
    title: "Avontuur",
    href: "/nl/why-aruba/adventure",
    teaser: "Grotbogen, offroadpaden en windsurfkusten voor de nieuwsgierige reiziger.",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Twee mensen kajakken samen voor de kust van Aruba",
  },
  {
    icon: Heart,
    title: "Romantiek",
    href: "/nl/why-aruba/romance",
    teaser: "Zonsondergangwandelingen, privédiners en rustige baaien voor twee.",
    src: "/ingested/arubaa/img-078.webp",
    alt: "Een koppel staat samen bij een palmboom op een strand van Aruba",
  },
  {
    icon: Users,
    title: "Cultuur",
    href: "/nl/why-aruba/culture",
    teaser: "Honderd nationaliteiten, één eiland, eindeloze verhalen om te horen.",
    src: "/ingested/arubaa/img-060.webp",
    alt: "Een groep vrienden verzameld op een strand van Aruba",
  },
  {
    icon: Flower2,
    title: "Welzijn",
    href: "/nl/why-aruba/wellness",
    teaser: "Rust aan de kliffen en trage, stille luxe op jouw eigen tempo.",
    src: "/ingested/arubaa/img-031.webp",
    alt: "Een vrouw staat alleen op zanderig terrein met uitzicht op de zee in Aruba",
  },
  {
    icon: Utensils,
    title: "Eten & Drinken",
    href: "/nl/why-aruba/eat-and-drink",
    teaser: "Honderd smaken op één eiland, van rumwinkeltjes tot fine dining.",
    src: "/ingested/arubaa/img-067.webp",
    alt: "Vrienden houden samen wijnglazen vast in de buitenlucht",
  },
  {
    icon: Baby,
    title: "Families",
    href: "/nl/why-aruba/families",
    teaser: "Rustig, ondiep water en gemakkelijke dagen voor elke leeftijd.",
    src: "/ingested/arubaa/img-071.webp",
    alt: "Twee jongens rennen samen op een strand van Aruba",
  },
  {
    icon: Gem,
    title: "Bruiloften",
    href: "/nl/why-aruba/weddings",
    teaser: "Kale voeten in het zand en gouden gelofte-momenten bij de zee.",
    src: "/ingested/arubaa/img-046.webp",
    alt: "Een koppel viert hun bruiloft op een strand in Aruba",
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
                Waarom Aruba
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">
                Aruba&apos;s charme komt uit meer dan alleen zonneschijn. Het zijn de
                vriendelijke mensen, de overvloed aan zonnige dagen (meer dan enig ander
                Caribisch eiland), en het Aruba-effect: een overweldigend gevoel van
                warmte en geluk dat je overal op het eiland zult voelen.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Aruba Effect */}
        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Het Aruba-effect
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Blije mensen: van locals tot terugkerende bezoekers. Wat maakt Aruba zo bijzonder?
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
              Zeven redenen, één eiland
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Ontdek het Aruba-effect
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Elke bezoeker vindt zijn eigen reden om verliefd te worden op Aruba. Kies
              hieronder de jouwe voor echte activiteiten, echte mensen en een complete
              reisroute om mee te beginnen.
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
                Voel het <span className="text-primary">Aruba-effect</span> zelf
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Één blij eiland, zeven redenen om te komen. Begin deze pagina om te
                zetten in een reis.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/nl/plan-your-visit">
                    Begin Met Het Plannen Van Je Reis <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/nl/deals">Bekijk De Aanbiedingen Van Vandaag</Link>
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
