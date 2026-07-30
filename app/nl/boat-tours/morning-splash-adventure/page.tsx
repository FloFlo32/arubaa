import type { Metadata } from "next";
import { MorningSplashAdventurePage } from "@/app/boat-tours/morning-splash-adventure/morning-splash.view";
import { morningSplashContent } from "@/app/boat-tours/morning-splash-adventure/morning-splash.content";

export const metadata: Metadata = {
  title: morningSplashContent.nl.metaTitle,
  description: morningSplashContent.nl.metaDescription,
};

export default function MorningSplashAdventurePageNl() {
  return <MorningSplashAdventurePage locale="nl" />;
}
