import type { Metadata } from "next";
import { Legal } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <Legal
      title="Terms of Service"
      updated="1 October 2026"
      sections={[
        ["Use of this website", "This site is provided for general information. By using it you agree to these terms."],
        ["Services", "Project work is governed by a separate written agreement or statement of work that defines scope, deliverables, timelines and fees."],
        ["Intellectual property", "Unless an agreement states otherwise, site content, branding and code are owned by Vynora. Client deliverables are transferred as set out in the project agreement."],
        ["Liability", "To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this website."],
        ["Governing law", "These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates."],
        ["Contact", `Questions about these terms? Email ${site.email}.`],
      ]}
    />
  );
}
