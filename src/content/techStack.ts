export interface TechCategory {
  category: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  { category: "Frontend", items: ["Next.js", "React", "Angular"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Java", "Spring Boot"] },
  { category: "Mobile", items: ["Flutter", "React Native"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Linux", "Cloud Infrastructure", "CI/CD"],
  },
];