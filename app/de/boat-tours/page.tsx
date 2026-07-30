import type { Metadata } from "next";
import { BoatToursPage } from "@/app/boat-tours/boat-tours.view";
import { boatToursContent } from "@/app/boat-tours/boat-tours.content";

export const metadata: Metadata = {
  title: boatToursContent.de.metaTitle,
  description: boatToursContent.de.metaDescription,
};

export default function BoatToursPageDe() {
  return <BoatToursPage locale="de" />;
}
