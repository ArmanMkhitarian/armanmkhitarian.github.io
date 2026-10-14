/** Types and media helpers shared by every language of the site. */

export type Locale = "ru" | "en";

export const locales: Locale[] = ["ru", "en"];

/** Path of a page in a given language: Russian lives at the root, English under /en. */
export const localePath = (locale: Locale, path: string) =>
  locale === "en" ? `/en${path}` : path;

export type Tag = "dev" | "growth" | "ai" | "materials" | "games";

export type Link = { label: string; href: string };

export type Media =
  | {
      kind: "image";
      src: string;
      w: number;
      h: number;
      caption?: string;
      small?: boolean;
    }
  | {
      kind: "video";
      src: string;
      poster: string;
      w: number;
      h: number;
      caption?: string;
    }
  | { kind: "playable"; src: string; caption?: string };

export type GalleryGroup = { title: string; note?: string; items: Media[] };

export type Project = {
  slug: string;
  name: string;
  type: string;
  tags: Tag[];
  /** One line for the home tile. */
  pitch: string;
  /** Biggest proof, shown on the tile. */
  metric: { value: string; label: string };
  /** What the tile shows: a looping video, a fan of phones, or a wide shot. */
  cover:
    | { kind: "video"; src: string; poster: string; sides?: [string, string] }
    | { kind: "phones"; srcs: string[] }
    | { kind: "wide"; src: string };
  /** Tile glow; the products bring the colour, the site stays neutral. */
  tint: string;
  task: string;
  /** Three or four short points, not a paragraph. */
  did: string[];
  result: string;
  metrics: { value: string; label: string }[];
  gallery: GalleryGroup[];
  links: Link[];
  tech: string[];
};

export const img = (
  slug: string,
  name: string,
  w: number,
  h: number,
  caption?: string,
  small?: boolean,
): Media => ({
  kind: "image",
  src: `/work/${slug}/${name}.webp`,
  w,
  h,
  caption,
  small,
});

export const vid = (
  slug: string,
  name: string,
  caption?: string,
  w = 720,
  h = 1280,
): Media => ({
  kind: "video",
  src: `/work/${slug}/${name}.mp4`,
  poster: `/work/${slug}/${name}.webp`,
  w,
  h,
  caption,
});

export type Site = {
  name: string;
  role: string;
  email: string;
  telegram: string;
  telegramHandle: string;
  linkedin: string;
  url: string;
};

export type Content = {
  locale: Locale;
  site: Site;
  hero: {
    intro: string;
    facts: { icon: string; value: string; label: string }[];
  };
  skills: {
    title: string;
    tag: Tag;
    image: string;
    tint: string;
    tags: string[];
  }[];
  tags: { id: Tag; label: string }[];
  projects: Project[];
  experience: { title: string; items: { period: string; text: string }[] };
  ui: {
    projects: string;
    all: string;
    filterAria: string;
    seeProjects: string;
    see: string;
    allProjects: string;
    task: string;
    did: string;
    result: string;
    tech: string;
    next: string;
    contact: string;
    openSeparately: string;
    email: string;
    switchTo: string;
    ogImage: string;
    ogLocale: string;
    description: string;
  };
};
