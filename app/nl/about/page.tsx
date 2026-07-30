import type { Metadata } from "next";
import { AboutPage } from "@/app/about/about.view";
import { aboutContent } from "@/app/about/about.content";

export const metadata: Metadata = {
  title: aboutContent.nl.metaTitle,
  description: aboutContent.nl.metaDescription,
};

export default function AboutPagenl() {
  return <AboutPage locale="nl" />;
}
