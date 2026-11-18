"use client";

import { useState } from "react";
import { quoteFormConfig, siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  message: "",
};

const fieldClass =
  "h-12 w-full border border-border bg-mist px-4 text-base text-charcoal outline-none transition-colors hover:border-forest/40 focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15";

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const raw = await response.text();
      let data: { error?: string; success?: boolean } = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        throw new Error(
          "Something went wrong submitting the form. Please call us directly."
        );
      }

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  };

  return (
    <section id="estimate" className="scroll-mt-32 bg-forest py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <aside className="lg:col-span-5">
            <Reveal>
              <p className="text-sm font-semibold text-lime">Free estimate</p>
              <h2 className="mt-3 font-display text-[1.9rem] font-extrabold tracking-tight text-white sm:text-[2.35rem] lg:text-[2.75rem]">
                Ready for a yard
                <span className="block text-lime">you’re proud of?</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                {quoteFormConfig.subheadline}
              </p>

              <ol className="mt-8 space-y-5">
                {[
                  {
                    step: "01",
                    title: "Tell us about your property",
                    body: "Share the service you need and a few details about your yard.",
                  },
                  {
                    step: "02",
                    title: "Receive your estimate",
                    body: "We’ll review your request and follow up with next steps.",
                  },
                  {
                    step: "03",
                    title: "Schedule your service",
                    body: "Choose a convenient time to move forward.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="font-display text-sm font-extrabold text-lime">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-8 text-sm text-white/75">
                Prefer to talk now?{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-bold text-white underline-offset-4 hover:underline"
                >
                  Call {siteConfig.phone}
                </a>
              </p>
            </Reveal>
          </aside>

          <Reveal className="lg:col-span-7" delayMs={80}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white p-5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-charcoal"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-semibold text-charcoal"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-charcoal"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="mb-1.5 block text-sm font-semibold text-charcoal"
                >
                  Service address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  value={form.address}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-semibold text-charcoal"
                >
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {quoteFormConfig.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-charcoal"
                >
                  Anything else we should know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-border bg-mist px-4 py-3 text-base text-charcoal outline-none transition-colors hover:border-forest/40 focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/15"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="h-12 w-full bg-lime px-6 text-base font-bold text-charcoal transition-colors hover:bg-lime-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Request free estimate"}
              </button>

              {status === "success" && (
                <p
                  className="border border-forest/20 bg-mist px-4 py-3 text-sm font-medium text-forest"
                  role="status"
                >
                  Thank you. We’ll follow up — usually within one business day.
                </p>
              )}

              {status === "error" && (
                <p
                  className="border border-red-200 bg-mist px-4 py-3 text-sm font-medium text-red-800"
                  role="alert"
                >
                  {errorMessage}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
