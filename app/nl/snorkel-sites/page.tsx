import type { Metadata } from "next";
import { SnorkelSitesPage } from "@/app/snorkel-sites/snorkel-sites.view";
import { snorkelSitesContent } from "@/app/snorkel-sites/snorkel-sites.content";

export const metadata: Metadata = {
  title: snorkelSitesContent.nl.metaTitle,
  description: snorkelSitesContent.nl.metaDescription,
};

export default function SnorkelSitesPage_nl() {
  return <SnorkelSitesPage locale="nl" />;
}
