"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        open ? "bg-bg border-b border-line" : scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Vynora Technologies home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {nav.map((n) => {
            const active = pathname === n.href || pathname.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "text-fg bg-white/8" : "text-muted hover:text-fg"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-fg px-5 py-2 text-sm font-medium text-bg transition hover:bg-white"
          >
            Start a project <ArrowUpRight size={16} />
          </Link>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden h-[calc(100svh-4rem)] overflow-y-auto border-t border-line px-5 pb-8 pt-3">
          <div className="flex flex-col">
            {[...nav, { label: "Pricing", href: "/pricing" }, { label: "Careers", href: "/careers" }].map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-lg">
                {n.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-5 rounded-full bg-fg py-3 text-center font-medium text-bg">
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
