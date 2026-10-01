import type { Metadata } from "next";
import { CTA, Heading, PageHero, Section, ServiceCard } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { faqs, techStack } from "@/lib/data";
import { services } from "@/lib/data";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web, mobile, social apps, cloud, data centre hosting, data engineering, AI and IT infrastructure services from Vynora Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        image={photos.desk}
        title={<>One partner for <span className="grad-text">software, cloud and infrastructure</span></>}
        text="From the first wireframe to the rack in the data centre, we cover the whole stack so you do not have to coordinate five vendors."
      />
      <Section className="!pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
        </div>
      </Section>
      <Section className="bg-soft">
        <Heading eyebrow="Technology" title="Tools we trust in production" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([k, v]) => (
            <div key={k} className="reveal rounded-3xl border border-line bg-card p-7">
              <h3 className="font-display text-lg font-semibold">{k}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {v.map((t) => <span key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Heading center eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto mt-12 max-w-3xl"><Faq items={faqs} /></div>
      </Section>
      <CTA />
    </>
  );
}
