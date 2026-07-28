import Image from "next/image";
import { Reveal } from "@/components/magic/reveal";
import { Badge } from "@/components/ui/badge";

/**
 * PhotoHero — full-bleed photo hero with a dark scrim and centered copy.
 * Static-image sibling of HeroVideo, for pages that don't need a video loop.
 */
export function PhotoHero({
  eyebrow,
  title,
  body,
  src,
  alt,
}: {
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-center overflow-hidden pt-24 sm:pt-28">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        quality={85}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/75" />
      <div className="container-px relative z-10 mx-auto max-w-2xl py-20 text-center text-white">
        <Reveal>
          <Badge variant="accent" className="mx-auto border-white/25 bg-white/10 text-white">
            {eyebrow}
          </Badge>
          <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-white/85">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
