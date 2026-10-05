import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found | SOLVED" };
  return { title: `${industry.title} | SOLVED`, description: industry.description };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedServices = services.filter((service) =>
    industry.relatedServiceSlugs.includes(service.slug)
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm font-medium text-[var(--brand-blue)]">Industry</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{industry.title}</h1>
      <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">{industry.overview}</p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-lg font-semibold">Common Challenges</h2>
          <ul className="mt-2 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
            {industry.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Related Services</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border border-black/[.15] px-4 py-2 text-sm hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] dark:border-white/[.2]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/request-a-quote"
        className="mt-12 inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Start a Project
      </Link>
    </div>
  );
}