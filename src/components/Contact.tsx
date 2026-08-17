"use client";

import { useState, useRef } from "react";
import { Reveal } from "./Reveal";
import { Github, Twitter, Linkedin, Instagram, Paperclip, Check } from "lucide-react";
import { sendContactMessage } from "@/app/actions";
import { toast } from "sonner";

const serviceOptions = [
  "Website",
  "Web App",
  "Mobile App",
  "UI/UX Design",
  "Branding",
  "Ecommerce",
  "SaaS",
  "AI Product",
  "I just have a problem",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Website"]);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-32 bg-background">
      {/* Background Glow */}
      <div className="absolute -bottom-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-red-500/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold">
              — Get In Touch
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[0.98] sm:text-7xl lg:text-8xl text-foreground uppercase tracking-tight">
              Start Your <span className="text-red-500">Project</span> with BugCab.
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-xs sm:text-base text-muted-foreground leading-relaxed font-medium">
              Whether you need a custom business website, a cross-platform mobile app, a UI/UX design
              refresh, digital marketing, or IT consulting — fill in the form and we'll send you a
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
            { icon: "⭐", text: "2+ projects delivered" },
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
                      href="mailto:bugcab.com@gmail.com"
                      className="hover:text-red-400 transition-colors font-medium text-foreground"
                    >
                      bugcab.com@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-red-500 font-semibold mb-1">
                      Phone / Mobile
                    </span>
                    <div className="flex flex-col gap-1 text-foreground font-medium">
                      <a href="tel:+916374369237" className="hover:text-red-400 transition-colors">
                        +91 63743 69237
                      </a>
                      <a href="tel:+919080410549" className="hover:text-red-400 transition-colors">
                        +91 90804 10549
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-widest text-red-500 font-semibold mb-1">
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/916374369237?text=Hi%20BugCab%2C%20I%27d%20like%20to%20discuss%20a%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-red-400 transition-colors text-foreground font-medium"
                    >
                      +91 6374369237
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

            {/* Right column — Form matching reference screenshot 2 */}
            <form
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault();
                setIsPending(true);

                try {
                  const formData = new FormData(e.currentTarget);
                  formData.set("service", selectedServices.join(", ") || "General Inquiry");
                  const result = await sendContactMessage(null, formData);

                  if (result.success) {
                    toast.success(result.message);
                    setSent(true);
                    formRef.current?.reset();
                    setSelectedServices(["Website"]);
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
              className="flex flex-col gap-6 rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-card p-6 sm:p-10 lg:col-span-2 shadow-2xl"
            >
              <input type="hidden" name="service" value={selectedServices.join(", ")} />

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" placeholder="Jane Doe" required />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+91 98765 43210" required />
                <Field label="Company (optional)" name="company" type="text" placeholder="Company name" required={false} />
              </div>

              {/* Row 3: What do you need? (Interactive Multi-Select Chips) */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold text-foreground">
                  What do you need?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {serviceOptions.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-md shadow-red-500/20 scale-[1.02]"
                            : "bg-neutral-100/80 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800 text-foreground hover:border-[#FF2A2A]/50 hover:bg-neutral-200/50 dark:hover:bg-neutral-800"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Tell us about your project — or just the problem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="What are you building? No solution yet? Just describe the problem — we'll research it and bring you one."
                  required
                  className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:border-[#FF2A2A] focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Row 5: Attach File & Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <label className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  <Paperclip className="w-4 h-4 text-[#FF2A2A]" />
                  <span>Attach a brief (optional)</span>
                  <input type="file" name="attachment" className="hidden" />
                </label>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#FF2A2A] hover:bg-[#d92323] px-8 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-red-500/25 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isPending
                    ? "Sending..."
                    : sent
                      ? "Message Sent ✓"
                      : "Send message ↗"}
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
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={
          name === "email" ? "email" : name === "phone" ? "tel" : name === "name" ? "name" : "off"
        }
        className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-background px-4 py-3.5 text-sm
                   text-foreground placeholder:text-neutral-400 dark:placeholder:text-neutral-600
                   focus:border-[#FF2A2A] focus:outline-none transition-colors"
      />
    </div>
  );
}
