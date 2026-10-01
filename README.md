# Vynora Technologies website

Marketing site for **Vynora Technologies L.L.C** (Dubai software development agency). Next.js (App Router) + TypeScript + Tailwind v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structure
- `src/lib/site.ts` – company info, nav, stock photo IDs (Unsplash) and video URLs (Pexels)
- `src/lib/data.ts` – services, case studies, process, FAQs, blog posts, jobs, pricing (edit content here)
- `src/components/` – Navbar, Footer, shared UI, FAQ, counters, contact form
- `src/app/` – pages: `/`, `/services[/slug]`, `/work[/slug]`, `/process`, `/industries`, `/about`, `/pricing`, `/blog[/slug]`, `/careers`, `/contact`, `/privacy`, `/terms`, plus `sitemap.xml`, `robots.txt`, `404`
- `src/app/api/contact/route.ts` – validates the form; set `CONTACT_WEBHOOK_URL` (Slack/Zapier/n8n/CRM) to forward leads

## Before launch
- Replace placeholder testimonials, stats, concept case studies and pricing with real ones
- Add phone, street address and social links to `site.ts`
- Set `site.url` to the real domain
- Swap stock photos/videos for your own, or download them locally (check Unsplash/Pexels licences)
