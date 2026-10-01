import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "./Icon";
import { img, videos } from "@/lib/site";
import type { Project, Service } from "@/lib/data";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/4 px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest text-brand2">
      <span className="h-1.5 w-1.5 rounded-full bg-brand2" />
      {children}
    </span>
  );
}

export function Heading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`reveal max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display mt-5 text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      {image && (
        <>
          <Image src={img(image, 1800)} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/80 to-bg" />
        </>
      )}
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="blob absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-brand/25 blur-[120px]" />
      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{text}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}

export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
      className="reveal card-hover group flex flex-col rounded-3xl border border-line bg-card p-7"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand2/20 text-brand2">
        <Icon name={s.icon} size={24} />
      </span>
      <h3 className="font-display mt-6 text-xl font-semibold">{s.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
        Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function ProjectCard({ p, big = false }: { p: Project; big?: boolean }) {
  return (
    <Link href={`/work/${p.slug}`} className="reveal group block">
      <div className={`relative overflow-hidden rounded-3xl border border-line ${big ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={img(p.photo, 1200)}
          alt={p.title}
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-bg/70 px-3 py-1 text-xs backdrop-blur">{p.industry}</span>
        <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-fg text-bg opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <h3 className="font-display mt-5 text-2xl font-semibold">{p.title}</h3>
      <p className="mt-2 text-muted">{p.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.services.map((t) => (
          <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</span>
        ))}
      </div>
    </Link>
  );
}

export function CTA({
  title = "Ready to build something great?",
  text = "Tell us about your idea. We'll reply within one business day with next steps and a rough estimate.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-28">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src={videos.cta}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/60 via-bg/80 to-brand2/30" />
        <div className="relative px-6 py-16 text-center sm:px-16 sm:py-24">
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-8 py-3.5 font-medium text-bg transition hover:scale-105">
              Start a project
            </Link>
            <Link href="/work" className="rounded-full border border-white/30 px-8 py-3.5 font-medium transition hover:bg-white/10">
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
