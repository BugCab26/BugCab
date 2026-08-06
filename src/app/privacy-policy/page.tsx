import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — BugCab IT Solutions",
  description:
    "Read BugCab's Privacy Policy to understand how we collect, use, and protect your information when you work with us.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-32 text-foreground">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 mb-8 text-sm font-medium text-muted-foreground hover:text-lime transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: June 4, 2026</p>

      <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p className="mt-3">
            We collect information you provide directly to us when requesting a quote, contacting
            us, or engaging in a project. This includes your name, email address, phone number,
            company details, and project requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p className="mt-3">We use the collected information to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Provide, maintain, and deliver our design, development, and marketing services.</li>
            <li>Respond to your comments, questions, and support requests.</li>
            <li>
              Send you technical notices, updates, security alerts, and administrative messages.
            </li>
            <li>Analyze trends and usage to improve our services and digital products.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">
            3. Information Sharing and Disclosure
          </h2>
          <p className="mt-3">
            We do not sell, trade, or rent your personal information to third parties. We may share
            information with trusted third-party service providers who assist us in operating our
            website, conducting our business, or serving our clients, under strict confidentiality
            agreements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">4. Data Security</h2>
          <p className="mt-3">
            We implement standard technical and organizational security measures to protect the
            security of your personal information both online and offline. However, please note that
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">5. Your Choices</h2>
          <p className="mt-3">
            You may request to access, update, correct, or delete your personal information by
            emailing us at hello@bugcab.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">6. Contact Us</h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2 font-semibold text-foreground">
            BugCab IT Solutions
            <br />
            Email: hello@bugcab.com
          </p>
        </section>
      </div>
    </main>
  );
}
