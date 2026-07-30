import { Star, Users, CheckCircle2, Clock } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { type LocaleCode } from "@/lib/i18n";

const icons = [Star, Users, CheckCircle2, Clock];

const copy: Record<LocaleCode, string[]> = {
  en: ["5-Star Google Rating", "1,000+ Happy Guests", "Open Bar Included", "3 Unique Adventures"],
  es: ["Calificación 5 Estrellas En Google", "1,000+ Huéspedes Felices", "Barra Libre Incluida", "3 Aventuras Únicas"],
  nl: ["5 Sterren Google-Beoordeling", "1.000+ Tevreden Gasten", "Open Bar Inbegrepen", "3 Unieke Avonturen"],
  de: ["5-Sterne Google-Bewertung", "1.000+ Zufriedene Gäste", "Offene Bar Inklusive", "3 Einzigartige Abenteuer"],
  it: ["Valutazione Google 5 Stelle", "1.000+ Ospiti Felici", "Open Bar Incluso", "3 Avventure Uniche"],
  br: ["Avaliação 5 Estrelas No Google", "1.000+ Hóspedes Felizes", "Bar Aberto Incluído", "3 Aventuras Únicas"],
  se: ["5-Stjärnigt Google-Betyg", "1 000+ Nöjda Gäster", "Öppen Bar Ingår", "3 Unika Äventyr"],
};

export function TrustBar({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const stats = copy[locale].map((label, i) => ({ label, icon: icons[i] }));
  return (
    <section className="container-px mx-auto -mt-10 max-w-7xl relative z-10 sm:-mt-14">
      <RevealGroup className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-black/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4" stagger={0.06}>
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <div className="flex h-full items-center gap-3 rounded-2xl p-3 transition-colors duration-200 hover:bg-accent">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ocean/15 text-ocean ring-1 ring-ocean/20">
                <s.icon className="size-5" />
              </span>
              <p className="font-display text-base font-bold text-primary">{s.label}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
