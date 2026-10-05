import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/services/custom-software-development" },
      { label: "Mobile Apps", href: "/services/mobile-app-development" },
      { label: "Cloud", href: "/services/cloud-solutions" },
      { label: "Automation", href: "/services/automation" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Consultancy", href: "/services/it-consultancy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Insights", href: "/insights" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-navy)] text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-lg font-semibold text-white">SOLVED</p>
            <p className="mt-3 max-w-sm text-slate-400">
              Technology that solves real business problems.
            </p>
            <Link
              href="/request-a-quote"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700"
            >
              Start a Project
            </Link>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p>© {new Date().getFullYear()} SOLVED. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}