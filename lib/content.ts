/**
 * Single source of truth for every word and every product on the site.
 * Components only lay this out.
 */

export const site = {
  name: "Arman Mkhitaryan",
  role: "Product engineer",
  email: "arman.mkhitaryan.1997@gmail.com",
  github: "https://github.com/ArmanMkhitarian",
  brand: { label: "mikitari.com", href: "https://mikitari.com" },
  url: "https://armanmkhitarian.github.io",
  location: "Remote",
  availability: "Open to work & new projects",
  /** Hero headline, one line per array entry. */
  headline: ["Eight apps.", "Two stores.", "One person."],
  lede: "I design, build, release and run mobile products end to end — and the .NET backends behind them. Not prototypes: things that live in the stores, take payments and have users who come back tomorrow.",
};

export const stats = [
  { value: 8, suffix: "", label: "apps live", note: "Google Play & App Store" },
  { value: 419, suffix: "", label: "daily players", note: "StopTime, Sept 2026" },
  { value: 27, suffix: "", label: "languages", note: "shipped in one release" },
  { value: 1, suffix: "", label: "SaaS in production", note: "with paying customers" },
];

export type Store = { kind: "play" | "appstore" | "web"; href: string };

export type Product = {
  slug: string;
  name: string;
  type: string;
  icon?: string;
  status: "live" | "review" | "prod";
  statusLabel: string;
  /** One line that says why it matters. */
  pitch: string;
  /** The interesting engineering, in plain words. */
  detail: string;
  metric?: { value: string; label: string };
  /** Short proof points, shown on the large bento tiles. */
  facts?: string[];
  tech: string[];
  stores: Store[];
  /** Featured products get the large bento tiles. */
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "foodino",
    name: "Foodino",
    type: "Ordering SaaS for food businesses",
    status: "prod",
    statusLabel: "In production",
    pitch: "A whole ordering platform for small food businesses — storefront, kitchen, admin — running with paying customers.",
    detail:
      "Every venue gets a branded PWA storefront on its own subdomain, guests track their order status live, and staff work a real-time order feed. Behind it: a .NET service on PostgreSQL, a self-hosted CI runner, staging and production, backups and uptime monitoring. Menus can be imported straight from a photo — Vision OCR into an LLM, then into the catalogue.",
    metric: { value: "Live", label: "paying customers" },
    facts: ["Branded storefront per venue", "Live order tracking", "Menu import from a photo"],
    tech: ["C# / .NET", "PostgreSQL", "Dapper", "Next.js", "Flutter", "Linux / CI"],
    stores: [{ kind: "web", href: "https://foodino.ru" }],
    featured: true,
  },
  {
    slug: "stoptime",
    name: "StopTime",
    type: "Precision timing game",
    icon: "/apps/StopTimeIcon.webp",
    status: "live",
    statusLabel: "Live",
    pitch: "A one-tap game that turned into a live-ops product: online duels, parties, seasons, leaderboards.",
    detail:
      "Duels and rooms run on Firebase with rules tight enough that a modified client can't post a fake score. Leaderboards use weekly and monthly buckets so they stay cheap as players pile up. Everything after launch is driven by BigQuery: the onboarding rewrite took tutorial completion to 84%, and the monetization mix is tuned against real ARPDAU, not guesses.",
    metric: { value: "419", label: "players a day" },
    facts: [
      "Real-time duels and party rooms",
      "Cheat-resistant score submission",
      "84% tutorial completion after rewrite",
    ],
    tech: ["Flutter", "Firebase", "BigQuery", "IAP", "Ad mediation"],
    stores: [
      { kind: "play", href: "https://play.google.com/store/apps/details?id=com.stoptime.app" },
      { kind: "appstore", href: "https://apps.apple.com/ru/app/stoptime-time-perception-game/id6772400704" },
    ],
    featured: true,
  },
  {
    slug: "attic",
    name: "Attic",
    type: "Photo cleanup",
    icon: "/apps/AtticIcon.webp",
    status: "review",
    statusLabel: "Android live · iOS in review",
    pitch: "Swipe your camera roll clean. Nine shots of the same sunset arrive as one decision.",
    detail:
      "Sorting happens entirely on device — no accounts, no uploads. Nothing is deleted until you confirm; everything waits in an archive one tap away. Shipped in 27 languages in a single release, store listings included, with the listings themselves rebuilt from ASO research rather than guesswork.",
    metric: { value: "27", label: "languages" },
    tech: ["Flutter", "Platform channels", "l10n", "ASO"],
    stores: [
      { kind: "play", href: "https://play.google.com/store/apps/details?id=com.mikitari.attic" },
      { kind: "web", href: "https://attic.mikitari.com/" },
    ],
    featured: true,
  },
  {
    slug: "tutchat",
    name: "TutChat",
    type: "Offline file transfer",
    icon: "/apps/TutChatIcon.webp",
    status: "live",
    statusLabel: "Live",
    pitch: "Send files and messages between phones with no internet at all.",
    detail:
      "Direct device-to-device transfer over local wireless, hardened against the failure modes real hardware produces — dropped groups, stale sockets, silent stalls. Transfers queue behind a watchdog and retry visibly instead of failing quietly. iOS reached feature parity on a different transport stack.",
    tech: ["Flutter", "Wi-Fi Direct", "Kotlin", "Swift"],
    stores: [
      { kind: "play", href: "https://play.google.com/store/apps/details?id=com.tutchat.app" },
      { kind: "appstore", href: "https://apps.apple.com/ru/app/tutchat/id6756493585" },
    ],
  },
  {
    slug: "collapse",
    name: "Tap Away",
    type: "Block puzzle",
    icon: "/apps/CollapseIcon.webp",
    status: "live",
    statusLabel: "Live",
    pitch: "A tap-to-clear puzzle whose real story is the analytics behind it.",
    detail:
      "A GA4 and BigQuery rebuild showed exactly where players left and which market actually paid — 59% of users and 99% of revenue came from one country. That answer decided the roadmap: no paid traffic, no IAP, a store-listing experiment read from impressions instead of installs.",
    metric: { value: "228", label: "monthly players" },
    tech: ["Flutter", "GA4", "BigQuery", "ASO"],
    stores: [
      { kind: "play", href: "https://play.google.com/store/apps/details?id=com.mikitari.collapse" },
      { kind: "appstore", href: "https://apps.apple.com/us/app/collapse-tap-away-puzzle/id6794567220" },
    ],
  },
  {
    slug: "memorizepath",
    name: "MemorizePath",
    type: "Memory training",
    icon: "/apps/MemorizePathIcon.webp",
    status: "live",
    statusLabel: "Live",
    pitch: "Path-memory drills that grew into a brain-training product with timed run modes.",
    detail:
      "Shipped on both stores plus RuStore, with a monetization ladder and an ad-mediation stack that had to work in markets where the usual networks don't.",
    tech: ["Flutter", "Firebase", "Ad mediation"],
    stores: [
      { kind: "play", href: "https://play.google.com/store/apps/details?id=com.memorizepath.android" },
      { kind: "appstore", href: "https://apps.apple.com/ru/app/memorizepath-memory-game/id6760545214" },
    ],
  },
  {
    slug: "blockpop",
    name: "Block Pop",
    type: "Block puzzle",
    icon: "/apps/BlockPopIcon.webp",
    status: "live",
    statusLabel: "Live",
    pitch: "Built, monetized and released as one compact production run.",
    detail:
      "Daily goals and star progression tuned through playtesting, with a rewarded-ad economy wired in without breaking the core loop.",
    tech: ["Flutter", "Ad mediation"],
    stores: [{ kind: "play", href: "https://play.google.com/store/apps/details?id=com.mikitari.blockpop" }],
  },
  {
    slug: "lastmoment",
    name: "Last Moment",
    type: "Reflex game",
    icon: "/apps/LastMomentIcon.webp",
    status: "live",
    statusLabel: "Live",
    pitch: "A reflex game with a mascot-led redesign and a full analytics rebuild.",
    detail:
      "Both platforms run the same monetization stack; the redesign around the Miki mascot went out alongside it.",
    tech: ["Flutter", "Analytics", "Billing"],
    stores: [
      { kind: "play", href: "https://play.google.com/store/apps/details?id=com.lastmoment.app" },
      { kind: "appstore", href: "https://apps.apple.com/us/app/last-moment-reflex-game/id6761336734" },
    ],
  },
  {
    slug: "bridges",
    name: "Bridges",
    type: "Logic puzzle",
    icon: "/apps/BridgesIcon.webp",
    status: "live",
    statusLabel: "Live",
    pitch: "Classic hashi puzzles with a generator that guarantees a unique solution.",
    detail: "Shipped on Google Play with its own Firebase project and crash reporting.",
    tech: ["Flutter", "Firebase"],
    stores: [{ kind: "play", href: "https://play.google.com/store/apps/details?id=com.mikitari.bridges" }],
  },
];

