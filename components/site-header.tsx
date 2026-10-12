import Link from "next/link";
import { site } from "@/lib/content";
import { ContactIcon, contacts } from "./contacts";

/** Thin sticky bar: who, and how to reach him. The work does the rest. */
export function SiteHeader({ showName = true }: { showName?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="rail flex h-14 items-center justify-between gap-4">
        {showName ? (
          <Link href="/" className="min-w-0 truncate text-[14px] font-semibold text-fg">
            {site.name}
            <span className="ml-2 hidden font-normal text-fg-3 sm:inline">{site.role}</span>
          </Link>
        ) : (
          <span className="text-[14px] text-fg-3">{site.role}</span>
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
        </nav>
      </div>
    </header>
  );
}
