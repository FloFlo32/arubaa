import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/app/privacy-policy/privacy-policy.view";
import { privacyPolicyContent } from "@/app/privacy-policy/privacy-policy.content";

export const metadata: Metadata = {
  title: privacyPolicyContent.es.metaTitle,
  description: privacyPolicyContent.es.metaDescription,
};

export default function PrivacyPolicyPageEs() {
  return <PrivacyPolicyPage locale="es" />;
}
