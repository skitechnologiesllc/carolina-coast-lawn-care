"use client";

import { useState } from "react";
import { quoteFormConfig, siteConfig } from "@/config/site";
import { Section } from "@/components/ui";

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
  "h-12 w-full border border-stone/90 bg-ivory px-4 text-base text-charcoal outline-none transition-colors hover:border-forest/50 focus:border-forest focus:ring-2 focus:ring-forest/15";

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
    <Section id="estimate" className="bg-ivory">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            Free estimate
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
            {quoteFormConfig.headline}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-body">
            {quoteFormConfig.subheadline}
          </p>

          <ol className="mt-7 space-y-5">
            <li>
              <p className="font-display text-sm font-semibold tracking-[0.14em] text-forest">01</p>
              <p className="mt-1 font-display text-lg font-semibold text-charcoal">
                Tell us about your property
              </p>
              <p className="mt-1 text-sm leading-relaxed text-body">
                Share the service you need and a few details about your property.
              </p>
            </li>
            <li>
              <p className="font-display text-sm font-semibold tracking-[0.14em] text-forest">02</p>
              <p className="mt-1 font-display text-lg font-semibold text-charcoal">
                Receive your estimate
              </p>
              <p className="mt-1 text-sm leading-relaxed text-body">
                We&apos;ll review your request and follow up with the next steps.
              </p>
            </li>
            <li>
              <p className="font-display text-sm font-semibold tracking-[0.14em] text-forest">03</p>
              <p className="mt-1 font-display text-lg font-semibold text-charcoal">
                Schedule your service
              </p>
              <p className="mt-1 text-sm leading-relaxed text-body">
                Choose a convenient time to move forward.
              </p>
            </li>
          </ol>

          <ul className="mt-7 space-y-3 border-y border-stone/80 py-5 text-sm text-charcoal">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="font-semibold underline-offset-2 hover:text-forest hover:underline"
              >
                Call {siteConfig.phone}
              </a>
              <span aria-hidden="true"> · </span>
              <a
                href={siteConfig.smsHref}
                className="font-semibold underline-offset-2 hover:text-forest hover:underline"
              >
                Text us
              </a>
            </li>
            <li>Licensed &amp; insured</li>
            <li>Serving Longs &amp; Horry County</li>
          </ul>

          <p className="mt-5 text-sm leading-relaxed text-muted">No obligation to book.</p>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 border border-stone/80 bg-ivory-deep p-5 sm:p-8 lg:col-span-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
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
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
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
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
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
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-charcoal">
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
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal">
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
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
              Anything else we should know?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full border border-stone/90 bg-ivory px-4 py-3 text-base text-charcoal outline-none transition-colors hover:border-forest/50 focus:border-forest focus:ring-2 focus:ring-forest/15"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 w-full bg-forest px-6 text-base font-semibold text-ivory transition-colors hover:bg-forest-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Request free estimate"}
          </button>

          {status === "success" && (
            <p className="border border-forest/30 bg-ivory px-4 py-3 text-sm font-medium text-forest" role="status">
              Thank you. We’ll follow up — usually within one business day.
            </p>
          )}

          {status === "error" && (
            <p className="border border-red-300 bg-ivory px-4 py-3 text-sm font-medium text-red-800" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
