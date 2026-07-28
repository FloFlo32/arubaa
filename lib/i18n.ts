/**
 * Site locales. "en" is the default, unprefixed locale (existing routes at
 * app/<path>/page.tsx). Every other locale lives under app/<code>/<path>/page.tsx
 * and mirrors the same route structure with translated content.
 *
 * "uk" reuses the English ("en") content verbatim (aruba.com's UK site is also
 * English), so it is not a separate content locale, just a different label in
 * the language picker that also points at "/".
 */
export type LocaleCode = "en" | "es" | "nl" | "de" | "it" | "br" | "se";

export const defaultLocale: LocaleCode = "en";

export const locales: { code: LocaleCode; label: string; flag: string }[] = [
  { code: "en", label: "English (US)", flag: "US" },
  { code: "es", label: "Español", flag: "ES" },
  { code: "nl", label: "Nederlands", flag: "NL" },
  { code: "de", label: "Deutsch", flag: "DE" },
  { code: "it", label: "Italiano", flag: "IT" },
  { code: "br", label: "Português", flag: "BR" },
  { code: "se", label: "Svenska", flag: "SE" },
];

/** Prefix a path with a locale segment. "en" (default) stays unprefixed. */
export function localizePath(locale: LocaleCode, path: string): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}

/** Read the current locale from a pathname like "/es/why-aruba". */
export function getLocaleFromPathname(pathname: string): LocaleCode {
  const seg = pathname.split("/")[1];
  return (locales.some((l) => l.code === seg) ? (seg as LocaleCode) : defaultLocale);
}

/** Strip a leading locale segment, returning the locale-agnostic path. */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (locales.some((l) => l.code === seg)) {
    const rest = pathname.slice(1 + seg.length);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}
