import type { Metadata } from "next";
import { TermsPage } from "./terms.view";
import { termsContent } from "./terms.content";

export const metadata: Metadata = {
  title: termsContent.en.metaTitle,
  description: termsContent.en.metaDescription,
};

export default function Page() {
  return <TermsPage locale="en" />;
}
