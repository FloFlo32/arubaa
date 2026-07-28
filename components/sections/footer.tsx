"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/brand.config";
import { XIcon, PinterestIcon, TikTokIcon, TripAdvisorIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/icons";
import { getPrimaryNav, getLegalNav } from "@/lib/site-nav";
import { getLocaleFromPathname, localizePath, type LocaleCode } from "@/lib/i18n";

const socials = [
  { href: brand.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: brand.social.x, label: "X", Icon: XIcon },
  { href: brand.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: brand.social.pinterest, label: "Pinterest", Icon: PinterestIcon },
  { href: brand.social.youtube, label: "YouTube", Icon: YouTubeIcon },
  { href: brand.social.tripadvisor, label: "TripAdvisor", Icon: TripAdvisorIcon },
  { href: brand.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

const rights: Record<LocaleCode, string> = {
  en: "Aruba Tourism Authority.",
  es: "Aruba Tourism Authority.",
  nl: "Aruba Tourism Authority.",
  de: "Aruba Tourism Authority.",
  it: "Aruba Tourism Authority.",
  br: "Aruba Tourism Authority.",
  se: "Aruba Tourism Authority.",
};

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const primaryNav = getPrimaryNav(locale);
  const legalNav = getLegalNav(locale);
  const homeHref = localizePath(locale, "/");

  return (
    <footer className="mt-auto border-t border-white/10 bg-neutral-950 text-neutral-300">
      <div className="container-px mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-5 py-7">
        <Link href={homeHref} aria-label="Aruba home" className="flex shrink-0 cursor-pointer items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/aruba-logo.svg" alt="Aruba" className="h-8 w-auto" />
          <span className="hidden text-sm text-neutral-500 sm:inline">&copy; {rights[locale]}</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="cursor-pointer text-neutral-300 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-white/15" aria-hidden="true" />
          {legalNav.map((l) => (
            <Link key={l.href} href={l.href} className="cursor-pointer text-neutral-500 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid size-8 cursor-pointer place-items-center rounded-full border border-white/15 text-neutral-400 transition-colors hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
            >
              <s.Icon className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
