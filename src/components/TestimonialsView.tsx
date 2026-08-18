"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, Quote, CheckCircle2, Award, Sparkles, ThumbsUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { reviewsData, ReviewItem } from "@/data/testimonials";

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "IT Consulting",
  "Cybersecurity",
];

const tagStyleMap: Record<string, string> = {
  "Web Development": "bg-blue-500/10 border-blue-500/30 text-blue-400",
  "Mobile App Development": "bg-violet-500/10 border-violet-500/30 text-violet-400",
  "UI/UX Design": "bg-pink-500/10 border-pink-500/30 text-pink-400",
  "Digital Marketing": "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  "IT Consulting": "bg-amber-500/10 border-amber-500/30 text-amber-400",
  Cybersecurity: "bg-red-500/10 border-red-500/30 text-red-400",
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function TestimonialsView() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredReviews =
    activeCategory === "All"
      ? reviewsData
      : reviewsData.filter((r) => r.tag === activeCategory);

  return (
    <div className="space-y-16">
      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count =
            cat === "All"
              ? reviewsData.length
              : reviewsData.filter((r) => r.tag === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? "bg-[#FF3B30] text-white border-[#FF3B30] shadow-lg shadow-[#FF3B30]/30 scale-105"
                  : "bg-neutral-900/80 text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-white/5 text-neutral-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Reviews Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredReviews.map((r) => (
            <div
              key={r.id}
              className="group relative rounded-[28px] bg-neutral-950 text-white border border-white/10 p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-[#FF3B30]/40 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Glowing Background Effect on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3B30]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#FF3B30]/15 transition-colors duration-500" />

              <div>
                {/* Header: Tag + Stars */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-block text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${
                      tagStyleMap[r.tag] || "bg-white/10 border-white/20 text-white"
                    }`}
                  >
                    {r.tag}
                  </span>
                  <Stars count={r.rating} />
                </div>

                {/* Project Badge */}
                <div className="flex items-center gap-1.5 mb-4 text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00C247]" />
                  <span>{r.project}</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-neutral-300 text-sm leading-relaxed font-medium mb-6 relative">
                  <Quote className="w-6 h-6 text-white/10 absolute -top-2 -left-2 rotate-180 pointer-events-none" />
                  "{r.review}"
                </blockquote>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${r.avatarColor} text-white font-black text-sm flex items-center justify-center shadow-md`}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-snug">
                      {r.name}
                    </h4>
                    <p className="text-neutral-400 text-xs font-medium">
                      {r.role}, <span className="text-neutral-300">{r.company}</span>
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-neutral-500">
                  {new Date(r.date).toLocaleDateString("en-IN", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
