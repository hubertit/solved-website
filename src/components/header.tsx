"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.1] dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          SOLVED
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-500">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/request-a-quote"
          className="hidden md:inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Get Started
        </Link>

        {/* Hamburger button — only visible below md breakpoint */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            // X icon (menu is open)
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            // Hamburger icon (menu is closed)
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel — only rendered when open */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-1 border-t border-black/[.08] bg-white px-6 py-4 dark:border-white/[.1] dark:bg-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-base font-medium hover:text-zinc-500"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/request-a-quote"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}