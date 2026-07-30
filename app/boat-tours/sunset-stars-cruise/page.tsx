import type { Metadata } from "next";
import { SunsetStarsCruisePage } from "./sunset-stars-cruise.view";
import { sunsetStarsCruiseContent } from "./sunset-stars-cruise.content";

export const metadata: Metadata = {
  title: sunsetStarsCruiseContent.en.metaTitle,
  description: sunsetStarsCruiseContent.en.metaDescription,
};

export default function Page() {
  return <SunsetStarsCruisePage locale="en" />;
}
