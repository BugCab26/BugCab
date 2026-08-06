"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "../Reveal";

const faqs = [
  {
    q: "How long does SEO take to rank on Google?",
    a: "Measurable traffic growth typically begins within 3 to 6 months for a new domain. Sites with existing domain authority can see keyword movement in 4 to 8 weeks. We track weekly ranking progress in Google Search Console.",
  },
  {
    q: "How do you measure marketing ROI?",
    a: "We track organic conversions — form submissions, demo bookings, and phone calls — using Google Analytics 4 custom event tracking, connecting SEO traffic directly to business revenue.",
  },
  {
    q: "Do you manage ad budgets directly?",
    a: "Yes! We optimize Google Ads and Meta Ads campaigns with a strict focus on lowering Customer Acquisition Cost (CAC) and maximizing Return on Ad Spend (ROAS).",
  },
  {
    q: "What is included in a technical SEO audit?",
    a: "Our audit covers Core Web Vitals, site speed, crawl errors, canonical tags, schema markup, indexation gaps, mobile responsiveness, and keyword gap analysis.",
  },
  {
    q: "Do you write the blog content for us?",
    a: "Yes. Our team conducts keyword intent research, writes high-converting technical blog posts and landing pages, and handles internal linking and SEO publishing.",
  },
  {
    q: "Can I hire for a single SEO project?",
    a: "Absolutely. We offer one-time Technical SEO Audits as well as month-to-month retainers with zero long-term lock-in contracts.",
  },
];

export function DigitalMarketingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#FF3B30] block mb-3">
              // FAQ
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] text-foreground tracking-tight uppercase">
              Your Questions, Answered
            </h2>
            <p className="mt-4 text-neutral-500 text-sm sm:text-base font-semibold max-w-xl mx-auto uppercase tracking-wider">
              Everything you need to know about our digital marketing services.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
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
                          ? "border-neutral-900 bg-neutral-50/90 dark:bg-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                          : "border-neutral-200/80 dark:border-neutral-800 bg-[#F8F9FA]/65 dark:bg-neutral-950 hover:bg-[#F8F9FA]"
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
                              ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                              : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
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
                            <div className="px-6 pb-6 pt-0 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-medium">
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
                          ? "border-neutral-900 bg-neutral-50/90 dark:bg-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                          : "border-neutral-200/80 dark:border-neutral-800 bg-[#F8F9FA]/65 dark:bg-neutral-950 hover:bg-[#F8F9FA]"
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
                              ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                              : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
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
                            <div className="px-6 pb-6 pt-0 text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-medium">
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
  );
}

export default DigitalMarketingFaq;
