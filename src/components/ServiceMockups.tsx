"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const codeText = [
  "const webApp = new WebProject();",
  "await webApp.optimizeSEO();",
  "await webApp.deployToVercel({",
  "  speed: '99/100',",
  "  ranking: 'Page #1'",
  "});",
];

// Mockup 1: IDE Code Typing (Web Development)
export function WebDevMockup() {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let active = true;
    let currentLine = 0;
    let currentChar = 0;
    let timer: any;

    const type = () => {
      if (!active) return;
      if (currentLine >= codeText.length) {
        timer = setTimeout(() => {
          if (!active) return;
          setLines([]);
          currentLine = 0;
          currentChar = 0;
          type();
        }, 4000);
        return;
      }

      const fullLine = codeText[currentLine];
      if (currentChar <= fullLine.length) {
        const lineIdx = currentLine;
        const charCount = currentChar;
        setLines((prev) => {
          const next = [...prev];
          next[lineIdx] = fullLine.slice(0, charCount);
          return next;
        });
        currentChar++;
        timer = setTimeout(type, 50);
      } else {
        currentLine++;
        currentChar = 0;
        timer = setTimeout(type, 200);
      }
    };

    type();
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="w-[380px] max-w-full h-[190px] rounded-xl bg-neutral-950 border border-white/10 p-4 font-mono text-[10px] leading-relaxed text-neutral-300 shadow-2xl flex flex-col select-none"
    >
      <div className="flex items-center gap-1 border-b border-white/5 pb-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/80" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
        <div className="w-2 h-2 rounded-full bg-green-500/80" />
        <span className="text-[9px] text-neutral-500 ml-2">seo-config.ts</span>
      </div>
      <div className="flex-1 overflow-hidden">
        {lines.map((line, idx) => (
          <div key={idx} className="flex gap-2.5">
            <span className="text-neutral-600 select-none w-5 text-right">{idx + 1}</span>
            <span className="text-neutral-200">
              {line.startsWith("const") || line.startsWith("await") ? (
                <span className="text-pink-400">{line.slice(0, 5)}</span>
              ) : null}
              {line.includes("new WebProject") ? (
                <>
                  {line.startsWith("const")
                    ? line.slice(5).replace("WebProject", "")
                    : line.replace("WebProject", "")}
                  <span className="text-orange-400">WebProject</span>
                </>
              ) : line.startsWith("const") || line.startsWith("await") ? (
                line.slice(5)
              ) : (
                line
              )}
            </span>
          </div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-1.5 h-3 bg-orange-500 ml-0.5 align-middle"
        />
      </div>
    </div>
  );
}

// Mockup 2: Mobile App Bezel (App Development)
export function MobileMockup() {
  const notifications = [
    {
      title: "App Store Push",
      time: "Just now",
      desc: "App Store & Play Store bundles compiled",
      bg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20",
    },
    {
      title: "UI Rendering",
      time: "2m ago",
      desc: "React Native views loaded at 60 FPS",
      bg: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20",
    },
  ];

  return (
    <div className="w-[190px] max-w-full h-[270px] rounded-[24px] border-[4px] border-neutral-900 bg-neutral-950 p-2.5 shadow-2xl relative overflow-hidden flex flex-col justify-start select-none">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-neutral-900 rounded-full" />
      <div className="flex justify-between items-center px-1 pt-1.5 pb-0.5 text-[8px] text-neutral-500">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-neutral-500 rounded-full" />
          <div className="w-2.5 h-1 bg-neutral-500 rounded-sm" />
        </div>
      </div>
      <div className="flex-grow flex flex-col gap-1.5 mt-1.5">
        <span className="text-[9px] font-bold text-neutral-400 px-1">App Deployment</span>
        <div className="flex flex-col gap-1.5 overflow-hidden">
          {notifications.map((n, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.4, duration: 0.5 }}
              className={`p-1.5 rounded-lg text-[8px] ${n.bg}`}
            >
              <div className="flex justify-between font-semibold">
                <span>{n.title}</span>
                <span className="opacity-60">{n.time}</span>
              </div>
              <p className="mt-0.5 opacity-80 leading-normal">{n.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mockup 3: Figma-Style Canvas (UI/UX)
export function UIDesignMockup() {
  return (
    <div className="w-[310px] max-w-full h-[190px] rounded-xl bg-neutral-950 border border-white/10 relative overflow-hidden flex items-center justify-center select-none shadow-lg">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="w-24 h-24 rounded-2xl bg-orange-500/20 border border-orange-500/40 relative flex items-center justify-center"
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-950 border border-orange-500 rounded-sm" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-950 border border-orange-500 rounded-sm" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-950 border border-orange-500 rounded-sm" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-950 border border-orange-500 rounded-sm" />

        <div className="w-14 h-14 rounded-full bg-blue-500/30 border border-blue-500/40" />
      </motion.div>

      <motion.div
        animate={{
          x: [-50, 20, -50],
          y: [25, -15, 25],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute z-10 pointer-events-none"
      >
        <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
          <path
            d="M4.5 1.5V14.5L8.5 10.5H14.5L4.5 1.5Z"
            fill="#3b82f6"
            stroke="#fff"
            strokeWidth="1.5"
          />
        </svg>
        <span className="absolute left-5 top-5 bg-blue-500 text-white font-sans text-[9px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap">
          UI Component
        </span>
      </motion.div>
    </div>
  );
}

// Mockup 4: Projected traffic chart (Digital Marketing)
export function StrategyMockup() {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setPercent((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="w-[360px] max-w-full h-[180px] rounded-xl bg-neutral-950 border border-white/10 relative overflow-hidden p-4 flex flex-col justify-between select-none shadow-lg"
    >
      <div className="flex justify-between items-center">
        <span className="text-[9px] font-mono text-neutral-400 tracking-wider">
          SEO TRAFFIC INCREASE
        </span>
        <span className="text-xs font-mono font-bold text-orange-500">+{percent}%</span>
      </div>

      <div className="flex-grow flex items-end gap-2 pb-2">
        <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden">
          <div
            style={{ width: `${percent}%` }}
            className="h-full bg-gradient-to-r from-orange-500 to-amber-400"
          />
        </div>
      </div>

      <div className="border-t border-white/5 pt-2 flex justify-between items-center text-[8px] font-mono text-neutral-400">
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-ping" />
          <span>SEO Audit</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-orange-500" />
          <span>Content Plan</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-emerald-500" />
          <span>Page #1 Ranking</span>
        </div>
      </div>
    </div>
  );
}

// Mockup 6: Cybersecurity Scanner (Cybersecurity)
export function SecurityMockup() {
  const [scanProgress, setScanProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (scanProgress >= 100) {
      setIsLocked(true);
    }
  }, [scanProgress]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 80);

    const logTimer = setInterval(() => {
      setLogs((prev) => {
        const randomLogs = [
          "PORT SCAN... SECURE",
          "DDOS SHIELD... ACTIVE",
          "WAF BYPASS CHECK... FAIL",
          "SSL DECRYPT... OK",
          "DB HANDSHAKE... ENCRYPTED",
          "THREAT DETECTION... ZERO",
        ];
        const nextLog = randomLogs[Math.floor(Math.random() * randomLogs.length)];
        const nextList = [...prev, nextLog];
        if (nextList.length > 3) nextList.shift();
        return nextList;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="w-[420px] max-w-full h-[230px] rounded-2xl bg-neutral-950 border border-white/10 relative overflow-hidden p-4.5 flex flex-col justify-between select-none shadow-2xl"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_28px]" />

      {/* Scanner header */}
      <div className="flex justify-between items-center border-b border-white/5 pb-2.5 z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
            CYBER GUARD SHIELD
          </span>
        </div>
        <span className="text-[9px] font-mono text-lime font-bold tracking-wider">SECURE</span>
      </div>

      {/* Main HUD */}
      <div className="flex-1 flex gap-5 items-center mt-3 z-10">
        {/* Left: Shield & Radar */}
        <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
          {/* Radar Circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-lime/20"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute w-[80%] h-[80%] rounded-full border border-lime/30"
          />
          <div className="absolute w-[60%] h-[60%] rounded-full bg-lime/5 border border-lime/40 flex items-center justify-center" />

          {/* Sweep scanning effect */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-lime/20 via-transparent to-transparent pointer-events-none"
            style={{ transformOrigin: "center" }}
          />

          {/* Central Security Icon */}
          <div className="relative z-10">
            {isLocked ? (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-lime filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-lime/80"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right: Live Scan Logs & Stats */}
        <div className="flex-1 flex flex-col justify-between h-full py-1">
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
              <span className="tracking-wider font-semibold">PORT AUDITING</span>
              <span className="text-lime font-bold">{scanProgress}%</span>
            </div>
            {/* Custom High-Tech Progress Bar */}
            <div className="w-full bg-white/5 h-3 rounded-sm overflow-hidden border border-white/10 relative flex">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${scanProgress}%` }}
                transition={{ ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-lime via-lime to-lime/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              />
              {/* Segments pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_8px,rgba(0,0,0,0.4)_8px)] bg-[size:10px_100%] pointer-events-none" />
            </div>
          </div>

          {/* Scrolling Terminal Code Console */}
          <div className="bg-black/50 border border-white/5 rounded p-2.5 font-mono text-[9px] text-neutral-400 h-[80px] overflow-hidden flex flex-col gap-1.5 justify-end select-none">
            {logs.length === 0 ? (
              <div className="text-neutral-600 animate-pulse">[SCANNING READY]</div>
            ) : (
              logs.map((log, i) => {
                const isSuccess =
                  log.includes("OK") ||
                  log.includes("ACTIVE") ||
                  log.includes("PASS") ||
                  log.includes("ENCRYPTED") ||
                  log.includes("ZERO") ||
                  log.includes("SECURE");
                return (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-neutral-600 select-none">&gt;</span>
                    <span className={isSuccess ? "text-lime font-semibold" : "text-neutral-300"}>
                      {log}
                    </span>
                  </div>
                );
              })
            )}
            {scanProgress < 100 && (
              <div className="flex items-center gap-0.5">
                <span className="text-neutral-600">&gt;</span>
                <span className="text-lime w-1 h-2.5 bg-lime animate-pulse inline-block" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cyber Grid Border Glow */}
      <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-lime/30 rounded-br-2xl pointer-events-none" />
      <div className="absolute -top-1 -left-1 w-6 h-6 border-t border-l border-lime/30 rounded-tl-2xl pointer-events-none" />
    </div>
  );
}
