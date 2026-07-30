import type { Metadata } from "next";
import { FaqPage } from "@/app/faq/faq.view";
import { faqContent } from "@/app/faq/faq.content";

export const metadata: Metadata = {
  title: faqContent.se.metaTitle,
  description: faqContent.se.metaDescription,
};

export default function FaqPageSe() {
  return <FaqPage locale="se" />;
}
