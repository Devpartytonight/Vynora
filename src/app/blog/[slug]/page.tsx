import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CTA, Container } from "@/components/ui";
import { posts } from "@/lib/data";
import { img } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  const image = img(p.photo, 1200);
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, images: [{ url: image, width: 1200, height: 630, alt: p.title }] },
    twitter: { card: "summary_large_image", title: p.title, description: p.excerpt, images: [image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <article className="pt-36 sm:pt-44">
        <Container className="max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"><ArrowLeft size={16} /> All articles</Link>
          <p className="mt-8 text-xs uppercase tracking-widest text-brand2">{p.category} · {p.read} read</p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-6xl">{p.title}</h1>
          <p className="mt-6 text-xl text-muted">{p.excerpt}</p>
          <p className="mt-6 text-sm text-muted">By the Vynora team · {new Date(p.date).toLocaleDateString("en-GB", { dateStyle: "long" })}</p>
        </Container>
        <Container className="mt-12 max-w-5xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-line"><Image src={img(p.photo, 1800)} alt="" fill priority sizes="100vw" className="object-cover" /></div>
        </Container>
        <Container className="max-w-3xl py-16">
          <div className="space-y-6 text-lg leading-8 text-fg/85">
            {p.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </Container>
      </article>
      <Container className="pb-20">
        <h2 className="font-display text-2xl font-semibold">Keep reading</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {more.map((m) => (
            <Link key={m.slug} href={`/blog/${m.slug}`} className="card-hover rounded-3xl border border-line bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-brand2">{m.category}</p>
              <p className="font-display mt-2 text-xl font-semibold">{m.title}</p>
            </Link>
          ))}
        </div>
      </Container>
      <CTA />
    </>
  );
}
