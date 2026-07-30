import type { Metadata } from "next";
import { ContactPage } from "@/app/contact/contact.view";
import { contactContent } from "@/app/contact/contact.content";

export const metadata: Metadata = {
  title: contactContent.es.metaTitle,
  description: contactContent.es.metaDescription,
};

export default function ContactPageEs() {
  return <ContactPage locale="es" />;
}
