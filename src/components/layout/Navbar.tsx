"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowRight, ChevronDown, BookOpen } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import gsap from "gsap";
import {
  WebDevMockup,
  MobileMockup,
  UIDesignMockup,
  StrategyMockup,
  SecurityMockup,
} from "@/components/ServiceMockups";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
] as const;

const servicesList = [
  {
    title: "Software Development",
    desc: "Custom software, React applications, and enterprise web solutions built with high performance.",
    Mockup: WebDevMockup,
    href: "/services/web-development",
  },
  {
    title: "UIUX Design",
    desc: "Sleek wireframes, visual systems, and user interfaces designed to elevate user experience.",
    Mockup: UIDesignMockup,
    href: "/services/ui-ux-design",
  },
  {
    title: "Digital Marketing",
    desc: "Targeted digital campaigns, search ranking improvements, and conversion optimization.",
    Mockup: StrategyMockup,
    href: "/services/digital-marketing",
  },
  {
    title: "Cybersecurity",
    desc: "Comprehensive penetration testing, OWASP compliance audits, and security vulnerability scanning.",
    Mockup: SecurityMockup,
    href: "/services/cybersecurity",
  },
];

// Magnetic Animation Wrapper
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rectRef.current) {
      if (ref.current) {
        rectRef.current = ref.current.getBoundingClientRect();
      } else {
        return;
      }
    }
    const { clientX, clientY } = e;
    const { left, top, width, height } = rectRef.current;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const factor = 0.35; // Strength of attraction
    setPosition({ x: dx * factor, y: dy * factor });
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}

// Slide Text Button for "Let's Talk"
function LetTalkButton({ scrolled }: { scrolled?: boolean }) {
  return (
    <Link
      href="/contact"
      className={`group relative inline-flex items-center justify-center overflow-hidden h-[44px] text-[13px] font-bold transition-all duration-500 shadow-md hover:scale-[1.03] ${scrolled
          ? "bg-white text-black border border-transparent rounded-[10px] px-6 hover:bg-neutral-100"
          : "bg-neutral-950 border border-white/5 text-white dark:bg-white dark:text-black rounded-[10px] px-6 hover:bg-neutral-900"
        }`}
    >
      <div className="relative h-[16px] overflow-hidden flex flex-col items-center">
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1/2 flex flex-col h-[32px]">
          <span className="h-[16px] flex items-center justify-center">Let's Talk</span>
          <span className="h-[16px] flex items-center justify-center">Let's Talk</span>
        </div>
      </div>
    </Link>
  );
}

