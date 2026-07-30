import type { Metadata } from "next";
import { MorningSplashAdventurePage } from "@/app/boat-tours/morning-splash-adventure/morning-splash.view";
import { morningSplashContent } from "@/app/boat-tours/morning-splash-adventure/morning-splash.content";

export const metadata: Metadata = {
  title: morningSplashContent.br.metaTitle,
  description: morningSplashContent.br.metaDescription,
};

export default function MorningSplashAdventurePageBr() {
  return <MorningSplashAdventurePage locale="br" />;
}
