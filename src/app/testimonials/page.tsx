import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials — BugCab IT Solutions India",
  description:
    "See what startup founders and freelancers say about working with BugCab. Real reviews on web development, mobile app development, UI/UX design & digital marketing across India.",
  alternates: { canonical: "https://bugcab.com/testimonials" },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/testimonials",
    title: "Client Reviews & Testimonials | BugCab IT Solutions India",
    description:
      "Real reviews from startup founders and freelancers on BugCab's web development, mobile apps, UI/UX & digital marketing services.",
    images: [{ url: "https://bugcab.com/images/og-testimonials.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews | BugCab IT Solutions India",
    description:
      "Real reviews from startup founders on web development, mobile apps & digital marketing.",
    images: ["https://bugcab.com/images/og-testimonials.jpg"],
  },
};

// ── Review data ────────────────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Founder",
    company: "Fintrax",
    tag: "Web Development",
    rating: 5,
    date: "2025-01-10",
    review:
      "BugCab built our entire SaaS platform from scratch in under 8 weeks. The Next.js architecture they chose has scaled perfectly as we've grown. The code quality and delivery speed were both exceptional. Worth every rupee.",
    project: "SaaS dashboard + admin panel",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Independent Consultant",
    company: "Priya Nair Consulting",
    tag: "UI/UX Design",
    rating: 5,
    date: "2025-01-18",
    review:
      "I needed a professional website that would win clients from the first impression. BugCab delivered a Figma-to-production design that genuinely looks enterprise-grade. Every screen was approved before they wrote a single line of code — exactly how a design process should work.",
    project: "Consultant portfolio website + UI design",
  },
  {
    id: 3,
    name: "Rajan Krishnamurthy",
    role: "Co-Founder",
    company: "Edunova",
    tag: "Digital Marketing",
    rating: 5,
    date: "2025-02-05",
    review:
      "Their digital marketing team took us from zero to 5,000 monthly organic visitors in four months. The SEO strategy they built — technical fixes first, then content — is still compounding today. We rank on page one for our three main keywords.",
    project: "SEO strategy + content marketing",
  },
  {
    id: 4,
    name: "Karthik Sundaram",
    role: "CTO",
    company: "LogiStack",
    tag: "Mobile App Development",
    rating: 5,
    date: "2025-02-20",
    review:
      "We evaluated four agencies before choosing BugCab. What made the difference was their transparent pricing and the fact they advised us to build in Flutter over React Native for our specific use case — even though it was slightly harder for them. That honesty won our trust immediately.",
    project: "Cross-platform logistics app (Flutter)",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    role: "Founder",
    company: "StyleCircle",
    tag: "Web Development",
    rating: 5,
    date: "2025-03-10",
    review:
      "BugCab took our e-commerce idea from wireframe to live store in 5 weeks. The Razorpay integration worked perfectly from day one and the admin panel they built makes managing inventory genuinely easy. Post-launch support was excellent — every bug fixed within hours.",
    project: "E-commerce website + Razorpay integration",
  },
  {
    id: 6,
    name: "Vikram Anand",
    role: "Solo Founder",
    company: "TaskBlast",
    tag: "IT Consulting",
    rating: 5,
    date: "2025-03-25",
    review:
      "I came to BugCab with three conflicting tech stack recommendations from three different developers. Their IT consulting session gave me a clear, documented recommendation with reasoning. That 2-hour session saved me from making a ₹60,000 mistake. Best money I spent in early stage.",
    project: "Tech stack advisory + architecture planning",
  },
  {
    id: 7,
    name: "Divya Ramesh",
    role: "Product Manager",
    company: "HealthBridge",
    tag: "UI/UX Design",
    rating: 5,
    date: "2025-04-08",
    review:
      "The UI/UX design BugCab delivered for our patient portal was so well thought out that our development team had almost no questions during implementation. The Figma file with developer handoff specs was the most complete design handoff I've seen in five years of product management.",
    project: "Patient portal UI design + design system",
  },
  {
    id: 8,
    name: "Sathish Kumar",
    role: "Director",
    company: "MAAC Salem",
    tag: "Web Development",
    rating: 5,
    date: "2025-04-20",
    review:
      "BugCab handled our web development and ongoing technical support with complete professionalism. Our learning platform now handles thousands of students without any downtime. The performance improvements they made reduced our page load time by 60%.",
    project: "EdTech platform + ongoing technical support",
  },
];

