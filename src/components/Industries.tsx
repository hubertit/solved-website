import { industries } from "@/content/industries";

export default function Industries() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Industries We Serve
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          We build solutions tailored to the specific needs of different
          sectors.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <div
            key={industry.slug}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]"
          >
            <h3 className="font-semibold">{industry.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}