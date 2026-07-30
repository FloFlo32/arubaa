import type { Metadata } from "next";
import { ContactPage } from "@/app/contact/contact.view";
import { contactContent } from "@/app/contact/contact.content";

export const metadata: Metadata = {
  title: contactContent.de.metaTitle,
  description: contactContent.de.metaDescription,
};

export default function ContactPageDe() {
  return <ContactPage locale="de" />;
}
