import Link from "next/link";
import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/about.jpg"
            alt="SOLVED team reviewing a project together"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--brand-blue)]">
            Technology with purpose
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            SOLVED combines technology, creativity and business understanding
            to build digital solutions that solve real-world problems.
          </h2>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-black/[.15] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.2] dark:hover:bg-white/[.06]"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}