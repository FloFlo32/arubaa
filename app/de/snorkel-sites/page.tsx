import type { Metadata } from "next";
import { SnorkelSitesPage } from "@/app/snorkel-sites/snorkel-sites.view";
import { snorkelSitesContent } from "@/app/snorkel-sites/snorkel-sites.content";

export const metadata: Metadata = {
  title: snorkelSitesContent.de.metaTitle,
  description: snorkelSitesContent.de.metaDescription,
};

export default function SnorkelSitesPage_de() {
  return <SnorkelSitesPage locale="de" />;
}
