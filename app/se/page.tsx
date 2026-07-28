import Link from "next/link";
import { ArrowRight, ArrowUpRight, PlayCircle, Plane, Globe, Compass } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { HeroVideo } from "@/components/magic/hero-video";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Carousel } from "@/components/magic/carousel";
import { ImageCard } from "@/components/magic/image-card";
import { cn } from "@/lib/utils";

const updates = [
  {
    eyebrow: "Matfestival",
    title: "Autentico Aruba Culinary Festival",
    body: "Autentico är tillbaka i oktober för ännu ett oförglömligt firande av Arubas matkultur.",
    href: "/se/things-to-do#dining",
    img: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Planera smartare",
    title: "myAruba-appen",
    body: "Vill du utforska Aruba? Prova myAruba, appen som hjälper dig hitta fantastiska platser på ön.",
    href: "/se/plan-your-visit",
    img: "/ingested/arubaa/img-038.webp",
  },
  {
    eyebrow: "Hållbarhet",
    title: "Kampanjen för kranvatten",
    body: "Aruba är känt för sina orörda stränder och turkosa vatten, och vi arbetar för att det ska förbli så.",
    href: "/se/our-island#island-facts",
    img: "/ingested/arubaa/img-030.webp",
  },
  {
    eyebrow: "Innan du reser",
    title: "Resekrav",
    body: "Här är några saker att komma ihåg när du reser till och från Aruba, inklusive den nya hållbarhetsavgiften på 20 dollar.",
    href: "/se/plan-your-visit#tips",
    img: "/ingested/arubaa/img-044.webp",
  },
];

