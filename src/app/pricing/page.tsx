import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — IT Services Cost for Startups & Freelancers | BugCab India",
  description:
    "Transparent pricing for web development, mobile app development, UI/UX design, digital marketing & IT consulting. Fixed-price projects from ₹5,000. Free quote in 24 hours.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/pricing",
    title: "Pricing — IT Services Cost for Startups | BugCab India",
    description:
      "Web development from ₹15,000 · Mobile apps from ₹40,000 · UI/UX from ₹8,000 · SEO from ₹10,000/mo. Fixed prices, no surprise invoices.",
    images: [{ url: "https://bugcab.com/images/og-pricing.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "BugCab IT Services Pricing | India",
    description: "Fixed-price web, app, design & marketing for startups. From ₹5,000.",
    images: ["https://bugcab.com/images/og-pricing.jpg"],
  },
};

// ── Service pricing data ───────────────────────────────────────────────────
const services = [
  {
    name: "Web Development",
    href: "/services/web-development",
    color: "border-blue-500/30 hover:border-blue-500/60",
    tag: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    tiers: [
      {
        name: "Landing Page",
        price: "₹15,000",
        desc: "Single page — Hero, About, Services, CTA, Contact",
        time: "1–2 weeks",
        highlight: false,
      },
      {
        name: "Company Website",
        price: "₹25,000",
        desc: "6–8 pages with blog, SEO setup & analytics",
        time: "3–5 weeks",
        highlight: true,
      },
      {
        name: "Web App / SaaS",
        price: "₹60,000+",
        desc: "Full-stack Next.js + backend + auth + payments",
        time: "6–12 weeks",
        highlight: false,
      },
    ],
    includes: [
      "Mobile-first responsive design",
      "Full SEO setup (meta, schema, sitemap)",
      "PageSpeed 90+ optimisation",
      "Vercel deployment + custom domain",
      "30 days post-launch support",
    ],
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    color: "border-violet-500/30 hover:border-violet-500/60",
    tag: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    tiers: [
      {
        name: "MVP App",
        price: "₹40,000",
        desc: "Core user flows, basic backend, App Store submission",
        time: "6–8 weeks",
        highlight: false,
      },
      {
        name: "Full-Featured App",
        price: "₹80,000",
        desc: "All flows, payments, push notifications, admin panel",
        time: "10–14 weeks",
        highlight: true,
      },
      {
        name: "On-Demand / SaaS",
        price: "₹1,20,000+",
        desc: "Multi-role, real-time features, CI/CD pipeline",
        time: "14–20 weeks",
        highlight: false,
      },
    ],
    includes: [
      "iOS & Android — one codebase",
      "Figma UI design included",
      "App Store & Play Store submission",
      "Firebase push notifications",
      "30 days post-launch support",
    ],
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
    color: "border-pink-500/30 hover:border-pink-500/60",
    tag: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    tiers: [
      {
        name: "Landing Page Design",
        price: "₹8,000",
        desc: "Up to 6 screens, wireframes + high-fidelity Figma",
        time: "1–2 weeks",
        highlight: false,
      },
      {
        name: "Full Product UI",
        price: "₹25,000",
        desc: "All screens, design system, component library",
        time: "3–6 weeks",
        highlight: true,
      },
      {
        name: "Design System Only",
        price: "₹20,000",
        desc: "Figma component library + Tailwind-compatible tokens",
        time: "2–4 weeks",
        highlight: false,
      },
    ],
    includes: [
      "Wireframes + high-fidelity Figma",
      "Clickable prototype",
      "3 revision rounds included",
      "Developer handoff package",
      "Full Figma file ownership",
    ],
  },
  {
    name: "Digital Marketing & SEO",
    href: "/services/digital-marketing",
    color: "border-emerald-500/30 hover:border-emerald-500/60",
    tag: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    tiers: [
      {
        name: "SEO Audit (one-time)",
        price: "₹8,000",
        desc: "Full technical audit + prioritised fix list",
        time: "5–7 business days",
        highlight: false,
      },
      {
        name: "SEO Starter",
        price: "₹10,000/mo",
        desc: "Monthly audit + 2 blog posts + keyword tracking",
        time: "Monthly retainer",
        highlight: false,
      },
      {
        name: "SEO Growth",
        price: "₹20,000/mo",
        desc: "4 posts + backlink outreach + competitor analysis",
        time: "Monthly retainer",
        highlight: true,
      },
    ],
    includes: [
      "No long-term contracts",
      "Monthly rankings report",
      "Google Search Console monitoring",
      "Core Web Vitals tracking",
      "Cancel anytime — 30 days notice",
    ],
  },
  {
    name: "IT Consulting",
    href: "/services/it-consulting",
    color: "border-amber-500/30 hover:border-amber-500/60",
    tag: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    tiers: [
      {
        name: "Focused Session",
        price: "₹5,000",
        desc: "2-hour deep dive on one topic — stack, architecture, or code review",
        time: "Single session",
        highlight: false,
      },
      {
        name: "Full Tech Audit",
        price: "₹15,000",
        desc: "4-hour audit covering stack, architecture + written report",
        time: "5–7 business days",
        highlight: true,
      },
      {
        name: "CTO-on-Demand",
        price: "₹20,000/mo",
        desc: "Ongoing fractional CTO advisory — 4 hrs/month",
        time: "Monthly retainer",
        highlight: false,
      },
    ],
    includes: [
      "First 30-min discovery call free",
      "Session recording included",
      "Written recommendations report",
      "7 days async email Q&A",
      "No retainer required to start",
    ],
  },
  {
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    color: "border-red-500/30 hover:border-red-500/60",
    tag: "bg-red-500/10 border-red-500/20 text-red-400",
    tiers: [
      {
        name: "Basic Security Audit",
        price: "₹8,000",
        desc: "OWASP Top 10 + SSL + security headers + dependency CVE scan",
        time: "3–5 business days",
        highlight: false,
      },
      {
        name: "Full Security Audit",
        price: "₹20,000",
        desc: "Manual pen testing + WAF setup + BugCab fixes all Critical/High",
        time: "7–10 business days",
        highlight: true,
      },
      {
        name: "Monthly Monitoring",
        price: "₹8,000/mo",
        desc: "Continuous vulnerability scanning + patch advisory",
        time: "Monthly retainer",
        highlight: false,
      },
    ],
    includes: [
      "Written vulnerability report",
      "Severity-rated findings (Critical/High/Medium/Low)",
      "Step-by-step remediation guide",
      "Re-test after fixes",
      "30 days post-audit email Q&A",
    ],
  },
];

