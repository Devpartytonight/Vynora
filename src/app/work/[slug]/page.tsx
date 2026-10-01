import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CTA, Container, PageHero, ProjectCard, Section } from "@/components/ui";
import { projects } from "@/lib/data";
import { img } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = projects.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={`${p.industry} · Case study`} title={p.title} text={p.summary} image={p.photo}>
        <Link href="/work" className="mt-8 inline-flex items-center gap-2 text-sm text-muted hover:text-fg"><ArrowLeft size={16} /> All projects</Link>
      </PageHero>

      <Container className="reveal">
        <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem] border border-line">
          <Image src={img(p.photo, 1800)} alt={p.title} fill priority sizes="100vw" className="object-cover" />
        </div>
      </Container>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-12">
            <div className="reveal"><h2 className="font-display text-2xl font-semibold">The challenge</h2><p className="mt-4 text-lg leading-relaxed text-muted">{p.challenge}</p></div>
            <div className="reveal"><h2 className="font-display text-2xl font-semibold">Our solution</h2><p className="mt-4 text-lg leading-relaxed text-muted">{p.solution}</p></div>
            <div className="reveal">
              <h2 className="font-display text-2xl font-semibold">Results we target</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {p.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-line bg-card p-6">
                    <p className="font-display grad-text text-4xl font-semibold">{r.value}</p>
                    <p className="mt-2 text-sm text-muted">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="reveal h-fit space-y-6 rounded-3xl border border-line bg-card p-7">
            <div><p className="text-xs uppercase tracking-widest text-brand2">Client</p><p className="mt-1">{p.client}</p></div>
            <div><p className="text-xs uppercase tracking-widest text-brand2">Industry</p><p className="mt-1">{p.industry}</p></div>
            <div><p className="text-xs uppercase tracking-widest text-brand2">Services</p><p className="mt-1">{p.services.join(", ")}</p></div>
            <div>
              <p className="text-xs uppercase tracking-widest text-brand2">Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</span>)}</div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-soft">
        <h2 className="font-display reveal text-3xl font-semibold">More work</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">{more.map((m) => <ProjectCard key={m.slug} p={m} />)}</div>
      </Section>
      <CTA />
    </>
  );
}
