import Link from "next/link";
import { getContent, type Locale } from "@/lib/content";
import { ContactIcon, getContacts } from "./contacts";

type Props = {
  locale: Locale;
  /** Same page in the other language. */
  altHref: string;
  showName?: boolean;
};

/** Thin sticky bar: who, how to reach him, and the language switch. The work does the rest. */
export function SiteHeader({ locale, altHref, showName = true }: Props) {
  const { site, ui } = getContent(locale);
  const contacts = getContacts(locale);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="rail flex h-14 items-center justify-between gap-4">
        {showName ? (
          <Link
            href={locale === "en" ? "/en/" : "/"}
            className="min-w-0 truncate text-[14px] font-semibold text-fg"
          >
            {site.name}
            <span className="ml-2 hidden font-normal text-fg-3 sm:inline">
              {site.role}
            </span>
          </Link>
        ) : (
          <span className="min-w-0 truncate text-[14px] text-fg-3">
            {site.role}
          </span>
        )}
        <nav className="flex shrink-0 items-center gap-2">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={c.label}
              title={c.label}
              className="flex h-9 items-center gap-2 rounded-full border border-line-2 px-[9px] text-[13px] text-fg-2 transition-colors hover:border-accent hover:text-accent sm:px-3.5"
            >
              <ContactIcon icon={c.icon} />
              <span className="hidden sm:inline">{c.label}</span>
            </a>
          ))}
          {/* Plain <a>: the two languages use different root layouts, so this is a full page load anyway. */}
          <a
            href={altHref}
            hrefLang={locale === "en" ? "ru" : "en"}
            lang={locale === "en" ? "ru" : "en"}
            className="flex h-9 items-center rounded-full bg-fg px-3 text-[13px] font-semibold text-bg transition-opacity hover:opacity-85"
          >
            {ui.switchTo}
          </a>
        </nav>
      </div>
    </header>
  );
}
