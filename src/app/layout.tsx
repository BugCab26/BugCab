import "@/styles/globals.css";
import "@/styles/blog.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LayoutFaq } from "@/components/layout/LayoutFaq";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BugCab Pvt. Ltd.",
    template: "%s | BugCab Pvt. Ltd.",
  },
  description:
    "BugCab is an IT solutions company helping startups and freelancers build websites, mobile apps, UI/UX designs & digital marketing strategies — fast and affordably.",
  keywords: [
    "IT solutions company",
    "web development for startups",
    "mobile app development",
    "UI UX design startups",
    "digital marketing agency",
  ],
  authors: [{ name: "BugCab IT Solutions", url: "https://bugcab.com" }],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_ENV === "production"
        ? "https://bugcab.com"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"),
  ),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/images/BugCab.png", type: "image/png" },
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/favicon.ico", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "BugCab Pvt. Ltd.",
    description:
      "Web development, mobile apps, UI/UX design & digital marketing for startups and freelancers. Fast delivery. Transparent scoping.",
    url: "https://bugcab.com",
    siteName: "BugCab IT Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BugCab IT Solutions — Web & App Development for Startups",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BugCab Pvt. Ltd.",
    description: "Web development, mobile apps, UI/UX design & digital marketing for startups.",
    images: ["/og-image.png"],
    creator: "@bugcab",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      lang="en-IN"
      translate="no"
      className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
              } catch (e) {}
            `,
          }}
        />
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          {children}
          <LayoutFaq />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
