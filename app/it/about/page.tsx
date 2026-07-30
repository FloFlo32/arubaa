import type { Metadata } from "next";
import { AboutPage } from "@/app/about/about.view";
import { aboutContent } from "@/app/about/about.content";

export const metadata: Metadata = {
  title: aboutContent.it.metaTitle,
  description: aboutContent.it.metaDescription,
};

export default function AboutPageit() {
  return <AboutPage locale="it" />;
}