const happinessCells = [
  {
    title: "Arubas stränder & vikar",
    description:
      "Mer än 20 offentliga stränder och vikar, från lugna, familjevänliga bukter till vilda, vindpinade stränder.",
    href: "/se/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    title: "Saker att göra på Aruba",
    description: "Ett brett utbud av upplevelser för alla tempon.",
    href: "/se/things-to-do",
    src: "/ingested/arubaa/img-034.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Bröllop",
    description: "Att gifta sig på Aruba är det perfekta sättet att förena två lyckliga hjärtan.",
    href: "/se/why-aruba#weddings",
    src: "/ingested/arubaa/img-050.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Välbefinnande på Aruba",
    description:
      "Är det verkligen en semester om du känner att du behöver en ny när den är slut? Goda nyheter: Aruba är inte den typen av resa.",
    href: "/se/why-aruba#wellness",
    src: "/ingested/arubaa/img-031.webp",
    span: "",
    ratio: "aspect-[4/3]",
  },
  {
    title: "Staden San Nicolas",
    description:
      "Rik på historia, kultur och arkitektur, en sann spegling av invånarna i San Nicolas och deras vardag.",
    href: "/se/things-to-do#arts-culture",
    src: "/ingested/arubaa/img-033.webp",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
];

const nextStopFeatures = [
  {
    icon: Plane,
    title: "Enkelt",
    body: "Aruba har smidiga direktflyg från stora städer i USA och Kanada.",
  },
  {
    icon: Globe,
    title: "Bekvämt",
    body: "Vi talar fyra språk och har fler soldagar än någon annan karibisk ö.",
  },
  {
    icon: Compass,
    title: "Lätt att upptäcka",
    body: "Vi är små, trygga och moderna, så du kan göra hela vår ö till din lekplats.",
  },
];

const effects = [
  {
    eyebrow: "Effekt 01",
    title: "Sol, Sand, Stillhet",
    description:
      "Oändlig vit sand och kristallblått vatten. Ligg i solen, flyt i extas och fyll på med den arubanska värmen du behöver inför hemresan.",
    href: "/se/things-to-do#beaches-coves",
    src: "/ingested/arubaa/img-029.webp",
  },
  {
    eyebrow: "Effekt 02",
    title: "Njut Av Allt",
    description:
      "Med över hundra nationaliteter på ön är Aruba fyllt av smaker från jordens alla hörn. Bli inte förvånad om du åker hem med en ny favoriträtt.",
    href: "/se/things-to-do#dining",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effekt 03",
    title: "Ett Med Naturen",
    description:
      "Vi håller oss knappt inomhus på Aruba. Det finns inget fel sätt att bli ett med naturen här, men vi har några förslag för att komma igång.",
    href: "/se/things-to-do#natural-wonders",
    src: "/ingested/arubaa/img-031.webp",
  },
  {
    eyebrow: "Effekt 04",
    title: "En Lycklig Familj",
    description:
      "Aruba-effekten bryr sig inte om du är 5 eller 50 år, den känns av alla som öppnar sig för Arubas magi. Perfekt för både föräldrar och barn.",
    href: "/se/why-aruba#families",
    src: "/ingested/arubaa/img-037.webp",
  },
  {
    eyebrow: "Effekt 05",
    title: "Sänk Tempot",
    description:
      "Ibland är allt du behöver lugn och ro för att återknyta kontakten med dem som betyder mest. Aruba är fullt av den ro du behöver för att sänka tempot.",
    href: "/se/why-aruba#wellness",
    src: "/ingested/arubaa/img-036.webp",
  },
  {
    eyebrow: "Effekt 06",
    title: "Lokal På En Gång",
    description:
      "Det tar bara några minuter på Aruba innan du känner dig som en lokalbo. Slå dig ner på en rombar eller hitta det bästa lokala badstället: oavsett vilket kommer du känna dig hemma.",
    href: "/se/why-aruba#culture",
    src: "/ingested/arubaa/img-033.webp",
  },
];

const slides = [
  { src: "/ingested/arubaa/img-029.webp", alt: "Flygbild av badgäster i Arubas turkosa vatten", caption: "Sol, sand, stillhet" },
  { src: "/ingested/arubaa/img-041.webp", alt: "En förälder bär ett barn vid stranden på Aruba", caption: "Glada barn, glad semester" },
  { src: "/ingested/arubaa/img-019.webp", alt: "En kvinna kopplar av i en spa-morgonrock på Aruba", caption: "I lyxens sköte" },
  { src: "/ingested/arubaa/img-040.webp", alt: "En resenär som ler på en strand på Aruba", caption: "Solotur" },
  { src: "/ingested/arubaa/img-033.webp", alt: "Vänner samlade på stranden på Aruba", caption: "Njut av allt" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24 sm:pt-28">
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
                Älska Aruba. Känn det tillbaka.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                När du anländer med nyfikenhet och öppenhet svarar Aruba i samma anda. Upptäck
                de kontakter, den kultur och de stilla stunder som förvandlar besökare till familj.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg">
                  <Link href="/se/why-aruba">
                    Upptäck Aruba-effekten <ArrowRight className="size-4" />
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
                    <PlayCircle className="size-4" /> Se videon
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
                <span className="font-display text-lg font-bold">300+</span>
                <span className="text-sm text-white/80">soldagar om året, fler än på någon annan karibisk ö</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Updates */}
        <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Håll dig uppdaterad
            </span>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Våra senaste glada nyheter</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Så gör vi din Aruba-resa säker, bekväm, flexibel och oförglömlig.
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
              Aruba-effekten
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Oändligt många sätt att hitta lycka
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
                Varför vi är annorlunda
              </span>
              <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
                Nästa stopp, One happy island.
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/85">
                Det finns många anledningar till att så många gäster återvänder till Aruba år
                efter år. Här är bara några av sakerna som gör vår One happy island annorlunda
                än alla andra resmål.
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
              Saker att göra på Aruba
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
              Visst, våra stränder är några av de bästa i världen.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Men titta bortom den ändlösa solen, sanden och vattnet, och du hittar en ö full av
              upplevelser: vandringar med vacker utsikt, hänförande vikar och oförglömlig mat.
              Utforska Aruba-effekterna nedan, skrivna av lokala experter.
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
                Resrutter
              </Badge>
              <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
                Din Aruba-flykt, planerad av lokalbor
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/85">
                Utforska resrutter skrivna av lokala experter: från Sol, Sand, Stillhet till
                Glada Barn, Glad Semester, I Lyxens Sköte och Solotur. Var och en kartlägger en
                hel dag av Aruba-effekten.
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
                Vi kan inte vänta på att få se dig.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Oavsett hur du gillar att resa gör Aruba det enkelt att boka den vistelse som
                passar dig.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/se/book-now">
                    Boka Nu <ArrowRight className="size-4" />
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
