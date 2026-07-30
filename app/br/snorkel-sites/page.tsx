import type { Metadata } from "next";
import { SnorkelSitesPage } from "@/app/snorkel-sites/snorkel-sites.view";
import { snorkelSitesContent } from "@/app/snorkel-sites/snorkel-sites.content";

export const metadata: Metadata = {
  title: snorkelSitesContent.br.metaTitle,
  description: snorkelSitesContent.br.metaDescription,
};

export default function SnorkelSitesPage_br() {
  return <SnorkelSitesPage locale="br" />;
}
