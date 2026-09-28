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
    <footer className="border-t border-black/[.08] bg-zinc-50 dark:border-white/[.1] dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-semibold text-black dark:text-white">SOLVED</p>
            <p className="mt-2 max-w-sm">
              Technology that solves real business problems.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-black dark:text-white">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-black dark:hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[.08] pt-8 dark:border-white/[.1] sm:flex-row">
          <p>© {new Date().getFullYear()} SOLVED. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-black dark:hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-black dark:hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}