import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SOLVED",
  description:
    "Learn how SOLVED collects, uses and protects your information when you use our website.",
};
export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-zinc-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-10 space-y-8 text-zinc-600 dark:text-zinc-400">
        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Introduction
          </h2>
          <p className="mt-2">
            This Privacy Policy explains how SOLVED collects, uses and
            protects information when you use our website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Information We Collect
          </h2>
          <p className="mt-2">
            We may collect information you provide directly, such as your
            name, email address, phone number and project details when you
            submit a contact form or request a quote.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            How We Use Your Information
          </h2>
          <p className="mt-2">
            We use the information you provide to respond to inquiries,
            provide requested services, and improve our website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about this Privacy Policy, please contact
            us at hello@solved.rw.
          </p>
        </div>
      </div>
    </div>
  );
}