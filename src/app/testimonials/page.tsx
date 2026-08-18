import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, CheckCircle2, ShieldCheck, Award, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TestimonialsView } from "@/components/TestimonialsView";
import { reviewsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials — BugCab IT Solutions India",
  description:
    "See what startup founders and business leaders say about working with BugCab. Real reviews on web development, mobile app development, UI/UX design & digital marketing across India.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/testimonials",
    title: "Client Reviews & Testimonials | BugCab IT Solutions India",
    description:
      "Real reviews from startup founders and business leaders on BugCab's web development, mobile apps, UI/UX & digital marketing services.",
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

// ── Schema ─────────────────────────────────────────────────────────────────
function TestimonialsSchema() {
  const avgRating = (reviewsData.reduce((sum, r) => sum + r.rating, 0) / reviewsData.length).toFixed(1);

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
                reviewCount: reviewsData.length.toString(),
                bestRating: "5",
                worstRating: "1",
              },
            },
            ...reviewsData.map((r) => ({
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

export default function TestimonialsPage() {
  return (
    <main className="relative pt-24 bg-background text-foreground overflow-hidden">
      <TestimonialsSchema />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 sm:px-6 py-4">
        <ol className="flex items-center gap-2 text-sm text-neutral-400 font-medium">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-white font-bold">Testimonials</li>
        </ol>
      </nav>

      {/* Hero Banner */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-6 pb-12">
        <Reveal>
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white p-7 sm:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden">
            {/* Background Red Ambient Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#FF3B30]/15 blur-[120px]" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#FF3B30]/10 blur-[100px]" />

            <div className="relative z-10 max-w-4xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#FF3B30] block mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF3B30]" /> // VERIFIED CLIENT REVIEWS
              </span>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] uppercase mb-6">
                WHAT OUR CLIENTS SAY — <span className="text-[#FF3B30]">REAL RESULTS.</span>
              </h1>

              <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-2xl mb-10">
                From solo founders to growing business teams across India — read real, unedited reviews on BugCab's web development, mobile apps, UI/UX design, and digital marketing services.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 font-display text-2xl sm:text-3xl font-black text-white">
                    <span>4.9</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Average Rating</span>
                </div>

                <div className="flex flex-col border-l border-white/10 pl-4">
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#00C247]">100%</span>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Verified Clients</span>
                </div>

                <div className="flex flex-col border-l border-white/10 pl-4">
                  <span className="font-display text-2xl sm:text-3xl font-black text-white">98%</span>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Client Retention</span>
                </div>

                <div className="flex flex-col border-l border-white/10 pl-4">
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#FF3B30]">5.0★</span>
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-1">Google Rated</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Main Reviews View */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pb-20">
        <TestimonialsView />
      </section>

      {/* Google Review Banner Nudge */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pb-16">
        <div className="rounded-[28px] bg-neutral-950 border border-white/10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-[#FF3B30]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white uppercase">Also find us on Google</h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-medium">
                Search "BugCab IT Solutions" on Google Maps to see verified public reviews and feedback.
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=BugCab+IT+Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/10 transition-all cursor-pointer"
          >
            Leave a Google Review <ArrowRight className="h-4 w-4 text-[#FF3B30]" />
          </a>
        </div>
      </section>

      {/* High-Converting CTA Banner */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pb-24">
        <Reveal>
          <div className="relative rounded-[36px] bg-gradient-to-b from-[#FF3B30] via-[#D32F2F] to-[#1F0000] p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-[0.25em] bg-white/10 text-white px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-md">
                // READY TO WORK TOGETHER?
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-[1.05]">
                JOIN OUR GROWING LIST OF <span className="text-white underline decoration-white/30 decoration-wavy">HAPPY CLIENTS.</span>
              </h2>
              <p className="mt-4 text-white/90 text-xs sm:text-base font-medium leading-relaxed">
                Free 30-minute consultation. Fixed-price proposal within 24 hours. Zero hidden fees.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white text-black font-extrabold text-xs sm:text-sm px-7 py-3.5 uppercase tracking-wider hover:bg-neutral-100 hover:scale-[1.02] active:scale-98 transition-all shadow-lg cursor-pointer"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl bg-black/40 text-white font-bold text-xs sm:text-sm px-7 py-3.5 uppercase tracking-wider border border-white/20 hover:bg-black/60 transition-all cursor-pointer"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
