export interface PortfolioProject {
  id: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  video: string;
  poster: string;
  website?: string;
  source?: string;
}

// Fictional portfolio concepts. Add real website/source URLs when replacing them.
// Asset paths are relative to Vite's BASE_URL for GitHub Pages compatibility.
export const projects: PortfolioProject[] = [
  {
    id: "verdant-store",
    title: "Verdant Store",
    period: "Sample concept · 2026",
    description:
      "A plant shop concept with a searchable catalog, seasonal collections, and a simple path to checkout. The preview explores product discovery, thoughtful merchandising, and a storefront designed to feel just as natural on mobile.",
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "TypeScript",
      "CSS",
      "REST API",
      "Search",
      "Responsive UI",
    ],
    video: "videos/projects/verdant-store.mp4",
    poster: "videos/projects/verdant-store.webp",
  },
  {
    id: "syncflow",
    title: "SyncFlow",
    period: "Sample concept · 2026",
    description:
      "An inventory integration concept connecting a storefront with back-office systems. Follow product updates through validation, sync activity, and a clear overview of the records that need attention.",
    tags: [
      "C#",
      ".NET",
      "React",
      "TypeScript",
      "REST APIs",
      "SQL Server",
      "Webhooks",
      "Automation",
    ],
    video: "videos/projects/syncflow.mp4",
    poster: "videos/projects/syncflow.webp",
  },
  {
    id: "signal-desk",
    title: "Signal Desk",
    period: "Sample concept · 2026",
    description:
      "A marketing analytics workspace concept that brings traffic, conversions, and campaign performance into one view. Animated charts and channel breakdowns show how a team could spot trends and choose its next experiment.",
    tags: [
      "React",
      "TypeScript",
      "GA4",
      "GTM",
      "Node.js",
      "PostgreSQL",
      "Charts",
      "Analytics",
    ],
    video: "videos/projects/signal-desk.mp4",
    poster: "videos/projects/signal-desk.webp",
  },
  {
    id: "waypoint-ai",
    title: "Waypoint AI",
    period: "Sample concept · 2026",
    description:
      "A support assistant concept that turns a customer question into a useful answer and a clear next step. The sample conversation demonstrates knowledge lookup, service routing, and a handoff to a human when needed.",
    tags: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "AI Workflows",
      "Knowledge Base",
      "Human Handoff",
    ],
    video: "videos/projects/waypoint-ai.mp4",
    poster: "videos/projects/waypoint-ai.webp",
  },
];
