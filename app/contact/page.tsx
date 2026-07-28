import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand } from "@/brand.config";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Map } from "@/components/sections/map";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jolly Pirates: phone, WhatsApp, email or find us at MooMba Beach.",
};

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+297 586 8107",
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
    value: "MooMba Beach, Palm Beach",
    href: "#location",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-12 text-center">
          <Reveal>
            <Badge variant="accent">Get in touch</Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Questions about a cruise, a private charter, or just want to say ahoy? Reach
              out any way that&apos;s easiest for you.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-5xl pb-16">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
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
        </section>

        <Map />
      </main>
      <Footer />
    </>
  );
}
