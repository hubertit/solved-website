import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/content/services";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found | SOLVED" };
  }

  return {
    title: `${service.title} | SOLVED`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium text-zinc-500">Service</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        {service.title}
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        {service.shortDescription}
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold">The Problem</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {service.problem}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">What We Deliver</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {service.delivers}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Typical Use Cases</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            {service.useCases.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="/request-a-quote"
        className="mt-12 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Start a Project
      </Link>
    </div>
  );
}