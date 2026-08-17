import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { UiUxBentoGrid } from "@/components/services/UiUxBentoGrid";
import { UiUxDesignFaq } from "@/components/services/UiUxDesignFaq";

export const metadata: Metadata = {
  title: "UI/UX Design Services for Businesses & Professionals | BugCab India",
  description:
    "Figma wireframes, UI design & design systems for businesses and professionals. Research-backed, pixel-perfect, and handed off ready for development.",
  alternates: {
    canonical: "/services/ui-ux-design",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/services/ui-ux-design",
    title: "UI/UX Design Services for Businesses & Professionals | BugCab India",
    description:
      "Figma wireframes, high-fidelity UI & design systems for growing businesses. Every screen approved before development starts.",
    images: [{ url: "https://bugcab.com/images/og-ui-ux-design.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services for Businesses & Professionals | BugCab India",
    description:
      "Figma UI design, wireframes & design systems for businesses. Free quote in 24 hours.",
    images: ["https://bugcab.com/images/og-ui-ux-design.jpg"],
  },
};

export default function UiUxDesignPage() {
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
                "@id": "https://bugcab.com/services/ui-ux-design",
                name: "UI/UX Design Services for Businesses & Professionals",
                alternateName: "Figma UI Design & Design Systems",
                description:
                  "User interface and UX design for businesses and professionals — wireframes, Figma prototypes, and design systems that convert visitors into customers.",
                provider: { "@id": "https://bugcab.com/#organization" },
                serviceType: "UI/UX Design",
                url: "https://bugcab.com/services/ui-ux-design",
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
          <li className="text-foreground font-bold">UI/UX Design</li>
        </ol>
      </nav>

      {/* Section 1 — Hero Banner Card (#EB0AFF to #000000 Gradient with Cybernetic Android Graphic) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-6 md:pt-20 md:pb-10">
        <Reveal>
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-[linear-gradient(135deg,#EB0AFF_0%,#000000_100%)] text-white p-8 sm:p-12 lg:p-16 shadow-2xl min-h-[380px] md:min-h-[440px] flex items-center">
            {/* Ambient Background Radial Glow */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-white/10 blur-[80px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
              {/* Left Column: Hero Title & Description */}
              <div className="lg:col-span-7 flex flex-col items-start justify-center pr-0 lg:pr-4">
                <h1 className="font-display text-6xl sm:text-7xl lg:text-[88px] font-black tracking-tighter uppercase leading-[0.88] mb-8 text-white">
                  UIUX
                  <br />
                  <span className="font-extrabold text-white">Design</span>
                </h1>

                <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                  UI/UX Custom websites and web apps built with Next.js, React, and TypeScript —
                  mobile-first, fast-loading, and structured to rank on Google from day one. Free
                  quote within 24 hours. Design
                </p>
              </div>

              {/* Right Column: Pop-out Cybernetic Character */}
              <div className="hidden md:flex lg:col-span-5 justify-center lg:justify-end relative -mt-12 sm:-mt-20 lg:-mt-28 h-[300px] sm:h-[440px] lg:h-[480px]">
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[440px] lg:min-h-[480px]">
                  <Image
                    src="/services/uiux-hero.png"
                    alt="UI/UX Hero Image"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain object-right-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] scale-110 lg:scale-125 transform -translate-x-7 lg:-translate-x-12 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 2 — Design Categories Bento Grid */}
      <UiUxBentoGrid />

      {/* Section 3 — FAQ Section */}
      <UiUxDesignFaq />
    </main>
  );
}
