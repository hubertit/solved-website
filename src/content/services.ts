export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  delivers: string;
  useCases: string[];
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Build tailored software platforms around specific business requirements.",
    problem:
      "Off-the-shelf software rarely fits how a real organization actually works.",
    delivers:
      "Fully custom platforms designed around your exact workflows, not a generic template.",
    useCases: [
      "Business management systems",
      "Enterprise applications",
      "Internal platforms",
      "Workflow systems",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Modern websites and web applications.",
    problem:
      "Outdated or slow websites fail to represent a business credibly online.",
    delivers:
      "Fast, modern, responsive websites and web apps built for performance and growth.",
    useCases: ["Corporate websites", "Web platforms", "Customer portals"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Applications for Android, iOS and cross-platform environments.",
    problem:
      "Businesses need to reach customers on mobile but lack in-house app development expertise.",
    delivers: "Native and cross-platform mobile applications built for scale.",
    useCases: ["Android apps", "iOS apps", "Cross-platform apps"],
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    shortDescription:
      "Large-scale systems designed for organizations with complex workflows.",
    problem:
      "Growing organizations outgrow simple tools and need systems that handle real complexity.",
    delivers: "Robust, scalable enterprise-grade systems built to handle complex operations.",
    useCases: ["Multi-department systems", "Complex approval workflows", "Large-scale platforms"],
  },
  {
    slug: "automation",
    title: "Automation",
    shortDescription: "Automate repetitive processes and improve operational efficiency.",
    problem: "Manual, repetitive processes waste time and introduce human error.",
    delivers: "Automated workflows that save time and reduce errors.",
    useCases: ["Data entry automation", "Approval workflows", "Reporting automation"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortDescription: "Turn business data into actionable information.",
    problem: "Businesses collect data but struggle to turn it into real insight.",
    delivers: "Dashboards, reporting and analytics that make data usable for decisions.",
    useCases: ["Business dashboards", "Reporting systems", "Data pipelines"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Cloud infrastructure, deployment, migration and management.",
    problem: "On-premise infrastructure is costly, hard to scale, and hard to maintain.",
    delivers: "Cloud infrastructure setup, migration and ongoing management.",
    useCases: ["Cloud migration", "Infrastructure setup", "Cloud management"],
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    shortDescription: "Technology strategy, architecture and digital transformation consulting.",
    problem: "Organizations need technical direction but lack in-house strategic expertise.",
    delivers: "Strategic technology guidance aligned with real business goals.",
    useCases: ["Technology strategy", "System architecture", "Digital transformation planning"],
  },
];