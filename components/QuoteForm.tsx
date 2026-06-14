"use client";

import { useState } from "react";
import { quoteFormConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui";

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

      if (!response.ok) {
        const data = await response.json();
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
    <Section id="estimate" className="bg-white">
      <ScrollReveal>
        <SectionHeading
          headline={quoteFormConfig.headline}
          subheadline={quoteFormConfig.subheadline}
          centered
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-heading">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-border px-4 py-3 text-secondary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-heading">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-border px-4 py-3 text-secondary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-heading">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-border px-4 py-3 text-secondary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-heading">
              Service Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              value={form.address}
              onChange={handleChange}
              className="w-full rounded-lg border border-border px-4 py-3 text-secondary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-heading">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-secondary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
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
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-heading">
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-border px-4 py-3 text-secondary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send My Request"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm font-medium text-primary">
              Thank you! We will get back to you within 24 hours.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-sm font-medium text-red-600">
              {errorMessage}
            </p>
          )}
        </form>
      </ScrollReveal>
    </Section>
  );
}
