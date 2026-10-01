import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { CTA, Heading, PageHero, Section } from "@/components/ui";
import { Faq } from "@/components/Faq";
import { faqs, plans } from "@/lib/data";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent engagement models: fixed-price launches, product builds and dedicated teams.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        image={photos.planning}
        title={<>Simple, <span className="grad-text">transparent</span> engagement models</>}
        text="Indicative starting prices. Final quotes follow a free discovery call and are tied to clear milestones."
      />
      <Section className="!pt-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`reveal relative flex flex-col rounded-3xl border p-8 ${p.highlight ? "glow border-brand bg-gradient-to-b from-brand/15 to-card" : "border-line bg-card"}`}>
              {p.highlight && <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-brand to-brand2 px-3 py-1 text-xs font-semibold text-bg">Most popular</span>}
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
              <p className="font-display mt-6 text-4xl font-semibold">{p.price}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => <li key={f} className="flex gap-3 text-sm"><Check size={18} className="shrink-0 text-brand2" />{f}</li>)}
              </ul>
              <Link href="/contact" className={`mt-8 rounded-full py-3 text-center font-medium transition ${p.highlight ? "bg-gradient-to-r from-brand to-brand2 text-bg" : "border border-line hover:bg-white/5"}`}>
                Get a quote
              </Link>
            </div>
          ))}
        </div>
        <p className="reveal mt-8 text-center text-sm text-muted">All prices in AED, excluding VAT. Cloud hosting and third-party licences billed at cost.</p>
      </Section>
      <Section className="bg-soft">
        <Heading center eyebrow="FAQ" title="Pricing questions" />
        <div className="mx-auto mt-12 max-w-3xl"><Faq items={faqs} /></div>
      </Section>
      <CTA />
    </>
  );
}
