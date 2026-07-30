import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/app/privacy-policy/privacy-policy.view";
import { privacyPolicyContent } from "@/app/privacy-policy/privacy-policy.content";

export const metadata: Metadata = {
  title: privacyPolicyContent.br.metaTitle,
  description: privacyPolicyContent.br.metaDescription,
};

export default function PrivacyPolicyPageBr() {
  return <PrivacyPolicyPage locale="br" />;
}
