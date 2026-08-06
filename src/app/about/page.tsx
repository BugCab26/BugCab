import type { Metadata } from "next";
import { About } from "@/components/About";
import { AboutJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About BugCab — IT Solutions Company for Startups & Freelancers",
  description:
    "BugCab is an IT solutions company founded to help startups and freelancers ship production-ready websites, mobile apps, and digital products — faster and more affordably.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/about",
    title: "About BugCab — IT Solutions Company for Startups & Freelancers",
    description:
      "Meet the team behind BugCab — building websites, mobile apps, UI/UX designs & digital marketing strategies for startups and freelancers.",
    images: [{ url: "https://bugcab.com/images/og-about.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "About BugCab — IT Solutions Company for Startups & Freelancers",
    description:
      "Meet the team behind BugCab — building digital products for startups and freelancers.",
    images: ["https://bugcab.com/images/og-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="relative pt-20">
      <AboutJsonLd />
      <About />
    </main>
  );
}
