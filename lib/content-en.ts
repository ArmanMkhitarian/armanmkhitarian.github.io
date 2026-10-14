import { img, vid, type Content } from "./content-shared";

/** Every English word on the site. Same projects, media and numbers as content-ru.ts. */
export const en: Content = {
  locale: "en",
  site: {
    name: "Arman Mkhitarian",
    role: "Product Engineer",
    email: "arman.mkhitaryan.1997@mail.ru",
    telegram: "https://t.me/armanmkhitarian",
    telegramHandle: "@armanmkhitarian",
    linkedin: "https://www.linkedin.com/in/armanmkhitarian",
    url: "https://arman.mikitari.com",
  },
  hero: {
    intro:
      "I build mobile and web apps and help them grow with ads and AI content",
    facts: [
      {
        icon: "/work/skills/icon-downloads.webp",
        value: "50K+ downloads",
        label: "of my apps",
      },
      {
        icon: "/work/skills/icon-apps.webp",
        value: "9 apps",
        label: "on Google Play and the App Store",
      },
      {
        icon: "/work/skills/icon-experience.webp",
        value: "8 years",
        label: "of commercial development",
      },
    ],
  },
  skills: [
    {
      title: "Development",
      tag: "dev",
      image: "/work/skills/dev.webp",
      tint: "#7C5CFF",
      tags: ["iOS and Android", "SaaS", "AI agents", "Payments"],
    },
    {
      title: "Growth and ads",
      tag: "growth",
      image: "/work/skills/promo.webp",
      tint: "#3D7BFF",
      tags: ["Google Ads", "ASO", "Outreach", "Unit economics"],
    },
    {
      title: "AI content",
      tag: "ai",
      image: "/work/skills/content.webp",
      tint: "#3FB8A6",
      tags: ["AI character", "Short videos", "Voiceover", "Auto-posting"],
    },
    {
      title: "Marketing assets",
      tag: "materials",
      image: "/work/skills/materials.webp",
      tint: "#8A5CFF",
      tags: ["Banners", "Screenshots", "Playables", "Landing pages"],
    },
  ],
  tags: [
    { id: "dev", label: "Development" },
    { id: "growth", label: "Growth and ads" },
    { id: "ai", label: "AI" },
    { id: "materials", label: "Marketing assets" },
    { id: "games", label: "Games" },
  ],
  projects: [
    {
      slug: "tutchat",
      name: "TutChat",
      type: "Offline messenger",
      tags: ["dev", "growth", "materials"],
      pitch:
        "Chat and send files phone to phone, with no internet and no server",
      metric: { value: "40K+", label: "downloads" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/tutchat/files.webp",
          "/work/tutchat/hero.webp",
          "/work/tutchat/nearby.webp",
        ],
      },
      tint: "#7C5CFF",
      task: "Keep people connected where there is no signal: in the mountains, on a plane, during outages",
      did: [
        "Native apps in Kotlin and Swift",
        "Phone-to-phone link over Bluetooth and Wi-Fi Direct, no server",
        "44 languages and search optimization for Google Play and the App Store",
        "A discount ladder for Pro and direct payments for Russia",
      ],
      result:
        "40K+ downloads and #1 on Google Play for “offline messenger” in 4 countries, all organic",
      metrics: [
        { value: "40K+", label: "downloads, all organic" },
        { value: "#1", label: "in Google Play search in 4 countries" },
        { value: "~560", label: "visitors a day from search" },
      ],
      gallery: [
        {
          title: "App store screenshots",
          items: [
            img("tutchat", "hero", 739, 1600),
            img("tutchat", "files", 739, 1600),
            img("tutchat", "nearby", 739, 1600),
            img("tutchat", "privacy", 739, 1600),
          ],
        },
        {
          title: "AI video",
          items: [
            vid("tutchat", "reel-plane", "On a plane: files with no signal"),
          ],
        },
      ],
      links: [
        { label: "tutchat.ru", href: "https://tutchat.ru" },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.tutchat.app",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/tutchat/id6756493585",
        },
      ],
      tech: [
        "Kotlin",
        "Swift",
        "Bluetooth / Wi-Fi Direct",
        "Google Play Billing",
        "Robokassa",
        "ASO",
      ],
    },
    {
      slug: "foodino",
      name: "Foodino",
      type: "Ordering SaaS for cafes",
      tags: ["dev", "ai", "growth"],
      pitch:
        "An ordering page for every cafe, a staff app, AI menu import from a photo and an AI sales agent",
      metric: { value: "~90", label: "orders a month per venue" },
      cover: { kind: "wide", src: "/work/foodino/storefront.webp" },
      tint: "#FF6B34",
      task: "Cafes take orders by phone, and delivery aggregators charge a big commission",
      did: [
        "A branded ordering page on its own subdomain for every venue",
        "A staff app for Android and iOS: a new order rings like a phone call",
        "AI imports the menu from a photo: OCR → YandexGPT → a ready menu with sizes",
        "An AI agent finds cafes, writes to them and sorts the replies",
      ],
      result:
        "Venues get about 90 orders a month on average, with no aggregator commission. The agent picked 77 good fits out of 941 cafes, at $0.003 per email",
      metrics: [
        { value: "~90", label: "orders a month per venue on average" },
        { value: "941 → 77", label: "venues after the agent’s screening" },
        { value: "$0.003", label: "per email, down from $0.02" },
      ],
      gallery: [
        {
          title: "Ordering page for guests",
          items: [
            img(
              "foodino",
              "storefront",
              1280,
              699,
              "A venue’s ordering page on desktop",
            ),
            img("foodino", "dish", 760, 1045, "A dish with sizes and sauces"),
            img(
              "foodino",
              "client-mobile",
              500,
              1000,
              "A live client on mobile",
            ),
          ],
        },
        {
          title: "App for the venue",
          items: [
            img("foodino", "app-order", 739, 1600, "Incoming order"),
            img("foodino", "app-feed", 739, 1600, "Order feed and revenue"),
          ],
        },
        {
          title: "Promotion",
          items: [img("foodino", "promo", 1400, 1050, "Ad card")],
        },
      ],
      links: [
        { label: "foodino.ru", href: "https://foodino.ru" },
        { label: "Live client", href: "https://schedry-vkus.foodino.ru" },
        { label: "Demo cafe", href: "https://demo.foodino.ru" },
      ],
      tech: [
        "C# / .NET",
        "PostgreSQL",
        "Flutter",
        "Yandex Cloud: OCR and YandexGPT",
        "Python",
        "Linux, nginx, CI",
      ],
    },
    {
      slug: "ai-video",
      name: "AI videos for social media",
      type: "Short videos that promote apps",
      tags: ["ai", "growth"],
      pitch:
        "Videos for YouTube, Instagram and Facebook, from idea and generation to auto-posting",
      metric: { value: "63%", label: "retention on YouTube" },
      cover: {
        kind: "video",
        src: "/work/gus/pillow.mp4",
        poster: "/work/gus/pillow.webp",
        sides: ["/work/gus/sprint.webp", "/work/gus/cat.webp"],
      },
      tint: "#3FB8A6",
      task: "Videos that opened on the app screen didn’t hook anyone: viewers scrolled past, retention was 17–19%",
      did: [
        "I write hooks and scripts and generate scenes in Google Vids",
        "Created a recurring AI character for a video series",
        "A script drops in the app recording, voiceover, subtitles and the end card",
        "Videos go out in three languages on a schedule",
      ],
      result:
        "Retention grew to 63%, 3.5 times higher. The pipeline publishes to YouTube, Instagram and Facebook on its own",
      metrics: [
        { value: "63%", label: "retention vs 17–19% for regular videos" },
        { value: "3", label: "languages: English, Spanish, Portuguese" },
        { value: "3", label: "platforms with auto-posting" },
      ],
      gallery: [
        {
          title: "Series with an AI character",
          note: "Hook with the character → the app on his phone → end card with download links",
          items: [
            vid("gus", "pillow", "Pillow → StopTime"),
            vid("gus", "sprint", "Stadium → StopTime"),
            vid("gus", "cat", "Cat and vase → StopTime"),
            vid("gus", "barber", "Barbershop → Block Pop"),
          ],
        },
        {
          title: "Other AI videos",
          items: [
            vid(
              "tutchat",
              "reel-plane",
              "TutChat: files with no signal on a plane",
            ),
          ],
        },
      ],
      links: [
        {
          label: "Watch on YouTube",
          href: "https://youtube.com/shorts/YiyymAXRtTM",
        },
      ],
      tech: [
        "Google Vids",
        "Python",
        "ffmpeg",
        "Voiceover and subtitles",
        "YouTube / Instagram API",
        "Linux, systemd",
      ],
    },
    {
      slug: "stoptime",
      name: "StopTime",
      type: "Time perception game",
      tags: ["games", "dev", "growth", "materials"],
      pitch:
        "A one-mechanic game that grew into a live product: duels, tournaments, leaderboards and 27 languages",
      metric: { value: "10K+", label: "downloads" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/stoptime/party.webp",
          "/work/stoptime/hero.webp",
          "/work/stoptime/modes.webp",
        ],
      },
      tint: "#3D7BFF",
      task: "A game built on one mechanic has to keep players coming back and make money",
      did: [
        "8 modes, online duels, tournaments and a party mode on one phone",
        "A global leaderboard, avatars and streaks",
        "27 languages with right-to-left support",
        "Store listing optimization and A/B tests, decisions based on BigQuery data",
      ],
      result:
        "10K+ downloads and up to 900 players a day. The new icon brought 20% more installs",
      metrics: [
        { value: "10K+", label: "downloads" },
        { value: "+20%", label: "installs from the new icon" },
        { value: "27", label: "languages, including Arabic right-to-left" },
      ],
      gallery: [
        {
          title: "App store screenshots",
          items: [
            img("stoptime", "hero", 900, 1600),
            img("stoptime", "gameplay", 900, 1600),
            img("stoptime", "home", 900, 1600),
            img("stoptime", "party", 900, 1600),
            img("stoptime", "modes", 900, 1600),
          ],
        },
        {
          title: "Icon A/B test",
          note: "Google Play, 359 installs vs 300",
          items: [
            img("stoptime", "icon-a", 1254, 1254, "Before", true),
            img("stoptime", "icon-b", 1254, 1254, "After: +20% installs", true),
          ],
        },
        {
          title: "Avatars and streaks",
          items: [img("stoptime", "skins", 1254, 1254, undefined, true)],
        },
      ],
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.stoptime.app",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/stoptime-time-perception-game/id6772400704",
        },
      ],
      tech: ["Flutter", "Firebase", "BigQuery", "Google Play A/B tests", "ASO"],
    },
    {
      slug: "memorizepath",
      name: "MemorizePath",
      type: "Memory games",
      tags: ["games", "growth", "materials"],
      pitch:
        "Five memory mini-games and a full set of ads for them: videos, banners, playables",
      metric: { value: "38", label: "ad creatives" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/memorizepath/path.webp",
          "/work/memorizepath/hero.webp",
          "/work/memorizepath/modes.webp",
        ],
      },
      tint: "#8A5CFF",
      task: "Promote the mini-games with ads across different formats and networks",
      did: [
        "Apps in Kotlin and SwiftUI with five modes",
        "38 ad creatives: 20 videos, 15 banners and 3 playables",
        "Every creative in three formats: 9:16, 1:1 and 16:9 / 1200×628",
        "Playables: the game in a single ~300 KB HTML file with MRAID for ad networks",
        "Google Ads install campaigns with country tests",
      ],
      result:
        "38 ad creatives in every network format, and you can play all three playables right on this page",
      metrics: [
        { value: "38", label: "creatives: 20 videos, 15 banners, 3 playables" },
        { value: "~300 KB", label: "playable in a single file" },
        { value: "3", label: "formats for every creative" },
      ],
      gallery: [
        {
          title: "Playable ads",
          note: "Play them right here. The Install button opens Google Play",
          items: [
            {
              kind: "playable",
              src: "https://mikitari.com/playables/memorizepath-path/",
              caption: "Memorize the path",
            },
            {
              kind: "playable",
              src: "https://mikitari.com/playables/memorizepath-colors/",
              caption: "Memorize the colors",
            },
            {
              kind: "playable",
              src: "https://mikitari.com/playables/memorizepath-focus/",
              caption: "Spot the odd tile",
            },
          ],
        },
        {
          title: "Ad videos",
          note: "Every video is cut in 9:16, 1:1 and 16:9",
          items: [
            vid("memorizepath", "ad", "All modes, 9:16"),
            vid("memorizepath", "colors-9x16", "Colors, 9:16"),
            vid("memorizepath", "focus-9x16", "Focus, 9:16"),
            vid("memorizepath", "combo6-9x16", "Short cut, 9:16"),
            vid("memorizepath", "combo-1x1", "All modes, 1:1", 960, 960),
          ],
        },
        {
          title: "Banners",
          note: "One system for five games in 1:1, 4:5 and 1200×628",
          items: [
            img("memorizepath", "banner-path-1200x1500", 960, 1200),
            img("memorizepath", "banner-colors-1200x1500", 960, 1200),
            img("memorizepath", "banner-brand-1200x1200", 1200, 1200),
            img("memorizepath", "banner-schulte-1200x1200", 1200, 1200),
            img("memorizepath", "banner-focus-1200x628", 1200, 628),
            img("memorizepath", "banner-colors-1200x628", 1200, 628),
          ],
        },
        {
          title: "App store screenshots",
          items: [
            img("memorizepath", "hero", 739, 1600),
            img("memorizepath", "modes", 739, 1600),
            img("memorizepath", "path", 739, 1600),
            img("memorizepath", "colors", 739, 1600),
            img("memorizepath", "schulte", 739, 1600),
          ],
        },
      ],
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.memorizepath.android",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/memorizepath-memory-game/id6760545214",
        },
      ],
      tech: ["Kotlin", "SwiftUI", "HTML5 Canvas", "MRAID", "Firebase"],
    },
    {
      slug: "attic",
      name: "Attic",
      type: "Swipe-to-clean photo app, subscription",
      tags: ["dev", "growth", "materials"],
      pitch:
        "Sort thousands of photos in an evening: left to archive, right to keep",
      metric: { value: "27", label: "languages" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/attic/archive.webp",
          "/work/attic/hero.webp",
          "/work/attic/keep.webp",
        ],
      },
      tint: "#F2994A",
      task: "Thousands of similar photos pile up on a phone, and sorting them one by one is boring",
      did: [
        "Swipe left to archive, right to keep",
        "Grouping of similar shots and a counter of freed space",
        "Subscription with a trial via RevenueCat",
        "App and website in 27 languages, automated social videos",
      ],
      result: "Live on the App Store and Google Play with a subscription",
      metrics: [
        { value: "27", label: "languages in the app and on the site" },
        { value: "iOS + Android", label: "one codebase" },
        { value: "Subscription", label: "with a trial via RevenueCat" },
      ],
      gallery: [
        {
          title: "App store screenshots",
          items: [
            img("attic", "hero", 900, 1600),
            img("attic", "archive", 900, 1600),
            img("attic", "keep", 900, 1600),
            img("attic", "freed", 900, 1600),
          ],
        },
      ],
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/attic-photo-cleaner-swipe/id6797534856",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.mikitari.attic",
        },
      ],
      tech: ["Flutter", "RevenueCat", "Firebase", "Python + ffmpeg for videos"],
    },
    {
      slug: "nammu",
      name: "Nammu",
      type: "Websites for local businesses",
      tags: ["dev", "ai", "growth"],
      pitch:
        "A website for a specific salon or cafe, built from their listings and social pages",
      metric: { value: "11", label: "sites launched" },
      cover: { kind: "wide", src: "/work/nammu/desktop.webp" },
      tint: "#B08A6E",
      task: "Many salons and cafes have no website, only a social page and a map listing",
      did: [
        "I collect photos, prices and reviews from their listings and social pages",
        "Copy and design are made with AI, each site goes live on its own subdomain with SSL",
        "Clients come from the same AI outreach agent as Foodino",
      ],
      result:
        "A site for the ParaLinii beauty salon, a client from the outreach, is built and live",
      metrics: [
        { value: "11", label: "sites launched" },
        { value: "Own subdomain", label: "and SSL for each" },
      ],
      gallery: [
        {
          title: "ParaLinii beauty salon",
          items: [
            img("nammu", "desktop", 1280, 800, "Desktop"),
            img("nammu", "mobile", 375, 812, "Mobile"),
          ],
        },
      ],
      links: [
        { label: "Open the site", href: "https://paralinii.nammu.ru" },
        { label: "nammu.ru", href: "https://nammu.ru" },
      ],
      tech: [".NET", "HTML / CSS", "Python", "Linux, nginx", "Let's Encrypt"],
    },
    {
      slug: "puzzles",
      name: "Collapse and Block Pop",
      type: "Casual puzzle games",
      tags: ["games", "materials"],
      pitch:
        "Two puzzle games with ad monetization and decisions driven by unit economics",
      metric: { value: "$0.04", label: "LTV vs CPI $1–3" },
      cover: {
        kind: "phones",
        srcs: [
          "/work/puzzles/collapse-3.webp",
          "/work/puzzles/collapse-1.webp",
          "/work/puzzles/collapse-2.webp",
        ],
      },
      tint: "#4FC3F7",
      task: "Test the casual puzzle genre with ad monetization",
      did: [
        "Collapse: clear every block by tapping groups, with ice, bombs and walls",
        "Block Pop: blocks with combos and high scores",
        "Ads with mediation, analytics in Firebase and BigQuery",
      ],
      result:
        "LTV per install of $0.04 against a CPI of $1–3, so I chose not to buy traffic at a loss",
      metrics: [
        { value: "$0.04", label: "LTV per install" },
        {
          value: "$1–3",
          label: "CPI in the US, paid traffic wouldn’t pay off",
        },
      ],
      gallery: [
        {
          title: "Collapse",
          items: [
            img("puzzles", "collapse-banner", 1024, 500),
            img("puzzles", "collapse-1", 740, 1600),
            img("puzzles", "collapse-2", 740, 1600),
            img("puzzles", "collapse-3", 740, 1600),
          ],
        },
        {
          title: "Block Pop",
          items: [
            img("puzzles", "blockpop-1", 739, 1600),
            img("puzzles", "blockpop-2", 739, 1600),
            img("puzzles", "blockpop-3", 739, 1600),
          ],
        },
      ],
      links: [
        {
          label: "Collapse on Google Play",
          href: "https://play.google.com/store/apps/details?id=com.mikitari.collapse",
        },
        {
          label: "Block Pop on Google Play",
          href: "https://play.google.com/store/apps/details?id=com.mikitari.blockpop",
        },
      ],
      tech: ["Flutter", "Ad mediation", "Firebase", "BigQuery"],
    },
  ],
  experience: {
    title: "Experience",
    items: [
      {
        period: "Now",
        text: "My own products: Miki Tari app studio, Foodino SaaS, Nammu websites",
      },
      {
        period: "8 years",
        text: "Commercial development: .NET backend, enterprise systems, integrations, monitoring",
      },
    ],
  },
  ui: {
    projects: "Projects",
    all: "All",
    filterAria: "Filter projects",
    seeProjects: "See projects",
    see: "View →",
    allProjects: "← All projects",
    task: "Challenge",
    did: "What I did",
    result: "Result",
    tech: "Stack",
    next: "Next project",
    contact: "Get in touch",
    openSeparately: "open separately",
    email: "Email",
    switchTo: "RU",
    ogImage: "/og-en.png",
    ogLocale: "en_US",
    description:
      "Product Engineer. I build mobile and web apps and help them grow with ads and AI content",
  },
};
