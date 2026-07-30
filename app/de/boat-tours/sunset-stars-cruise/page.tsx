import type { Metadata } from "next";
import { SunsetStarsCruisePage } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.view";
import { sunsetStarsCruiseContent } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.content";

export const metadata: Metadata = {
  title: sunsetStarsCruiseContent.de.metaTitle,
  description: sunsetStarsCruiseContent.de.metaDescription,
};

export default function SunsetStarsCruisePageDe() {
  return <SunsetStarsCruisePage locale="de" />;
}
