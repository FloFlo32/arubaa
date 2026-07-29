"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon, ShipMarkIcon } from "@/components/icons";
import { getFooterMenu, getFooterInfo, getLegalNav } from "@/lib/site-nav";
import { getLocaleFromPathname, localizePath, type LocaleCode } from "@/lib/i18n";

const socials = [
  { href: brand.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: brand.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: brand.social.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: `https://wa.me/${brand.contact.whatsapp}`, label: "WhatsApp", Icon: WhatsAppIcon },
].filter((s) => s.href);

const partners = [
  { href: "https://www.viator.com", label: "Viator", src: "/partners/viator.svg" },
  { href: "https://www.tripadvisor.com", label: "TripAdvisor", src: "/partners/tripadvisor.svg" },
  { href: "https://www.getyourguide.com", label: "GetYourGuide", src: "/partners/getyourguide.svg" },
];

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

const menuHeading: Record<LocaleCode, string> = {
  en: "Menu", es: "Menú", nl: "Menu", de: "Menü", it: "Menu", br: "Menu", se: "Meny",
};
const infoHeading: Record<LocaleCode, string> = {
  en: "Information", es: "Información", nl: "Informatie", de: "Informationen", it: "Informazioni", br: "Informações", se: "Information",
};
const connectHeading: Record<LocaleCode, string> = {
  en: "Follow Us", es: "Síguenos", nl: "Volg Ons", de: "Folgen Sie Uns", it: "Seguici", br: "Siga-nos", se: "Följ Oss",
};
const workWithHeading: Record<LocaleCode, string> = {
  en: "We Work With", es: "Trabajamos Con", nl: "Wij Werken Samen Met", de: "Wir Arbeiten Mit", it: "Lavoriamo Con", br: "Trabalhamos Com", se: "Vi Samarbetar Med",
};

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const menu = getFooterMenu(locale);
  const info = getFooterInfo(locale);
  const legalNav = getLegalNav(locale);
  const homeHref = localizePath(locale, "/");

  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href={homeHref} className="flex items-center gap-2 cursor-pointer" aria-label="Flagship Aruba home">
            <ShipMarkIcon className="h-8 text-ocean" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/flagship-aruba-logo.webp" alt="Flagship Aruba" className="h-11 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">{tagline[locale]}</p>
          <div className="mt-5 space-y-2.5 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0 text-ocean" /> All cruises depart from MooMba Beach Bar, Palm Beach.
            </p>
            <a href={`tel:${brand.contact.phone}`} className="flex cursor-pointer items-center gap-2 transition-colors hover:text-primary-foreground">
              <Phone className="size-4 shrink-0 text-ocean" /> +297 567 7637
            </a>
            <a href={`mailto:${brand.social.email}`} className="flex cursor-pointer items-center gap-2 transition-colors hover:text-primary-foreground">
              <Mail className="size-4 shrink-0 text-ocean" /> {brand.social.email}
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide">{menuHeading[locale]}</h4>
          <ul className="mt-4 space-y-2.5">
            {menu.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="cursor-pointer text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide">{infoHeading[locale]}</h4>
          <ul className="mt-4 space-y-2.5">
            {info.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="cursor-pointer text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide">{connectHeading[locale]}</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-9 cursor-pointer place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-ocean/60 hover:bg-ocean/15 hover:text-ocean"
              >
                <s.Icon className="size-4" />
              </a>
            ))}
          </div>
          <Link
            href={localizePath(locale, "/book-now")}
            className="mt-5 inline-flex cursor-pointer items-center justify-center rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-ocean-foreground transition-transform duration-200 hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-8">
        <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
            {workWithHeading[locale]}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.label}
                className="cursor-pointer opacity-70 brightness-0 invert transition-opacity hover:opacity-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.label} className="h-5 w-auto sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-primary-foreground/70">&copy; {rights[locale]}</p>
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
