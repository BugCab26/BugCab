"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "../Reveal";

const faqs = [
  {
    q: "What design tools do you use for UI/UX?",
    a: "We use Figma as our primary design tool — providing real-time collaboration, interactive prototypes, component-based design systems, and developer handoff specs. You get full ownership of the Figma source files.",
  },
  {
    q: "How do we request a design?",
    a: "Simple. Reach out through our contact form with your project brief or ideas. We'll schedule a free discovery call, outline the required screens and user flows, and send you a fixed-price proposal within 24 hours.",
  },
  {
    q: "System & Design Memory?",
    a: "We build modular Figma Design Systems with reusable component libraries (buttons, modals, typography scale, color tokens) so your product stays consistent and scalable as it grows.",
  },
  {
    q: "What is a 100% custom design?",
    a: "Every interface we craft is built from scratch specifically for your brand identity and target audience — no generic templates, no copied layouts. Pixel-perfect and unique.",
  },
  {
    q: "Can I hire for UI/UX design only?",
    a: "Yes! We offer design-only engagements. We deliver complete Figma design files with spacing specs, color tokens, exported assets, and handoff documentation for your development team.",
  },
  {
    q: "Are revisions included?",
    a: "Yes. Every UI/UX design project includes 3 complete revision rounds (wireframes, high-fidelity UI, interactive prototype) to guarantee you are 100% satisfied before final handoff.",
  },
];

export function UiUxDesignFaq() {
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
              Everything you need to know about our UI/UX design process.
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

export default UiUxDesignFaq;
