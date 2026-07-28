export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Client / organization name */
  client?: string;
  /** Your role on the project */
  role?: string;
  /** Engagement type, e.g. Freelance / Contract */
  engagement?: string;
  /** Key delivery highlights */
  highlights?: string[];
  /** One or more preview images (local /public path or remote URL) */
  images?: string[];
  /** Live demo / production URL */
  href?: string;
  /** Source repository URL */
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Digital Coupon Management System",
    client: "PSI Myanmar",
    role: "Technical Lead / Full Stack Developer",
    engagement: "Freelance / Contract",
    description:
      "Led end-to-end delivery of a digital coupon management platform for a healthcare organization — from requirement analysis through production deployment on AWS / Fly.io.",
    tags: ["React", "Next.js", "NestJS", "MongoDB", "Redis", "AWS", "Fly.io"],
    images: [
      "/projects/psi-dasboard.png",
      "/projects/psimobile.png",
      "/projects/design.png",
    ],
    featured: true,
  },
  {
    title: "Loyalty & CRM Platform",
    description:
      "Customer loyalty platform for rewards, benefits, engagement, and relationship management — delivered at Rocket Digital.",
    tags: ["React", "TypeScript", "MongoDB"],
    images: ["/projects/rocket.png"],
    featured: true,
  },
  {
    title: "Oway Travel",
    description:
      "Travel booking platform supporting flights, hotels, tour packages, and online transactions with payment gateway integrations.",
    tags: ["React", "Node.js", "AWS"],
    images: ["/projects/owaytravel.png", "/projects/oway-mb.png"],
    featured: true,
  },
  {
    title: "CarsDB Marketplace",
    description:
      "Vehicle marketplace with customer-facing applications and administrative systems for browsing, listing, and operations.",
    tags: ["React", "Node.js", "MongoDB"],
    images: ["/projects/carsdb.png", "/projects/carsdb-mb.png"],
    featured: true,
  },
];
