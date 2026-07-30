import type { Metadata } from "next";
import { BoatToursPage } from "@/app/boat-tours/boat-tours.view";
import { boatToursContent } from "@/app/boat-tours/boat-tours.content";

export const metadata: Metadata = {
  title: boatToursContent.se.metaTitle,
  description: boatToursContent.se.metaDescription,
};

export default function BoatToursPageSe() {
  return <BoatToursPage locale="se" />;
}
