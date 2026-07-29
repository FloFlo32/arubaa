/**
 * Brand glyphs. Lucide removed GitHub/X icons over trademark concerns, so we
 * ship small inline SVGs here. They inherit currentColor + className sizing.
 */
import { cn } from "@/lib/utils";

export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("size-4", className)}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("size-4", className)}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn("size-4", className)}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn("size-4", className)}>
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.24 2.43.41.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.46.35 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.24 1.97-.41 2.43-.24.61-.52 1.05-.98 1.51-.46.46-.9.74-1.51.98-.46.17-1.26.35-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.24-2.43-.41a4.06 4.06 0 0 1-1.51-.98 4.06 4.06 0 0 1-.98-1.51c-.17-.46-.35-1.26-.41-2.43-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.17.24-1.97.41-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.17 1.26-.35 2.43-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.8 5.8 0 0 0-2.12 1.38A5.8 5.8 0 0 0 .64 4.13C.34 4.9.14 5.77.08 7.05.02 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12a5.8 5.8 0 0 0 2.12 1.38c.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.8 5.8 0 0 0 2.12-1.38 5.8 5.8 0 0 0 1.38-2.12c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.8 5.8 0 0 0-1.38-2.12A5.8 5.8 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-9.99a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88Z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn("size-4", className)}>
      <path d="M23.5 6.19a2.98 2.98 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.59a2.98 2.98 0 0 0-2.1 2.1A31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81c.24 1 1.06 1.76 2.1 2.1 1.9.59 9.4.59 9.4.59s7.5 0 9.4-.59a2.98 2.98 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.24 3.6Z" />
    </svg>
  );
}

export function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn("size-4", className)}>
      <path d="M12.017 0C5.396 0 0 5.373 0 12s5.396 12 12.017 12c6.624 0 12-5.373 12-12S18.641 0 12.017 0Zm.24 18.611c-.617 0-1.204-.109-1.751-.32.235-.383.583-1.003.716-1.508l.36-1.375c.19.362.741.67 1.328.67 1.75 0 3.011-1.61 3.011-3.608 0-1.917-1.564-3.35-3.567-3.35-2.5 0-3.822 1.677-3.822 3.505 0 .85.452 1.906 1.176 2.243.11.052.169.03.194-.078l.163-.663c.014-.058.008-.108-.038-.165-.226-.274-.407-.78-.407-1.253 0-1.21.917-2.383 2.478-2.383 1.35 0 2.293.92 2.293 2.235 0 1.487-.75 2.517-1.727 2.517-.539 0-.942-.446-.813-.992.155-.653.455-1.357.455-1.828 0-.422-.226-.774-.696-.774-.552 0-.996.571-.996 1.335 0 .488.165.818.165.818s-.549 2.322-.649 2.744c-.191.804-.115 1.735-.06 2.19C6.61 16.858 5.02 14.63 5.02 12.01c0-3.847 2.796-6.965 6.24-6.965 3.443 0 6.096 2.63 6.096 6.02 0 3.612-2.32 6.156-5.24 6.156-.507 0-1.023-.15-1.316-.396l-.393 1.499c-.14.55-.407 1.145-.626 1.535a10.87 10.87 0 0 0 2.476.28c6.62 0 12.017-5.373 12.017-12S18.877.762 12.017.762" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn("size-4", className)}>
      <path d="M16.6 0h-3.3v16.1c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1c.3 0 .6 0 .9.1V9.6a6.4 6.4 0 0 0-.9-.1C6.5 9.5 3.6 12.4 3.6 16s2.9 6.5 6.5 6.5S16.6 19.6 16.6 16V8.1c1.3.9 2.9 1.5 4.6 1.5V6.2c-2.6 0-4.6-2.1-4.6-4.6V0Z" />
    </svg>
  );
}

export function TripAdvisorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn("size-4", className)}>
      <path d="M12 6.6c-2.3-1.6-5.2-2.5-8.4-2.5-1.2 0-2.3.1-3.4.4C1.5 5.6 2.6 7 3 8.6c-1.6 1-2.6 2.7-2.6 4.7 0 3.1 2.5 5.6 5.6 5.6 1.8 0 3.4-.9 4.4-2.2l1.6 2.4 1.6-2.4c1 1.3 2.6 2.2 4.4 2.2 3.1 0 5.6-2.5 5.6-5.6 0-2-1-3.7-2.6-4.7.4-1.6 1.5-3 3.8-4.5-1.1-.3-2.2-.4-3.4-.4-3.2 0-6.1.9-8.4 2.5Zm-6 4.2c1.9 0 3.5 1.6 3.5 3.5S7.9 17.8 6 17.8s-3.5-1.6-3.5-3.5S4.1 10.8 6 10.8Zm12 0c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5ZM6 12.6c-1 0-1.7.8-1.7 1.7S5 16 6 16s1.7-.8 1.7-1.7-.7-1.7-1.7-1.7Zm12 0c-1 0-1.7.8-1.7 1.7S17 16 18 16s1.7-.8 1.7-1.7-.7-1.7-1.7-1.7Z" />
    </svg>
  );
}

/** Simple single-sail dinghy mark, matching Flagship Aruba's own logo icon
 * (mast + flag, one sail, a hull, waves below). Used in the navbar and footer. */
export function ShipMarkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 34" fill="none" aria-hidden className={cn("h-8 w-auto shrink-0", className)}>
      <g fill="currentColor">
        <path d="M20 3 L27 5.5 L20 8 Z" />
        <path d="M20 8 L20 19 L7 20 Z" />
        <path d="M4 20 L36 20 L31 26 Q20 29 9 26 Z" />
      </g>
      <line x1="20" y1="3" x2="20" y2="20" stroke="currentColor" strokeWidth="1" />
      <path d="M2 29 Q20 25 38 29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 32.5 Q20 29.2 35 32.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Circular crest version of the ship mark: a rope-bordered seal with the
 * schooner silhouette, echoing Flagship Aruba's own logo badge. Used
 * anywhere the mark stands alone (language gate, footer flourish). */
export function ShipSealIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={cn("h-16 w-16 shrink-0", className)}>
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2.6 3.4" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <g fill="currentColor">
        <path d="M40 30 L40 56 L58 56 Z" />
        <path d="M53 38 L45 56 L66 56 Z" />
        <path d="M25 56 L72 56 L76 54.5 L67 62.5 Q50 66.5 36 62.5 Z" />
      </g>
      <line x1="40" y1="30" x2="67" y2="55" stroke="currentColor" strokeWidth="0.6" />
      <path d="M22 63 Q50 58 78 63" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("size-4", className)}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
