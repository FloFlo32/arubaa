import type { Metadata } from "next";
import { SunsetStarsCruisePage } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.view";
import { sunsetStarsCruiseContent } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.content";

export const metadata: Metadata = {
  title: sunsetStarsCruiseContent.es.metaTitle,
  description: sunsetStarsCruiseContent.es.metaDescription,
};

export default function SunsetStarsCruisePageEs() {
  return <SunsetStarsCruisePage locale="es" />;
}
