import QuoteForm from "@/components/QuoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | SOLVED",
  description:
    "Tell us about your project and get a tailored quote from SOLVED for software development, mobile apps, cloud solutions and more.",
};

export default function RequestQuotePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Request a Quote
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
          Tell us about your project and we&apos;ll get back to you with a
          tailored proposal.
        </p>
      </div>

      <div className="mt-12">
        <QuoteForm />
      </div>
    </div>
  );
}