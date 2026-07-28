import type { Metadata } from "next";
import { brand } from "@/brand.config";
import { Scale, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking a cruise with Jolly Pirates.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "Acceptance of Terms",
    body: "By accessing or using this Site, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the Site and its Services.",
  },
  {
    heading: "Use of the Site",
    body: "You may browse and use the Site for lawful purposes related to booking and enjoying a cruise with Jolly Pirates. You agree not to misuse the Site, interfere with its normal operation, or attempt to access it by means other than the interface and instructions we provide.",
  },
  {
    heading: "Intellectual Property",
    body: "All content on this Site, including text, images, logos and design elements, is owned by or licensed to Jolly Pirates and is protected by applicable intellectual property laws. You may view and share content for personal, non commercial purposes, but may not reproduce or redistribute it without permission.",
  },
  {
    heading: "Third-Party Links",
    body: "This Site may link to our booking partner and other third party websites for your convenience. We do not control and are not responsible for the content, policies or practices of those third party sites, and inclusion of a link does not imply endorsement.",
  },
  {
    heading: "Limitation of Liability",
    body: "The Site and its content are provided on an as is basis. To the fullest extent permitted by law, Jolly Pirates disclaims liability for any indirect, incidental or consequential damages arising from your use of the Site or reliance on information found here.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these Terms & Conditions from time to time to reflect changes in our practices or for other operational, legal or regulatory reasons. Continued use of the Site after any changes take effect constitutes your acceptance of the revised terms.",
  },
  {
    heading: "Governing Law",
    body: "These Terms & Conditions are governed by the laws of Aruba, without regard to conflict of law principles. Any disputes arising from your use of the Site will be subject to the exclusive jurisdiction of the courts of Aruba.",
  },
  {
    heading: "Contact",
    body: `If you have questions about these Terms & Conditions, you can reach Jolly Pirates by phone or email using the details in our footer, or by writing to ${brand.social.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-28 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <Scale className="size-3.5" /> Legal
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The terms that govern your use of this site.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                This is a summary for demonstration purposes. For the complete, legally
                binding terms, see the official jolly-pirates.com site.
              </p>
              <a
                href="https://www.jolly-pirates.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Official terms <ExternalLink className="size-3.5" />
              </a>
            </div>
          </Reveal>
        </section>

        <article className="container-px mx-auto max-w-3xl pb-24">
          <Reveal>
            <div className="space-y-10 border-t border-border pt-10">
              {sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="text-2xl font-semibold">{s.heading}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
                </section>
              ))}
            </div>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
