import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { XIcon, PinterestIcon, TikTokIcon, TripAdvisorIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/icons";
import { primaryNav, secondaryNav, legalNav, bookNow } from "@/lib/site-nav";

const socials = [
  { href: brand.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: brand.social.x, label: "X", Icon: XIcon },
  { href: brand.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: brand.social.pinterest, label: "Pinterest", Icon: PinterestIcon },
  { href: brand.social.youtube, label: "YouTube", Icon: YouTubeIcon },
  { href: brand.social.tripadvisor, label: "TripAdvisor", Icon: TripAdvisorIcon },
  { href: brand.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-neutral-950 text-neutral-300">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/aruba-logo.svg" alt="Aruba" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              One happy island in the southern Caribbean. Find out everything you need to know
              about Aruba right here.
            </p>
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
                <Phone className="size-4 text-primary" /> 1-800-862-7822
              </a>
              <a href={`mailto:${brand.social.email}`} className="flex cursor-pointer items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white">
                <Mail className="size-4 text-primary" /> {brand.social.email}
              </a>
            </div>
          </div>

          {primaryNav.map((section) => (
            <div key={section.label}>
              <Link href={section.href} className="cursor-pointer font-display text-sm font-semibold text-white transition-colors hover:text-primary">
                {section.label}
              </Link>
              <ul className="mt-4 space-y-2.5">
                {section.children.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="cursor-pointer text-sm text-neutral-400 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span className="font-display text-sm font-semibold text-white">More</span>
            <ul className="mt-4 space-y-2.5">
              {secondaryNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="cursor-pointer text-sm text-neutral-400 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={bookNow.href} className="cursor-pointer text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  {bookNow.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-neutral-500">
            &copy; Aruba Tourism Authority. All rights reserved.
          </p>
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
