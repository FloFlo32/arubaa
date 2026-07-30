import type { Metadata } from "next";
import { FaqPage } from "@/app/faq/faq.view";
import { faqContent } from "@/app/faq/faq.content";

export const metadata: Metadata = {
  title: faqContent.br.metaTitle,
  description: faqContent.br.metaDescription,
};

export default function FaqPageBr() {
  return <FaqPage locale="br" />;
}
