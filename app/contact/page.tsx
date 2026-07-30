import type { Metadata } from "next";
import { ContactPage } from "./contact.view";
import { contactContent } from "./contact.content";

export const metadata: Metadata = {
  title: contactContent.en.metaTitle,
  description: contactContent.en.metaDescription,
};

export default function Page() {
  return <ContactPage locale="en" />;
}
