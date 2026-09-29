import "@/styles/globals.css";
import "@/styles/blog.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LayoutFaq } from "@/components/layout/LayoutFaq";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "BugCab — IT Solutions for Businesses & Professionals | India",
    template: "%s | BugCab",
  },
  description:
    "BugCab is an IT solutions company in Erode, Tamil Nadu, India — building websites, mobile apps, UI/UX designs, digital marketing strategies and IT consulting for businesses and professionals.",
  keywords: [
    "IT solutions company India",
    "web development company India",
    "mobile app development India",
    "IT company Erode Tamil Nadu",
    "digital marketing agency India",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bugcab.com"),
  alternates: { canonical: "./" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/BugCab.png", type: "image/png" },
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/favicon.ico", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "BugCab — IT Solutions for Businesses & Professionals",
    description:
      "Web development, mobile apps, UI/UX design & digital marketing for businesses and professionals. Fast delivery. Transparent scoping.",
    url: "https://bugcab.com",
    siteName: "BugCab IT Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BugCab IT Solutions — Web & App Development for Businesses",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BugCab — IT Solutions for Businesses & Professionals",
    description: "Web development, mobile apps, UI/UX design & digital marketing for businesses.",
    images: ["/og-image.png"],
    creator: "@bugcab",
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "Ux1KK4QIOrbFtwLGV_huUMqfrwYM2JRJChDqfld7HsE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      lang="en-IN"
      translate="no"
      className={[inter.variable, spaceGrotesk.variable, caveat.variable].join(" ")}
    >
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body suppressHydrationWarning>
        <GoogleAnalytics />
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
