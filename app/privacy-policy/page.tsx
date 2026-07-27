import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Aruba Tourism Authority global privacy policy: how we collect, use and protect your data.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Introduction",
    body: "The Aruba Tourism Authority (ATA) provides this Global Privacy Policy to explain how it processes personal data across its digital properties, including Aruba.com and associated platforms. By using the Site or the Services, you acknowledge that we may collect information about you and use or disclose such information as described herein.",
  },
  {
    heading: "2. Applicable Data Protection Laws",
    body: "ATA is committed to complying with privacy regulations worldwide. We will handle your Personal Data in accordance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and other jurisdiction specific requirements. Personal Data means any information relating to an identifiable individual, whether directly or indirectly identifying them.",
  },
  {
    heading: "3. Information We Collect",
    body: "ATA gathers several categories of data depending on how you interact with us: identity information, contact details, travel preferences, technical data from your device, customer inquiries, usage patterns, marketing preferences, and limited financial information. ATA does not otherwise collect or process consumer payment card information in connection with tourism bookings. Non identifiable, aggregated or anonymized information falls outside the definition of Personal Data under applicable protection laws.",
  },
  {
    heading: "4. Data Belonging to Minors",
    body: "Our Site and Services are intended for a general audience and are not directed at children. We do not knowingly collect Personal Data from minors without appropriate consent from a parent or guardian. If we learn that we have collected Personal Data from a minor without the required consent, we will take reasonable steps to delete that information.",
  },
  {
    heading: "5. How We Collect Your Information",
    body: "We collect information directly from you when you browse the Site, submit a form, subscribe to communications, or contact our team, as well as automatically through cookies, analytics tools and similar technologies as you interact with our digital properties. We may also receive information from trusted travel and tourism partners who work with ATA to support your visit.",
  },
  {
    heading: "6. Purpose and Legal Basis of Data Processing",
    body: "We process Personal Data to provide and improve our Services, respond to inquiries, personalize your experience of the Site, send requested communications, and comply with legal obligations. Depending on the context, our legal basis includes your consent, the performance of a request you have made, and ATA's legitimate interest in promoting Aruba as a destination.",
  },
  {
    heading: "7. Data Retention",
    body: "We retain Personal Data only for as long as reasonably necessary to fulfill the purposes described in this policy, including to meet legal, accounting or reporting requirements. When Personal Data is no longer needed, we take reasonable steps to securely delete, anonymize or archive it in accordance with our internal retention practices.",
  },
  {
    heading: "8. Security of Personal Data",
    body: "ATA maintains reasonable administrative, technical and physical safeguards designed to protect Personal Data against loss, misuse, unauthorized access, disclosure, alteration and destruction. While no system can guarantee absolute security, we regularly review our practices to reduce risk and respond promptly to any suspected incident.",
  },
  {
    heading: "9. Sharing Your Personal Data",
    body: "We may share Personal Data with trusted service providers who support the operation of the Site and Services, with tourism and travel partners involved in fulfilling your request, and where required by law or to protect the rights and safety of ATA and its visitors. We do not sell Personal Data to third parties for their own marketing purposes.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container-px mx-auto max-w-3xl pt-16 pb-8 text-center">
          <Reveal>
            <Badge variant="accent">
              <ShieldCheck className="size-3.5" /> Legal
            </Badge>
            <h1 className="mt-6 text-balance text-4xl font-bold sm:text-5xl">
              Global Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How the Aruba Tourism Authority processes personal data across Aruba.com
              and its digital properties.
            </p>
          </Reveal>
        </section>

        <section className="container-px mx-auto max-w-3xl pb-6">
          <Reveal>
            <div className="flex flex-col items-start gap-2 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                This is a summary for demonstration purposes. For the complete, legally
                binding policy, see the official Aruba.com privacy policy.
              </p>
              <a
                href="https://www.aruba.com/us/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Official policy <ExternalLink className="size-3.5" />
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
