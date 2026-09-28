export interface Project {
  slug: string;
  client: string;
  industry: string;
  year: string;
  name: string;
  description: string;
  technologies: string[];
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  keyFeatures: string[];
  results: string;
  testimonial?: {
    quote: string;
    name: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    slug: "digital-banking-platform",
    client: "Client Company A",
    industry: "Financial Services",
    year: "2025",
    name: "Digital Banking Platform",
    description:
      "A secure digital platform designed to simplify financial operations and improve customer access.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    overview:
      "SOLVED partnered with a financial services provider to modernize how customers access and manage their accounts online.",
    challenge:
      "The client's legacy system was slow, difficult to maintain, and offered a poor customer experience, leading to declining engagement.",
    approach:
      "We conducted a discovery phase to map existing workflows, then designed a secure, modern architecture built around real customer needs rather than legacy constraints.",
    solution:
      "A fully redesigned digital banking platform with account management, transaction history, and secure authentication, built on a scalable Next.js and PostgreSQL foundation.",
    keyFeatures: [
      "Secure customer authentication",
      "Real-time transaction history",
      "Account management dashboard",
      "Mobile-responsive design",
    ],
    results:
      "The platform improved customer engagement and reduced support requests related to account access.",
    testimonial: {
      quote:
        "SOLVED understood exactly what we needed and delivered a system that actually fits how our team works.",
      name: "Placeholder Name",
      position: "Operations Manager, Client Company A",
    },
  },
  {
    slug: "school-management-system",
    client: "Client Company B",
    industry: "Education",
    year: "2025",
    name: "School Management System",
    description:
      "A digital platform for schools to manage student records, attendance, grading and communication in one place.",
    technologies: ["Next.js", "NestJS", "MySQL"],
    overview:
      "SOLVED built a centralized system to help an educational institution manage day-to-day academic operations digitally.",
    challenge:
      "Student records, attendance and grading were tracked across disconnected spreadsheets and paper records, creating inefficiency and errors.",
    approach:
      "We worked closely with school administrators to understand their existing processes and designed a system that matched their real workflow instead of forcing a generic template.",
    solution:
      "A unified school management platform covering student records, attendance tracking, grading and parent-teacher communication.",
    keyFeatures: [
      "Student record management",
      "Attendance tracking",
      "Grading and report cards",
      "Parent-teacher communication tools",
    ],
    results:
      "Administrative workload dropped significantly, and record accuracy improved across departments.",
    testimonial: {
      quote:
        "The team was professional from start to finish, and the final product exceeded our expectations.",
      name: "Placeholder Name",
      position: "Founder, Client Company B",
    },
  },
  {
    slug: "logistics-tracking-platform",
    client: "Client Company C",
    industry: "Logistics",
    year: "2024",
    name: "Logistics Tracking Platform",
    description:
      "A real-time fleet and delivery tracking system that gives logistics companies visibility into their operations.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    overview:
      "SOLVED developed a real-time tracking system to give a logistics company full visibility into their fleet and delivery operations.",
    challenge:
      "The client had no way to track deliveries in real time, leading to poor customer communication and inefficient route planning.",
    approach:
      "We designed a mobile-first system for drivers paired with a central dashboard for operations staff, prioritizing real-time reliability.",
    solution:
      "A cross-platform mobile app for drivers combined with a live tracking dashboard for dispatch and operations teams.",
    keyFeatures: [
      "Real-time GPS tracking",
      "Driver mobile app",
      "Delivery status updates",
      "Operations dashboard",
    ],
    results:
      "The client gained full visibility into their delivery operations and improved on-time delivery rates.",
    testimonial: {
      quote:
        "Working with SOLVED felt like having an in-house technology partner, not just a vendor.",
      name: "Placeholder Name",
      position: "IT Director, Client Company C",
    },
  },
];