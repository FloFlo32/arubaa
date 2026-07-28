"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { InstagramIcon } from "@/components/icons";
import { getPrimaryNav, getLegalNav } from "@/lib/site-nav";
import { getLocaleFromPathname, localizePath, type LocaleCode } from "@/lib/i18n";

const socials = [{ href: brand.social.instagram, label: "Instagram", Icon: InstagramIcon }];

const tagline: Record<LocaleCode, string> = {
  en: "A traditional wooden schooner for snorkeling adventures and sunset cruises on Aruba's turquoise coast.",
  es: "Una goleta de madera tradicional para aventuras de snorkel y cruceros al atardecer en la costa turquesa de Aruba.",
  nl: "Een traditionele houten schoener voor snorkelavonturen en zonsondergangcruises langs Aruba's turquoise kust.",
  de: "Ein traditioneller Holzschoner für Schnorchelabenteuer und Sonnenuntergangsfahrten an Arubas türkisfarbener Küste.",
  it: "Una goletta di legno tradizionale per avventure di snorkeling e crociere al tramonto lungo la costa turchese di Aruba.",
  br: "Uma escuna de madeira tradicional para aventuras de snorkel e cruzeiros ao pôr do sol na costa turquesa de Aruba.",
  se: "En traditionell träskonert för snorkeläventyr och solnedgångskryssningar längs Arubas turkosa kust.",
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

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const primaryNav = getPrimaryNav(locale);
  const legalNav = getLegalNav(locale);
  const homeHref = localizePath(locale, "/");

  return (
    <footer className="mt-auto border-t border-white/10 bg-neutral-950 text-neutral-300">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href={homeHref} aria-label="Flagship Aruba home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/flagship-aruba-logo.webp" alt="Flagship Aruba" className="h-14 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">{tagline[locale]}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 cursor-pointer place-items-center rounded-full border border-white/15 text-neutral-400 transition-colors hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
                >
                  <s.Icon className="size-4" />
                </a>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              <a href={`tel:${brand.contact.phone}`} className="flex cursor-pointer items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white">
                <Phone className="size-4 text-primary" /> +297 567 7637
              </a>
              <a href={`mailto:${brand.social.email}`} className="flex cursor-pointer items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white">
                <Mail className="size-4 text-primary" /> {brand.social.email}
              </a>
            </div>
          </div>

          {primaryNav.map((section) => (
            <div key={section.href}>
              <Link href={section.href} className="cursor-pointer font-display text-sm font-semibold text-white transition-colors hover:text-primary">
                {section.label}
              </Link>
              <ul className="mt-4 space-y-2.5">
                {section.children.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="cursor-pointer text-sm text-neutral-400 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-neutral-500">&copy; {rights[locale]}</p>
          <div className="flex gap-5">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
