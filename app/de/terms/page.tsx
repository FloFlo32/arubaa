import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen für die Nutzung von Aruba.com.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "Annahme der Bedingungen",
    body: "Durch den Zugriff auf diese Website oder deren Nutzung erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen einverstanden. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, stellen Sie bitte die Nutzung der Website und ihrer Services ein.",
  },
  {
    heading: "Nutzung der Website",
    body: "Sie dürfen die Website für rechtmäßige Zwecke im Zusammenhang mit der Planung und dem Erleben Ihres Aufenthalts auf Aruba durchsuchen und nutzen. Sie erklären sich damit einverstanden, die Website nicht missbräuchlich zu verwenden, ihren normalen Betrieb nicht zu beeinträchtigen und nicht zu versuchen, auf sie auf andere Weise als über die von uns bereitgestellte Schnittstelle und Anleitung zuzugreifen.",
  },
  {
    heading: "Geistiges Eigentum",
    body: "Alle Inhalte auf dieser Website, einschließlich Texte, Bilder, Logos und Gestaltungselemente, sind Eigentum der Aruba Tourism Authority oder an sie lizenziert und durch geltendes Recht zum Schutz geistigen Eigentums geschützt. Sie dürfen Inhalte für persönliche, nicht kommerzielle Zwecke ansehen und teilen, jedoch nicht ohne Genehmigung reproduzieren oder weiterverbreiten.",
  },
  {
    heading: "Links zu Drittanbietern",
    body: "Diese Website kann zu Ihrer Bequemlichkeit auf Resorts, Reiseveranstalter und andere Websites Dritter verlinken. Wir haben keine Kontrolle über die Inhalte, Richtlinien oder Praktiken dieser Websites Dritter und sind nicht dafür verantwortlich; die Aufnahme eines Links stellt keine Empfehlung dar.",
  },
  {
    heading: "Haftungsbeschränkung",
    body: "Die Website und ihre Inhalte werden ohne Gewähr bereitgestellt. Im gesetzlich zulässigen Höchstmaß schließt die Aruba Tourism Authority die Haftung für indirekte, beiläufige oder Folgeschäden aus, die aus Ihrer Nutzung der Website oder dem Vertrauen auf hier gefundene Informationen entstehen.",
  },
  {
    heading: "Änderungen dieser Bedingungen",
    body: "Wir können diese Allgemeinen Geschäftsbedingungen von Zeit zu Zeit aktualisieren, um Änderungen unserer Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen Gründen widerzuspiegeln. Die fortgesetzte Nutzung der Website nach Inkrafttreten von Änderungen stellt Ihre Annahme der überarbeiteten Bedingungen dar.",
  },
  {
    heading: "Anwendbares Recht",
    body: "Diese Allgemeinen Geschäftsbedingungen unterliegen dem Recht von Aruba, ohne Berücksichtigung des internationalen Privatrechts. Streitigkeiten, die sich aus Ihrer Nutzung der Website ergeben, unterliegen der ausschließlichen Zuständigkeit der Gerichte von Aruba.",
  },
  {
    heading: "Kontakt",
    body: `Wenn Sie Fragen zu diesen Allgemeinen Geschäftsbedingungen haben, erreichen Sie die Aruba Tourism Authority telefonisch oder per E-Mail über die Angaben in unserer Fußzeile oder schriftlich unter ${brand.social.email}.`,
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
              <Scale className="size-3.5" /> Rechtliches
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              AGB
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Die Bedingungen, die Ihre Nutzung dieser Website regeln.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Dies ist eine Zusammenfassung zu Demonstrationszwecken. Die vollständigen,
                rechtlich verbindlichen Bedingungen finden Sie in den offiziellen
                Allgemeinen Geschäftsbedingungen von Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Offizielle Bedingungen <ExternalLink className="size-3.5" />
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
