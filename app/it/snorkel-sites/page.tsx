import type { Metadata } from "next";
import { SnorkelSitesPage } from "@/app/snorkel-sites/snorkel-sites.view";
import { snorkelSitesContent } from "@/app/snorkel-sites/snorkel-sites.content";

export const metadata: Metadata = {
  title: snorkelSitesContent.it.metaTitle,
  description: snorkelSitesContent.it.metaDescription,
};

export default function SnorkelSitesPage_it() {
  return <SnorkelSitesPage locale="it" />;
}
