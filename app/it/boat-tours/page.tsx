import type { Metadata } from "next";
import { BoatToursPage } from "@/app/boat-tours/boat-tours.view";
import { boatToursContent } from "@/app/boat-tours/boat-tours.content";

export const metadata: Metadata = {
  title: boatToursContent.it.metaTitle,
  description: boatToursContent.it.metaDescription,
};

export default function BoatToursPageIt() {
  return <BoatToursPage locale="it" />;
}
