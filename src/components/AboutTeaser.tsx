import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Technology with purpose
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        SOLVED combines technology, creativity and business understanding to
        build digital solutions that solve real-world problems.
      </h2>
      <Link
        href="/about"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-black/[.15] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.2] dark:hover:bg-white/[.06]"
      >
        Learn More About Us
      </Link>
    </section>
  );
}