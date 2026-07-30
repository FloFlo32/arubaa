import type { Metadata } from "next";
import { FaqPage } from "@/app/faq/faq.view";
import { faqContent } from "@/app/faq/faq.content";

export const metadata: Metadata = {
  title: faqContent.nl.metaTitle,
  description: faqContent.nl.metaDescription,
};

export default function FaqPageNl() {
  return <FaqPage locale="nl" />;
}
