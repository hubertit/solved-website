export interface Industry {
  slug: string;
  title: string;
  description: string;
  overview: string;
  challenges: string[];
  relatedServiceSlugs: string[];
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    description: "Digital platforms, automation, payment systems and analytics.",
    overview:
      "We help financial services organizations modernize how they serve customers, from account management to secure transactions.",
    challenges: [
      "Legacy systems that are slow and costly to maintain",
      "Growing expectations for digital self-service",
      "Strict security and compliance requirements",
    ],
    relatedServiceSlugs: ["custom-software-development", "cloud-solutions", "data-analytics"],
  },
  {
    slug: "government",
    title: "Government",
    description: "Citizen-facing platforms, internal systems and digital transformation.",
    overview:
      "We build platforms that help government institutions serve citizens more efficiently and modernize internal operations.",
    challenges: [
      "Disconnected systems across departments",
      "Need for transparent, accessible citizen services",
      "Long-term reliability and maintainability requirements",
    ],
    relatedServiceSlugs: ["enterprise-solutions", "automation", "it-consultancy"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Digital health platforms and workflow solutions.",
    overview:
      "We design digital health solutions that support patient care while keeping data secure and workflows efficient.",
    challenges: [
      "Managing sensitive patient data securely",
      "Streamlining appointment and record-keeping workflows",
      "Integrating with existing healthcare systems",
    ],
    relatedServiceSlugs: ["custom-software-development", "data-analytics", "cloud-solutions"],
  },
  {
    slug: "education",
    title: "Education",
    description: "School management, learning and institutional platforms.",
    overview:
      "We help educational institutions manage academic operations and improve how students, teachers and parents interact.",
    challenges: [
      "Manual, paper-based administrative processes",
      "Fragmented communication between staff and parents",
      "Difficulty tracking student performance over time",
    ],
    relatedServiceSlugs: ["custom-software-development", "mobile-app-development"],
  },
  {
    slug: "ngos",
    title: "NGOs",
    description: "Data management, reporting, monitoring and operational systems.",
    overview:
      "We build systems that help NGOs manage programs, track impact and report to donors and stakeholders efficiently.",
    challenges: [
      "Manual data collection across field teams",
      "Donor reporting that takes significant staff time",
      "Limited visibility into program outcomes",
    ],
    relatedServiceSlugs: ["data-analytics", "automation", "custom-software-development"],
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Fleet, delivery, tracking and logistics management systems.",
    overview:
      "We build tracking and management systems that give logistics companies real-time visibility into their operations.",
    challenges: [
      "Lack of real-time visibility into deliveries",
      "Inefficient route planning and fleet management",
      "Poor customer communication during delivery",
    ],
    relatedServiceSlugs: ["mobile-app-development", "custom-software-development", "data-analytics"],
  },
  {
    slug: "startups-smes",
    title: "Startups & SMEs",
    description: "MVP development, automation and digital products.",
    overview:
      "We help startups and small businesses build their first digital products quickly, without compromising on quality.",
    challenges: [
      "Limited budget and tight timelines",
      "Need to validate an idea before scaling",
      "Lack of in-house technical expertise",
    ],
    relatedServiceSlugs: ["web-development", "mobile-app-development", "it-consultancy"],
  },
];