import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Aruba Tourism Authoritys globala integritetspolicy: hur vi samlar in, använder och skyddar dina uppgifter.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Inledning",
    body: "Aruba Tourism Authority (ATA) tillhandahåller denna globala integritetspolicy för att förklara hur den behandlar personuppgifter i sina digitala kanaler, inklusive Aruba.com och tillhörande plattformar. Genom att använda webbplatsen eller tjänsterna bekräftar du att vi kan samla in information om dig och använda eller lämna ut sådan information som beskrivs här.",
  },
  {
    heading: "2. Tillämpliga dataskyddslagar",
    body: "ATA åtar sig att följa integritetsregler världen över. Vi hanterar dina personuppgifter i enlighet med den allmänna dataskyddsförordningen (EU) 2016/679 (GDPR) och andra jurisdiktionsspecifika krav. Personuppgifter avser all information som rör en identifierbar person, oavsett om den identifierar personen direkt eller indirekt.",
  },
  {
    heading: "3. Information vi samlar in",
    body: "ATA samlar in flera kategorier av data beroende på hur du interagerar med oss: identitetsinformation, kontaktuppgifter, reseinställningar, teknisk data från din enhet, kundförfrågningar, användningsmönster, marknadsföringsinställningar och begränsad finansiell information. ATA samlar inte i övrigt in eller behandlar kunders betalkortsuppgifter i samband med turistbokningar. Icke identifierbar, sammanställd eller anonymiserad information faller utanför definitionen av personuppgifter enligt tillämpliga dataskyddslagar.",
  },
  {
    heading: "4. Uppgifter som rör minderåriga",
    body: "Vår webbplats och våra tjänster är avsedda för en allmän publik och riktar sig inte till barn. Vi samlar inte medvetet in personuppgifter från minderåriga utan lämpligt samtycke från en förälder eller vårdnadshavare. Om vi upptäcker att vi har samlat in personuppgifter från en minderårig utan det nödvändiga samtycket vidtar vi rimliga åtgärder för att radera den informationen.",
  },
  {
    heading: "5. Hur vi samlar in din information",
    body: "Vi samlar in information direkt från dig när du besöker webbplatsen, skickar in ett formulär, prenumererar på kommunikation eller kontaktar vårt team, samt automatiskt genom cookies, analysverktyg och liknande teknik när du interagerar med våra digitala kanaler. Vi kan även få information från betrodda rese- och turismpartners som samarbetar med ATA för att stödja ditt besök.",
  },
  {
    heading: "6. Syfte och rättslig grund för databehandling",
    body: "Vi behandlar personuppgifter för att tillhandahålla och förbättra våra tjänster, besvara förfrågningar, anpassa din upplevelse av webbplatsen, skicka begärd kommunikation och uppfylla rättsliga skyldigheter. Beroende på sammanhanget inkluderar vår rättsliga grund ditt samtycke, uppfyllandet av en begäran du har gjort och ATA:s legitima intresse av att främja Aruba som resmål.",
  },
  {
    heading: "7. Datalagring",
    body: "Vi lagrar personuppgifter endast så länge det är rimligt nödvändigt för att uppfylla de syften som beskrivs i denna policy, inklusive för att uppfylla rättsliga, redovisningsmässiga eller rapporteringsmässiga krav. När personuppgifter inte längre behövs vidtar vi rimliga åtgärder för att säkert radera, anonymisera eller arkivera dem i enlighet med vår interna lagringspraxis.",
  },
  {
    heading: "8. Säkerhet för personuppgifter",
    body: "ATA upprätthåller rimliga administrativa, tekniska och fysiska skyddsåtgärder utformade för att skydda personuppgifter mot förlust, missbruk, obehörig åtkomst, utlämnande, ändring och förstörelse. Även om inget system kan garantera absolut säkerhet granskar vi regelbundet vår praxis för att minska risken och svarar snabbt på misstänkta incidenter.",
  },
  {
    heading: "9. Delning av dina personuppgifter",
    body: "Vi kan dela personuppgifter med betrodda tjänsteleverantörer som stödjer driften av webbplatsen och tjänsterna, med rese- och turismpartners som är involverade i att uppfylla din begäran, samt när det krävs enligt lag eller för att skydda ATA:s och dess besökares rättigheter och säkerhet. Vi säljer inte personuppgifter till tredje part för deras egna marknadsföringsändamål.",
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
              <ShieldCheck className="size-3.5" /> Juridiskt
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Global Integritetspolicy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Hur Aruba Tourism Authority behandlar personuppgifter på Aruba.com och dess
              digitala kanaler.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Detta är en sammanfattning för demonstrationsändamål. För den fullständiga,
                juridiskt bindande policyn, se den officiella integritetspolicyn på Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Officiell policy <ExternalLink className="size-3.5" />
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