// ── Tag colour map ─────────────────────────────────────────────────────────
const tagColors: Record<string, string> = {
  "Web Development": "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "Mobile App Development": "bg-violet-500/10 border-violet-500/20 text-violet-400",
  "UI/UX Design": "bg-pink-500/10 border-pink-500/20 text-pink-400",
  "Digital Marketing": "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  "IT Consulting": "bg-amber-500/10 border-amber-500/20 text-amber-400",
  Cybersecurity: "bg-red-500/10 border-red-500/20 text-red-400",
};

// ── Star renderer ──────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
      ))}
    </div>
  );
}

// ── Schema ─────────────────────────────────────────────────────────────────
function TestimonialsSchema() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://bugcab.com/testimonials/#webpage",
              url: "https://bugcab.com/testimonials",
              name: "Client Reviews & Testimonials — BugCab IT Solutions India",
              isPartOf: { "@id": "https://bugcab.com/#website" },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Testimonials",
                    item: "https://bugcab.com/testimonials",
                  },
                ],
              },
            },
            {
              "@type": "Organization",
              "@id": "https://bugcab.com/#organization",
              name: "BugCab IT Solutions",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: avgRating,
                reviewCount: reviews.length.toString(),
                bestRating: "5",
                worstRating: "1",
              },
            },
            ...reviews.map((r) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: r.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating.toString(),
                bestRating: "5",
              },
              reviewBody: r.review,
              datePublished: r.date,
              itemReviewed: {
                "@id": "https://bugcab.com/#organization",
              },
            })),
          ],
        }),
      }}
    />
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function TestimonialsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const tagCounts = reviews.reduce<Record<string, number>>((acc, r) => {
    acc[r.tag] = (acc[r.tag] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <main className="relative pt-24 bg-background text-foreground">
      <TestimonialsSchema />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 py-4">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Testimonials</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">— Client Reviews</span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
          What Our Clients Say — <span className="text-primary">Real Reviews.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          From solo founders to growing startup teams across India — here's what clients say about
          working with BugCab on web development, mobile apps, UI/UX design, and digital marketing.
        </p>

        {/* Aggregate stats */}
        <div className="mt-10 flex flex-wrap gap-6">
          {/* Overall rating */}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 px-6 py-4">
            <div>
              <p className="font-display text-4xl font-bold text-primary">{avgRating}</p>
              <Stars count={5} />
            </div>
            <div className="border-l border-border pl-4">
              <p className="text-sm font-semibold text-foreground">{reviews.length} reviews</p>
              <p className="text-xs text-muted-foreground">All verified clients</p>
            </div>
          </div>

          {/* By service */}
          {Object.entries(tagCounts).map(([tag, count]) => (
            <div
              key={tag}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-5 py-4"
            >
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tagColors[tag] ?? "bg-primary/10 border-primary/20 text-primary"}`}
              >
                {tag}
              </span>
              <span className="text-sm text-muted-foreground">
                {count} review{count > 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.id}
              aria-label={`Review by ${r.name} from ${r.company}`}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              {/* Tag + stars */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tagColors[r.tag] ?? "bg-primary/10 border-primary/20 text-primary"}`}
                >
                  {r.tag}
                </span>
                <Stars count={r.rating} />
              </div>

              {/* Project */}
              <p className="mt-3 text-xs text-muted-foreground font-medium">Project: {r.project}</p>

              {/* Review text */}
              <blockquote className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                "{r.review}"
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display font-bold text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {r.role}, {r.company}
                  </p>
                </div>
                <time dateTime={r.date} className="ml-auto text-xs text-muted-foreground">
                  {new Date(r.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Google reviews nudge */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-border bg-card/30 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl font-bold">Also find us on Google</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Search "BugCab IT Solutions" on Google Maps to see and leave reviews.
            </p>
          </div>

          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary transition-colors"
          >
            Leave a Google Review <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-primary/5 border border-primary/20 p-12 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Ready to Join Our <span className="text-primary">Happy Clients?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Free 30-minute consultation. Fixed-price proposal within 24 hours. No commitment
            required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-8 py-3 font-bold text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-border px-8 py-3 font-semibold hover:border-primary transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
