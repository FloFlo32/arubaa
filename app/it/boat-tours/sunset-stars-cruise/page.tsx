import type { Metadata } from "next";
import { SunsetStarsCruisePage } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.view";
import { sunsetStarsCruiseContent } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.content";

export const metadata: Metadata = {
  title: sunsetStarsCruiseContent.it.metaTitle,
  description: sunsetStarsCruiseContent.it.metaDescription,
};

export default function SunsetStarsCruisePageIt() {
  return <SunsetStarsCruisePage locale="it" />;
}
