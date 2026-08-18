"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../Reveal";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, Compass, Target, Layers, Layout, Code, Rocket } from "lucide-react";

// Steps Data
const processSteps = [
  {
    icon: Compass,
    title: "Discovery",
    desc: "We start by understanding your goals, target audience, brand needs, and the direction your product should take.",
  },
  {
    icon: Target,
    title: "Strategy",
    desc: "I define the structure, messaging, and direction before moving into the UX and design stage.",
  },
  {
    icon: Layers,
    title: "Direction",
    desc: "A clear visual direction is established through moodboards, typography, and initial layout concepts.",
  },
  {
    icon: Layout,
    title: "Design",
    desc: "The final layouts, brand elements, and digital experiences are crafted with meticulous attention to detail.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Designs are turned into responsive, polished pages with smooth animations and clean execution.",
  },
  {
    icon: Rocket,
    title: "Delivery",
    desc: "Final quality checks, domain setup, and deployment — ensuring everything is ready for launch.",
  },
];

// FAQs Data
const faqs = [
  {
    q: "Why an agency instead of full-time designer?",
    a: "Hiring a full-time senior designer costs upwards of $120k+ plus benefits. With BugCab, you get access to a full team of designers, developers, and strategists for a fraction of the cost, with zero overhead and full flexibility.",
  },
  {
    q: "How to request a design?",
    a: "Once onboarded, you get a dedicated Trello/Notion workspace. You can drop in design requests, feature specs, or website copy anytime. We process tasks sequentially with clear turnaround timelines.",
  },
  {
    q: "Speed of design delivery?",
    a: "Most design requests are completed in 48-72 hours. Web and mobile development sprints run in 1-2 week cycles, with live staging links delivered after every sprint.",
  },
  {
    q: "What if I don't like design?",
    a: "No worries at all! We offer unlimited revisions until you are 100% satisfied with the outcome. We refine wireframes, typography, colors, and layouts until it matches your exact vision.",
  },
  {
    q: "Are there any extra costs?",
    a: "Zero hidden fees. We work on fixed-scope project quotes or flat monthly retainers. You know exactly what you pay before any work begins.",
  },
  {
    q: "What is the project progress tracker?",
    a: "You get 24/7 access to your project dashboard. Track live task status, review interactive prototypes, test staging builds, and communicate directly with our lead engineers.",
  },
];

const cardGradient = "radial-gradient(circle at 50% 35%, #8B1818 0%, #1A0404 60%, #000000 100%)";

