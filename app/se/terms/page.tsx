import type { Metadata } from "next";
import { TermsPage } from "@/app/terms/terms.view";
import { termsContent } from "@/app/terms/terms.content";

export const metadata: Metadata = {
  title: termsContent.se.metaTitle,
  description: termsContent.se.metaDescription,
};

export default function TermsPageSe() {
  return <TermsPage locale="se" />;
}
