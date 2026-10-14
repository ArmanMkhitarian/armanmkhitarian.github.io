import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";

const { site } = getContent("ru");

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
