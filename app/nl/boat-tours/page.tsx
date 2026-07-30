import type { Metadata } from "next";
import { BoatToursPage } from "@/app/boat-tours/boat-tours.view";
import { boatToursContent } from "@/app/boat-tours/boat-tours.content";

export const metadata: Metadata = {
  title: boatToursContent.nl.metaTitle,
  description: boatToursContent.nl.metaDescription,
};

export default function BoatToursPageNl() {
  return <BoatToursPage locale="nl" />;
}
