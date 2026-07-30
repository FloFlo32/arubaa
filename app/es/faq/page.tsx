import type { Metadata } from "next";
import { FaqPage } from "@/app/faq/faq.view";
import { faqContent } from "@/app/faq/faq.content";

export const metadata: Metadata = {
  title: faqContent.es.metaTitle,
  description: faqContent.es.metaDescription,
};

export default function FaqPageEs() {
  return <FaqPage locale="es" />;
}
