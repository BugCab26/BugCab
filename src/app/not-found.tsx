import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found | BugCab",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      {/* 404 Content Area */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 text-center z-10">
        {/* 404 Stylized Title */}
        <div className="font-display text-8xl md:text-[140px] font-black tracking-tighter text-foreground flex items-center justify-center gap-1.5 md:gap-3 select-none leading-none">
          <span>4</span>
          <span className="flex items-center justify-center w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#FF2A2A] text-white font-extrabold shadow-lg border-[6px] md:border-[10px] border-white dark:border-neutral-900 leading-none">
            0
          </span>
          <span>4</span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 font-display text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight uppercase leading-none">
          Take a U Turn Captain!
        </h1>

        {/* Description */}
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-medium">
          The page you&apos;re looking for might have been removed, renamed, or never existed. You
          can get back to home.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-8 py-3.5 text-sm font-extrabold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Back to home
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Crossing Warning Tickers */}
      <div className="relative w-full h-48 md:h-64 my-12 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        {/* Red Tape (Scrolls Left) */}
        <div className="w-[140vw] min-w-[1400px] bg-[#FF2A2A] text-white py-3.5 md:py-4.5 rotate-[3.5deg] shadow-2xl flex overflow-hidden whitespace-nowrap absolute z-10 border-t border-b border-white/20">
          <div className="flex gap-12 text-xl md:text-3xl font-black uppercase tracking-widest pl-12 animate-marquee">
            {Array(8)
              .fill("× Not Found")
              .map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            {Array(8)
              .fill("× Not Found")
              .map((t, idx) => (
                <span key={`dup-${idx}`}>{t}</span>
              ))}
          </div>
        </div>

        {/* Black Tape (Scrolls Right) */}
        <div className="w-[140vw] min-w-[1400px] bg-neutral-950 text-white py-3.5 md:py-4.5 -rotate-[3.5deg] shadow-2xl flex overflow-hidden whitespace-nowrap absolute z-0 border-t border-b border-white/5">
          <div className="flex gap-12 text-xl md:text-3xl font-black uppercase tracking-widest pl-12 animate-marquee-reverse">
            {Array(8)
              .fill("× Not Found")
              .map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            {Array(8)
              .fill("× Not Found")
              .map((t, idx) => (
                <span key={`dup-${idx}`}>{t}</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
