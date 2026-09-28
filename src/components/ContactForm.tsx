"use client";

import { useState, FormEvent } from "react";
import { services } from "@/content/services";
import { trackEvent } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
    preferredContact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

 function handleSubmit(e: FormEvent) {
  e.preventDefault();
  trackEvent("contact_form_submit", { service: formData.service });
  console.log("Form submitted:", formData);
  setSubmitted(true);
}

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/[.08] p-8 text-center dark:border-white/[.1]">
        <h3 className="text-lg font-semibold">Thank you!</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          We&apos;ve received your inquiry and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium">
          Full Name *
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          required
          value={formData.fullName}
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
        <label htmlFor="service" className="block text-sm font-medium">
          Service *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium">
          Budget Range
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
        <label htmlFor="preferredContact" className="block text-sm font-medium">
          Preferred Contact Method
        </label>
        <input
          id="preferredContact"
          type="text"
          name="preferredContact"
          value={formData.preferredContact}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-black/[.15] px-4 py-2 dark:border-white/[.2] dark:bg-black"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Send Inquiry
      </button>
    </form>
  );
}