export function InteractiveServices() {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="bg-white text-neutral-900 font-sans min-h-screen pb-20"
      suppressHydrationWarning
    >
      {/* ========================================================================= */}
      {/* HERO & SERVICES BENTO GRID SECTION */}
      {/* ========================================================================= */}
      <section
        className="pt-8 md:pt-16 pb-20 px-4 sm:px-6 max-w-6xl mx-auto"
        suppressHydrationWarning
      >
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF3B30] flex items-center gap-2">
                — WHO WE ARE
              </span>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.08]">
                IT SERVICES BUILT FOR <br className="hidden sm:block" />
                YOUR <span className="text-[#FF3B30]">BUSINESS.</span>
              </h1>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
              From your first MVP to your next product launch — web development, mobile apps, UI/UX
              design, and digital marketing, all under one roof.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid Layout (Matches Target Screenshot Exactly) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5" suppressHydrationWarning>
          {/* CARD 1: Software Development (Left Tall Card) */}
          <Reveal className="lg:col-span-4">
            <Link
              href="/services/web-development"
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] p-6 sm:p-7 text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl border border-white/10 h-full min-h-[480px]"
              style={{ background: cardGradient }}
            >
              {/* Top Image Frame */}
              <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-white/10">
                <Image
                  src="/images/jellyfish_sky.png"
                  alt="Software Development"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#FF3B30] transition-colors">
                  Software Development
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                  Secure, Scalable & High-Performance Digital Solutions
                </p>
              </div>
            </Link>
          </Reveal>

          {/* RIGHT 8 COLUMNS CONTAINER */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* CARD 2: Cyber Security (Spans 2 Rows) */}
            <Reveal className="sm:row-span-2">
              <Link
                href="/services/cybersecurity"
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-7 text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl border border-white/10 h-full min-h-[400px]"
                style={{ background: cardGradient }}
              >
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF3B30] transition-colors">
                    Cyber Security
                  </h3>
                </div>

                {/* White Inset Box around Robot Artwork */}
                <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl overflow-hidden my-4 bg-white p-2.5 flex items-center justify-center shadow-inner">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/robot_portfolio.png"
                      alt="Cyber Security Artwork"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    End-to-End Cybersecurity & Digital Protection
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* CARD 4: UI/UX Design (Right Tall Card, Spans 2 Rows) */}
            <Reveal className="sm:row-span-2">
              <Link
                href="/services/ui-ux-design"
                className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] p-6 sm:p-7 text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl border border-white/10 h-full min-h-[400px]"
                style={{ background: cardGradient }}
              >
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF3B30] transition-colors">
                    UI/UX Design
                  </h3>
                </div>

                {/* White Inset Box around Cat Artwork */}
                <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl overflow-hidden my-4 bg-white p-2.5 flex items-center justify-center shadow-inner">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/cat_glow.png"
                      alt="UI/UX Design Artwork"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    User-Centered UX & UI Design Engineering
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* CARD 5: Digital Marketing (Wide Card spanning 2 cols) */}
            <Reveal className="sm:col-span-2">
              <Link
                href="/services/digital-marketing"
                className="group relative flex flex-col sm:flex-row items-center justify-between overflow-hidden rounded-[28px] p-6 sm:p-7 text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-xl border border-white/10 gap-6 min-h-[190px]"
                style={{ background: cardGradient }}
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF3B30] transition-colors">
                    Digital Marketing
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                    SEO • Content Strategy • Google Rankings
                  </p>
                </div>

                {/* White Inset Box around Cartoon Illustration */}
                <div className="relative w-44 h-32 shrink-0 rounded-2xl overflow-hidden bg-white p-2.5 flex items-center justify-center shadow-inner">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/marketing_cartoon.png"
                      alt="Digital Marketing Illustration"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: HOW BUGCAB BUILDS — 6 STEPS */}
      {/* ========================================================================= */}
      <section
        className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-100"
        suppressHydrationWarning
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight leading-tight">
                How BugCab Builds <br />
                <span className="text-[#FF3B30]">Your Web & App Project — 6 Steps.</span>
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Every project — whether it&apos;s a website, a mobile app, or a full digital
                strategy — follows a clear, structured process. Transparent from day one, so you
                know exactly what to expect.
              </p>
            </Reveal>
          </div>

          {/* Right Steps Vertical List */}
          <div className="lg:col-span-7 space-y-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={idx * 0.04}>
                  <div className="group flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/60 transition-all duration-200">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-neutral-200 text-neutral-900 group-hover:bg-[#FF3B30] group-hover:text-white group-hover:border-[#FF3B30] transition-colors shadow-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-neutral-950">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: FAQ SECTION */}
      {/* ========================================================================= */}
      <section
        className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-100"
        suppressHydrationWarning
      >
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3B30]">
              — FAQs
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Your Questions, Answered
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500">
              Everything you need to know about our services and process.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = mounted && openFaq === index;
            return (
              <Reveal key={index} delay={index * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isOpen
                      ? "border-neutral-900 bg-neutral-50 shadow-sm"
                      : "border-neutral-200/80 bg-neutral-100/60 hover:bg-neutral-100"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-display text-sm sm:text-base font-bold text-neutral-950">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen
                          ? "bg-neutral-950 text-white"
                          : "bg-white text-neutral-600 border border-neutral-200"
                        }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default InteractiveServices;
