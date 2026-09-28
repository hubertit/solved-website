import Link from "next/link";
import { services } from "@/content/services";

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Our Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          We help businesses solve real problems through software, data and
          modern technology.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group rounded-2xl border border-black/[.08] p-6 transition-colors hover:border-black/[.2] dark:border-white/[.1] dark:hover:border-white/[.25]"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {service.shortDescription}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-zinc-500 group-hover:text-black dark:group-hover:text-white">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}