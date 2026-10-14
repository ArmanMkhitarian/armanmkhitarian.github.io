import type { Metadata, Viewport } from "next";
import { getContent, type Locale } from "./content";

/** Page metadata for one language, with hreflang links to the other. */
export function layoutMetadata(locale: Locale): Metadata {
  const { site, ui } = getContent(locale);
  const title = `${site.name} | ${site.role}`;
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description: ui.description,
    alternates: {
      canonical: locale === "en" ? "/en/" : "/",
      languages: { ru: "/", en: "/en/", "x-default": "/" },
    },
    openGraph: {
      title,
      description: ui.description,
      url: locale === "en" ? "/en/" : "/",
      siteName: site.name,
      type: "website",
      locale: ui.ogLocale,
      images: [{ url: ui.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: ui.description,
      images: [ui.ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#F3F4F6",
  colorScheme: "light",
};
