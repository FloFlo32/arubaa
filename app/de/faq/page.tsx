import type { Metadata } from "next";
import { FaqPage } from "@/app/faq/faq.view";
import { faqContent } from "@/app/faq/faq.content";

export const metadata: Metadata = {
  title: faqContent.de.metaTitle,
  description: faqContent.de.metaDescription,
};

export default function FaqPageDe() {
  return <FaqPage locale="de" />;
}
