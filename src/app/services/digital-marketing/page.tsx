import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { MarketingBentoGrid } from "@/components/services/MarketingBentoGrid";
import { DigitalMarketingFaq } from "@/components/services/DigitalMarketingFaq";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO for Businesses in India | BugCab",
  description:
    "SEO audits, keyword strategy, content marketing & Google rankings for businesses across India. Page-one rankings without bloated agency retainers.",
  alternates: {
    canonical: "/services/digital-marketing",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/services/digital-marketing",
    title: "Digital Marketing & SEO for Businesses in India | BugCab",
    description:
      "SEO audits, content strategy & Google rankings for growing businesses. Transparent retainers with zero bloated agency fees.",
    images: [
      { url: "https://bugcab.com/images/og-digital-marketing.jpg", width: 1200, height: 630 },
    ],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & SEO for Businesses in India | BugCab",
    description: "SEO, content marketing & Google rankings for businesses. Free audit.",
    images: ["https://bugcab.com/images/og-digital-marketing.jpg"],
  },
};

export default function DigitalMarketingPage() {
  return (
    <main className="relative pt-24 bg-background text-foreground overflow-hidden">
      {/* Schema — First Child of <main> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://bugcab.com/services/digital-marketing",
                name: "Digital Marketing & SEO for Businesses in India",
                alternateName: "SEO Agency for Businesses",
                description:
                  "SEO audits, keyword strategy, content marketing, and Google rankings for businesses across India.",
                provider: { "@id": "https://bugcab.com/#organization" },
                serviceType: "Digital Marketing",
                url: "https://bugcab.com/services/digital-marketing",
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <ol className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground font-bold">Digital Marketing</li>
        </ol>
      </nav>

      {/* Section 1 — Hero Blue Banner Card */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10">
        <Reveal>
          <div className="relative rounded-[36px] bg-gradient-to-b from-[#0073FF] via-[#0073FF]/95 to-black text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-[100px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 w-full">
              {/* Left Column: Hero Title & Description */}
              <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white animate-kinetic-blur">
                  Digital
                  <br />
                  Marketing
                </h1>

                <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-semibold mb-8">
                  SEO audits, keyword strategy, content marketing, and Google rankings built for
                  startups that need page-one results — without paying a bloated agency retainer.
                </p>
              </div>

              {/* Right Column: Pop-out 3D Target Illustration */}
              <div className="hidden md:flex lg:col-span-5 justify-center lg:justify-end relative -mt-6 sm:-mt-10 lg:-mt-24 h-[280px] sm:h-[340px] lg:h-[400px] w-full">
                <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[400px]">
                  <Image
                    src="/services/target-dart.png"
                    alt="Digital Marketing 3D Target Graphic"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain object-right-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] scale-110 lg:scale-135 transform transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 2 — Marketing Categories Bento Grid */}
      <MarketingBentoGrid />

      {/* Section 3 — FAQ Section */}
      <DigitalMarketingFaq />
    </main>
  );
}
