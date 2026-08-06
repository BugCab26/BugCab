"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { FaqJsonLd } from "./seo/JsonLd";

const faqs = [
  {
    q: "What IT services does BugCab offer for startups?",
    a: "BugCab offers five core services tailored for startups and freelancers: web development (Next.js, React), mobile app development (React Native, Flutter), UI/UX design (Figma), digital marketing & SEO, and cybersecurity. You can hire us for one service or hand us the entire stack.",
  },
  {
    q: "How much does it cost to build a website or app?",
    a: "Every project is scoped individually based on features, database complexity, and design requirements. We offer transparent, fixed-cost quotes so co-founders and solo founders know the exact investment beforehand. Contact us for a free quote and we'll give you a transparent, itemised estimate within 24 hours.",
  },
  {
    q: "How long does it take to build an MVP for a startup?",
    a: "A focused MVP — covering core features only — typically takes 6 to 8 weeks with BugCab. We work in two-week agile sprints so you see progress continuously, not just at the end. Larger platforms or apps with complex backends can take 3 to 5 months.",
  },
  {
    q: "Do you work with freelancers and solo founders, not just companies?",
    a: "Absolutely — freelancers and solo founders are a core part of who we build for. We offer startup-friendly budgets, flexible engagement models, and clear communication throughout. Whether you need a personal portfolio, a client-facing product, or a full SaaS platform, we've got you.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes. Every project includes a 30-day post-launch support window at no extra cost. After that, we offer monthly maintenance retainers that cover bug fixes, security updates, performance monitoring, and minor feature additions — so your product keeps running reliably long after launch.",
  },
  {
    q: "Which technologies does BugCab use?",
    a: "For web: Next.js, React, TypeScript, Node.js, PostgreSQL, and Tailwind CSS. For mobile: React Native and Flutter. For design: Figma and component-driven design systems. For marketing: Google Analytics 4, Search Console, and modern SEO tooling. We choose the right stack for your project — not just what we're comfortable with.",
  },
  {
    q: "Can BugCab handle both design and development for my project?",
    a: "Yes — this is one of our biggest advantages. Most agencies split design and development across teams or vendors, which creates handoff problems and delays. BugCab handles UI/UX design, frontend development, backend development, and deployment end-to-end, giving you a single point of accountability.",
  },
  {
    q: "How do I get started with BugCab?",
    a: "Simple. Fill out our contact form or email us with a brief description of your project — even a rough idea is enough to start. We'll schedule a free 30-minute discovery call, understand your requirements, and send you a detailed proposal within 48 hours. No commitment required.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <FaqJsonLd />
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] text-foreground tracking-tight uppercase">
                Your Questions, Answered
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base font-semibold max-w-xl mx-auto uppercase tracking-wider">
                Everything you need to know about working with BugCab.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {faqs
                .filter((_, i) => i % 2 === 0)
                .map((faq) => {
                  const index = faqs.indexOf(faq);
                  const isOpen = openIndex === index;

                  return (
                    <Reveal key={index} delay={index * 0.05}>
                      <div
                        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? "border-neutral-900 bg-neutral-50/90 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                            : "border-neutral-200/80 bg-[#F8F9FA]/65 hover:bg-[#F8F9FA] hover:border-neutral-300"
                        }`}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer"
                        >
                          <span className="font-display text-base md:text-lg font-bold text-foreground">
                            {faq.q}
                          </span>
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                              isOpen
                                ? "bg-neutral-900 text-white"
                                : "bg-white border border-neutral-200 text-neutral-600"
                            }`}
                          >
                            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm leading-relaxed">
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

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {faqs
                .filter((_, i) => i % 2 !== 0)
                .map((faq) => {
                  const index = faqs.indexOf(faq);
                  const isOpen = openIndex === index;

                  return (
                    <Reveal key={index} delay={index * 0.05}>
                      <div
                        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? "border-neutral-900 bg-neutral-50/90 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                            : "border-neutral-200/80 bg-[#F8F9FA]/65 hover:bg-[#F8F9FA] hover:border-neutral-300"
                        }`}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="flex w-full items-center justify-between gap-4 p-6 text-left cursor-pointer"
                        >
                          <span className="font-display text-base md:text-lg font-bold text-foreground">
                            {faq.q}
                          </span>
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                              isOpen
                                ? "bg-neutral-900 text-white"
                                : "bg-white border border-neutral-200 text-neutral-600"
                            }`}
                          >
                            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm leading-relaxed">
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
          </div>
        </div>
      </section>
    </>
  );
}
