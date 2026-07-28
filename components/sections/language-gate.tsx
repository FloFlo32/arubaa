"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { US, GB, ES, NL, DE, IT, BR, SE } from "country-flag-icons/react/3x2";
import { HeroVideo } from "@/components/magic/hero-video";
import { cn } from "@/lib/utils";
import { type LocaleCode } from "@/lib/i18n";

const STORAGE_KEY = "aruba-language";

// "uk" reuses the "en" (English) content, same as aruba.com's UK site.
const languages: { code: string; label: string; Flag: typeof US; locale: LocaleCode }[] = [
  { code: "us", label: "English (US)", Flag: US, locale: "en" },
  { code: "uk", label: "English (UK)", Flag: GB, locale: "en" },
  { code: "es", label: "Español", Flag: ES, locale: "es" },
  { code: "nl", label: "Nederlands", Flag: NL, locale: "nl" },
  { code: "de", label: "Deutsch", Flag: DE, locale: "de" },
  { code: "it", label: "Italiano", Flag: IT, locale: "it" },
  { code: "br", label: "Português", Flag: BR, locale: "br" },
  { code: "se", label: "Svenska", Flag: SE, locale: "se" },
];

/**
 * LanguageGate — full-screen entry overlay shown once per visitor, mirroring
 * the language-selection splash that greets first-time visitors on
 * aruba.com. Choosing any language dismisses the gate and remembers the
 * choice in localStorage so returning visitors go straight to the site.
 */
export function LanguageGate() {
  const router = useRouter();
  const [visible, setVisible] = React.useState(true);
  const [leaving, setLeaving] = React.useState(false);

  React.useEffect(() => {
    // One-time sync with localStorage (browser-only): must run after mount to
    // avoid a server/client hydration mismatch, so the setState here is safe.
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (localStorage.getItem(STORAGE_KEY)) setVisible(false);
    } catch {}
  }, []);

  const choose = (code: string, locale: LocaleCode) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {}
    setLeaving(true);
    setTimeout(() => setVisible(false), 350);
    router.push(locale === "en" ? "/" : `/${locale}`);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-300 motion-reduce:transition-none",
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your language"
    >
      <HeroVideo
        src="https://aruba.bynder.com/asset/bf675846-d8a4-4914-ad0a-75c106743d6b/mp4/01_ArubaHomepage_BGvideo_16x9_main.mp4"
        poster="/ingested/arubaa/img-040.webp"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

      <div className="container-px relative z-10 w-full max-w-lg">
        <div className="rounded-3xl border border-white/20 bg-primary/25 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-10">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-black p-2 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aruba-logo.svg" alt="Aruba" className="h-8 w-auto" />
          </div>

          <h1 className="mt-6 text-balance text-3xl font-bold text-white sm:text-4xl">
            Bonbini
          </h1>
          <p className="mt-2 text-sm text-white/80">
            Welcome to One Happy Island. Choose your language to continue.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2.5">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => choose(l.code, l.locale)}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-3 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-white/40 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <l.Flag className="h-3.5 w-5 shrink-0 rounded-[2px]" aria-hidden="true" />
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
