import type { Metadata } from "next";
import { SnorkelSitesPage } from "./snorkel-sites.view";
import { snorkelSitesContent } from "./snorkel-sites.content";

export const metadata: Metadata = {
  title: snorkelSitesContent.en.metaTitle,
  description: snorkelSitesContent.en.metaDescription,
};

export default function Page() {
  return <SnorkelSitesPage locale="en" />;
}
