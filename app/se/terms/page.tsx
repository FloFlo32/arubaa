import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Villkor",
  description: "Villkor för att använda Aruba.com.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "Godkännande av villkoren",
    body: "Genom att komma åt eller använda denna webbplats godkänner du att vara bunden av dessa villkor. Om du inte godkänner någon del av dessa villkor, avstå från att använda webbplatsen och dess tjänster.",
  },
  {
    heading: "Användning av webbplatsen",
    body: "Du får bläddra och använda webbplatsen för lagliga syften relaterade till att planera och njuta av ditt besök på Aruba. Du samtycker till att inte missbruka webbplatsen, störa dess normala drift eller försöka få åtkomst till den på andra sätt än det gränssnitt och de instruktioner vi tillhandahåller.",
  },
  {
    heading: "Immateriella rättigheter",
    body: "Allt innehåll på denna webbplats, inklusive text, bilder, logotyper och designelement, ägs av eller är licensierat till Aruba Tourism Authority och skyddas av tillämpliga lagar om immateriella rättigheter. Du får visa och dela innehåll för personliga, icke-kommersiella ändamål, men får inte reproducera eller distribuera det utan tillstånd.",
  },
  {
    heading: "Länkar till tredje part",
    body: "Denna webbplats kan länka till hotell, researrangörer och andra tredjepartswebbplatser för din bekvämlighet. Vi kontrollerar inte och ansvarar inte för innehållet, policyerna eller praxisen på dessa tredjepartswebbplatser, och inkludering av en länk innebär inte ett godkännande.",
  },
  {
    heading: "Ansvarsbegränsning",
    body: "Webbplatsen och dess innehåll tillhandahålls i befintligt skick. I den utsträckning lagen tillåter frånsäger Aruba Tourism Authority sig ansvar för indirekta, oavsiktliga eller följdskador som uppstår från din användning av webbplatsen eller tillit till information som finns här.",
  },
  {
    heading: "Ändringar av dessa villkor",
    body: "Vi kan uppdatera dessa villkor från tid till annan för att återspegla förändringar i vår praxis eller av andra operativa, juridiska eller regulatoriska skäl. Fortsatt användning av webbplatsen efter att ändringar trätt i kraft utgör ditt godkännande av de reviderade villkoren.",
  },
  {
    heading: "Tillämplig lag",
    body: "Dessa villkor styrs av Arubas lagar, utan hänsyn till lagvalsregler. Alla tvister som uppstår från din användning av webbplatsen omfattas av Arubas domstolars exklusiva jurisdiktion.",
  },
  {
    heading: "Kontakt",
    body: `Om du har frågor om dessa villkor kan du kontakta Aruba Tourism Authority via telefon eller e-post med uppgifterna i vår sidfot, eller genom att skriva till ${brand.social.email}.`,
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
              <Scale className="size-3.5" /> Juridiskt
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Villkor
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Villkoren som styr din användning av denna webbplats.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Detta är en sammanfattning för demonstrationsändamål. För de fullständiga,
                juridiskt bindande villkoren, se de officiella villkoren på Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Officiella villkor <ExternalLink className="size-3.5" />
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
