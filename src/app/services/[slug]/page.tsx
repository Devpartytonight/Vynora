import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { CTA, Heading, PageHero, Section, ServiceCard } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { processSteps, projects, services } from "@/lib/data";
import { img } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const work = projects.slice(0, 2);

  return (
    <>
      <PageHero eyebrow="Service" title={s.title} text={s.short} image={s.photo}>
        <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-8 py-3.5 font-medium text-bg">
          Discuss this service <ArrowRight size={18} />
        </Link>
      </PageHero>

      <Section className="!pt-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div className="reveal">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand2/20 text-brand2"><Icon name={s.icon} size={28} /></span>
            <p className="mt-6 text-lg leading-relaxed text-muted">{s.long}</p>
            <h3 className="font-display mt-10 text-xl font-semibold">What you get</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.deliverables.map((d) => <li key={d} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm">{d}</li>)}
            </ul>
            <h3 className="font-display mt-10 text-xl font-semibold">Technology</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.stack.map((d) => <li key={d} className="rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm text-brand2">{d}</li>)}
            </ul>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
            <Image src={img(s.photo, 1200)} alt={s.title} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      <Section className="bg-soft">
        <Heading eyebrow="Capabilities" title="What's included" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {s.features.map((f) => (
            <div key={f} className="reveal flex gap-3 rounded-2xl border border-line bg-card p-5">
              <Check size={20} className="mt-0.5 shrink-0 text-brand2" />
              <p>{f}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="How it works" title="From first call to launch" />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((p) => (
            <div key={p.n} className="reveal rounded-2xl border border-line bg-card p-5">
              <p className="font-display grad-text text-2xl font-semibold">{p.n}</p>
              <p className="mt-2 font-medium">{p.title}</p>
              <p className="mt-1 text-xs text-muted">{p.time}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-soft">
        <Heading eyebrow="Related work" title="See it in action" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {work.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="reveal card-hover flex gap-5 rounded-3xl border border-line bg-card p-4">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-36 sm:w-36"><Image src={img(p.photo, 400)} alt="" fill sizes="144px" className="object-cover" /></div>
              <div className="self-center"><p className="text-xs uppercase tracking-widest text-brand2">{p.industry}</p><p className="font-display mt-2 text-lg font-semibold">{p.title}</p></div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Explore more" title="Other services" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">{related.map((r, i) => <ServiceCard key={r.slug} s={r} i={i} />)}</div>
      </Section>
      <CTA />
    </>
  );
}
