import Link from "next/link";
import Image from "next/image";
import { articles } from "@/content/insights";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | SOLVED",
  description:
    "Articles on technology, digital transformation and software development from the SOLVED team.",
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Insights</h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Ideas and practical advice on technology, digital transformation and
          building software that works.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group block overflow-hidden rounded-2xl border border-black/[.08] transition-colors hover:border-[var(--brand-blue)]/40 dark:border-white/[.1]"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-blue)]">
                {article.category}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{article.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{article.summary}</p>
              <span className="mt-4 inline-block text-sm font-medium text-zinc-500 group-hover:text-[var(--brand-blue)]">
                Read article →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}