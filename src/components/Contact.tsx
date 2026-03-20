"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <section id="contact" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Your Quote Within 24 Hours
            </h2>
            <p className="text-slate-600 text-lg">
              Full support guaranteed. Our manager will contact you as soon as possible.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            aria-label="Contact form"
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus("sending");
              setErrorMessage("");

              try {
                const formData = new FormData(e.currentTarget);
                const res = await fetch("/api/contact", { method: "POST", body: formData });

                if (!res.ok) {
                  const data = await res.json().catch(() => null);
                  setStatus("error");
                  const errorText =
                    typeof data?.error === "string" && data.error.trim().length > 0
                      ? data.error
                      : "Something went wrong. Please try again.";
                  setErrorMessage(errorText);
                  return;
                }

                setStatus("success");
                (e.currentTarget as HTMLFormElement).reset();
              } catch (err) {
                setStatus("error");
                setErrorMessage(
                  err instanceof Error && err.message
                    ? err.message
                    : "Network error. Please try again."
                );
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
            </div>
            <p className="text-xs text-slate-500">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>

            {status === "success" && (
              <p className="text-sm font-medium text-emerald-700">
                Request sent successfully. We will contact you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-700">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg shadow-primary-500/25"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Request"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
