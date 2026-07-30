import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/app/privacy-policy/privacy-policy.view";
import { privacyPolicyContent } from "@/app/privacy-policy/privacy-policy.content";

export const metadata: Metadata = {
  title: privacyPolicyContent.it.metaTitle,
  description: privacyPolicyContent.it.metaDescription,
};

export default function PrivacyPolicyPageIt() {
  return <PrivacyPolicyPage locale="it" />;
}
