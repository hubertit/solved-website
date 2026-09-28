import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SOLVED",
  description:
    "Read the terms and conditions governing the use of SOLVED's website.",
};
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">
        Terms & Conditions
      </h1>
      <p className="mt-4 text-sm text-zinc-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-10 space-y-8 text-zinc-600 dark:text-zinc-400">
        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing and using this website, you accept and agree to be
            bound by these Terms & Conditions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Use of the Website
          </h2>
          <p className="mt-2">
            This website is provided for informational purposes about
            SOLVED&apos;s services. You agree not to misuse the website or
            its content.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Intellectual Property
          </h2>
          <p className="mt-2">
            All content on this website, including text, graphics and logos,
            is the property of SOLVED unless otherwise stated.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-black dark:text-white">
            Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about these Terms & Conditions, please
            contact us at hello@solved.rw.
          </p>
        </div>
      </div>
    </div>
  );
}