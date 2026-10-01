import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA, PageHero, Section } from "@/components/ui";
import { posts } from "@/lib/data";
import { img, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Engineering, design, cloud and AI articles from the Vynora team.",
};

export default function BlogPage() {
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero eyebrow="Insights" image={photos.code} title={<>Ideas from the <span className="grad-text">engineering desk</span></>} text="Practical writing on building, shipping and running software." />
      <Section className="!pt-8">
        <Link href={`/blog/${first.slug}`} className="reveal group grid overflow-hidden rounded-[2rem] border border-line bg-card lg:grid-cols-2">
          <div className="relative aspect-[16/10] lg:aspect-auto"><Image src={img(first.photo, 1200)} alt="" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
          <div className="p-8 sm:p-12">
            <p className="text-xs uppercase tracking-widest text-brand2">Featured · {first.category}</p>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{first.title}</h2>
            <p className="mt-4 text-lg text-muted">{first.excerpt}</p>
            <p className="mt-6 text-sm text-muted">{new Date(first.date).toLocaleDateString("en-GB", { dateStyle: "long" })} · {first.read} read</p>
          </div>
        </Link>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="reveal card-hover group overflow-hidden rounded-3xl border border-line bg-card">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src={img(p.photo, 800)} alt="" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-brand2">{p.category} · {p.read}</p>
                <h3 className="font-display mt-3 text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
