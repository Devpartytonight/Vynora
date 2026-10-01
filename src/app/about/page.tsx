import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { CTA, Heading, PageHero, Section } from "@/components/ui";
import { Counter } from "@/components/Counter";
import { stats, team, values } from "@/lib/data";
import { img, photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Vynora Technologies L.L.C is a licensed Dubai technology company building software, cloud and IT infrastructure.",
};

const activities = [
  "Web design and development",
  "Social media applications development & management",
  "Computer systems & communication equipment software design",
  "Cloud service & data centre provider",
  "Data centre colocation services",
  "Computer systems housing services",
  "Data storage & retrieval",
  "Data entry services",
  "IT infrastructure",
  "Information technology network services",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        image={photos.office}
        title={<>A Dubai technology company with an <span className="grad-text">engineer&apos;s mindset</span></>}
        text="Vynora Technologies L.L.C. designs, builds and operates digital products and the infrastructure behind them."
      />

      <Section className="!pt-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <Heading eyebrow="Our story" title="Software and infrastructure, finally under one roof" />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              <p>Most businesses end up juggling a design studio, a dev shop, a cloud consultant and a hosting vendor. Handoffs break, blame circulates and products suffer.</p>
              <p>We started Vynora in Dubai to remove those seams: one accountable team that can wireframe your app, write the code, set up the cloud and keep it running, from software to the servers.</p>
              <p>Today we serve startups, SMEs and enterprises across the GCC and beyond.</p>
            </div>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image src={img(photos.workshop, 1200)} alt="Team workshop" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      <Section className="bg-soft !py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center">
              <p className="font-display grad-text text-5xl font-semibold"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading center eyebrow="Values" title="What we stand for" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} style={{ transitionDelay: `${i * 80}ms` }} className="reveal card-hover rounded-3xl border border-line bg-card p-7">
              <h3 className="font-display text-xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-soft">
        <Heading eyebrow="The team" title="Specialists across the stack" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div key={t.name} className="reveal group overflow-hidden rounded-3xl border border-line bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={img(t.photo, 700)} alt="" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6"><p className="font-display text-lg font-semibold">{t.name}</p><p className="mt-1 text-sm text-muted">{t.role}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Licensed & registered" title="Official, accountable and transparent" text={`${site.legalName} is a Limited Liability Company registered in Dubai and ${site.license.toLowerCase()}.`} />
            <dl className="reveal mt-8 grid grid-cols-2 gap-4 text-sm">
              {[["Legal name", site.legalName], ["Licence No.", site.licenseNo], ["Legal type", "LLC (Single Owner)"], ["Emirate", "Dubai, UAE"]].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-line bg-card p-4"><dt className="text-muted">{k}</dt><dd className="mt-1 font-medium">{v}</dd></div>
              ))}
            </dl>
          </div>
          <div className="reveal rounded-3xl border border-line bg-card p-8">
            <h3 className="font-display text-xl font-semibold">Licensed activities</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {activities.map((a) => <li key={a} className="flex gap-2.5 text-sm text-muted"><BadgeCheck size={18} className="mt-0.5 shrink-0 text-brand2" />{a}</li>)}
            </ul>
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}
