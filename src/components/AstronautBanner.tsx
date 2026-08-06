"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function AstronautBanner() {
  return (
    <section className="relative bg-background pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative overflow-visible">
        <Reveal>
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#ff0000] via-[#c40000] to-[#1f0000] p-6 sm:p-10 md:p-14 lg:p-16 shadow-2xl overflow-visible flex flex-col justify-between min-h-[320px] sm:min-h-[380px] md:min-h-[440px]">
            {/* Pop-out 3D Liquid Graphic with Floating Motion (No Hover Zoom) */}
            <motion.div
              animate={{
                y: [0, -20, 5, -15, 0],
                rotate: [0, 3, -2, 4, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="absolute -top-12 sm:-top-18 md:-top-24 -right-4 sm:-right-6 md:-right-8 w-[240px] sm:w-[380px] md:w-[480px] lg:w-[560px] aspect-square pointer-events-none select-none z-20"
            >
              <Image
                src="/images/contect banner.png"
                alt="3D Fluid Banner Graphic"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                style={{ mixBlendMode: "multiply" }}
              />
            </motion.div>

            {/* Typography Content */}
            <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10">
              <h2 className="font-display font-black text-white uppercase tracking-tight leading-[0.92] text-2xl sm:text-4xl md:text-5xl lg:text-[54px] select-none drop-shadow-md">
                LET'S BUILD
                <br />
                SOMETHING
                <br />
                EXTRAORDINARY
                <br />
                TOGETHER.
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 sm:mt-12 z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-white text-black font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5 uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 shadow-lg"
              >
                Start A Project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md text-white font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-3.5 uppercase tracking-wider hover:bg-black/60 transition-all duration-300 shadow-lg"
              >
                Our Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AstronautBanner;



