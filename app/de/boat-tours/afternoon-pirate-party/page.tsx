import type { Metadata } from "next";
import { AfternoonPiratePartyPage } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.view";
import { afternoonPirateContent } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.content";

export const metadata: Metadata = {
  title: afternoonPirateContent.de.metaTitle,
  description: afternoonPirateContent.de.metaDescription,
};

export default function AfternoonPiratePartyPageDe() {
  return <AfternoonPiratePartyPage locale="de" />;
}
