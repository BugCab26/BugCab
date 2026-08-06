import type { Metadata } from "next";
import { Projects } from "@/components/Projects";
import { WorkJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Work — Web & App Development Projects | BugCab IT Solutions",
  description:
    "Explore BugCab's project portfolio — real websites, mobile apps, and digital marketing campaigns built for startups and businesses. See what we've shipped.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/work",
    title: "Our Work — Web & App Development Projects | BugCab",
    description:
      "Real projects, real results — web development, mobile apps & digital marketing for businesses. View BugCab's full portfolio.",
    images: [{ url: "https://bugcab.com/images/og-work.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Web & App Development Projects | BugCab",
    description:
      "Real projects, real results — web development, mobile apps & digital marketing for businesses.",
    images: ["https://bugcab.com/images/og-work.jpg"],
  },
};

export default function WorkPage() {
  return (
    <main className="relative pt-24">
      <WorkJsonLd />
      <Projects />
    </main>
  );
}
