import type { Metadata } from "next";
import { SunsetStarsCruisePage } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.view";
import { sunsetStarsCruiseContent } from "@/app/boat-tours/sunset-stars-cruise/sunset-stars-cruise.content";

export const metadata: Metadata = {
  title: sunsetStarsCruiseContent.br.metaTitle,
  description: sunsetStarsCruiseContent.br.metaDescription,
};

export default function SunsetStarsCruisePageBr() {
  return <SunsetStarsCruisePage locale="br" />;
}
