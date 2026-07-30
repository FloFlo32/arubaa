import type { Metadata } from "next";
import { AboutPage } from "@/app/about/about.view";
import { aboutContent } from "@/app/about/about.content";

export const metadata: Metadata = {
  title: aboutContent.es.metaTitle,
  description: aboutContent.es.metaDescription,
};

export default function AboutPageEs() {
  return <AboutPage locale="es" />;
}
