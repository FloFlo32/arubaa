import type { Metadata } from "next";
import { AboutPage } from "./about.view";
import { aboutContent } from "./about.content";

export const metadata: Metadata = {
  title: aboutContent.en.metaTitle,
  description: aboutContent.en.metaDescription,
};

export default function Page() {
  return <AboutPage locale="en" />;
}
