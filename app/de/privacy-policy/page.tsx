import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Datenschutzrichtlinie",
  description:
    "Globale Datenschutzrichtlinie der Aruba Tourism Authority: wie wir Ihre Daten erheben, verwenden und schützen.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Einleitung",
    body: "Die Aruba Tourism Authority (ATA) stellt diese globale Datenschutzrichtlinie bereit, um zu erklären, wie sie personenbezogene Daten über ihre digitalen Angebote hinweg verarbeitet, einschließlich Aruba.com und zugehöriger Plattformen. Durch die Nutzung der Website oder der Services erkennen Sie an, dass wir Informationen über Sie erheben und solche Informationen wie hier beschrieben verwenden oder offenlegen können.",
  },
  {
    heading: "2. Geltende Datenschutzgesetze",
    body: "Die ATA verpflichtet sich, weltweite Datenschutzbestimmungen einzuhalten. Wir behandeln Ihre personenbezogenen Daten in Übereinstimmung mit der Datenschutz-Grundverordnung (EU) 2016/679 (DSGVO) und anderen jurisdiktionsspezifischen Anforderungen. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierbare Person beziehen, unabhängig davon, ob diese direkt oder indirekt identifiziert wird.",
  },
  {
    heading: "3. Von uns erhobene Informationen",
    body: "Die ATA erhebt verschiedene Kategorien von Daten, abhängig davon, wie Sie mit uns interagieren: Identitätsinformationen, Kontaktdaten, Reisepräferenzen, technische Daten Ihres Geräts, Kundenanfragen, Nutzungsmuster, Marketingpräferenzen und begrenzte Finanzinformationen. Die ATA erhebt oder verarbeitet ansonsten keine Zahlungskartendaten von Verbrauchern im Zusammenhang mit Tourismusbuchungen. Nicht identifizierbare, aggregierte oder anonymisierte Informationen fallen nicht unter die Definition personenbezogener Daten nach geltendem Datenschutzrecht.",
  },
  {
    heading: "4. Daten von Minderjährigen",
    body: "Unsere Website und unsere Services richten sich an ein allgemeines Publikum und sind nicht für Kinder bestimmt. Wir erheben wissentlich keine personenbezogenen Daten von Minderjährigen ohne entsprechende Zustimmung eines Elternteils oder Erziehungsberechtigten. Sollten wir feststellen, dass wir personenbezogene Daten eines Minderjährigen ohne die erforderliche Zustimmung erhoben haben, ergreifen wir angemessene Maßnahmen, um diese Informationen zu löschen.",
  },
  {
    heading: "5. Wie wir Ihre Informationen erheben",
    body: "Wir erheben Informationen direkt von Ihnen, wenn Sie die Website durchsuchen, ein Formular übermitteln, Mitteilungen abonnieren oder unser Team kontaktieren, sowie automatisch über Cookies, Analysetools und ähnliche Technologien, während Sie mit unseren digitalen Angeboten interagieren. Wir können auch Informationen von vertrauenswürdigen Reise- und Tourismuspartnern erhalten, die mit der ATA zusammenarbeiten, um Ihren Besuch zu unterstützen.",
  },
  {
    heading: "6. Zweck und Rechtsgrundlage der Datenverarbeitung",
    body: "Wir verarbeiten personenbezogene Daten, um unsere Services bereitzustellen und zu verbessern, um Anfragen zu beantworten, Ihre Erfahrung auf der Website zu personalisieren, angeforderte Mitteilungen zu senden und gesetzliche Verpflichtungen zu erfüllen. Je nach Kontext umfasst unsere Rechtsgrundlage Ihre Einwilligung, die Erfüllung einer von Ihnen gestellten Anfrage und das berechtigte Interesse der ATA, Aruba als Reiseziel zu bewerben.",
  },
  {
    heading: "7. Speicherdauer",
    body: "Wir speichern personenbezogene Daten nur so lange, wie es zur Erfüllung der in dieser Richtlinie beschriebenen Zwecke angemessen erforderlich ist, einschließlich zur Erfüllung gesetzlicher, buchhalterischer oder berichtsbezogener Anforderungen. Wenn personenbezogene Daten nicht mehr benötigt werden, ergreifen wir angemessene Maßnahmen, um sie in Übereinstimmung mit unseren internen Speicherpraktiken sicher zu löschen, zu anonymisieren oder zu archivieren.",
  },
  {
    heading: "8. Sicherheit personenbezogener Daten",
    body: "Die ATA unterhält angemessene administrative, technische und physische Schutzmaßnahmen, die darauf ausgelegt sind, personenbezogene Daten vor Verlust, Missbrauch, unbefugtem Zugriff, Offenlegung, Veränderung und Zerstörung zu schützen. Obwohl kein System absolute Sicherheit garantieren kann, überprüfen wir unsere Praktiken regelmäßig, um Risiken zu verringern, und reagieren umgehend auf jeden Verdachtsfall.",
  },
  {
    heading: "9. Weitergabe Ihrer personenbezogenen Daten",
    body: "Wir können personenbezogene Daten an vertrauenswürdige Dienstleister weitergeben, die den Betrieb der Website und der Services unterstützen, an Tourismus- und Reisepartner, die an der Erfüllung Ihrer Anfrage beteiligt sind, sowie dort, wo es das Gesetz vorschreibt oder zum Schutz der Rechte und der Sicherheit der ATA und ihrer Besucher erforderlich ist. Wir verkaufen keine personenbezogenen Daten an Dritte für deren eigene Marketingzwecke.",
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
              <ShieldCheck className="size-3.5" /> Rechtliches
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Globale Datenschutzrichtlinie
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Wie die Aruba Tourism Authority personenbezogene Daten über Aruba.com
              und ihre digitalen Angebote hinweg verarbeitet.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Dies ist eine Zusammenfassung zu Demonstrationszwecken. Die vollständige,
                rechtlich verbindliche Richtlinie finden Sie in der offiziellen
                Datenschutzrichtlinie von Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Offizielle Richtlinie <ExternalLink className="size-3.5" />
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
