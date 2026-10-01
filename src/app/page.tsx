import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Quote, Star, CheckCircle2 } from "lucide-react";
import { CTA, Container, Heading, ProjectCard, Section, ServiceCard } from "@/components/ui";
import { BgVideo } from "@/components/BgVideo";
import { Counter } from "@/components/Counter";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { faqs, industries, posts, processSteps, projects, services, stats, techStack, testimonials } from "@/lib/data";
import { img, photos, videos } from "@/lib/site";

export default function Home() {
  const marquee = Object.values(techStack).flat();
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-24">
        <Image src={img(photos.matrix, 1800)} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
        <BgVideo className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50" src={videos.hero} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg/70 via-bg/60 to-bg" />
        <div className="grid-bg absolute inset-0 -z-10 opacity-50" />
        <div className="blob absolute left-1/3 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-[140px]" />
        <div className="blob absolute right-10 bottom-10 -z-10 h-80 w-80 rounded-full bg-brand2/20 blur-[120px]" />

        <Container className="grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-1.5 text-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Now booking projects for Q4 · Dubai, UAE
            </span>
            <h1 className="font-display mt-7 text-[2.6rem] font-semibold leading-[1.05] sm:text-7xl lg:text-[5.5rem]">
              We build software <span className="grad-text">that scales</span> with your ambition.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Vynora is a Dubai software development agency. Web platforms, mobile and social apps, cloud
              infrastructure, data and AI, designed, engineered and run by one team.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-8 py-4 font-medium text-bg transition hover:scale-[1.03]">
                Start a project <ArrowRight size={18} />
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/5 px-8 py-4 font-medium backdrop-blur transition hover:bg-white/10">
                <Play size={16} /> View our work
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}</div>
              Trusted by startups and enterprises across the GCC
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="float glow relative overflow-hidden rounded-[2rem] border border-line">
              <Image src={img(photos.dashboard, 1000)} alt="Analytics dashboard built by Vynora" width={900} height={1000} priority className="h-[520px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-line bg-bg/70 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-widest text-brand2">Live deployment</p>
                <p className="font-display mt-1 text-xl">Shipped to production in 9 weeks</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brand to-brand2" /></div>
              </div>
            </div>
            <div className="float glow absolute -left-10 top-16 rounded-2xl border border-line bg-card/90 px-5 py-4 backdrop-blur" style={{ animationDelay: "1s" }}>
              <p className="text-3xl font-semibold font-display">98</p>
              <p className="text-xs text-muted">Lighthouse score</p>
            </div>
            <div className="float glow absolute -right-6 bottom-40 rounded-2xl border border-line bg-card/90 px-5 py-4 backdrop-blur" style={{ animationDelay: "2s" }}>
              <p className="text-3xl font-semibold font-display">99.9%</p>
              <p className="text-xs text-muted">Uptime target</p>
            </div>
          </div>
        </Container>
      </section>

      {/* TECH MARQUEE */}
      <section className="border-y border-line bg-soft py-6" aria-label="Technologies we use">
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee flex w-max gap-12 whitespace-nowrap">
            {[...marquee, ...marquee].map((t, i) => (
              <span key={i} className="font-display text-xl font-medium text-muted/70">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <Section className="!py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="reveal text-center">
              <p className="font-display grad-text text-5xl font-semibold sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Heading eyebrow="What we do" title={<>Everything you need to <span className="grad-text">design, build and run</span> digital products</>} />
          <Link href="/services" className="reveal inline-flex items-center gap-2 text-brand2 hover:underline">
            All services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}
        </div>
      </Section>

      {/* WHY US */}
      <Section className="bg-soft">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line">
              <Image src={img(photos.team, 1000)} alt="Vynora team collaborating" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
            </div>
            <div className="glow absolute -bottom-6 -right-4 max-w-[16rem] rounded-2xl border border-line bg-card p-5 sm:-right-8">
              <p className="font-display text-3xl font-semibold grad-text">1 team</p>
              <p className="mt-1 text-sm text-muted">Design, engineering, cloud and support under one roof.</p>
            </div>
          </div>
          <div>
            <Heading eyebrow="Why Vynora" title="A full-stack agency with its own infrastructure DNA" />
            <ul className="mt-8 space-y-5">
              {[
                ["Licensed & accountable", "A registered UAE company with a clear contract, NDA and invoicing process."],
                ["Product thinking", "We challenge scope, prioritise outcomes and ship in small, testable increments."],
                ["Cloud-native by default", "Every build ships with CI/CD, monitoring, backups and documented runbooks."],
                ["Transparent pricing", "Fixed-price milestones or monthly teams. No hidden extras."],
                ["Built to hand over", "You own the code, designs and infrastructure from day one."],
              ].map(([t, d]) => (
                <li key={t} className="reveal flex gap-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand2" size={22} />
                  <div><p className="font-medium">{t}</p><p className="mt-1 text-sm leading-relaxed text-muted">{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* WORK */}
      <Section>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Heading eyebrow="Selected work" title="Concept builds that show how we think" text="Representative case studies illustrating our approach across industries." />
          <Link href="/work" className="reveal inline-flex items-center gap-2 text-brand2 hover:underline">All projects <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="bg-soft">
        <Heading center eyebrow="How we work" title="A delivery process built for momentum" text="Five clear phases, with working software and visible progress at every step." />
        <div className="mt-16 grid gap-5 md:grid-cols-5">
          {processSteps.map((s, i) => (
            <div key={s.n} style={{ transitionDelay: `${i * 90}ms` }} className="reveal card-hover rounded-3xl border border-line bg-card p-6">
              <p className="font-display grad-text text-4xl font-semibold">{s.n}</p>
              <h3 className="font-display mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-brand2">{s.time}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* VIDEO / SHOWCASE BAND */}
      <section className="relative isolate overflow-hidden py-28">
        <BgVideo className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" src={videos.alt} />
        <div className="absolute inset-0 -z-10 bg-bg/70" />
        <Container className="grid gap-10 text-center md:grid-cols-3">
          {[
            ["Cloud", "Architected on AWS, Azure & GCP", "Cloud"],
            ["Mobile", "iOS & Android in one release cycle", "Smartphone"],
            ["AI", "Assistants grounded in your data", "Sparkles"],
          ].map(([t, d, ic]) => (
            <div key={t} className="reveal">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-line bg-white/5 text-brand2 backdrop-blur"><Icon name={ic} size={30} /></span>
              <h3 className="font-display mt-5 text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted">{d}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* INDUSTRIES */}
      <Section>
        <Heading eyebrow="Industries" title="Deep domain knowledge where it counts" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((x, i) => (
            <Link href="/industries" key={x.title} style={{ transitionDelay: `${(i % 5) * 60}ms` }} className="reveal card-hover rounded-2xl border border-line bg-card p-5">
              <Icon name={x.icon} size={26} className="text-brand2" />
              <p className="font-display mt-4 font-semibold">{x.title}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-soft">
        <Heading center eyebrow="Kind words" title="What partners say about working with us" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} style={{ transitionDelay: `${i * 90}ms` }} className="reveal rounded-3xl border border-line bg-card p-8">
              <Quote className="text-brand" size={30} />
              <blockquote className="mt-5 leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-line pt-5 text-sm">
                <p className="font-medium">{t.name}</p>
                <p className="text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* BLOG */}
      <Section>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Heading eyebrow="Insights" title="Notes from the engineering desk" />
          <Link href="/blog" className="reveal inline-flex items-center gap-2 text-brand2 hover:underline">All articles <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="reveal card-hover group overflow-hidden rounded-3xl border border-line bg-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={img(p.photo, 800)} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-brand2">{p.category} · {p.read}</p>
                <h3 className="font-display mt-3 text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Heading eyebrow="FAQ" title="Questions we hear a lot" text="Can't find your answer? Email us and we'll get back within a day." />
          <div className="reveal"><Faq items={faqs} /></div>
        </div>
      </Section>

      <div className="pt-20 sm:pt-28"><CTA /></div>
    </>
  );
}
