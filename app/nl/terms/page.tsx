import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden voor het gebruik van Aruba.com.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "Aanvaarding Van De Voorwaarden",
    body: "Door deze Site te bezoeken of te gebruiken, ga je akkoord met deze Algemene Voorwaarden. Als je niet akkoord gaat met een deel van deze voorwaarden, stop dan met het gebruik van de Site en de Services.",
  },
  {
    heading: "Gebruik Van De Site",
    body: "Je mag de Site bekijken en gebruiken voor rechtmatige doeleinden met betrekking tot het plannen en genieten van je bezoek aan Aruba. Je stemt ermee in de Site niet te misbruiken, de normale werking niet te verstoren, en niet te proberen toegang te krijgen op een andere manier dan de interface en instructies die wij bieden.",
  },
  {
    heading: "Intellectueel Eigendom",
    body: "Alle content op deze Site, inclusief tekst, afbeeldingen, logo's en ontwerpelementen, is eigendom van of in licentie gegeven aan de Aruba Tourism Authority en wordt beschermd door de toepasselijke wetgeving inzake intellectueel eigendom. Je mag content bekijken en delen voor persoonlijke, niet-commerciële doeleinden, maar mag deze niet reproduceren of verspreiden zonder toestemming.",
  },
  {
    heading: "Links Naar Derden",
    body: "Deze Site kan voor jouw gemak verwijzen naar resorts, touroperators en andere websites van derden. Wij hebben geen controle over en zijn niet verantwoordelijk voor de content, het beleid of de praktijken van die websites van derden, en het opnemen van een link impliceert geen goedkeuring.",
  },
  {
    heading: "Beperking Van Aansprakelijkheid",
    body: "De Site en de content worden geleverd op een 'zoals-die-is'-basis. Voor zover maximaal toegestaan door de wet, wijst de Aruba Tourism Authority aansprakelijkheid af voor indirecte, incidentele of gevolgschade die voortvloeit uit je gebruik van de Site of het vertrouwen op informatie die hier te vinden is.",
  },
  {
    heading: "Wijzigingen Aan Deze Voorwaarden",
    body: "Wij kunnen deze Algemene Voorwaarden van tijd tot tijd bijwerken om wijzigingen in onze praktijken of om andere operationele, juridische of wettelijke redenen te weerspiegelen. Voortgezet gebruik van de Site nadat wijzigingen van kracht worden, houdt in dat je de herziene voorwaarden accepteert.",
  },
  {
    heading: "Toepasselijk Recht",
    body: "Deze Algemene Voorwaarden worden beheerst door het recht van Aruba, zonder rekening te houden met beginselen van conflicterend recht. Geschillen die voortvloeien uit je gebruik van de Site zijn onderworpen aan de exclusieve jurisdictie van de rechtbanken van Aruba.",
  },
  {
    heading: "Contact",
    body: `Als je vragen hebt over deze Algemene Voorwaarden, kun je de Aruba Tourism Authority bereiken via telefoon of e-mail met de gegevens in onze footer, of door te schrijven naar ${brand.social.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <Scale className="size-3.5" /> Juridisch
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Algemene Voorwaarden
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              De voorwaarden die je gebruik van deze site regelen.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Dit is een samenvatting voor demonstratiedoeleinden. Voor de volledige,
                juridisch bindende voorwaarden, zie de officiële algemene voorwaarden van
                Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Officiële voorwaarden <ExternalLink className="size-3.5" />
              </a>
            </div>
          </Reveal>
        </section>

        <article className="container-px mx-auto max-w-3xl pb-24">
          <Reveal>
            <div className="space-y-10 border-t border-border pt-10">
              {sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="text-2xl font-semibold">{s.heading}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </section>
              ))}
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
