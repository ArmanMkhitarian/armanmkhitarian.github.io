"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

const sectionIds = nav.map((item) => item.href.slice(1));

/** Sticky header with a scroll-progress line and current-section highlight. */
export function SiteHeader() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.05, 0.3] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="rail flex h-14 items-center justify-between gap-6">
        <a href="#top" className="font-mono text-[13px] text-fg">
          {site.name.toLowerCase().replace(" ", "_")}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`link text-[13px] ${active === item.href.slice(1) ? "nav-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="rounded-lg border border-line-2 px-3.5 py-1.5 text-[13px] text-fg transition-colors hover:border-accent hover:text-accent-hi"
        >
          Hire me
        </a>
      </div>
      <span
        className="progress"
        style={{ "--progress": progress } as React.CSSProperties}
        aria-hidden="true"
      />
    </header>
  );
}
