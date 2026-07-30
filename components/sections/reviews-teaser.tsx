import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { type LocaleCode } from "@/lib/i18n";

const copy: Record<LocaleCode, { quote: string; name: string }> = {
  en: {
    quote:
      "Flagship Aruba delivers a memorable mix of adventure, snorkeling, and laid-back fun aboard charming schooners. Guests consistently praise the friendly, witty crew, open bar, and great music, contributing to a festive atmosphere especially during the rope-swing finale. The snorkeling spots, including the WWII shipwreck SS Antilla, Boca Catalina, and Malmok Reef, are beautiful and well-chosen.",
    name: "Lisa de Boer",
  },
  es: {
    quote:
      "Flagship Aruba ofrece una mezcla inolvidable de aventura, snorkel y diversión relajada a bordo de encantadoras goletas. Los huéspedes elogian constantemente a la tripulación amable e ingeniosa, la barra libre y la excelente música, que contribuyen a un ambiente festivo, especialmente durante el gran final del columpio de cuerda. Los sitios de snorkel, incluyendo el naufragio de la Segunda Guerra Mundial SS Antilla, Boca Catalina y Malmok Reef, son hermosos y muy bien elegidos.",
    name: "Lisa de Boer",
  },
  nl: {
    quote:
      "Flagship Aruba biedt een onvergetelijke mix van avontuur, snorkelen en ontspannen plezier aan boord van charmante schoeners. Gasten prijzen keer op keer de vriendelijke, geestige bemanning, de open bar en de geweldige muziek, wat bijdraagt aan een feestelijke sfeer, vooral tijdens de touwzwaai-finale. De snorkelplekken, waaronder het wrak van de SS Antilla uit de Tweede Wereldoorlog, Boca Catalina en Malmok Reef, zijn prachtig en goed gekozen.",
    name: "Lisa de Boer",
  },
  de: {
    quote:
      "Flagship Aruba bietet eine unvergessliche Mischung aus Abenteuer, Schnorcheln und entspanntem Spaß an Bord charmanter Schoner. Gäste loben immer wieder die freundliche, witzige Crew, die offene Bar und die tolle Musik, die zu einer festlichen Atmosphäre beitragen, besonders beim Seilschaukel-Finale. Die Schnorchelplätze, darunter das Wrack der SS Antilla aus dem Zweiten Weltkrieg, Boca Catalina und Malmok Reef, sind wunderschön und gut ausgewählt.",
    name: "Lisa de Boer",
  },
  it: {
    quote:
      "Flagship Aruba offre un mix memorabile di avventura, snorkeling e divertimento rilassato a bordo di affascinanti golette. Gli ospiti lodano costantemente l'equipaggio simpatico e spiritoso, l'open bar e l'ottima musica, che contribuiscono a un'atmosfera festosa, soprattutto durante il gran finale con il tuffo dalla corda. I siti per snorkeling, tra cui il relitto della Seconda Guerra Mondiale SS Antilla, Boca Catalina e Malmok Reef, sono bellissimi e ben scelti.",
    name: "Lisa de Boer",
  },
  br: {
    quote:
      "A Flagship Aruba oferece uma mistura memorável de aventura, mergulho com snorkel e diversão descontraída a bordo de charmosas escunas. Os hóspedes elogiam constantemente a tripulação simpática e espirituosa, o bar aberto e a ótima música, que contribuem para um clima festivo, especialmente no grande final do balanço na corda. Os locais de mergulho, incluindo o naufrágio da Segunda Guerra Mundial SS Antilla, Boca Catalina e Malmok Reef, são lindos e muito bem escolhidos.",
    name: "Lisa de Boer",
  },
  se: {
    quote:
      "Flagship Aruba erbjuder en minnesvärd blandning av äventyr, snorkling och avslappnad kul ombord på charmiga skonare. Gästerna berömmer ständigt den vänliga, kvicka besättningen, den öppna baren och den fantastiska musiken, vilket bidrar till en festlig stämning, särskilt under repgungningens final. Snorkelplatserna, inklusive vraket från andra världskriget SS Antilla, Boca Catalina och Malmok Reef, är vackra och väl utvalda.",
    name: "Lisa de Boer",
  },
};

export function ReviewsTeaser({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = copy[locale];
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="relative grid overflow-hidden rounded-3xl bg-primary text-primary-foreground sm:grid-cols-[1fr_1.2fr]">
        <GridPattern className="opacity-20" />
        <BorderBeam colorFrom="var(--color-ocean)" colorTo="var(--color-aurora-2)" />
        <div className="relative min-h-[220px] sm:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ingested/flagship-owner/ladyblack-jump.jpg"
            alt="A guest leaping off the Flagship Aruba schooner's rope swing into the turquoise water"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center gap-4 p-8 sm:p-12">
          <Quote className="size-8 text-ocean" />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-ocean text-ocean" />
            ))}
          </div>
          <p className="text-pretty text-lg font-medium sm:text-xl">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="text-sm font-semibold text-primary-foreground/80">{t.name}</p>
        </div>
      </Reveal>
    </section>
  );
}
