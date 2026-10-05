export interface Article {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  summary: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "how-businesses-can-automate-their-operations",
    title: "How Businesses Can Automate Their Operations",
    category: "Technology",
    author: "Placeholder Author",
    date: "2026-09-10",
    image: "/images/insight-1.jpg",
    summary:
      "Repetitive manual work slows teams down. Here is how automation can save time and reduce errors.",
    content: [
      "Many organizations still rely on manual processes such as data entry, approvals and reporting. These tasks take time and make mistakes more likely.",
      "Automation starts by identifying the tasks that repeat most often. Once those are mapped, software can handle them consistently and free your team for higher-value work.",
      "The best approach is to start small, automate one workflow, measure the results, and expand from there.",
    ],
  },
  {
    slug: "why-digital-transformation-starts-with-the-problem",
    title: "Why Digital Transformation Starts with the Problem, Not the Technology",
    category: "Digital Transformation",
    author: "Placeholder Author",
    date: "2026-09-03",
    image: "/images/insight-2.jpg",
    summary:
      "Successful digital projects begin with a clear business problem. Technology comes second.",
    content: [
      "Organizations often begin transformation projects by choosing a tool. Projects that succeed usually begin with a question: what problem are we trying to solve?",
      "Understanding the real workflow, the people involved and the goal makes it far easier to choose the right technology.",
    ],
  },
  {
    slug: "choosing-between-custom-and-off-the-shelf-software",
    title: "Choosing Between Custom and Off-the-Shelf Software",
    category: "Software Development",
    author: "Placeholder Author",
    date: "2026-08-25",
    image: "/images/insight-3.jpg",
    summary:
      "Both options have their place. Here is how to decide which one fits your organization.",
    content: [
      "Off-the-shelf software is quick to adopt and works well for common needs. Custom software fits your exact workflow but takes longer to build.",
      "If your process is unique, or your tools force you into workarounds, custom software often pays for itself over time.",
    ],
  },
];