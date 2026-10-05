import Link from "next/link";
import { industries } from "@/content/industries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | SOLVED",
  description:
    "SOLVED builds technology solutions for financial services, government, healthcare, education, NGOs, logistics and startups.",
};

export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Industries We Serve</h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          We build solutions tailored to the specific needs of different sectors.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-[var(--brand-blue)]/40 dark:border-white/[.1]"
          >
            <h2 className="font-semibold">{industry.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {industry.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-zinc-500 group-hover:text-[var(--brand-blue)]">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}