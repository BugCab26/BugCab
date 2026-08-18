"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";

export function CybersecurityBentoGrid() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#00C247] block mb-3">
              // SECURITY CATEGORIES
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground uppercase leading-[1.05] max-w-3xl">
              WHAT TYPE OF SECURITY <span className="text-[#00C247]">ARE YOU LOOKING FOR?</span>
            </h2>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Security Audits & Penetration Testing (Left Column - Tall Card) */}
          <Reveal className="col-span-12 md:col-span-7 h-full">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-9 flex flex-col justify-between h-full min-h-[500px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              {/* Glowing Ambient Light */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#00C247]/10 blur-[90px] pointer-events-none group-hover:bg-[#00C247]/20 transition-colors duration-500" />

              {/* 3D Robot Image */}
              <div className="relative w-full flex-1 flex items-center justify-center z-10 py-4 min-h-[280px]">
                <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[280px] sm:h-[340px] flex items-center justify-center">
                  <Image
                    src="/services/robot.png"
                    alt="Cybersecurity Robot Auditor"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,194,71,0.3)] transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Text & Content */}
              <div className="z-10 mt-auto">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white mb-2 leading-[1.05]">
                  Penetration Testing &amp; Audits
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wide">
                  OWASP Top 10 | Vulnerability Scans | Zero Trust Architecture
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column Stack (WAF & Network Security + Data Encryption) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5 h-full justify-between">
            {/* Card 2: WAF & Network Security */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1">
                    WAF &amp; Firewall Protection
                  </h3>
                  <p className="text-[#00C247] text-xs sm:text-sm font-semibold mb-2.5">
                    Cloudflare WAF / Bot Mitigation / Rate Limiting
                  </p>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    Configuring web application firewalls, rate limiting rules, and automated threat defense to shield your apps from malicious traffic.
                  </p>
                </div>

                {/* Security Badges Container */}
                <div className="mt-4 inline-flex items-center p-2 rounded-2xl bg-neutral-900/90 border border-white/10 shadow-lg w-fit">
                  <div className="flex items-center -space-x-3">
                    {/* Circle 1: Shield */}
                    <div className="relative z-30 w-10 h-10 rounded-full bg-neutral-950 border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="Firewall Shield">
                      <svg className="w-5 h-5 text-[#00C247]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    {/* Circle 2: Lock */}
                    <div className="relative z-20 w-10 h-10 rounded-full bg-black border-[2.5px] border-white flex items-center justify-center p-2 shadow-xl" title="SSL Encryption">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Data & Database Encryption */}
            <Reveal className="h-full flex-1 flex flex-col">
              <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-7 sm:p-8 flex flex-col justify-between h-full flex-1 overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                    Database Encryption
                  </h3>
                  <span className="inline-block text-[10px] font-mono font-medium tracking-wider uppercase bg-[#00C247]/10 text-[#00C247] px-3 py-1 rounded-full mb-3 border border-[#00C247]/20">
                    AES-256 • SSL/TLS 1.3 • Data at Rest
                  </span>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                    Enforcing AES-256 database encryption, HTTPS protocols, and strict access tokens to safeguard customer data against unauthorized access.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Card 4: API & Cloud Infrastructure Security (Full Width Bottom Card) */}
          <Reveal className="col-span-12">
            <div className="group relative rounded-[32px] bg-neutral-950 text-white border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[180px] sm:min-h-[200px] overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              <div className="max-w-xl z-10">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2.5">
                  API &amp; Cloud Security
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
                  Securing REST and GraphQL API endpoints with JWT auth, CORS policies, rate limiting, and automated vulnerability monitoring across serverless and cloud environments.
                </p>
              </div>

              {/* 3D Glass Star/Shield Graphic - Responsive container preventing overlap on mobile */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 flex items-center justify-center z-10">
                <Image
                  src="/services/star.png"
                  alt="3D Security Shield"
                  width={280}
                  height={280}
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,194,71,0.35)] transform rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CybersecurityBentoGrid;
