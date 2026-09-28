export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discovery", description: "Understanding the business problem and goals." },
  { number: "02", title: "Strategy", description: "Defining the right technical approach." },
  { number: "03", title: "Design", description: "Designing the user experience and system architecture." },
  { number: "04", title: "Development", description: "Building the solution using modern technology." },
  { number: "05", title: "Testing", description: "Ensuring quality, performance and reliability." },
  { number: "06", title: "Deployment", description: "Launching the solution into production." },
  { number: "07", title: "Support", description: "Ongoing support after the system goes live." },
];