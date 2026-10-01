import type { Metadata } from "next";
import { CTA, PageHero, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { industries } from "@/lib/data";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "Software for fintech, retail, real estate, healthcare, logistics, hospitality, education, media and government.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        image={photos.globe}
        title={<>Software shaped by <span className="grad-text">your industry</span></>}
        text="Every sector has its own regulation, users and rhythms. We bring patterns that work and adapt them to your reality."
      />
      <Section className="!pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((x, i) => (
            <div key={x.title} style={{ transitionDelay: `${(i % 3) * 80}ms` }} className="reveal card-hover rounded-3xl border border-line bg-card p-8">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand2/20 text-brand2"><Icon name={x.icon} size={24} /></span>
              <h3 className="font-display mt-6 text-xl font-semibold">{x.title}</h3>
              <p className="mt-3 text-muted">{x.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
