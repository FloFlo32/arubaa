import type { Metadata } from "next";
import { TermsPage } from "@/app/terms/terms.view";
import { termsContent } from "@/app/terms/terms.content";

export const metadata: Metadata = {
  title: termsContent.it.metaTitle,
  description: termsContent.it.metaDescription,
};

export default function TermsPageIt() {
  return <TermsPage locale="it" />;
}
