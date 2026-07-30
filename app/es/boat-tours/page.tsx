import type { Metadata } from "next";
import { BoatToursPage } from "@/app/boat-tours/boat-tours.view";
import { boatToursContent } from "@/app/boat-tours/boat-tours.content";

export const metadata: Metadata = {
  title: boatToursContent.es.metaTitle,
  description: boatToursContent.es.metaDescription,
};

export default function BoatToursPageEs() {
  return <BoatToursPage locale="es" />;
}