// ── Schema ─────────────────────────────────────────────────────────────────
function PricingSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://bugcab.com/pricing/#webpage",
          url: "https://bugcab.com/pricing",
          name: "IT Services Pricing — BugCab India",
          description:
            "Transparent pricing for web development, mobile apps, UI/UX design, digital marketing, IT consulting and cybersecurity for startups and freelancers across India.",
          isPartOf: { "@id": "https://bugcab.com/#website" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Pricing",
                item: "https://bugcab.com/pricing",
              },
            ],
          },
        }),
      }}
    />
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <main className="relative pt-24 bg-background text-foreground">
      <PricingSchema />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 py-4">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Pricing</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">— Pricing</span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
          Transparent Pricing — <span className="text-primary">No Surprise Invoices.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Every project gets a fixed-price proposal before work starts. No hourly billing, no
          scope-creep invoices, no hidden fees. Starting prices below — exact quote within 24 hours.
        </p>

        {/* Trust pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Fixed price — agreed before we start",
            "Free 30-min discovery call",
            "Response within 24 hours",
            "No long-term contracts on retainers",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card/40 px-4 py-2 text-sm text-muted-foreground"
            >
              ✓ {t}
            </span>
          ))}
        </div>
      </section>

      {/* Service pricing sections */}
      <section className="mx-auto max-w-7xl px-6 pb-16 space-y-16">
        {services.map((svc) => (
          <div
            key={svc.name}
            className={`rounded-3xl border p-8 lg:p-10 transition-colors ${svc.color}`}
          >
            {/* Service header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${svc.tag}`}>
                  {svc.name}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                  {svc.name} Pricing
                </h2>
              </div>
              <Link
                href={svc.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-2"
                aria-label={`View full ${svc.name} service page`}
              >
                View service details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tiers */}
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {svc.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl border p-5 transition-colors ${
                    tier.highlight ? "border-primary/40 bg-primary/5" : "border-border bg-card/30"
                  }`}
                >
                  {tier.highlight && (
                    <span className="mb-3 inline-block rounded-full bg-primary/20 border border-primary/30 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      Most popular
                    </span>
                  )}
                  <p className="font-display text-2xl font-bold text-foreground">{tier.price}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{tier.name}</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{tier.desc}</p>
                  <p className="mt-3 text-xs text-muted-foreground">⏱ {tier.time}</p>
                </div>
              ))}
            </div>

            {/* Includes */}
            <div className="border-t border-border/50 pt-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
                All tiers include:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {svc.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison note */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-border bg-card/30 p-8">
          <h2 className="font-display text-2xl font-bold">Why BugCab Doesn't Charge by the Hour</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Hourly billing creates misaligned incentives — slower work means more revenue for the
            agency. Fixed-price projects mean we're incentivised to deliver efficiently and
            correctly the first time. You know the cost before we start. We know the scope before we
            start. No surprises for either side.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Large agency (hourly)",
                cost: "₹3,000–₹8,000/hr",
                note: "Minimum 40 hrs. Bill grows with revisions.",
                dim: true,
              },
              {
                label: "BugCab (fixed price)",
                cost: "Fixed before start",
                note: "Scope agreed upfront. Revisions included.",
                dim: false,
              },
              {
                label: "Freelancer (hourly)",
                cost: "₹500–₹1,500/hr",
                note: "Cheap rate, no process, no QA, no support.",
                dim: true,
              },
            ].map(({ label, cost, note, dim }) => (
              <div
                key={label}
                className={`rounded-xl p-4 border ${
                  dim ? "border-border/50 opacity-70" : "border-primary/30 bg-primary/5"
                }`}
              >
                <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {label}
                </p>
                <p
                  className={`mt-2 font-display text-xl font-bold ${dim ? "text-foreground" : "text-primary"}`}
                >
                  {cost}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-primary/5 border border-primary/20 p-12 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Get Your <span className="text-primary">Fixed-Price Quote.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Tell us what you're building. We'll send a detailed, itemised proposal within 24 hours.
            No commitment required.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            Free 30-min discovery call · Response within 24 hours · Mon–Sat 10AM–7PM IST
          </p>
        </div>
      </section>
    </main>
  );
}
