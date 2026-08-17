"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowRight, CheckCircle2, ShieldCheck, MessageSquare, Check, X, ExternalLink, Play, Sparkles } from "lucide-react";
import Link from "next/link";

function ProjectVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      key={src}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
    />
  );
}

const portfolioProjects = [
  {
    title: "Support Copilot for SaaS",
    description: "Draft replies and pull account context; reduced first-response time by 35%.",
    deliverables: "AI Strategy, AI UX Flow, LLM Agent, RAG",
    industry: "SaaS",
    videoSrc: "/projects/project1.mp4",
    overview: {
      challenge: "B2B SaaS platforms struggle with high support ticket volume during peak hours, causing slow response times and high operational costs.",
      solution: "Built a custom RAG-powered AI support copilot that indexes documentation in real-time, handles 80% of routine customer queries, and seamlessly escalates complex requests to support agents with context.",
      keyFeatures: [
        "Instant vector search on help center documentation",
        "Multi-turn conversation memory with human agent handoff",
        "Custom dashboard for analytics, intent resolution & satisfaction metrics",
        "Role-based access control and enterprise SOC-2 compliance"
      ],
      liveUrl: "/contact",
    }
  },
];

export function Projects() {
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const activeIdx = 0;

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
              From motorsport platforms to education portals and home services apps — here&apos;s a selection of websites, web apps, and digital marketing projects <span className="text-[#FF2A2A]">BugCab</span> has shipped for clients.
            </p>
          </Reveal>
        </div>

        {/* 1. Showcase Card matching reference screenshot 2 */}
        <Reveal className="mb-32">
          {/* Outer Gradient Border Wrapper */}
          <div
            onClick={() => setModalIdx(activeIdx)}
            className="group relative p-[10px] sm:p-[14px] rounded-[2.2rem] sm:rounded-[3.2rem] bg-[linear-gradient(90deg,#FF2A2A_0%,#DC2626_40%,#7F1D1D_75%,#1A0505_100%)] shadow-[0_25px_60px_-15px_rgba(255,42,42,0.45)] cursor-pointer transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Inner Card Container */}
            <div className="w-full h-full rounded-[1.8rem] sm:rounded-[2.4rem] overflow-hidden bg-neutral-950 flex flex-col">
              {/* Media container — Video Player */}
              <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden relative bg-neutral-900 flex items-center justify-center group/media">
                <div className="w-full h-full">
                  <ProjectVideo src={portfolioProjects[activeIdx].videoSrc} />
                </div>

                {/* Click to view overview overlay badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="bg-[#FF2A2A] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover/media:translate-y-0 transition-transform duration-300">
                    <Sparkles className="w-4 h-4" /> Click to View Project Overview
                  </div>
                </div>
              </div>

              {/* Details Bar (Rich Red Gradient matching reference design) */}
              <div className="bg-[linear-gradient(135deg,#FF2A2A_0%,#B91C1C_30%,#7F1D1D_60%,#450A0A_100%)] p-6 sm:p-8 md:p-10 text-white flex flex-col gap-6 relative">
                {/* 3 Red/White Dots */}
                <div className="flex gap-2 items-center z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-white opacity-95" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white opacity-70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white opacity-70" />
                </div>

                {/* Content Section with Top Border Line */}
                <div className="border-t border-white/20 pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 sm:gap-10 w-full">
                  {/* Title */}
                  <div className="max-w-xs">
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
                      {portfolioProjects[activeIdx].title}
                    </h3>
                  </div>

                  {/* 3 Columns matching reference screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t lg:border-t-0 lg:border-l border-white/20 pt-6 lg:pt-0 lg:pl-10 text-xs font-semibold uppercase tracking-wider flex-1 w-full lg:w-auto">
                    <div>
                      <span className="text-white/60 block mb-1.5 text-[11px] font-bold tracking-widest">DESCRIPTION</span>
                      <span className="text-white font-medium normal-case text-xs leading-relaxed block max-w-xs">
                        {portfolioProjects[activeIdx].description}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/60 block mb-1.5 text-[11px] font-bold tracking-widest">DELIVERABLES</span>
                      <span className="text-white font-medium normal-case text-xs leading-relaxed block">
                        {portfolioProjects[activeIdx].deliverables}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/60 block mb-1.5 text-[11px] font-bold tracking-widest">INDUSTRY</span>
                      <span className="text-white font-bold normal-case text-xs block">
                        {portfolioProjects[activeIdx].industry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* Interactive Project Overview Modal */}
      <AnimatePresence>
        {modalIdx !== null && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalIdx(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-neutral-950 border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-white z-10 my-auto"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setModalIdx(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-[#FF2A2A] text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-lg"
                aria-label="Close Project Overview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video / Image Header Banner */}
              <div className="relative w-full aspect-video sm:aspect-[21/9] bg-neutral-900 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={portfolioProjects[modalIdx].videoSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between flex-wrap gap-3">
                  <span className="bg-[#FF2A2A] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                    {portfolioProjects[modalIdx].industry}
                  </span>
                  <span className="text-xs text-white/70 font-mono">
                    {portfolioProjects[modalIdx].deliverables}
                  </span>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#FF2A2A] font-bold block mb-2">
                    — Project Overview
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                    {portfolioProjects[modalIdx].title}
                  </h2>
                  <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed font-medium max-w-3xl">
                    {portfolioProjects[modalIdx].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  {/* Challenge */}
                  <div className="bg-neutral-900/60 rounded-2xl p-5 border border-white/5">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#FF2A2A] mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> The Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {portfolioProjects[modalIdx].overview.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-neutral-900/60 rounded-2xl p-5 border border-white/5">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#FF2A2A] mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> BugCab Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {portfolioProjects[modalIdx].overview.solution}
                    </p>
                  </div>
                </div>

                {/* Key Deliverables & Features */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">
                    Key Features & Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {portfolioProjects[modalIdx].overview.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-[#FF2A2A]/20 border border-[#FF2A2A] text-[#FF2A2A] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs text-neutral-400">
                    <strong className="text-white">Deliverables:</strong> {portfolioProjects[modalIdx].deliverables}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setModalIdx(null)}
                      className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-white transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <Link
                      href="/contact"
                      onClick={() => setModalIdx(null)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF2A2A] hover:bg-[#d92323] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      Get Similar Solution <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
