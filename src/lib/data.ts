import { photos } from "./site";

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  long: string;
  photo: string;
  features: string[];
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Design & Development",
    icon: "Globe",
    short: "Fast, accessible, conversion-focused websites and web platforms.",
    long: "From brand sites to complex multi-tenant platforms, we design and engineer web experiences that load instantly, rank well and convert. We build on modern frameworks with a design system at the core so your product stays consistent as it grows.",
    photo: photos.laptop,
    features: [
      "Marketing sites and headless CMS builds",
      "SaaS dashboards and customer portals",
      "E-commerce and booking platforms",
      "Progressive web apps with offline support",
      "Core Web Vitals and SEO engineering",
      "Arabic / English bilingual and RTL support",
    ],
    deliverables: ["UX research & wireframes", "UI design system", "Production code", "Analytics setup", "Launch & hypercare"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Sanity", "Shopify"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: "Smartphone",
    short: "Native-feel iOS and Android apps from one shared codebase or fully native.",
    long: "We ship mobile products people keep on their home screen. Whether cross-platform for speed or fully native for performance, we handle design, engineering, store submission and ongoing releases.",
    photo: photos.mobile,
    features: [
      "iOS and Android cross-platform with React Native / Flutter",
      "Native Swift and Kotlin where it matters",
      "Push notifications, deep links and in-app payments",
      "Offline-first sync and background tasks",
      "App Store and Google Play submission",
      "Crash monitoring and release automation",
    ],
    deliverables: ["Product discovery", "Interactive prototype", "Beta builds via TestFlight", "Store listing assets", "Maintenance plan"],
    stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
  },
  {
    slug: "social-media-apps",
    title: "Social & Community Platforms",
    icon: "Users",
    short: "Social media applications, feeds, chat and creator tools built to handle scale.",
    long: "We develop and manage social and community applications: profiles, feeds, messaging, moderation and creator monetisation, with the real-time infrastructure to keep them fast when usage spikes.",
    photo: photos.collab,
    features: [
      "Activity feeds and recommendation ranking",
      "Real-time chat, voice and live streaming",
      "Moderation tooling and trust & safety workflows",
      "Creator subscriptions and tipping",
      "Growth loops, referrals and notifications",
      "Social account management dashboards",
    ],
    deliverables: ["Architecture blueprint", "Realtime backend", "Admin & moderation console", "Analytics pipeline"],
    stack: ["WebSockets", "Redis", "PostgreSQL", "Kafka", "LiveKit", "Node.js"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    short: "Cloud architecture, migration, CI/CD and 24/7 reliability engineering.",
    long: "We design cloud platforms that are secure, observable and cost-efficient. From landing zones to Kubernetes, we automate everything so your team ships many times a day without fear.",
    photo: photos.servers,
    features: [
      "AWS, Azure and Google Cloud architecture",
      "Infrastructure as Code with Terraform",
      "Kubernetes and serverless platforms",
      "CI/CD pipelines and preview environments",
      "Monitoring, alerting and SRE on-call",
      "FinOps and cloud cost optimisation",
    ],
    deliverables: ["Cloud assessment", "Landing zone", "Pipelines", "Runbooks", "SLA-backed support"],
    stack: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Datadog"],
  },
  {
    slug: "data-centre-hosting",
    title: "Hosting, Colocation & Data Centre",
    icon: "Server",
    short: "Managed hosting, systems housing and colocation for mission-critical workloads.",
    long: "Our licensed activities include computer systems housing and data centre colocation. We help you place, run and protect infrastructure with the right mix of colocation, private cloud and managed services.",
    photo: photos.network,
    features: [
      "Computer systems housing and rack colocation",
      "Managed dedicated and private cloud hosting",
      "Backup, replication and disaster recovery",
      "Network design, firewalls and VPN",
      "Hardware procurement and lifecycle support",
      "Regional data residency guidance",
    ],
    deliverables: ["Capacity plan", "Hardware spec", "Network topology", "DR test report"],
    stack: ["VMware", "Proxmox", "Cisco", "Fortinet", "Veeam", "Ceph"],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering & Storage",
    icon: "Database",
    short: "Pipelines, warehouses and retrieval systems that turn raw data into decisions.",
    long: "We build the plumbing that makes data useful: ingestion, storage, retrieval and data entry automation, so reporting is trustworthy and teams stop copy-pasting between systems.",
    photo: photos.analytics,
    features: [
      "ETL / ELT pipelines and event streaming",
      "Data warehouses and lakehouses",
      "Data entry automation and document processing",
      "Search and retrieval systems",
      "BI dashboards and executive reporting",
      "Data governance and quality monitoring",
    ],
    deliverables: ["Data model", "Pipelines", "Warehouse", "Dashboards", "Documentation"],
    stack: ["PostgreSQL", "BigQuery", "Snowflake", "dbt", "Airflow", "Metabase"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    icon: "Sparkles",
    short: "Practical AI assistants, workflow automation and intelligent search for your business.",
    long: "We integrate large language models and automation into real workflows: support copilots, document understanding, internal knowledge search and back-office automation, with evaluation and guardrails built in.",
    photo: photos.ai,
    features: [
      "Customer support and sales copilots",
      "Retrieval-augmented generation over your documents",
      "Workflow automation and RPA",
      "Document extraction and classification",
      "Evaluation harnesses and safety guardrails",
      "Fine-tuning and model selection advice",
    ],
    deliverables: ["Use-case workshop", "Prototype in two weeks", "Evaluation report", "Production rollout"],
    stack: ["Claude", "OpenAI", "LangChain", "pgvector", "Python", "n8n"],
  },
  {
    slug: "custom-software",
    title: "Custom Software & Systems Design",
    icon: "Code2",
    short: "Bespoke ERP, CRM, internal tools and integrations designed around how you work.",
    long: "When off-the-shelf software bends your process out of shape, we design systems around it. We architect, build and integrate computer systems and communication equipment software, with clean APIs and long-term maintainability.",
    photo: photos.coding,
    features: [
      "ERP, CRM and operations platforms",
      "API design and third-party integrations",
      "Legacy modernisation and re-platforming",
      "Embedded and device-facing software",
      "Role-based access and audit trails",
      "Technical due diligence and code audits",
    ],
    deliverables: ["Architecture decision records", "Source code & tests", "API docs", "Training"],
    stack: ["Node.js", "Python", "Go", ".NET", "GraphQL", "gRPC"],
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure & Network Services",
    icon: "Network",
    short: "Offices, networks, security and end-user systems designed, installed and supported.",
    long: "We plan and deliver IT infrastructure for growing teams: structured networking, Wi-Fi, security, identity and endpoint management with responsive support.",
    photo: photos.hardware,
    features: [
      "Network design, cabling and Wi-Fi",
      "Identity, SSO and zero-trust access",
      "Endpoint management and helpdesk",
      "Cybersecurity hardening and audits",
      "Microsoft 365 and Google Workspace",
      "Managed IT retainers",
    ],
    deliverables: ["Site survey", "Bill of materials", "Installation", "Documentation", "Support SLA"],
    stack: ["Ubiquiti", "Fortinet", "Entra ID", "Okta", "Intune", "Jamf"],
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  photo: string;
  services: string[];
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "souq-commerce-platform",
    title: "Souq: Multi-vendor Marketplace",
    client: "Concept project",
    industry: "E-commerce",
    summary: "A bilingual marketplace connecting regional sellers with shoppers across the GCC.",
    photo: photos.payments,
    services: ["Web", "Cloud", "Data"],
    challenge:
      "Sellers were fragmented across social channels, with manual order handling, no unified checkout and no catalogue search worth using.",
    solution:
      "We designed a headless marketplace with vendor onboarding, split payments, Arabic-first search and a seller analytics console, deployed on autoscaling cloud infrastructure.",
    results: [
      { value: "3.1×", label: "Faster checkout" },
      { value: "98", label: "Lighthouse score" },
      { value: "-42%", label: "Cart abandonment" },
    ],
    stack: ["Next.js", "Stripe", "PostgreSQL", "Algolia", "AWS"],
  },
  {
    slug: "pulse-social-app",
    title: "Pulse: Community & Creator App",
    client: "Concept project",
    industry: "Social media",
    summary: "A short-form social app with live rooms, creator tipping and trust & safety tooling.",
    photo: photos.mobile,
    services: ["Mobile", "Social", "Cloud"],
    challenge:
      "A creator-led startup needed real-time engagement features that would survive launch-day spikes without a large infra team.",
    solution:
      "We delivered iOS and Android apps with a real-time backend, ranked feeds, live audio rooms and a moderation console, with load testing to 100k concurrent users.",
    results: [
      { value: "100k", label: "Concurrent users tested" },
      { value: "<150ms", label: "Feed latency p95" },
      { value: "4.8★", label: "Beta store rating" },
    ],
    stack: ["React Native", "Node.js", "Redis", "LiveKit", "GCP"],
  },
  {
    slug: "atlas-logistics-os",
    title: "Atlas: Logistics Operations Hub",
    client: "Concept project",
    industry: "Logistics",
    summary: "Fleet, warehouse and customs tracking in a single operations dashboard.",
    photo: photos.dashboard,
    services: ["Custom software", "Data"],
    challenge: "Dispatchers juggled six disconnected tools and spreadsheets, causing delays and lost shipments.",
    solution:
      "We built a unified operations platform with live tracking, automated document handling and predictive ETAs, integrated with carrier and customs APIs.",
    results: [
      { value: "-37%", label: "Manual data entry" },
      { value: "+22%", label: "On-time delivery" },
      { value: "1", label: "Source of truth" },
    ],
    stack: ["React", "Go", "Kafka", "BigQuery", "Mapbox"],
  },
  {
    slug: "meridian-fintech-core",
    title: "Meridian: Fintech Core Banking Portal",
    client: "Concept project",
    industry: "Fintech",
    summary: "A secure customer portal and admin back office for a digital lending startup.",
    photo: photos.security,
    services: ["Web", "Security", "Cloud"],
    challenge: "Compliance, audit trails and uptime requirements made the existing monolith risky to change.",
    solution:
      "We re-platformed to a modular architecture with zero-trust access, immutable audit logs, blue/green deployments and automated compliance reporting.",
    results: [
      { value: "99.99%", label: "Uptime" },
      { value: "12×", label: "More frequent releases" },
      { value: "0", label: "Critical audit findings" },
    ],
    stack: [".NET", "Azure", "Terraform", "Okta", "SQL Server"],
  },
  {
    slug: "clinic-flow-health",
    title: "ClinicFlow: Patient Booking & Records",
    client: "Concept project",
    industry: "Healthcare",
    summary: "Online booking, reminders and records for a multi-branch clinic network.",
    photo: photos.workshop,
    services: ["Web", "Mobile", "Data"],
    challenge: "Phone-based booking caused no-shows and long reception queues across branches.",
    solution:
      "We delivered a patient app and staff console with smart scheduling, WhatsApp reminders and secure records with role-based access.",
    results: [
      { value: "-48%", label: "No-shows" },
      { value: "5 min", label: "Avg. booking time" },
      { value: "4 branches", label: "Rolled out" },
    ],
    stack: ["Flutter", "Next.js", "Supabase", "Twilio"],
  },
  {
    slug: "nimbus-private-cloud",
    title: "Nimbus: Private Cloud & Colocation",
    client: "Concept project",
    industry: "Infrastructure",
    summary: "A hybrid private cloud with colocation racks, DR and managed operations.",
    photo: photos.servers,
    services: ["Data centre", "Cloud", "Network"],
    challenge: "A mid-size enterprise needed predictable cost, data residency and a tested disaster recovery plan.",
    solution:
      "We designed a hybrid environment with colocated racks, a virtualised private cloud, replicated backups and quarterly DR drills.",
    results: [
      { value: "-31%", label: "Infra cost" },
      { value: "RTO 30m", label: "Recovery objective" },
      { value: "24/7", label: "Managed ops" },
    ],
    stack: ["VMware", "Veeam", "Fortinet", "Terraform", "Prometheus"],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    time: "1–2 weeks",
    text: "Stakeholder interviews, user research, technical audit and a measurable definition of success.",
    outputs: ["Product brief", "Risk register", "Success metrics"],
  },
  {
    n: "02",
    title: "Design",
    time: "2–4 weeks",
    text: "Information architecture, wireframes, a clickable prototype and a reusable design system you own.",
    outputs: ["Wireframes", "Prototype", "Design system"],
  },
  {
    n: "03",
    title: "Build",
    time: "4–16 weeks",
    text: "Two-week sprints with working software every sprint, code review, automated tests and demo days.",
    outputs: ["Sprint demos", "Test suite", "Staging environment"],
  },
  {
    n: "04",
    title: "Launch",
    time: "1–2 weeks",
    text: "Performance and security hardening, load testing, observability and a calm, rehearsed release.",
    outputs: ["Go-live plan", "Runbooks", "Monitoring"],
  },
  {
    n: "05",
    title: "Scale",
    time: "Ongoing",
    text: "Roadmap, support SLAs, cost optimisation and experiments to keep your product growing.",
    outputs: ["Monthly reports", "Support SLA", "Roadmap"],
  },
];

export const industries = [
  { title: "Fintech & Banking", icon: "Landmark", text: "Secure portals, payments, KYC flows and audit-ready systems." },
  { title: "E-commerce & Retail", icon: "ShoppingBag", text: "Storefronts, marketplaces, POS integrations and loyalty." },
  { title: "Real Estate & PropTech", icon: "Building2", text: "Listings, CRM, virtual tours and tenant portals." },
  { title: "Healthcare", icon: "HeartPulse", text: "Booking, telehealth and records with strict access control." },
  { title: "Logistics & Supply Chain", icon: "Truck", text: "Tracking, routing, warehouse and customs workflows." },
  { title: "Hospitality & Travel", icon: "Plane", text: "Reservations, channel managers and guest experience apps." },
  { title: "Education", icon: "GraduationCap", text: "Learning platforms, LMS integrations and student apps." },
  { title: "Media & Creators", icon: "Clapperboard", text: "Social apps, streaming, community and monetisation." },
  { title: "Government & Public", icon: "Landmark", text: "Citizen services, digital forms and open-data portals." },
  { title: "Startups & Scale-ups", icon: "Rocket", text: "MVPs in weeks and engineering teams on demand." },
];

export const techStack: Record<string, string[]> = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vue", "Astro"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  Backend: ["Node.js", "Python", "Go", ".NET", "NestJS", "FastAPI"],
  Data: ["PostgreSQL", "MongoDB", "Redis", "BigQuery", "Snowflake", "Kafka"],
  Cloud: ["AWS", "Azure", "Google Cloud", "Cloudflare", "Vercel", "Terraform"],
  "AI & Automation": ["Claude", "OpenAI", "LangChain", "pgvector", "n8n", "Zapier"],
};

