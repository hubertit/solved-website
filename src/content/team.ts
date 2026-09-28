export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    slug: "team-member-one",
    name: "Placeholder Name",
    role: "Founder & CEO",
    bio: "Leads SOLVED's vision and strategy, helping organizations solve real business problems through technology.",
  },
  {
    slug: "team-member-two",
    name: "Placeholder Name",
    role: "Lead Software Engineer",
    bio: "Oversees technical architecture and engineering delivery across SOLVED's client projects.",
  },
  {
    slug: "team-member-three",
    name: "Placeholder Name",
    role: "Head of Design",
    bio: "Leads product design, ensuring every solution is intuitive and user-focused.",
  },
];