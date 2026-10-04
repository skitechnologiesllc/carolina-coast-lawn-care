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
  "w-full border border-border bg-ivory px-4 py-3 text-charcoal outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-forest/15";

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
    <Section id="estimate" className="bg-charcoal">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:items-start lg:gap-14">
        <aside className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/55">
            Free estimate
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ivory sm:text-3xl lg:text-4xl">
            {quoteFormConfig.headline}
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-ivory/75">
            {quoteFormConfig.subheadline}
          </p>

          <ul className="mt-7 space-y-3.5 border-y border-ivory/15 py-6 text-sm text-ivory/85">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-ivory underline-offset-2 hover:underline"
              >
                Call {siteConfig.phone}
              </a>
              {" · "}
              <a
                href={siteConfig.smsHref}
                className="font-semibold text-ivory underline-offset-2 hover:underline"
              >
                Text us
              </a>
            </li>
            <li>Licensed &amp; insured</li>
            <li>Serving Longs &amp; Horry County</li>
            <li>We typically respond within 24 hours</li>
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-ivory/65">
            No obligation to book.
          </p>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 border border-ivory/15 bg-ivory p-5 sm:p-7"
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
              rows={3}
              value={form.message}
              onChange={handleChange}
              className={`${fieldClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-forest px-6 py-4 text-base font-semibold text-ivory transition-colors hover:bg-forest-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Request free estimate"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm font-medium text-forest">
              Thank you — we’ll get back to you within 24 hours.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-sm font-medium text-red-700">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