export const stats = [
  { value: 50, suffix: "+", label: "Products shipped" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 99.9, suffix: "%", label: "Uptime target" },
  { value: 24, suffix: "/7", label: "Support coverage" },
];

export const testimonials = [
  {
    quote:
      "Vynora turned a vague idea into a launched product in ten weeks. Communication was clear and the code quality was excellent.",
    name: "Sample Client",
    role: "Founder, E-commerce startup",
  },
  {
    quote:
      "They treated our infrastructure like their own: documented, monitored and cheaper than before. DR drills finally feel routine.",
    name: "Sample Client",
    role: "CTO, Logistics company",
  },
  {
    quote:
      "Design, engineering and cloud under one roof meant no hand-off headaches. We shipped our app on both stores in one release cycle.",
    name: "Sample Client",
    role: "Head of Product, Healthcare group",
  },
];

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "Every project is scoped individually. Websites typically start from AED 15,000, mobile apps and platforms from AED 60,000. After a free discovery call we send a fixed-price or time-and-materials proposal with clear milestones.",
  },
  {
    q: "How long will it take?",
    a: "A marketing website takes 3–6 weeks, an MVP app 8–14 weeks, and larger platforms are delivered in phases so you see value early.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. Source code, design files and infrastructure definitions are transferred to you at each payment milestone.",
  },
  {
    q: "Do you work with clients outside the UAE?",
    a: "Yes. We are based in Dubai and work with teams across the GCC, Europe, India and North America, with overlap hours for each timezone.",
  },
  {
    q: "Can you support Arabic and RTL interfaces?",
    a: "Absolutely. We design bilingual products with proper RTL layouts, typography and localisation workflows.",
  },
  {
    q: "What happens after launch?",
    a: "We offer maintenance retainers with SLAs, monitoring, security patches and a monthly roadmap session. You can also take over in-house at any time.",
  },
  {
    q: "How do you keep our data secure?",
    a: "Least-privilege access, encrypted storage and transit, code review, dependency scanning and signed NDAs as standard. We can align to ISO 27001 and UAE data-protection requirements on request.",
  },
];

