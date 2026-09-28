import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/portfolio";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | SOLVED" };
  }

  return {
    title: `${project.name} | SOLVED`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium text-zinc-500">
        {project.industry} · {project.year}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        {project.name}
      </h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
        {project.overview}
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold">The Challenge</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {project.challenge}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Our Approach</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {project.approach}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">The Solution</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {project.solution}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Key Features</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Technology</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {project.technologies.join(" | ")}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Results / Impact</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {project.results}
          </p>
        </div>

        {project.testimonial && (
          <div className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]">
            <p className="text-zinc-700 dark:text-zinc-300">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold">
              {project.testimonial.name}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {project.testimonial.position}
            </p>
          </div>
        )}
      </div>

      <Link
        href="/request-a-quote"
        className="mt-12 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Start Your Project
      </Link>
    </div>
  );
}