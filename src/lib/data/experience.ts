export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  /** e.g. Part-time, Freelance */
  engagement?: string;
  /** Company website or LinkedIn URL */
  companyUrl?: string;
  /** Logo path under /public */
  logo?: string;
  /** Light logo needs a bright background container */
  logoOnLight?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Ruby Next",
    role: "Software Engineer",
    period: "Apr 2023 — Present",
    location: "Bangkok, Thailand",
    companyUrl: "https://www.linkedin.com/company/rubynext/",
    logo: "/companies/rubynext.jpeg",
    highlights: [
      "Develop and maintain large-scale web applications with Vue.js, Nuxt.js, and TypeScript.",
      "Deliver business-critical features integrating internal payment services and third-party provider platforms.",
      "Build real-time experiences with WebSocket communication and authentication, including single active session enforcement.",
      "Lead Nuxt 2 → Nuxt 3 migrations to improve maintainability, scalability, and developer productivity.",
      "Own feature delivery end-to-end — from requirements analysis through staging releases and production deployments.",
    ],
  },
  {
    company: "Rocket Digital",
    role: "Senior Frontend Developer",
    period: "Jan 2022 — Mar 2023",
    location: "Bangkok, Thailand",
    companyUrl: "https://rocket.in.th",
    logo: "/companies/rocket.svg",
    highlights: [
      "Built loyalty, CRM, municipal service, and customer engagement apps with React and TypeScript.",
      "Designed reusable frontend boilerplates and component libraries adopted across multiple projects.",
      "Contributed to company-wide design systems and frontend architecture standards.",
      "Shipped Progressive Web Applications (PWA) to improve accessibility and user experience.",
    ],
  },
  {
    company: "Oway Travel & Tour",
    role: "Senior React Developer",
    period: "May 2019 — Dec 2021",
    location: "Yangon, Myanmar",
    companyUrl: "https://oway.com.mm",
    logo: "/companies/oway.svg",
    highlights: [
      "Led frontend development for travel booking, ticketing, e-commerce, and operational platforms.",
      "Designed scalable React architecture and integrated payment gateways for booking and transactions.",
      "Managed AWS services, deployment pipelines, and microservice integrations.",
      "Built React Native apps for ticketing and operational workflows; mentored through code reviews.",
    ],
  },
  {
    company: "ZigWay",
    role: "Mobile Application Developer",
    period: "Sep 2020 — Feb 2021",
    location: "Yangon, Myanmar",
    engagement: "Part-time",
    companyUrl: "https://www.linkedin.com/company/zigway.co/",
    logo: "/companies/zigway.jpeg",
    logoOnLight: true,
    highlights: [
      "Developed JavaScript mobile application features for ordering, credit, and user level management.",
      "Built fintech capabilities helping low-income families access subscriptions and affordable nano-loans.",
    ],
  },
  {
    company: "CarsDB",
    role: "Web Developer",
    period: "Jul 2017 — Apr 2019",
    location: "Yangon, Myanmar",
    companyUrl: "https://carsdb.com",
    logo: "/companies/carsdb.png",
    logoOnLight: true,
    highlights: [
      "Developed customer-facing and admin applications for a vehicle marketplace platform.",
      "Built responsive, mobile-first interfaces and improved performance through component refactoring.",
      "Shipped media-related web platforms and internal operational tools with product teams.",
    ],
  },
];
