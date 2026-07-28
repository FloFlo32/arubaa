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
  en: "Traditional schooner sailboats, epic snorkeling and sunset cruises on Aruba's turquoise coast.",
  es: "Veleros goleta tradicionales, snorkel épico y cruceros al atardecer en la costa turquesa de Aruba.",
  nl: "Traditionele schoenerzeilboten, geweldig snorkelen en zonsondergangcruises langs Aruba's turquoise kust.",
  de: "Traditionelle Schoner, fantastisches Schnorcheln und Sonnenuntergangsfahrten an Arubas türkisfarbener Küste.",
  it: "Golette tradizionali, snorkeling epico e crociere al tramonto lungo la costa turchese di Aruba.",
  br: "Escunas tradicionais, mergulho com snorkel incrível e cruzeiros ao pôr do sol na costa turquesa de Aruba.",
  se: "Traditionella skonertsegelbåtar, fantastisk snorkling och solnedgångskryssningar längs Arubas turkosa kust.",
};

const rights: Record<LocaleCode, string> = {
  en: "Jolly Pirates Aruba. All rights reserved.",
  es: "Jolly Pirates Aruba. Todos los derechos reservados.",
  nl: "Jolly Pirates Aruba. Alle rechten voorbehouden.",
  de: "Jolly Pirates Aruba. Alle Rechte vorbehalten.",
  it: "Jolly Pirates Aruba. Tutti i diritti riservati.",
  br: "Jolly Pirates Aruba. Todos os direitos reservados.",
  se: "Jolly Pirates Aruba. Alla rättigheter förbehållna.",
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
            <Link href={homeHref} aria-label="Jolly Pirates home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/jolly-pirates-logo.webp" alt="Jolly Pirates" className="h-16 w-auto" />
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
                <Phone className="size-4 text-primary" /> +297 586 8107
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