export const values = [
  { title: "Craft over speed-running", text: "We sweat details users feel: performance, accessibility and polish." },
  { title: "Radical clarity", text: "Plain-language updates, honest estimates and no surprise invoices." },
  { title: "Own the outcome", text: "We measure ourselves on your metrics, not on hours billed." },
  { title: "Built to be handed over", text: "Clean code, docs and training so you are never locked in." },
];

export const team = [
  { name: "Engineering", role: "Full-stack, mobile & platform engineers", photo: photos.coding },
  { name: "Design", role: "Product, UX and brand designers", photo: photos.planning },
  { name: "Cloud & Security", role: "DevOps, SRE and infrastructure", photo: photos.network },
  { name: "Delivery", role: "Product managers and QA", photo: photos.meeting },
];

export const posts = [
  {
    slug: "choosing-nextjs-for-business-sites",
    title: "Why Next.js is our default for business websites",
    excerpt: "Performance, SEO and developer velocity: what the framework gives you out of the box and where it can hurt.",
    category: "Engineering",
    date: "2026-09-12",
    read: "6 min",
    photo: photos.code,
    body: [
      "Choosing a web framework is a business decision as much as a technical one. For most marketing sites and web apps, Next.js gives a strong default: server rendering for speed and SEO, a file-based router for clarity and a huge ecosystem.",
      "Performance is the first win. Server components send less JavaScript to the browser, and image and font optimisation are built in. That translates into better Core Web Vitals, which affect both search ranking and conversion.",
      "The second win is velocity. A single codebase covers pages, API routes and server actions, so a small team can ship end to end. Pair it with TypeScript and a design system and you get consistency without ceremony.",
      "It is not free of trade-offs. Caching rules take time to learn and hosting choices affect cost. We document these decisions at project kickoff so there are no surprises later.",
    ],
  },
  {
    slug: "mobile-cross-platform-vs-native",
    title: "Cross-platform or native: how to choose in 2026",
    excerpt: "A practical decision framework for founders planning their first mobile app.",
    category: "Mobile",
    date: "2026-08-28",
    read: "7 min",
    photo: photos.mobile,
    body: [
      "Most apps do not need to be fully native. Cross-platform toolkits such as React Native and Flutter share up to 90% of code and cut time to market.",
      "Go native when you depend on heavy graphics, advanced camera or sensor work, or platform-specific features on day one.",
      "Our rule of thumb: start cross-platform, measure, and drop to native modules only where profiling proves the need.",
    ],
  },
  {
    slug: "cloud-cost-optimisation-checklist",
    title: "A 10-point cloud cost optimisation checklist",
    excerpt: "Cut wasted spend without risking reliability, starting with tagging and right-sizing.",
    category: "Cloud",
    date: "2026-08-10",
    read: "5 min",
    photo: photos.servers,
    body: [
      "Cloud bills grow quietly. Start with visibility: enforce tagging so every resource maps to a team and product.",
      "Right-size compute, delete orphaned volumes and snapshots, and move steady workloads to committed-use discounts.",
      "Automate schedules for non-production environments and review the bill monthly with engineering and finance in the same room.",
    ],
  },
  {
    slug: "ai-assistants-that-actually-ship",
    title: "AI assistants that actually ship to production",
    excerpt: "Evaluation, guardrails and retrieval: the unglamorous parts that decide whether an AI feature works.",
    category: "AI",
    date: "2026-07-22",
    read: "8 min",
    photo: photos.ai,
    body: [
      "Demos are easy; reliable AI features are not. The difference is evaluation. Build a test set of real questions before you build the prompt.",
      "Ground answers in your own documents with retrieval, cite sources, and refuse when the answer is not in the data.",
      "Add guardrails, logging and a human escalation path. Treat the model as a component you can swap, not as the product.",
    ],
  },
  {
    slug: "launching-in-the-uae-checklist",
    title: "Launching a digital product in the UAE: a checklist",
    excerpt: "Licensing, data residency, payments, Arabic UX and other things teams forget.",
    category: "Business",
    date: "2026-07-01",
    read: "6 min",
    photo: photos.office,
    body: [
      "The UAE is one of the most digital-forward markets in the region, but launching here has its own details.",
      "Check your trade licence activities, payment gateway support, data hosting expectations and whether your product needs Arabic from day one.",
      "Plan for local holidays, WhatsApp-first communication and mobile-heavy usage when designing flows.",
    ],
  },
  {
    slug: "design-systems-for-startups",
    title: "Do startups really need a design system?",
    excerpt: "A lightweight system pays for itself by sprint three. Here is the minimum viable version.",
    category: "Design",
    date: "2026-06-14",
    read: "4 min",
    photo: photos.planning,
    body: [
      "A design system is not a 200-component library. Start with colour, type, spacing and five core components.",
      "Document them where engineers work, in code. Expand only when a pattern is reused three times.",
    ],
  },
];

