import type { Metadata } from "next";
import { AfternoonPiratePartyPage } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.view";
import { afternoonPirateContent } from "@/app/boat-tours/afternoon-pirate-party/afternoon-pirate-party.content";

export const metadata: Metadata = {
  title: afternoonPirateContent.br.metaTitle,
  description: afternoonPirateContent.br.metaDescription,
};

export default function AfternoonPiratePartyPageBr() {
  return <AfternoonPiratePartyPage locale="br" />;
}
