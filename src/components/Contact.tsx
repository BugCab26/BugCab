"use client";

import { useState, useRef } from "react";
import { Reveal } from "./Reveal";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { sendContactMessage } from "@/app/actions";
import { toast } from "sonner";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <section id="contact" className="relative overflow-hidden py-32 bg-background">
      {/* Background Glow */}
      <div className="absolute -bottom-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-red-500/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold">
              — Get In Touch
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl text-foreground">
              Start Your <span className="text-red-500">Project</span> with BugCab.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Whether you need a startup website, a cross-platform mobile app, a UI/UX design
              refresh, or a full digital marketing strategy — fill in the form and we'll send you a
              free, no-obligation quote within 24 hours.
            </p>
          </div>
        </Reveal>

        {/* Trust signals */}
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground select-none">
          {[
            { icon: "⚡", text: "Response within 24 hours" },
            { icon: "🎯", text: "Free quote, no commitment" },
            { icon: "🌍", text: "Available worldwide" },
            { icon: "⭐", text: "50+ projects delivered" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Left column — contact info */}
            <div className="flex flex-col gap-8 lg:col-span-1">
              {/* Direct contact */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">Contact Details</h2>
                <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-red-500 font-semibold mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:hello@bugcab.com"
                      className="hover:text-red-400 transition-colors"
                    >
                      hello@bugcab.com
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-red-500 font-semibold mb-1">
                      WhatsApp
                    </span>
                    <a
                      href={
                        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                          ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi%20BugCab%2C%20I%27d%20like%20to%20discuss%20a%20project`
                          : "#"
                      }
                      target={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? "_blank" : undefined}
                      rel={
                        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? "noopener noreferrer" : undefined
                      }
                      className="hover:text-red-400 transition-colors"
                    >
                      Contact via WhatsApp
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-red-500 font-semibold mb-1">
                      Location
                    </span>
                    <address className="not-italic space-y-1 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">BugCab IT Solutions</p>
                      <p>Erode, Tamil Nadu — 638001, India</p>
                      <p className="text-xs text-neutral-500">Available for projects worldwide</p>
                    </address>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-red-500 font-semibold mb-1">
                      Response Time
                    </span>
                    Within 24 hours · Monday–Saturday
                  </li>
                </ul>
              </div>

              {/* What happens next */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">
                  What Happens Next?
                </h2>
                <ol className="mt-4 space-y-3">
                  {[
                    "We review your message within 24 hours",
                    "We schedule a free 30-min discovery call",
                    "You receive a fixed-cost proposal",
                    "We start building — on your timeline",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center
                                       rounded-full bg-red-500/20 text-[10px] font-bold text-red-500"
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right column — form */}
            <form
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault();
                setIsPending(true);

                try {
                  const formData = new FormData(e.currentTarget);
                  const result = await sendContactMessage(null, formData);

                  if (result.success) {
                    toast.success(result.message);
                    setSent(true);
                    formRef.current?.reset();
                    setTimeout(() => setSent(false), 5000);
                  } else {
                    toast.error(result.error || "Failed to send message.");
                  }
                } catch (error: any) {
                  toast.error(error.message || "An unexpected error occurred.");
                } finally {
                  setIsPending(false);
                }
              }}
              className="grid gap-4 rounded-3xl border border-border bg-card
                         p-6 sm:p-10 sm:grid-cols-2 lg:col-span-2"
            >
              <Field label="Name" name="name" placeholder="Jane Cooper" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="rounded-lg border border-border bg-background px-4 py-3
                             text-sm text-foreground focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app-development">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing & SEO</option>
                  <option value="not-sure">Not sure yet — help me decide</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col items-start justify-between gap-6 sm:col-span-2 sm:flex-row sm:items-center pt-2">
                <div className="flex gap-3">
                  {[
                    {
                      Icon: Twitter,
                      href: "https://twitter.com/bugcab",
                      label: "BugCab on Twitter / X",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://linkedin.com/company/bugcab",
                      label: "BugCab on LinkedIn",
                    },
                    {
                      Icon: Github,
                      href: "https://github.com/bugcab",
                      label: "BugCab on GitHub",
                    },
                    {
                      Icon: Instagram,
                      href: "https://instagram.com/bugcab",
                      label: "BugCab on Instagram",
                    },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full
                                 border border-border transition-colors
                                 hover:border-red-500 hover:bg-red-500 hover:text-white text-foreground"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-bold text-white transition-all hover:bg-red-500 active:scale-95 cursor-pointer shadow-lg shadow-red-600/10 hover:shadow-red-500/20 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isPending
                    ? "Sending..."
                    : sent
                      ? "Message Sent ✓"
                      : "Let's Build Something Great →"}
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        autoComplete={
          name === "email" ? "email" : name === "phone" ? "tel" : name === "name" ? "name" : "off"
        }
        className="rounded-lg border border-border bg-background px-4 py-3 text-sm
                   text-foreground placeholder:text-muted-foreground/60
                   focus:border-red-500 focus:outline-none transition-colors"
      />
    </div>
  );
}
