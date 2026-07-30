"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { getQuickLinks, getLegalNav } from "@/lib/site-nav";
import { getLocaleFromPathname, localizePath, type LocaleCode } from "@/lib/i18n";

const tagline: Record<LocaleCode, string> = {
  en: "Sun, sea & adventure, Aruba's most loved boat experience awaits.",
  es: "Sol, mar y aventura, la experiencia en barco más querida de Aruba te espera.",
  nl: "Zon, zee en avontuur, Aruba's meest geliefde bootervaring wacht op je.",
  de: "Sonne, Meer und Abenteuer, Arubas beliebtestes Bootserlebnis wartet auf Sie.",
  it: "Sole, mare e avventura, l'esperienza in barca più amata di Aruba ti aspetta.",
  br: "Sol, mar e aventura, a experiência de barco mais amada de Aruba te espera.",
  se: "Sol, hav och äventyr, Arubas mest älskade båtupplevelse väntar på dig.",
};

const rights: Record<LocaleCode, string> = {
  en: "Flagship Aruba. All rights reserved.",
  es: "Flagship Aruba. Todos los derechos reservados.",
  nl: "Flagship Aruba. Alle rechten voorbehouden.",
  de: "Flagship Aruba. Alle Rechte vorbehalten.",
  it: "Flagship Aruba. Tutti i diritti riservati.",
  br: "Flagship Aruba. Todos os direitos reservados.",
  se: "Flagship Aruba. Alla rättigheter förbehållna.",
};

const quickLinksHeading: Record<LocaleCode, string> = {
  en: "Quick Links", es: "Enlaces Rápidos", nl: "Snelle Links", de: "Schnelllinks", it: "Link Rapidi", br: "Links Rápidos", se: "Snabblänkar",
};
const contactHeading: Record<LocaleCode, string> = {
  en: "Get in Touch", es: "Ponte En Contacto", nl: "Neem Contact Op", de: "Kontaktieren Sie Uns", it: "Contattaci", br: "Entre Em Contato", se: "Kontakta Oss",
};

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const quickLinks = getQuickLinks(locale);
  const legalNav = getLegalNav(locale);
  const homeHref = localizePath(locale, "/");

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href={homeHref} className="flex items-center gap-2 cursor-pointer" aria-label="Flagship Aruba home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/flagship-aruba-logo.webp" alt="Flagship Aruba" className="h-11 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">{tagline[locale]}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ocean">{quickLinksHeading[locale]}</h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="cursor-pointer text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-ocean">{contactHeading[locale]}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            <li>
              <a href={`tel:${brand.contact.phone}`} className="flex cursor-pointer items-center gap-2 transition-colors hover:text-primary-foreground">
                <Phone className="size-4 shrink-0 text-ocean" /> +297 566 2568
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.social.email}`} className="flex cursor-pointer items-center gap-2 transition-colors hover:text-primary-foreground">
                <Mail className="size-4 shrink-0 text-ocean" /> {brand.social.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-ocean" /> Aruba, Caribbean
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/70">&copy; {new Date().getFullYear()} {rights[locale]}</p>
          <div className="flex gap-5">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="cursor-pointer text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
