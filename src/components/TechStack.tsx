import { techStack } from "@/content/techStack";

export default function TechStack() {
  const allTech = techStack.flatMap((group) => group.items);
  const loopedTech = [...allTech, ...allTech];

  return (
    <section className="overflow-hidden border-t border-black/[.08] py-24 dark:border-white/[.1]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Technologies We Work With
        </h2>
      </div>

      <div className="relative mt-12 flex overflow-hidden">
        <div className="flex shrink-0 animate-scroll gap-4">
          {loopedTech.map((tech, index) => (
            <span
              key={index}
              className="whitespace-nowrap rounded-full border border-black/[.08] px-6 py-3 text-sm font-medium dark:border-white/[.1]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}