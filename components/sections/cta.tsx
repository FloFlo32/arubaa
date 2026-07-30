import { Check } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { type LocaleCode } from "@/lib/i18n";

const copy: Record<LocaleCode, { title: string; body: string; perks: string[]; button: string }> = {
  en: {
    title: "Group or Private: We Sail for You",
    body: "Join one of our legendary group cruises or book the entire boat for your own private charter. Perfect for birthdays, anniversaries, corporate events, or any occasion worth celebrating at sea.",
    perks: [
      "Private charters available for any group size",
      "Custom itineraries & open bar included",
      "Premium snorkeling & rope swing adventures",
    ],
    button: "Group Inquiry",
  },
  es: {
    title: "Grupal O Privado: Navegamos Para Ti",
    body: "Únete a uno de nuestros legendarios cruceros grupales o reserva el barco completo para tu propio chárter privado. Perfecto para cumpleaños, aniversarios, eventos corporativos o cualquier ocasión que merezca celebrarse en el mar.",
    perks: [
      "Chárteres privados disponibles para cualquier tamaño de grupo",
      "Itinerarios personalizados y barra libre incluida",
      "Aventuras de snorkel premium y columpio de cuerda",
    ],
    button: "Consulta Grupal",
  },
  nl: {
    title: "Groep Of Privé: Wij Varen Voor Jou",
    body: "Sluit je aan bij een van onze legendarische groepscruises of boek de hele boot voor je eigen privécharter. Perfect voor verjaardagen, jubilea, bedrijfsevenementen of elke gelegenheid die het waard is om op zee te vieren.",
    perks: [
      "Privécharters beschikbaar voor elke groepsgrootte",
      "Aangepaste routes en open bar inbegrepen",
      "Eersteklas snorkel- en touwzwaai-avonturen",
    ],
    button: "Groepsaanvraag",
  },
  de: {
    title: "Gruppe Oder Privat: Wir Segeln Für Sie",
    body: "Schließen Sie sich einer unserer legendären Gruppenfahrten an oder buchen Sie das gesamte Boot für Ihre eigene private Charter. Perfekt für Geburtstage, Jubiläen, Firmenevents oder jeden Anlass, der es wert ist, auf See gefeiert zu werden.",
    perks: [
      "Private Charter für jede Gruppengröße verfügbar",
      "Individuelle Routen und offene Bar inklusive",
      "Erstklassiges Schnorcheln und Seilschaukel-Abenteuer",
    ],
    button: "Gruppenanfrage",
  },
  it: {
    title: "Gruppo O Privato: Navighiamo Per Te",
    body: "Unisciti a una delle nostre leggendarie crociere di gruppo o prenota l'intera barca per il tuo charter privato. Perfetto per compleanni, anniversari, eventi aziendali o qualsiasi occasione da festeggiare in mare.",
    perks: [
      "Charter privati disponibili per gruppi di qualsiasi dimensione",
      "Itinerari personalizzati e open bar incluso",
      "Avventure di snorkeling premium e tuffo dalla corda",
    ],
    button: "Richiesta Di Gruppo",
  },
  br: {
    title: "Em Grupo Ou Privado: Navegamos Por Você",
    body: "Junte-se a um dos nossos lendários cruzeiros em grupo ou reserve o barco inteiro para o seu próprio charter privado. Perfeito para aniversários, bodas, eventos corporativos ou qualquer ocasião que mereça ser comemorada no mar.",
    perks: [
      "Charters privados disponíveis para grupos de qualquer tamanho",
      "Roteiros personalizados e bar aberto incluído",
      "Aventuras premium de snorkel e balanço na corda",
    ],
    button: "Consulta Para Grupos",
  },
  se: {
    title: "Grupp Eller Privat: Vi Seglar För Dig",
    body: "Anslut dig till en av våra legendariska gruppkryssningar eller boka hela båten för din egen privata charter. Perfekt för födelsedagar, jubileer, företagsevenemang eller alla tillfällen värda att fira till havs.",
    perks: [
      "Privata charter tillgängliga för alla gruppstorlekar",
      "Skräddarsydda rutter och öppen bar ingår",
      "Förstklassig snorkling och repgungningsäventyr",
    ],
    button: "Gruppförfrågan",
  },
};

export function CTA({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = copy[locale];
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl px-6 py-24 text-center sm:px-12 sm:py-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagshiparubaa/guest-e.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/50" />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-xl text-balance text-4xl font-bold text-primary-foreground sm:text-5xl">
              {t.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-primary-foreground/85">
              {t.body}
            </p>
            <ul className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-left text-sm text-primary-foreground/85">
              {t.perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <Check className="size-5 shrink-0 text-ocean" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex justify-center">
              <BookNowButton label={t.button} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
