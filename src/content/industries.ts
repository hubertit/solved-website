export interface Industry {
  slug: string;
  title: string;
  description: string;
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    description:
      "Digital platforms, automation, payment systems and analytics.",
  },
  {
    slug: "government",
    title: "Government",
    description:
      "Citizen-facing platforms, internal systems and digital transformation.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Digital health platforms and workflow solutions.",
  },
  {
    slug: "education",
    title: "Education",
    description:
      "School management, learning and institutional platforms.",
  },
  {
    slug: "ngos",
    title: "NGOs",
    description:
      "Data management, reporting, monitoring and operational systems.",
  },
  {
    slug: "logistics",
    title: "Logistics",
    description:
      "Fleet, delivery, tracking and logistics management systems.",
  },
  {
    slug: "startups-smes",
    title: "Startups & SMEs",
    description: "MVP development, automation and digital products.",
  },
];