import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "IT Consulting for Businesses & Independent Founders | BugCab India",
  description:
    "Technology strategy, architecture design, cloud infrastructure, and technical consulting for growing businesses and independent founders across India.",
  alternates: {
    canonical: "/services/it-consulting",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/services/it-consulting",
    title: "IT Consulting for Businesses & Independent Founders | BugCab India",
    description:
      "Strategic IT consulting, system architecture, and cloud infrastructure guidance for businesses across India.",
    images: [{ url: "https://bugcab.com/images/og-image.png", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting for Businesses & Independent Founders | BugCab India",
    description: "Strategic IT consulting, system architecture, and cloud infrastructure.",
    images: ["https://bugcab.com/images/og-image.png"],
  },
};

export default function ITConsultingPage() {
  return (
    <main className="relative pt-24 bg-background text-foreground overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://bugcab.com/services/it-consulting",
                name: "IT Consulting for Businesses & Independent Founders",
                alternateName: "Technology Advisory Services",
                description:
                  "Strategic IT consulting, architecture design, digital transformation, and technical advisory services for businesses and founders across India.",
                provider: { "@id": "https://bugcab.com/#organization" },
                serviceType: "IT Consulting",
                url: "https://bugcab.com/services/it-consulting",
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
          <li className="text-foreground font-bold">IT Consulting</li>
        </ol>
      </nav>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-20">
        <Reveal>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF3B30] block mb-3">
            // IT CONSULTING
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
            IT Consulting for <span className="text-[#FF3B30]">Businesses &amp; Founders.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Navigate complex technical decisions with confidence. From system architecture and cloud
            infrastructure to digital transformation and stack selection, BugCab provides senior
            technical guidance tailored to your business goals.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#FF3B30] px-8 py-4 font-bold text-white hover:bg-red-500 transition-all cursor-pointer"
            >
              Book a Discovery Call
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
