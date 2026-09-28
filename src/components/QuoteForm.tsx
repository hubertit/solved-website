"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    description: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

 function handleSubmit(e: FormEvent) {
  e.preventDefault();
  trackEvent("quote_request_submit", { need: formData.need });
  console.log("Quote request submitted:", formData);
  setSubmitted(true);
}

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/[.08] p-8 text-center dark:border-white/[.1]">
        <h3 className="text-lg font-semibold">Request Received!</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Thanks for reaching out — our team will review your request and get
          back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium">
          Company
        </label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="need" className="block text-sm font-medium">
          What do you need? *
        </label>
        <select
          id="need"
          name="need"
          required
          value={formData.need}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        >
          <option value="">Select an option</option>
          <option value="software-development">Software Development</option>
          <option value="mobile-app">Mobile App</option>
          <option value="website">Website</option>
          <option value="enterprise-system">Enterprise System</option>
          <option value="automation">Automation</option>
          <option value="cloud">Cloud</option>
          <option value="data-analytics">Data & Analytics</option>
          <option value="consultancy">Consultancy</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Project Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium">
          Estimated Budget
        </label>
        <input
          id="budget"
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium">
          Expected Timeline
        </label>
        <input
          id="timeline"
          type="text"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Submit Request
      </button>
    </form>
  );
}