import type { Metadata } from "next";
import { ContactPage } from "@/app/contact/contact.view";
import { contactContent } from "@/app/contact/contact.content";

export const metadata: Metadata = {
  title: contactContent.se.metaTitle,
  description: contactContent.se.metaDescription,
};

export default function ContactPageSe() {
  return <ContactPage locale="se" />;
}
