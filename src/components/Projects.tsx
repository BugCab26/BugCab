"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowRight, CheckCircle2, ShieldCheck, MessageSquare, Check } from "lucide-react";
import Link from "next/link";

const portfolioProjects = [
  {
    title: "Support Copilot for SaaS",
    desc: "An AI-powered customer support copilot designed for B2B SaaS platforms. It ingests help center docs, resolves common queries instantly, and handsoff complex cases to human agents.",
    whatWeDid: "Full-stack dev, UI/UX, AI model API.",
    technologies: "Next.js, FastAPI, Python, Tailwind.",
    industry: "SaaS",
    image: "/images/robot_portfolio.png",
    videoSrc: "/videos/project-copilot.mp4",
  },
  {
    title: "Zero Two Four Motorsport",
    desc: "A high-performance custom platform built for motorsport enthusiasts, complete with real-time analytics, media management, and live content updates.",
    whatWeDid: "Full-stack web platform, custom admin panel.",
    technologies: "Next.js, Node.js, Express, PostgreSQL.",
    industry: "Motorsport",
    image: "/images/motorsport_portfolio.png",
    videoSrc: "/videos/project-red.mp4",
  },
  {
    title: "MAAC Creative Academy",
    desc: "An advanced digital learning and creativity portal built Salem's leading media academy, featuring interactive course dashboards and portfolio management.",
    whatWeDid: "Web development, course manager, QA.",
    technologies: "Next.js, TypeScript, PostgreSQL, Prisma.",
    industry: "EdTech",
    image: "/images/edtech_portfolio.png",
    videoSrc: "/videos/project-gold.mp4",
  },
];

