"use client";

import * as React from "react";
import { X } from "lucide-react";

const WIDGET_URL = "https://yetti.ai/widget/wk_sOvB-aQO0C6HwJgPfDybdg0irlC0_Jg5";

/**
 * Global Yetti booking modal. Any element on the page with a
 * [data-yetti-activity] attribute, or a link with "yetti-modal=true" in its
 * href, opens this modal on click, loading the Yetti widget for that
 * activity (or a general inquiry if the id is empty).
 */
export function YettiBookingWidget() {
  const [open, setOpen] = React.useState(false);
  const [src, setSrc] = React.useState(WIDGET_URL);

  const openModal = React.useCallback((activityId: string) => {
    const url = new URL(WIDGET_URL);
    if (activityId) url.searchParams.set("activity", activityId);
    url.searchParams.set("return_url", window.location.href);
    setSrc(url.toString());
    setOpen(true);
  }, []);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest<HTMLElement>("[data-yetti-activity]");
      if (btn) {
        e.preventDefault();
        openModal(btn.getAttribute("data-yetti-activity") || "");
        return;
      }
      const link = target?.closest<HTMLAnchorElement>('a[href*="yetti-modal=true"]');
      if (link) {
        e.preventDefault();
        try {
          const url = new URL(link.href, window.location.href);
          openModal(url.searchParams.get("activity") || "");
        } catch {
          window.location.href = link.href;
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openModal]);

  React.useEffect(() => {
    (window as unknown as { YettiBooking: { open: (activityId?: string) => void } }).YettiBooking = {
      open: (activityId = "") => openModal(activityId),
    };
  }, [openModal]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "yetti-close-modal") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("message", onMessage);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMessage);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Book a tour"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative flex h-[min(calc(100vh-32px),920px)] w-full max-w-[1180px] flex-col overflow-hidden rounded-2xl bg-background shadow-2xl"
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
        <iframe src={src} title="Book with Flagship Aruba" allow="payment" className="size-full flex-1 border-0" />
      </div>
    </div>
  );
}
