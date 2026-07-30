import type { Metadata } from "next";
import { FaqPage } from "./faq.view";
import { faqContent } from "./faq.content";

export const metadata: Metadata = {
  title: faqContent.en.metaTitle,
  description: faqContent.en.metaDescription,
};

export default function Page() {
  return <FaqPage locale="en" />;
}
