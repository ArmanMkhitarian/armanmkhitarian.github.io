"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getContent, localePath, type Locale, type Tag } from "@/lib/content";
import { Cover } from "./cover";
import { Reveal } from "./reveal";

const tagIds: Tag[] = ["dev", "growth", "ai", "materials", "games"];

const EVENT = "work-filter";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

function readFilter(): Tag | null {
  const f = new URLSearchParams(window.location.search).get("f");
  return f && tagIds.includes(f as Tag) ? (f as Tag) : null;
}

/**
 * Project tiles with a tag filter. The filter lives in `?f=` so a cover letter
 * can link straight to, say, only the AI work.
 */
/** Sets `?f=` in place and tells the grid; used by the filter chips and the skill cards above. */
export function setWorkFilter(next: Tag | null) {
  const url = new URL(window.location.href);
  if (next) url.searchParams.set("f", next);
  else url.searchParams.delete("f");
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(EVENT));
}

export function WorkGrid({ locale }: { locale: Locale }) {
  const { projects, tags, ui } = getContent(locale);
  const tagLabel = Object.fromEntries(
    tags.map((t) => [t.id, t.label]),
  ) as Record<Tag, string>;
  const filter = useSyncExternalStore(subscribe, readFilter, () => null);
  const choose = setWorkFilter;

  const shown = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <>
      <div
        className="mb-6 flex flex-wrap gap-2"
        role="group"
        aria-label={ui.filterAria}
      >
        {[
          { id: null, label: ui.all } as { id: Tag | null; label: string },
          ...tags,
        ].map((t) => {
          const on = filter === t.id;
          return (
            <button
              key={t.label}
              type="button"
              onClick={() => choose(t.id)}
              aria-pressed={on}
              className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
                on
                  ? "border-fg bg-fg text-bg"
                  : "border-line-2 text-fg-2 hover:border-fg-3 hover:text-fg"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 110} className="h-full">
            <Link
              href={localePath(locale, `/work/${p.slug}/`)}
              className="panel group flex h-full flex-col transition-[translate,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_26px_50px_-28px_rgba(0,0,0,.4)]"
            >
              <Cover project={p} />
              <div className="flex flex-1 flex-col border-t border-line p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-[20px] font-semibold leading-tight tracking-[-0.02em] text-fg">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-[13.5px] text-fg-3">{p.type}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div
                      className="font-display text-[24px] font-semibold leading-none"
                      style={{
                        color: `color-mix(in srgb, ${p.tint} 72%, #000)`,
                      }}
                    >
                      {p.metric.value}
                    </div>
                    <div className="mt-1 max-w-[160px] text-[11.5px] leading-tight text-fg-3 [text-wrap:balance]">
                      {p.metric.label}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-fg-2">
                  {p.pitch}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface-2 px-2 py-0.5 text-[11.5px] text-fg-3"
                    >
                      {tagLabel[t]}
                    </span>
                  ))}
                  <span className="ml-auto text-[13px] text-fg-3 transition-colors group-hover:text-accent">
                    {ui.see}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
