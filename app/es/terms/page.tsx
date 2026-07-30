import type { Metadata } from "next";
import { TermsPage } from "@/app/terms/terms.view";
import { termsContent } from "@/app/terms/terms.content";

export const metadata: Metadata = {
  title: termsContent.es.metaTitle,
  description: termsContent.es.metaDescription,
};

export default function TermsPageEs() {
  return <TermsPage locale="es" />;
}
