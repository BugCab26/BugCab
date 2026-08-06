import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { MobileMockup } from "@/components/ServiceMockups";
import { Reveal } from "@/components/Reveal";
import { MobileAppFaq } from "@/components/services/MobileAppFaq";

export const metadata: Metadata = {
  title: "Mobile App Development for Startups & Freelancers | BugCab",
  description:
    "Cross-platform iOS & Android app development with React Native & Flutter. MVP in 6–8 weeks, 60fps performance, both stores. Free quote in 24 hours.",
  alternates: {
    canonical: "/services/mobile-app-development",
  },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/services/mobile-app-development",
    title: "Mobile App Development for Startups | BugCab",
    description:
      "React Native & Flutter app development — one codebase, both stores, 60fps. MVP in 6–8 weeks.",
    images: [{ url: "https://bugcab.com/images/og-app-development.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development for Startups | BugCab",
    description: "React Native & Flutter. iOS + Android. MVP in 6–8 weeks. Free quote.",
    images: ["https://bugcab.com/images/og-app-development.jpg"],
  },
};

const heroStats = [
  { v: "6–8", label: "Week MVP Delivery" },
  { v: "60fps", label: "Smooth UI Performance" },
  { v: "2", label: "Stores — iOS & Android" },
  { v: "Fixed", label: "Pricing Model" },
];

const comparison = [
  {
    factor: "UI Customisation",
    flutter: "Pixel-perfect custom UI with Dart widgets. Best for unique, branded interfaces.",
    reactNative: "Uses native components — looks native on both platforms with less custom effort.",
    winner: "flutter",
  },
  {
    factor: "Performance",
    flutter: "Compiles to native ARM code. Consistently 60fps even on mid-range Android devices.",
    reactNative:
      "Near-native performance with the new Hermes engine. JSI bridge eliminates old bottlenecks.",
    winner: "tie",
  },
  {
    factor: "Team / Language",
    flutter: "Dart — easy to learn but a new language for most developers.",
    reactNative: "JavaScript / TypeScript — your team can contribute immediately if they know JS.",
    winner: "reactNative",
  },
  {
    factor: "Ecosystem / Libraries",
    flutter: "Pub.dev ecosystem growing fast. Strong Google support.",
    reactNative: "npm ecosystem — access to the entire JavaScript package universe.",
    winner: "reactNative",
  },
  {
    factor: "Animations & Motion",
    flutter: "Built-in animation system is best-in-class. Complex motion is easier to build.",
    reactNative: "Reanimated 3 is excellent. Slightly more setup for complex animations.",
    winner: "flutter",
  },
  {
    factor: "App Store Support",
    flutter: "Full iOS App Store + Google Play support. No restrictions.",
    reactNative: "Full iOS App Store + Google Play support. No restrictions.",
    winner: "tie",
  },
];

const appTypes = [
  {
    icon: "🚀",
    title: "MVP / Proof of Concept",
    desc: "Core features only — built fast to validate your idea with real users before you commit to a full build. Ideal for pre-seed startups and solo founders testing a concept.",
    time: "6–8 weeks",
    from: "Fixed Price",
    kw: "MVP app development startup",
  },
  {
    icon: "🛒",
    title: "E-Commerce App",
    desc: "Product catalogue, cart, checkout, and payment gateway (Stripe / PayPal) — with push notifications for order updates. Built cross-platform for iOS and Android.",
    time: "8–12 weeks",
    from: "Fixed Price",
    kw: "ecommerce mobile app development",
  },
  {
    icon: "📋",
    title: "On-Demand Service App",
    desc: "Booking, real-time tracking, service provider dashboard, and rating system — the full Uber-style flow. Built for home services, delivery, or freelance marketplace apps.",
    time: "12–16 weeks",
    from: "Fixed Price",
    kw: "on demand app development",
  },
  {
    icon: "📊",
    title: "SaaS / Dashboard App",
    desc: "Data visualisation, user roles, subscription billing, and API integration — a full SaaS mobile client paired with your existing web platform or backend.",
    time: "10–14 weeks",
    from: "Fixed Price",
    kw: "SaaS mobile app development startup",
  },
];

const deliverables = [
  {
    title: "iOS & Android — One Codebase",
    desc: "React Native or Flutter gives you a single codebase that runs natively on both platforms. You pay once, ship twice. No separate iOS and Android teams needed.",
  },
  {
    title: "Figma UI Design First",
    desc: "Every screen is designed in Figma and approved by you before development starts. You see exactly what your app will look like before a single line of code is written.",
  },
  {
    title: "Backend API + Database",
    desc: "Node.js REST API or Supabase backend with PostgreSQL. Authentication, user management, data storage — all set up, documented, and deployed on AWS or Vercel.",
  },
  {
    title: "Push Notifications",
    desc: "Firebase Cloud Messaging (FCM) integrated for iOS and Android push notifications — order updates, reminders, alerts, or marketing messages.",
  },
  {
    title: "App Store Submission",
    desc: "We handle the complete App Store and Google Play submission process — screenshots, descriptions, age ratings, review responses if rejected. Both stores included.",
  },
  {
    title: "60fps Performance Testing",
    desc: "Every screen is profiled for frame rate and memory usage on real devices before delivery. We fix any jank before you see the final build.",
  },
  {
    title: "Offline Support (where needed)",
    desc: "Apps that need to work without internet (field service, notes, inspections) are built with local SQLite storage and background sync when connectivity returns.",
  },
  {
    title: "30 Days Post-Launch Support",
    desc: "Bug fixes, crash reports, and minor changes for 30 days after App Store approval — included in every project at no extra cost.",
  },
];

const mobileTech = [
  {
    name: "React Native",
    role: "Cross-Platform Framework",
    why: "JavaScript-based, massive ecosystem, and the closest thing to native performance for apps that share logic with a React web app.",
  },
  {
    name: "Flutter",
    role: "Cross-Platform Framework",
    why: "Dart-based, pixel-perfect custom UI, best-in-class animations, and consistent performance across all major Android versions.",
  },
  {
    name: "Expo",
    role: "React Native Toolchain",
    why: "Managed workflow for faster setup, OTA (over-the-air) updates, and easy App Store builds — without touching Xcode or Android Studio for most projects.",
  },
  {
    name: "Supabase / Node.js",
    role: "Backend & API",
    why: "Supabase for rapid backend setup (PostgreSQL, auth, realtime, storage). Node.js for custom APIs, webhooks, and third-party integrations.",
  },
  {
    name: "Firebase",
    role: "Push Notifications & Analytics",
    why: "FCM for cross-platform push notifications, Firebase Analytics for user behaviour tracking, and Crashlytics for real-time crash reporting.",
  },
  {
    name: "Stripe",
    role: "Payment Integration",
    why: "We integrate Stripe and other major payment processors to support credit cards, digital wallets, and local payment methods worldwide.",
  },
];

const steps = [
  {
    n: "01",
    t: "Discovery Call",
    d: "Free 30-min call. We understand your app idea, target users, core features, and budget. We advise on Flutter vs React Native based on your specific needs.",
  },
  {
    n: "02",
    t: "Scope & Proposal",
    d: "Written feature list, tech stack, timeline, and fixed price — before any work starts. No ambiguous 'we'll figure it out' scopes.",
  },
  {
    n: "03",
    t: "UI/UX Design",
    d: "All screens designed in Figma — onboarding, core flows, edge cases. You approve every screen before development starts. Prevents expensive mid-build redesigns.",
  },
  {
    n: "04",
    t: "Development Sprints",
    d: "Two-week sprints. After each sprint you get a testable build on your device via TestFlight (iOS) or APK link (Android). Real app, real device, not a demo.",
  },
  {
    n: "05",
    t: "QA & Performance",
    d: "Tested on real iOS and Android devices across screen sizes. Performance profiled for 60fps. Crash-free rate target: 99.9% before submission.",
  },
  {
    n: "06",
    t: "Store Submission & Launch",
    d: "We submit to both App Store and Play Store, handle review feedback, and monitor for crashes in the 30 days post-approval. Launch support included.",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <main className="relative pt-24 bg-background text-foreground overflow-hidden">
      {/* Schema — Add as First Child of <main> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://bugcab.com/services/mobile-app-development",
                name: "Mobile App Development for Startups",
                alternateName: "React Native Flutter App Development",
                description:
                  "Cross-platform iOS and Android mobile app development with React Native and Flutter for startups and freelancers. MVP delivery in 6–8 weeks.",
                provider: { "@id": "https://bugcab.com/#organization" },
                serviceType: "Mobile App Development",
                url: "https://bugcab.com/services/mobile-app-development",
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Services",
                      item: "https://bugcab.com/services",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Mobile App Development",
                      item: "https://bugcab.com/services/mobile-app-development",
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "How much does it cost to build a mobile app?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We offer transparent, fixed pricing for custom mobile app projects, whether you need a focused MVP, a full-featured app with a backend/database, or a complex SaaS product. All prices are agreed upon before work begins.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does it take to build a mobile app?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A focused MVP takes 6 to 8 weeks. A full-featured app with complex backend takes 3 to 5 months. We work in two-week agile sprints so you see a live, testable build throughout development.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Flutter vs React Native — which does BugCab recommend?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Both are excellent. We recommend Flutter when pixel-perfect custom UI and animations are the priority. We recommend React Native when your team already works in JavaScript/TypeScript or when you need deep native module access. We help you decide based on your specific project during the discovery call.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will my app be published on both the App Store and Play Store?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Every BugCab mobile app is built cross-platform and submitted to both the Apple App Store and Google Play Store. We handle the submission process and resolve any rejection feedback from either store.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 py-4">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-lime transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/services" className="hover:text-lime transition-colors">
              Services
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground">Mobile App Development</li>
        </ol>
      </nav>

      {/* Section 1 — Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start items-center">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-lime font-bold">
              — Mobile App Development
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl font-bold leading-tight text-foreground tracking-tight">
              Mobile App Development for <span className="text-lime">Startups & Freelancers.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Cross-platform iOS and Android apps built with React Native and Flutter — one
              codebase, both stores, smooth 60fps performance. MVP in 6–8 weeks. Free quote within
              24 hours.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-lime px-8 py-4 font-bold text-black hover:bg-lime/90 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,0,0,0.15)] dark:shadow-[0_0_30px_rgba(255,0,0,0.25)]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-border bg-card/50 px-8 py-4 font-semibold hover:border-lime transition-all duration-300 hover:bg-card hover:scale-105"
              >
                See App Projects
              </Link>
            </div>
            <p className="mt-8 text-xs text-muted-foreground/80 flex flex-wrap gap-3 items-center">
              <span>No commitment required</span>
              <span className="text-lime/30">•</span>
              <span>Fixed price agreed upfront</span>
              <span className="text-lime/30">•</span>
              <span>Both iOS & Android included</span>
            </p>

            {/* Stat Pills */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/15 p-4 flex flex-col items-center text-center"
                >
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-lime">
                    {stat.v}
                  </span>
                  <span className="mt-1 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5 flex justify-center lg:items-start items-center lg:pt-8 py-10 overflow-visible relative">
          <div className="absolute inset-0 bg-lime/5 dark:bg-lime/10 blur-[100px] rounded-full pointer-events-none" />
          <Reveal
            delay={0.2}
            className="relative z-10 w-full max-w-[240px] scale-100 sm:scale-105 md:scale-110 lg:scale-115 transition-transform duration-500"
          >
            <MobileMockup />
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Flutter vs React Native (Comparison Block) */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/80">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.4em] text-lime font-bold">
              — Frame Comparison
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              {"Flutter or React Native — "}
              <span className="text-lime">Which Does Your App Need?</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Both are excellent cross-platform frameworks. The right choice depends on your app's
              UI complexity, your team's background, and your timeline. Here's how we decide — and
              how you can too.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card/10">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/80 bg-surface/30">
                  <th className="p-6 font-display font-bold text-foreground">Factor</th>
                  <th className="p-6 font-display font-bold text-foreground">Flutter</th>
                  <th className="p-6 font-display font-bold text-foreground">React Native</th>
                  <th className="p-6 font-display font-bold text-foreground text-center">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {comparison.map((item) => (
                  <tr key={item.factor} className="hover:bg-card/20 transition-colors">
                    <td className="p-6 font-semibold text-foreground">{item.factor}</td>
                    <td className="p-6 text-muted-foreground text-xs leading-relaxed">
                      {item.flutter}
                    </td>
                    <td className="p-6 text-muted-foreground text-xs leading-relaxed">
                      {item.reactNative}
                    </td>
                    <td className="p-6 text-center">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase ${
                          item.winner === "tie"
                            ? "bg-muted text-muted-foreground"
                            : item.winner === "flutter"
                              ? "bg-lime/10 text-lime border border-lime/20"
                              : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        }`}
                      >
                        {item.winner === "tie"
                          ? "Tie"
                          : item.winner === "flutter"
                            ? "Flutter"
                            : "React Native"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-2xl border border-lime/20 bg-lime/[0.02] p-6 shadow-sm">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-semibold text-foreground">Our recommendation:</span> Choose
              Flutter if your app needs a highly custom, branded UI or complex animations. Choose
              React Native if your team knows JavaScript, your app relies heavily on native device
              APIs, or you want to share code with a React web app. Not sure?{" "}
              <Link
                href="/contact"
                className="text-lime underline underline-offset-2 hover:text-lime/90 font-semibold"
              >
                Tell us about your app
              </Link>{" "}
              and we'll advise you for free.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Section 3 — What Type of App Are You Building? */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/80">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-lime font-bold">
              — Target Segments
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              What Type of App <span className="text-lime">Are You Building?</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We engineer mobile apps targeting specific business objectives and budgets.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {appTypes.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.05}>
              <div className="group relative rounded-3xl border border-border bg-card/20 p-8 hover:border-lime/50 transition-all duration-300 hover:bg-card/40 flex flex-col justify-between h-full hover:shadow-2xl">
                <div>
                  <div className="text-4xl mb-6 bg-surface border border-border/50 rounded-2xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                    {project.desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex justify-between items-center text-sm font-semibold text-foreground mb-3">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span>{project.time}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold text-foreground mb-5">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="text-lime text-base">{project.from}</span>
                  </div>
                  <div className="rounded-xl bg-surface/50 border border-border/30 px-3 py-2.5 text-[11px] font-mono text-muted-foreground">
                    <span className="text-lime/80 font-bold">SEO Keyword: </span>
                    {project.kw}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 4 — What's Included in Every App */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/80">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-lime font-bold">
              — Standard Features
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              What's Included in Every <span className="text-lime">App Development Project.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We ship complete mobile products with professional release management and solid code
              bases.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card/20 p-6 hover:border-lime/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime mb-5">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 5 — Tech Stack */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/80">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-lime font-bold">
              — Modern Tools
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Technologies We Use for <span className="text-lime">Mobile App Development.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              Every technology in our mobile stack was chosen for performance, cross-platform reach,
              and long-term maintainability. No vendor lock-in. No proprietary tools. Code you own
              and any developer can work with.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mobileTech.map((tech, idx) => (
            <Reveal key={tech.name} delay={idx * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card/20 p-6 hover:border-lime/40 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display text-lg font-bold text-foreground">{tech.name}</h3>
                  <span className="rounded-full bg-lime/10 px-3 py-1 text-[10px] font-semibold text-lime border border-lime/20">
                    {tech.role}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{tech.why}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 6 — Our Development Process */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/80">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-lime font-bold">
              — Steps to Launch
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              How We Build Your <span className="text-lime">Mobile App — 6 Steps.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Our structured approach ensures predictable delivery times and zero invoice surprises.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <Reveal key={step.n} delay={idx * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card/20 p-6 hover:border-lime/30 transition-all duration-300">
                <span className="font-display text-4xl font-black text-lime/10 block mb-4">
                  {step.n}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.t}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-lime transition-colors"
            >
              See our app portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Section 8 — FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/80">
        <Reveal>
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-xs uppercase tracking-[0.4em] text-lime font-bold">— FAQs</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              {"Frequently Asked Questions — "}
              <span className="text-lime">Mobile App Development.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Find answers to common questions about mobile app architecture, publishing, and
              support.
            </p>
          </div>
        </Reveal>

        <MobileAppFaq />
      </section>

      {/* Section 9 — Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/80">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-lime/[0.02] border border-lime/20 p-8 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-lime/5 to-transparent pointer-events-none" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Ready to Build Your <span className="text-lime">Mobile App?</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Share your app idea — even a rough concept is enough. We'll advise on Flutter vs React
              Native, scope the features, and send a fixed-price proposal within 24 hours. No
              commitment required.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="rounded-full bg-lime px-8 py-4 text-sm font-bold text-black hover:bg-lime/90 transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-border bg-card/40 px-8 py-4 text-sm font-semibold hover:border-lime transition-all duration-300 hover:scale-105"
              >
                See Our Work
              </Link>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5">
                <span className="text-lime font-bold">✓</span> Both iOS & Android — included in
                every project
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lime font-bold">✓</span> Fixed price — no hourly billing, no
                scope creep invoices
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-lime font-bold">✓</span> Free 30-min discovery call — we
                advise on stack and scope
              </span>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
