import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Globe2, GraduationCap, HeartPulse, Laptop } from "lucide-react";
import { Heading, PageHero, Section } from "@/components/ui";
import { jobs } from "@/lib/data";
import { img, photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Vynora Technologies in Dubai. Engineering, design, cloud and delivery roles.",
};

const perks = [
  { icon: Globe2, t: "Dubai-based, global work", d: "Tax-free salary, visa support and international clients." },
  { icon: Laptop, t: "Great equipment", d: "Pick your machine and set up your workspace." },
  { icon: GraduationCap, t: "Learning budget", d: "Courses, conferences and certifications covered." },
  { icon: HeartPulse, t: "Health cover", d: "Medical insurance and flexible time off." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" image={photos.collab} title={<>Build the <span className="grad-text">next chapter</span> with us</>} text="We are a small, senior team that cares about craft. If you like shipping real products for real clients, say hello." />
      <Section className="!pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.t} className="reveal rounded-3xl border border-line bg-card p-7">
              <p.icon className="text-brand2" size={26} />
              <h3 className="font-display mt-5 text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Heading eyebrow="Open roles" title="Join the team" text="Don't see your role? Send us your portfolio anyway." />
            <div className="reveal relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-3xl border border-line lg:block"><Image src={img(photos.startup, 900)} alt="" fill sizes="35vw" className="object-cover" /></div>
          </div>
          <div className="reveal divide-y divide-line rounded-3xl border border-line bg-card">
            {jobs.map((j) => (
              <a key={j.title} href={`mailto:${site.email}?subject=${encodeURIComponent("Application: " + j.title)}`} className="group flex items-center justify-between gap-4 p-6 transition hover:bg-white/3">
                <div>
                  <p className="font-display text-lg font-semibold">{j.title}</p>
                  <p className="mt-1 text-sm text-muted">{j.team} · {j.type} · {j.place}</p>
                </div>
                <ArrowUpRight className="shrink-0 text-muted transition group-hover:text-brand2" />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
