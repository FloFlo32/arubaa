import Link from "next/link";
import { ArrowRight, PlayCircle, ArrowUpRight, Plane, Globe, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { HeroVideo } from "@/components/magic/hero-video";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Carousel } from "@/components/magic/carousel";
import { BorderBeam } from "@/components/magic/border-beam";
import { GridPattern } from "@/components/magic/grid-pattern";
import { cn } from "@/lib/utils";

const updates = [
  {
    eyebrow: "Kulinarikfestival",
    title: "Autentico Aruba Culinary Festival",
    body: "Autentico kehrt diesen Oktober zurück für eine weitere unvergessliche Feier der kulinarischen Szene Arubas.",
    href: "/de/things-to-do#dining",
    img: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Klüger planen",
    title: "myAruba App",
    body: "Möchtest du Aruba erkunden? Probiere myAruba, die App, die dir hilft, tolle Orte auf der Insel zu finden.",
    href: "/de/plan-your-visit",
    img: "/ingested/arubaa/img-038.webp",
  },
  {
    eyebrow: "Nachhaltigkeit",
    title: "Leitungswasser Kampagne",
    body: "Aruba ist bekannt für seine makellosen Strände und türkisfarbenen Gewässer, und wir setzen uns dafür ein, dass das so bleibt.",
    href: "/de/our-island#island-facts",
    img: "/ingested/arubaa/img-030.webp",
  },
  {
    eyebrow: "Bevor du reist",
    title: "Einreisebestimmungen",
    body: "Hier sind einige Details, die du bei der An und Abreise von Aruba beachten solltest, einschließlich der neuen Nachhaltigkeitsgebühr von 20 Dollar.",
    href: "/de/plan-your-visit#tips",
    img: "/ingested/arubaa/img-044.webp",
  },
];

