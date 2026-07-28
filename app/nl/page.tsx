import Link from "next/link";
import { ArrowRight, ArrowUpRight, PlayCircle, Plane, Globe, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { HeroVideo } from "@/components/magic/hero-video";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Carousel } from "@/components/magic/carousel";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { cn } from "@/lib/utils";

const updates = [
  {
    eyebrow: "Culinair festival",
    title: "Autentico Aruba Culinary Festival",
    body: "Autentico is deze oktober terug voor nog een onvergetelijke viering van Aruba's culinaire scene.",
    href: "/nl/things-to-do#dining",
    img: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Slimmer plannen",
    title: "myAruba App",
    body: "Wil je Aruba verkennen? Probeer myAruba, de app die je helpt geweldige plekken op het eiland te ontdekken.",
    href: "/nl/plan-your-visit",
    img: "/ingested/arubaa/img-038.webp",
  },
  {
    eyebrow: "Duurzaamheid",
    title: "Kraanwatercampagne",
    body: "Aruba is bekend om zijn ongerepte stranden en turquoise water, en wij zetten ons in om dat zo te houden.",
    href: "/nl/our-island#island-facts",
    img: "/ingested/arubaa/img-030.webp",
  },
  {
    eyebrow: "Voor je vertrekt",
    title: "Reisvereisten",
    body: "Hier zijn een aantal details om te onthouden wanneer je naar en van Aruba reist, waaronder de nieuwe duurzaamheidsheffing van $20.",
    href: "/nl/plan-your-visit#tips",
    img: "/ingested/arubaa/img-044.webp",
  },
];

