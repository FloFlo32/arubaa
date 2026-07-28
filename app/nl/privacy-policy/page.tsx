import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Wereldwijd privacybeleid van de Aruba Tourism Authority: hoe wij jouw gegevens verzamelen, gebruiken en beschermen.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Inleiding",
    body: "De Aruba Tourism Authority (ATA) biedt dit wereldwijde privacybeleid aan om uit te leggen hoe zij persoonsgegevens verwerkt op haar digitale platforms, waaronder Aruba.com en bijbehorende platformen. Door de Site of de Services te gebruiken, erken je dat wij informatie over jou kunnen verzamelen en deze informatie kunnen gebruiken of openbaar maken zoals hierin beschreven.",
  },
  {
    heading: "2. Toepasselijke Wetgeving Gegevensbescherming",
    body: "ATA zet zich in om wereldwijde privacyregelgeving na te leven. Wij behandelen je persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (EU) 2016/679 (AVG) en andere jurisdictie-specifieke vereisten. Persoonsgegevens betekent alle informatie die betrekking heeft op een identificeerbare persoon, direct of indirect.",
  },
  {
    heading: "3. Informatie Die Wij Verzamelen",
    body: "ATA verzamelt verschillende categorieën gegevens, afhankelijk van hoe je met ons omgaat: identiteitsinformatie, contactgegevens, reisvoorkeuren, technische gegevens van je apparaat, klantvragen, gebruikspatronen, marketingvoorkeuren en beperkte financiële informatie. ATA verzamelt of verwerkt geen betaalkaartgegevens van consumenten in verband met toeristische boekingen. Niet-identificeerbare, geaggregeerde of geanonimiseerde informatie valt buiten de definitie van persoonsgegevens onder de toepasselijke wetgeving voor gegevensbescherming.",
  },
  {
    heading: "4. Gegevens Van Minderjarigen",
    body: "Onze Site en Services zijn bedoeld voor een algemeen publiek en niet gericht op kinderen. Wij verzamelen niet bewust persoonsgegevens van minderjarigen zonder passende toestemming van een ouder of voogd. Als wij ontdekken dat wij persoonsgegevens van een minderjarige hebben verzameld zonder de vereiste toestemming, nemen wij redelijke stappen om die informatie te verwijderen.",
  },
  {
    heading: "5. Hoe Wij Je Informatie Verzamelen",
    body: "Wij verzamelen informatie rechtstreeks van jou wanneer je de Site bezoekt, een formulier indient, je abonneert op communicatie, of contact opneemt met ons team, en ook automatisch via cookies, analysetools en soortgelijke technologieën terwijl je met onze digitale platforms interageert. We kunnen ook informatie ontvangen van vertrouwde reis- en toerismepartners die met ATA samenwerken om je bezoek te ondersteunen.",
  },
  {
    heading: "6. Doel En Wettelijke Grondslag Van Gegevensverwerking",
    body: "Wij verwerken persoonsgegevens om onze Services te leveren en te verbeteren, te reageren op vragen, je ervaring op de Site te personaliseren, gevraagde communicatie te versturen en te voldoen aan wettelijke verplichtingen. Afhankelijk van de context is onze wettelijke grondslag jouw toestemming, de uitvoering van een verzoek dat je hebt gedaan, en het legitieme belang van ATA om Aruba als bestemming te promoten.",
  },
  {
    heading: "7. Bewaartermijn Van Gegevens",
    body: "Wij bewaren persoonsgegevens alleen zolang redelijkerwijs nodig is om de in dit beleid beschreven doeleinden te vervullen, waaronder het voldoen aan wettelijke, boekhoudkundige of rapportagevereisten. Wanneer persoonsgegevens niet langer nodig zijn, nemen wij redelijke stappen om ze veilig te verwijderen, te anonimiseren of te archiveren in overeenstemming met onze interne bewaarpraktijken.",
  },
  {
    heading: "8. Beveiliging Van Persoonsgegevens",
    body: "ATA handhaaft redelijke administratieve, technische en fysieke waarborgen die zijn ontworpen om persoonsgegevens te beschermen tegen verlies, misbruik, ongeoorloofde toegang, openbaarmaking, wijziging en vernietiging. Hoewel geen systeem absolute beveiliging kan garanderen, evalueren wij onze praktijken regelmatig om risico's te verminderen en reageren wij snel op elk vermoed incident.",
  },
  {
    heading: "9. Delen Van Je Persoonsgegevens",
    body: "Wij kunnen persoonsgegevens delen met vertrouwde dienstverleners die de werking van de Site en de Services ondersteunen, met reis- en toerismepartners die betrokken zijn bij het vervullen van je verzoek, en wanneer wettelijk vereist of om de rechten en veiligheid van ATA en haar bezoekers te beschermen. Wij verkopen geen persoonsgegevens aan derden voor hun eigen marketingdoeleinden.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Juridisch
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Wereldwijd Privacybeleid
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Hoe de Aruba Tourism Authority persoonsgegevens verwerkt op Aruba.com en
              haar digitale platforms.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Dit is een samenvatting voor demonstratiedoeleinden. Voor het volledige,
                juridisch bindende beleid, zie het officiële privacybeleid van Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Officieel beleid <ExternalLink className="size-3.5" />
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
