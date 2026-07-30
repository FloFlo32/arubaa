import type { Metadata } from "next";
import { AfternoonPiratePartyPage } from "./afternoon-pirate-party.view";
import { afternoonPirateContent } from "./afternoon-pirate-party.content";

export const metadata: Metadata = {
  title: afternoonPirateContent.en.metaTitle,
  description: afternoonPirateContent.en.metaDescription,
};

export default function Page() {
  return <AfternoonPiratePartyPage locale="en" />;
}
