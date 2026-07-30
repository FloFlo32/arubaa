import type { Metadata } from "next";
import { SnorkelSitesPage } from "@/app/snorkel-sites/snorkel-sites.view";
import { snorkelSitesContent } from "@/app/snorkel-sites/snorkel-sites.content";

export const metadata: Metadata = {
  title: snorkelSitesContent.se.metaTitle,
  description: snorkelSitesContent.se.metaDescription,
};

export default function SnorkelSitesPage_se() {
  return <SnorkelSitesPage locale="se" />;
}
