import Link from "next/link";
import type { Project } from "@/content/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-black/[.2] dark:border-white/[.1] dark:hover:border-white/[.25]"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {project.industry}
      </p>
      <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
        {project.technologies.join(" | ")}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-zinc-500 group-hover:text-black dark:group-hover:text-white">
        View Case Study →
      </span>
    </Link>
  );
}