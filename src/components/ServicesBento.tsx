"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { WebDevMockup, UIDesignMockup, StrategyMockup, SecurityMockup } from "./ServiceMockups";

export function HomeServices() {
  return (
    <section id="services" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF3B30] block mb-3">
                // OUR SERVICES
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.05] max-w-2xl">
                DIGITAL PRODUCTS &amp; IT SERVICES —{" "}
                <span className="text-[#FF3B30]">BUILT FOR YOUR BUSINESS.</span>
              </h2>
            </div>
            <p className="text-neutral-500 font-medium text-sm sm:text-base max-w-md leading-relaxed">
              From your first digital product to your next business milestone — web development,
              mobile apps, UI/UX design, digital marketing, and IT consulting, all delivered under
              one roof.
            </p>
          </div>
        </Reveal>

        {/* Services Bento Grid (4 Distinct Colorful Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Card 1: Software Development (Peach / Soft Coral Card) */}
          <Reveal className="col-span-12 lg:col-span-7">
            <Link
              href="/services/web-development"
              className="group relative rounded-[24px] sm:rounded-[32px] bg-[#FFA08B] text-neutral-950 p-6 sm:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 block cursor-pointer"
            >
              <div className="z-10">
                <span className="inline-block max-w-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-black/10 text-neutral-900 px-3.5 py-1.5 rounded-full mb-6 leading-relaxed break-words">
                  Businesses &amp; Teams • 100% Custom Code • Fast Execution
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 text-neutral-950 flex items-center gap-2">
                  Software Development{" "}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </h3>
                <p className="text-neutral-900/80 text-sm sm:text-base font-medium leading-relaxed max-w-md">
                  Custom websites and web apps built with Next.js, React, and TypeScript.
                  Fast-loading, mobile-first, and SEO-optimised.
                </p>
              </div>

              {/* Visual Code Mockup overlay */}
              <div className="mt-8 z-10 flex justify-end">
                <div className="w-full max-w-md transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <WebDevMockup />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Card 2: Cybersecurity (Light / Charcoal Card) */}
          <Reveal className="col-span-12 lg:col-span-5">
            <Link
              href="/services/cybersecurity"
              className="group relative rounded-[24px] sm:rounded-[32px] bg-neutral-100 dark:bg-[#1E1E24] text-foreground p-6 sm:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] overflow-hidden shadow-lg border border-neutral-200/80 dark:border-white/10 transition-transform duration-300 hover:-translate-y-1 block cursor-pointer"
            >
              <div className="z-10">
                <span className="inline-block max-w-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-black/5 dark:bg-white/10 text-foreground px-3.5 py-1.5 rounded-full mb-6 leading-relaxed break-words">
                  Penetration Testing • Vulnerability Scans • Zero Trust
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 text-foreground flex items-center gap-2">
                  Cybersecurity{" "}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base font-medium leading-relaxed">
                  Threat detection, vulnerability assessments, database encryption, SSL protocols,
                  and firewall scanning to safeguard user data.
                </p>
              </div>

              {/* Visual Security Mockup overlay */}
              <div className="mt-8 z-10 flex justify-center">
                <div className="w-full max-w-xs transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <SecurityMockup />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Card 3: UI/UX Design (Dark Card) */}
          <Reveal className="col-span-12 lg:col-span-5">
            <Link
              href="/services/ui-ux-design"
              className="group relative rounded-[24px] sm:rounded-[32px] bg-neutral-950 text-white p-6 sm:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] overflow-hidden shadow-lg border border-white/10 transition-transform duration-300 hover:-translate-y-1 block cursor-pointer"
            >
              <div className="z-10">
                <span className="inline-block max-w-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-white/10 text-white px-3.5 py-1.5 rounded-full mb-6 leading-relaxed break-words">
                  Figma Systems • Wireframes • Interactive Prototypes
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white flex items-center gap-2">
                  UI/UX Design{" "}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base font-medium leading-relaxed">
                  User interfaces that convert and design systems that scale. From wireframes to
                  pixel-perfect Figma prototypes.
                </p>
              </div>

              {/* Visual UI Figma Mockup */}
              <div className="mt-8 z-10 flex justify-center">
                <div className="w-full max-w-xs transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <UIDesignMockup />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Card 4: Digital Marketing & SEO (Vibrant Coral/Orange Card) */}
          <Reveal className="col-span-12 lg:col-span-7">
            <Link
              href="/services/digital-marketing"
              className="group relative rounded-[24px] sm:rounded-[32px] bg-[#FF5436] text-white p-6 sm:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 block cursor-pointer"
            >
              <div className="z-10">
                <span className="inline-block max-w-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-black/15 text-white px-3.5 py-1.5 rounded-full mb-6 leading-relaxed break-words">
                  SEO • Content Strategy • Google Rankings
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white flex items-center gap-2">
                  Digital Marketing &amp; SEO{" "}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </h3>
                <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed max-w-md">
                  SEO audits, keyword strategy, and content marketing campaigns that drive organic
                  traffic from Google and scale your brand.
                </p>
              </div>

              {/* Visual Strategy Chart Mockup */}
              <div className="mt-8 z-10 flex justify-end">
                <div className="w-full max-w-md transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <StrategyMockup />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesBento() {
  return <HomeServices />;
}

export default HomeServices;
