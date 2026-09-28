export interface Job {
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobs: Job[] = [
  {
    slug: "senior-software-engineer",
    title: "Senior Software Engineer",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description:
      "We're looking for an experienced software engineer to help design and build custom software solutions for our clients across various industries.",
    requirements: [
      "3+ years of professional software development experience",
      "Strong knowledge of modern web technologies (React, Node.js or similar)",
      "Experience working with databases and APIs",
      "Good communication skills and ability to work in a team",
    ],
    responsibilities: [
      "Design and build scalable software solutions",
      "Collaborate with clients to understand business requirements",
      "Write clean, maintainable and well-tested code",
      "Mentor junior engineers on the team",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description:
      "We're looking for a creative UI/UX designer to craft intuitive, modern user experiences for our clients' digital products.",
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in design tools such as Figma",
      "A strong portfolio demonstrating web and/or mobile design work",
      "Understanding of accessibility and responsive design principles",
    ],
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Collaborate closely with engineers to implement designs",
      "Maintain and evolve design systems",
    ],
  },
];