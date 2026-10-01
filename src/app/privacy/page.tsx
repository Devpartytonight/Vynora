import type { Metadata } from "next";
import { Legal } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <Legal
      title="Privacy Policy"
      updated="1 October 2026"
      sections={[
        ["Who we are", `${site.legalName} ("Vynora", "we") is a company registered in Dubai, UAE. You can reach us at ${site.email}.`],
        ["What we collect", "Information you submit through our contact form (name, email, company, phone, project details) and basic analytics about how the site is used."],
        ["How we use it", "To respond to enquiries, prepare proposals, improve our website and meet legal obligations. We do not sell personal data."],
        ["Sharing", "We share data only with service providers who help us operate (hosting, email, CRM) under confidentiality obligations, or when required by law."],
        ["Retention & security", "We keep enquiry data only as long as needed for the purpose collected and protect it with technical and organisational safeguards."],
        ["Your rights", `You may request access, correction or deletion of your personal data at any time by emailing ${site.email}.`],
        ["Cookies", "We use only essential cookies and privacy-friendly analytics. You can control cookies in your browser settings."],
      ]}
    />
  );
}
