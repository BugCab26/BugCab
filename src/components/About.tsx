"use client";

import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const values = [
  {
    num: "1",
    title: "STARTUPS FIRST",
    desc: "Every decision we make — budgeting, timelines, process — is designed around the reality of building a startup, not a Fortune 500 company.",
  },
  {
    num: "2",
    title: "SHIP, THEN IMPROVE",
    desc: "We believe in getting a working product into your users' hands fast. A launched MVP beats a perfect prototype sitting in Figma every time.",
  },
  {
    num: "3",
    title: "TRANSPARENT ALWAYS",
    desc: "No hidden costs, no vague timelines, no agency fluff. You get a clear scope, a clear cost, and a clear deadline — before we write a single line of code.",
  },
  {
    num: "4",
    title: "FULL STACK, ONE TEAM",
    desc: "Design, development, marketing — all in one team. No handoff delays, no miscommunication between vendors. One point of contact, start to finish.",
  },
];

export function About() {
  return (
    <>
      {/* ───── Hero Card Section ───── */}
      <section className="bg-background pt-36 pb-6">
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#E60000] via-[#7C0000] to-[#0A0A0A] p-8 md:p-14 lg:p-16 text-white overflow-hidden shadow-2xl flex flex-col justify-between min-h-[380px] lg:min-h-[440px]">
              {/* Vinyl Record & Tonearm Turntable Badge */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center justify-center select-none pointer-events-none">
                {/* Record Disk */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0d0d0d] border-[3px] border-[#1e1e1e] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative">
                  {/* Record grooves */}
                  <div className="absolute inset-1.5 rounded-full border border-white/5" />
                  <div className="absolute inset-3.5 rounded-full border border-white/5" />
                  <div className="absolute inset-5.5 rounded-full border border-white/5" />
                  {/* Center red label */}
                  <div className="w-5 h-5 rounded-full bg-[#FF3B30] border border-black flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                </div>
                {/* Tonearm */}
                <div className="absolute top-[-4px] right-[-6px] w-8 h-14 origin-top-left translate-x-1.5 translate-y-[-2px]">
                  <svg
                    className="w-full h-full text-neutral-400 stroke-current fill-none"
                    viewBox="0 0 32 56"
                    strokeWidth="2"
                  >
                    <path
                      d="M 4,4 L 18,14 L 15,36 L 9,40"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="4" cy="4" r="3.5" className="fill-neutral-500 stroke-none" />
                    <rect
                      x="6"
                      y="38"
                      width="6"
                      height="5"
                      rx="1"
                      className="fill-neutral-600 stroke-none"
                    />
                  </svg>
                </div>
              </div>

              {/* Top Content: Headline */}
              <div className="max-w-2xl mt-4">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight uppercase">
                  The IT Solutions Company Built for your business.
                </h1>
              </div>

              {/* Bottom Content: Paragraph */}
              <div className="max-w-3xl mt-12">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 font-medium">
                  Founded in 2022 and headquartered in <strong>Erode & Salem, Tamil Nadu</strong>, BugCab was built with one clear purpose — give startups, founders, and freelancers across <strong>Bangalore, Tamil Nadu, and India</strong> access to the same quality of web development, mobile apps, and digital marketing that enterprise companies take for granted, at a cost that actually makes sense for early-stage budgets.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── Stats Row ───── */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 w-full">
              {[
                { v: 50, s: "+", l: "PROJECTS DELIVERED" },
                { v: 30, s: "+", l: "HAPPY CLIENTS" },
                { v: 98, s: "%", l: "CLIENT RETENTION" },
                { v: 5, s: "", l: "CORE SERVICES" },
              ].map((stat) => (
                <div key={stat.l} className="flex flex-col items-start">
                  <div className="font-display text-5xl sm:text-6xl font-black text-foreground tracking-tight leading-none">
                    <Counter to={stat.v} suffix={stat.s} />
                  </div>
                  <div className="mt-3 text-xs sm:text-sm font-black tracking-wide text-foreground uppercase leading-snug">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── Values / How We Work ───── */}
      <section className="bg-background py-16 md:py-24 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#FF3B30] uppercase block mb-3">
                — OUR VALUES
              </span>
              <h2 className="font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl uppercase tracking-tighter text-foreground">
                WHAT WE BELIEVE IN — AND <span className="text-[#FF3B30]">HOW WE WORK.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((val, i) => (
              <Reveal key={val.title} delay={i * 0.08} className="flex">
                <div className="group relative overflow-hidden rounded-[32px] p-10 md:p-12 transition-all duration-300 hover:shadow-2xl shadow-xl flex flex-col justify-between w-full text-white bg-gradient-to-br from-[#E60000] via-[#7C0000] to-[#0A0A0A] min-h-[320px] lg:min-h-[380px]">
                  {/* Card Header Row */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white font-display text-lg font-black text-black">
                      {val.num}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-tight uppercase leading-none mt-0.5">
                      {val.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-white/95 mt-6 font-medium">
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
