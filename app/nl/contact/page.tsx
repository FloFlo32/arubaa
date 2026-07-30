import type { Metadata } from "next";
import { ContactPage } from "@/app/contact/contact.view";
import { contactContent } from "@/app/contact/contact.content";

export const metadata: Metadata = {
  title: contactContent.nl.metaTitle,
  description: contactContent.nl.metaDescription,
};

export default function ContactPageNl() {
  return <ContactPage locale="nl" />;
}
