"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-card">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-medium">{f.q}</span>
              <Plus size={20} className={`shrink-0 text-brand2 transition-transform ${isOpen ? "rotate-45" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-muted sm:px-8">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
