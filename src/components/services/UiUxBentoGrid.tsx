"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";

export function UiUxBentoGrid() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF3B30] block mb-3">
              // DESIGN CATEGORIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.05] max-w-3xl">
              WHAT TYPE OF DESIGN <span className="text-[#FF3B30]">ARE YOU LOOKING FOR?</span>
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Product Designing (Left Column - Increased width: md:col-span-7) */}
          <Reveal className="col-span-12 md:col-span-7 h-full">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-9 flex flex-col justify-between h-full min-h-[520px] md:min-h-[560px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              {/* Glowing Ambient Light */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-90 h-96 rounded-full bg-white/5 blur-[100px] pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />

              {/* 3D Robot Image (Enlarged size) */}
              <div className="relative w-full flex-1 flex items-center justify-center z-10 py-4 sm:py-6">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center">
                  <Image
                    src="/services/robot.png"
                    alt="Product Designing White Robot"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] transform group-hover:scale-105 transition-transform duration-500 scale-125 sm:scale-135 md:scale-[1.4]"
                    priority
                  />
                </div>
              </div>

              {/* Text & Content */}
              <div className="z-10 mt-auto">
                <h3 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white mb-2 leading-[1.05]">
                  Product<br />Designing
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wide">
                  UX Design | UI Development | UIUX Architecture
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column Stack (Graphic Design & Design System - Decreased width: md:col-span-5, stretched to full height to cover gap) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5 h-full justify-between">
            {/* Card 2: Graphic Design */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    Graphic Design
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium mb-2.5">
                    Posters Making
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    Graphic design services that create visually compelling branding, marketing
                    creatives, and digital assets to enhance brand identity and engagement.
                  </p>
                </div>

                {/* Tool Badges Container (Overlapping circles with white rings as shown in Reference Image 3) */}
                <div className="mt-4 inline-flex items-center p-2 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-lg w-fit">
                  <div className="flex items-center -space-x-3">
                    {/* Circle 1: Figma (White Ring Border) */}
                    <div className="relative z-30 w-10 h-10 rounded-full bg-neutral-950 border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="Figma">
                      <svg className="w-full h-full" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>

                    {/* Circle 2: Canva (White Ring Border) */}
                    <div className="relative z-20 w-10 h-10 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="Canva">
                      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.4c-2.4 0-3.6-1.5-3.6-3.4 0-2.8 2.3-5.4 5.3-5.4 1.7 0 2.9.8 3.3 2.1l-1.4.6c-.3-.8-1-1.3-1.9-1.3-1.8 0-3.4 1.8-3.4 3.9 0 1.2.7 2.1 2.1 2.1 1.2 0 2.2-.7 2.7-1.6l1.3.7c-.8 1.4-2.3 2.3-4.4 2.3z"/>
                      </svg>
                    </div>

                    {/* Circle 3: Framer (White Ring Border) */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-neutral-950 border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="Framer">
                      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Design System */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    Design System
                  </h3>
                  <span className="inline-block text-[10px] font-mono font-medium tracking-wider uppercase bg-white/10 text-neutral-300 px-3 py-1 rounded-full mb-3 border border-white/10">
                    SEO Keyword: design system Figma startup
                  </span>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    A complete component library in Figma — buttons, forms, cards, modals,
                    navigation, typography scale, and color tokens. Gives your team a single source
                    of truth for every screen, forever.
                  </p>
                </div>

                {/* Tool Badges Container for Design System (Figma + Storybook + React/Tokens) */}
                <div className="mt-4 inline-flex items-center p-2 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-lg w-fit">
                  <div className="flex items-center -space-x-3">
                    {/* Circle 1: Figma (White Ring Border) */}
                    <div className="relative z-30 w-10 h-10 rounded-full bg-neutral-950 border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="Figma">
                      <svg className="w-full h-full" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>

                    {/* Circle 2: Storybook (White Ring Border) */}
                    <div className="relative z-20 w-10 h-10 rounded-full bg-[#FF4785] border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="Storybook">
                      <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.71 4.75l-4.5 1.6-4.5-1.6V2.5l4.5 1.6 4.5-1.6v2.25zm0 3.5l-4.5 1.6-4.5-1.6v11.5l4.5 1.6 4.5-1.6V8.25z"/>
                      </svg>
                    </div>

                    {/* Circle 3: React / Component Tokens (White Ring Border) */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-neutral-950 border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="React Tokens">
                      <svg className="w-full h-full text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 4: User Flow Mapping (Full Width Bottom Card - Reduced height/bulkiness) */}
          <Reveal className="col-span-12">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[180px] sm:min-h-[200px] overflow-visible shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              <div className="max-w-xl z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2.5">
                  User Flow Mapping
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                  Before designing screens, we map the complete user journey — every path a user can
                  take through your product. This catches logic gaps before they become expensive
                  development problems.
                </p>
              </div>

              {/* 3D Glass Star Graphic (Enlarged & prominently floating) */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-76 md:h-76 shrink-0 flex items-center justify-center z-10 -my-4 md:-my-6">
                <Image
                  src="/services/star.png"
                  alt="3D Fluid Glass Star"
                  width={320}
                  height={320}
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,180,255,0.45)] transform rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-700 ease-out scale-110 sm:scale-125 md:scale-135"
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

export default UiUxBentoGrid;
