"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false); // Disabled splash screen for instant loading and animation reliability

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("splash-seen");
      if (!seen) {
        sessionStorage.setItem("splash-seen", "1");
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 3000); // 3s loading time

        return () => clearTimeout(timer);
      } else {
        setIsVisible(false); // Hide immediately if already seen in this session
      }
    } catch (e) {
      setIsVisible(false); // Fallback to hidden if storage errors out
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 5, ease: [0.76, 0, 0.24, 1] }}
          className="splash-screen-container fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-12"
          >
            {/* Logo with Circular Spinner */}
            <div className="relative flex items-center justify-center h-72 w-72 md:h-96 md:w-96">
              {/* Spinning Ring */}
              <svg
                className="absolute inset-0 w-full h-full animate-[spin_2s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id="spinner-grad-1" x1="84.6%" y1="30%" x2="15.4%" y2="70%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="spinner-grad-2" x1="15.4%" y1="70%" x2="84.6%" y2="30%">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Thin Background Circle (Slim Guide Track) */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#ef4444"
                  strokeOpacity="0.1"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Arc 1 */}
                <path
                  d="M 84.6 30 A 40 40 0 0 0 15.4 70"
                  fill="none"
                  stroke="url(#spinner-grad-1)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Arc 2 */}
                <path
                  d="M 15.4 70 A 40 40 0 0 0 84.6 30"
                  fill="none"
                  stroke="url(#spinner-grad-2)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Animated Logo */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-48 w-48 md:h-64 md:w-64 overflow-hidden relative z-10"
              >
                <Image
                  src="/images/logo.png"
                  alt="BugCab Logo"
                  width={256}
                  height={256}
                  priority
                  className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]"
                />
              </motion.div>
            </div>

            {/* Loading Text */}
            <div className="flex flex-col items-center gap-4">
              {/* Animated Typography */}
              <div className="flex font-mono text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                {"Loading".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
