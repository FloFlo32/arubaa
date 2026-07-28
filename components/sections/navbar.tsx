"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getPrimaryNav, getSecondaryNav, getBookNow } from "@/lib/site-nav";
import { getLocaleFromPathname, localizePath } from "@/lib/i18n";

function Logo({ href, className }: { href: string; className?: string }) {
  return (
    <Link href={href} className={cn("flex items-center gap-2 shrink-0 cursor-pointer", className)} aria-label="Jolly Pirates home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/jolly-pirates-logo.webp" alt="Jolly Pirates" className="h-12 w-auto" />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const primaryNav = getPrimaryNav(locale);
  const secondaryNav = getSecondaryNav(locale);
  const bookNow = getBookNow(locale);
  const homeHref = localizePath(locale, "/");
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mobileSection, setMobileSection] = React.useState<string | null>(null);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full pt-3">
      <div className="container-px mx-auto max-w-7xl">
        <nav
          className={cn(
            "flex h-16 items-center justify-between gap-3 rounded-full border border-white/10 bg-neutral-950/90 px-4 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 sm:px-5",
            scrolled ? "shadow-xl shadow-black/30" : ""
          )}
          onMouseLeave={scheduleClose}
        >
          <Logo href={homeHref} />

          <div className="hidden items-center lg:flex">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              const hasChildren = item.children.length > 0;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && openMenu(item.label)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white",
                      active ? "text-primary" : "text-neutral-300"
                    )}
                    aria-current={active ? "page" : undefined}
                    aria-expanded={hasChildren ? activeMenu === item.label : undefined}
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown className={cn("size-3.5 transition-transform duration-200", activeMenu === item.label && "rotate-180")} />
                    )}
                  </Link>

                  {hasChildren && (
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 transition-all duration-200",
                        activeMenu === item.label
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      )}
                      onMouseEnter={() => openMenu(item.label)}
                    >
                      <div className="rounded-2xl border border-border bg-card p-3 shadow-xl shadow-black/[0.08]">
                        <div className="grid grid-cols-2 gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setActiveMenu(null)}
                              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="mt-2 block cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                        >
                          View all {item.label} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden items-center gap-1 xl:flex">
            {secondaryNav.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "cursor-pointer rounded-full px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white",
                    active ? "text-primary" : "text-neutral-400"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={bookNow.href}>{bookNow.label}</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-neutral-300 hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 top-[5.5rem] z-40 overflow-y-auto bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              const hasChildren = item.children.length > 0;
              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block cursor-pointer rounded-md border-b border-border/60 px-3 py-3 text-base font-medium",
                      active ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label} className="border-b border-border/60 py-1">
                  <button
                    type="button"
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium",
                      active && "text-primary"
                    )}
                    onClick={() => setMobileSection((s) => (s === item.label ? null : item.label))}
                    aria-expanded={mobileSection === item.label}
                  >
                    {item.label}
                    <ChevronDown className={cn("size-4 transition-transform", mobileSection === item.label && "rotate-180")} />
                  </button>
                  {mobileSection === item.label && (
                    <div className="grid grid-cols-2 gap-1 pb-3 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {secondaryNav.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "cursor-pointer rounded-md px-3 py-3 text-base hover:bg-accent",
                    active ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href={`tel:${brand.contact.phone}`}
              className="mt-2 flex cursor-pointer items-center gap-2 rounded-md px-3 py-3 text-base text-primary"
            >
              <Phone className="size-4" /> +297 586 8107
            </a>
            <Button asChild className="mt-2">
              <Link href={bookNow.href} onClick={() => setOpen(false)}>
                {bookNow.label}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
