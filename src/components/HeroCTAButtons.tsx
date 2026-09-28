"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function HeroCTAButtons() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
      <Link
        href="/request-a-quote"
        onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Start a Project
      </Link>
      <Link
        href="/portfolio"
        onClick={() => trackEvent("cta_click", { location: "hero_secondary" })}
        className="inline-flex items-center justify-center rounded-full border border-black/[.15] px-6 py-3 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.2] dark:hover:bg-white/[.06]"
      >
        Explore Our Work
      </Link>
    </div>
  );
}