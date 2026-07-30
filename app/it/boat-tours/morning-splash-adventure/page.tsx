import type { Metadata } from "next";
import { MorningSplashAdventurePage } from "@/app/boat-tours/morning-splash-adventure/morning-splash.view";
import { morningSplashContent } from "@/app/boat-tours/morning-splash-adventure/morning-splash.content";

export const metadata: Metadata = {
  title: morningSplashContent.it.metaTitle,
  description: morningSplashContent.it.metaDescription,
};

export default function MorningSplashAdventurePageIt() {
  return <MorningSplashAdventurePage locale="it" />;
}
