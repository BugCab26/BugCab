import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — BugCab IT Solutions",
  description:
    "Read the Terms of Service for BugCab IT Solutions. Learn about intellectual property, client responsibilities, and project delivery terms.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-32 text-foreground">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 mb-8 text-sm font-medium text-muted-foreground hover:text-lime transition-colors"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>

      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: June 4, 2026</p>

      <div className="mt-12 space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p className="mt-3">
            By engaging BugCab IT Solutions for web development, mobile apps, UI/UX design, or
            digital marketing services, you agree to comply with and be bound by these Terms of
            Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">2. Client Responsibilities</h2>
          <p className="mt-3">To deliver your project on time and within scope, you agree to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Provide timely feedback and approvals during design mockups and agile development
              sprints.
            </li>
            <li>
              Provide necessary assets, API keys, content copywriting, and third-party hosting
              credentials.
            </li>
            <li>Make milestone payments according to the agreed project proposal timeline.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">3. Intellectual Property Rights</h2>
          <p className="mt-3">
            Unless otherwise agreed in your project contract, once full payment is received for a
            milestone or the complete project:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              The custom design files, UI layouts, source code, and configurations belong entirely
              to you (the Client).
            </li>
            <li>
              BugCab retains ownership of standard open-source helper code, frameworks, pre-built
              template libraries, and generic design elements used to deliver the services.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">4. Project Delivery and Timelines</h2>
          <p className="mt-3">
            We work in agile development sprints to ensure transparency and delivery. While we make
            every effort to meet project deadlines, schedules are estimates and depend on timely
            client feedback and clear technical scopes. BugCab is not liable for delays caused by
            third-party services, API changes, or host server downtime.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">5. Limitation of Liability</h2>
          <p className="mt-3">
            In no event shall BugCab, its founder, or developers be liable for any indirect,
            incidental, special, consequential, or punitive damages, including loss of profits,
            data, or business opportunities, arising out of or in connection with our services or
            code deliverables.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground">6. Contact Us</h2>
          <p className="mt-3">
            For questions or legal notices regarding these Terms, please contact us at:
          </p>
          <p className="mt-2 font-semibold text-foreground">
            BugCab IT Solutions
            <br />
            Email: bugcab.com@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
