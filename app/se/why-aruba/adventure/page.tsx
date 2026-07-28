import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, Mountain, Waves, Bike, Sunrise } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PhotoHero } from "@/components/magic/photo-hero";
import { ImageCard } from "@/components/magic/image-card";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Äventyr på Aruba",
  description:
    "Grottvalv, ökenleder och öppet vatten: så känner du Aruba-effekten genom äventyr.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Arikok nationalpark",
    src: "/ingested/arubaa/img-031.webp",
    alt: "En kvinna står ensam på sandig mark med utsikt över havet på Aruba",
    description:
      "Nästan en femtedel av ön är skyddad ökenvildmark: höga kaktusar, kalkstensryggar och leder som slutar vid dolda vikar.",
  },
  {
    icon: Waves,
    title: "På vattnet",
    src: "/ingested/arubaa/img-079.webp",
    alt: "Två personer paddlar kajak tillsammans utanför Arubas kust",
    description:
      "Passadvindar som aldrig ger sig gör Aruba till en av Karibiens bästa platser för kajak, vindsurfing och segling, oavsett om du tävlar eller driver.",
  },
  {
    icon: Compass,
    title: "Havsgrottor och klippvalv",
    src: "/ingested/arubaa/img-027.webp",
    alt: "Ett par utforskar en havsgrotta och ett klippvalv längs Arubas kust",
    description:
      "Nordkusten är formad av vind och vågor till naturliga broar och urholkade grottor, bäst utforskade strax efter gryningen innan ljuset blir för skarpt.",
  },
  {
    icon: Sunrise,
    title: "Jaga horisonten",
    src: "/ingested/arubaa/img-063.webp",
    alt: "En grupp vänner hoppar tillsammans på stranden i det gyllene timmens ljus",
    description:
      "Tidiga fåglar får ön nästan för sig själva: tomma sandbankar, sval ökenluft och en soluppgång som färgar hela kustlinjen guld.",
  },
];

export default function AdventurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Kaweta"
          title="Äventyr"
          body="Kaweta. Det betyder nyfiken på papiamento, och det är det perfekta ordet för Arubas utforskaranda. Bortom stränderna belönar ön alla som är villiga att leta."
          src="/ingested/arubaa/img-031.webp"
          alt="En kvinna står ensam på sandig mark med utsikt över havet på Aruba"
        />

        <section className="container-px mx-auto max-w-6xl py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Fyra vägar in
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
              Hitta ditt eget äventyr
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Aruba packar öken, kust och öppet vatten i en ö du kan korsa på under en timme,
              vilket betyder att du kan jaga allt på en och samma resa.
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
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Bike className="size-5" />
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
              Byggd för att utforskas, inte bara besökas
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Hyr en UTV för ökeninlandet, boka en snorkelbåt för reven, eller börja bara gå
              från hotellet: Aruba är litet nog att varje typ av äventyr bara är en kort resa
              från där du bor.
            </p>
          </Reveal>
          <AutoSlider className="mt-10" itemClassName="w-[82%] sm:w-[46%] lg:w-[31%]">
            <ImageCard
              src="/ingested/arubaa/img-077.webp"
              alt="Två personer går tillsammans på en sandbank på Aruba"
              title="Promenader på sandbankar"
              description="Lågvatten öppnar upp sandbankar som sträcker sig ut i det turkosa vattnet."
            />
            <ImageCard
              src="/ingested/arubaa/img-004.webp"
              alt="Ett par i silhuett på Arubas dyner vid solnedgång"
              title="Vandring bland dynerna"
              description="Nordostkusten är rullande dyner och vind, bäst upplevd till fots."
            />
            <ImageCard
              src="/ingested/arubaa/img-065.webp"
              alt="En grupp vänner hoppar tillsammans på stranden"
              title="Gruppexkursioner"
              description="Äventyr är bättre delat: boka en grupptur och jämför intryck över middagen."
            />
          </AutoSlider>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Redo att utforska?</h2>
            <p className="max-w-md text-muted-foreground">
              Se turer, utrustningsuthyrning och resten av Arubas saker att göra.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/se/things-to-do#natural-wonders">
                  Se Naturunder <ArrowRight className="size-4" />
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
