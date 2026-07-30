import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/app/privacy-policy/privacy-policy.view";
import { privacyPolicyContent } from "@/app/privacy-policy/privacy-policy.content";

export const metadata: Metadata = {
  title: privacyPolicyContent.nl.metaTitle,
  description: privacyPolicyContent.nl.metaDescription,
};

export default function PrivacyPolicyPageNl() {
  return <PrivacyPolicyPage locale="nl" />;
}
