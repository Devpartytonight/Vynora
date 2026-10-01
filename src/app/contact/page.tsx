import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageSquare } from "lucide-react";
import { PageHero, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Vynora Technologies. Book a free discovery call.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" image={photos.meeting} title={<>Let&apos;s build <span className="grad-text">something great</span></>} text="Tell us about your project and we'll get back within one business day." />
      <Section className="!pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="reveal"><ContactForm /></div>
          <aside className="reveal space-y-5">
            {[
              { i: Mail, t: "Email", v: site.email, href: `mailto:${site.email}` },
              { i: MapPin, t: "Location", v: site.location },
              { i: Clock, t: "Hours", v: "Mon–Fri · 9:00–18:00 GST" },
              { i: MessageSquare, t: "Response time", v: "Within 1 business day" },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 rounded-2xl border border-line bg-card p-5">
                <c.i className="mt-0.5 shrink-0 text-brand2" size={22} />
                <div>
                  <p className="text-sm text-muted">{c.t}</p>
                  {c.href ? <a href={c.href} className="break-all font-medium hover:text-brand2">{c.v}</a> : <p className="font-medium">{c.v}</p>}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-brand/40 bg-brand/10 p-6">
              <p className="font-display text-lg font-semibold">What happens next?</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
                <li>We review your brief and reply within a day.</li>
                <li>A free 30-minute discovery call.</li>
                <li>Proposal with scope, timeline and price.</li>
              </ol>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
