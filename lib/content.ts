/**
 * Single source of truth for every word on the site.
 * Edit here — components only lay this out.
 */

export const site = {
  name: "Arman Mkhitaryan",
  role: "Product engineer — mobile & web",
  email: "arman.mkhitaryan.1997@gmail.com",
  github: "https://github.com/ArmanMkhitarian",
  brand: { label: "mikitari.com", href: "https://mikitari.com" },
  url: "https://armanmkhitarian.github.io",
  location: "Remote",
  tagline:
    "I build and ship products end to end — Flutter apps on both stores, .NET backends behind them, and everything in between: release pipelines, analytics, monetization.",
  intro:
    "Ten shipped apps and a live SaaS product, most of them designed, built, released and operated solo. I care about what happens after launch: retention numbers, store reviews, the revenue graph.",
};

export const stats = [
  { value: "10+", label: "apps shipped", note: "Google Play & App Store" },
  { value: "400+", label: "daily players", note: "on the biggest title" },
  { value: "27", label: "languages", note: "localized in one release" },
  { value: "5 yrs", label: "building products", note: "mobile, web, backend" },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "foodino",
    name: "Foodino",
    kind: "SaaS for food businesses",
    status: "Live · paying customers",
    summary:
      "An ordering platform for small food businesses: a branded storefront for each venue, a real-time order feed for staff, and an admin panel behind it. Runs in production with paying customers.",
    highlights: [
      "Branded PWA storefront per venue on its own subdomain, with themes and QR posters",
      "Real-time order status tracking for guests; server-side re-delivery so no order is missed",
      "Menu import from a photo — Vision OCR into an LLM, straight into the catalogue",
      "Deployed by a self-hosted CI runner; staging and production environments",
    ],
    stack: ["C# / .NET", "PostgreSQL", "Dapper", "Next.js", "Flutter", "Linux / CI"],
    featured: true,
  },
  {
    slug: "stoptime",
    name: "StopTime",
    kind: "Mobile game",
    status: "Live · Android & iOS",
    summary:
      "A precision timing game that grew into a small live-ops product: online duels, parties, leaderboards, seasons, cosmetics and a subscription-free monetization mix.",
    highlights: [
      "Real-time duels and online rooms on a Firebase backend with security rules",
      "Weekly and monthly leaderboard buckets designed to stay cheap at scale",
      "Retention work driven by BigQuery analytics — onboarding rewrite lifted completion to 84%",
      "In-app purchases plus ad mediation, tuned against real ARPDAU numbers",
    ],
    stack: ["Flutter", "Firebase", "BigQuery", "IAP", "Ad mediation"],
    featured: true,
  },
  {
    slug: "attic",
    name: "Attic",
    kind: "Photo cleanup app",
    status: "Android live · iOS in review",
    summary:
      "A swipe-to-clean gallery app that turns freeing up storage into a fast, tactile flow. Shipped on Android, localized into 27 languages in a single release.",
    highlights: [
      "Swipe-based review flow over the device gallery with an undoable trash bin",
      "Full localization pipeline for 27 locales, including store listings",
      "Store listings rebuilt around ASO research rather than guesswork",
    ],
    stack: ["Flutter", "Platform channels", "ASO", "l10n"],
    featured: true,
  },
  {
    slug: "tutchat",
    name: "TutChat",
    kind: "Offline file sharing",
    status: "Live · Android & iOS",
    summary:
      "Sends files and messages between phones with no internet at all — direct device-to-device transfer over local wireless.",
    highlights: [
      "Wi-Fi Direct transport hardened against the failure modes real devices produce",
      "Delivery queue with a watchdog and visible retries instead of silent failures",
      "Feature parity brought to iOS on a separate transport stack",
    ],
    stack: ["Flutter", "Wi-Fi Direct", "Kotlin", "Swift"],
  },
  {
    slug: "tap-away",
    name: "Tap Away",
    kind: "Puzzle game",
    status: "Live · Android",
    summary:
      "A tap-to-clear block puzzle. Its real story is the numbers: an analytics rebuild showed where players were leaving and which market actually paid.",
    highlights: [
      "GA4 + BigQuery funnel analysis down to per-level drop-off",
      "Store listing experiment on title and keywords, read from impressions rather than installs",
      "Retention rework shipped as a versioned experiment",
    ],
    stack: ["Flutter", "GA4", "BigQuery", "ASO"],
  },
  {
    slug: "block-pop",
    name: "Block Pop",
    kind: "Puzzle game",
    status: "Live · Android",
    summary:
      "A block-fitting puzzle built and shipped end to end — design, implementation, store release and ad monetization — as a compact production run.",
    highlights: [
      "Daily goals and a star-based progression tuned through playtesting",
      "Rewarded-ad economy wired in without breaking the core loop",
    ],
    stack: ["Flutter", "Ad mediation"],
  },
];

export const services = [
  {
    title: "Mobile apps, end to end",
    body: "Flutter apps for Android and iOS — from an empty repo to a released build, store listing, and the analytics that tell you whether it worked.",
  },
  {
    title: "Backends & APIs",
    body: ".NET services on PostgreSQL, deployed on Linux with CI, monitoring and backups. Built to be operated, not just demoed.",
  },
  {
    title: "Web & storefronts",
    body: "Next.js sites and PWAs — marketing pages, admin panels, customer-facing storefronts. Fast, static where it can be, dynamic where it must be.",
  },
  {
    title: "Growth plumbing",
    body: "Analytics, funnels, monetization, store optimization. The unglamorous layer that decides whether a good product earns anything.",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Mobile", items: ["Flutter", "Dart", "Kotlin", "Swift", "Android & iOS release pipelines"] },
  { group: "Backend", items: ["C#", ".NET", "PostgreSQL", "Dapper", "REST APIs", "Firebase"] },
  { group: "Web", items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "PWA"] },
  { group: "Infrastructure", items: ["Linux", "Nginx", "GitHub Actions", "Self-hosted CI", "Backups & monitoring"] },
  { group: "Product", items: ["GA4", "BigQuery", "A/B experiments", "ASO", "IAP & ad monetization"] },
];

/** TODO(content): replace with real roles — kept generic for now. */
export const experience = [
  {
    period: "2023 — now",
    title: "Independent developer",
    org: "Own products & client work",
    body: "Building and operating a portfolio of mobile apps and a SaaS product for food businesses. Responsible for everything: architecture, implementation, releases, analytics and revenue.",
  },
  {
    period: "TODO",
    title: "TODO — role",
    org: "TODO — company",
    body: "TODO — one or two sentences on what you owned and what changed because of it.",
  },
  {
    period: "TODO",
    title: "TODO — role",
    org: "TODO — company",
    body: "TODO — one or two sentences on what you owned and what changed because of it.",
  },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
