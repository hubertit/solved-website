import { processSteps } from "@/content/process";

export default function Process() {
  return (
    <section className="border-t border-black/[.08] bg-zinc-50 py-24 dark:border-white/[.1] dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Process
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-7">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center">
              <p className="text-2xl font-semibold text-zinc-300 dark:text-zinc-700">
                {step.number}
              </p>
              <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}