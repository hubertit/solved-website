const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Clients" },
  { value: "7+", label: "Industries Served" },
];

export default function Stats() {
  return (
    <section className="border-y border-black/[.08] bg-zinc-50 dark:border-white/[.1] dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-semibold sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}