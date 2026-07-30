import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/app/privacy-policy/privacy-policy.view";
import { privacyPolicyContent } from "@/app/privacy-policy/privacy-policy.content";

export const metadata: Metadata = {
  title: privacyPolicyContent.de.metaTitle,
  description: privacyPolicyContent.de.metaDescription,
};

export default function PrivacyPolicyPageDe() {
  return <PrivacyPolicyPage locale="de" />;
}