export function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % portfolioProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-[#FF2A2A] font-bold block mb-4">
              — Our Portfolio
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl text-foreground uppercase tracking-tighter">
              PROJECTS BUILT FOR <span className="text-[#FF2A2A]">REAL</span> BUSINESSES.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-medium">
              From cross-platform mobile apps to bespoke SaaS platforms — here&apos;s a selection of
              websites, web apps, and digital marketing projects we&apos;ve shipped for clients.
            </p>
          </Reveal>
        </div>

        {/* 1. Big Showcase Card with Auto Slider */}
        <Reveal className="mb-32">
          <div className="group relative overflow-hidden rounded-[2rem] border border-neutral-200/80 dark:border-white/10 bg-neutral-950 shadow-2xl flex flex-col">
            {/* Media container */}
            <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden relative bg-neutral-900 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.video
                  key={activeIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={portfolioProjects[activeIdx].image}
                  className="w-full h-full object-cover"
                  src={portfolioProjects[activeIdx].videoSrc}
                />
              </AnimatePresence>
            </div>

            {/* Details Bar (Rich red gradient) */}
            <div className="bg-[linear-gradient(135deg,#B31212_0%,#660A0A_100%)] p-8 sm:p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative min-h-[180px]">
              {/* Slider controls */}
              <div className="absolute top-4 left-6 flex gap-2 z-20">
                {portfolioProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIdx === idx ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to project slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Slider content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 w-full mt-2"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-extrabold tracking-tight leading-none mb-3">
                      {portfolioProjects[activeIdx].title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                      {portfolioProjects[activeIdx].desc}
                    </p>
                  </div>

                  {/* Metrics / Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-10 text-xs font-semibold uppercase tracking-wider">
                    <div>
                      <span className="text-white/50 block mb-1">WHAT WE DID</span>
                      <span className="text-white font-bold normal-case">
                        {portfolioProjects[activeIdx].whatWeDid}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/50 block mb-1">TECHNOLOGIES</span>
                      <span className="text-white font-bold normal-case">
                        {portfolioProjects[activeIdx].technologies}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/50 block mb-1">INDUSTRY</span>
                      <span className="text-white font-bold normal-case">
                        {portfolioProjects[activeIdx].industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* 2. Why Choose Us Section */}
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight uppercase">
              Why Choose Us
            </h2>
          </Reveal>
        </div>

        {/* Why Choose Us Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Outcome over Output (Col 7, Peach/Red Glow) */}
          <Reveal className="col-span-12 md:col-span-7 h-full">
            <div className="bg-neutral-950 border border-white/10 rounded-[32px] p-8 text-white min-h-[360px] flex flex-col justify-between relative overflow-hidden group hover:border-[#FF2A2A]/30 transition-all duration-500 shadow-xl">
              {/* Red Glow */}
              <div className="absolute top-4 right-10 w-[240px] h-[180px] bg-[radial-gradient(circle,rgba(255,42,42,0.35)_0%,transparent_70%)] pointer-events-none blur-xl z-0" />

              {/* Mockup visual */}
              <div className="relative z-10 flex flex-col gap-2 w-full max-w-[160px] mb-6">
                {["Discovery", "Delivery", "Design", "Dev"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-white border border-neutral-200 text-xs font-extrabold text-neutral-800 shadow-md"
                  >
                    <div className="w-3.5 h-3.5 rounded bg-neutral-100 border border-neutral-300 flex items-center justify-center text-[#FF2A2A]">
                      <Check className="h-2.5 w-2.5 stroke-[4]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-black text-white tracking-tight leading-none mb-3">
                  Outcome over Output
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-md font-medium">
                  We focus on what matters — attracting users, driving sales, and building software
                  that helps your business grow, not just look nice.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Fast-First Reliability (Col 5, Grey/Red Glow) */}
          <Reveal className="col-span-12 md:col-span-5 h-full">
            <div className="bg-neutral-950 border border-white/10 rounded-[32px] p-8 text-white min-h-[360px] flex flex-col justify-between relative overflow-hidden group hover:border-[#FF2A2A]/30 transition-all duration-500 shadow-xl">
              {/* Red Glow */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[240px] h-[150px] bg-[radial-gradient(circle,rgba(255,42,42,0.35)_0%,transparent_70%)] pointer-events-none blur-xl z-0" />

              {/* Checkboxes Row mockup */}
              <div className="relative z-10 flex items-center justify-center w-full max-w-[240px] mx-auto mb-6">
                {/* Connecting Line */}
                <div className="absolute left-4 right-4 h-1 bg-white border-t border-b border-neutral-200/50 z-0" />

                <div className="flex justify-between w-full relative z-10">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="w-12 h-12 rounded-xl bg-white border-2 border-neutral-200 shadow-lg flex items-center justify-center text-[#FF2A2A]"
                    >
                      <Check className="h-6 w-6 stroke-[4]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-black text-white tracking-tight leading-none mb-3">
                  Fast-First Reliability
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                  From day one we build with high performance, scalability, and security in mind.
                  Responsive layout, speed-optimized code.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Secure By Usage (Col 5, Grey/Red Glow) */}
          <Reveal className="col-span-12 md:col-span-5 h-full">
            <div className="bg-neutral-950 border border-white/10 rounded-[32px] p-8 text-white min-h-[360px] flex flex-col justify-between relative overflow-hidden group hover:border-[#FF2A2A]/30 transition-all duration-500 shadow-xl">
              {/* Red Glow */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[200px] h-[150px] bg-[radial-gradient(circle,rgba(255,42,42,0.35)_0%,transparent_70%)] pointer-events-none blur-xl z-0" />

              {/* Shield lock mockup */}
              <div className="relative z-10 flex justify-center items-center w-full mb-6">
                <div className="relative w-20 h-24 bg-white rounded-b-[2.2rem] rounded-t-lg shadow-xl border border-neutral-200 flex flex-col items-center justify-center text-neutral-800">
                  <div className="absolute inset-1 rounded-b-[1.9rem] rounded-t-md border border-neutral-100 bg-neutral-50 flex items-center justify-center shadow-inner">
                    <div className="w-10 h-10 rounded-full bg-neutral-250 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-neutral-800 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-black text-white tracking-tight leading-none mb-3">
                  Secure By Usage
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                  Protecting customer data, using secure API integrations, and secure frameworks, so
                  your customer data remains safe.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Design-Led AI Experiences (Col 7, Peach/Red Glow) */}
          <Reveal className="col-span-12 md:col-span-7 h-full">
            <div className="bg-neutral-950 border border-white/10 rounded-[32px] p-8 text-white min-h-[360px] flex flex-col justify-between relative overflow-hidden group hover:border-[#FF2A2A]/30 transition-all duration-500 shadow-xl">
              {/* Red Glow */}
              <div className="absolute top-4 right-1/4 w-[280px] h-[180px] bg-[radial-gradient(circle,rgba(255,42,42,0.35)_0%,transparent_70%)] pointer-events-none blur-xl z-0" />

              {/* Phone and message mockup */}
              <div className="relative z-10 flex items-end justify-center gap-6 w-full max-w-[320px] mx-auto mb-6">
                {/* Chat bubble */}
                <div className="bg-white border border-neutral-200 text-neutral-800 px-4 py-3 rounded-2xl rounded-tr-none shadow-lg max-w-[140px] flex flex-col gap-1.5 mb-6">
                  <div className="h-2 w-16 bg-neutral-200 rounded" />
                  <div className="h-2 w-12 bg-neutral-200 rounded" />
                  <div className="h-2 w-8 bg-neutral-200 rounded" />
                </div>

                {/* Phone mockup */}
                <div className="w-24 h-36 bg-white border border-neutral-200 rounded-2xl p-1.5 shadow-2xl relative flex flex-col gap-2">
                  <div className="w-8 h-1.5 bg-neutral-200 rounded-full mx-auto" />

                  <div className="flex-1 bg-neutral-50 rounded-lg p-1.5 flex flex-col gap-1.5 border border-neutral-100">
                    <div className="w-full h-8 bg-neutral-200/50 rounded-md flex items-center gap-1 px-1">
                      <div className="w-4 h-4 rounded-full bg-neutral-300" />
                      <div className="flex-1 flex flex-col gap-0.5">
                        <div className="h-1 w-6 bg-neutral-400 rounded" />
                        <div className="h-1 w-4 bg-neutral-400 rounded" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded border border-neutral-200" />
                  </div>

                  {/* Floating check button */}
                  <div className="absolute -bottom-1 -right-2 w-7 h-7 rounded-lg bg-white border border-neutral-200 shadow-md flex items-center justify-center text-[#FF2A2A]">
                    <Check className="w-4 h-4 stroke-[4]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-black text-white tracking-tight leading-none mb-3">
                  Design-Led AI Experiences
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-md font-medium">
                  We craft beautiful interfaces and human-centered design for AI-driven platforms,
                  making complex tech feel intuitive and simple.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
