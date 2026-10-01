import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CTA, Heading, PageHero, Section } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { faqs, processSteps, values } from "@/lib/data";
import { img, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How Vynora takes projects from discovery to launch and beyond: five phases, transparent milestones.",
};

const photoFor = [photos.workshop, photos.planning, photos.coding, photos.dashboard, photos.analytics];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        image={photos.meeting}
        title={<>A clear path from <span className="grad-text">idea to launch</span></>}
        text="Predictable delivery without bureaucracy: short cycles, honest communication and software you can click on every two weeks."
      />
      <Section className="!pt-8">
        <div className="space-y-24">
          {processSteps.map((s, i) => (
            <div key={s.n} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
                <Image src={img(photoFor[i], 1100)} alt="" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
                <span className="font-display absolute left-6 top-4 text-7xl font-semibold text-white/90 drop-shadow">{s.n}</span>
              </div>
              <div className="reveal">
                <p className="text-sm uppercase tracking-widest text-brand2">{s.time}</p>
                <h2 className="font-display mt-3 text-4xl font-semibold">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-6 space-y-3">
                  {s.outputs.map((o) => <li key={o} className="flex items-center gap-3"><Check size={18} className="text-brand2" />{o}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-soft">
        <Heading center eyebrow="Principles" title="How we behave on every project" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="reveal rounded-3xl border border-line bg-card p-7">
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Heading center eyebrow="FAQ" title="Before we start" />
        <div className="mx-auto mt-12 max-w-3xl"><Faq items={faqs} /></div>
      </Section>
      <CTA />
    </>
  );
}
