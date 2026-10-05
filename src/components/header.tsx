"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
<<<<<<< HEAD
import { services } from "@/content/services";
import { industries } from "@/content/industries";
=======

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];
>>>>>>> f3655f6adec572ae8c23029f23e6c540964aa3d3

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "industries" | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.1] dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          SOLVED
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[var(--brand-blue)]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[var(--brand-blue)]">
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/services" className="hover:text-[var(--brand-blue)]">
              Services
            </Link>
            {openDropdown === "services" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-64 rounded-xl border border-black/[.08] bg-white p-2 shadow-lg dark:border-white/[.1] dark:bg-zinc-900">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("industries")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/industries" className="hover:text-[var(--brand-blue)]">
              Industries
            </Link>
            {openDropdown === "industries" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-64 rounded-xl border border-black/[.08] bg-white p-2 shadow-lg dark:border-white/[.1] dark:bg-zinc-900">
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/portfolio" className="hover:text-[var(--brand-blue)]">
            Portfolio
          </Link>
          <Link href="/insights" className="hover:text-[var(--brand-blue)]">
            Insights
          </Link>
          <Link href="/careers" className="hover:text-[var(--brand-blue)]">
            Careers
          </Link>
        </nav>

        <Link
          href="/request-a-quote"
          onClick={() => trackEvent("cta_click", { location: "header" })}
<<<<<<< HEAD
          className="hidden md:inline-flex items-center rounded-full bg-[var(--brand-navy)] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-blue)]"
=======
          className="hidden md:inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
>>>>>>> f3655f6adec572ae8c23029f23e6c540964aa3d3
        >
          Get Started
        </Link>

<<<<<<< HEAD
=======
        {/* Hamburger button, only visible below md breakpoint */}
>>>>>>> f3655f6adec572ae8c23029f23e6c540964aa3d3
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

<<<<<<< HEAD
=======
      {/* Mobile menu panel, only rendered when open */}
>>>>>>> f3655f6adec572ae8c23029f23e6c540964aa3d3
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-1 border-t border-black/[.08] bg-white px-6 py-4 dark:border-white/[.1] dark:bg-black">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Industries", href: "/industries" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Insights", href: "/insights" },
            { label: "Careers", href: "/careers" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-base font-medium hover:text-[var(--brand-blue)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-a-quote"
            onClick={() => {
              trackEvent("cta_click", { location: "mobile_menu" });
              setIsMenuOpen(false);
            }}
<<<<<<< HEAD
            className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-medium text-white hover:bg-[var(--brand-blue)]"
=======
            className="mt-3 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-black"
>>>>>>> f3655f6adec572ae8c23029f23e6c540964aa3d3
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}