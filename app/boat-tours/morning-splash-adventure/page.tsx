import type { Metadata } from "next";
import { MorningSplashAdventurePage } from "./morning-splash.view";
import { morningSplashContent } from "./morning-splash.content";

export const metadata: Metadata = {
  title: morningSplashContent.en.metaTitle,
  description: morningSplashContent.en.metaDescription,
};

export default function Page() {
  return <MorningSplashAdventurePage locale="en" />;
}
