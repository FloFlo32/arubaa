import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";
import { type LocaleCode } from "@/lib/i18n";
import { contactContent } from "./contact.content";

export function ContactPage({ locale = "en" as LocaleCode }: { locale?: LocaleCode }) {
  const t = contactContent[locale];

  const channels = [
    {
      icon: Phone,
      label: t.channelLabels.call,
      value: "+297 566 2568",
      href: `tel:${brand.contact.phone}`,
    },
    {
      icon: MessageCircle,
      label: t.channelLabels.whatsapp,
      value: t.whatsappValue,
      href: `https://wa.me/${brand.contact.whatsapp}`,
    },
    {
      icon: Mail,
      label: t.channelLabels.email,
      value: brand.social.email,
      href: `mailto:${brand.social.email}`,
    },
    {
      icon: MapPin,
      label: t.channelLabels.find,
      value: "MooMba Beach Bar, Palm Beach",
      href: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow={t.heroEyebrow}
          title={t.heroTitle}
          body={t.heroBody}
          src="/ingested/flagshiparubaa/guest-d.webp"
          alt="Guests toasting with drinks aboard the schooner"
        />

        <section className="container-px mx-auto max-w-4xl py-16 pb-24">
          <RevealGroup className="grid gap-5 sm:grid-cols-2" stagger={0.06}>
            {channels.map((c) => (
              <RevealItem key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-full cursor-pointer flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="size-6" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    <p className="mt-1 font-semibold">{c.value}</p>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10 flex justify-center">
            <BookNowButton label={t.bookButton} />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
