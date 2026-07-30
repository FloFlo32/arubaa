import type { Metadata } from "next";
import { TermsPage } from "@/app/terms/terms.view";
import { termsContent } from "@/app/terms/terms.content";

export const metadata: Metadata = {
  title: termsContent.nl.metaTitle,
  description: termsContent.nl.metaDescription,
};

export default function TermsPageNl() {
  return <TermsPage locale="nl" />;
}
