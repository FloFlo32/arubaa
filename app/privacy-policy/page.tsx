import type { Metadata } from "next";
import { PrivacyPolicyPage } from "./privacy-policy.view";
import { privacyPolicyContent } from "./privacy-policy.content";

export const metadata: Metadata = {
  title: privacyPolicyContent.en.metaTitle,
  description: privacyPolicyContent.en.metaDescription,
};

export default function Page() {
  return <PrivacyPolicyPage locale="en" />;
}
