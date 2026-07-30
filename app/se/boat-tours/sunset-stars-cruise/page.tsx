import type { Metadata } from "next";
import { SunsetStarsCruisePage } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.view";
import { sunsetStarsCruiseContent } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.content";

export const metadata: Metadata = {
  title: sunsetStarsCruiseContent.se.metaTitle,
  description: sunsetStarsCruiseContent.se.metaDescription,
};

export default function SunsetStarsCruisePageSe() {
  return <SunsetStarsCruisePage locale="se" />;
}
