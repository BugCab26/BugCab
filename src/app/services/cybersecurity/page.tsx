import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CybersecurityBentoGrid } from "@/components/services/CybersecurityBentoGrid";
import { CybersecurityFaq } from "@/components/services/CybersecurityFaq";

export const metadata: Metadata = {
  title: "Cybersecurity Services for Startups | BugCab",
  description:
    "OWASP audits, SSL setup, WAF configuration, API security & vulnerability scanning for startups. Protect your codebase before launch.",
  alternates: {
    canonical: "/services/cybersecurity",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/services/cybersecurity",
    title: "Cybersecurity Services for Startups | BugCab",
    description:
      "OWASP audits, SSL setup, WAF configuration & API security for startups. Fixed-price security audits.",
    images: [{ url: "https://bugcab.com/images/og-cybersecurity.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Services for Startups | BugCab",
    description: "OWASP audits, SSL, WAF & API security for startups. Free consultation.",
    images: ["https://bugcab.com/images/og-cybersecurity.jpg"],
  },
};

export default function CybersecurityPage() {
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
                "@id": "https://bugcab.com/services/cybersecurity",
                name: "Cybersecurity Services for Startups",
                alternateName: "Web Application Security Audit",
                description:
                  "OWASP Top 10 audits, SSL/TLS setup, WAF configuration, API security, vulnerability scanning, and database encryption for startups.",
                provider: { "@id": "https://bugcab.com/#organization" },
                serviceType: "Cybersecurity",
                url: "https://bugcab.com/services/cybersecurity",
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
          <li className="text-foreground font-bold">Cybersecurity</li>
        </ol>
      </nav>

      {/* Section 1 — Hero Green Banner Card */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-14 pb-8 md:pb-12 overflow-visible">
        <Reveal className="overflow-visible">
          <div className="relative overflow-visible rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#00C247] via-[#008230] to-[#001005] text-white p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl min-h-[340px] sm:min-h-[400px] md:min-h-[440px] flex flex-col justify-between">
            {/* Pop-out Cyber Robot Graphic */}
            <div className="absolute bottom-0 right-0 w-[260px] sm:w-[360px] md:w-[440px] lg:w-[490px] h-[115%] sm:h-[125%] pointer-events-none select-none z-20">
              <Image
                src="/images/cyber_robot.png"
                alt="Cybersecurity Robot Graphic"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 768px) 360px, (max-width: 1024px) 440px, 490px"
                priority
                className="object-contain object-right-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </div>

            {/* Left Column: Hero Title & Description */}
            <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl z-10">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-white mb-6 sm:mb-8 select-none leading-none">
                Cybersecurity
              </h1>

              <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-medium select-none">
                Your startup goes live and automated scanners find it within hours. OWASP audits,
                SSL setup, WAF configuration, API security, and vulnerability scanning — built for
                Next.js, Node.js, and Supabase stacks. Fixed-price audits with clear reports.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 2 — Security Categories Bento Grid */}
      <CybersecurityBentoGrid />

      {/* Section 3 — FAQ Section */}
      <CybersecurityFaq />
    </main>
  );
}
