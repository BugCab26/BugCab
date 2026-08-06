import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy — BugCab IT Solutions",
  description:
    "Review the Refund Policy of BugCab IT Solutions. Learn about cancellation and refund terms for our design, development, and SEO services.",
  alternates: {
    canonical: "/refund",
  },
};

export default function RefundPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-32 text-foreground">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 mb-8 text-sm font-medium text-muted-foreground hover:text-lime transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Refund Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: June 4, 2026</p>

      <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground">
            1. Project Scoping and Milestone Payments
          </h2>
          <p className="mt-3">
            At BugCab, we break our IT projects into clear milestones with transparent deliverables.
            Payments are tied to milestone approval, which ensures you only pay for completed and
            approved phases of design, development, or marketing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">2. Refund Eligibility</h2>
          <p className="mt-3">
            Refund requests are handled on a case-by-case basis depending on the current phase of
            the project:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Discovery & Setup Deposit</strong>: Deposits are eligible for a 100% refund if
              cancelled before we initiate research, scoping, or design work.
            </li>
            <li>
              <strong>In-Progress Milestones</strong>: Once work begins on a specific milestone
              (e.g. UX wireframing, sprint development), payments for that milestone are
              non-refundable as they cover dedicated engineering and design hours.
            </li>
            <li>
              <strong>Completed and Approved Milestones</strong>: Approved deliverables and
              completed stages are non-refundable under any circumstances.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">3. Service Cancellation</h2>
          <p className="mt-3">
            You may cancel your project engagement at any time by providing written notice. Upon
            cancellation, you will receive all completed design mockups, source code repository
            commits, and assets up to the last paid milestone. No further payments will be due
            except for outstanding hours worked.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">4. Monthly Maintenance Retainers</h2>
          <p className="mt-3">
            Monthly support and maintenance retainers can be cancelled at any time with a 15-day
            notice. Payments made for the current billing cycle are non-refundable, but no future
            payments will be collected.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">5. Contact Us</h2>
          <p className="mt-3">
            To request a review or submit a cancelation notice, please write to us at:
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
