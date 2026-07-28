import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Informativa Sulla Privacy",
  description:
    "Informativa globale sulla privacy dell'Autorità del Turismo di Aruba: come raccogliamo, usiamo e proteggiamo i tuoi dati.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Introduzione",
    body: "L'Autorità del Turismo di Aruba (ATA) fornisce questa Informativa Globale sulla Privacy per spiegare come tratta i dati personali attraverso le sue proprietà digitali, inclusi Aruba.com e le piattaforme associate. Utilizzando il Sito o i Servizi, riconosci che potremmo raccogliere informazioni su di te e utilizzare o divulgare tali informazioni come descritto in questo documento.",
  },
  {
    heading: "2. Leggi Applicabili sulla Protezione dei Dati",
    body: "L'ATA si impegna a rispettare le normative sulla privacy in tutto il mondo. Tratteremo i tuoi Dati Personali in conformità con il Regolamento Generale sulla Protezione dei Dati (UE) 2016/679 (GDPR) e altri requisiti specifici delle giurisdizioni. Dati Personali significa qualsiasi informazione relativa a una persona identificabile, direttamente o indirettamente.",
  },
  {
    heading: "3. Informazioni Che Raccogliamo",
    body: "L'ATA raccoglie diverse categorie di dati in base a come interagisci con noi: informazioni di identità, dettagli di contatto, preferenze di viaggio, dati tecnici dal tuo dispositivo, richieste dei clienti, modelli di utilizzo, preferenze di marketing e informazioni finanziarie limitate. L'ATA non raccoglie né elabora altrimenti informazioni sulle carte di pagamento dei consumatori in relazione alle prenotazioni turistiche. Le informazioni non identificabili, aggregate o anonimizzate non rientrano nella definizione di Dati Personali secondo le leggi sulla protezione applicabili.",
  },
  {
    heading: "4. Dati Appartenenti a Minori",
    body: "Il nostro Sito e i nostri Servizi sono destinati a un pubblico generale e non sono diretti ai minori. Non raccogliamo consapevolmente Dati Personali dai minori senza il consenso appropriato di un genitore o tutore. Se veniamo a sapere di aver raccolto Dati Personali da un minore senza il consenso richiesto, adotteremo misure ragionevoli per eliminare tali informazioni.",
  },
  {
    heading: "5. Come Raccogliamo le Tue Informazioni",
    body: "Raccogliamo informazioni direttamente da te quando navighi sul Sito, compili un modulo, ti abboni alle comunicazioni o contatti il nostro team, così come automaticamente tramite cookie, strumenti di analisi e tecnologie simili mentre interagisci con le nostre proprietà digitali. Potremmo anche ricevere informazioni da partner di viaggio e turismo di fiducia che collaborano con l'ATA per supportare la tua visita.",
  },
  {
    heading: "6. Finalità e Base Legale del Trattamento dei Dati",
    body: "Trattiamo i Dati Personali per fornire e migliorare i nostri Servizi, rispondere alle richieste, personalizzare la tua esperienza del Sito, inviare le comunicazioni richieste e rispettare gli obblighi legali. A seconda del contesto, la nostra base legale include il tuo consenso, l'esecuzione di una richiesta che hai fatto e il legittimo interesse dell'ATA nel promuovere Aruba come destinazione.",
  },
  {
    heading: "7. Conservazione dei Dati",
    body: "Conserviamo i Dati Personali solo per il tempo ragionevolmente necessario a soddisfare le finalità descritte in questa informativa, inclusi gli obblighi legali, contabili o di rendicontazione. Quando i Dati Personali non sono più necessari, adottiamo misure ragionevoli per eliminarli, anonimizzarli o archiviarli in modo sicuro, in conformità con le nostre pratiche interne di conservazione.",
  },
  {
    heading: "8. Sicurezza dei Dati Personali",
    body: "L'ATA mantiene ragionevoli misure di salvaguardia amministrative, tecniche e fisiche progettate per proteggere i Dati Personali da perdita, uso improprio, accesso non autorizzato, divulgazione, alterazione e distruzione. Sebbene nessun sistema possa garantire una sicurezza assoluta, riesaminiamo regolarmente le nostre pratiche per ridurre i rischi e rispondiamo prontamente a qualsiasi incidente sospetto.",
  },
  {
    heading: "9. Condivisione dei Tuoi Dati Personali",
    body: "Potremmo condividere i Dati Personali con fornitori di servizi di fiducia che supportano il funzionamento del Sito e dei Servizi, con partner turistici e di viaggio coinvolti nell'evasione della tua richiesta, e dove richiesto dalla legge o per proteggere i diritti e la sicurezza dell'ATA e dei suoi visitatori. Non vendiamo Dati Personali a terzi per i loro scopi di marketing.",
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
              <ShieldCheck className="size-3.5" /> Legale
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Informativa Globale Sulla Privacy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Come l&apos;Autorità del Turismo di Aruba tratta i dati personali attraverso Aruba.com
              e le sue proprietà digitali.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Questo è un riepilogo a scopo dimostrativo. Per l&apos;informativa completa e
                legalmente vincolante, consulta l&apos;informativa sulla privacy ufficiale di Aruba.com.
              </p>
              <a
                href="https://www.aruba.com/us/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Informativa ufficiale <ExternalLink className="size-3.5" />
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
