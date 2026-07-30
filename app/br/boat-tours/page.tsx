import type { Metadata } from "next";
import { BoatToursPage } from "@/app/boat-tours/boat-tours.view";
import { boatToursContent } from "@/app/boat-tours/boat-tours.content";

export const metadata: Metadata = {
  title: boatToursContent.br.metaTitle,
  description: boatToursContent.br.metaDescription,
};

export default function BoatToursPageBr() {
  return <BoatToursPage locale="br" />;
}
