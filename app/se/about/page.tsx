import type { Metadata } from "next";
import { AboutPage } from "@/app/about/about.view";
import { aboutContent } from "@/app/about/about.content";

export const metadata: Metadata = {
  title: aboutContent.se.metaTitle,
  description: aboutContent.se.metaDescription,
};

export default function AboutPagese() {
  return <AboutPage locale="se" />;
}
