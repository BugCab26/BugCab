import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — IT Tips, Startup Tech Guides & Dev Insights | BugCab",
  description:
    "The BugCab blog covers web development, mobile app development, UI/UX, digital marketing & IT strategy — all tailored for startup founders and freelancers across India.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/blog",
    title: "Blog — IT Guides for Startups & Freelancers | BugCab",
    description:
      "Web development, mobile apps, UI/UX, SEO & IT strategy — written for founders and freelancers who need real answers.",
    images: [{ url: "https://bugcab.com/images/og-blog.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — IT Guides for Startups & Freelancers | BugCab",
    description:
      "Web development, mobile apps, UI/UX & SEO guides for startup founders across India.",
    images: ["https://bugcab.com/images/og-blog.jpg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://bugcab.com/blog",
            name: "BugCab Blog — IT Guides for Startups & Freelancers",
            description:
              "Web development, mobile app, UI/UX, digital marketing & IT strategy articles for startup founders and freelancers across India.",
            url: "https://bugcab.com/blog",
            publisher: { "@id": "https://bugcab.com/#organization" },
            inLanguage: "en-IN",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://bugcab.com/blog" },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
