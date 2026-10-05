import Link from "next/link";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative mx-auto my-24 max-w-6xl overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-12">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--brand-navy)]/80" />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to turn your challenge into a working solution?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-200">
          Tell us what you&apos;re building and we&apos;ll help you get
          there.
        </p>
        <Link
          href="/request-a-quote"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}