// Animated Hamburger Button
function HamburgerButton({ open, setOpen }: { open: boolean; setOpen: (o: boolean) => void }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative z-50 flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-neutral-900 border border-white/5 dark:bg-white text-white dark:text-black shadow-md focus:outline-none cursor-pointer"
      aria-label="Toggle menu"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.span
          style={{ position: "absolute", top: "4px" }}
          animate={open ? { rotate: 45, top: "9px" } : { rotate: 0, top: "4px" }}
          transition={{ duration: 0.3 }}
          className="h-0.5 w-5 bg-current block"
        />
        <motion.span
          style={{ position: "absolute", top: "9px" }}
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="h-0.5 w-5 bg-current block"
        />
        <motion.span
          style={{ position: "absolute", top: "14px" }}
          animate={open ? { rotate: -45, top: "9px" } : { rotate: 0, top: "14px" }}
          transition={{ duration: 0.3 }}
          className="h-0.5 w-5 bg-current block"
        />
      </div>
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hoveredService, setHoveredService] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // GSAP staggered entry animation for navbar items
    gsap.fromTo(
      ".navbar-logo, .navbar-link, .navbar-cta",
      { y: -25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.1,
      },
    );
  }, []);

  // Close mega menu/mobile overlay on path change
  useEffect(() => {
    setShowMegaMenu(false);
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <Toaster />
      <header
        onMouseLeave={() => setShowMegaMenu(false)}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 px-6 ${scrolled
            ? "top-4 flex justify-center w-full"
            : "top-0 py-6 md:px-12 w-full"
          }`}
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-500 ${scrolled
              ? "w-fit gap-2 bg-[#0c0c0c]/90 dark:bg-[#0c0c0c]/90 backdrop-blur-lg border border-white/10 rounded-[14px] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "w-full"
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`navbar-logo opacity-0 flex items-center gap-2.5 md:gap-3 transition-all duration-500 ${scrolled
                ? "bg-white text-black rounded-[10px] md:rounded-[14px] px-3.5 md:px-4 py-1.5 h-[44px] md:h-[50px] shadow-md hover:scale-[1.02] active:scale-98"
                : "hover:scale-[1.02] active:scale-98"
              }`}
          >
            <div className="flex h-8.5 w-8.5 md:h-11 md:w-11 items-center justify-center overflow-hidden relative shrink-0">
              <Image
                src="/images/BugCab.png"
                alt="BugCab logo"
                width={44}
                height={44}
                priority
                className="h-full w-full object-contain scale-[1.5]"
              />
            </div>
            <span
              className={`font-display font-black text-2xl md:text-3xl tracking-tight uppercase leading-none mt-0.5 transition-colors duration-500 ${scrolled ? "text-black" : "text-foreground"
                }`}
            >
              BUG<span className="text-[#FF3B30]">CAB</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav
            className={`hidden md:flex items-center transition-all duration-500 ${scrolled
                ? "gap-1 bg-[#050505] border border-white/5 rounded-[10px] p-1 h-[44px]"
                : "gap-8"
              }`}
          >
            {links.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  onMouseEnter={() => {
                    if (l.label === "Home") {
                      setShowMegaMenu(true);
                    } else {
                      setShowMegaMenu(false);
                    }
                  }}
                  className={`navbar-link opacity-0 group relative text-sm font-medium transition-all duration-300 ${scrolled
                      ? "rounded-[8px] px-5 py-2 text-neutral-300 hover:text-white"
                      : "py-2.5 " + (isActive ? "text-[#FF3B30]" : "text-neutral-400 hover:text-white")
                    }`}
                >
                  <span className="relative z-10">{l.label}</span>
                  {!scrolled && isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF3B30] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!scrolled && !isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF3B30] group-hover:w-full transition-all duration-300 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to action & Blog Icon Button */}
          <div className="navbar-cta opacity-0 flex items-center gap-2">
            {/* Standalone Blog Icon Button (Security / Shield badge style) */}
            <div className="hidden md:block">
              <Magnetic>
                <Link
                  href="/blog"
                  title="Blog"
                  aria-label="Blog"
                  className={`group relative inline-flex h-[44px] w-[44px] items-center justify-center overflow-hidden transition-all duration-500 shadow-md hover:scale-[1.05] ${scrolled
                      ? "bg-[#050505] border border-white/10 text-white rounded-[10px] hover:border-white/20"
                      : "bg-neutral-950 border border-white/10 text-white dark:bg-black dark:text-white rounded-[10px] hover:border-white/20"
                    }`}
                >
                  <BookOpen
                    className={`h-4.5 w-4.5 transition-all duration-300 group-hover:scale-110 ${pathname === "/blog" ? "text-[#FF3B30]" : "text-white group-hover:text-[#FF3B30]"
                      }`}
                  />
                </Link>
              </Magnetic>
            </div>

            <div className="hidden md:block">
              <Magnetic>
                <LetTalkButton scrolled={scrolled} />
              </Magnetic>
            </div>

            <div className="md:hidden z-50">
              <HamburgerButton open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown (ALWAYS in dark theme style) */}
        <AnimatePresence>
          {showMegaMenu && (
            <>
              {/* Hover bridge */}
              <div className="absolute top-full left-0 right-0 h-4 bg-transparent hidden md:block" />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-full max-w-5xl rounded-3xl border border-neutral-800 bg-[#050505] text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-8 hidden md:block overflow-hidden"
              >
                <div className="grid grid-cols-12 gap-8">
                  {/* Left Column - Core Services List */}
                  <div className="col-span-5 flex flex-col justify-between border-r border-neutral-800 pr-8">
                    <div>
                      <span className="font-display text-2xl font-black uppercase tracking-tight text-white block mb-6">
                        Core Services
                      </span>
                      <div className="flex flex-col gap-2">
                        {servicesList.map((service, idx) => {
                          const isHovered = hoveredService === idx;
                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setShowMegaMenu(false)}
                              onMouseEnter={() => setHoveredService(idx)}
                              className="flex items-center gap-3 group/item py-2"
                            >
                              <span
                                className={`font-display text-xl font-bold tracking-tight uppercase transition-colors ${isHovered
                                    ? "text-[#FF3B30]"
                                    : "text-neutral-500 hover:text-neutral-200"
                                  }`}
                              >
                                {service.title}
                              </span>
                              {isHovered && (
                                <motion.span layoutId="menuArrow" className="text-[#FF3B30] text-sm">
                                  →
                                </motion.span>
                              )}
                            </Link>
                          );
                        })}
                      </div>

                      {/* Calendly Button */}
                      <div className="mt-8">
                        <Link
                          href="/contact"
                          onClick={() => setShowMegaMenu(false)}
                          className="inline-flex items-center justify-center border border-neutral-800 rounded-lg px-6 py-2.5 text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#FF3B30] hover:border-transparent hover:text-white transition-all duration-300 w-fit cursor-pointer text-neutral-400"
                        >
                          Calendly +
                        </Link>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800">
                      <Link
                        href="/contact"
                        onClick={() => setShowMegaMenu(false)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF3B30] hover:text-white transition-colors"
                      >
                        Start A Project <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - Dynamic Details & Mockups */}
                  <div className="col-span-7 flex flex-col justify-between pl-4 text-white">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#FF3B30] uppercase">
                        {servicesList[hoveredService].title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-400 leading-relaxed max-w-md">
                        {servicesList[hoveredService].desc}
                      </p>
                    </div>

                    {/* Live Mockup Viewport */}
                    <div className="mt-6 rounded-2xl bg-neutral-950 border border-neutral-900 flex items-center justify-center p-4 relative min-h-[220px]">
                      <div className="scale-90 transform transition-all duration-500 ease-out origin-center">
                        {(() => {
                          const ActiveMockup = servicesList[hoveredService].Mockup;
                          return <ActiveMockup />;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Drawer Menu (Slides in from the right with pre-layers) */}
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop filter overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[8000] bg-black/60 backdrop-blur-sm md:hidden"
              />
              {/* Offset stagger slide layer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 200, delay: 0.05 }}
                className="fixed inset-y-0 right-0 z-[8500] w-full max-w-[400px] bg-[#FF3B30]/10 dark:bg-[#FF3B30]/20 md:hidden pointer-events-none"
              />
              {/* Main drawer panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
                className="fixed inset-y-0 right-0 z-[9000] w-full max-w-[400px] bg-background border-l border-border/40 p-8 pt-32 shadow-2xl flex flex-col justify-between md:hidden overflow-y-auto"
              >
                <div className="absolute top-6 right-6 flex items-center gap-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-neutral-505 hover:text-[#FF3B30] cursor-pointer transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {links.map((l, i) => {
                    const isActive = pathname === l.to;
                    if (l.label === "Home") {
                      return (
                        <motion.div
                          key={l.to}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex flex-col"
                        >
                          <div className="flex items-center justify-between border-b border-border/50 pb-4">
                            <Link
                              href={l.to}
                              onClick={() => setOpen(false)}
                              className={`text-3xl font-display font-extrabold transition-colors ${isActive ? "text-[#FF3B30]" : "text-[#FF3B30] hover:text-[#FF3B30]/80"
                                }`}
                            >
                              {l.label}
                            </Link>
                            <button
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className="p-2 text-foreground/75 hover:text-[#FF3B30] cursor-pointer transition-transform duration-300"
                              style={{
                                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                              }}
                            >
                              <ChevronDown className="h-6 w-6" />
                            </button>
                          </div>

                          {/* Collapsible Nested Services Submenu */}
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden pl-4 flex flex-col gap-3.5 mt-4 border-l border-[#FF3B30]/20"
                              >
                                {servicesList.map((service) => (
                                  <Link
                                    key={service.title}
                                    href={service.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm font-semibold text-muted-foreground hover:text-[#FF3B30] transition-colors"
                                  >
                                    {service.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={l.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Link
                          href={l.to}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between border-b border-border/50 pb-4 text-3xl font-display font-extrabold transition-colors ${isActive ? "text-[#FF3B30]" : "text-foreground hover:text-[#FF3B30]"
                            }`}
                        >
                          {l.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: links.length * 0.05 }}
                  >
                    <Link
                      href="/blog"
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between border-b border-border/50 pb-4 text-3xl font-display font-extrabold transition-colors ${pathname === "/blog" ? "text-[#FF3B30]" : "text-foreground hover:text-[#FF3B30]"
                        }`}
                    >
                      <span className="flex items-center gap-3">
                        <BookOpen className="h-7 w-7 text-[#FF3B30]" />
                        Blog
                      </span>
                    </Link>
                  </motion.div>
                </div>

                {/* Drawer Footer Call-To-Action */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center rounded-[10px] bg-neutral-900 text-white dark:bg-white dark:text-black py-4 text-base font-bold transition-transform active:scale-95 shadow-md"
                  >
                    Let's Talk
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
