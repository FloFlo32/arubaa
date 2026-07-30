import type { Metadata } from "next";
import { AboutPage } from "@/app/about/about.view";
import { aboutContent } from "@/app/about/about.content";

export const metadata: Metadata = {
  title: aboutContent.de.metaTitle,
  description: aboutContent.de.metaDescription,
};

export default function AboutPagede() {
  return <AboutPage locale="de" />;
}
