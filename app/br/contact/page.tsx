import type { Metadata } from "next";
import { ContactPage } from "@/app/contact/contact.view";
import { contactContent } from "@/app/contact/contact.content";

export const metadata: Metadata = {
  title: contactContent.br.metaTitle,
  description: contactContent.br.metaDescription,
};

export default function ContactPageBr() {
  return <ContactPage locale="br" />;
}
