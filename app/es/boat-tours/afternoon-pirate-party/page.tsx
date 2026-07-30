import type { Metadata } from "next";
import { AfternoonPiratePartyPage } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.view";
import { afternoonPirateContent } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.content";

export const metadata: Metadata = {
  title: afternoonPirateContent.es.metaTitle,
  description: afternoonPirateContent.es.metaDescription,
};

export default function AfternoonPiratePartyPageEs() {
  return <AfternoonPiratePartyPage locale="es" />;
}
