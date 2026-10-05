import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/content/insights";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | SOLVED" };
  return { title: `${article.title} | SOLVED`, description: article.summary };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);
  const formattedDate = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--brand-blue)]">
        {article.category}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{article.title}</h1>
      <p className="mt-4 text-sm text-zinc-500">
        By {article.author} · {formattedDate}
      </p>

      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <div className="mt-10 space-y-5 text-zinc-700 dark:text-zinc-300">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-black/[.08] pt-10 dark:border-white/[.1]">
          <h2 className="text-lg font-semibold">Related Articles</h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/insights/${item.slug}`}
                  className="text-zinc-600 underline hover:text-[var(--brand-blue)] dark:text-zinc-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}