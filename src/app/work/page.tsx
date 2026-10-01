import type { Metadata } from "next";
import { CTA, PageHero, ProjectCard, Section } from "@/components/ui";
import { projects } from "@/lib/data";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Case studies across e-commerce, fintech, healthcare, logistics, social apps and infrastructure.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        image={photos.dashboard}
        title={<>Products built to <span className="grad-text">perform</span></>}
        text="A look at the kinds of problems we solve. These are representative concept case studies that show our approach and the outcomes we target."
      />
      <Section className="!pt-8">
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Section>
      <CTA />
    </>
  );
}
