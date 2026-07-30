import type { Metadata } from "next";
import { SnorkelSitesPage } from "@/app/snorkel-sites/snorkel-sites.view";
import { snorkelSitesContent } from "@/app/snorkel-sites/snorkel-sites.content";

export const metadata: Metadata = {
  title: snorkelSitesContent.es.metaTitle,
  description: snorkelSitesContent.es.metaDescription,
};

export default function SnorkelSitesPage_es() {
  return <SnorkelSitesPage locale="es" />;
}
