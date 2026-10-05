import { whySolvedPillars } from "@/content/whySolved";

export default function WhySolved() {
  return (
    <section className="border-t border-black/[.08] bg-zinc-50 py-24 dark:border-white/[.1] dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why SOLVED?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whySolvedPillars.map((pillar, index) => (
            <div key={pillar.title}>
              <p className="text-sm font-semibold text-[var(--brand-blue)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}