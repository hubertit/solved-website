import { projects } from "@/content/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="border-t border-black/[.08] bg-zinc-50 py-24 dark:border-white/[.1] dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            A look at how we&apos;ve helped organizations solve real problems.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}