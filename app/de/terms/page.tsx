import type { Metadata } from "next";
import { TermsPage } from "@/app/terms/terms.view";
import { termsContent } from "@/app/terms/terms.content";

export const metadata: Metadata = {
  title: termsContent.de.metaTitle,
  description: termsContent.de.metaDescription,
};

export default function TermsPageDe() {
  return <TermsPage locale="de" />;
}
