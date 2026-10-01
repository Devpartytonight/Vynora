"use client";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/data";

const budgets = ["< AED 15k", "AED 15k – 60k", "AED 60k – 150k", "AED 150k+", "Not sure yet"];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong");
      setState("done");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="grid place-items-center rounded-3xl border border-line bg-card p-12 text-center">
        <CheckCircle2 size={48} className="text-brand2" />
        <h3 className="font-display mt-5 text-2xl font-semibold">Message received</h3>
        <p className="mt-3 max-w-sm text-muted">Thanks for reaching out. A member of our team will reply within one business day.</p>
        <button onClick={() => setState("idle")} className="mt-6 text-sm text-brand2 underline">Send another message</button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/30";
  const label = "mb-2 block text-sm font-medium";

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-line bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" name="name" required minLength={2} className={field} placeholder="Jane Doe" autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" required className={field} placeholder="jane@company.com" autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="company">Company</label>
          <input id="company" name="company" className={field} placeholder="Company name" autoComplete="organization" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone / WhatsApp</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+971 …" autoComplete="tel" />
        </div>
        <div>
          <label className={label} htmlFor="service">I&apos;m interested in</label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="budget">Budget</label>
          <select id="budget" name="budget" className={field} defaultValue="">
            <option value="" disabled>Select a range</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={label} htmlFor="message">Tell us about your project</label>
        <textarea id="message" name="message" required minLength={10} rows={5} className={field} placeholder="Goals, timeline, links to references…" />
      </div>
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {state === "error" && <p role="alert" className="text-sm text-red-400">{error}</p>}
      <button
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand2 px-8 py-3.5 font-medium text-bg transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" && <Loader2 size={18} className="animate-spin" />}
        {state === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="text-xs text-muted">By submitting you agree to our privacy policy. We never share your details.</p>
    </form>
  );
}
