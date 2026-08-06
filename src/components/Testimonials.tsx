"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const testimonialsData = [
  {
    quote: "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
    author: "Ethan Moore",
    role: "Co-founder, NovaTech",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    quote: "The absolute best choice for startups. Shipped our MVP in weeks, not months.",
    author: "Jane Doe",
    role: "Founder, TechCorp",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    quote:
      "Exceptional UI/UX design and fast delivery. They helped us scale our platform seamlessly.",
    author: "Sarah Jenkins",
    role: "Product Manager, LeapFlow",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Layered Title Section with Overlapping background text */}
        <div className="relative text-center select-none pointer-events-none mb-[-25px] md:mb-[-45px] lg:mb-[-65px] z-0">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-neutral-500 uppercase block mb-3">
            (Why clients love BugCab)
          </span>
          <h2 className="text-[12vw] sm:text-[10vw] lg:text-[160px] font-black leading-none tracking-tighter bg-gradient-to-b from-[#FF3B30] via-[#FF5028]/90 to-transparent bg-clip-text text-transparent pb-4 font-display">
            Testimonials
          </h2>
        </div>

        {/* 2-Column layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left card — vertical stats in a dark textured container */}
          <div className="lg:col-span-4 flex">
            <Reveal className="w-full flex h-full">
              <div
                className="relative rounded-[32px] overflow-hidden p-8 md:p-10 text-white flex flex-col justify-between gap-10 w-full shadow-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80')",
                }}
              >
                {/* Background overlay for high contrast and readability */}
                <div className="absolute inset-0 bg-[#060606]/85" aria-hidden="true" />

                <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="font-display text-5xl md:text-6xl font-black text-white tracking-tight">
                      <Counter to={1} suffix="+" />
                    </div>
                    <div className="mt-2 text-sm text-neutral-400 font-medium">
                      Finalized Projects
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="font-display text-5xl md:text-6xl font-black text-white tracking-tight">
                      <Counter to={18} suffix="%" />
                    </div>
                    <div className="mt-2 text-sm text-neutral-400 font-medium">
                      Client satisfaction rate
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="font-display text-5xl md:text-6xl font-black text-white tracking-tight">
                      <Counter to={1} suffix="M" />
                    </div>
                    <div className="mt-2 text-sm text-neutral-400 font-medium">Gross Revenue</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right card — dynamic background image card with slider */}
          <div className="lg:col-span-8 flex">
            <Reveal className="w-full flex h-full">
              <div className="relative w-full rounded-[32px] overflow-hidden min-h-[420px] md:min-h-full flex flex-col justify-between p-8 md:p-12 shadow-2xl bg-black">
                {/* Background image animations */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${testimonialsData[currentIndex].image}')`,
                    }}
                  />
                </AnimatePresence>

                {/* Dark overlay gradients for contrast and aesthetics */}
                <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 45%, rgba(0, 0, 0, 0.2) 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Top content: Index Indicator */}
                <div className="relative z-10">
                  <span className="inline-block text-xs font-mono font-bold tracking-widest text-white/70 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    {`0${currentIndex + 1} / 0${testimonialsData.length}`}
                  </span>
                </div>

                {/* Bottom content: Quote + Controls */}
                <div className="relative z-10 mt-16 md:mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  {/* Quote & Author details */}
                  <div className="max-w-xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="font-display text-2xl md:text-3xl font-extrabold leading-normal text-white tracking-tight">
                          “{testimonialsData[currentIndex].quote}”
                        </p>
                        <div className="mt-6 flex flex-col">
                          <span className="text-white font-bold text-base md:text-lg">
                            {testimonialsData[currentIndex].author}
                          </span>
                          <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mt-1.5">
                            {testimonialsData[currentIndex].role}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 md:self-end">
                    <button
                      onClick={prevSlide}
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/10 text-white transition-all duration-200 cursor-pointer"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-md border border-white/10 text-white transition-all duration-200 cursor-pointer"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
