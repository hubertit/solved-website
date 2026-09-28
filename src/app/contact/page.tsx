import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SOLVED",
  description:
    "Get in touch with SOLVED to discuss your project, ask a question, or learn more about our technology services.",
};
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Have a project in mind? Get in touch and let&apos;s talk about how
          we can help.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Phone
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              +250 000 000 000
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Email
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              hello@solved.rw
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Address
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Kigali, Rwanda
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Working Hours
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Monday – Friday, 8:00 AM – 5:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}