/** Icons for the "everything shipped" tile. */
export const shippedIcons = products.filter((p) => p.icon).map((p) => ({ name: p.name, icon: p.icon! }));

export const capabilities = [
  {
    title: "Mobile apps, end to end",
    body: "Flutter for Android and iOS — empty repo to released build, store listing, and the analytics that say whether it worked. I have been through review rejections, billing migrations and mediation swaps, and I know what they cost.",
  },
  {
    title: "Backends that get operated",
    body: ".NET on PostgreSQL, deployed on Linux with CI, monitoring and backups. Built by someone who is also on call for them.",
  },
  {
    title: "Web & storefronts",
    body: "Next.js sites, PWAs, admin panels. Static where it can be, dynamic where it has to be, fast either way.",
  },
  {
    title: "The growth plumbing",
    body: "Funnels, retention, monetization, store optimization. The unglamorous layer that decides whether a good product earns anything.",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Mobile", items: ["Flutter", "Dart", "Kotlin", "Swift", "Play Console", "App Store Connect"] },
  { group: "Backend", items: ["C#", ".NET", "PostgreSQL", "Dapper", "REST", "Firebase"] },
  { group: "Web", items: ["TypeScript", "Next.js", "React", "Tailwind", "PWA"] },
  { group: "Infra", items: ["Linux", "Nginx", "GitHub Actions", "Self-hosted CI", "Backups", "Monitoring"] },
  { group: "Product", items: ["GA4", "BigQuery", "A/B tests", "ASO", "IAP", "Ad mediation"] },
];

/**
 * Entries whose period is "TODO" are filtered out before rendering — fill in
 * real roles here and they appear on the site automatically.
 */
export const experience = [
  {
    period: "2023 — now",
    title: "Independent developer",
    org: "Own products & client work",
    body: "Building and operating a portfolio of mobile apps and a SaaS product for food businesses. Architecture, implementation, releases, analytics and revenue — all of it.",
  },
  {
    period: "TODO",
    title: "TODO — role",
    org: "TODO — company",
    body: "TODO — what you owned, and what changed because of it.",
  },
  {
    period: "TODO",
    title: "TODO — role",
    org: "TODO — company",
    body: "TODO — what you owned, and what changed because of it.",
  },
];

/** Only fully written entries reach the page. */
export const publishedExperience = experience.filter((job) => job.period !== "TODO");

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];
