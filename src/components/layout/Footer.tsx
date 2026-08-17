"use client";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Software Development", href: "/services/web-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/bugcab" },
  { label: "Twitter", href: "https://twitter.com/bugcab" },
  { label: "GitHub", href: "https://github.com/bugcab" },
  { label: "Instagram", href: "https://instagram.com/bugcab" },
];

export function Footer() {
  return (
    <footer suppressHydrationWarning className="bg-background pt-12 sm:pt-16 pb-8 border-t border-border/60">
      <div suppressHydrationWarning className="mx-auto max-w-7xl px-4 sm:px-6">
        <div suppressHydrationWarning className="flex flex-col lg:flex-row justify-between items-start gap-10 sm:gap-12">
          {/* Left — brand + email */}
          <div suppressHydrationWarning className="flex flex-col gap-4 max-w-sm w-full">
            <div className="overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-lg relative w-full max-w-[260px] h-[150px] sm:h-[160px]">
              <Image
                src="/images/car_footer.png"
                alt="BugCab IT solutions — web and app development for startups India"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
            <div suppressHydrationWarning className="flex flex-col gap-1.5 mt-2 text-xs font-semibold tracking-wider text-neutral-500">
              <div suppressHydrationWarning className="flex items-center gap-2 flex-wrap">
                <span className="text-[#FF2A2A]">•</span> Email:
                <a
                  href="mailto:bugcab.com@gmail.com"
                  className="text-foreground hover:text-[#FF2A2A] transition-colors font-bold lowercase"
                >
                  bugcab.com@gmail.com
                </a>
              </div>
              <div suppressHydrationWarning className="flex items-center gap-3 text-neutral-400 flex-wrap">
                <span className="text-[#FF2A2A]">•</span> Call / WhatsApp:
                <a
                  href="https://wa.me/916374369237?text=Hi%20BugCab%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-[#FF2A2A] transition-colors font-bold"
                >
                  +91 6374369237
                </a>
                <span>|</span>
                <a href="tel:+919080410549" className="text-foreground hover:text-[#FF2A2A] transition-colors font-bold">
                  +91 9080410549
                </a>
              </div>
            </div>
            {/* NAP for Local SEO */}
            <address suppressHydrationWarning className="not-italic text-xs text-neutral-500 leading-relaxed">
              Erode, Tamil Nadu, India
              <br />
              Available for projects worldwide
            </address>
          </div>

          {/* Right — 3 columns */}
          <div suppressHydrationWarning className="grid grid-cols-2 sm:flex gap-8 sm:gap-12 md:gap-16 w-full lg:w-auto">
            {/* Navigation */}
            <nav aria-label="Footer navigation">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold mb-4 sm:mb-6">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm font-semibold text-foreground hover:text-[#FF2A2A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="BugCab services">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold mb-4 sm:mb-6">
                Services
              </h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm font-semibold text-foreground hover:text-[#FF2A2A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Socials */}
            <nav aria-label="BugCab social media" className="col-span-2 sm:col-span-1">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold mb-4 sm:mb-6">
                Follow Us
              </h3>
              <ul className="flex flex-row sm:flex-col gap-4 sm:gap-3 flex-wrap">
                {socials.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`BugCab on ${item.label}`}
                      className="text-xs sm:text-sm font-semibold text-foreground hover:text-[#FF2A2A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Giant brand text — aria-hidden so it doesn't count as H2 */}
        <div
          suppressHydrationWarning
          className="mt-12 sm:mt-20 flex w-full justify-center overflow-hidden border-t border-border/40 pt-6 sm:pt-10"
          aria-hidden="true"
          role="presentation"
        >
          <span className="font-display text-[14vw] sm:text-[15vw] font-black leading-[0.9] tracking-tighter md:text-[180px] select-none text-center block w-full truncate">
            <span className="text-[#FF2A2A]">BUG</span>
            <span className="text-foreground ml-[1.5vw] md:ml-[30px]">CAB</span>
          </span>
        </div>

        {/* Bottom bar */}
        <div suppressHydrationWarning className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          <p>© 2025 BugCab IT Solutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-of-service" className="hover:text-[#FF2A2A] transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#FF2A2A] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
