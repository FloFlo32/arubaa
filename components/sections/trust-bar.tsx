import { Star, Users, Utensils, Compass } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { type LocaleCode } from "@/lib/i18n";

const icons = [Star, Users, Utensils, Compass];

const copy: Record<LocaleCode, { value: string; label: string }[]> = {
  en: [
    { value: "5-Star", label: "Google rating from guests who sailed with us" },
    { value: "1,000+", label: "Happy guests welcomed aboard" },
    { value: "Open Bar", label: "Included on our afternoon and sunset cruises" },
    { value: "3", label: "Unique adventures, from morning snorkel to sunset sail" },
  ],
  es: [
    { value: "5 Estrellas", label: "Calificación en Google de huéspedes que navegaron con nosotros" },
    { value: "1,000+", label: "Huéspedes felices recibidos a bordo" },
    { value: "Barra Libre", label: "Incluida en nuestros cruceros de tarde y atardecer" },
    { value: "3", label: "Aventuras únicas, desde snorkel matutino hasta vela al atardecer" },
  ],
  nl: [
    { value: "5 Sterren", label: "Google-beoordeling van gasten die met ons voeren" },
    { value: "1.000+", label: "Tevreden gasten aan boord verwelkomd" },
    { value: "Open Bar", label: "Inbegrepen bij onze middag- en zonsondergangcruises" },
    { value: "3", label: "Unieke avonturen, van ochtendsnorkelen tot zonsondergangzeiltocht" },
  ],
  de: [
    { value: "5 Sterne", label: "Google-Bewertung von Gästen, die mit uns gesegelt sind" },
    { value: "1.000+", label: "Zufriedene Gäste an Bord begrüßt" },
    { value: "Offene Bar", label: "Inbegriffen bei unseren Nachmittags- und Sonnenuntergangsfahrten" },
    { value: "3", label: "Einzigartige Abenteuer, vom Morgenschnorcheln bis zur Sonnenuntergangsfahrt" },
  ],
  it: [
    { value: "5 Stelle", label: "Valutazione Google degli ospiti che hanno navigato con noi" },
    { value: "1.000+", label: "Ospiti felici accolti a bordo" },
    { value: "Open Bar", label: "Incluso nelle nostre crociere pomeridiane e al tramonto" },
    { value: "3", label: "Avventure uniche, dallo snorkeling mattutino alla vela al tramonto" },
  ],
  br: [
    { value: "5 Estrelas", label: "Avaliação no Google de hóspedes que navegaram conosco" },
    { value: "1.000+", label: "Hóspedes felizes recebidos a bordo" },
    { value: "Bar Aberto", label: "Incluído em nossos cruzeiros da tarde e do pôr do sol" },
    { value: "3", label: "Aventuras únicas, do snorkel matinal à vela ao pôr do sol" },
  ],
  se: [
    { value: "5 Stjärnor", label: "Google-betyg från gäster som seglat med oss" },
    { value: "1 000+", label: "Nöjda gäster välkomnade ombord" },
    { value: "Öppen Bar", label: "Ingår på våra eftermiddags- och solnedgångskryssningar" },
    { value: "3", label: "Unika äventyr, från morgonsnorkling till segling i solnedgången" },
  ],
};

export function TrustBar({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const stats = copy[locale].map((s, i) => ({ ...s, icon: icons[i] }));
  return (
    <section className="container-px mx-auto -mt-10 max-w-7xl relative z-10 sm:-mt-14">
      <RevealGroup className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-black/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4" stagger={0.06}>
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <div className="flex h-full items-start gap-4 rounded-2xl p-3 transition-colors duration-200 hover:bg-accent">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
                <s.icon className="size-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold leading-none">{s.value}</p>
                <p className="mt-1.5 text-sm text-pretty text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