export const jobs = [
  { title: "Senior Full-stack Engineer", type: "Full-time", place: "Dubai / Hybrid", team: "Engineering" },
  { title: "Mobile Engineer (React Native)", type: "Full-time", place: "Dubai / Remote", team: "Engineering" },
  { title: "Product Designer", type: "Full-time", place: "Dubai", team: "Design" },
  { title: "DevOps / Cloud Engineer", type: "Full-time", place: "Dubai / Hybrid", team: "Cloud" },
  { title: "Project Manager", type: "Full-time", place: "Dubai", team: "Delivery" },
];

export const plans = [
  {
    name: "Launch",
    price: "From AED 15k",
    desc: "Polished websites and landing platforms.",
    features: ["Up to 8 pages", "Design system lite", "CMS integration", "SEO & analytics", "30 days support"],
    highlight: false,
  },
  {
    name: "Product",
    price: "From AED 60k",
    desc: "Web or mobile apps built to grow.",
    features: ["Discovery workshops", "Custom UX/UI", "Web + mobile app", "Cloud & CI/CD", "90 days support", "QA automation"],
    highlight: true,
  },
  {
    name: "Dedicated Team",
    price: "Custom",
    desc: "A squad that works as your engineering arm.",
    features: ["Engineers, designers, QA", "Monthly rolling contract", "Delivery manager", "Shared roadmap", "SLA-backed support"],
    highlight: false,
  },
];
