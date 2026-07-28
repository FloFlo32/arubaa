import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Termini E Condizioni",
  description: "Termini e condizioni per l'utilizzo di Aruba.com.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "Accettazione dei Termini",
    body: "Accedendo o utilizzando questo Sito, accetti di essere vincolato da questi Termini & Condizioni. Se non sei d'accordo con qualsiasi parte di questi termini, interrompi l'utilizzo del Sito e dei suoi Servizi.",
  },
  {
    heading: "Uso del Sito",
    body: "Puoi navigare e utilizzare il Sito per scopi legali relativi alla pianificazione e al godimento della tua visita ad Aruba. Accetti di non fare un uso improprio del Sito, di non interferire con il suo normale funzionamento e di non tentare di accedervi con mezzi diversi dall'interfaccia e dalle istruzioni che forniamo.",
  },
  {
    heading: "Proprietà Intellettuale",
    body: "Tutti i contenuti presenti su questo Sito, inclusi testi, immagini, loghi ed elementi di design, sono di proprietà o concessi in licenza all'Autorità del Turismo di Aruba e sono protetti dalle leggi applicabili sulla proprietà intellettuale. Puoi visualizzare e condividere i contenuti per scopi personali e non commerciali, ma non puoi riprodurli o ridistribuirli senza autorizzazione.",
  },
  {
    heading: "Link a Terze Parti",
    body: "Questo Sito potrebbe collegarsi a resort, tour operator e altri siti web di terze parti per tua comodità. Non controlliamo e non siamo responsabili del contenuto, delle politiche o delle pratiche di quei siti di terze parti, e l'inclusione di un link non implica approvazione.",
  },
  {
    heading: "Limitazione di Responsabilità",
    body: "Il Sito e i suoi contenuti sono forniti così come sono. Nella misura massima consentita dalla legge, l'Autorità del Turismo di Aruba declina la responsabilità per eventuali danni indiretti, incidentali o consequenziali derivanti dall'uso del Sito o dall'affidamento alle informazioni qui contenute.",
  },
  {
    heading: "Modifiche a Questi Termini",
    body: "Potremmo aggiornare questi Termini & Condizioni di tanto in tanto per riflettere cambiamenti nelle nostre pratiche o per altre ragioni operative, legali o normative. L'uso continuato del Sito dopo l'entrata in vigore di eventuali modifiche costituisce la tua accettazione dei termini rivisti.",
  },
  {
    heading: "Legge Applicabile",
    body: "Questi Termini & Condizioni sono regolati dalle leggi di Aruba, senza riguardo ai principi di conflitto di leggi. Eventuali controversie derivanti dall'uso del Sito saranno soggette alla giurisdizione esclusiva dei tribunali di Aruba.",
  },
  {
    heading: "Contatti",
    body: `Se hai domande su questi Termini & Condizioni, puoi contattare l'Autorità del Turismo di Aruba telefonicamente o via email utilizzando i dettagli nel nostro footer, oppure scrivendo a ${brand.social.email}.`,
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
              <Scale className="size-3.5" /> Legale
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Termini E Condizioni
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              I termini che regolano il tuo utilizzo di questo sito.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Questo è un riepilogo a scopo dimostrativo. Per i termini completi e
                legalmente vincolanti, consulta i termini e le condizioni ufficiali di Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Termini ufficiali <ExternalLink className="size-3.5" />
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
