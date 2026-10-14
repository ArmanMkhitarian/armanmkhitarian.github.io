import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const { site, projects } = getContent("ru");
  const page = (path: string, priority: number) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
    alternates: {
      languages: { ru: `${site.url}${path}`, en: `${site.url}/en${path}` },
    },
  });
  return [page("/", 1), ...projects.map((p) => page(`/work/${p.slug}/`, 0.8))];
}
