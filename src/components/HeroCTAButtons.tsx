"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function HeroCTAButtons() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
      <Link
        href="/request-a-quote"
        onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
        className="inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Start a Project
      </Link>
      <Link
        href="/portfolio"
        onClick={() => trackEvent("cta_click", { location: "hero_secondary" })}
        className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
      >
        Explore Our Work
      </Link>
    </div>
  );
}