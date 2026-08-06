"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "../Reveal";

const faqs = [
  {
    q: "How much does it cost to build a mobile app?",
    a: "We offer transparent, fixed pricing for custom mobile app projects, whether you need a focused MVP, a full-featured app with a backend/database, or a complex SaaS product. All prices are agreed upon before work begins.",
  },
  {
    q: "How long does it take to build a mobile app?",
    a: "A focused MVP takes 6 to 8 weeks. A full-featured app takes 10 to 14 weeks. An on-demand or SaaS app takes 14 to 20 weeks. We work in two-week sprints — you get a testable build on your device after every sprint, not just at the end.",
  },
  {
    q: "Flutter vs React Native — which should I choose for my startup app?",
    a: "Choose Flutter if your app needs a highly custom, branded UI or complex animations. Choose React Native if your team already knows JavaScript, if your app shares logic with a React web app, or if you need deep native module access. Both are excellent — we help you decide for free during the discovery call.",
  },
  {
    q: "Will my app work on both iPhone and Android?",
    a: "Yes — all BugCab apps are built cross-platform with React Native or Flutter. One codebase runs natively on both iOS and Android. You get both platforms included in the project price, not billed separately.",
  },
  {
    q: "Do you handle App Store and Google Play submission?",
    a: "Yes — we handle the complete submission process for both the Apple App Store and Google Play Store, including screenshots, descriptions, age ratings, privacy policy, and responding to any review feedback if the app gets rejected. Both stores included in every project.",
  },
  {
    q: "Can you add payment integration to my app?",
    a: "Yes. We integrate Stripe, PayPal, and other popular payment processors to support credit cards, digital wallets, and local payment methods worldwide. Both SDKs are available for React Native and Flutter. Payment integration is included in Full-Featured App and On-Demand tiers.",
  },
  {
    q: "I only have a rough idea — can BugCab still help?",
    a: "Absolutely. Most clients come to us with an idea, not a spec. The free 30-minute discovery call is designed exactly for this — we ask the right questions, help you define the core MVP features, and give you a realistic scope and quote. No deliverable required from you upfront.",
  },
  {
    q: "Do you offer app maintenance after launch?",
    a: "Yes. Every project includes 30 days of free post-launch support for crash fixes, App Store update submissions for OS changes, and minor adjustments. After 30 days, we offer monthly retainers covering OS compatibility updates, performance monitoring, and new minor features.",
  },
];

export function MobileAppFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mt-16 flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <Reveal key={index} delay={index * 0.05}>
              <div
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-lime bg-lime/5"
                    : "border-border bg-card/40 hover:border-border/80"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none focus:ring-2 focus:ring-lime/50 rounded-2xl"
                >
                  <span className="font-display text-lg font-medium text-foreground">{faq.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-lime text-black"
                        : "bg-card border border-border text-muted-foreground"
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
                      <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed text-sm">
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
  );
}
