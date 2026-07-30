import type { Metadata } from "next";
import { TermsPage } from "@/app/terms/terms.view";
import { termsContent } from "@/app/terms/terms.content";

export const metadata: Metadata = {
  title: termsContent.br.metaTitle,
  description: termsContent.br.metaDescription,
};

export default function TermsPageBr() {
  return <TermsPage locale="br" />;
}
