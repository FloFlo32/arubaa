import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { PhotoHero } from "@/components/magic/photo-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { BookNowButton } from "@/components/widget/book-now-button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Flagship Aruba: phone, WhatsApp, email or find us at MooMba Beach Bar.",
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+297 567 7637",
    href: `tel:${brand.contact.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with our crew",
    href: `https://wa.me/${brand.contact.whatsapp}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: brand.social.email,
    href: `mailto:${brand.social.email}`,
  },
  {
    icon: MapPin,
    label: "Find us",
    value: "MooMba Beach Bar, Palm Beach",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PhotoHero
          eyebrow="Get in touch"
          title="Get in Touch"
          body="How can we help you set sail on your perfect Aruba tour? Let Flagship Aruba be your trusted crew for unforgettable adventures."
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
            <BookNowButton label="Book Your Adventure Now" />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
