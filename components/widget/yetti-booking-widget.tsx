"use client";

import * as React from "react";
import { X } from "lucide-react";

const WIDGET_URL = "https://yetti.ai/widget/wk_DdcsT0JJ6EcvTznAZJHjV6VxLjrQTs48";

/**
 * Global Yetti booking modal. Any element on the page with a
 * [data-yetti-activity] attribute opens this modal on click, loading the
 * Yetti widget for that activity (or a general inquiry if the id is empty).
 */
export function YettiBookingWidget() {
  const [open, setOpen] = React.useState(false);
  const [src, setSrc] = React.useState(WIDGET_URL);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-yetti-activity]");
      if (!target) return;
      e.preventDefault();
      const activityId = target.getAttribute("data-yetti-activity") || "";
      const params = new URLSearchParams();
      if (activityId) params.set("activity", activityId);
      params.set("return_url", window.location.href);
      setSrc(`${WIDGET_URL}?${params.toString()}`);
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-0 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book a tour"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative flex h-full w-full max-w-2xl flex-col overflow-hidden bg-background shadow-2xl sm:h-[85vh] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close booking window"
          className="absolute right-3 top-3 z-10 grid size-9 cursor-pointer place-items-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
        >
          <X className="size-5" />
        </button>
        <iframe src={src} title="Book with Flagship Aruba" className="size-full flex-1 border-0" />
      </div>
    </div>
  );
}
