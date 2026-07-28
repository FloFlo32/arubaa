import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, Sparkles, Wind, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Välbefinnande på Aruba",
  description:
    "Stillhet på klippkanten och långsam, tyst lyx: så kopplar du bort och upptäcker dig själv på Aruba.",
};

const highlights = [
  {
    icon: Sparkles,
    title: "Långsam, tyst lyx",
    src: "/ingested/arubaa/img-019.webp",
    alt: "En kvinna i en spa-morgonrock kopplar av vid ett ljusbadat badkar",
    description:
      "Spa-ritualerna här lutar sig mot öns egna material: aloe, havssalt och timmar som sträcker ut sig snarare än rusar.",
  },
  {
    icon: Wind,
    title: "Stillhet på klippkanten",
    src: "/ingested/arubaa/img-031.webp",
    alt: "En kvinna står ensam på sandig mark med utsikt över havet på Aruba",
    description:
      "Öns branter vänder rakt in i passadvindarna. Tio tysta minuter där uppe ger mer än en timme någon annanstans.",
  },
  {
    icon: Sunrise,
    title: "Långsamma morgnar vid vattnet",
    src: "/ingested/arubaa/img-026.webp",
    alt: "En kvinna kopplar av i en strandstol vid solnedgången på Aruba",
    description:
      "Ingen väckarklocka krävs. Arubas morgnar är till för en långsam kaffe, ett längre bad och ett schema som kan vänta till mitt på dagen.",
  },
  {
    icon: Flower2,
    title: "Koppla bort, tillsammans",
    src: "/ingested/arubaa/img-078.webp",
    alt: "En man och en kvinna står tillsammans vid en palm på en strand på Aruba",
    description:
      "Välbefinnande här är inte ensamt som standard. Långsamma dagar vid vattnet är precis så lätta att dela som att spendera själv.",
  },
];

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Koppla bort"
          title="Välbefinnande"
          body="Aruba är gjord för att hjälpa dig koppla bort från världen och upptäcka dig själv. Färre distraktioner, mer sol, och en ö tillräckligt liten att sakta ner är hela poängen."
          src="/ingested/arubaa/img-031.webp"
          alt="En kvinna står ensam på sandig mark med utsikt över havet på Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Inbyggd stillhet
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Är det verkligen en semester om du behöver en ny efter?
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Goda nyheter: Aruba är inte den typen av resa. Konstant sol, låg luftfuktighet och
              en ö byggd runt vattnet gör vila till standarden, inte något du måste schemalägga.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2" stagger={0.06}>
            {highlights.map((h) => (
              <RevealItem key={h.title}>
                <ImageCard
                  src={h.src}
                  alt={h.alt}
                  eyebrow={h.title}
                  title={h.title}
                  description={h.description}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Några sätt att koppla ur
            </h2>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-039.webp"
              alt="Två personer sitter tillsammans på en strand på Aruba"
              title="Strandyoga vid gryningen"
              description="Tysta stretchövningar i sanden innan ön vaknar."
            />
            <ImageCard
              src="/ingested/arubaa/img-057.webp"
              alt="Ett par pratar tillsammans vid poolen på ett hotell på Aruba"
              title="Pooldagar, helt avkopplade"
              description="Hotellpooler byggda för att göra absolut ingenting, med flit."
            />
            <ImageCard
              src="/ingested/arubaa/img-036.webp"
              alt="Ett par kopplar av tillsammans på kustklipporna på Aruba"
              title="Vandring bland tidvattenpooler"
              description="Långsamma promenader längs klipporna, utan någon särskild plats att vara på."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Redo att sakta ner?</h2>
            <p className="max-w-md text-muted-foreground">
              Se allt-inkluderat-vistelser och hotellalternativ byggda för vila.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/se/plan-your-visit#all-inclusive">
                  Se Allt Inkluderat <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/se/why-aruba">Tillbaka Till Varför Aruba</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
