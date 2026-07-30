import type { Metadata } from "next";
import { MorningSplashAdventurePage } from "@/app/boat-tours/morning-splash-adventure/morning-splash.view";
import { morningSplashContent } from "@/app/boat-tours/morning-splash-adventure/morning-splash.content";

export const metadata: Metadata = {
  title: morningSplashContent.es.metaTitle,
  description: morningSplashContent.es.metaDescription,
};

export default function MorningSplashAdventurePageEs() {
  return <MorningSplashAdventurePage locale="es" />;
}
