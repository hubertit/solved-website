import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-black/[.08] transition-colors hover:border-[var(--brand-blue)]/40 dark:border-white/[.1]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-blue)]">
          {project.industry}
        </p>
        <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
          {project.technologies.join(" | ")}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-zinc-500 group-hover:text-[var(--brand-blue)]">
          View Case Study →
        </span>
      </div>
    </Link>
  );
}