import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join the BugCab Team | IT Solutions India",
  description:
    "Explore career opportunities at BugCab. Join our team building web development, mobile apps, UI/UX, and digital solutions for startups and freelancers.",
  alternates: { canonical: "/careers" },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/careers",
    title: "Careers — Join the BugCab Team | IT Solutions India",
    description:
      "Explore career opportunities at BugCab. Join our team building web development, mobile apps, UI/UX, and digital solutions.",
    images: [{ url: "https://bugcab.com/images/og-careers.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
};


const positions = [
  {
    title: "Senior Full Stack Engineer",
    type: "Full-time",
    location: "Remote (India)",
    desc: "Lead development of rich client applications using Next.js, TailwindCSS, and Node.js. Experience with GSAP and Framer Motion is a plus.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract / Full-time",
    location: "Remote",
    desc: "Create state-of-the-art interactive interfaces and mockups in Figma. Translate complex user flows into beautiful, minimal web design.",
  },
  {
    title: "Cybersecurity Analyst",
    type: "Full-time",
    location: "Remote (India)",
    desc: "Conduct security audits, penetration testing, and code reviews for modern React/Node stacks to ensure secure digital infrastructure.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#FF3B30] font-mono font-bold">
            Join The Cab
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-tight">
            Build Secure Systems <br />
            With Us.
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            We are a remote-first team of developers, designers, and security experts crafting exceptional digital products.
          </p>
        </div>

        {/* Listings */}
        <div className="space-y-6">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 rounded-3xl bg-neutral-950 border border-white/5 hover:border-[#FF3B30]/30 transition-all duration-300 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-xl">
                <h3 className="text-xl font-bold font-display group-hover:text-[#FF3B30] transition-colors">
                  {pos.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {pos.desc}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>{pos.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{pos.location}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-white hover:bg-neutral-100 text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.03]"
              >
                Apply Now <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 text-center p-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.01]">
          <h4 className="text-lg font-bold mb-2">Don't see your role?</h4>
          <p className="text-neutral-400 text-sm mb-4">
            We are always looking for exceptional talent. Send us your portfolio anyway.
          </p>
          <Link
            href="/contact"
            className="text-xs font-bold uppercase tracking-widest text-[#FF3B30] hover:text-white transition-colors"
          >
            Get In Touch <ArrowRight className="inline h-3.5 w-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
