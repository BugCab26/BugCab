import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ContactJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact BugCab — Hire an IT Solutions Company in India",
  description:
    "Get a free quote from BugCab in Erode, Tamil Nadu for web development, mobile app development, UI/UX design, or digital marketing. Response within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/contact",
    title: "Contact BugCab — Get a Free IT Project Quote",
    description:
      "Tell us about your business project — web, app, design, digital marketing or IT consulting. Free quote within 24 hours. No commitment required.",
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
