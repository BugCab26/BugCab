import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ContactJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact BugCab — Hire an IT Company for Your Startup Project",
  description:
    "Get a free quote from BugCab for web development, mobile app development, UI/UX design, or digital marketing. Response within 24 hours. No commitment required.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/contact",
    title: "Contact BugCab — Get a Free IT Project Quote",
    description:
      "Tell us about your startup project — web, app, design or marketing. Free quote within 24 hours. No commitment required.",
    images: [{ url: "https://bugcab.com/images/og-contact.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BugCab — Get a Free IT Project Quote",
    description:
      "Free quote for web development, mobile apps, UI/UX design & digital marketing. Response within 24 hours.",
    images: ["https://bugcab.com/images/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="relative pt-24">
      <ContactJsonLd />
      <Contact />
    </main>
  );
}
