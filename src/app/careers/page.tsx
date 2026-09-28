import Link from "next/link";
import { jobs } from "@/content/careers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | SOLVED",
  description:
    "Join the SOLVED team. Explore open positions in software engineering, design and more.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Careers</h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Join our team of engineers, designers and consultants solving real
          business problems through technology.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {jobs.map((job) => (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            className="group rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-black/[.2] dark:border-white/[.1] dark:hover:border-white/[.25]"
          >
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="mt-2 text-sm text-zinc-500">
              {job.location} · {job.type}
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {job.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-zinc-500 group-hover:text-black dark:group-hover:text-white">
              View Position →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}