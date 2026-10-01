import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{site.description}</p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2.5"><Mail size={16} className="text-brand2" />
              <a href={`mailto:${site.email}`} className="hover:text-fg">{site.email}</a>
            </li>
            <li className="flex items-center gap-2.5"><MapPin size={16} className="text-brand2" />{site.location}</li>
            <li className="flex items-center gap-2.5"><ShieldCheck size={16} className="text-brand2" />
              Trade licence No. {site.licenseNo}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}><Link className="hover:text-fg" href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            {[["About", "/about"], ["Our work", "/work"], ["Process", "/process"], ["Industries", "/industries"], ["Pricing", "/pricing"], ["Careers", "/careers"], ["Insights", "/blog"], ["Contact", "/contact"]].map(([l, h]) => (
              <li key={h}><Link className="hover:text-fg" href={h}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Let&apos;s talk</h3>
          <p className="mt-4 text-sm text-muted">Have a project in mind? We reply within one business day.</p>
          <Link href="/contact" className="mt-4 inline-flex rounded-full bg-gradient-to-r from-brand to-brand2 px-5 py-2.5 text-sm font-medium text-bg">
            Book a free call
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 sm:px-8 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-fg">Privacy</Link>
            <Link href="/terms" className="hover:text-fg">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-fg">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
