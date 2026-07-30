import type { Metadata } from "next";
import { MorningSplashAdventurePage } from "@/app/boat-tours/morning-splash-adventure/morning-splash.view";
import { morningSplashContent } from "@/app/boat-tours/morning-splash-adventure/morning-splash.content";

export const metadata: Metadata = {
  title: morningSplashContent.se.metaTitle,
  description: morningSplashContent.se.metaDescription,
};

export default function MorningSplashAdventurePageSe() {
  return <MorningSplashAdventurePage locale="se" />;
}
