import type { Metadata } from "next";
import { MorningSplashAdventurePage } from "@/app/boat-tours/morning-splash-adventure/morning-splash.view";
import { morningSplashContent } from "@/app/boat-tours/morning-splash-adventure/morning-splash.content";

export const metadata: Metadata = {
  title: morningSplashContent.de.metaTitle,
  description: morningSplashContent.de.metaDescription,
};

export default function MorningSplashAdventurePageDe() {
  return <MorningSplashAdventurePage locale="de" />;
}
