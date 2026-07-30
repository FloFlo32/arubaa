import type { Metadata } from "next";
import { FaqPage } from "@/app/faq/faq.view";
import { faqContent } from "@/app/faq/faq.content";

export const metadata: Metadata = {
  title: faqContent.it.metaTitle,
  description: faqContent.it.metaDescription,
};

export default function FaqPageIt() {
  return <FaqPage locale="it" />;
}
