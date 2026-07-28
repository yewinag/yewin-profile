export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Sass",
      "Ant Design",
      "Chakra UI",
    ],
  },
  {
    category: "Architecture",
    items: [
      "Design Systems",
      "Component Libraries",
      "Performance Optimization",
      "WebSocket Integration",
      "Redux",
      "React Query",
      "Zustand",
      "PWA",
    ],
  },
  {
    category: "Backend & Data",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Redis",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      "AWS (EC2, S3, CloudFront, Lambda)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Jest",
      "React Testing Library",
      "Figma",
      "Jira / Agile",
    ],
  },
];
