import type { Metadata } from "next";
import { BoatToursPage } from "./boat-tours.view";
import { boatToursContent } from "./boat-tours.content";

export const metadata: Metadata = {
  title: boatToursContent.en.metaTitle,
  description: boatToursContent.en.metaDescription,
};

export default function Page() {
  return <BoatToursPage locale="en" />;
}
