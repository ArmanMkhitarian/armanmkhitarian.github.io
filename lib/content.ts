/**
 * Single entry point for the site's words. Each language lives in its own file
 * (content-ru.ts, content-en.ts); components only lay the content out.
 */
import { en } from "./content-en";
import { ru } from "./content-ru";
import type { Content, Locale } from "./content-shared";

export * from "./content-shared";

const byLocale: Record<Locale, Content> = { ru, en };

export const getContent = (locale: Locale): Content => byLocale[locale];
