import Link from "next/link";
import Image from "next/image";
import { jobs } from "@/content/careers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | SOLVED",
  description:
    "Join the SOLVED team. Explore open positions in software engineering, design and more.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <div className="relative flex min-h-[60vh] items-center overflow-hidden rounded-3xl">
        <Image
          src="/images/careers.jpg"
          alt="SOLVED team collaborating in the office"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--brand-navy)]/70" />

        <div className="relative w-full px-6 py-16 text-center sm:px-12">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Careers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200">
            Join our team of engineers, designers and consultants solving
            real business problems through technology.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 pb-24 sm:grid-cols-2">
        {jobs.map((job) => (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            className="group rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-[var(--brand-blue)]/40 dark:border-white/[.1]"
          >
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="mt-2 text-sm text-zinc-500">
              {job.location} · {job.type}
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {job.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-zinc-500 group-hover:text-[var(--brand-blue)]">
              View Position →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}