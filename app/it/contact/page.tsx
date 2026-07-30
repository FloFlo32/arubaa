import type { Metadata } from "next";
import { ContactPage } from "@/app/contact/contact.view";
import { contactContent } from "@/app/contact/contact.content";

export const metadata: Metadata = {
  title: contactContent.it.metaTitle,
  description: contactContent.it.metaDescription,
};

export default function ContactPageIt() {
  return <ContactPage locale="it" />;
}
