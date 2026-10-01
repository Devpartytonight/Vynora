import { NextResponse } from "next/server";

type Payload = Record<string, unknown>;

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const lead = {
    name: str(body.name, 120),
    email: str(body.email, 200),
    company: str(body.company, 120),
    phone: str(body.phone, 40),
    service: str(body.service, 120),
    budget: str(body.budget, 60),
    message: str(body.message, 5000),
  };

  if (lead.name.length < 2) return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email))
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 422 });
  if (lead.message.length < 10)
    return NextResponse.json({ error: "Please tell us a little more about your project." }, { status: 422 });

  // Forward to a webhook (Slack, Zapier, n8n, CRM…) when configured.
  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook) {
    try {
      const r = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: `New Vynora lead from ${lead.name}`, ...lead }),
      });
      if (!r.ok) throw new Error(`webhook ${r.status}`);
    } catch (err) {
      console.error("Contact webhook failed", err);
      return NextResponse.json({ error: "We couldn't send your message. Please email us directly." }, { status: 502 });
    }
  } else {
    console.log("[contact] new lead (set CONTACT_WEBHOOK_URL to forward)", lead);
  }

  return NextResponse.json({ ok: true });
}
