"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";

export function MarketingBentoGrid() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0073FF] block mb-3">
              // MARKETING CATEGORIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.05] max-w-3xl">
              WHAT TYPE OF MARKETING <span className="text-[#0073FF]">ARE YOU LOOKING FOR?</span>
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Growth & Performance Marketing (Left Column - Tall Card) */}
          <Reveal className="col-span-12 md:col-span-7 h-full">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-9 flex flex-col justify-between h-full min-h-[500px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              {/* Glowing Ambient Light */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0073FF]/10 blur-[90px] pointer-events-none group-hover:bg-[#0073FF]/20 transition-colors duration-500" />

              {/* 3D Marketing Gadgets Image */}
              <div className="relative w-full flex-1 flex items-center justify-center z-10 py-4 min-h-[280px]">
                <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[280px] sm:h-[340px] flex items-center justify-center">
                  <Image
                    src="/services/marketing-gadgets.png"
                    alt="Growth & Performance Marketing Gadgets"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,115,255,0.3)] transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Text & Content */}
              <div className="z-10 mt-auto">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white mb-2 leading-[1.05]">
                  Growth &amp; Performance Marketing
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wide">
                  SEO Optimisation | Google Ads | Targeted Lead Generation
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column Stack (Social Media & Technical SEO) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5 h-full justify-between">
            {/* Card 2: Social Media & Branding */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    Social Media &amp; Content Strategy
                  </h3>
                  <p className="text-[#0073FF] text-xs sm:text-sm font-semibold mb-2.5">
                    Brand Positioning &amp; Visual Campaigns
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    Creating high-converting marketing creatives, brand storytelling, and targeted
                    social media campaigns to build customer trust and awareness.
                  </p>
                </div>

                {/* Badges Container */}
                <div className="mt-4 inline-flex items-center p-2 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-lg w-fit">
                  <div className="flex items-center -space-x-3">
                    {/* Circle 1: Megaphone */}
                    <div
                      className="relative z-30 w-10 h-10 rounded-full bg-neutral-950 border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="Campaigns"
                    >
                      <svg
                        className="w-5 h-5 text-[#0073FF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    </div>
                    {/* Circle 2: Target */}
                    <div
                      className="relative z-20 w-10 h-10 rounded-full bg-black border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="Targeting"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Technical SEO & Analytics */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    Technical SEO &amp; Analytics
                  </h3>
                  <span className="inline-block text-[10px] font-mono font-medium tracking-wider uppercase bg-[#0073FF]/10 text-[#0073FF] px-3 py-1 rounded-full mb-3 border border-[#0073FF]/20">
                    GA4 Tracking • Core Web Vitals • Schema Markup
                  </span>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    Technical SEO audits, speed optimization, structured data schema, and custom
                    Google Analytics 4 dashboards to track real ROI.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 4: Conversion Rate Optimization (Full Width Bottom Card) */}
          <Reveal className="col-span-12">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[180px] sm:min-h-[200px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              <div className="max-w-xl z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2.5">
                  Conversion Rate Optimization (CRO)
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                  A/B testing, user journey analysis, and high-converting landing page designs that
                  turn your traffic into active leads and paying customers.
                </p>
              </div>

              {/* 3D Blue Megaphone Graphic - Responsive container preventing overlap on mobile */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 flex items-center justify-center z-10">
                <Image
                  src="/services/blue-megaphone.png"
                  alt="3D Blue Megaphone"
                  width={280}
                  height={280}
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,115,255,0.4)] transform -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default MarketingBentoGrid;
