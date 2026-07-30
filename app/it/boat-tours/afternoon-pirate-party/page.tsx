import type { Metadata } from "next";
import { AfternoonPiratePartyPage } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.view";
import { afternoonPirateContent } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.content";

export const metadata: Metadata = {
  title: afternoonPirateContent.it.metaTitle,
  description: afternoonPirateContent.it.metaDescription,
};

export default function AfternoonPiratePartyPageIt() {
  return <AfternoonPiratePartyPage locale="it" />;
}
