import type { Metadata } from "next";
import { SunsetStarsCruisePage } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.view";
import { sunsetStarsCruiseContent } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.content";

export const metadata: Metadata = {
  title: sunsetStarsCruiseContent.nl.metaTitle,
  description: sunsetStarsCruiseContent.nl.metaDescription,
};

export default function SunsetStarsCruisePageNl() {
  return <SunsetStarsCruisePage locale="nl" />;
}
