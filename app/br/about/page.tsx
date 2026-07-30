import type { Metadata } from "next";
import { AboutPage } from "@/app/about/about.view";
import { aboutContent } from "@/app/about/about.content";

export const metadata: Metadata = {
  title: aboutContent.br.metaTitle,
  description: aboutContent.br.metaDescription,
};

export default function AboutPagebr() {
  return <AboutPage locale="br" />;
}
