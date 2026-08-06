import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SoftwareBentoGrid } from "@/components/services/SoftwareBentoGrid";
import { WebDevFaq } from "@/components/services/WebDevFaq";

export const metadata: Metadata = {
  title: "Software Development Services for Startups | BugCab",
  description:
    "Custom web apps, mobile apps, backend APIs & software development with Next.js, React & TypeScript. Production-ready code with fixed pricing.",
  alternates: {
    canonical: "/services/web-development",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/services/web-development",
    title: "Software Development Services for Startups | BugCab",
    description:
      "Next.js, React & Node.js software development — mobile-first, fast-loading, and scalable.",
    images: [{ url: "https://bugcab.com/images/og-web-development.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development for Startups | BugCab",
    description:
      "Custom web apps, mobile apps & backend APIs built with Next.js, React & TypeScript. Free quote in 24 hours.",
    images: ["https://bugcab.com/images/og-web-development.jpg"],
  },
};

export default function SoftwareDevelopmentPage() {
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
                "@id": "https://bugcab.com/services/web-development",
                name: "Software Development for Startups",
                alternateName: "Custom Software Development",
                description:
                  "Custom web applications, mobile apps, backend APIs, and software solutions built with Next.js, React, and TypeScript.",
                provider: { "@id": "https://bugcab.com/#organization" },
                serviceType: "Software Development",
                url: "https://bugcab.com/services/web-development",
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
          <li className="text-foreground font-bold">Software Development</li>
        </ol>
      </nav>

      {/* Section 1 — Hero Orange Banner Card */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10">
        <Reveal>
          <div className="relative rounded-[36px] bg-gradient-to-b from-[#FF8C00] via-[#FF8C00]/95 to-black text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-[100px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 w-full">
              {/* Left Column: Hero Title & Description */}
              <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white animate-kinetic-blur">
                  Software
                  <br />
                  Development
                </h1>

                <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-semibold mb-8">
                  Your startup goes live and automated scanners find it within hours. OWASP audits,
                  SSL setup, WAF configuration, API security, and vulnerability scanning — built for
                  Next.js, Node.js, and Supabase stacks. Fixed-price audits with clear reports.
                </p>
              </div>

              {/* Right Column: Pop-out 3D Character Illustration */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative -mt-6 sm:-mt-10 lg:-mt-24 h-[280px] sm:h-[340px] lg:h-[400px] w-full">
                <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[400px]">
                  <Image
                    src="/services/software-character.png"
                    alt="Software Development Character Graphic"
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

      {/* Section 2 — Software Categories Bento Grid */}
      <SoftwareBentoGrid />

      {/* Section 3 — FAQ Section */}
      <WebDevFaq />
    </main>
  );
}