const happinessCells = [
  {
    title: "Aruba's Stranden & Baaien",
    description:
      "Meer dan 20 openbare stranden en baaien, variërend van rustige, gezinsvriendelijke baaien tot ruige, door de wind gekuste kusten.",
    href: "/nl/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Wat Te Doen Op Aruba",
    description: "Een breed scala aan ervaringen voor elk tempo.",
    href: "/nl/things-to-do",
    src: "/ingested/arubaa/img-034.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Bruiloften",
    description: "Trouwen op Aruba is de ideale manier om twee blije harten te verenigen.",
    href: "/nl/why-aruba#weddings",
    src: "/ingested/arubaa/img-050.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Welzijn Op Aruba",
    description:
      "Is het echt vakantie als je aan het einde ervan alweer een vakantie nodig hebt? Goed nieuws: op Aruba heb je dat niet.",
    href: "/nl/why-aruba#wellness",
    src: "/ingested/arubaa/img-031.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "San Nicolas Stad",
    description:
      "Rijk aan geschiedenis, cultuur en architectuur, een ware weerspiegeling van de inwoners van San Nicolas en hun dagelijks leven.",
    href: "/nl/things-to-do#arts-culture",
    src: "/ingested/arubaa/img-033.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

const nextStopFeatures = [
  {
    icon: Plane,
    title: "Eenvoudig",
    body: "Aruba heeft gemakkelijke en directe vluchten vanuit grote steden in de VS en Canada.",
  },
  {
    icon: Globe,
    title: "Praktisch",
    body: "Wij spreken vier talen en hebben meer zonnige dagen dan enig ander Caribisch eiland.",
  },
  {
    icon: Compass,
    title: "Ontdekbaar",
    body: "Wij zijn klein, veilig en modern, zodat je van ons hele eiland je speelplaats kunt maken.",
  },
];

const effects = [
  {
    eyebrow: "Effect 01",
    title: "Zon, Zand, Sereniteit",
    description:
      "Eindeloos wit zand en kristalblauw water. Lig in de zon, drijf in extase en tank de broodnodige Arubaanse warmte op voor je reis naar huis.",
    href: "/nl/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
  },
  {
    eyebrow: "Effect 02",
    title: "Proef Alles",
    description:
      "Met meer dan honderd nationaliteiten op het eiland is Aruba gevuld met smaken uit alle hoeken van de wereld. Wees niet verbaasd als je met een nieuw favoriet gerecht vertrekt.",
    href: "/nl/things-to-do#dining",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effect 03",
    title: "Eén Met De Natuur",
    description:
      "Op Aruba blijven we niet graag binnen. Er is geen verkeerde manier om hier één te zijn met de natuur, maar we hebben een paar suggesties om je op weg te helpen.",
    href: "/nl/things-to-do#natural-wonders",
    src: "/ingested/arubaa/img-031.webp",
  },
  {
    eyebrow: "Effect 04",
    title: "Één Blije Familie",
    description:
      "Het Aruba-effect maakt niet uit of je 5 of 50 bent, het wordt gevoeld door iedereen die zich openstelt voor de magie van Aruba. Perfect voor ouders en kinderen.",
    href: "/nl/why-aruba#families",
    src: "/ingested/arubaa/img-037.webp",
  },
  {
    eyebrow: "Effect 05",
    title: "Vertraag",
    description:
      "Soms heb je alleen rust en stilte nodig om weer contact te maken met de mensen die het belangrijkst zijn. Aruba biedt de sereniteit die je nodig hebt om het rustiger aan te doen.",
    href: "/nl/why-aruba#wellness",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effect 06",
    title: "Meteen Een Local",
    description:
      "Het duurt maar een paar minuten op Aruba voordat je jezelf een local voelt. Schuif aan bij een rumwinkeltje of zoek de beste lokale zwemplek op: hoe dan ook voel je je thuis.",
    href: "/nl/why-aruba#culture",
    src: "/ingested/arubaa/img-033.webp",
  },
];

const slides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Luchtfoto van strandgangers in het turquoise water van Aruba", caption: "Zon, zand, sereniteit" },
  { src: "/ingested/arubaa/img-041.webp", alt: "Een ouder draagt een kind aan het strand van Aruba", caption: "Blije Kids, Blije Vakantie" },
  { src: "/ingested/arubaa/img-019.webp", alt: "Een vrouw relaxt in een badjas in een spa op Aruba", caption: "In De Schoot Van Luxe" },
  { src: "/ingested/arubaa/img-040.webp", alt: "Een reiziger glimlacht op een strand van Aruba", caption: "Solo Op Reis" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Vrienden verzamelen zich op het strand van Aruba", caption: "Proef Alles" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden">
          <HeroVideo
            src="https://aruba.bynder.com/asset/bf675846-d8a4-4914-ad0a-75c106743d6b/mp4/01_ArubaHomepage_BGvideo_16x9_main.mp4"
            poster="/ingested/arubaa/img-040.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/70" />

          <div className="container-px relative z-10 mx-auto max-w-3xl py-24 text-center text-white">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
                One Happy Island
              </Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl">
                Houd van Aruba. Voel het terug.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                Als je met nieuwsgierigheid en een open blik aankomt, reageert Aruba op
                dezelfde manier. Ontdek de verbindingen, cultuur en rustige momenten die
                bezoekers in familie veranderen.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/nl/why-aruba">
                    Ontdek het Aruba-effect <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <a
                    href="https://www.youtube.com/watch?v=GJYpiOU2mM0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PlayCircle className="size-4" /> Bekijk de video
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
                <span className="font-display text-lg font-bold">300+</span>
                <span className="text-sm text-white/80">zonnige dagen per jaar, meer dan enig ander Caribisch eiland</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Updates */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Blijf op de hoogte
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Onze nieuwste blije updates</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Hoe wij jouw reis naar Aruba veilig, gemakkelijk, flexibel en onvergetelijk maken.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
            {updates.map((u) => (
              <RevealItem key={u.title}>
                <Link
                  href={u.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={u.img}
                      alt={u.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      {u.eyebrow}
                    </span>
                    <h3 className="flex items-start justify-between gap-2 font-display text-base font-semibold leading-snug">
                      {u.title}
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{u.body}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        {/* Happiness */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Het Aruba-effect
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Talloze manieren om geluk te vinden
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {happinessCells.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className={cn(c.span)}>
                <ImageCard
                  src={c.src}
                  alt={c.title}
                  title={c.title}
                  description={c.description}
                  href={c.href}
                  ratio={c.ratio}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Next Stop */}
        <section className="bg-primary py-20 text-primary-foreground sm:py-24">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                Waarom wij anders zijn
              </span>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Volgende stop: One happy island.
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Er zijn veel redenen waarom zoveel gasten jaar na jaar terugkomen naar
                Aruba. Hier zijn slechts een paar dingen die van ons One happy island een
                bestemming maken die anders is dan alle andere.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.08}>
              {nextStopFeatures.map((f) => (
                <RevealItem key={f.title}>
                  <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary-foreground/15">
                      <f.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display text-xl font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-primary-foreground/85">{f.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>

        {/* Effects */}
        <section id="the-aruba-effect" className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Wat te doen op Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Natuurlijk, onze stranden horen bij de beste in de wereld.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Maar kijk verder dan de eindeloze zon, het zand en het water, en je vindt een
              eiland vol ervaringen: schitterende wandelingen, prachtige baaien en
              onvergetelijke gerechten. Ontdek hieronder de Aruba-effecten, geschreven door
              lokale experts.
            </p>
          </Reveal>

          <div className="mt-10">
            <AutoSlider itemClassName="w-[85%] sm:w-[55%] lg:w-[32%]">
              {effects.map((e) => (
                <ImageCard
                  key={e.title}
                  src={e.src}
                  alt={e.title}
                  eyebrow={e.eyebrow}
                  title={e.title}
                  description={e.description}
                  href={e.href}
                  className="h-full"
                />
              ))}
            </AutoSlider>
          </div>
        </section>

        {/* Itineraries */}
        <section id="itineraries" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground">
                Reisroutes
              </Badge>
              <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
                Jouw Aruba-ontsnapping, gepland door locals
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
                Ontdek reisroutes geschreven door lokale experts: van Zon, Zand, Sereniteit
                tot Blije Kids, Blije Vakantie, In De Schoot Van Luxe, en Solo Op Reis. Elke
                route brengt een volledige dag van het Aruba-effect in kaart.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="relative mx-auto max-w-4xl rounded-[2rem] bg-background p-2 shadow-2xl shadow-black/20">
                <BorderBeam />
                <Carousel slides={slides} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="container-px mx-auto max-w-6xl py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
              <GridPattern />
              <BorderBeam />
              <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold sm:text-5xl">
                We kunnen niet wachten om je te zien.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Hoe je ook het liefst reist, Aruba maakt het gemakkelijk om het verblijf te
                boeken dat bij jou past.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/nl/book-now">
                    Nu Boeken <ArrowRight className="size-4" />
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
