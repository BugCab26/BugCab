"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";

export function CybersecurityBentoGrid() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF3B30] block mb-3">
              // SECURITY CATEGORIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.05] max-w-3xl">
              WHAT TYPE OF SECURITY <span className="text-[#FF3B30]">ARE YOU LOOKING FOR?</span>
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Security (Left Column - Tall Card) - Increased Width to md:col-span-7 */}
          <Reveal className="col-span-12 md:col-span-7 h-full">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-8 sm:p-10 flex flex-col justify-between h-full min-h-[500px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              {/* Glowing Ambient Light */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#00C853]/10 blur-[90px] pointer-events-none group-hover:bg-[#00C853]/20 transition-colors duration-500" />

              {/* 3D Robot Character Image */}
              <div className="relative w-full flex-1 flex items-center justify-center z-10 py-4 min-h-[280px]">
                <Image
                  src="/services/robot.png"
                  alt="Cybersecurity Robot Auditor"
                  width={320}
                  height={320}
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-500 max-h-[320px]"
                  priority
                />
              </div>

              {/* Text & Content */}
              <div className="mt-8 z-10">
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                  Security
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  UX Design | UI Development | UIUX Architecture
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column Stack (Graphic Design & Design System - Decreased Width to md:col-span-5) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            {/* Card 2: Graphic Design */}
            <Reveal className="h-full">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[235px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    Graphic Design
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium mb-3">
                    Posters Making
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                    Graphic design services that create visually compelling branding, marketing
                    creatives, and digital assets to enhance brand identity and engagement.
                  </p>
                </div>

                {/* Overlapping Tool Badges Container (Figma + Framer icons) */}
                <div className="mt-5 inline-flex items-center p-1 rounded-xl bg-black/60 border border-white/10 shadow-md w-fit">
                  <div className="flex items-center -space-x-2">
                    {/* Circle 1: Figma */}
                    <div className="relative z-10 w-9 h-9 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center p-2 shadow-md">
                      <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                    {/* Circle 2: Framer / App */}
                    <div className="relative z-0 w-9 h-9 rounded-full bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center p-2 shadow-md">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Design System */}
            <Reveal className="h-full">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-8 sm:p-10 flex flex-col justify-between min-h-[235px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    Design System
                  </h3>
                  <span className="inline-block text-[10px] font-mono font-medium tracking-wider uppercase bg-white/10 text-neutral-300 px-3 py-1 rounded-full mb-3">
                    SEO Keyword: design system Figma startup
                  </span>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl font-medium">
                    A complete component library in Figma — buttons, forms, cards, modals,
                    navigation, typography scale, and color tokens. Gives your team a single source
                    of truth for every screen, forever.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 4: User Flow Mapping (Full Width Bottom Card) */}
          <Reveal className="col-span-12">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[220px] overflow-visible shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              <div className="max-w-xl z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                  User Flow Mapping
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                  Before designing screens, we map the complete user journey — every path a user can
                  take through your product. This catches logic gaps before they become expensive
                  development problems.
                </p>
              </div>

              {/* 3D Holographic Star Graphic */}
              <div className="absolute right-[-20px] bottom-[-40px] w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/services/holographic_sticker_mockup___Download_free_png_of_Star__icon_png_holographic_fluid_chrome_shape-removebg-preview.png"
                  alt="3D Holographic Star Shield"
                  fill
                  sizes="320px"
                  className="object-contain filter drop-shadow-[0_15px_35px_rgba(0,200,83,0.3)] transform -rotate-12 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-500"
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

export default CybersecurityBentoGrid;
