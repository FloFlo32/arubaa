"use client";

import * as React from "react";
import { X } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Global "Group or Private Charter" inquiry modal. Any element with a
 * [data-inquiry-form] attribute opens it on click. Submitting builds a
 * mailto: to the brand inbox, mirroring how the reference site's own
 * Private Parties nav item behaves (a real inquiry form, not the Yetti
 * booking widget).
 */
export function PrivateCharterInquiry() {
  const [open, setOpen] = React.useState(false);
  const [contactError, setContactError] = React.useState(false);

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest<HTMLElement>("[data-inquiry-form]");
      if (btn) {
        e.preventDefault();
        setContactError(false);
        setOpen(true);
      }
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const groupSize = String(fd.get("groupSize") || "").trim();
    const date = String(fd.get("date") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!email && !phone) {
      setContactError(true);
      return;
    }
    setContactError(false);

    const bodyLines = [
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
      `Group Size: ${groupSize}`,
      date ? `Preferred Date: ${date}` : null,
      message ? `\nMessage:\n${message}` : null,
    ].filter(Boolean);

    const subject = "Group / Private Charter Inquiry";
    const mailto = `mailto:${brand.social.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Plan your group or private charter"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-border bg-card p-7 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close inquiry form"
          className="absolute right-4 top-4 grid size-9 cursor-pointer place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        <h2 className="font-display text-2xl font-bold sm:text-3xl">Plan Your Group or Private Charter</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Tell us a bit about your group and we&apos;ll get back to you with options and pricing.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="inq-name">Name *</Label>
            <Input id="inq-name" name="name" type="text" required />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="inq-email">Email</Label>
              <Input id="inq-email" name="email" type="email" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="inq-phone">Phone / WhatsApp</Label>
              <Input id="inq-phone" name="phone" type="tel" />
            </div>
          </div>

          {contactError && (
            <p className="text-sm text-destructive">
              Please provide an email or phone number so we can reach you.
            </p>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="inq-group-size">Group Size *</Label>
              <Input id="inq-group-size" name="groupSize" type="number" min={1} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="inq-date">Preferred Date</Label>
              <Input id="inq-date" name="date" type="date" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="inq-message">Message</Label>
            <Textarea
              id="inq-message"
              name="message"
              rows={4}
              placeholder="Occasion, preferred tour, anything else we should know..."
            />
          </div>

          <Button type="submit" size="lg" className="w-full cursor-pointer rounded-full bg-ocean text-primary hover:bg-ocean/90">
            Send Inquiry
          </Button>
        </form>
      </div>
    </div>
  );
}
