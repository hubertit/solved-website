import { projects } from "@/content/portfolio";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SOLVED",
  description:
    "Learn about SOLVED's mission, vision and approach to building technology that solves real business problems.",
};
export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Our Portfolio
        </h1>
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
  );
}