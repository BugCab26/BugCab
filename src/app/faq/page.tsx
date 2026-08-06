import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | BugCab IT Solutions India",
  description:
    "Answers to the most common questions about BugCab's web development, mobile app, UI/UX design, digital marketing & IT consulting services for startups across India.",
  alternates: { canonical: "https://bugcab.com/faq" },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/faq",
    title: "FAQ | BugCab IT Solutions India",
    description:
      "Common questions about web development, mobile apps, UI/UX, SEO & IT consulting for startups. Answered honestly.",
    images: [{ url: "https://bugcab.com/images/og-faq.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
};

const categories = [
  {
    name: "General",
    faqs: [
      {
        q: "What does BugCab do?",
        a: "BugCab is an IT solutions company that helps startups and freelancers across India build websites, mobile apps, UI/UX designs, digital marketing strategies, and provides IT consulting. We handle everything from your first MVP to ongoing growth.",
      },
      {
        q: "Where is BugCab based?",
        a: "BugCab is based in Erode, Tamil Nadu, India. We work with clients across India and internationally — all project communication happens remotely via video calls, Slack, and email.",
      },
      {
        q: "How do I get started with BugCab?",
        a: "Fill out our contact form or email hello@bugcab.com with a brief description of your project. We'll schedule a free 30-minute discovery call within 24 hours, understand your requirements, and send a fixed-price proposal. No commitment required.",
      },
      {
        q: "Do you work with solo founders and freelancers — not just companies?",
        a: "Absolutely. Solo founders and freelancers are a core part of who we build for. We offer startup-friendly pricing, flexible engagement models, and clear communication throughout. Whether you need a personal portfolio or a full SaaS product, we've got you.",
      },
    ],
  },
  {
    name: "Pricing & Process",
    faqs: [
      {
        q: "How much do your services cost?",
        a: "Web development starts from ₹15,000. Mobile app development starts from ₹40,000. UI/UX design starts from ₹8,000. Digital marketing retainers start from ₹10,000/month. IT consulting sessions start from ₹5,000. View our full pricing page for all tiers and details.",
      },
      {
        q: "Do you charge by the hour or fixed price?",
        a: "Fixed price — always. We agree on a scope, timeline, and total price before any work starts. No hourly billing, no scope-creep invoices, no surprises. You know the exact cost before we begin.",
      },
      {
        q: "How long does a project take?",
        a: "A landing page takes 1–2 weeks. A full company website takes 3–5 weeks. A mobile app MVP takes 6–8 weeks. A full-featured app or SaaS takes 10–20 weeks. Every project gets a specific timeline in the proposal.",
      },
      {
        q: "What happens after I contact you?",
        a: "1. We review your message within 24 hours. 2. We schedule a free 30-minute discovery call. 3. We send a fixed-price proposal with scope, timeline, and deliverables. 4. You approve and we begin. No commitment until you approve the proposal.",
      },
      {
        q: "Do you offer post-launch support?",
        a: "Yes. Every project includes 30 days of free post-launch support — bug fixes, content changes, and minor adjustments. After 30 days, we offer monthly maintenance retainers starting from ₹3,000/month.",
      },
    ],
  },
  {
    name: "Web Development",
    faqs: [
      {
        q: "What technologies do you use for web development?",
        a: "We build with Next.js 15, React 19, TypeScript, Tailwind CSS, Node.js, PostgreSQL, and Supabase. Deployment is on Vercel. We choose the right stack for your project — not just what we're comfortable with.",
      },
      {
        q: "Will my website be SEO-optimised?",
        a: "Yes — SEO is built into every website from day one. Every BugCab site includes correct H1/H2 heading structure, meta titles, meta descriptions, canonical tags, schema markup, XML sitemap, robots.txt, and PageSpeed 90+ on mobile and desktop.",
      },
      {
        q: "Will I own the code after delivery?",
        a: "100%. We hand over the complete GitHub repository with documentation after every project. You own the code, the domain, and the hosting account. We never lock you into a proprietary system.",
      },
    ],
  },
  {
    name: "Mobile App Development",
    faqs: [
      {
        q: "Do you build for iOS and Android?",
        a: "Yes — all BugCab apps are built cross-platform with React Native or Flutter. One codebase runs natively on both iOS and Android. Both platforms are included in the project price, not billed separately.",
      },
      {
        q: "Flutter or React Native — which do you recommend?",
        a: "It depends on your app. Choose Flutter for highly custom UI or complex animations. Choose React Native if your team knows JavaScript or you're sharing code with a React web app. We advise you during the free discovery call based on your specific situation.",
      },
      {
        q: "Do you handle App Store submission?",
        a: "Yes — complete submission to both the Apple App Store and Google Play Store, including screenshots, descriptions, age ratings, and handling any review feedback. Both stores included in every project.",
      },
    ],
  },
  {
    name: "Digital Marketing & SEO",
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Honest answer: 3–6 months for meaningful organic traffic growth on a new website. Sites with existing content can see movement in 4–8 weeks. We set realistic timelines upfront and track every metric monthly.",
      },
      {
        q: "Do you offer Google Ads management?",
        a: "Currently BugCab focuses on SEO and content marketing — the organic, compounding channels. We don't run paid ad campaigns. If you need Google Ads, we can recommend trusted specialists.",
      },
      {
        q: "Is there a long-term contract for retainers?",
        a: "No. All retainers are month-to-month with 30 days notice to cancel. We earn your continued business with results every month — not by locking you in.",
      },
    ],
  },
];

function FaqSchema() {
  const allFaqs = categories.flatMap((c) => c.faqs);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "@id": "https://bugcab.com/faq",
              name: "BugCab FAQ — Frequently Asked Questions",
              mainEntity: allFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
                { "@type": "ListItem", position: 2, name: "FAQ", item: "https://bugcab.com/faq" },
              ],
            },
          ],
        }),
      }}
    />
  );
}

export default function FaqPage() {
  return (
    <main className="relative pt-24 bg-background text-foreground">
      <FaqSchema />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 py-4">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground">FAQ</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">— FAQ</span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
          Frequently Asked <span className="text-primary">Questions.</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Everything you need to know about working with BugCab — answered honestly, without agency
          fluff.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 space-y-14">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h2 className="font-display text-xl font-bold text-foreground border-b border-border pb-4 mb-6">
              {cat.name}
            </h2>
            <div className="space-y-5">
              {cat.faqs.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-border bg-card/40 p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{q}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-3xl bg-primary/5 border border-primary/20 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Have a question not answered here?
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Ask us directly — we respond within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
          >
            Ask a Question <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
