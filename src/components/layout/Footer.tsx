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
    <footer className="bg-background pt-16 pb-8 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left — brand + email */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="overflow-hidden rounded-[24px] shadow-lg relative w-[260px] h-[160px]">
              <Image
                src="/images/car_footer.png"
                alt="BugCab IT solutions — web and app development for startups India"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <span className="text-lime">•</span> Stay connected
              <a
                href="mailto:hello@bugcab.com"
                className="text-foreground hover:text-lime transition-colors font-bold lowercase"
              >
                hello@bugcab.com
              </a>
            </div>
            {/* NAP for Local SEO */}
            <address className="not-italic text-xs text-neutral-500 leading-relaxed">
              Erode, Tamil Nadu, India
              <br />
              Available for projects worldwide
            </address>
          </div>

          {/* Right — 3 columns */}
          <div className="flex gap-12 md:gap-16 flex-wrap">
            {/* Navigation */}
            <nav aria-label="Footer navigation">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold mb-6">
                Navigation
              </h3>
              <ul className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-foreground hover:text-lime transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="BugCab services">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold mb-6">
                Services
              </h3>
              <ul className="flex flex-col gap-3">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-semibold text-foreground hover:text-lime transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Socials */}
            <nav aria-label="BugCab social media">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold mb-6">
                Follow Us
              </h3>
              <ul className="flex flex-col gap-3">
                {socials.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`BugCab on ${item.label}`}
                      className="text-sm font-semibold text-foreground hover:text-lime transition-colors"
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
          className="mt-20 flex w-full justify-center overflow-hidden border-t border-border/40 pt-10"
          aria-hidden="true"
          role="presentation"
        >
          <span className="font-display text-[15vw] font-black leading-[0.9] tracking-tighter md:text-[180px] select-none">
            <span className="text-lime">BUG</span>
            <span className="text-foreground ml-[2vw] md:ml-[30px]">CAB</span>
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          <p>© {new Date().getFullYear()} BugCab IT Solutions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-of-service" className="hover:text-lime transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-lime transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
