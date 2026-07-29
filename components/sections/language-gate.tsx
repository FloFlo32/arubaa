"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { US, GB, ES, NL, DE, IT, BR, SE } from "country-flag-icons/react/3x2";
import { cn } from "@/lib/utils";
import { ShipSealIcon } from "@/components/icons";
import { type LocaleCode } from "@/lib/i18n";

const STORAGE_KEY = "flagship-aruba-language";

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
      id="language-gate"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-300 motion-reduce:transition-none",
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your language"
    >
      {/*
        Hides the gate BEFORE first paint for returning visitors, so there is
        no flash of the language picker before it disappears. This inline
        script runs as the browser parses this HTML, well before React
        hydrates and the useEffect below would otherwise fire. Same
        anti-flash technique as components/theme-provider.tsx's ThemeScript.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `try{if(localStorage.getItem('${STORAGE_KEY}')){var g=document.getElementById('language-gate');if(g)g.style.display='none';}}catch(e){}`,
        }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/posters/hero-guests-waving.jpg"
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/videos/hero-guests-waving.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

      <div className="container-px relative z-10 w-full max-w-lg">
        <div className="rounded-3xl border border-white/20 bg-primary/25 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-10">
          <ShipSealIcon className="mx-auto h-20 w-20 text-white drop-shadow-lg" />

          <h1 className="mt-6 text-balance text-3xl font-bold text-white sm:text-4xl">
            Ahoy!
          </h1>
          <p className="mt-2 text-sm text-white/80">
            Welcome aboard Flagship Aruba. Choose your language to continue.
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
