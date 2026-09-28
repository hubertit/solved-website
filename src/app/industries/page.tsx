import { industries } from "@/content/industries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SOLVED",
  description:
    "Learn about SOLVED's mission, vision and approach to building technology that solves real business problems.",
};
export default function IndustriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Industries We Serve
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          We build solutions tailored to the specific needs of different
          sectors.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <div
            key={industry.slug}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]"
          >
            <h2 className="font-semibold">{industry.title}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}