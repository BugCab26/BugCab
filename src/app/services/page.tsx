import type { Metadata } from "next";
import InteractiveServices from "@/components/services/InteractiveServices";

export const metadata: Metadata = {
  title: "IT Services for Startups & Freelancers | BugCab",
  description:
    "Web development, mobile app development, UI/UX design, and digital marketing services for startups and freelancers. Fast shipping. Transparent pricing.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/services",
    title: "IT Services for Startups & Freelancers | BugCab",
    description:
      "Web development, mobile apps, UI/UX design & digital marketing for startups and freelancers.",
    images: [{ url: "https://bugcab.com/images/og-services.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services for Startups & Freelancers | BugCab",
    description:
      "Web development, mobile apps, UI/UX design & digital marketing for startups and freelancers.",
    images: ["https://bugcab.com/images/og-services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative pt-24 bg-white">
      <InteractiveServices />
    </main>
  );
}
