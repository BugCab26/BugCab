"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";

export function SoftwareBentoGrid() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF3B30] block mb-3">
              // SOFTWARE CATEGORIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.05] max-w-3xl">
              WHAT KIND OF SOFTWARE <span className="text-[#FF3B30]">ARE YOU BUILDING?</span>
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Security (Left Column - Increased width: md:col-span-7) */}
          <Reveal className="col-span-12 md:col-span-7 h-full">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-9 flex flex-col justify-between h-full min-h-[520px] md:min-h-[560px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              {/* Glowing Ambient Light */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF5500]/10 blur-[100px] pointer-events-none group-hover:bg-[#FF5500]/20 transition-colors duration-500" />

              {/* 3D Orange Mech Robot Image */}
              <div className="relative w-full flex-1 flex items-center justify-center z-10 py-4 sm:py-6">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center">
                  <Image
                    src="/services/orange-robot.png"
                    alt="Security Orange Mech Robot"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-contain filter drop-shadow-[0_25px_50px_rgba(255,85,0,0.3)] transform group-hover:scale-105 transition-transform duration-500 scale-125 sm:scale-135 md:scale-[1.4]"
                    priority
                  />
                </div>
              </div>

              {/* Text & Content */}
              <div className="z-10 mt-auto">
                <h3 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white mb-2 leading-[1.05]">
                  Security
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wide">
                  API Security | Penetration Testing | Zero Trust Architecture
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column Stack (Web Applications & Backend API - Decreased width: md:col-span-5, stretched to full height) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5 h-full justify-between">
            {/* Card 2: Web Applications */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    Web Applications
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-medium mb-2.5">
                    Next.js / React / TypeScript
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    Custom websites and SaaS platforms built with Next.js, React, and TypeScript.
                    Fast-loading, mobile-first, and SEO-optimised to convert visitors into clients.
                  </p>
                </div>

                {/* Tech Badges Container (Overlapping circles with white rings) */}
                <div className="mt-4 inline-flex items-center p-2 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-lg w-fit">
                  <div className="flex items-center -space-x-3">
                    {/* Circle 1: React (White Ring Border) */}
                    <div
                      className="relative z-30 w-10 h-10 rounded-full bg-neutral-950 border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="React"
                    >
                      <svg
                        className="w-full h-full text-[#61DAFB]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
                        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Circle 2: Next.js (White Ring Border) */}
                    <div
                      className="relative z-20 w-10 h-10 rounded-full bg-black border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="Next.js"
                    >
                      <span className="text-white text-xs font-black tracking-tighter">N</span>
                    </div>

                    {/* Circle 3: TypeScript (White Ring Border) */}
                    <div
                      className="relative z-10 w-10 h-10 rounded-full bg-[#3178C6] border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="TypeScript"
                    >
                      <span className="text-white text-xs font-bold font-mono">TS</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Backend & API Development */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    Backend & API
                  </h3>
                  <span className="inline-block text-[10px] font-mono font-medium tracking-wider uppercase bg-white/10 text-neutral-300 px-3 py-1 rounded-full mb-3 border border-white/10">
                    Node.js / PostgreSQL / REST & GraphQL
                  </span>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    High-performance REST & GraphQL APIs, database architecture, authentication, and
                    cloud infrastructure engineered for zero downtime.
                  </p>
                </div>

                {/* Tool Badges Container for Backend (Node + Postgres + GraphQL) */}
                <div className="mt-4 inline-flex items-center p-2 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-lg w-fit">
                  <div className="flex items-center -space-x-3">
                    {/* Circle 1: Node.js */}
                    <div
                      className="relative z-30 w-10 h-10 rounded-full bg-[#339933] border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="Node.js"
                    >
                      <span className="text-white text-xs font-black">Node</span>
                    </div>

                    {/* Circle 2: PostgreSQL */}
                    <div
                      className="relative z-20 w-10 h-10 rounded-full bg-[#4169E1] border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="PostgreSQL"
                    >
                      <span className="text-white text-xs font-bold">PG</span>
                    </div>

                    {/* Circle 3: GraphQL */}
                    <div
                      className="relative z-10 w-10 h-10 rounded-full bg-[#E10098] border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl"
                      title="GraphQL"
                    >
                      <span className="text-white text-[10px] font-bold">GQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 4: Mobile App Development (Full Width Bottom Card - Reduced height/bulkiness) */}
          <Reveal className="col-span-12">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[180px] sm:min-h-[200px] overflow-visible shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              <div className="max-w-xl z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2.5">
                  Mobile App Development
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                  Cross-platform iOS & Android mobile applications built with React Native and
                  Flutter. Single codebase, native performance, and 60fps smooth animations.
                </p>
              </div>

              {/* 3D Retro Orange Computer Graphic */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-76 md:h-76 shrink-0 flex items-center justify-center z-10 -my-4 md:-my-6">
                <Image
                  src="/services/retro-computer.png"
                  alt="3D Retro Orange Computer & Phone Graphic"
                  width={320}
                  height={320}
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(255,85,0,0.45)] transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out scale-110 sm:scale-125 md:scale-135"
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

export default SoftwareBentoGrid;
