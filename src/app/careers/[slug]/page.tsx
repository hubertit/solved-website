import { notFound } from "next/navigation";
import { jobs } from "@/content/careers";
import ApplicationForm from "@/components/ApplicationForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return { title: "Position Not Found | SOLVED" };
  }

  return {
    title: `${job.title} | Careers | SOLVED`,
    description: job.description,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium text-zinc-500">
        {job.location} · {job.type}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        {job.title}
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        {job.description}
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold">Responsibilities</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Requirements</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-lg font-semibold">Apply for this Position</h2>
        <div className="mt-6">
          <ApplicationForm jobTitle={job.title} />
        </div>
      </div>
    </div>
  );
}