const cells = [
  {
    title: "Arubas Strände & Buchten",
    description:
      "Mehr als 20 öffentliche Strände und Buchten, von ruhigen, familienfreundlichen Buchten bis zu wilden, windumwehten Küsten.",
    href: "/de/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Was zu tun ist auf Aruba",
    description: "Eine breite Palette an Erlebnissen für jedes Tempo.",
    href: "/de/things-to-do",
    src: "/ingested/arubaa/img-034.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Hochzeiten",
    description: "Auf Aruba zu heiraten ist der ideale Weg, um zwei glückliche Herzen zu vereinen.",
    href: "/de/why-aruba#weddings",
    src: "/ingested/arubaa/img-050.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Wellness auf Aruba",
    description:
      "Ist es wirklich Urlaub, wenn du am Ende das Gefühl hast, einen weiteren zu brauchen? Gute Nachrichten: Auf Aruba ist das nicht so.",
    href: "/de/why-aruba#wellness",
    src: "/ingested/arubaa/img-031.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "San Nicolas City",
    description:
      "Reich an Geschichte, Kultur und Architektur, ein echtes Abbild der Bewohner von San Nicolas und ihres Alltags.",
    href: "/de/things-to-do#arts-culture",
    src: "/ingested/arubaa/img-033.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

const features = [
  {
    icon: Plane,
    title: "Einfach",
    body: "Aruba bietet bequeme Direktflüge von großen Städten in den USA und Kanada.",
  },
  {
    icon: Globe,
    title: "Praktisch",
    body: "Wir sprechen vier Sprachen und haben mehr Sonnentage als jede andere Karibikinsel.",
  },
  {
    icon: Compass,
    title: "Entdeckbar",
    body: "Wir sind klein, sicher und modern, sodass du unsere ganze Insel zu deinem Spielplatz machen kannst.",
  },
];

const effects = [
  {
    eyebrow: "Effekt 01",
    title: "Sonne, Sand, Gelassenheit",
    description:
      "Endloser weißer Sand und kristallblaues Wasser. Lege dich in die Sonne, treibe voller Freude im Wasser und tanke die arubanische Wärme, die du für die Heimreise so nötig brauchst.",
    href: "/de/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
  },
  {
    eyebrow: "Effekt 02",
    title: "Genieße Alles",
    description:
      "Mit über hundert Nationalitäten auf der Insel ist Aruba voller Aromen aus jeder Ecke der Welt. Wundere dich nicht, wenn du mit einem neuen Lieblingsgericht abreist.",
    href: "/de/things-to-do#dining",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effekt 03",
    title: "Eins Mit Der Natur",
    description:
      "Wir bleiben auf Aruba nicht wirklich drinnen. Es gibt hier keinen falschen Weg, eins mit der Natur zu werden, aber wir haben ein paar Vorschläge für den Anfang.",
    href: "/de/things-to-do#natural-wonders",
    src: "/ingested/arubaa/img-031.webp",
  },
  {
    eyebrow: "Effekt 04",
    title: "Eine Glückliche Familie",
    description:
      "Dem Aruba-Effekt ist es egal, ob du 5 oder 50 bist, er wird von jedem gespürt, der sich der Magie Arubas öffnet. Perfekt für Eltern und Kinder gleichermaßen.",
    href: "/de/why-aruba#families",
    src: "/ingested/arubaa/img-037.webp",
  },
  {
    eyebrow: "Effekt 05",
    title: "Verlangsame Es",
    description:
      "Manchmal brauchst du nur Ruhe und Frieden, um wieder mit den Menschen in Verbindung zu treten, die dir am wichtigsten sind. Aruba bietet den Trost, den du brauchst, um alles langsamer angehen zu lassen.",
    href: "/de/why-aruba#wellness",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effekt 06",
    title: "Sofort Ein Local",
    description:
      "Es dauert nur wenige Minuten auf Aruba, bis du dich selbst wie ein Local fühlst. Setz dich in einen Rum Shop oder finde die beste lokale Badestelle, in jedem Fall fühlst du dich wie zu Hause.",
    href: "/de/why-aruba#culture",
    src: "/ingested/arubaa/img-033.webp",
  },
];

const slides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Luftaufnahme von Strandbesuchern im türkisfarbenen Wasser Arubas", caption: "Sonne, Sand, Gelassenheit" },
  { src: "/ingested/arubaa/img-041.webp", alt: "Ein Elternteil trägt ein Kind am Strand von Aruba", caption: "Glückliche Kinder, Glücklicher Urlaub" },
  { src: "/ingested/arubaa/img-019.webp", alt: "Eine Frau entspannt sich im Bademantel in einem Spa auf Aruba", caption: "Im Schoß Des Luxus" },
  { src: "/ingested/arubaa/img-040.webp", alt: "Ein lächelnder Reisender an einem Strand auf Aruba", caption: "Solo Unterwegs" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Freunde versammeln sich am Strand von Aruba", caption: "Genieße Alles" },
];

export default function HomeDe() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
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
                Liebe Aruba. Fühle es zurück.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                Wenn du mit Neugier und Offenheit ankommst, antwortet Aruba auf die gleiche
                Weise. Entdecke die Verbindungen, die Kultur und die stillen Momente, die aus
                Besuchern eine Familie machen.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/de/why-aruba">
                    Entdecke den Aruba-Effekt <ArrowRight className="size-4" />
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
                    <PlayCircle className="size-4" /> Video ansehen
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
                <span className="font-display text-lg font-bold">300+</span>
                <span className="text-sm text-white/80">Sonnentage im Jahr, mehr als jede andere Karibikinsel</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Immer auf dem Laufenden
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Unsere neuesten frohen Updates</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              So machen wir deine Aruba-Reise sicher, bequem, flexibel und unvergesslich.
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

        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Der Aruba-Effekt
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Unzählige Wege, um Glück zu finden
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {cells.map((c, i) => (
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

        <section className="bg-primary py-20 text-primary-foreground sm:py-24">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
                Warum wir anders sind
              </span>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Nächster Stopp, One happy island.
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Es gibt viele Gründe, warum so viele Gäste Jahr für Jahr nach Aruba
                zurückkehren. Hier sind nur einige der Dinge, die unsere One happy island zu
                einem einzigartigen Reiseziel machen.
              </p>
            </Reveal>

            <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.08}>
              {features.map((f) => (
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

        <section id="the-aruba-effect" className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Was zu tun ist auf Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Sicher, unsere Strände zählen zu den besten der Welt.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Aber schau über die endlose Sonne, den Sand und das Wasser hinaus, und du findest
              eine Insel voller Erlebnisse: malerische Wanderungen, atemberaubende Buchten und
              unvergessliche Küche. Entdecke die Aruba-Effekte unten, geschrieben von lokalen
              Experten.
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

        <section id="itineraries" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge variant="accent" className="mx-auto border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground">
                Reiserouten
              </Badge>
              <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
                Dein Aruba-Ausflug, geplant von Locals
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
                Entdecke Reiserouten von lokalen Experten: von Sonne, Sand, Gelassenheit über
                Glückliche Kinder, Glücklicher Urlaub, Im Schoß Des Luxus, bis hin zu Solo
                Unterwegs. Jede zeichnet einen ganzen Tag des Aruba-Effekts nach.
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

        <section id="cta" className="container-px mx-auto max-w-6xl py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-12">
              <GridPattern />
              <BorderBeam />
              <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold sm:text-5xl">
                Wir können es kaum erwarten, dich zu sehen.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Wie auch immer du gerne reist, Aruba macht es einfach, den richtigen Aufenthalt
                für dich zu buchen.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/de/book-now">
                    Jetzt Buchen <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/de/deals">Heutige Angebote Ansehen</Link>
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
